package acc.mir.helper

uses gw.transaction.Transaction
uses gw.util.PropertiesFileAccess

/**
 * Created by sara.kashtan on 10/12/2019.
 */
class MirActivityUtil {

  static function createMirActivityWithBundle(exposure : Exposure, addMessage : String) : Activity {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")

    var activity : Activity
    var activityCode = props.getProperty("MIR.ACTIVITY.CODE")
    var intUsername = props.getProperty("INTEGRATION.USERNAME")

    Transaction.runWithNewBundle(\bundle -> {
      activity = exposure.Claim.createActivityFromPattern(exposure, ActivityPattern.finder.getActivityPatternByCode(activityCode))
      activity.Description = activity.Description + "\n\n" + addMessage
      activity.assign(exposure.AssignedGroup, exposure.AssignedUser)
      activity = bundle.add(activity)
    }, intUsername)
    return activity
  }

  static function getOpenMirActivityCount(exposure : Exposure) : int {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")

    var activityCode = props.getProperty("MIR.ACTIVITY.CODE")
    var count = exposure.Activities.countWhere(\elt -> elt.ActivityPattern.Code == activityCode && elt.Status == ActivityStatus.TC_OPEN)

    return count
  }

}
