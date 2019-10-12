package acc.mir.batch

uses acc.mir.submitclaims.MirActivityEnhancement
uses acc.mir.submitclaims.MirReqBuilder
uses acc.mir.submitclaims.MirRespProcessor
uses acc.mir.webservice.mirsubmitfs.dataservice.DataService
uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.locale.DisplayKey
uses gw.api.util.DateUtil
uses gw.pl.persistence.core.Bundle
uses gw.processes.WorkQueueBase
uses gw.transaction.Transaction
uses gw.util.PropertiesFileAccess

/**
 * Created by Sara.Kashtan on 9/30/2019.
 */
//TODO change to BulkInsertWorkQueueBase **********************************************************************
class MirSubmitClaimsToFSWorkQueue extends WorkQueueBase<Exposure, MirSubmitWorkItem_Acc> {

  construct() {
    super(BatchProcessType.TC_MIRSUBMITCLAIMSTOFS, MirSubmitWorkItem_Acc, Exposure)
  }


  override function findTargets() : Iterator<Exposure> {
   // print("in find targets  ******************************************************************************************")
    // get props as required
    var minReportingYear = Integer.valueOf(PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties").getProperty("ICOMPLY.MIN.SEND.DATE.YYYY"))
    var minReportingMonth = Integer.valueOf(PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties").getProperty("ICOMPLY.MIN.SEND.DATE.MM"))
    var minReportingDay = Integer.valueOf(PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties").getProperty("ICOMPLY.MIN.SEND.DATE.DD"))
    var minReportingDate = DateUtil.createDateInstance(minReportingDay, minReportingYear, minReportingMonth)

    // get exposures to process
    //TODO finish adding criteria into select***********************************************************************************
    var exposureQuery = Query.make(Exposure)
    exposureQuery.or(\criteria -> {
      criteria.compare(Exposure#ReOpenDate, Relop.GreaterThanOrEquals, minReportingDate)
      criteria.compare(Exposure#CloseDate, Relop.GreaterThanOrEquals, minReportingDate)
      criteria.compare(Exposure#CloseDate, Relop.Equals, null)
    })
    exposureQuery.or(\criteria -> {
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_BODILYINJURYDAMAGE)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_EMPLOYERLIABILITY)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_GENERALDAMAGE)
      //criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_LOSSOFUSEDAMAGE)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_MEDPAY)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_WCINJURYDAMAGE)
    })

    //exposureQuery.compare(Exposure#pip., Relop.Equals, ExposureType.TC_WCINJURYDAMAGE)

    //print("leaving find targets  ******************************************************************************************")
    return exposureQuery.select().iterator()
  }

  //protected override function buildBulkInsertSelect(o : Object, list : List<Object>) {}

  override function createWorkItem(exposure : Exposure, safeBundle : Bundle) : MirSubmitWorkItem_Acc {
    var mirSubmitWorkItem_Acc = new MirSubmitWorkItem_Acc(safeBundle)
    mirSubmitWorkItem_Acc.Exposure = exposure
    return mirSubmitWorkItem_Acc
  }

  override function processWorkItem(mirSubmitWorkItem_Acc : MirSubmitWorkItem_Acc) {
    //print(mirSubmitWorkItem_Acc.Exposure.Claim.ClaimNumber)
    if (mirSubmitWorkItem_Acc.Exposure.Claim.IncidentReport || mirSubmitWorkItem_Acc.Exposure.Claim.Policy.Status != PolicyStatus.TC_INFORCE) {
      return
    }

    var hasRREID = mirSubmitWorkItem_Acc.Exposure.mirReportable_Acc.RREID == null
    var multiRREIDS = Boolean.valueOf(PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties").getProperty("ICOMPLY.MULTI.RREIDS"))

    if(!hasRREID && !multiRREIDS){
      //mirSubmitWorkItem_Acc.Exposure.mirReportable_Acc.RREID =
    } else if(!hasRREID && multiRREIDS) {
      var activity = MirActivityEnhancement.createActivityWithBundle(mirSubmitWorkItem_Acc.Exposure)
      activity.Description = activity.Description + "\n" + DisplayKey.get("Accelerator.mir.messages.RREID")
    }


    var service = new DataService()
    var reqXml = MirReqBuilder.buildMirSubmitXML(mirSubmitWorkItem_Acc.Exposure)
    var resp = service.SubmitClaim(reqXml)
    MirRespProcessor.processMirSubmitResp(mirSubmitWorkItem_Acc.Exposure, resp)
    return
  }
}