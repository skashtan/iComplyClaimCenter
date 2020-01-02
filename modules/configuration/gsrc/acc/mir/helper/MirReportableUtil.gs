package acc.mir.helper

uses acc.mir.webservice.mirsubmitfs.dataservice.DataService
uses gw.api.financials.CurrencyAmount
uses gw.api.financials.FinancialsCalculations
uses gw.api.locale.DisplayKey
uses gw.transaction.Transaction
uses gw.util.PropertiesFileAccess

/**
 * Created by sara.kashtan on 10/18/2019.
 */
class MirReportableUtil {

  /**
   * @param exposure
   * @return
   */
  static function initMirReportable(exposure : Exposure) : MirReportable_Acc {
    exposure.mirReportable_Acc = new MirReportable_Acc()
    return exposure.mirReportable_Acc
  }

  /**
   * @param exposure
   * @return
   */
  static function isBigFiveReady(exposure : Exposure) : Boolean {
    var person = (exposure.Claimant != null) ? (exposure.Claimant as Person) : (exposure.Claim.ClaimantDenorm as Person)
    var isReady = false
    // gender is sent as unknown if it is not filled in
    if (person.FirstName != null && person.LastName != null && person.DateOfBirth != null && person.TaxID != null) {
      isReady = true
    }
    return isReady
  }

  /**
   * @param exposure
   * @return boolean.
   * If return true: RREID is ready to go
   * If return false: RREID is NOT ready to go, no need to continue
   * processing without RREID
   */
  static function checkOrSetRREID(exposure : Exposure) : Boolean {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")
    var hasRREID = exposure.mirReportable_Acc.ClaimRREID != null
    var multiRREIDS = gw.api.database.Query.make(MirRREID_Acc).select().Count > 1

    if (!hasRREID && !multiRREIDS) {
      Transaction.runWithNewBundle(\bundle -> {
        exposure.mirReportable_Acc.ClaimRREID = gw.api.database.Query.make(MirRREID_Acc).select().AtMostOneRow.RREID
      })
      hasRREID = true
    } else if (!hasRREID && multiRREIDS) {
      hasRREID = false
    }

    return hasRREID
  }

  static function getMirICDCodes(exposure : Exposure, icdIndicator : String) : List<InjuryDiagnosis> {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")

    var diagCodesArray = exposure.InjuryIncident.getInjuryDiagnoses()
    if (exposure.ExposureType == ExposureType.TC_WCINJURYDAMAGE) {
      diagCodesArray = diagCodesArray.concat(exposure.Claim.ensureClaimInjuryIncident().InjuryDiagnoses)
    }

    if (diagCodesArray.length < 1){
      return new ArrayList<InjuryDiagnosis>()
    }
    // order by date
    var diagCodes = Arrays.asList(diagCodesArray).sortBy(\r -> r.CreateTime).where(\elt -> elt.Compensable == true)
    // move primary to first position
    var primary = diagCodes.firstWhere(\elt -> elt.IsPrimary)
    if (primary != null) {
      diagCodes.removeWhere(\elt -> elt.IsPrimary)
      diagCodes.add(0, primary)
    }

    if (icdIndicator == props.getProperty("MIR.ICD9.IND")){
      diagCodes.removeWhere(\elt -> elt.ICDCode.Code.toUpperCase().startsWith("V") || elt.ICDCode.Code.toUpperCase().startsWith("E"))
    } else if (icdIndicator == props.getProperty("MIR.ICD10.IND")) {
      diagCodes.removeWhere(\elt -> elt.ICDCode.Code.toUpperCase().startsWith("V") || elt.ICDCode.Code.toUpperCase().startsWith("W") || elt.ICDCode.Code.toUpperCase().startsWith("X") || elt.ICDCode.Code.toUpperCase().startsWith("Y") || elt.ICDCode.Code.toUpperCase().startsWith("Z"))
    }
    return diagCodes
  }

  function processExposure(exposure : Exposure) {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")

    if (exposure.Segment == ClaimSegment.TC_WC_MED_ONLY &&
        FinancialsCalculations.getTotalIncurredGross().withExposure(exposure).withCostCategory(CostCategory.TC_MEDICAL).Amount
            < new CurrencyAmount(props.getProperty("MIR.TOTAL.INCURRED.MIN"))) {
      exposure.mirReportable_Acc.TotalIncurredReached = false
      return
    }

    var hasRREID = MirReportableUtil.checkOrSetRREID(exposure)
    if (!hasRREID) {
      var existingActivityCount = MirActivityUtil.getOpenMirActivityCount(exposure)
      if (existingActivityCount < 1) {
        var activity = MirActivityUtil.createMirActivityWithBundle(exposure, DisplayKey.get("Accelerator.mir.messages.RREID"))
      }
      return
    }

    var service = new DataService()
    var reqXml = MirReqBuilder.buildMirSubmitXML(exposure)
    var resp = service.SubmitClaim(reqXml)
    MirRespProcessor.processMirSubmitResp(exposure, resp)
    return
  }
}
