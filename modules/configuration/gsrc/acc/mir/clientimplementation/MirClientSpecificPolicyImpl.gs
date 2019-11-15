package acc.mir.clientimplementation

/**
 * Created by sara.kashtan on 10/11/2019.
 */
class MirClientSpecificPolicyImpl {

  static function isSelfInsured(exposure : Exposure) : String {
    var isSelfInsured = "N"
    //TODO
    /**
     * IF self insured return Y
     * IF not self insured return N
     */
    return isSelfInsured
  }

  static function getSelfInsuredType(exposure : Exposure) : String {
    var selfInsuredType = ""
    //TODO
    /**
     * IF isSelfInsured returns Y AND IF self insured is an organization return O
     * IF isSelfInsured returns Y AND IF self insured is an individual return I
     * Otherwise return blank "" [DO NOTHING]
     */
    return selfInsuredType
  }
}
