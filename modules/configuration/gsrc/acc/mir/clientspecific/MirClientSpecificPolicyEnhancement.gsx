package acc.mir.clientspecific

/**
 * Created by sara.kashtan on 10/11/2019.
 */
enhancement MirClientSpecificPolicyEnhancement : Policy {
  static function isSelfInsured(exposure : Exposure) : String {
    return "N"
  }

  static function getSelfInsuredType(exposure : Exposure) : String {
    return ""
  }
}
