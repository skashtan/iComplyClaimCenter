package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirOfficeCodeLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirOfficeCodeLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirOfficeCodeLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirOfficeCodeLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator at MirOfficeCodeLV.pcf: line 20, column 84
    function checkBoxVisible_5 () : java.lang.Boolean {
      return CurrentLocation.InEditMode ? true : false
    }
    
    // 'value' attribute on TextCell (id=MirOfficeCodeLV) at MirOfficeCodeLV.pcf: line 27, column 45
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      MirOfficeCode.OfficeCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=MirOfficeCodeLV) at MirOfficeCodeLV.pcf: line 27, column 45
    function valueRoot_4 () : java.lang.Object {
      return MirOfficeCode
    }
    
    // 'value' attribute on TextCell (id=MirOfficeCodeLV) at MirOfficeCodeLV.pcf: line 27, column 45
    function value_1 () : java.lang.String {
      return MirOfficeCode.OfficeCode
    }
    
    property get MirOfficeCode () : entity.MirOfficeCode_Acc {
      return getIteratedValue(1) as entity.MirOfficeCode_Acc
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirOfficeCodeLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirOfficeCodeLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at MirOfficeCodeLV.pcf: line 27, column 45
    function sortValue_0 (MirOfficeCode :  entity.MirOfficeCode_Acc) : java.lang.Object {
      return MirOfficeCode.OfficeCode
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at MirOfficeCodeLV.pcf: line 20, column 84
    function toCreateAndAdd_6 () : entity.MirOfficeCode_Acc {
      return new MirOfficeCode_Acc()
    }
    
    // 'toRemove' attribute on RowIterator at MirOfficeCodeLV.pcf: line 20, column 84
    function toRemove_7 (MirOfficeCode :  entity.MirOfficeCode_Acc) : void {
      MirOfficeCode.remove()
    }
    
    // 'value' attribute on RowIterator at MirOfficeCodeLV.pcf: line 20, column 84
    function value_8 () : gw.api.database.IQueryBeanResult<entity.MirOfficeCode_Acc> {
      return MirOfficeCodeList
    }
    
    property get MirOfficeCodeList () : gw.api.database.IQueryBeanResult<MirOfficeCode_Acc> {
      return getRequireValue("MirOfficeCodeList", 0) as gw.api.database.IQueryBeanResult<MirOfficeCode_Acc>
    }
    
    property set MirOfficeCodeList ($arg :  gw.api.database.IQueryBeanResult<MirOfficeCode_Acc>) {
      setRequireValue("MirOfficeCodeList", 0, $arg)
    }
    
    
  }
  
  
}