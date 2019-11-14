package acc.mir.helper

/**
 * Created by sara.kashtan on 10/18/2019.
 */
enhancement MirReportableEnhancement : MirReportable_Acc {

  static function initMirReportable(exposure : Exposure) : MirReportable_Acc {
    exposure.mirReportable_Acc = new MirReportable_Acc()
    return exposure.mirReportable_Acc
  }

  static function isBigFiveReady(exposure : Exposure) : Boolean {
    var person = (exposure.Claimant != null) ? (exposure.Claimant as Person) : (exposure.Claim.ClaimantDenorm as Person)
    var isReady = false
    // gender is sent as unknown if it is not filled in
    if (person.FirstName != null && person.LastName != null && person.DateOfBirth != null && person.TaxID != null){
      isReady = true
    }
    return isReady
  }
}
