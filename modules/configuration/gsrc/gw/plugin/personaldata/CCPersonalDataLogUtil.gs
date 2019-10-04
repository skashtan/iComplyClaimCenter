package gw.plugin.personaldata

uses gw.api.locale.DisplayKey
uses gw.api.system.PLLoggerCategory

@Export
class CCPersonalDataLogUtil {

  private construct(){
  }

  /**Utility method logs why the Plugin returns MUST_NOT_DESTROY
   * @param root an object the primary element the message applies to
   * @param message information regarding the MUST_NOT_DESTROY disposition
   * */
  public static function logInfoNotDestroyed(final root: DestructionRootPinnable, final message: String)
  {
    if(root typeis Contact){
      PLLoggerCategory.DATA_DESTRUCTION_REQUEST.info(
          DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyContact", root, root.PublicID, root.AddressBookUID, message)
      )
    }
    else if(root typeis ContactInfo){
      PLLoggerCategory.DATA_DESTRUCTION_REQUEST.info(
          DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyContactInfo", root, root.PublicID, root.ArchivedAddressbookUID, message)
      )
    }
    else{
      throw "Unexpected root type when logging PersonalData ${root.IntrinsicType}. message=${message}"
    }
  }

  /**Utility method logs an Error on DATA_DESTRUCTION_REQUEST for Personal Data
   * @param root an object the primary element the message applies to
   * @param exception the Exception caught that must be displayed in the log
   * */
  public static function logErrorNotDestroyed(final root: DestructionRootPinnable, final exception: Exception)
  {
    if(root typeis Contact){
      PLLoggerCategory.DATA_DESTRUCTION_REQUEST.error(
          DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyContact", root, root.PublicID, root.AddressBookUID, exception.StackTraceAsString)
      )
    }
    else if(root typeis ContactInfo){
      PLLoggerCategory.DATA_DESTRUCTION_REQUEST.error(
          DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyContactInfo", root, root.PublicID, root.ArchivedAddressbookUID, exception.StackTraceAsString)
      )
    }
    else{
      PLLoggerCategory.DATA_DESTRUCTION_REQUEST.error("Found an exception on an unexpected DestructionRootPinnable", exception)
    }
  }
}