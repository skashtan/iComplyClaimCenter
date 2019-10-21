package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirContactLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirContactLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirContactLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirContactLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextCell (id=MirContactName) at MirContactLV.pcf: line 27, column 49
    function label_3 () : java.lang.Object {
      return contactRole.DisplayName
    }
    
    // 'value' attribute on TextCell (id=MirContactName) at MirContactLV.pcf: line 27, column 49
    function valueRoot_7 () : java.lang.Object {
      return MirContactDetail
    }
    
    // 'value' attribute on TextCell (id=MirContactName) at MirContactLV.pcf: line 27, column 49
    function value_4 () : java.lang.String {
      return MirContactDetail.DisplayName
    }
    
    property get MirContactDetail () : entity.Contact {
      return getIteratedValue(1) as entity.Contact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirContactLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirContactLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on RowIterator at MirContactLV.pcf: line 27, column 49
    function label_0 () : java.lang.Object {
      return contactRole.DisplayName
    }
    
    // 'value' attribute on RowIterator at MirContactLV.pcf: line 27, column 49
    function sortValue_1 (MirContactDetail :  entity.Contact) : java.lang.Object {
      return MirContactDetail.DisplayName
    }
    
    // 'value' attribute on RowIterator at MirContactLV.pcf: line 22, column 73
    function value_8 () : entity.Contact[] {
      return anExposure.getContactsByRole(contactRole)
    }
    
    // 'visible' attribute on RowIterator at MirContactLV.pcf: line 22, column 73
    function visible_2 () : java.lang.Boolean {
      return anExposure.getContactsByRole(contactRole).length > 0
    }
    
    property get anExposure () : Exposure {
      return getRequireValue("anExposure", 0) as Exposure
    }
    
    property set anExposure ($arg :  Exposure) {
      setRequireValue("anExposure", 0, $arg)
    }
    
    property get contactRole () : ContactRole {
      return getRequireValue("contactRole", 0) as ContactRole
    }
    
    property set contactRole ($arg :  ContactRole) {
      setRequireValue("contactRole", 0, $arg)
    }
    
    
  }
  
  
}