package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirGroupWorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirGroupWorkplanLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirGroupWorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirGroupWorkplanLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject) at MirGroupWorkplanLV.pcf: line 77, column 135
    function action_33 () : void {
      if(not gw.api.activity.ActivityUtil.isWorksheetOpen(Activity.ID)) ActivityDetailForward.goInWorkspace(Activity.Claim, Activity)
    }
    
    // 'available' attribute on TextCell (id=Subject) at MirGroupWorkplanLV.pcf: line 77, column 135
    function available_30 () : java.lang.Boolean {
      return perm.Activity.view(Activity)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 23, column 35
    function condition_10 () : java.lang.Boolean {
      return Activity.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 26, column 33
    function condition_11 () : java.lang.Boolean {
      return Activity.canSkip() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 29, column 37
    function condition_12 () : java.lang.Boolean {
      return Activity.canComplete() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 32, column 36
    function condition_13 () : java.lang.Boolean {
      return Activity.canApprove() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate) at MirGroupWorkplanLV.pcf: line 56, column 40
    function fontColor_21 () : java.lang.String {
      return gw.api.activity.ActivityUtil.isOverdue(Activity) ? "Red" : ""
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated) at MirGroupWorkplanLV.pcf: line 41, column 52
    function valueRoot_16 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TextCell (id=MirDashboardClaim) at MirGroupWorkplanLV.pcf: line 84, column 56
    function valueRoot_37 () : java.lang.Object {
      return Activity.Exposure.Claim
    }
    
    // 'value' attribute on TextCell (id=MirDashboardExposure) at MirGroupWorkplanLV.pcf: line 91, column 54
    function valueRoot_40 () : java.lang.Object {
      return Activity.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated) at MirGroupWorkplanLV.pcf: line 41, column 52
    function value_14 () : java.lang.Boolean {
      return Activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated) at MirGroupWorkplanLV.pcf: line 49, column 39
    function value_17 () : java.lang.Boolean {
      return Activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate) at MirGroupWorkplanLV.pcf: line 56, column 40
    function value_20 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority) at MirGroupWorkplanLV.pcf: line 63, column 41
    function value_24 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Status) at MirGroupWorkplanLV.pcf: line 69, column 44
    function value_27 () : java.lang.String {
      return Activity.ActivityStatus
    }
    
    // 'value' attribute on TextCell (id=Subject) at MirGroupWorkplanLV.pcf: line 77, column 135
    function value_31 () : java.lang.String {
      return String.isEmpty(Activity.Subject) ? DisplayKey.get("LV.Activity.Activities.NoSubject") : Activity.Subject
    }
    
    // 'value' attribute on TextCell (id=MirDashboardClaim) at MirGroupWorkplanLV.pcf: line 84, column 56
    function value_35 () : java.lang.String {
      return Activity.Exposure.Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=MirDashboardExposure) at MirGroupWorkplanLV.pcf: line 91, column 54
    function value_38 () : java.lang.String {
      return Activity.Exposure.FullDescription
    }
    
    // 'value' attribute on TextCell (id=Assigner) at MirGroupWorkplanLV.pcf: line 97, column 178
    function value_41 () : java.lang.String {
      return (Activity.AssignedByUser.Contact == null) ? DisplayKey.get("Java.Activity.AssignedByUser.SystemUser") : Activity.AssignedByUser.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=AssignedUser) at MirGroupWorkplanLV.pcf: line 103, column 51
    function value_43 () : java.lang.String {
      return Activity.AssigneeDisplayString
    }
    
    property get Activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirGroupWorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirGroupWorkplanLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 56, column 40
    function sortValue_0 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.TargetDate
    }
    
    // 'value' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 63, column 41
    function sortValue_1 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Priority
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 69, column 44
    function sortValue_2 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Status
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 77, column 135
    function sortValue_3 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 84, column 56
    function sortValue_4 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Exposure
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 91, column 54
    function sortValue_5 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Exposure
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 97, column 178
    function sortValue_6 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignedByUser.Contact
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 103, column 51
    function sortValue_7 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignmentStatus
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 103, column 51
    function sortValue_8 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedUser
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 103, column 51
    function sortValue_9 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedQueue
    }
    
    // 'value' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 20, column 37
    function value_46 () : entity.Activity[] {
      return ActivityList
    }
    
    property get ActivityList () : Activity[] {
      return getRequireValue("ActivityList", 0) as Activity[]
    }
    
    property set ActivityList ($arg :  Activity[]) {
      setRequireValue("ActivityList", 0, $arg)
    }
    
    
  }
  
  
}