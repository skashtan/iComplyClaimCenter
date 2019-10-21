package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirContactLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirContactLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($anExposure :  Exposure, $contactRole :  ContactRole) : void {
    __widgetOf(this, pcf.MirContactLV, SECTION_WIDGET_CLASS).setVariables(false, {$anExposure, $contactRole})
  }
  
  function refreshVariables ($anExposure :  Exposure, $contactRole :  ContactRole) : void {
    __widgetOf(this, pcf.MirContactLV, SECTION_WIDGET_CLASS).setVariables(true, {$anExposure, $contactRole})
  }
  
  
}