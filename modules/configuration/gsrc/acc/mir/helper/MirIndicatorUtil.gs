package acc.mir.helper

uses gw.util.PropertiesFileAccess

/**
 * Created by sara.kashtan on 10/23/2019.
 */
class MirIndicatorUtil {
  var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")

  static function getRelationshipIndicator(type : ContactRole, person : Boolean) : String {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")
    var relation = ""
    if (type == ContactRole.TC_MIRESTATE_ACC && person) {
      relation = props.getProperty("MIR.ESTATE.PERSON")
    } else if (type == ContactRole.TC_MIRESTATE_ACC && !person) {
      relation = props.getProperty("MIR.ESTATE.ENTITY")
    } else if (type == ContactRole.TC_MIRFAMILYMEMBER_ACC && person) {
      relation =  props.getProperty("MIR.FAMILYMEMBER.PERSON")
    } else if (type == ContactRole.TC_MIRFAMILYMEMBER_ACC && !person) {
      relation = props.getProperty("MIR.FAMILYMEMBER.ENTITY")
    } else if (type == ContactRole.TC_MIROTHERREL_ACC && !person) {
      relation = props.getProperty("MIR.OTHER.ENTITY")
    } else {
      relation = props.getProperty("MIR.OTHER.PERSON")
    }
    return relation
  }

  static function getRepIndicator(repType : ContactRole) : String {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")
    if (repType == ContactRole.TC_MIRATTORNEY_ACC) {
      return props.getProperty("MIR.ATTORNEY")
    } else if (repType == ContactRole.TC_MIRGUARDIAN_ACC){
      return props.getProperty("MIR.GUARDIANCONSERVATOR")
    } else if (repType == ContactRole.TC_MIRPOWEROFATTORNEY_ACC){
      return props.getProperty("MIR.POWEROFATTORNEY")
    } else {
      return props.getProperty("MIR.OTHERREP")
    }
  }
}