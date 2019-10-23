package acc.mir.helper

uses acc.mir.clientspecific.MirClientSpecificEnhancement
uses acc.mir.webservice.mirsubmitfs.dataservice.elements.SubmitClaim
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.Action
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.ClaimStatusCode
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.Gender
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.TripleState
uses gw.api.financials.CurrencyAmount
uses gw.pl.persistence.core.Key
uses gw.util.PropertiesFileAccess
uses typekey.Contact
uses gw.transaction.Transaction

/**
 * Created by Sara.Kashtan on 9/27/2019.
 */
class MirReqBuilder {

  static function buildMirSubmitXML(exposure : Exposure) : SubmitClaim {

    //variables
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties")
    var reqXml = new SubmitClaim()
    var claim = exposure.Claim
    var claimant = (exposure.Claimant != null) ? exposure.Claimant as Person : exposure.Claim.ClaimantDenorm as Person
    var policy = exposure.Claim.Policy
    var mirReportable = exposure.mirReportable_Acc
    var adjuster = claim.AssignedUser

   if (mirReportable.RREID != null) {
      reqXml.Claim.RREID = mirReportable.RREID.RREID
    }

    //additional claim relations

    //TODO sort by most recent
   // var cc = exposure.getClaimContactsByRole(ContactRole.TC_MIRESTATE_ACC)
   // cc[1].rol
    //var relationships = {"estates" -> exposure.getContactsByRole(ContactRole.TC_MIRESTATE_ACC), "familyMembers" -> exposure.getContactsByRole(ContactRole.TC_MIRFAMILYMEMBER_ACC),
   // "other" -> exposure.getContactsByRole(ContactRole.TC_MIROTHERREL_ACC)}
    //var representatives = new ContactRole[]{ContactRole.TC_MIROTHERREP_ACC, ContactRole.TC_MIRATTORNEY_ACC, ContactRole.TC_MIRGUARDIAN_ACC, ContactRole.TC_MIRPOWEROFATTORNEY_ACC}
    //var relations = new ContactRole[]{ContactRole.TC_MIRESTATE_ACC, ContactRole.TC_MIRFAMILYMEMBER_ACC, ContactRole.TC_MIROTHERREL_ACC}
    var contacts = exposure.getClaimContactsByRole(ContactRole.TC_MIRATTORNEY_ACC)
    /*
    if (relationships.size() > 0) {
      var contact = relationships.get(0) as entity.Contact
      var c1IsPerson = (contact typeis Person) ? true : false
      var type = exposure.contac .contactr contact.getContactType()
      //var c1Relation = getRelationshipIndicator(type, c1IsPerson)

      reqXml.Claim.C1Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C1Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C1City = contact.PrimaryAddress.City
      reqXml.Claim.C1Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C1FirstName = (c1IsPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C1LastName = (c1IsPerson) ? contact.Person.LastName : null
      reqXml.Claim.C1MiddleInitial = (c1IsPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C1Organization = (!c1IsPerson) ? contact.Name : null
      reqXml.Claim.C1Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C1Relation = c1Relation
      reqXml.Claim.C1State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C1TIN = contact.TaxID
      reqXml.Claim.C1ZipCode = contact.PrimaryAddress.PostalCode
    }
    if (relationships[2] != null) {
      var contact = getContact(relationships[2].Contact) as entity.Contact
      var c4IsPerson = (contact typeis Person) ? true : false
      var type = relationships[2].RelationType
      var c2Relation = getRelationshipIndicator(type, c4IsPerson)

      reqXml.Claim.C2Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C2Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C2City = contact.PrimaryAddress.City
      reqXml.Claim.C2Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C2FirstName = (c4IsPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C2LastName = (c4IsPerson) ? contact.Person.LastName : null
      reqXml.Claim.C2MiddleInitial = (c4IsPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C2Organization = (!c4IsPerson) ? contact.Name : null
      reqXml.Claim.C2Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C2Relation = c2Relation
      reqXml.Claim.C2State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C2TIN = contact.TaxID
      reqXml.Claim.C2ZipCode = contact.PrimaryAddress.PostalCode
    }
    if (relationships[3] != null) {
      var contact = getContact(relationships[3].Contact) as entity.Contact
      var c4IsPerson = (contact typeis Person) ? true : false
      var type = relationships[3].RelationType
      var c3Relation = getRelationshipIndicator(type, c4IsPerson)

      reqXml.Claim.C3Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C3Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C3City = contact.PrimaryAddress.City
      reqXml.Claim.C3Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C3FirstName = (c4IsPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C3LastName = (c4IsPerson) ? contact.Person.LastName : null
      reqXml.Claim.C3MiddleInitial = (c4IsPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C3Organization = (!c4IsPerson) ? contact.Name : null
      reqXml.Claim.C3Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C3Relation = c3Relation
      reqXml.Claim.C3State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C3TIN = contact.TaxID
      reqXml.Claim.C3ZipCode = contact.PrimaryAddress.PostalCode
    }
    if (relationships[4] != null) {
      var contact = getContact(relationships[4].Contact) as entity.Contact
      var c4IsPerson = (contact typeis Person) ? true : false
      var type = relationships[4].RelationType
      var c4Relation = getRelationshipIndicator(type, c4IsPerson)

      reqXml.Claim.C4Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C4Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C4City = contact.PrimaryAddress.City
      reqXml.Claim.C4Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C4FirstName = (c4IsPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C4LastName = (c4IsPerson) ? contact.Person.LastName : null
      reqXml.Claim.C4MiddleInitial = (c4IsPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C4Organization = (!c4IsPerson) ? contact.Name : null
      reqXml.Claim.C4Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C4Relation = c4Relation
      reqXml.Claim.C4State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C4TIN = contact.TaxID
      reqXml.Claim.C4ZipCode = contact.PrimaryAddress.PostalCode
    }*/



    var claimStatus = (exposure.Claim.Closed) ? ClaimStatusCode.Closed : ClaimStatusCode.Open
    if (!exposure.Claim.Closed && exposure.Claim.ReOpenDate != null) {
      claimStatus = ClaimStatusCode.Reopened
    }
    reqXml.Claim.ClaimStatus = claimStatus

    if (exposure.mirReportable_Acc.CMSDateOfIncident != null) {
      reqXml.Claim.CmsDateOfIncident = MirDateConversionEnhancement.toXmlDateTime(exposure.mirReportable_Acc.CMSDateOfIncident)
    }

    if (claimant.DateOfBirth != null) {
      reqXml.Claim.DOB = MirDateConversionEnhancement.toXmlDateTime(claimant.DateOfBirth)
    }

    if (exposure.Claim.CloseDate != null) {
      reqXml.Claim.DateClosed = MirDateConversionEnhancement.toXmlDateTime(exposure.Claim.CloseDate)
    }

    if (claim.LossDate != null) {
      reqXml.Claim.DateOfIncident = MirDateConversionEnhancement.toXmlDateTime(claim.LossDate)
    }

    if (policy.doingbusinessas.Name != null) {
      reqXml.Claim.DbaName = policy.doingbusinessas.Name
    }

    var diagCodesArray = exposure.InjuryIncident.getInjuryDiagnoses()
    if (diagCodesArray.length > 0) {
      var diagCodes = Arrays.asList(diagCodesArray).sortBy(\r -> r.CreateTime)

      diagCodes.stream().limit(19).forEach(\dc -> {
        var icdCode = dc.ICDCode.Code.remove(".")

        // should be an icd code
        if (reqXml.Claim.CauseCode == null && icdCode.toUpperCase().startsWith("S") || icdCode.toUpperCase().startsWith("T") ||
            icdCode.toUpperCase().startsWith("U") || icdCode.toUpperCase().startsWith("V") || icdCode.toUpperCase().startsWith("W") ||
            icdCode.toUpperCase().startsWith("X") || icdCode.toUpperCase().startsWith("Y") || icdCode.toUpperCase().startsWith("Z")) {
          reqXml.Claim.CauseCode = icdCode
        }

        if (reqXml.Claim.DiagCode01 == null) {
          reqXml.Claim.DiagCode01 = icdCode
        } else if (reqXml.Claim.DiagCode02 == null) {
          reqXml.Claim.DiagCode02 = icdCode
        } else if (reqXml.Claim.DiagCode03 == null) {
          reqXml.Claim.DiagCode03 = icdCode
        } else if (reqXml.Claim.DiagCode04 == null) {
          reqXml.Claim.DiagCode04 = icdCode
        } else if (reqXml.Claim.DiagCode05 == null) {
          reqXml.Claim.DiagCode05 = icdCode
        } else if (reqXml.Claim.DiagCode06 == null) {
          reqXml.Claim.DiagCode06 = icdCode
        } else if (reqXml.Claim.DiagCode07 == null) {
          reqXml.Claim.DiagCode07 = icdCode
        } else if (reqXml.Claim.DiagCode08 == null) {
          reqXml.Claim.DiagCode08 = icdCode
        } else if (reqXml.Claim.DiagCode09 == null) {
          reqXml.Claim.DiagCode09 = icdCode
        } else if (reqXml.Claim.DiagCode10 == null) {
          reqXml.Claim.DiagCode10 = icdCode
        } else if (reqXml.Claim.DiagCode11 == null) {
          reqXml.Claim.DiagCode11 = icdCode
        } else if (reqXml.Claim.DiagCode12 == null) {
          reqXml.Claim.DiagCode12 = icdCode
        } else if (reqXml.Claim.DiagCode13 == null) {
          reqXml.Claim.DiagCode13 = icdCode
        } else if (reqXml.Claim.DiagCode14 == null) {
          reqXml.Claim.DiagCode14 = icdCode
        } else if (reqXml.Claim.DiagCode15 == null) {
          reqXml.Claim.DiagCode15 = icdCode
        } else if (reqXml.Claim.DiagCode16 == null) {
          reqXml.Claim.DiagCode16 = icdCode
        } else if (reqXml.Claim.DiagCode17 == null) {
          reqXml.Claim.DiagCode17 = icdCode
        } else if (reqXml.Claim.DiagCode18 == null) {
          reqXml.Claim.DiagCode18 = icdCode
        } else if (reqXml.Claim.DiagCode19 == null) {
          reqXml.Claim.DiagCode19 = icdCode
        }
      })
    }

    reqXml.Claim.FirstName = claimant.FirstName

    var claimantGender = Gender.Unknown
    if (claimant.Gender == GenderType.TC_F) {
      claimantGender = Gender.Female
    } else if (claimant.Gender == GenderType.TC_F) {
      claimantGender = Gender.Male
    }
    reqXml.Claim.Gender = claimantGender

    reqXml.Claim.HICN = exposure.mirReportable_Acc.HICNOrMBI
    reqXml.Claim.Hold = exposure.mirReportable_Acc.HoldStatus
    reqXml.Claim.ICN = exposure.PublicID
    reqXml.Claim.IcdIndicator = props.getProperty("ICOMPLY.ICD.IND")
    reqXml.Claim.LastName = claimant.LastName
    reqXml.Claim.LegalName = claim.Insured.Name
    if (claimant.MiddleName != null) {
      reqXml.Claim.MiddleInitial = claimant.MiddleName.charAt(0)
    }

    if (exposure.Coverage.ExposureLimit != null) {
      reqXml.Claim.NoFaultLimit = exposure.Coverage.ExposureLimit as Double
    }
    var transactions = exposure.TransactionsQuery.toList().sortByDescending(\r -> r.CreateTime)
    var transactionSum = new CurrencyAmount(0.00)
    for (transaction in transactions) {
      transactionSum = transactionSum + transaction.Amount
      if (transactionSum >= exposure.Coverage.ExposureLimit) {
        reqXml.Claim.NoFaultExhaust = MirDateConversionEnhancement.toXmlDateTime(transaction.CreateTime)
        break
      }
    }

    if (exposure.mirReportable_Acc.HasORM != null) {
      reqXml.Claim.ORM = TripleState.valueOf(exposure.mirReportable_Acc.HasORM)
    }
    if (exposure.mirReportable_Acc.ORMTermDate != null) {
      reqXml.Claim.OrmTermDate = MirDateConversionEnhancement.toXmlDateTime(exposure.mirReportable_Acc.ORMTermDate)
    }

    if (mirReportable.OfficeCode != null) {
      reqXml.Claim.OfficeCode = mirReportable.OfficeCode.OfficeCode
    } else {
      reqXml.Claim.OfficeCode = props.getProperty("ICOMPLY.NO.OFFICE.CODE")
    }

    var isPip = exposure.Coverage != null && exposure.Coverage.Type.Code.toUpperCase().contains("PIP")
    print("is PIP: " + isPip)
    if (exposure.ExposureType == ExposureType.TC_MEDPAY ||
        (exposure.ExposureType == ExposureType.TC_GENERALDAMAGE && isPip) ||
        (exposure.ExposureType == ExposureType.TC_BODILYINJURYDAMAGE && isPip)) {
      reqXml.Claim.PlanType = props.getProperty("ICOMPLY.NOFAULT")
    } else if (exposure.ExposureType == ExposureType.TC_EMPLOYERLIABILITY || exposure.ExposureType == ExposureType.TC_GENERALDAMAGE
        || exposure.ExposureType == ExposureType.TC_BODILYINJURYDAMAGE) {
      reqXml.Claim.PlanType = props.getProperty("ICOMPLY.LIABILITY")
    } else if (exposure.ExposureType == ExposureType.TC_WCINJURYDAMAGE) {
      reqXml.Claim.PlanType = props.getProperty("ICOMPLY.WC")
    }

    reqXml.Claim.PlanClaimNumber = claim.ClaimNumber

    reqXml.Claim.PlanContactDept = claim.AssignedGroup.Name
    reqXml.Claim.PlanContactEmail = (adjuster.Contact.EmailAddress1 != null) ? adjuster.Contact.EmailAddress1 : adjuster.Contact.EmailAddress2
    reqXml.Claim.PlanContactExt = adjuster.Contact.WorkPhoneExtension
    reqXml.Claim.PlanContactFirstName = adjuster.Contact.FirstName
    reqXml.Claim.PlanContactLastName = adjuster.Contact.LastName
    reqXml.Claim.PlanContactPhone = adjuster.Contact.WorkPhone

    reqXml.Claim.PolicyHolderFirstName = (claim.Insured.Subtype == Contact.TC_PERSON) ? (claim.Insured as Person).FirstName : ""
    reqXml.Claim.PolicyHolderLastName = (claim.Insured.Subtype == Contact.TC_PERSON) ? (claim.Insured as Person).LastName : ""
    reqXml.Claim.PolicyNumber = policy.PolicyNumber

/*    if (mirReportable.Representative != null) {
      var rep = getContact(mirReportable.Representative)
      reqXml.Claim.RepAddress1 = rep.PrimaryAddress.AddressLine1
      reqXml.Claim.RepAddress2 = rep.PrimaryAddress.AddressLine2
      reqXml.Claim.RepCity = rep.PrimaryAddress.City
      reqXml.Claim.RepExt = rep.WorkPhoneExtension
      reqXml.Claim.RepFirmName = rep.Company.Name
      reqXml.Claim.RepFirstName = rep.Person.FirstName
      reqXml.Claim.RepIndicator = getRepIndicator(mirReportable.RepresentativeType)
      reqXml.Claim.RepLastName = rep.Person.LastName
      reqXml.Claim.RepPhone = rep.WorkPhone
      reqXml.Claim.RepState = rep.PrimaryAddress.City
      reqXml.Claim.RepTIN = rep.Company.TaxID
      reqXml.Claim.RepZipCode = rep.PrimaryAddress.PostalCode
    }*/


    if (claimant.TaxID != null) {
      reqXml.Claim.SSN = claimant.TaxID.remove("-")
    }

    reqXml.Claim.SelfInsured = MirClientSpecificEnhancement.isSelfInsured(exposure)
    reqXml.Claim.SelfInsuredType = MirClientSpecificEnhancement.getSelfInsuredType(exposure)


    reqXml.Claim.StateOfVenue = claim.JurisdictionState.Code
    reqXml.Claim.SubmitAction = Action.Upsert
    if (policy.policyholder.TaxID != null) {
      reqXml.Claim.TIN = policy.policyholder.TaxID.remove("-")
    }

    reqXml.Claim.TotalProposedSettlementAmount = mirReportable.TotalPropsedSettlementAmount as Double
    reqXml.Claim.SettlementStatus = mirReportable.SettlementStatus.Code

    // TPOCS
    if (mirReportable != null) {
      var tpocs = exposure.mirReportable_Acc.TPOC.sortBy(\r -> r.CreateTime)

      if (tpocs.length >= 1) {
        reqXml.Claim.TpocAmount = tpocs[0].TpocAmount as Double
        reqXml.Claim.TpocDate = MirDateConversionEnhancement.toXmlDateTime(tpocs[0].TpocDate)
        reqXml.Claim.TpocDelayedFunding = MirDateConversionEnhancement.toXmlDateTime(tpocs[0].TpocDelayedFunding)
      }
      if (tpocs.length >= 2) {
        reqXml.Claim.TpocAmount2 = tpocs[1].TpocAmount as Double
        reqXml.Claim.TpocDate2 = MirDateConversionEnhancement.toXmlDateTime(tpocs[1].TpocDate)
        reqXml.Claim.TpocDelayedFunding2 = MirDateConversionEnhancement.toXmlDateTime(tpocs[1].TpocDelayedFunding)
      }
      if (tpocs.length >= 3) {
        reqXml.Claim.TpocAmount3 = tpocs[2].TpocAmount as Double
        reqXml.Claim.TpocDate3 = MirDateConversionEnhancement.toXmlDateTime(tpocs[2].TpocDate)
        reqXml.Claim.TpocDelayedFunding3 = MirDateConversionEnhancement.toXmlDateTime(tpocs[2].TpocDelayedFunding)
      }
      if (tpocs.length  >= 4) {
        reqXml.Claim.TpocAmount4 = tpocs[3].TpocAmount as Double
        reqXml.Claim.TpocDate4 = MirDateConversionEnhancement.toXmlDateTime(tpocs[3].TpocDate)
        reqXml.Claim.TpocDelayedFunding4 = MirDateConversionEnhancement.toXmlDateTime(tpocs[3].TpocDelayedFunding)
      }
      if (tpocs.length  >= 5) {
        reqXml.Claim.TpocAmount5 = tpocs[4].TpocAmount as Double
        reqXml.Claim.TpocDate5 = MirDateConversionEnhancement.toXmlDateTime(tpocs[4].TpocDate)
        reqXml.Claim.TpocDelayedFunding5 = MirDateConversionEnhancement.toXmlDateTime(tpocs[4].TpocDelayedFunding)
      }
    }
    return reqXml
  }

  static function getContact(contactID : Long) : entity.Contact {
    var bundle = Transaction.newBundle()
    var key = new Key(entity.Contact, contactID)
    var contact = bundle.loadBean(key) as entity.Contact
    return contact
  }

}

