package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirRREIDLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirRREIDLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirRREIDLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirRREIDLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at MirRREIDLV.pcf: line 20, column 79
    function checkBoxVisible_5 () : java.lang.Boolean {
      return CurrentLocation.InEditMode ? true : false
    }
    
    // 'value' attribute on TextCell (id=MirRREIDLV) at MirRREIDLV.pcf: line 27, column 35
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      MirRREID.RREID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=MirRREIDLV) at MirRREIDLV.pcf: line 27, column 35
    function valueRoot_4 () : java.lang.Object {
      return MirRREID
    }
    
    // 'value' attribute on TextCell (id=MirRREIDLV) at MirRREIDLV.pcf: line 27, column 35
    function value_1 () : java.lang.String {
      return MirRREID.RREID
    }
    
    property get MirRREID () : entity.MirRREID_Acc {
      return getIteratedValue(1) as entity.MirRREID_Acc
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirRREIDLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirRREIDLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at MirRREIDLV.pcf: line 27, column 35
    function sortValue_0 (MirRREID :  entity.MirRREID_Acc) : java.lang.Object {
      return MirRREID.RREID
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at MirRREIDLV.pcf: line 20, column 79
    function toCreateAndAdd_6 () : entity.MirRREID_Acc {
      return new MirRREID_Acc()
    }
    
    // 'toRemove' attribute on RowIterator at MirRREIDLV.pcf: line 20, column 79
    function toRemove_7 (MirRREID :  entity.MirRREID_Acc) : void {
      MirRREID.remove()
    }
    
    // 'value' attribute on RowIterator at MirRREIDLV.pcf: line 20, column 79
    function value_8 () : gw.api.database.IQueryBeanResult<entity.MirRREID_Acc> {
      return MirRREIDList
    }
    
    property get MirRREIDList () : gw.api.database.IQueryBeanResult<MirRREID_Acc> {
      return getRequireValue("MirRREIDList", 0) as gw.api.database.IQueryBeanResult<MirRREID_Acc>
    }
    
    property set MirRREIDList ($arg :  gw.api.database.IQueryBeanResult<MirRREID_Acc>) {
      setRequireValue("MirRREIDList", 0, $arg)
    }
    
    
  }
  
  
}