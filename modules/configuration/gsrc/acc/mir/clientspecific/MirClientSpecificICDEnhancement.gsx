package acc.mir.clientspecific

uses gw.api.util.DateUtil
uses gw.util.PropertiesFileAccess

/**
 * Created by sara.kashtan on 11/7/2019.
 */
enhancement MirClientSpecificICDEnhancement : MirReportable_Acc {

  /**
   *
   * @param claim
   * @return 0 if this claim uses ICD 10, 9 if this claim uses ICD 9
   */
  static function getICDIndicator(claim : Claim) : String {
    /**
     *  Out of the box any claims closed before 10-01-2015 default ICD 9,
     *  and any claims closed after 10-01-2015 default to ICD 10.
     *  This method may be updated as required to handle ICD indicators
     *  differently.
     */
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")
    var year = Integer.valueOf(props.getProperty("MIR.ICD.CONV.DATE.YYYY"))
    var month = Integer.valueOf(props.getProperty("MIR.ICD.CONV.DATE.MM"))
    var day = Integer.valueOf(props.getProperty("MIR.ICD.CONV.DATE.DD"))
    var conversionDate = DateUtil.createDateInstance(month, day, year)

    if (claim.CloseDate != null && claim.CloseDate.before(conversionDate)) {
      return props.getProperty("MIR.ICD9.IND")
    }

    return props.getProperty("MIR.ICD10.IND")
  }
}
