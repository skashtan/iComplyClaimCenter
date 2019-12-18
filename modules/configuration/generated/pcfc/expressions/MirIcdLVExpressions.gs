package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirIcdLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirIcdLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirIcdLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirIcdLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=MirICDCode) at MirIcdLV.pcf: line 28, column 40
    function valueRoot_7 () : java.lang.Object {
      return MirICD.ICDCode
    }
    
    // 'value' attribute on TextCell (id=MirICDPosition) at MirIcdLV.pcf: line 24, column 64
    function value_3 () : java.lang.String {
      return String.valueOf(icdList.indexOf(MirICD) + 1)
    }
    
    // 'value' attribute on TextCell (id=MirICDCode) at MirIcdLV.pcf: line 28, column 40
    function value_5 () : java.lang.String {
      return MirICD.ICDCode.Code
    }
    
    property get MirICD () : entity.InjuryDiagnosis {
      return getIteratedValue(1) as entity.InjuryDiagnosis
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirIcdLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirIcdLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at MirIcdLV.pcf: line 14, column 60
    function initialValue_0 () : java.util.List<entity.InjuryDiagnosis> {
      return acc.mir.helper.MirReportableUtil.getMirICDCodes(exposure, acc.mir.clientimplementation.MirClientSpecificICDImpl.getICDIndicator(exposure.Claim))
    }
    
    // 'value' attribute on RowIterator at MirIcdLV.pcf: line 24, column 64
    function sortValue_1 (MirICD :  entity.InjuryDiagnosis) : java.lang.Object {
      return String.valueOf(icdList.indexOf(MirICD) + 1)
    }
    
    // 'value' attribute on RowIterator at MirIcdLV.pcf: line 28, column 40
    function sortValue_2 (MirICD :  entity.InjuryDiagnosis) : java.lang.Object {
      return MirICD.ICDCode.Code
    }
    
    // 'value' attribute on RowIterator at MirIcdLV.pcf: line 19, column 64
    function value_8 () : java.util.List<entity.InjuryDiagnosis> {
      return icdList
    }
    
    property get exposure () : Exposure {
      return getRequireValue("exposure", 0) as Exposure
    }
    
    property set exposure ($arg :  Exposure) {
      setRequireValue("exposure", 0, $arg)
    }
    
    property get icdList () : java.util.List<entity.InjuryDiagnosis> {
      return getVariableValue("icdList", 0) as java.util.List<entity.InjuryDiagnosis>
    }
    
    property set icdList ($arg :  java.util.List<entity.InjuryDiagnosis>) {
      setVariableValue("icdList", 0, $arg)
    }
    
    
  }
  
  
}