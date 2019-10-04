package gw.plugin.personaldata

uses com.google.common.collect.Sets
uses gw.api.claim.PersonalDataPurger
uses gw.api.database.Query
uses gw.api.database.QuerySelectColumns
uses gw.api.database.Relop
uses gw.api.personaldata.PersonalDataDestroyer
uses gw.plugin.Plugins

@Export
class CCPersonalDataDestroyer implements PersonalDataDestroyer {

  override function destroyContact(purgeRequest: PersonalDataContactDestructionRequest): ContactDestructionStatus {
    var contact = findContact(purgeRequest.ContactPublicID)

    if (contact != null) {
      return destroyContact(contact)
    }
    else {
      var contactInfo = findContactInfo(purgeRequest.ContactPublicID)

      if(contactInfo != null) {
        return destroyContactInfo(contactInfo)
      }
    }

    return ContactDestructionStatus.TC_COMPLETED;
  }

  private function destroyContact(contact: Contact): ContactDestructionStatus {
    try {
        var claim = findRelatedClaimOrNull(contact)
        if (canDestroy(contact, claim)) {
          PersonalDataPurger.purge(claim)
          return ContactDestructionStatus.TC_COMPLETED
        }
      return ContactDestructionStatus.TC_NOTDESTROYED
    } catch (e: Exception) {
      CCPersonalDataLogUtil.logErrorNotDestroyed(contact, e)
      return ContactDestructionStatus.TC_NOTDESTROYED
    }
  }

  private function destroyContactInfo(contactInfo: ContactInfo): ContactDestructionStatus {
    try {
      if (canDestroy(contactInfo, contactInfo.ClaimInfo)) {
        PersonalDataPurger.purge(contactInfo.ClaimInfo)
        return ContactDestructionStatus.TC_COMPLETED
      }
      return ContactDestructionStatus.TC_NOTDESTROYED
    } catch (e: Exception) {
      CCPersonalDataLogUtil.logErrorNotDestroyed(contactInfo, e)
      return ContactDestructionStatus.TC_NOTDESTROYED
    }
  }

  private function canDestroy(pinnable: DestructionRootPinnable, pinnableRelated: DestructionRootPinnable): boolean {
    var plugin = Plugins.get(PersonalDataDestruction)

    var disposition = plugin.shouldDestroyRoot(pinnable,
        pinnableRelated == null ? Collections.emptyList<DestructionRootPinnable>() : Collections.singleton(pinnableRelated),
        pinnable)

    return disposition == MUST_DESTROY or disposition == MAY_DESTROY
  }

  private function findRelatedClaimOrNull(contact: Contact): Claim {
    return Query.make(ClaimContact)
        .compare(ClaimContact#Contact, Relop.Equals, contact)
        .withFindRetired(true)
        .select()
        .AtMostOneRow
        ?.Claim
  }

  private function findContact(publicId: String): Contact {
    return Query.make(Contact)
        .withFindRetired(true)
        .compare(Contact#PublicID, Equals, publicId)
        .select()
        .AtMostOneRow
  }

  private function findContactInfo(publicId: String): ContactInfo {
    return Query.make(ContactInfo)
        .compare(ContactInfo#ArchivedPublicID, Equals, publicId)
        //If a Claim's contact is both Insured and Claimant, then two records with same ArchivedPublicID exist in ContactInfo
        .select().FirstResult
  }

  override function translateABUIDToPublicIDs(addressBookUID: String): List<String> {
    var contactPublicIds = Query.make(Contact)
        .compare(Contact#AddressBookUID, Relop.Equals, addressBookUID)
        .withFindRetired(true)
        .withDistinct(true)
        .select({QuerySelectColumns.path(Contact.PUBLICID_PROP.get())})
        .transformQueryRow(\row -> row.getColumn(0) as String)
        .toSet()

    var contactInfoPublicIds = Query.make(ContactInfo)
        .compare(ContactInfo#ArchivedAddressbookUID, Relop.Equals, addressBookUID)
        .withFindRetired(true)
        .withDistinct(true)
        .select({QuerySelectColumns.path(ContactInfo.ARCHIVEDPUBLICID_PROP.get())})
        .transformQueryRow(\row -> row.getColumn(0) as String)
        .toSet()

    return Sets.union(contactPublicIds, contactInfoPublicIds).toList()
  }

  override function doesContactWithPublicIDExist(publicID: String): boolean {
    var contactPublicIds = Query.make(Contact)
        .compare(Contact#PublicID, Relop.Equals, publicID)
        .withFindRetired(true)
        .select()
    var contactInfoPublicIds = Query.make(ContactInfo)
        .compare(ContactInfo#ArchivedPublicID, Relop.Equals, publicID)
        .withFindRetired(true)
        .select()

    return !contactPublicIds.Empty or !contactInfoPublicIds.Empty;
  }

  override function translatePublicIDtoABUID(publicID: String): String {
    var addressBookUID = Query.make(Contact)
        .compare(Contact#PublicID, Relop.Equals, publicID)
        .withFindRetired(true)
        .select()
        .AtMostOneRow
        ?.AddressBookUID
    if(addressBookUID == null) {
      addressBookUID = Query.make(ContactInfo)
          .compare(ContactInfo#ArchivedPublicID, Relop.Equals, publicID)
          .withFindRetired(true)
          //If a Claim's contact is both Insured and Claimant, then two records with same ArchivedPublicID exist in ContactInfo
          .select().FirstResult
          ?.ArchivedAddressbookUID
    }

    return addressBookUID;
  }


}