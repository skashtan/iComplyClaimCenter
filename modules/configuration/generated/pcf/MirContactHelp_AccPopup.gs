package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirContactHelp_AccPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MirContactHelp_AccPopup extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.MirContactHelp_AccPopup, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination () : pcf.api.Destination {
    return __newDestination(config(), {}, 0)
  }
  
  static function push () : pcf.api.Location {
    return __newDestination(config(), {}, 0).push()
  }
  
  
}