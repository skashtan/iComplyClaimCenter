package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirAdmin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirAdminExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirAdmin.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirAdminExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at MirAdmin.pcf: line 17, column 37
    function def_onEnter_2 (def :  pcf.MirRREIDLV) : void {
      def.onEnter(MirRREIDS)
    }
    
    // 'def' attribute on PanelRef at MirAdmin.pcf: line 17, column 37
    function def_refreshVariables_3 (def :  pcf.MirRREIDLV) : void {
      def.refreshVariables(MirRREIDS)
    }
    
    // 'initialValue' attribute on Variable at MirAdmin.pcf: line 13, column 68
    function initialValue_0 () : gw.api.database.IQueryBeanResult<MirRREID_Acc> {
      return gw.api.database.Query.make(entity.MirRREID_Acc).select()
    }
    
    // EditButtons at MirAdmin.pcf: line 19, column 25
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // Page (id=MirAdmin) at MirAdmin.pcf: line 9, column 77
    static function parent_4 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    override property get CurrentLocation () : pcf.MirAdmin {
      return super.CurrentLocation as pcf.MirAdmin
    }
    
    property get MirRREIDS () : gw.api.database.IQueryBeanResult<MirRREID_Acc> {
      return getVariableValue("MirRREIDS", 0) as gw.api.database.IQueryBeanResult<MirRREID_Acc>
    }
    
    property set MirRREIDS ($arg :  gw.api.database.IQueryBeanResult<MirRREID_Acc>) {
      setVariableValue("MirRREIDS", 0, $arg)
    }
    
    
  }
  
  
}