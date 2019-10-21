package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirRelationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirRelationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirRelationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirRelationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=MirRelationTypeDropdown) at MirRelationsLV.pcf: line 31, column 52
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      MirRelation.RelationType = (__VALUE_TO_SET as typekey.MirRelationType_Acc)
    }
    
    // 'valueRange' attribute on RangeCell (id=thisisatest) at MirRelationsLV.pcf: line 25, column 39
    function valueRange_4 () : java.lang.Object {
      return anExposure.Claim.Contacts.map(\c -> c.ID.Value).toList()
    }
    
    // 'value' attribute on RangeCell (id=thisisatest) at MirRelationsLV.pcf: line 25, column 39
    function valueRoot_3 () : java.lang.Object {
      return MirRelation
    }
    
    // 'value' attribute on RangeCell (id=thisisatest) at MirRelationsLV.pcf: line 25, column 39
    function value_1 () : java.lang.Long {
      return MirRelation.Contact
    }
    
    // 'value' attribute on TypeKeyCell (id=MirRelationTypeDropdown) at MirRelationsLV.pcf: line 31, column 52
    function value_7 () : typekey.MirRelationType_Acc {
      return MirRelation.RelationType
    }
    
    // 'valueRange' attribute on RangeCell (id=thisisatest) at MirRelationsLV.pcf: line 25, column 39
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.lang.Long[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=thisisatest) at MirRelationsLV.pcf: line 25, column 39
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeCell (id=thisisatest) at MirRelationsLV.pcf: line 25, column 39
    function verifyValueRange_6 () : void {
      var __valueRangeArg = anExposure.Claim.Contacts.map(\c -> c.ID.Value).toList()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    property get MirRelation () : entity.MirRelation_Acc {
      return getIteratedValue(1) as entity.MirRelation_Acc
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirRelationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirRelationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at MirRelationsLV.pcf: line 31, column 52
    function sortValue_0 (MirRelation :  entity.MirRelation_Acc) : java.lang.Object {
      return MirRelation.RelationType
    }
    
    // 'toAdd' attribute on RowIterator at MirRelationsLV.pcf: line 19, column 44
    function toAdd_11 (MirRelation :  entity.MirRelation_Acc) : void {
      anExposure.mirReportable_Acc.addToRelation(MirRelation)
    }
    
    // 'toRemove' attribute on RowIterator at MirRelationsLV.pcf: line 19, column 44
    function toRemove_12 (MirRelation :  entity.MirRelation_Acc) : void {
      anExposure.mirReportable_Acc.removeFromRelation(MirRelation)
    }
    
    // 'value' attribute on RowIterator at MirRelationsLV.pcf: line 19, column 44
    function value_13 () : entity.MirRelation_Acc[] {
      return anExposure.mirReportable_Acc.Relation
    }
    
    property get anExposure () : Exposure {
      return getRequireValue("anExposure", 0) as Exposure
    }
    
    property set anExposure ($arg :  Exposure) {
      setRequireValue("anExposure", 0, $arg)
    }
    
    
  }
  
  
}