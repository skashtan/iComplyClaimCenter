package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirGroupDashboard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirGroupDashboardExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirGroupDashboard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirGroupDashboardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (GroupInfo :  gw.api.dashboard.DashboardTreeGroupInfo) : int {
      return 0
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=ClaimWorkplan_AssignButton) at MirGroupDashboard.pcf: line 30, column 31
    function allCheckedRowsAction_1 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      pushAssignmentPopup(CheckedValues)
    }
    
    // 'def' attribute on ListViewInput at MirGroupDashboard.pcf: line 22, column 126
    function def_onEnter_2 (def :  pcf.MirGroupWorkplanLV) : void {
      def.onEnter(GroupInfo.Group.OpenActivities.where(\a -> a.Subject.contains("iComply")))
    }
    
    // 'def' attribute on ListViewInput at MirGroupDashboard.pcf: line 22, column 126
    function def_refreshVariables_3 (def :  pcf.MirGroupWorkplanLV) : void {
      def.refreshVariables(GroupInfo.Group.OpenActivities.where(\a -> a.Subject.contains("iComply")))
    }
    
    // 'initialValue' attribute on Variable at MirGroupDashboard.pcf: line 17, column 22
    function initialValue_0 () : String {
      return gw.api.dashboard.DashboardUtil.getMode()
    }
    
    // Page (id=MirGroupDashboard) at MirGroupDashboard.pcf: line 8, column 112
    static function parent_4 (GroupInfo :  gw.api.dashboard.DashboardTreeGroupInfo) : pcf.api.Destination {
      return pcf.DashboardSubGroup.createDestination(GroupInfo)
    }
    
    // 'title' attribute on Page (id=MirGroupDashboard) at MirGroupDashboard.pcf: line 8, column 112
    static function title_5 (GroupInfo :  gw.api.dashboard.DashboardTreeGroupInfo) : java.lang.Object {
      return DisplayKey.get("Java.Dashboard.Title", DisplayKey.get("Accelerator.mir.card"))
    }
    
    override property get CurrentLocation () : pcf.MirGroupDashboard {
      return super.CurrentLocation as pcf.MirGroupDashboard
    }
    
    property get GroupInfo () : gw.api.dashboard.DashboardTreeGroupInfo {
      return getVariableValue("GroupInfo", 0) as gw.api.dashboard.DashboardTreeGroupInfo
    }
    
    property set GroupInfo ($arg :  gw.api.dashboard.DashboardTreeGroupInfo) {
      setVariableValue("GroupInfo", 0, $arg)
    }
    
    property get ModeSource () : String {
      return getVariableValue("ModeSource", 0) as String
    }
    
    property set ModeSource ($arg :  String) {
      setVariableValue("ModeSource", 0, $arg)
    }
    
    function pushAssignmentPopup(Activities : Activity[]) {
          var popup = new gw.api.activity.ActivityAssignmentPopup(Activities);
          AssignActivitiesPopup.push(popup)
        }
        
    
    
  }
  
  
}