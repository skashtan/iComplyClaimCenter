package acc.mir.submitclaims

uses acc.mir.webservice.mirsubmitfs.dataservice.elements.SubmitClaimResponse
uses gw.util.PropertiesFileAccess
uses gw.transaction.Transaction

uses java.util.stream.Collectors

/**
 * Created by Sara.Kashtan on 10/7/2019.
 */
class MirRespProcessor {

  static function processMirSubmitResp(exposure : Exposure, respXml : SubmitClaimResponse) {
    var props = PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties")
    var claimStatus = respXml.SubmitClaimResult.StatusObject
    // TODO get error messages
    //print(respXml.asUTFString())
    var respCodes = claimStatus.ResponseCodes.ResponseCode


      Transaction.runWithNewBundle(\bundle -> {

      // TODO add to history
      var mirReportable = new MirReportable_Acc()
      if(exposure.mirReportable_Acc != null) {
        mirReportable = exposure.mirReportable_Acc
      }

      var history = new MirReportableHist_Acc()
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

      // respCodesDisplay = ""
      respCodes.forEach(\c -> {
        var respCode = new MirReportableRespCode_Acc()

        if (c.CmsCode != null) {
          respCode.CMSCode = c.CmsCode
        }
        if (c.CodeType != null) {
          respCode.CodeType = c.CodeType
        }
        if (c.Description != null) {
          respCode.ResponseDescription = c.Description
        }
        if (c.Origin != null) {
          respCode.CodeOrigin = c.Origin
        }

        history.addToMIRResponseCodes(respCode)
        //respCodesDisplay+= "\n" +  "• " + respCode.ResponseDescription
      })


      // maybe create activity for adjuster
      if (respCodes.size() > 0) {
        var activity = MirActivityEnhancement.createActivity(exposure)
        activity = bundle.add(activity)
      }
      mirReportable.addToMirReportingHistorys(history)

    })
  }
}
