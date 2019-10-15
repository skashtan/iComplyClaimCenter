package acc.mir.helper

uses acc.mir.webservice.mirsubmitfs.dataservice.elements.ResponseCode
uses acc.mir.webservice.mirsubmitfs.dataservice.elements.SubmitClaimResponse
uses gw.transaction.Transaction

uses java.util.stream.Collectors

/**
 * Created by Sara.Kashtan on 10/7/2019.
 */
class MirRespProcessor {

  static function processMirSubmitResp(exposure : Exposure, respXml : SubmitClaimResponse) {
    //var props = PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties")
    print(respXml.asUTFString())
    var claimStatus = respXml.SubmitClaimResult.StatusObject
    var respCodes = new ArrayList<ResponseCode>()
    if (claimStatus.ResponseCodes.ResponseCode != null){
      respCodes.addAll(claimStatus.ResponseCodes.ResponseCode)
    }

    var mirReportable = exposure.mirReportable_Acc
    var lastHist = (mirReportable.MirReportingHistorys != null) ? mirReportable.MirReportingHistorys.last() : null

    Transaction.runWithNewBundle(\bundle -> {

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
        })

      //TODO does this equality work? - does it just use my fields or does it use the createtime etc?
      if(history.equals(lastHist)){
        return
      }
      // maybe create activity for adjuster
      if (respCodes.size() > 0) {
        var respCodesString = respCodes.stream().map(\elt -> elt.Description).collect(Collectors.joining(","))
        //if (exposure.Activities.countWhere(\elt -> elt.Status == ActivityStatus.TC_OPEN && elt.Description.contains(respCodesString) && elt.Subject.contains("iComply")) < 1){
          var activity = MirActivityEnhancement.createActivity(exposure, respCodesString)
          activity = bundle.add(activity)
        //}

      }

      mirReportable.addToMirReportingHistorys(history)

    })
  }
}
