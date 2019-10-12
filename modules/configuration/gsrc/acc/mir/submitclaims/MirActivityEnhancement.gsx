package acc.mir.submitclaims

uses gw.transaction.Transaction

/**
 * Created by sara.kashtan on 10/12/2019.
 */
enhancement MirActivityEnhancement : Activity {

  static function createActivityWithBundle(exposure : Exposure) : Activity {
    var activity = new Activity()
    Transaction.runWithNewBundle(\bundle -> {
      activity = exposure.Claim.createActivityFromPattern(exposure, ActivityPattern.finder.getActivityPatternByCode("MirInfoRequestActivity"))
      activity = bundle.add(activity)
      activity.assign(exposure.AssignedGroup, exposure.AssignedUser)
    })
    return activity
  }


  static function createActivity(exposure : Exposure) : Activity {
    var activity = new Activity()
    activity = exposure.Claim.createActivityFromPattern(exposure, ActivityPattern.finder.getActivityPatternByCode("MirInfoRequestActivity"))
    activity.assign(exposure.AssignedGroup, exposure.AssignedUser)

    return activity
  }
}
