package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirRREIDLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirRREIDLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($MirRREIDList :  gw.api.database.IQueryBeanResult<MirRREID_Acc>) : void {
    __widgetOf(this, pcf.MirRREIDLV, SECTION_WIDGET_CLASS).setVariables(false, {$MirRREIDList})
  }
  
  function refreshVariables ($MirRREIDList :  gw.api.database.IQueryBeanResult<MirRREID_Acc>) : void {
    __widgetOf(this, pcf.MirRREIDLV, SECTION_WIDGET_CLASS).setVariables(true, {$MirRREIDList})
  }
  
  
}