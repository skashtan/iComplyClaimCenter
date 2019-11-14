package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirExposureActivityLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirExposureActivityLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($activityList :  Activity[]) : void {
    __widgetOf(this, pcf.MirExposureActivityLV, SECTION_WIDGET_CLASS).setVariables(false, {$activityList})
  }
  
  function refreshVariables ($activityList :  Activity[]) : void {
    __widgetOf(this, pcf.MirExposureActivityLV, SECTION_WIDGET_CLASS).setVariables(true, {$activityList})
  }
  
  
}