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
    
    // 'def' attribute on PanelRef at MirAdmin.pcf: line 30, column 37
    function def_onEnter_4 (def :  pcf.MirRREIDLV) : void {
      def.onEnter(MirRREIDS)
    }
    
    // 'def' attribute on PanelRef at MirAdmin.pcf: line 45, column 47
    function def_onEnter_7 (def :  pcf.MirOfficeCodeLV) : void {
      def.onEnter(MirOfficeCodes)
    }
    
    // 'def' attribute on PanelRef at MirAdmin.pcf: line 30, column 37
    function def_refreshVariables_5 (def :  pcf.MirRREIDLV) : void {
      def.refreshVariables(MirRREIDS)
    }
    
    // 'def' attribute on PanelRef at MirAdmin.pcf: line 45, column 47
    function def_refreshVariables_8 (def :  pcf.MirOfficeCodeLV) : void {
      def.refreshVariables(MirOfficeCodes)
    }
    
    // 'initialValue' attribute on Variable at MirAdmin.pcf: line 13, column 68
    function initialValue_0 () : gw.api.database.IQueryBeanResult<MirRREID_Acc> {
      return gw.api.database.Query.make(entity.MirRREID_Acc).select()
    }
    
    // 'initialValue' attribute on Variable at MirAdmin.pcf: line 17, column 73
    function initialValue_1 () : gw.api.database.IQueryBeanResult<MirOfficeCode_Acc> {
      return gw.api.database.Query.make(entity.MirOfficeCode_Acc).select()
    }
    
    // EditButtons at MirAdmin.pcf: line 21, column 23
    function label_2 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on Label at MirAdmin.pcf: line 26, column 86
    function label_3 () : java.lang.String {
      return DisplayKey.get("Accelerator.mir.heading.rreidadmin") 
    }
    
    // 'label' attribute on Label at MirAdmin.pcf: line 41, column 91
    function label_6 () : java.lang.String {
      return DisplayKey.get("Accelerator.mir.heading.officecodeadmin") 
    }
    
    // Page (id=MirAdmin) at MirAdmin.pcf: line 9, column 70
    static function parent_9 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    override property get CurrentLocation () : pcf.MirAdmin {
      return super.CurrentLocation as pcf.MirAdmin
    }
    
    property get MirOfficeCodes () : gw.api.database.IQueryBeanResult<MirOfficeCode_Acc> {
      return getVariableValue("MirOfficeCodes", 0) as gw.api.database.IQueryBeanResult<MirOfficeCode_Acc>
    }
    
    property set MirOfficeCodes ($arg :  gw.api.database.IQueryBeanResult<MirOfficeCode_Acc>) {
      setVariableValue("MirOfficeCodes", 0, $arg)
    }
    
    property get MirRREIDS () : gw.api.database.IQueryBeanResult<MirRREID_Acc> {
      return getVariableValue("MirRREIDS", 0) as gw.api.database.IQueryBeanResult<MirRREID_Acc>
    }
    
    property set MirRREIDS ($arg :  gw.api.database.IQueryBeanResult<MirRREID_Acc>) {
      setVariableValue("MirRREIDS", 0, $arg)
    }
    
    
  }
  
  
}