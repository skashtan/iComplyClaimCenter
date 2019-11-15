package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirGroupWorkplanLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirGroupWorkplanLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($GroupInfo :  gw.api.dashboard.DashboardTreeGroupInfo) : void {
    __widgetOf(this, pcf.MirGroupWorkplanLV, SECTION_WIDGET_CLASS).setVariables(false, {$GroupInfo})
  }
  
  function refreshVariables ($GroupInfo :  gw.api.dashboard.DashboardTreeGroupInfo) : void {
    __widgetOf(this, pcf.MirGroupWorkplanLV, SECTION_WIDGET_CLASS).setVariables(true, {$GroupInfo})
  }
  
  
}