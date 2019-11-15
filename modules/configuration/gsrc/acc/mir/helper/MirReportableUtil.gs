package acc.mir.helper

uses gw.transaction.Transaction

/**
 * Created by sara.kashtan on 10/18/2019.
 */
class MirReportableUtil {

  /**
   *
   * @param exposure
   * @return
   */
  static function initMirReportable(exposure : Exposure) : MirReportable_Acc {
    exposure.mirReportable_Acc = new MirReportable_Acc()
    return exposure.mirReportable_Acc
  }

  /**
   *
   * @param exposure
   * @return
   */
  static function isBigFiveReady(exposure : Exposure) : Boolean {
    var person = (exposure.Claimant != null) ? (exposure.Claimant as Person) : (exposure.Claim.ClaimantDenorm as Person)
    var isReady = false
    // gender is sent as unknown if it is not filled in
    if (person.FirstName != null && person.LastName != null && person.DateOfBirth != null && person.TaxID != null){
      isReady = true
    }
    return isReady
  }

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
}
