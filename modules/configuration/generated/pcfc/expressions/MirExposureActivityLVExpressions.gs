package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirExposureActivityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirExposureActivityLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirExposureActivityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirExposureActivityLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject) at MirExposureActivityLV.pcf: line 34, column 37
    function action_7 () : void {
      if(not gw.api.activity.ActivityUtil.isWorksheetOpen(Activity.ID)) ActivityDetailForward.goInWorkspace(Activity.Claim, Activity)
    }
    
    // 'condition' attribute on ToolbarFlag at MirExposureActivityLV.pcf: line 17, column 35
    function condition_2 () : java.lang.Boolean {
      return Activity.canAssign() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirExposureActivityLV.pcf: line 20, column 33
    function condition_3 () : java.lang.Boolean {
      return Activity.canSkip() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirExposureActivityLV.pcf: line 23, column 37
    function condition_4 () : java.lang.Boolean {
      return Activity.canComplete() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'condition' attribute on ToolbarFlag at MirExposureActivityLV.pcf: line 26, column 36
    function condition_5 () : java.lang.Boolean {
      return Activity.canApprove() && !gw.api.activity.ActivityUtil.isWorksheetOpen(Activity?.ID)
    }
    
    // 'value' attribute on TextCell (id=Subject) at MirExposureActivityLV.pcf: line 34, column 37
    function valueRoot_9 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TextCell (id=Description) at MirExposureActivityLV.pcf: line 40, column 41
    function value_10 () : java.lang.String {
      return Activity.Description
    }
    
    // 'value' attribute on TextCell (id=Subject) at MirExposureActivityLV.pcf: line 34, column 37
    function value_6 () : java.lang.String {
      return Activity.Subject
    }
    
    property get Activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirExposureActivityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirExposureActivityLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on RowIterator at MirExposureActivityLV.pcf: line 34, column 37
    function sortValue_0 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'sortBy' attribute on RowIterator at MirExposureActivityLV.pcf: line 40, column 41
    function sortValue_1 (Activity :  entity.Activity) : java.lang.Object {
      return Activity.Subject
    }
    
    // 'value' attribute on RowIterator at MirExposureActivityLV.pcf: line 14, column 37
    function value_13 () : entity.Activity[] {
      return activityList
    }
    
    property get activityList () : Activity[] {
      return getRequireValue("activityList", 0) as Activity[]
    }
    
    property set activityList ($arg :  Activity[]) {
      setRequireValue("activityList", 0, $arg)
    }
    
    
  }
  
  
}