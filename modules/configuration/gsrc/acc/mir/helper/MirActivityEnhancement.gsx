package acc.mir.helper

uses gw.transaction.Transaction

/**
 * Created by sara.kashtan on 10/12/2019.
 */
enhancement MirActivityEnhancement : Activity {

  static function createActivityWithBundle(exposure : Exposure, addMessage : String) : Activity {
    var activity : Activity
    Transaction.runWithNewBundle(\bundle -> {
      activity = exposure.Claim.createActivityFromPattern(exposure, ActivityPattern.finder.getActivityPatternByCode("MirInfoRequestActivity"))
      activity.Description = activity.Description + "\n\n" + addMessage
      activity.assign(exposure.AssignedGroup, exposure.AssignedUser)
      activity = bundle.add(activity)
    })
    return activity
  }


  static function createActivity(exposure : Exposure, addMessage : String) : Activity {
    var activity = new Activity()
    activity = exposure.Claim.createActivityFromPattern(exposure, ActivityPattern.finder.getActivityPatternByCode("MirInfoRequestActivity"))
    activity.Priority = Priority.TC_NORMAL
    activity.Description = activity.Description + "\n\n" + addMessage
    activity.assign(exposure.AssignedGroup, exposure.AssignedUser)

    return activity
  }

}
