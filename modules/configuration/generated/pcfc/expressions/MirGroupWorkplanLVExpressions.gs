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
    
    // 'action' attribute on TextCell (id=Subject) at MirGroupWorkplanLV.pcf: line 116, column 135
    function action_47 () : void {
      if(not gw.api.activity.ActivityUtil.isWorksheetOpen(Activity.ID)) ActivityDetailForward.goInWorkspace(Activity.Claim, Activity)
    }
    
    // 'available' attribute on TextCell (id=Subject) at MirGroupWorkplanLV.pcf: line 116, column 135
    function available_44 () : java.lang.Boolean {
      return perm.Activity.view(Activity)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 31, column 35
    function condition_24 () : java.lang.Boolean {
      return Activity.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 34, column 33
    function condition_25 () : java.lang.Boolean {
      return Activity.canSkip() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 37, column 37
    function condition_26 () : java.lang.Boolean {
      return Activity.canComplete() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirGroupWorkplanLV.pcf: line 40, column 36
    function condition_27 () : java.lang.Boolean {
      return Activity.canApprove() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate) at MirGroupWorkplanLV.pcf: line 95, column 40
    function fontColor_35 () : java.lang.String {
      return gw.api.activity.ActivityUtil.isOverdue(Activity) ? "Red" : ""
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated) at MirGroupWorkplanLV.pcf: line 80, column 52
    function valueRoot_30 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TextCell (id=MirDashboardClaim) at MirGroupWorkplanLV.pcf: line 123, column 56
    function valueRoot_51 () : java.lang.Object {
      return Activity.Exposure.Claim
    }
    
    // 'value' attribute on TextCell (id=MirDashboardExposure) at MirGroupWorkplanLV.pcf: line 130, column 54
    function valueRoot_54 () : java.lang.Object {
      return Activity.Exposure
    }
    
    // 'value' attribute on BooleanRadioCell (id=Updated) at MirGroupWorkplanLV.pcf: line 80, column 52
    function value_28 () : java.lang.Boolean {
      return Activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated) at MirGroupWorkplanLV.pcf: line 88, column 39
    function value_31 () : java.lang.Boolean {
      return Activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate) at MirGroupWorkplanLV.pcf: line 95, column 40
    function value_34 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority) at MirGroupWorkplanLV.pcf: line 102, column 41
    function value_38 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Status) at MirGroupWorkplanLV.pcf: line 108, column 44
    function value_41 () : java.lang.String {
      return Activity.ActivityStatus
    }
    
    // 'value' attribute on TextCell (id=Subject) at MirGroupWorkplanLV.pcf: line 116, column 135
    function value_45 () : java.lang.String {
      return String.isEmpty(Activity.Subject) ? DisplayKey.get("LV.Activity.Activities.NoSubject") : Activity.Subject
    }
    
    // 'value' attribute on TextCell (id=MirDashboardClaim) at MirGroupWorkplanLV.pcf: line 123, column 56
    function value_49 () : java.lang.String {
      return Activity.Exposure.Claim.ClaimNumber
    }
    
    // 'value' attribute on TextCell (id=MirDashboardExposure) at MirGroupWorkplanLV.pcf: line 130, column 54
    function value_52 () : java.lang.String {
      return Activity.Exposure.FullDescription
    }
    
    // 'value' attribute on TextCell (id=Assigner) at MirGroupWorkplanLV.pcf: line 136, column 178
    function value_55 () : java.lang.String {
      return (Activity.AssignedByUser.Contact == null) ? DisplayKey.get("Java.Activity.AssignedByUser.SystemUser") : Activity.AssignedByUser.Contact.DisplayName
    }
    
    // 'value' attribute on TextCell (id=AssignedUser) at MirGroupWorkplanLV.pcf: line 142, column 51
    function value_57 () : java.lang.String {
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
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 64, column 95
    function filter_10 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(30)
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 67, column 88
    function filter_12 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.NotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 70, column 87
    function filter_13 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.MyNotReviewExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 46, column 33
    function filter_2 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.NotReviewOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 49, column 79
    function filter_3 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.MyNotReviewNotExternalOpenFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 52, column 76
    function filter_4 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.NotReviewFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 55, column 75
    function filter_5 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.MyNotReviewNotExternalFilter
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 58, column 94
    function filter_6 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(7)
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 61, column 95
    function filter_8 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.getMyNotReviewNotExternalOpenDueInNDaysFilter(14)
    }
    
    // 'initialValue' attribute on Variable at MirGroupWorkplanLV.pcf: line 18, column 49
    function initialValue_0 () : gw.api.activity.WorkplanFilterSet {
      return gw.api.activity.WorkplanFilterSet.INSTANCE
    }
    
    // 'initialValue' attribute on Variable at MirGroupWorkplanLV.pcf: line 22, column 26
    function initialValue_1 () : Activity[] {
      return getGroupActivities()
    }
    
    // 'label' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 64, column 95
    function label_11 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 30)
    }
    
    // 'label' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 58, column 94
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 7)
    }
    
    // 'label' attribute on ToolbarFilterOption at MirGroupWorkplanLV.pcf: line 61, column 95
    function label_9 () : java.lang.Object {
      return DisplayKey.get("Java.Workplan.MyOpenActivitiesDueNextNDays", 14)
    }
    
    // 'value' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 95, column 40
    function sortValue_14 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.TargetDate
    }
    
    // 'value' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 102, column 41
    function sortValue_15 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Priority
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 108, column 44
    function sortValue_16 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Status
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 116, column 135
    function sortValue_17 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 123, column 56
    function sortValue_18 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Exposure
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 130, column 54
    function sortValue_19 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Exposure
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 136, column 178
    function sortValue_20 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignedByUser.Contact
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 142, column 51
    function sortValue_21 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.AssignmentStatus
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 142, column 51
    function sortValue_22 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedUser
    }
    
    // 'sortBy' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 142, column 51
    function sortValue_23 (Activity :  entity.Activity) : java.lang.Object {
      return  Activity.AssignedQueue
    }
    
    // 'value' attribute on RowIterator at MirGroupWorkplanLV.pcf: line 28, column 37
    function value_60 () : entity.Activity[] {
      return ActivityList
    }
    
    property get ActivityList () : Activity[] {
      return getVariableValue("ActivityList", 0) as Activity[]
    }
    
    property set ActivityList ($arg :  Activity[]) {
      setVariableValue("ActivityList", 0, $arg)
    }
    
    property get FilterSet () : gw.api.activity.WorkplanFilterSet {
      return getVariableValue("FilterSet", 0) as gw.api.activity.WorkplanFilterSet
    }
    
    property set FilterSet ($arg :  gw.api.activity.WorkplanFilterSet) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get GroupInfo () : gw.api.dashboard.DashboardTreeGroupInfo {
      return getRequireValue("GroupInfo", 0) as gw.api.dashboard.DashboardTreeGroupInfo
    }
    
    property set GroupInfo ($arg :  gw.api.dashboard.DashboardTreeGroupInfo) {
      setRequireValue("GroupInfo", 0, $arg)
    }
    
    function getGroupActivities() : Activity[] {
      var activityList = new Activity[0]
      if (GroupInfo.Group == null) {
        return activityList
      } else if (GroupInfo.SubGroups.size() > 0) {
        GroupInfo.SubGroups.forEach(\g -> {
          activityList = activityList.concat(g.OpenActivities.where(\a -> a.ActivityPattern.Code == gw.util.PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties").getProperty("MIR.ACTIVITY.CODE")))
        })
      } else {
        activityList = GroupInfo.Group.OpenActivities.where(\a -> a.ActivityPattern.Code == gw.util.PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties").getProperty("MIR.ACTIVITY.CODE"))
      }
    
      return activityList
    }
    
    
  }
  
  
}