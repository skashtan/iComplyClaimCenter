package gw.api.financials.escalation

uses gw.api.database.DBDateRange
uses gw.api.database.Query
uses gw.pl.persistence.core.Key
uses gw.processes.WorkQueueBase

uses java.sql.Date

@Export
/**
 * An optional WorkQueue implementation of the Financials Escalation process. It's not enabled by default and the
 * corresponding BatchProcess ({@link FinancialsEscalationMonitor) is used instead. To activate it and thereby override
 * the BatchProcess, all you need to do is to uncomment its entry in the work-queue.xml file.
 */
public class FinancialsEscalationWorkQueue extends WorkQueueBase<Claim, StandardWorkItem> {

  construct() {
    super(BatchProcessType.TC_FINANCIALSESC, StandardWorkItem, Claim)
  }

  /**
   * For a given Claim, represented by the WorkItem, call {@link Check#requestCheck()} on all eligible Checks associated
   * with it. To see how the eligibility is determined, see {@link #getChecksQualifyingEscalationQuery()}.
   * @param workItem
   */
  override function processWorkItem(workItem : StandardWorkItem) {
    gw.transaction.Transaction.runWithNewBundle( \ bundle -> {
      ChecksQualifyingEscalationQuery
          .compare(Check#Claim, Equals, new Key(Claim, workItem.Target))
          .select()
          .each( \ escalatableCheck -> {
            try {
              bundle.add(escalatableCheck).requestCheck()
            }  catch (e: Exception) {
              throw new Exception(String.format("Check ID: %s. ", {escalatableCheck.PublicID}), e)
            }
          })
    })
  }

  /*
   * Fetches all Claims that have at least one escalatable Check on them, and are not already picked up for escalation.
   * The latter condition can be translated as:
   *   "there should be not be an existing WorkItem having a Status other than FAILED, pointing to this Claim"
   *
   */
  override function findTargets() : Iterator<Claim> {
    return excludeClaimsAlreadyPickedUpForEscalation(ClaimsHavingEscalatableChecksQuery)
        .select()
        .iterator()
  }

  // Internal Methods

  /*
   * Fetches all Claims that have at least one escalatable Check on them.
   */
  internal property get ClaimsHavingEscalatableChecksQuery(): Query<Claim> {
    var claimsQuery = Query.make(Claim)
    claimsQuery.subselect(Claim#ID, CompareIn, ChecksQualifyingEscalationQuery, Check#Claim)
    return claimsQuery
  }

  /*
   * Fetches all escalatable checks. In order to be escalatable, a Check should:
   *   - Have a Status of Awaiting Submission
   *       AND
   *   - Have ScheduledSendDate of today or earlier
   *       AND
   *   - (Not associated with a BulkInvoice
   *       OR
   *   - Associated with one, but has:
   *       - PendEscalationForBulk not set to TRUE
   *           AND
   *       - BulkInvoiceItemInfo.BulkInvoiceItem.Status not set to DRAFT
   *     )
   */
  internal property get ChecksQualifyingEscalationQuery() : Query<Check> {
    var qualifyingChecksFinderQuery = Query.make(Check)

    // Check's status should be TransactionStatus.TC_AWAITINGSUBMISSION.
    qualifyingChecksFinderQuery.compare(Check#Status, Equals, TC_AWAITINGSUBMISSION)

    // Send date of the check should be today or earlier.
    qualifyingChecksFinderQuery.compare(Check#ScheduledSendDate, new DBDateRange(null, Date.Now, true))

    addBIRelatedRestrictions(qualifyingChecksFinderQuery)

    return qualifyingChecksFinderQuery
  }

  /*
   Check should be:
     Not associated with a BulkInvoice (i.e., Check.BulkInvoiceItemInfo should be null)
       -OR-
     If associated with one, then:
       Check.PendEscalationForBulk should be FALSE/null
         -AND-
       Check.BulkInvoiceItemInfo.BulkInvoiceItem.Status should not be DRAFT
  */
  internal function addBIRelatedRestrictions(qualifyingChecksFinderQuery: Query<Check>): Query<Check> {
    var draftBulkInvoiceItemInfoQuery = Query.make(BulkInvoiceItemInfo)
    draftBulkInvoiceItemInfoQuery.join(BulkInvoiceItemInfo#BulkInvoiceItem)
        .compare(BulkInvoiceItem#Status, Equals, TC_DRAFT)

    qualifyingChecksFinderQuery.or( \ verifyBIItemOr -> {
      // Either not associated with a BulkInvoice ..
      verifyBIItemOr.compare(Check#BulkInvoiceItemInfo, Equals, null)
      // .. OR ( is associated with one..
      verifyBIItemOr.and( \ draftBIItemAnd -> {
        // .. AND Check.BulkInvoiceItemInfo.BulkInvoiceItem.Status should not be DRAFT
        draftBIItemAnd.subselect(Check#BulkInvoiceItemInfo, CompareNotIn, draftBulkInvoiceItemInfoQuery, BulkInvoiceItemInfo#ID)
        // .. AND Check.PendEscalationForBulk is not set).
        draftBIItemAnd.or( \ pendEscOr -> {
          pendEscOr.compare(Check#PendEscalationForBulk, Equals, false)
          pendEscOr.compare(Check#PendEscalationForBulk, Equals, null)
        })
      })
    })

    return qualifyingChecksFinderQuery
  }

  /*
   * Adds a restriction to skip Claims that are referred to by existing "active" WorkItems. Active WorkItems are any
   * that have a Status other than FAILED.
   */
  internal function excludeClaimsAlreadyPickedUpForEscalation(claimsQuery: Query<Claim>): Query<Claim> {
    var existingEscalationWorkItemsQuery = Query.make(StandardWorkItem)
        .compare(StandardWorkItem#QueueType, Equals, TC_FINANCIALSESC)
        .compare(StandardWorkItem#Status, NotEquals, WorkItemStatusType.TC_FAILED)
    claimsQuery.subselect(Claim#ID, CompareNotIn, existingEscalationWorkItemsQuery, StandardWorkItem#Target)

    return claimsQuery
  }

}
