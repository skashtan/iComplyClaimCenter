package gw.plugin.personaldata

uses gw.api.locale.DisplayKey
uses gw.api.personaldata.PersonalDataDestroyer

@Export
class CCPersonalDataDestructionSamplePlugin implements PersonalDataDestruction {
  private static final var SEPARATOR = ", "

  override function shouldDestroyRoot(root: DestructionRootPinnable, descendants: Collection<DestructionRootPinnable>, origin: DestructionRootPinnable): PersonalDataDisposition {
    var dispositions = new HashSet<PersonalDataDisposition>()

    if(root typeis Contact) {
      dispositions.add(shouldDestroyContact(root))
      if(containMustNotDestroy(dispositions)){//exit early
        return MUST_NOT_DESTROY
      }
      if(descendants.Empty)
        dispositions.add(shouldDestroyClaim(root, null))
    }
    if(root typeis ContactInfo) {
      dispositions.add(shouldDestroyContactInfo(root))
    }

    if(containMustNotDestroy(dispositions)) {//exit early, no need to check descendants
      return MUST_NOT_DESTROY
    }

    for(var descendant in descendants) {
      if(descendant typeis Claim) {
        dispositions.add(shouldDestroyClaim(root, descendant))
      }
      if(descendant typeis ClaimInfo) {
        dispositions.add(shouldDestroyClaimInfo(root, descendant))
      }
    }

    if(containMustNotDestroy(dispositions)) {
      return MUST_NOT_DESTROY
    }
    if(dispositions.contains(PersonalDataDisposition.MAY_DESTROY)) {
      return PersonalDataDisposition.MAY_DESTROY
    }

    return PersonalDataDisposition.MUST_DESTROY;
  }

  private function containMustNotDestroy(dispositions: HashSet<PersonalDataDisposition>): boolean {
    return dispositions.contains(PersonalDataDisposition.MUST_NOT_DESTROY)
  }

  private function shouldDestroyContactInfo(contactInfo: ContactInfo): PersonalDataDisposition {
    if(contactInfo.DoNotDestroy) {
      notifyDataProtectionOfficer(contactInfo, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.DoNotDestroyContactInfo"))
      return MUST_NOT_DESTROY
    }

    return MUST_DESTROY
  }

  private function shouldDestroyContact(contact: Contact): PersonalDataDisposition {
    if (contact typeis UserContact) {
      notifyDataProtectionOfficer(contact, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.UserContact"))
      return MUST_NOT_DESTROY
    }
    if (contact typeis Company or contact typeis Place){
      notifyDataProtectionOfficer(contact, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.WrongType", contact.IntrinsicType))
      return MUST_NOT_DESTROY
    }
    if(contact.DoNotDestroy) {
      notifyDataProtectionOfficer(contact, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.DoNotDestroyContact"))
      return MUST_NOT_DESTROY
    }
    return MUST_DESTROY
  }

  private function shouldDestroyClaim(root: DestructionRootPinnable, claim: Claim): PersonalDataDisposition {
    if(claim == null) {
      notifyDataProtectionOfficer(root, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.NoClaim"))
      return MUST_NOT_DESTROY
    }
    if(claim.isRetired()) {
      return MUST_DESTROY
    }
    if(claim.ClaimInfo.DoNotDestroy) {
      notifyDataProtectionOfficer(root, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.DoNotDestroyClaimInfo", claim.ClaimNumber))
      return MUST_NOT_DESTROY
    }

    var doNotDestroyContacts = claim.ClaimContactsForAllRoles*.Contact.where(\contact -> contact.DoNotDestroy).sort()
    if(doNotDestroyContacts.HasElements)
    {
      notifyDataProtectionOfficer(root, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.DoNotDestroyContactsInClaim",
          claim.ClaimNumber,
          doNotDestroyContacts.join(SEPARATOR),
          doNotDestroyContacts*.PublicID.join(SEPARATOR)))
      return MUST_NOT_DESTROY
    }

    if(claim.Closed) {
      if(claim.CloseDate.addYears(5).differenceInDays(Date.Today) > 0) {
        return MUST_DESTROY
      }
      if(claim.CloseDate.addYears(2).differenceInDays(Date.Today) > 0) {
        return MAY_DESTROY
      }
      notifyDataProtectionOfficer(root, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.ClosedLessThenXYears", claim.ClaimNumber, 2))
      return MUST_NOT_DESTROY
    }
    notifyDataProtectionOfficer(root, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.OpenedClaim", claim.ClaimNumber))
    return MUST_NOT_DESTROY
  }

  private function shouldDestroyClaimInfo(root: DestructionRootPinnable, claimInfo: ClaimInfo): PersonalDataDisposition {
    if(claimInfo.DoNotDestroy) {
      notifyDataProtectionOfficer(root, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.DoNotDestroyClaimInfo", claimInfo.ClaimNumber))
      return MUST_NOT_DESTROY
    }
    var doNotDestroyArchivedContacts = claimInfo.Contacts.where(\contact -> contact.DoNotDestroy).sort()
    if(doNotDestroyArchivedContacts.HasElements)
    {
      notifyDataProtectionOfficer(root, DisplayKey.get("Web.Plugin.PersonalDataDestruction.UnableToDestroyRoot.Reason.DoNotDestroyArchivedContactsInClaim",
          claimInfo.ClaimNumber,
          doNotDestroyArchivedContacts.join(SEPARATOR),
          doNotDestroyArchivedContacts*.PublicID.join(SEPARATOR)))
      return MUST_NOT_DESTROY
    }
    return MUST_DESTROY
  }

  override function shouldDestroyUser(userContact: UserContact): PersonalDataDisposition {
    return MUST_DESTROY
  }

  private function notifyDataProtectionOfficer(root: DestructionRootPinnable,  message: String) {
    notifyDataProtectionOfficer(root, null, message, null)
  }

  override function notifyDataProtectionOfficer(root: DestructionRootPinnable, title: String, message: String, dateOfError: Date) {
    CCPersonalDataLogUtil.logInfoNotDestroyed(root, message)
  }

  override function notifyExternalSystemsRequestProcessed(requester: PersonalDataDestructionRequester) {
  }

  override function createContext(context: PersonalDataPurgeContext): PersonalDataPurgeContext {
    return context
  }

  override function prepareForPurge(context: PersonalDataPurgeContext) {
  }

  override function postPurge(context: PersonalDataPurgeContext) {
  }

  override property get Destroyer(): PersonalDataDestroyer {
    return new CCPersonalDataDestroyer()
  }
}