package gw.assignment.workload.rules


/**
 * Claim Preupdate rule actions for workload weight assignment calculation and synchronization.
 * This class and its methods should not be used outside of Rules.
 */
@Export
public class ClaimWorkloadPreupdateRuleActions extends WorkloadPreupdateRuleActionsBase {

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Constructors
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  public construct(claim : Claim) {
    super(claim)  
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Public Methods
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Recalculates and synchronizes User workload after a given Claim has been closed.
   * 
   * @param claim the {@link Claim} that has been closed.
   */
  public static function updateUserWorkloadOnClaimClose(claim : Claim) {
    new ClaimWorkloadPreupdateRuleActions(claim).updateUserWorkload()
  }
  

  /**
   * Recalculates and synchronizes User workload after a given Claim has been reassigned.
   * The previously assignee's workload will also be recalculated and resynced.
   * 
   * @param claim the {@link Claim} that has been closed.
   */
  public static function updateUserWorkloadOnClaimReassignment(claim : Claim) {
    new ClaimWorkloadPreupdateRuleActions(claim).updateUserWorkloadOnReassignment()
  }

  /**
   * Calculates and synchronizes the claim's workload after a new Claim is created.
   *
   * @param claim the new {@link Claim}
   */
  public static function updateClaimWorkloadOnNewClaim(claim : Claim) {
    new ClaimWorkloadPreupdateRuleActions(claim).syncWorkload()
  }
  
  /**
   * Recalculates and synchronizes User workload after new Claim is created.
   * 
   * @param claim the new {@link Claim}
   */
  public static function updateUserWorkloadOnNewClaim(claim : Claim) {
    new ClaimWorkloadPreupdateRuleActions(claim).updateUserWorkload()
  }

  
  /**
   * Recalculates and synchronizes User workload after a given Claim's attributes have been modified.
   * 
   * @param claim the {@link Claim} that has been modified.
   */
  public static function updateUserWorkloadOnClaimModification(claim : Claim) {
    new ClaimWorkloadPreupdateRuleActions(claim).updateUserWorkload()
  }

  
  /**
   * Recalculates and synchronizes User workload after a given Claim has been reopened.
   * 
   * @param claim the {@link Claim} that has been reopened.
   */
  public static function updateUserWorkloadOnClaimReopen(claim : Claim) {
    new ClaimWorkloadPreupdateRuleActions(claim).updateUserWorkload()
  }


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Protected Methods
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  protected override function syncWorkload() : int {
    var claim = (WeightedAssignable as Claim)
    
    // check associated exposures to see if they need workload resync. Normally these will automatically
    // resync on exposure preupdate, but changes to intrinsic claim fields that affect exposure workload
    // (such as Claim LOB code) do not trigger exposure preupdate rules, so we have to explicitly trigger
    // a sync if necessary.
    for (e in claim.Exposures) {
      if (e.isWorkloadAffected()) {
        e.syncWorkload()
      }
    }
    
    // resync claim workload
    return claim.syncWorkload()
  }


  protected override function calculateWeight() : int {
    return (WeightedAssignable as Claim).calculateWeight()
  }


  protected override property get WeightedAssignableLogIdentifier() : String {
    return (WeightedAssignable as Claim).ClaimNumber
  }

}
