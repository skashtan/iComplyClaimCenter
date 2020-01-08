package acc.mir.helper

uses acc.mir.webservice.mirsubmitfs.dataservice.elements.ResponseCode
uses acc.mir.webservice.mirsubmitfs.dataservice.elements.SubmitClaimResponse
uses gw.transaction.Transaction
uses gw.util.PropertiesFileAccess

uses java.util.stream.Collectors

/**
 * Created by Sara.Kashtan on 10/7/2019.
 */
class MirRespProcessor {

  static function processMirSubmitResp(exposure : Exposure, respXml : SubmitClaimResponse) {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")
    var claimStatus = respXml.SubmitClaimResult.StatusObject
    var respCodes = new ArrayList<ResponseCode>()
    if (claimStatus.ResponseCodes.ResponseCode != null) {
      respCodes.addAll(claimStatus.ResponseCodes.ResponseCode)
    }

    var mirReportable = exposure.mirReportable_Acc

    var history = new MirReportableHist_Acc()

    var lastHist = (mirReportable.MirReportingHistorys != null) ? mirReportable.MirReportingHistorys.last() : null

    if (claimStatus.ICN != null) {
      exposure.mirReportable_Acc.ICN = claimStatus.ICN
    }
    if (claimStatus.HICN != null) {
      exposure.mirReportable_Acc.HICNOrMBI = claimStatus.HICN
    }
    if (claimStatus.Reportable != null) {
      history.IsCMSReportable = claimStatus.Reportable
    }
    if (claimStatus.BeneficiaryStatus != null) {
      history.BeneficiaryStatus = claimStatus.BeneficiaryStatus
    }
    if (claimStatus.IsReady != null) {
      history.IsReadyForCMS = claimStatus.IsReady
    }
    if (claimStatus.LastCmsSubmitDate != null) {
      history.LastCMSSubmit = MirDateConversionUtil.toJavaDate(claimStatus.LastCmsSubmitDate)
    }
    if (claimStatus.NextReportDate != null) {
      history.NextCMSSubmit = MirDateConversionUtil.toJavaDate(claimStatus.NextReportDate)
    }
    if (claimStatus.NextQueryDate != null) {
      history.NextCMSQuery = MirDateConversionUtil.toJavaDate(claimStatus.NextQueryDate)
    }


    var existingActivityCount = MirActivityUtil.getOpenMirActivityCount(exposure)
    if (respCodes.size() > 0 && existingActivityCount < 1) {
      var message = "\n\n" + respCodes.stream().map(\elt -> elt.Description).collect(Collectors.joining(", "))
      var activity = exposure.Claim.createActivityFromPattern(exposure, ActivityPattern.finder.getActivityPatternByCode(props.getProperty("MIR.ACTIVITY.CODE")))
      activity.setDescription(activity.Description + "\n\n" + respCodes.stream().map(\elt -> elt.Description).collect(Collectors.joining(", ")))
      activity.assign(exposure.AssignedGroup, exposure.AssignedUser)
    }

    if (isEqual(history, lastHist)) {
      return
    }

    mirReportable.addToMirReportingHistorys(history)
  }

  static function isEqual(hist1 : MirReportableHist_Acc, hist2 : MirReportableHist_Acc) : boolean {
    var isEqual = false

    if (hist1.BeneficiaryStatus == hist2.BeneficiaryStatus && hist1.IsReadyForCMS == hist2.IsReadyForCMS && hist1.LastCMSSubmit == hist2.LastCMSSubmit
        && hist1.NextCMSSubmit == hist2.NextCMSSubmit) {
      isEqual = true
    }
    return isEqual

  }
}
