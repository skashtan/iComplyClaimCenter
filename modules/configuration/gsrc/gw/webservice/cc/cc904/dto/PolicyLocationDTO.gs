package gw.webservice.cc.cc904.dto

uses gw.api.database.Query
uses gw.api.webservice.exception.BadIdentifierException
uses gw.pl.persistence.core.BundleProvider
uses gw.xml.ws.annotation.WsiExportable
uses java.util.Date

/**
 * <p style="border: 1px solid black; padding: 10px">This Data Transfer Object ("DTO") class is used to generate a WSDL to serialize and deserialize information across the network. Any change to the public properties of this DTO class will change the WSDL, thus breaking any existing clients. So once the corresponding WSDL is in use this DTO should only be changed with extreme caution, as it will require existing clients to be rebuilt and redeployed.<br/><br/>
 * A {@link PolicyLocationDTO} is a DTO that represents an instance of {@link entity.PolicyLocation} for use by certain WS-I Web Services in the base product. This file is composed of basic getters and setters, plus members that make it easier for server-side code to work with DTOs, like virtual getters that query for entities by PublicID, and methods to copy fields to or from an instance of {@link entity.PolicyLocation}.
 * <p>None of these methods constrain how an instance of PolicyLocationDTO is created, initialized or used (beyond the normal Gosu type checking): this is consistent with the <a href="http://en.wikipedia.org/wiki/Data_transfer_object">DTO Design Pattern</a>, which states that "DTOs are simple objects that should not contain any business logic that would require testing". Validation logic that considers whether a DTO field can have a <i>particular</i> value (based on things like effective dates, jurisdictions, line of business, user permissions, the values of other fields, etc.) should not be handled here, but rather by the API that manipulates the PolicyLocationDTO.
 * <p>Please read the documentation in the accelerator before reusing this class in any additional WS-I Web Services.</p>
 * <p>Fields are mapped according to the following rules:
 * <ul><li>Primitive values are copied directly</li><li>Typekey fields are copied directly (the WS-I layer translates them to/from WS-I enums)</li><li>Foreign keys fields are represented by the target object's PublicID</li><li>Arraykey fields are represented by an array of the PublicIDs of the elements in the array</li></ul></p>
 * <p>The specific mappings for {@link PolicyLocationDTO} are as follows:
 * <table border="1"><tr><th>Field</th><th>Maps to</th></tr><tr><td>AddressPublicID</td><td>PolicyLocation.Address.PublicID</td></tr><tr><td>BuildingPublicIDs</td><td>PolicyLocation.Buildings*.PublicID</td></tr><tr><td>CreateTime</td><td>PolicyLocation.CreateTime</td></tr><tr><td>CreateUserPublicID</td><td>PolicyLocation.CreateUser.PublicID</td></tr><tr><td>HighValueItemPublicIDs</td><td>PolicyLocation.HighValueItems*.PublicID</td></tr><tr><td>LienholderPublicIDs</td><td>PolicyLocation.Lienholders*.PublicID</td></tr><tr><td>LocationBasedRiskPublicIDs</td><td>PolicyLocation.LocationBasedRisks*.PublicID</td></tr><tr><td>LocationNumber</td><td>PolicyLocation.LocationNumber</td></tr><tr><td>Notes</td><td>PolicyLocation.Notes</td></tr><tr><td>policyLocationLienHoldersOnlyPublicIDs</td><td>PolicyLocation.policyLocationLienHoldersOnly*.PublicID</td></tr><tr><td>PolicyPublicID</td><td>PolicyLocation.Policy.PublicID</td></tr><tr><td>PolicySystemId</td><td>PolicyLocation.PolicySystemId</td></tr><tr><td>PrimaryLocation</td><td>PolicyLocation.PrimaryLocation</td></tr><tr><td>PublicID</td><td>PolicyLocation.PublicID</td></tr><tr><td>UpdateTime</td><td>PolicyLocation.UpdateTime</td></tr><tr><td>UpdateUserPublicID</td><td>PolicyLocation.UpdateUser.PublicID</td></tr></table></p>
 */
@Export
@WsiExportable("http://guidewire.com/cc/ws/gw/webservice/cc/cc904/dto/PolicyLocationDTO")
final class PolicyLocationDTO {
  /** Derived from PolicyLocation#Address.PublicID */
  var _addressPublicID                        : String        as AddressPublicID
  /** Derived from PolicyLocation#Buildings*.PublicID */
  var _buildingPublicIDs                      : String[]      as BuildingPublicIDs = {}
  var _createTime                             : Date          as CreateTime
  /** Derived from Editable#CreateUser.PublicID */
  var _createUserPublicID                     : String        as CreateUserPublicID
  /** Derived from PolicyLocation#HighValueItems*.PublicID */
  var _highValueItemPublicIDs                 : String[]      as HighValueItemPublicIDs = {}
  /** Derived from PolicyLocation#Lienholders*.PublicID */
  var _lienholderPublicIDs                    : String[]      as LienholderPublicIDs = {}
  /** Derived from PolicyLocation#LocationBasedRisks*.PublicID */
  var _locationBasedRiskPublicIDs             : String[]      as LocationBasedRiskPublicIDs = {}
  var _locationNumber                         : String        as LocationNumber
  var _newAddress                             : AddressDTO    as NewAddress
  var _newBuildings                           : BuildingDTO[] as NewBuildings = {}
  var _newLocationBasedRisks                  : RiskUnitDTO[] as NewLocationBasedRisks = {}
  var _notes                                  : String        as Notes
  /** Derived from gw.entity.GWPolicyLocationEnhancement#policyLocationLienHoldersOnly*.PublicID */
  var _policyLocationLienHoldersOnlyPublicIDs : String[]      as policyLocationLienHoldersOnlyPublicIDs = {}
  /** Derived from PolicyLocation#Policy.PublicID */
  var _policyPublicID                         : String        as PolicyPublicID
  var _policySystemId                         : String        as PolicySystemId
  var _primaryLocation                        : Boolean       as PrimaryLocation
  var _publicID                               : String        as PublicID
  var _updateTime                             : Date          as UpdateTime
  /** Derived from Editable#UpdateUser.PublicID */
  var _updateUserPublicID                     : String        as UpdateUserPublicID

  construct() { }

  /**
   * Copies the platform-managed fields from the supplied PolicyLocation
   * @param that The PolicyLocation to copy from.
   */
  protected function _copyReadOnlyFieldsFrom(that: PolicyLocation) {
    _buildingPublicIDs                      = that.Buildings*.PublicID
    _createTime                             = that.CreateTime
    _createUserPublicID                     = that.CreateUser.PublicID
    _highValueItemPublicIDs                 = that.HighValueItems*.PublicID
    _lienholderPublicIDs                    = that.Lienholders*.PublicID
    _locationBasedRiskPublicIDs             = that.LocationBasedRisks*.PublicID
    _policyLocationLienHoldersOnlyPublicIDs = that.policyLocationLienHoldersOnly*.PublicID
    _updateTime                             = that.UpdateTime
    _updateUserPublicID                     = that.UpdateUser.PublicID
  }

  /**
   * Set the fields in this DTO using the supplied PolicyLocation
   * @param that The PolicyLocation to copy from.
   */
  final function readFrom(that: PolicyLocation): PolicyLocationDTO {
    _copyReadOnlyFieldsFrom(that)

    AddressPublicID                         = that.Address.PublicID
    LocationNumber                          = that.LocationNumber
    Notes                                   = that.Notes
    PolicyPublicID                          = that.Policy.PublicID
    PolicySystemId                          = that.PolicySystemId
    PrimaryLocation                         = that.PrimaryLocation
    PublicID                                = that.PublicID
    return this
  }

  /**
   * Update the supplied PolicyLocation using the field values stored in this DTO
   * @param that The PolicyLocation to update.
   * @param (Optional) ignoreNullValues If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the PolicyLocation, even those that are null. Usually you will want this to be {@code true}.
   */
  final function writeTo(that: PolicyLocation, ignoreNullValues = true): PolicyLocation {
    if (AddressPublicID                        != null or !ignoreNullValues) that.Address                                = Address
    if (LocationNumber                         != null or !ignoreNullValues) that.LocationNumber                         = LocationNumber
    if (Notes                                  != null or !ignoreNullValues) that.Notes                                  = Notes
    if (PolicyPublicID                         != null or !ignoreNullValues) that.Policy                                 = Policy
    if (PolicySystemId                         != null or !ignoreNullValues) that.PolicySystemId                         = PolicySystemId
    if (PrimaryLocation                        != null or !ignoreNullValues) that.PrimaryLocation                        = PrimaryLocation
    if (PublicID                               != null or !ignoreNullValues) that.PublicID                               = PublicID
    return that
  }

  /**
   * Uses the createNew block to create a new PolicyLocation, adds it to the supplied bundle, then updates it using the field values stored in this DTO. The ignoreNullValues parameter controls how the fields that are null are treated.
   * @param bundleProvider The entity in whose Bundle to create the new PolicyLocation.
   * @param createNew (Optional) A block that returns a new instance of PolicyLocation. If this is null, the default constructor will be used.
   * @param ignoreNullValues (Optional) If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the PolicyLocation, even those that are null. Usually you will want this to be {@code true}.
   */
  final function writeToNewEntityIn(bundleProvider: BundleProvider, createNew: block(): PolicyLocation = null, ignoreNullValues = true): PolicyLocation {
    var instance: PolicyLocation
    var bundle = bundleProvider.Bundle
    if (createNew == null) {
      instance = bundle == null
          ? new PolicyLocation()
          : new PolicyLocation(bundle)
    }
    else {
      instance = createNew()

      if (bundle != null) {
        instance = bundle.add(instance)
      }
    }
    return writeTo(instance, ignoreNullValues)
  }

  /** Convenience property that returns the {@link Address} whose PublicID is {@code AddressPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Address()                             : Address      { return fetchByPublicID(AddressPublicID) }
  
  /** Convenience property that returns a {@link Building[]} of the objects whose PublicIDs are in {@code BuildingPublicIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Buildings()                           : Building[]   { return fetchByPublicID(BuildingPublicIDs) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code CreateUserPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get CreateUser()                          : User         { return fetchByPublicID(CreateUserPublicID) }
  
  /** Convenience property that returns a {@link PropertyItem[]} of the objects whose PublicIDs are in {@code HighValueItemPublicIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get HighValueItems()                      : PropertyItem[]{ return fetchByPublicID(HighValueItemPublicIDs) }
  
  /** Convenience property that returns a {@link PropertyOwner[]} of the objects whose PublicIDs are in {@code LienholderPublicIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Lienholders()                         : PropertyOwner[]{ return fetchByPublicID(LienholderPublicIDs) }
  
  /** Convenience property that returns a {@link LocationBasedRU[]} of the objects whose PublicIDs are in {@code LocationBasedRiskPublicIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get LocationBasedRisks()                  : LocationBasedRU[]{ return fetchByPublicID(LocationBasedRiskPublicIDs) }
  
  /** Convenience property that returns a {@link PropertyOwner[]} of the objects whose PublicIDs are in {@code policyLocationLienHoldersOnlyPublicIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get policyLocationLienHoldersOnly()       : PropertyOwner[]{ return fetchByPublicID(policyLocationLienHoldersOnlyPublicIDs) }
  
  /** Convenience property that returns the {@link Policy} whose PublicID is {@code PolicyPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Policy()                              : Policy       { return fetchByPublicID(PolicyPublicID) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code UpdateUserPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get UpdateUser()                          : User         { return fetchByPublicID(UpdateUserPublicID) }

  /**
   * return a new PolicyLocationDTO that represents the current state of the supplied PolicyLocation.
   * @param that The PolicyLocation to be represented.
   */
  static function valueOf(that: PolicyLocation): PolicyLocationDTO {
    return new PolicyLocationDTO().readFrom(that)
  }

  /**
   * Returns all of the PolicyLocation instances whose public IDs are in the supplied list, or an empty array if the supplied list is null or empty.
   * @param publicIDs A list of the PublicIDs.
   */
  private static function fetchByPublicID<T extends KeyableBean>(publicIDs: String[]): T[] {
    var results: T[] = {}
    if (publicIDs.HasElements) {
      results = Query.make(T)
          .compareIn(T#PublicID, publicIDs)
          .select()
          .toTypedArray()
      var badIDs = publicIDs.subtract(results*.PublicID)
      if (badIDs.HasElements) throw BadIdentifierException.badPublicId(T, "{" + badIDs.join(", ") + "}")
    }
    return results
  }

  /**
   * Returns the PolicyLocation whose public ID is in the supplied list, or null if the publicID is null.
   * @param publicIDs A list of the PublicIDs.
   */
  private static function fetchByPublicID<T extends KeyableBean>(publicID: String): T {
    var result: T
    if (publicID != null) {
      result = Query.make(T)
          .compare(T#PublicID, Equals, publicID)
          .select()
          .AtMostOneRow
      if (result == null) throw BadIdentifierException.badPublicId(T, publicID)
    }
    return result
  }
}