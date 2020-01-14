package acc.mir.batch

uses acc.mir.helper.MirActivityUtil
uses acc.mir.helper.MirReportableUtil
uses acc.mir.helper.MirReqBuilder
uses acc.mir.helper.MirRespProcessor
uses acc.mir.webservice.mirsubmitfs.dataservice.DataService
uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.filters.StandardQueryFilter
uses gw.api.financials.CurrencyAmount
uses gw.api.financials.FinancialsCalculations
uses gw.api.locale.DisplayKey
uses gw.api.util.DateUtil
uses gw.pl.persistence.core.Bundle
uses gw.processes.WorkQueueBase
uses gw.util.PropertiesFileAccess
uses typekey.Contact
uses gw.transaction.Transaction


/**
 * Created by Sara.Kashtan on 9/30/2019.
 */
class MirSubmitClaimsToFSWorkQueue extends WorkQueueBase<Exposure, MirSubmitWorkItem_Acc> {
  var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")

  construct() {
    super(BatchProcessType.TC_MIRSUBMITCLAIMSTOFS, MirSubmitWorkItem_Acc, Exposure)
  }

  override function findTargets() : Iterator<Exposure> {
    // get props as required
    var minReportingYear = Integer.valueOf(props.getProperty("MIR.MIN.SEND.DATE.YYYY"))
    var minReportingMonth = Integer.valueOf(props.getProperty("MIR.MIN.SEND.DATE.MM"))
    var minReportingDay = Integer.valueOf(props.getProperty("MIR.MIN.SEND.DATE.DD"))
    var minReportingDate = DateUtil.createDateInstance(minReportingMonth, minReportingDay, minReportingYear)

    // get exposures to process
    var exposureQuery = Query.make(Exposure)
    exposureQuery.or(\criteria -> {
      criteria.compare(Exposure#ReOpenDate, Relop.GreaterThanOrEquals, minReportingDate)
      criteria.compare(Exposure#CloseDate, Relop.GreaterThanOrEquals, minReportingDate)
      criteria.compare(Exposure#CloseDate, Relop.Equals, null)
    })
    exposureQuery.or(\criteria -> {
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_BODILYINJURYDAMAGE)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_EMPLOYERLIABILITY)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_GENERALDAMAGE)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_MEDPAY)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_WCINJURYDAMAGE)
    })

    var claimantDenorm = exposureQuery.outerJoin(Exposure#ClaimantDenorm).or(\criteria -> {
      criteria.compare(entity.Contact#Subtype, Relop.Equals, Contact.TC_PERSON)
      criteria.compare(entity.Contact#Subtype, Relop.Equals, null)
    })

    var claim = exposureQuery.join(Exposure#Claim).compare(Claim#IncidentReport, Relop.Equals, false)
    var policy = claim.join(Claim#Policy).compare(Policy#Status, Relop.Equals, PolicyStatus.TC_INFORCE)

    return exposureQuery.select().iterator()
  }

  override function createWorkItem(exposure : Exposure, safeBundle : Bundle) : MirSubmitWorkItem_Acc {
    var mirSubmitWorkItem_Acc = new MirSubmitWorkItem_Acc(safeBundle)
    mirSubmitWorkItem_Acc.Exposure = exposure
    return mirSubmitWorkItem_Acc
  }

  override function processWorkItem(mirSubmitWorkItem_Acc : MirSubmitWorkItem_Acc) {
    var util = new MirReportableUtil()
    Transaction.runWithNewBundle(\bundle -> {
      var exposure = bundle.add(mirSubmitWorkItem_Acc.Exposure)
      util.processExposure(exposure)
    })
  }

}