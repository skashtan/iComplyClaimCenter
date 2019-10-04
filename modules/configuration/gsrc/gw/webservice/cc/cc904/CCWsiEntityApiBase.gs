package gw.webservice.cc.cc904

uses entity.Activity
uses entity.Address
uses entity.Contact
uses entity.Incident
uses gw.api.database.Query
uses gw.api.server.AvailabilityLevel
uses gw.api.webservice.exception.BadIdentifierException
uses gw.api.webservice.exception.EntityStateException
uses gw.api.webservice.exception.PermissionException
uses gw.pl.persistence.core.Bundle
uses gw.pl.persistence.core.BundleProvider
uses gw.pl.util.ArgCheck
uses gw.plugin.Plugins
uses gw.plugin.policy.search.IPolicySearchAdapter
uses gw.transaction.Transaction
uses gw.webservice.cc.cc904.dto.ActivityDTO
uses gw.webservice.cc.cc904.dto.AddressDTO
uses gw.webservice.cc.cc904.dto.BuildingDTO
uses gw.webservice.cc.cc904.dto.ClaimContactDTO
uses gw.webservice.cc.cc904.dto.ClaimContactRoleDTO
uses gw.webservice.cc.cc904.dto.ClaimDTO
uses gw.webservice.cc.cc904.dto.ContactDTO
uses gw.webservice.cc.cc904.dto.CoverageDTO
uses gw.webservice.cc.cc904.dto.DocumentDTO
uses gw.webservice.cc.cc904.dto.ExposureDTO
uses gw.webservice.cc.cc904.dto.IncidentDTO
uses gw.webservice.cc.cc904.dto.NoteDTO
uses gw.webservice.cc.cc904.dto.PolicyDTO
uses gw.webservice.cc.cc904.dto.PolicyLocationDTO
uses gw.webservice.cc.cc904.dto.PolicySummaryDTO
uses gw.webservice.cc.cc904.dto.RiskUnitDTO
uses gw.webservice.cc.cc904.dto.VehicleDTO
uses gw.xml.ws.annotation.WsiAvailability
uses gw.xml.ws.annotation.WsiWebService

/**
 * Contains behavior common to all ClaimCenter WSI EntityAPIs
 */
@WsiWebService("http://guidewire.com/cc/ws/gw/webservice/cc/cc904/CCWsiEntityApiBase")
@WsiAvailability(AvailabilityLevel.MAINTENANCE)
@Export
abstract class CCWsiEntityApiBase {

  protected static var NOOP: block(Object) = \obj: Object -> {}

  protected function runTxnWithResult<T>(dbTxn: (bundle: Bundle): T): T {
    var result: T
    Transaction.runWithNewBundle(\ bundle -> {result = dbTxn(bundle)})
    return result
  }

  protected function assembleFromDTO(dto: AddressDTO, bundleProvider: BundleProvider): Address {
    return dto.writeToNewEntityIn(bundleProvider)
  }

  protected function assembleFromDTO(dto: ClaimDTO, policy: Policy, bundleProvider: BundleProvider): Claim {
    var claim    = dto.writeToNewEntityIn(bundleProvider)

    if (policy != null) {
      claim.Policy = policy
    }

    if (dto.NewClaimant != null) {
      assembleFromDTOs({dto.NewClaimant}, claim, ContactRole.TC_CLAIMANT)
    }

    if (dto.NewLossLocation != null) {
      claim.LossLocation = assembleFromDTO(dto.NewLossLocation, bundleProvider)
    }

    assembleFromDTOs(dto.NewContacts,   bundleProvider, \ctc -> {ctc.Claim = claim})
    assembleFromDTOs(dto.NewDocuments,  bundleProvider, \doc -> {doc.Claim = claim})
    assembleFromDTOs(dto.NewIncidents,  bundleProvider, \inc -> {inc.Claim = claim})
    assembleFromDTOs(dto.NewNotes,      bundleProvider, \nte -> {nte.Claim = claim})

    assembleFromDTOs(dto.Newdoctor,     claim, ContactRole.TC_DOCTOR)
    assembleFromDTOs(dto.Newwitness,    claim, ContactRole.TC_WITNESS)

    assembleFromDTOs(dto.NewActivities, claim, null, NOOP)
    assembleFromDTOs(dto.NewExposures,  claim, NOOP)

    return claim
  }

  protected function assembleFromDTO(dto: ClaimDTO, bundleProvider: BundleProvider, policyDTO: PolicyDTO): Claim {
    var policy = assembleFromDTO(policyDTO, bundleProvider)
    var claim  = assembleFromDTO(dto, policy, bundleProvider)
    return claim
  }

  protected function assembleFromDTO(dto: ClaimDTO, bundleProvider: BundleProvider, policySummaryDTO: PolicySummaryDTO): Claim {
    var policySummary = assembleFromDTO(policySummaryDTO, bundleProvider)
    var policy = Plugins.get(IPolicySearchAdapter).retrievePolicyFromPolicySummary(policySummary).Result
    var claim = assembleFromDTO(dto, policy, bundleProvider)
    claim.LossDate = policySummary.LossDate
    return claim
  }

  protected function assembleFromDTO(dto: ContactDTO, bundleProvider: BundleProvider): Contact {
    return dto.writeToNewEntityIn(bundleProvider)
  }

  protected function assembleFromDTO(dto: PolicyDTO, bundleProvider: BundleProvider): Policy {
    var policy = dto.writeToNewEntityIn(bundleProvider)

    if (dto.NewInsured != null) {
      assembleFromDTOs({dto.NewInsured}, policy, ContactRole.TC_INSURED)
    }

    assembleFromDTOs(dto.NewCoverages,       bundleProvider, \cov -> {cov.Policy = policy})
    assembleFromDTOs(dto.NewPolicyLocations, bundleProvider, \loc -> {loc.Policy = policy})
    assembleFromDTOs(dto.NewVehicles,        bundleProvider, \vru -> {vru.Policy = policy})

    return policy
  }

  protected function assembleFromDTO(dto: PolicySummaryDTO, bundleProvider: BundleProvider): PolicySummary {
    return dto.writeToNewEntityIn(bundleProvider)
  }

  @Throws(BadIdentifierException, "If dto's ActivityPatternID does not exist.")
  @Throws(PermissionException, "If the caller does not have all of the following permissions: VIEW_CLAIM, CREATE_ACTIVITY.")
  @Throws(EntityStateException, "If there is an attempt to add an activity using an activity pattern that isn't available to the particular type of the given claim, or that isn't available to a closed claim (if the given claim is closed), or if the DTO specifies a different claim than the one supplied.")
  protected function assembleFromDTOs(dtos: ActivityDTO[], claim: Claim, exposure: Exposure, setup(act: Activity)): Activity[] {
    return dtos.map(\ dto -> {
      ArgCheck.nonNull (dto, "activityDTO")
      ArgCheck.nonBlank(dto.ActivityPatternPublicID, "activityDTO.ActivityPatternID")

      var pattern = dto.ActivityPattern
      // if these fields are set they should match the values in the associated pattern
      dto.ActivityClass = pattern.ActivityClass
      dto.Type          = pattern.Type

      if (not claim.isPatternValidForClaim(pattern)) {
        var errMsg = "Cannot apply activity pattern \"" + pattern.Code + "\" to claim #" + claim.ClaimNumber
        if (claim.State == ClaimState.TC_CLOSED and !pattern.ClosedClaimAvlble) {
          errMsg += " because it is closed."
        }
        throw (new EntityStateException(errMsg))
      }

      if (dto.ClaimPublicID.HasContent and dto.ClaimPublicID != claim.PublicID) {
        var message = "Trying to add the Activity to a different Claim than was specified in the ActivityDTO.ClaimPublicID"
        throw new EntityStateException(message)
      }

      var activity = dto.writeToNewEntityIn(
          claim,
          \ -> claim.createActivityFromPattern(exposure, pattern)
      )
      setup(activity)

      assembleFromDTOs(dto.NewNotes, claim, \note -> {
        note.Activity = activity
        note.Exposure = exposure
      })

      return activity
    })
  }

  protected function assembleFromDTOs(dtos: BuildingDTO[], bundleProvider: BundleProvider, setup(building: Building)): Building[] {
    return dtos.map(\dto -> {
      var building = dto.writeToNewEntityIn(bundleProvider)

      setup(building)

      return building
    })
  }

  protected function assembleFromDTOs(dtos: ClaimContactRoleDTO[], claimContact: ClaimContact): ClaimContactRole[] {
    return dtos.map(\dto -> {
      var contactRole = dto.Role

      var claimContactRole = dto.writeToNewEntityIn(claimContact)
      claimContactRole.ClaimContact = claimContact //set up fields beforehand to avoid creating a new bean in .addClaimContactAndRoleAsNecessary()

      var claim = claimContact.Claim

      if (claim.isExclusiveRole(contactRole)) {
        claim.setContactByRole(contactRole, claimContact.Contact)
      }
      else {
        claim.addRole(contactRole, claimContact.Contact)
      }
      return claimContactRole
    })
  }

  protected function assembleFromDTOs(dtos: ClaimContactDTO[], bundleProvider: BundleProvider, setup(claimContact: ClaimContact)): ClaimContact[] {
    return dtos.map(\dto -> {
      var claimContact = dto.writeToNewEntityIn(bundleProvider)
      setup(claimContact)

      if (dto.NewContact != null && dto.NewRoles.length != 0) {
        claimContact.Contact = assembleFromDTO(dto.NewContact, bundleProvider)
        assembleFromDTOs(dto.NewRoles, claimContact)
      }

      return claimContact
    })
  }

  protected function assembleFromDTOs(dtos: ContactDTO[], owner: ClaimContactRoleOwner, roleTk: ContactRole): ClaimContact[] {
    return dtos.map(\dto -> {
      var claimContact: ClaimContact
      var contact = assembleFromDTO(dto, owner)
      if (owner.isExclusiveRole(roleTk)) {
        owner.setContactByRole(roleTk, contact)
        claimContact = owner.getClaimContactByRole(roleTk)
      }
      else {
        claimContact = owner.addRole(roleTk, contact).ClaimContact
      }
      return claimContact
    })
  }

  protected function assembleFromDTOs(dtos: CoverageDTO[], bundleProvider: BundleProvider, setup(cov: Coverage)): Coverage[] {
    return dtos.map(\ dto -> {
      ArgCheck.nonNull (dto, "coverageDTO")

      var coverage = dto.writeToNewEntityIn(bundleProvider)
      setup(coverage)

      return coverage
    })
  }

  protected function assembleFromDTOs(dtos: DocumentDTO[], bundleProvider: BundleProvider, setup(doc: Document)): Document[] {
    return dtos.map(\dto -> {
      var doc = dto.writeToNewEntityIn(bundleProvider)
      setup(doc)
      return doc
    })
  }

  protected function assembleFromDTOs(dtos: ExposureDTO[], claim: Claim, setup(exp: Exposure)): Exposure[] {
    return assembleFromDTOs(dtos, claim, null, setup)
  }

  protected function assembleFromDTOs(dtos: ExposureDTO[], claim: Claim, constructIncident: (exp: Exposure): Incident, setup(exp: Exposure)): Exposure[] {
    return dtos.map(\dto -> {
      var exposure = dto.writeToNewEntityIn(claim, \-> createNewExposure(dto, claim, constructIncident))
      setup(exposure)

      assembleFromDTOs(dto.NewActivities, exposure.Claim, exposure, NOOP)
      assembleFromDTOs(dto.Newdoctor,     exposure, ContactRole.TC_DOCTOR)
      assembleFromDTOs(dto.NewDocuments,  claim, \doc  -> {doc.Exposure  = exposure})
      assembleFromDTOs(dto.NewNotes,      claim, \note -> {note.Exposure = exposure})
      return exposure
    })
  }

  protected function assembleFromDTOs(dtos: IncidentDTO[], bundleProvider: BundleProvider, setup(incident: Incident)): Incident[] {
    return dtos.map(\ dto -> {
      var incident = dto.writeToNewEntityIn(bundleProvider)
      setup(incident)

      assembleFromDTOs(dto.NewExposures, incident.Claim, \exp -> incident, NOOP)

      return incident
    })
  }

  protected function assembleFromDTOs(dtos: NoteDTO[], bundleProvider: BundleProvider, setup(note: Note)): Note[] {
    return dtos.map(\ dto -> {
      var note = dto.writeToNewEntityIn(bundleProvider)
      setup(note)
      return note
    })
  }

  protected function assembleFromDTOs(dtos: PolicyLocationDTO[], bundleProvider: BundleProvider, setup(loc: PolicyLocation)): PolicyLocation[] {
    return dtos.map(\ dto -> {
      var policyLocation = dto.writeToNewEntityIn(bundleProvider)
      setup(policyLocation)

      policyLocation.Address = assembleFromDTO(dto.NewAddress, bundleProvider)
      assembleFromDTOs(dto.NewBuildings, bundleProvider, \ building -> {policyLocation.addToBuildings(building)})
      assembleFromDTOs(dto.NewLocationBasedRisks, bundleProvider, \ru -> {(ru as LocationBasedRU).PolicyLocation = policyLocation})
      return policyLocation
    })
  }

  protected function assembleFromDTOs(dtos: RiskUnitDTO[], bundleProvider: BundleProvider, setup(ru: RiskUnit)): RiskUnit[] {
    return dtos.map(\dto -> {
      var riskUnit = dto.writeToNewEntityIn(bundleProvider)

      if (riskUnit typeis LocationBasedRU) {
        if (dto.NewBuilding != null) {
           assembleFromDTOs({dto.NewBuilding}, bundleProvider, \bldg -> {riskUnit.Building = bldg})
        }
        if (dto.NewPolicyLocation != null) {
           assembleFromDTOs({dto.NewPolicyLocation}, bundleProvider, \ploc -> {riskUnit.PolicyLocation = ploc})
        }
      }

      if (riskUnit typeis VehicleRU) {
        if (dto.NewVehicle != null) {
          assembleFromDTOs({dto.NewVehicle}, bundleProvider, \vehicle -> {riskUnit.Vehicle = vehicle})
        }
      }

      setup(riskUnit)
      assembleFromDTOs(dto.NewCoverages, bundleProvider, \cov -> {(cov as RUCoverage).RiskUnit = riskUnit})
      return riskUnit
    })
  }

  protected function assembleFromDTOs(dtos: VehicleDTO[], bundleProvider: BundleProvider, setup: (vehicle: Vehicle)): Vehicle[] {
    return dtos.map(\dto -> {
      var vehicle = dto.writeToNewEntityIn(bundleProvider)
      setup(vehicle)
      return vehicle
    })
  }

  private function createNewExposure(dto: ExposureDTO, claim: Claim, constructIncident: (exp: Exposure): Incident): Exposure {
    var exposure: Exposure
    if (dto.CoverageSubType == null) {
      exposure = claim.newExposure(dto.ExposureType, true)
    }
    else if (constructIncident != null) {
      exposure = claim.newExposureWithNoIncident(dto.PrimaryCoverage, dto.CoverageSubType, dto.Coverage)
      exposure.Incident = constructIncident(exposure)
    }
    else {
      exposure = claim.newExposure(dto.PrimaryCoverage, dto.CoverageSubType, true)
    }
    var claimOrder = exposure.ClaimOrder
    exposure.saveAndSetup()  // this overwrites the exposure's ClaimOrder
    exposure.ClaimOrder = claimOrder
    return exposure
  }


  /* ==========
   * BUNDLE MANAGEMENT
   * ==========
   */

  /**
   * Answer the entity with the supplied PublicID. If a bundle is provided the entity is added to that
   * bundle and that version is returned.
   * @param publicID The PublicID of the object to fetch from the database
   * @param bundle The bundle to which to add the fetched object
   */
  protected function fetchByPublicID<U extends KeyableBean>(publicID: String, bundle: Bundle): U {
    return bundle.add(fetchByPublicID<U>(publicID))
  }

  /**
   * Answer the entity with the supplied PublicID.
   * @param publicID The PublicID of the object to fetch from the database
   */
  protected function fetchByPublicID<U extends KeyableBean>(publicID: String): U {
    return fetchByPublicID<U>(publicID, false)
  }

  /**
   * Answer the entity with the supplied PublicID. If a bundle is provided the entity is added to that
   * bundle and that version is returned.
   * @param publicID The PublicID of the object to fetch from the database
   * @param nullOk Wheter null is a permissible argument
   */
  protected function fetchByPublicID<U extends KeyableBean>(publicID: String, nullOk: boolean): U {
    var entities = fetchByPublicID<U>({publicID})
    var bean = entities.hasNext() ? entities.next() : null

    if (bean == null and !nullOk) {
      throw BadIdentifierException.badPublicId(U, publicID)
    }

    return bean
  }

  /**
   * Answer the entity with the supplied PublicID. If a bundle is provided the entity is added to that
   * bundle and that version is returned.
   * @param publicID The PublicID of the object to fetch from the database
   * @param bundle The bundle to which to add the fetched object
   */
  protected function fetchByPublicID<U extends KeyableBean>(publicIDs: String[]): Iterator<U> {
    return publicIDs.HasElements
      ? Query.make(U).compareIn(U#PublicID, publicIDs).select().iterator()
      : Collections.emptyIterator()
  }
}