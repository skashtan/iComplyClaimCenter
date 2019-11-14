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
    print(respXml.asUTFString())
    var claimStatus = respXml.SubmitClaimResult.StatusObject
    var respCodes = new ArrayList<ResponseCode>()
    if (claimStatus.ResponseCodes.ResponseCode != null) {
      respCodes.addAll(claimStatus.ResponseCodes.ResponseCode)
    }

    var mirReportable = exposure.mirReportable_Acc


    Transaction.runWithNewBundle(\bundle -> {
      var lastHist = (mirReportable.MirReportingHistorys != null) ? mirReportable.MirReportingHistorys.last() : null
      var history = new MirReportableHist_Acc()
      bundle.add(history)
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
        history.LastCMSSubmit = MirDateConversionEnhancement.toJavaDate(claimStatus.LastCmsSubmitDate)
      }
      if (claimStatus.NextReportDate != null) {
        history.NextCMSSubmit = MirDateConversionEnhancement.toJavaDate(claimStatus.NextReportDate)
      }
      if (claimStatus.NextQueryDate != null) {
        history.NextCMSQuery = MirDateConversionEnhancement.toJavaDate(claimStatus.NextQueryDate)
      }

      mirReportable.addToMirReportingHistorys(history)

      var existingActivityCount = exposure.Activities.countWhere(\elt -> elt.ActivityPattern.Code == props.getProperty("MIR.ACTIVITY.CODE") && elt.Status == ActivityStatus.TC_OPEN)
      if (respCodes.size() > 0 && existingActivityCount < 1) {
        var activity = exposure.Claim.createActivityFromPattern(exposure, ActivityPattern.finder.getActivityPatternByCode(props.getProperty("MIR.ACTIVITY.CODE")))
        activity.Priority = Priority.TC_NORMAL
        activity.Description = activity.Description + "\n\n" + respCodes.stream().map(\elt -> elt.Description).collect(Collectors.joining(", "))
        activity.assign(exposure.AssignedGroup, exposure.AssignedUser)
        bundle.add(activity)
      }

      if (isEqual(history, lastHist)) {
        return
       }
    })
  }

  static function isEqual(hist1 : MirReportableHist_Acc, hist2 : MirReportableHist_Acc) : boolean{
    var isEqual = false

    if(hist1.BeneficiaryStatus == hist2.BeneficiaryStatus && hist1.IsReadyForCMS == hist2.IsReadyForCMS && hist1.LastCMSSubmit == hist2.LastCMSSubmit
        && hist1.NextCMSSubmit == hist2.NextCMSSubmit){
      isEqual = true
    }
    return isEqual

  }
}
