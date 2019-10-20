package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirOfficeCodeLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirOfficeCodeLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($MirOfficeCodeList :  gw.api.database.IQueryBeanResult<MirOfficeCode_Acc>) : void {
    __widgetOf(this, pcf.MirOfficeCodeLV, SECTION_WIDGET_CLASS).setVariables(false, {$MirOfficeCodeList})
  }
  
  function refreshVariables ($MirOfficeCodeList :  gw.api.database.IQueryBeanResult<MirOfficeCode_Acc>) : void {
    __widgetOf(this, pcf.MirOfficeCodeLV, SECTION_WIDGET_CLASS).setVariables(true, {$MirOfficeCodeList})
  }
  
  
}