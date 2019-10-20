package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirRelationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirRelationsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($anExposure :  Exposure) : void {
    __widgetOf(this, pcf.MirRelationsLV, SECTION_WIDGET_CLASS).setVariables(false, {$anExposure})
  }
  
  function refreshVariables ($anExposure :  Exposure) : void {
    __widgetOf(this, pcf.MirRelationsLV, SECTION_WIDGET_CLASS).setVariables(true, {$anExposure})
  }
  
  
}