package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirBlankDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirBlankDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter () : void {
    __widgetOf(this, pcf.MirBlankDV, SECTION_WIDGET_CLASS).setVariables(false, {})
  }
  
  function refreshVariables () : void {
    __widgetOf(this, pcf.MirBlankDV, SECTION_WIDGET_CLASS).setVariables(true, {})
  }
  
  
}