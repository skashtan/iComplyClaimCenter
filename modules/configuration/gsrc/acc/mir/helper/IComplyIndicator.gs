package acc.mir.helper

uses gw.util.PropertiesFileAccess

/**
 * Created by sara.kashtan on 10/23/2019.
 */
class IComplyIndicator {
  var props = PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties")

  static function getRelationshipIndicator(type : ContactRole, person : Boolean) : String {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties")
    var relation = ""
    if (type == ContactRole.TC_MIRESTATE_ACC && person) {
      relation = props.getProperty("ICOMPLY.ESTATE.PERSON")
    } else if (type == ContactRole.TC_MIRESTATE_ACC && !person) {
      relation = props.getProperty("ICOMPLY.ESTATE.ENTITY")
    } else if (type == ContactRole.TC_MIRFAMILYMEMBER_ACC && person) {
      relation =  props.getProperty("ICOMPLY.FAMILYMEMBER.PERSON")
    } else if (type == ContactRole.TC_MIRFAMILYMEMBER_ACC && !person) {
      relation = props.getProperty("ICOMPLY.FAMILYMEMBER.ENTITY")
    } else if (type == ContactRole.TC_MIROTHERREL_ACC && !person) {
      relation = props.getProperty("ICOMPLY.OTHER.ENTITY")
    } else {
      relation = props.getProperty("ICOMPLY.OTHER.PERSON")
    }
    return relation
  }

  static function getRepIndicator(repType : ContactRole) : String {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties")
    if (repType == ContactRole.TC_MIRATTORNEY_ACC) {
      return "A"
    } else if (repType == ContactRole.TC_MIRGUARDIAN_ACC){
      return "G"
    } else if (repType == ContactRole.TC_MIRPOWEROFATTORNEY_ACC){
      return "P"
    } else {
      return "O"
    }
  }
}