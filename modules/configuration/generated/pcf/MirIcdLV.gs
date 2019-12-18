package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirIcdLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirIcdLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($exposure :  Exposure) : void {
    __widgetOf(this, pcf.MirIcdLV, SECTION_WIDGET_CLASS).setVariables(false, {$exposure})
  }
  
  function refreshVariables ($exposure :  Exposure) : void {
    __widgetOf(this, pcf.MirIcdLV, SECTION_WIDGET_CLASS).setVariables(true, {$exposure})
  }
  
  
}