package gw.webservice.cc.cc904.dto

uses gw.api.database.Query
uses gw.api.webservice.exception.BadIdentifierException
uses gw.pl.persistence.core.BundleProvider
uses gw.xml.ws.annotation.WsiExportable
uses java.util.Date

/**
 * <p style="border: 1px solid black; padding: 10px">This Data Transfer Object ("DTO") class is used to generate a WSDL to serialize and deserialize information across the network. Any change to the public properties of this DTO class will change the WSDL, thus breaking any existing clients. So once the corresponding WSDL is in use this DTO should only be changed with extreme caution, as it will require existing clients to be rebuilt and redeployed.<br/><br/>
 * A {@link BuildingDTO} is a DTO that represents an instance of {@link entity.Building} for use by certain WS-I Web Services in the base product. This file is composed of basic getters and setters, plus members that make it easier for server-side code to work with DTOs, like virtual getters that query for entities by PublicID, and methods to copy fields to or from an instance of {@link entity.Building}.
 * <p>None of these methods constrain how an instance of BuildingDTO is created, initialized or used (beyond the normal Gosu type checking): this is consistent with the <a href="http://en.wikipedia.org/wiki/Data_transfer_object">DTO Design Pattern</a>, which states that "DTOs are simple objects that should not contain any business logic that would require testing". Validation logic that considers whether a DTO field can have a <i>particular</i> value (based on things like effective dates, jurisdictions, line of business, user permissions, the values of other fields, etc.) should not be handled here, but rather by the API that manipulates the BuildingDTO.
 * <p>Please read the documentation in the accelerator before reusing this class in any additional WS-I Web Services.</p>
 * <p>Fields are mapped according to the following rules:
 * <ul><li>Primitive values are copied directly</li><li>Typekey fields are copied directly (the WS-I layer translates them to/from WS-I enums)</li><li>Foreign keys fields are represented by the target object's PublicID</li><li>Arraykey fields are represented by an array of the PublicIDs of the elements in the array</li></ul></p>
 * <p>The specific mappings for {@link BuildingDTO} are as follows:
 * <table border="1"><tr><th>Field</th><th>Maps to</th></tr><tr><td>BuildingNumber</td><td>Building.BuildingNumber</td></tr><tr><td>CreateTime</td><td>Building.CreateTime</td></tr><tr><td>CreateUserPublicID</td><td>Building.CreateUser.PublicID</td></tr><tr><td>Notes</td><td>Building.Notes</td></tr><tr><td>PolicyLocationPublicID</td><td>Building.PolicyLocation.PublicID</td></tr><tr><td>PolicySystemId</td><td>Building.PolicySystemId</td></tr><tr><td>PublicID</td><td>Building.PublicID</td></tr><tr><td>UpdateTime</td><td>Building.UpdateTime</td></tr><tr><td>UpdateUserPublicID</td><td>Building.UpdateUser.PublicID</td></tr></table></p>
 */
@Export
@WsiExportable("http://guidewire.com/cc/ws/gw/webservice/cc/cc904/dto/BuildingDTO")
final class BuildingDTO {
  var _buildingNumber         : String as BuildingNumber
  var _createTime             : Date   as CreateTime
  /** Derived from Editable#CreateUser.PublicID */
  var _createUserPublicID     : String as CreateUserPublicID
  var _notes                  : String as Notes
  /** Derived from Building#PolicyLocation.PublicID */
  var _policyLocationPublicID : String as PolicyLocationPublicID
  var _policySystemId         : String as PolicySystemId
  var _publicID               : String as PublicID
  var _updateTime             : Date   as UpdateTime
  /** Derived from Editable#UpdateUser.PublicID */
  var _updateUserPublicID     : String as UpdateUserPublicID

  construct() { }

  /**
   * Copies the platform-managed fields from the supplied Building
   * @param that The Building to copy from.
   */
  protected function _copyReadOnlyFieldsFrom(that: Building) {
    _createTime             = that.CreateTime
    _createUserPublicID     = that.CreateUser.PublicID
    _updateTime             = that.UpdateTime
    _updateUserPublicID     = that.UpdateUser.PublicID
  }

  /**
   * Set the fields in this DTO using the supplied Building
   * @param that The Building to copy from.
   */
  final function readFrom(that: Building): BuildingDTO {
    _copyReadOnlyFieldsFrom(that)

    BuildingNumber          = that.BuildingNumber
    Notes                   = that.Notes
    PolicyLocationPublicID  = that.PolicyLocation.PublicID
    PolicySystemId          = that.PolicySystemId
    PublicID                = that.PublicID
    return this
  }

  /**
   * Update the supplied Building using the field values stored in this DTO
   * @param that The Building to update.
   * @param (Optional) ignoreNullValues If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the Building, even those that are null. Usually you will want this to be {@code true}.
   */
  final function writeTo(that: Building, ignoreNullValues = true): Building {
    if (BuildingNumber         != null or !ignoreNullValues) that.BuildingNumber         = BuildingNumber
    if (Notes                  != null or !ignoreNullValues) that.Notes                  = Notes
    if (PolicyLocationPublicID != null or !ignoreNullValues) that.PolicyLocation         = PolicyLocation
    if (PolicySystemId         != null or !ignoreNullValues) that.PolicySystemId         = PolicySystemId
    if (PublicID               != null or !ignoreNullValues) that.PublicID               = PublicID
    return that
  }

  /**
   * Uses the createNew block to create a new Building, adds it to the supplied bundle, then updates it using the field values stored in this DTO. The ignoreNullValues parameter controls how the fields that are null are treated.
   * @param bundleProvider The entity in whose Bundle to create the new Building.
   * @param createNew (Optional) A block that returns a new instance of Building. If this is null, the default constructor will be used.
   * @param ignoreNullValues (Optional) If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the Building, even those that are null. Usually you will want this to be {@code true}.
   */
  final function writeToNewEntityIn(bundleProvider: BundleProvider, createNew: block(): Building = null, ignoreNullValues = true): Building {
    var instance: Building
    var bundle = bundleProvider.Bundle
    if (createNew == null) {
      instance = bundle == null
          ? new Building()
          : new Building(bundle)
    }
    else {
      instance = createNew()

      if (bundle != null) {
        instance = bundle.add(instance)
      }
    }
    return writeTo(instance, ignoreNullValues)
  }

  /** Convenience property that returns the {@link User} whose PublicID is {@code CreateUserPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get CreateUser()          : User  { return fetchByPublicID(CreateUserPublicID) }
  
  /** Convenience property that returns the {@link PolicyLocation} whose PublicID is {@code PolicyLocationPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get PolicyLocation()      : PolicyLocation{ return fetchByPublicID(PolicyLocationPublicID) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code UpdateUserPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get UpdateUser()          : User  { return fetchByPublicID(UpdateUserPublicID) }

  /**
   * return a new BuildingDTO that represents the current state of the supplied Building.
   * @param that The Building to be represented.
   */
  static function valueOf(that: Building): BuildingDTO {
    return new BuildingDTO().readFrom(that)
  }

  /**
   * Returns the Building whose public ID is in the supplied list, or null if the publicID is null.
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