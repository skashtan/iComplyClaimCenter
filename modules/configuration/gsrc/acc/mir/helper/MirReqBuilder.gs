package acc.mir.helper

uses acc.mir.clientspecific.MirClientSpecificEnhancement
uses acc.mir.webservice.mirsubmitfs.dataservice.elements.SubmitClaim
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.Action
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.ClaimStatusCode
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.Gender
uses acc.mir.webservice.mirsubmitfs.dataservice.enums.TripleState
uses entity.Exposure
uses entity.Person
uses gw.api.financials.CurrencyAmount
uses gw.pl.persistence.core.Key
uses gw.util.PropertiesFileAccess
uses typekey.Contact
uses gw.transaction.Transaction
uses typekey.ContactRole

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

    if (mirReportable.ClaimRREID != null) {
      reqXml.Claim.RREID = mirReportable.ClaimRREID
    }

    // CMS only accepts 4... once these are filled up they will not be included
    exposure.getClaimContactsByRole(ContactRole.TC_MIRESTATE_ACC).toList().forEach(\c -> {
      reqXml = addNextRelationship(c.Contact, ContactRole.TC_MIRESTATE_ACC, reqXml)
    })

    exposure.getClaimContactsByRole(ContactRole.TC_MIRFAMILYMEMBER_ACC).toList().forEach(\c -> {
      reqXml = addNextRelationship(c.Contact, ContactRole.TC_MIRFAMILYMEMBER_ACC, reqXml)
    })
    exposure.getClaimContactsByRole(ContactRole.TC_MIROTHERREL_ACC).toList().forEach(\c -> {
      reqXml = addNextRelationship(c.Contact, ContactRole.TC_MIROTHERREL_ACC, reqXml)
    })


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
      var diagCodes = Arrays.asList(diagCodesArray).sortBy(\r -> r.CreateTime) //TODO validate that this is ordered descending

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
    reqXml.Claim.IcdIndicator = props.getProperty("MIR.ICD.IND")
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

    if (mirReportable.ClaimOfficeCode != null) {
      reqXml.Claim.OfficeCode = mirReportable.ClaimOfficeCode
    } else {
      reqXml.Claim.OfficeCode = props.getProperty("MIR.NO.OFFICE.CODE")
    }

    var isPip = exposure.Coverage != null && exposure.Coverage.Type.Code.toUpperCase().contains("PIP")
    print("is PIP: " + isPip)
    if (exposure.ExposureType == ExposureType.TC_MEDPAY ||
        (exposure.ExposureType == ExposureType.TC_GENERALDAMAGE && isPip) ||
        (exposure.ExposureType == ExposureType.TC_BODILYINJURYDAMAGE && isPip)) {
      reqXml.Claim.PlanType = props.getProperty("MIR.NOFAULT")
    } else if (exposure.ExposureType == ExposureType.TC_EMPLOYERLIABILITY || exposure.ExposureType == ExposureType.TC_GENERALDAMAGE
        || exposure.ExposureType == ExposureType.TC_BODILYINJURYDAMAGE) {
      reqXml.Claim.PlanType = props.getProperty("MIR.LIABILITY")
    } else if (exposure.ExposureType == ExposureType.TC_WCINJURYDAMAGE) {
      reqXml.Claim.PlanType = props.getProperty("MIR.WC")
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


    // cms only accepts one representative, once it is filled all others will be ignored
    var filledRep = false
    exposure.getClaimContactsByRole(ContactRole.TC_MIRATTORNEY_ACC).toList().forEach(\c -> {
      if (filledRep == false) {
        reqXml = addRepresentative( c.Contact, ContactRole.TC_MIRATTORNEY_ACC , reqXml)
      }
    })
    exposure.getClaimContactsByRole(ContactRole.TC_MIRGUARDIAN_ACC).toList().forEach(\c -> {
      if (filledRep == false) {
        reqXml = addRepresentative( c.Contact, ContactRole.TC_MIRGUARDIAN_ACC , reqXml)
      }
    })
    exposure.getClaimContactsByRole(ContactRole.TC_MIROTHERREP_ACC).toList().forEach(\c -> {
      if (filledRep == false) {
        reqXml = addRepresentative( c.Contact, ContactRole.TC_MIROTHERREP_ACC , reqXml)
      }
    })

   if (claimant.TaxID != null) {
      reqXml.Claim.SSN = claimant.TaxID.remove("-")
    }

    reqXml.Claim.SelfInsured = MirClientSpecificEnhancement.isSelfInsured(exposure)
    reqXml.Claim.SelfInsuredType = MirClientSpecificEnhancement.getSelfInsuredType(exposure)


    reqXml.Claim.StateOfVenue = claim.JurisdictionState.Code
    reqXml.Claim.SubmitAction = Action.Upsert
    if (policy.policyholder.TaxID != null) {
      reqXml.Claim.TIN = policy.policyholder.TaxID.remove("-") //TODO this should be the reporting companies TIN
    }

    reqXml.Claim.TotalProposedSettlementAmount = mirReportable.TotalPropsedSettlementAmount as Double
    reqXml.Claim.SettlementStatus = mirReportable.SettlementStatus.Code

    // TPOCS
    if (mirReportable != null) {
      var tpocs = exposure.mirReportable_Acc.TPOC.sortBy(\r -> r.CreateTime)

      if (tpocs.length >= 1) {
        reqXml.Claim.TpocAmount = tpocs[0].TpocAmount as Double
        reqXml.Claim.TpocDate = MirDateConversionEnhancement.toXmlDateTime(tpocs[0].TpocDate)
        reqXml.Claim.TpocDelayedFunding = (tpocs[0].TpocDelayedFunding != null) ? MirDateConversionEnhancement.toXmlDateTime(tpocs[0].TpocDelayedFunding) : null
      }
      if (tpocs.length >= 2) {
        reqXml.Claim.TpocAmount2 = tpocs[1].TpocAmount as Double
        reqXml.Claim.TpocDate2 = MirDateConversionEnhancement.toXmlDateTime(tpocs[1].TpocDate)
        reqXml.Claim.TpocDelayedFunding2 = (tpocs[1].TpocDelayedFunding != null) ? MirDateConversionEnhancement.toXmlDateTime(tpocs[1].TpocDelayedFunding) : null
      }
      if (tpocs.length >= 3) {
        reqXml.Claim.TpocAmount3 = tpocs[2].TpocAmount as Double
        reqXml.Claim.TpocDate3 = MirDateConversionEnhancement.toXmlDateTime(tpocs[2].TpocDate)
        reqXml.Claim.TpocDelayedFunding3 = (tpocs[2].TpocDelayedFunding != null) ? MirDateConversionEnhancement.toXmlDateTime(tpocs[2].TpocDelayedFunding) : null
      }
      if (tpocs.length >= 4) {
        reqXml.Claim.TpocAmount4 = tpocs[3].TpocAmount as Double
        reqXml.Claim.TpocDate4 = MirDateConversionEnhancement.toXmlDateTime(tpocs[3].TpocDate)
        reqXml.Claim.TpocDelayedFunding4 = (tpocs[3].TpocDelayedFunding != null) ? MirDateConversionEnhancement.toXmlDateTime(tpocs[3].TpocDelayedFunding) : null
      }
      if (tpocs.length >= 5) {
        reqXml.Claim.TpocAmount5 = tpocs[4].TpocAmount as Double
        reqXml.Claim.TpocDate5 = MirDateConversionEnhancement.toXmlDateTime(tpocs[4].TpocDate)
        reqXml.Claim.TpocDelayedFunding5 = (tpocs[4].TpocDelayedFunding != null) ? MirDateConversionEnhancement.toXmlDateTime(tpocs[4].TpocDelayedFunding) : null
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

  static function addNextRelationship(contact : entity.Contact, type : ContactRole, reqXml : SubmitClaim) : SubmitClaim {
    var isPerson = (contact typeis Person) ? true : false
    var relation = MirIndicator.getRelationshipIndicator(type, isPerson)

    if (reqXml.Claim.C1Relation == null) {
      reqXml.Claim.C1Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C1Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C1City = contact.PrimaryAddress.City
      reqXml.Claim.C1Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C1FirstName = (isPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C1LastName = (isPerson) ? contact.Person.LastName : null
      reqXml.Claim.C1MiddleInitial = (isPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C1Organization = (!isPerson) ? contact.DisplayName : null
      reqXml.Claim.C1Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C1Relation = relation
      reqXml.Claim.C1State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C1TIN = contact.TaxID
      reqXml.Claim.C1ZipCode = contact.PrimaryAddress.PostalCode
    } else if (reqXml.Claim.C2Relation == null) {
      reqXml.Claim.C2Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C2Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C2City = contact.PrimaryAddress.City
      reqXml.Claim.C2Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C2FirstName = (isPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C2LastName = (isPerson) ? contact.Person.LastName : null
      reqXml.Claim.C2MiddleInitial = (isPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C2Organization = (!isPerson) ? contact.Name : null
      reqXml.Claim.C2Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C2Relation = relation
      reqXml.Claim.C2State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C2TIN = contact.TaxID
      reqXml.Claim.C2ZipCode = contact.PrimaryAddress.PostalCode
    }
    if (reqXml.Claim.C3Relation == null) {
      reqXml.Claim.C3Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C3Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C3City = contact.PrimaryAddress.City
      reqXml.Claim.C3Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C3FirstName = (isPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C3LastName = (isPerson) ? contact.Person.LastName : null
      reqXml.Claim.C3MiddleInitial = (isPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C3Organization = (!isPerson) ? contact.Name : null
      reqXml.Claim.C3Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C3Relation = relation
      reqXml.Claim.C3State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C3TIN = contact.TaxID
      reqXml.Claim.C3ZipCode = contact.PrimaryAddress.PostalCode
    }
    if (reqXml.Claim.C4Relation == null) {
      reqXml.Claim.C4Address1 = contact.PrimaryAddress.AddressLine1
      reqXml.Claim.C4Address2 = contact.PrimaryAddress.AddressLine2
      reqXml.Claim.C4City = contact.PrimaryAddress.City
      reqXml.Claim.C4Ext = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhoneExtension : null
      reqXml.Claim.C4FirstName = (isPerson) ? contact.Person.FirstName : null
      reqXml.Claim.C4LastName = (isPerson) ? contact.Person.LastName : null
      reqXml.Claim.C4MiddleInitial = (isPerson) ? contact.Person.MiddleName.charAt(0) : null
      reqXml.Claim.C4Organization = (!isPerson) ? contact.Name : null
      reqXml.Claim.C4Phone = (contact.PrimaryPhone == PrimaryPhoneType.TC_WORK) ? contact.WorkPhone : contact.HomePhone
      reqXml.Claim.C4Relation = relation
      reqXml.Claim.C4State = contact.PrimaryAddress.State.Code
      reqXml.Claim.C4TIN = contact.TaxID
      reqXml.Claim.C4ZipCode = contact.PrimaryAddress.PostalCode
    }
    return reqXml
  }

  static function addRepresentative(rep : entity.Contact, type : ContactRole, reqXml : SubmitClaim) : SubmitClaim {
    if (reqXml.Claim.RepIndicator == null) {
      reqXml.Claim.RepAddress1 = rep.PrimaryAddress.AddressLine1
      reqXml.Claim.RepAddress2 = rep.PrimaryAddress.AddressLine2
      reqXml.Claim.RepCity = rep.PrimaryAddress.City
      reqXml.Claim.RepExt = rep.WorkPhoneExtension
      reqXml.Claim.RepFirmName = rep.Company.Name
      reqXml.Claim.RepFirstName = rep.Person.FirstName
      reqXml.Claim.RepIndicator = MirIndicator.getRepIndicator(type)
      reqXml.Claim.RepLastName = rep.Person.LastName
      reqXml.Claim.RepPhone = rep.WorkPhone
      reqXml.Claim.RepState = rep.PrimaryAddress.City
      reqXml.Claim.RepTIN = rep.Company.TaxID
      reqXml.Claim.RepZipCode = rep.PrimaryAddress.PostalCode
    }
    return reqXml
  }
}

