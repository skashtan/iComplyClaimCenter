package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirGroupWorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirGroupWorkplanLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($ActivityList :  Activity[]) : void {
    __widgetOf(this, pcf.MirGroupWorkplanLV, SECTION_WIDGET_CLASS).setVariables(false, {$ActivityList})
  }
  
  function refreshVariables ($ActivityList :  Activity[]) : void {
    __widgetOf(this, pcf.MirGroupWorkplanLV, SECTION_WIDGET_CLASS).setVariables(true, {$ActivityList})
  }
  
  
}