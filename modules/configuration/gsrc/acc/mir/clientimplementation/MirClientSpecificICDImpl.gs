package acc.mir.clientimplementation

uses gw.api.util.DateUtil
uses gw.util.PropertiesFileAccess

/**
 * This class contains ICD specific methods
 */
class MirClientSpecificICDImpl {

  /**
   *
   * Out of the box any claims closed before 10-01-2015 will default to ICD 9,
   * and any claims closed on or after 10-01-2015 will default to ICD 10.
   * If your implementation of ICD codes follows this pattern, then no changes should be made.
   *
   * If your implementation follows this pattern but uses a different conversion date
   * you may update the year (MIR.ICD.CONV.DATE.YYYY), month (MIR.ICD.CONV.DATE.MM),
   * and day (MIR.ICD.CONV.DATE.DD) properties found in gsrc\acc\mir\properties\MMSEA.properties
   *
   * If your implementation does not follow this patter, this method may be updated as
   * necessary to handle ICD indicators differently.
   * The method must return “0” to indicate that ICD 10 codes are being sent or “9”
   * to indicate that ICD 9 codes are being sent
   *
   * @param claim
   * @return indicator
   *
   */
  static function getICDIndicator(claim : Claim) : String {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")
    var indicator = props.getProperty("MIR.ICD10.IND")

    /**
     *  conversion date variables
     */
    var year = Integer.valueOf(props.getProperty("MIR.ICD.CONV.DATE.YYYY"))
    var month = Integer.valueOf(props.getProperty("MIR.ICD.CONV.DATE.MM"))
    var day = Integer.valueOf(props.getProperty("MIR.ICD.CONV.DATE.DD"))
    var conversionDate = DateUtil.createDateInstance(month, day, year)

    if (claim.CloseDate != null && claim.CloseDate.before(conversionDate)) {
      indicator = props.getProperty("MIR.ICD9.IND")
    }

    /**
     *
     *
     * client code goes here
     *
     *
     */

    return indicator
  }
}
