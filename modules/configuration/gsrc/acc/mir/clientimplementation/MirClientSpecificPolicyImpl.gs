package acc.mir.clientimplementation

/**
 * This class has methods that should be updated to handle self-insured policies as implemented by you, the client.
 */
class MirClientSpecificPolicyImpl {

  /**
   *
   * Returns Y or N
   * Return “Y” if the policy on which the exposure was created is self-insured
   * return “N” if the policy is not self-insured
   *
   *    IF self insured return Y
   *    IF not self insured return N
   *
   * @param exposure
   * @return isSelfInsured
   *
   */
  static function isSelfInsured(exposure : Exposure) : String {
    /**
     * Y or N
     */
    var isSelfInsured = "N"

    /**
     *
     *
     * client code goes here
     *
     *
     */

    return isSelfInsured
  }

  /**
   *
   * Returns I, O or ""
   *
   * Return “O” if the policy is self-insured and the policyholder is an organization.
   * Return “I” if the policy is self-insured and the policyholder is an individual.
   * Otherwise a blank string is returned/
   *
   *    IF isSelfInsured returns Y AND IF self insured is an organization return O
   *    IF isSelfInsured returns Y AND IF self insured is an individual return I
   *    Otherwise return blank "" [DO NOTHING]
   *
   * @param exposure
   * @return selfInsuredType
   *
   */
  static function getSelfInsuredType(exposure : Exposure) : String {
    /**
     * empty string, O or I
     */
    var selfInsuredType = ""

    /**
     *
     *
     * client code goes here
     *
     *
     */

    return selfInsuredType
  }
}
