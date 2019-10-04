package gw.webservice.cc.cc904.dto

uses gw.api.database.Query
uses gw.api.webservice.exception.BadIdentifierException
uses gw.lang.reflect.ReflectUtil
uses gw.pl.persistence.core.BundleProvider
uses gw.xml.ws.annotation.WsiExportable
uses java.lang.Integer
uses java.util.Date

/**
 * <p style="border: 1px solid black; padding: 10px">This Data Transfer Object ("DTO") class is used to generate a WSDL to serialize and deserialize information across the network. Any change to the public properties of this DTO class will change the WSDL, thus breaking any existing clients. So once the corresponding WSDL is in use this DTO should only be changed with extreme caution, as it will require existing clients to be rebuilt and redeployed.<br/><br/>
 * A {@link RiskUnitDTO} is a DTO that represents an instance of {@link entity.RiskUnit} for use by certain WS-I Web Services in the base product. This file is composed of basic getters and setters, plus members that make it easier for server-side code to work with DTOs, like virtual getters that query for entities by PublicID, and methods to copy fields to or from an instance of {@link entity.RiskUnit}.
 * <p>None of these methods constrain how an instance of RiskUnitDTO is created, initialized or used (beyond the normal Gosu type checking): this is consistent with the <a href="http://en.wikipedia.org/wiki/Data_transfer_object">DTO Design Pattern</a>, which states that "DTOs are simple objects that should not contain any business logic that would require testing". Validation logic that considers whether a DTO field can have a <i>particular</i> value (based on things like effective dates, jurisdictions, line of business, user permissions, the values of other fields, etc.) should not be handled here, but rather by the API that manipulates the RiskUnitDTO.
 * <p>Please read the documentation in the accelerator before reusing this class in any additional WS-I Web Services.</p>
 * <p>Fields are mapped according to the following rules:
 * <ul><li>Primitive values are copied directly</li><li>Typekey fields are copied directly (the WS-I layer translates them to/from WS-I enums)</li><li>Foreign keys fields are represented by the target object's PublicID</li><li>Arraykey fields are represented by an array of the PublicIDs of the elements in the array</li></ul></p>
 * <p>The specific mappings for {@link RiskUnitDTO} are as follows:
 * <table border="1"><tr><th>Field</th><th>Maps to</th></tr><tr><td>BuildingPublicID</td><td>LocationBasedRU.Building.PublicID</td></tr><tr><td>ClassCodePublicID</td><td>RiskUnit.ClassCode.PublicID</td></tr><tr><td>CoveragePublicIDs</td><td>RiskUnit.Coverages*.PublicID</td></tr><tr><td>CreateTime</td><td>RiskUnit.CreateTime</td></tr><tr><td>CreateUserPublicID</td><td>RiskUnit.CreateUser.PublicID</td></tr><tr><td>Description</td><td>RiskUnit.Description</td></tr><tr><td>EndDate</td><td>TripRU.EndDate</td></tr><tr><td>GeographicalRegion</td><td>TripRU.GeographicalRegion</td></tr><tr><td>LienholderPublicIDs</td><td>LocationBasedRU.Lienholders*.PublicID</td></tr><tr><td>OtherRiskType</td><td>LocationMiscRU.OtherRiskType</td></tr><tr><td>PolicyLocationPublicID</td><td>LocationBasedRU.PolicyLocation.PublicID</td></tr><tr><td>PolicyPublicID</td><td>RiskUnit.Policy.PublicID</td></tr><tr><td>PolicySystemId</td><td>RiskUnit.PolicySystemId</td></tr><tr><td>PropertyPublicID</td><td>LocationBasedRU.Property.PublicID</td></tr><tr><td>PublicID</td><td>RiskUnit.PublicID</td></tr><tr><td>RUNumber</td><td>RiskUnit.RUNumber</td></tr><tr><td>StartDate</td><td>TripRU.StartDate</td></tr><tr><td>Subtype</td><td>RiskUnit.Subtype</td></tr><tr><td>TripDescription</td><td>TripRU.TripDescription</td></tr><tr><td>UpdateTime</td><td>RiskUnit.UpdateTime</td></tr><tr><td>UpdateUserPublicID</td><td>RiskUnit.UpdateUser.PublicID</td></tr><tr><td>VehicleLocationPublicID</td><td>VehicleRU.VehicleLocation.PublicID</td></tr><tr><td>VehiclePublicID</td><td>VehicleRU.Vehicle.PublicID</td></tr></table></p>
 */
@Export
@WsiExportable("http://guidewire.com/cc/ws/gw/webservice/cc/cc904/dto/RiskUnitDTO")
final class RiskUnitDTO {
  /** Derived from LocationBasedRU#Building.PublicID */
  var _buildingPublicID        : String             as BuildingPublicID
  /** Derived from RiskUnit#ClassCode.PublicID */
  var _classCodePublicID       : String             as ClassCodePublicID
  /** Derived from RiskUnit#Coverages*.PublicID */
  var _coveragePublicIDs       : String[]           as CoveragePublicIDs = {}
  var _createTime              : Date               as CreateTime
  /** Derived from Editable#CreateUser.PublicID */
  var _createUserPublicID      : String             as CreateUserPublicID
  var _description             : String             as Description
  var _endDate                 : Date               as EndDate
  var _geographicalRegion      : GeographicalRegion as GeographicalRegion
  /** Derived from LocationBasedRU#Lienholders*.PublicID */
  var _lienholderPublicIDs     : String[]           as LienholderPublicIDs = {}
  var _newBuilding             : BuildingDTO        as NewBuilding
  var _newCoverages            : CoverageDTO[]      as NewCoverages = {}
  var _newPolicyLocation       : PolicyLocationDTO  as NewPolicyLocation
  var _newVehicle              : VehicleDTO         as NewVehicle
  var _otherRiskType           : OtherRiskType      as OtherRiskType
  /** Derived from LocationBasedRU#PolicyLocation.PublicID */
  var _policyLocationPublicID  : String             as PolicyLocationPublicID
  /** Derived from RiskUnit#Policy.PublicID */
  var _policyPublicID          : String             as PolicyPublicID
  var _policySystemId          : String             as PolicySystemId
  /** Derived from LocationBasedRU#Property.PublicID */
  var _propertyPublicID        : String             as PropertyPublicID
  var _publicID                : String             as PublicID
  var _rUNumber                : Integer            as RUNumber
  var _startDate               : Date               as StartDate
  var _subtype                 : typekey.RiskUnit   as Subtype
  var _tripDescription         : String             as TripDescription
  var _updateTime              : Date               as UpdateTime
  /** Derived from Editable#UpdateUser.PublicID */
  var _updateUserPublicID      : String             as UpdateUserPublicID
  /** Derived from VehicleRU#VehicleLocation.PublicID */
  var _vehicleLocationPublicID : String             as VehicleLocationPublicID
  /** Derived from VehicleRU#Vehicle.PublicID */
  var _vehiclePublicID         : String             as VehiclePublicID

  construct() { }

  /**
   * Copies the platform-managed fields from the supplied RiskUnit
   * @param that The RiskUnit to copy from.
   */
  protected function _copyReadOnlyFieldsFrom(that: RiskUnit) {
    // if field is on base class
      _coveragePublicIDs       = that.Coverages*.PublicID
      _createTime              = that.CreateTime
      _createUserPublicID      = that.CreateUser.PublicID
      _subtype                 = that.Subtype
      _updateTime              = that.UpdateTime
      _updateUserPublicID      = that.UpdateUser.PublicID
    //
    if (that typeis LocationBasedRU) {
      _lienholderPublicIDs     = that.Lienholders*.PublicID
    }
  }

  /**
   * Set the fields in this DTO using the supplied RiskUnit
   * @param that The RiskUnit to copy from.
   */
  final function readFrom(that: RiskUnit): RiskUnitDTO {
    _copyReadOnlyFieldsFrom(that)

    // if field is on base class
      ClassCodePublicID        = that.ClassCode.PublicID
      Description              = that.Description
      PolicyPublicID           = that.Policy.PublicID
      PolicySystemId           = that.PolicySystemId
      PublicID                 = that.PublicID
      RUNumber                 = that.RUNumber
    //
    if (that typeis LocationBasedRU) {
      BuildingPublicID         = that.Building.PublicID
      PolicyLocationPublicID   = that.PolicyLocation.PublicID
      PropertyPublicID         = that.Property.PublicID
    }
    if (that typeis LocationMiscRU) {
      OtherRiskType            = that.OtherRiskType
    }
    if (that typeis TripRU) {
      EndDate                  = that.EndDate
      GeographicalRegion       = that.GeographicalRegion
      StartDate                = that.StartDate
      TripDescription          = that.TripDescription
    }
    if (that typeis VehicleRU) {
      VehicleLocationPublicID  = that.VehicleLocation.PublicID
      VehiclePublicID          = that.Vehicle.PublicID
    }
    return this
  }

  /**
   * Update the supplied RiskUnit using the field values stored in this DTO
   * @param that The RiskUnit to update.
   * @param (Optional) ignoreNullValues If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the RiskUnit, even those that are null. Usually you will want this to be {@code true}.
   */
  final function writeTo<T extends RiskUnit>(that: T, ignoreNullValues = true): T {
    // if field is on base class
      if (ClassCodePublicID       != null or !ignoreNullValues) that.ClassCode               = ClassCode
      if (Description             != null or !ignoreNullValues) that.Description             = Description
      if (PolicyPublicID          != null or !ignoreNullValues) that.Policy                  = Policy
      if (PolicySystemId          != null or !ignoreNullValues) that.PolicySystemId          = PolicySystemId
      if (PublicID                != null or !ignoreNullValues) that.PublicID                = PublicID
      if (RUNumber                != null or !ignoreNullValues) that.RUNumber                = RUNumber
    //
    if (that typeis LocationBasedRU) {
      if (BuildingPublicID        != null or !ignoreNullValues) that.Building                = Building
      if (PolicyLocationPublicID  != null or !ignoreNullValues) that.PolicyLocation          = PolicyLocation
      if (PropertyPublicID        != null or !ignoreNullValues) that.Property                = Property
    }
    if (that typeis LocationMiscRU) {
      if (OtherRiskType           != null or !ignoreNullValues) that.OtherRiskType           = OtherRiskType
    }
    if (that typeis TripRU) {
      if (EndDate                 != null or !ignoreNullValues) that.EndDate                 = EndDate
      if (GeographicalRegion      != null or !ignoreNullValues) that.GeographicalRegion      = GeographicalRegion
      if (StartDate               != null or !ignoreNullValues) that.StartDate               = StartDate
      if (TripDescription         != null or !ignoreNullValues) that.TripDescription         = TripDescription
    }
    if (that typeis VehicleRU) {
      if (VehicleLocationPublicID != null or !ignoreNullValues) that.VehicleLocation         = VehicleLocation
      if (VehiclePublicID         != null or !ignoreNullValues) that.Vehicle                 = Vehicle
    }
    return that
  }

  /**
   * Uses the createNew block to create a new RiskUnit, adds it to the supplied bundle, then updates it using the field values stored in this DTO. The ignoreNullValues parameter controls how the fields that are null are treated.
   * @param bundleProvider The entity in whose Bundle to create the new RiskUnit.
   * @param createNew (Optional) A block that returns a new instance of RiskUnit. If this is null, the default constructor will be used.
   * @param ignoreNullValues (Optional) If {@code true}, only those fields that are non-null are used (i.e. the null-valued fields are treated as if they were unspecified). If {@code false}, every DTO field will be used to update the RiskUnit, even those that are null. Usually you will want this to be {@code true}.
   */
  final function writeToNewEntityIn<T extends RiskUnit>(bundleProvider: BundleProvider, createNew: block(): T = null, ignoreNullValues = true): T {
    var instance: T
    var bundle = bundleProvider.Bundle
    if (createNew == null) {
      instance = bundle == null
          ? ReflectUtil.construct(ConcreteSubtypeClassName, {})
          : ReflectUtil.construct(ConcreteSubtypeClassName, {bundle})
    }
    else {
      instance = createNew()

      if (bundle != null) {
        instance = bundle.add(instance)
      }
    }
    return writeTo(instance, ignoreNullValues)
  }

  /**
   * Returns the name of the instantiable subclass referred to by the Subtype typekey, or the base class RiskUnit if there is none.
   */
  final property get ConcreteSubtypeClassName(): String {
    return "entity." + (Subtype.Code ?: "RiskUnit")
  }

  /** Convenience property that returns the {@link Building} whose PublicID is {@code BuildingPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Building()             : Building          { return fetchByPublicID(BuildingPublicID) }
  
  /** Convenience property that returns the {@link ClassCode} whose PublicID is {@code ClassCodePublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get ClassCode()            : ClassCode         { return fetchByPublicID(ClassCodePublicID) }
  
  /** Convenience property that returns a {@link RUCoverage[]} of the objects whose PublicIDs are in {@code CoveragePublicIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Coverages()            : RUCoverage[]      { return fetchByPublicID(CoveragePublicIDs) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code CreateUserPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get CreateUser()           : User              { return fetchByPublicID(CreateUserPublicID) }
  
  /** Convenience property that returns a {@link PropertyOwner[]} of the objects whose PublicIDs are in {@code LienholderPublicIDs}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Lienholders()          : PropertyOwner[]   { return fetchByPublicID(LienholderPublicIDs) }
  
  /** Convenience property that returns the {@link PolicyLocation} whose PublicID is {@code PolicyLocationPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get PolicyLocation()       : PolicyLocation    { return fetchByPublicID(PolicyLocationPublicID) }
  
  /** Convenience property that returns the {@link Policy} whose PublicID is {@code PolicyPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Policy()               : Policy            { return fetchByPublicID(PolicyPublicID) }
  
  /** Convenience property that returns the {@link PolicyLocation} whose PublicID is {@code PropertyPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Property()             : PolicyLocation    { return fetchByPublicID(PropertyPublicID) }
  
  /** Convenience property that returns the {@link User} whose PublicID is {@code UpdateUserPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get UpdateUser()           : User              { return fetchByPublicID(UpdateUserPublicID) }
  
  /** Convenience property that returns the {@link PolicyLocation} whose PublicID is {@code VehicleLocationPublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get VehicleLocation()      : PolicyLocation    { return fetchByPublicID(VehicleLocationPublicID) }
  
  /** Convenience property that returns the {@link Vehicle} whose PublicID is {@code VehiclePublicID}, or {@code null} if PublicID is {@code null}. This property is only available on the server--it is not exposed through the WS-I layer. */
  property get Vehicle()              : Vehicle           { return fetchByPublicID(VehiclePublicID) }

  /**
   * return a new RiskUnitDTO that represents the current state of the supplied RiskUnit.
   * @param that The RiskUnit to be represented.
   */
  static function valueOf(that: RiskUnit): RiskUnitDTO {
    return new RiskUnitDTO().readFrom(that)
  }

  /**
   * Returns all of the RiskUnit instances whose public IDs are in the supplied list, or an empty array if the supplied list is null or empty.
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
   * Returns the RiskUnit whose public ID is in the supplied list, or null if the publicID is null.
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