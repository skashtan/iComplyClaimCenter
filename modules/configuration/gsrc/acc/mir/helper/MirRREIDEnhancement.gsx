package acc.mir.helper

uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.locale.DisplayKey
uses gw.pl.persistence.core.Key
uses gw.transaction.Transaction

/**
 * Created by sara.kashtan on 10/13/2019.
 */
enhancement MirRREIDEnhancement : MirRREID_Acc {

  /**
   * @param exposure
   * @return boolean.
   * If return true: RREID is ready to go
   * If return false: RREID is NOT ready to go, no need to continue
   * processing without RREID
   */
  static function checkOrSetRREID(exposure : Exposure) : Boolean {

    var hasRREID = exposure.mirReportable_Acc.ClaimRREID != null
    var multiRREIDS = gw.api.database.Query.make(MirRREID_Acc).select().Count > 1

      if (!hasRREID && !multiRREIDS) {
        Transaction.runWithNewBundle(\bundle -> {
        exposure.mirReportable_Acc.ClaimRREID = gw.api.database.Query.make(MirRREID_Acc).select().AtMostOneRow.RREID
        })
        hasRREID = true
      } else if (!hasRREID && multiRREIDS) {
        hasRREID = false
      }

    return hasRREID
  }

/*  static function getRREIDEntity(rreid : MirRREID_Acc) : Long {
    query.compare(MirRREID_Acc#ID, Relop.Equals, rreid)
    var rreidEntity = query.select().AtMostOneRow
    return rreidEntity.
  } var query = Query.make(MirRREID_Acc)
   */


}
