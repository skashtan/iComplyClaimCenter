package acc.mir.batch

uses acc.mir.submitclaims.MirReqBuilder
uses acc.mir.webservice.mirsubmitfs.dataservice.DataService
uses acc.mir.webservice.mirsubmitfs.dataservice.elements.SubmitClaim
uses gw.api.database.InOperation
uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.util.DateUtil
uses gw.pl.persistence.core.Bundle
uses gw.processes.BulkInsertWorkQueueBase
uses gw.processes.WorkQueueBase
uses gw.util.PropertiesFileAccess

/**
 * Created by Sara.Kashtan on 9/30/2019.
 */
//TODO change to BulkInsertWorkQueueBase **********************************************************************
class MirSubmitClaimsToFSWorkQueue extends WorkQueueBase<Exposure, MIRSubmitWorkItem_Acc> {

  construct() {
    super(BatchProcessType.TC_MIRSUBMITCLAIMSTOFS, MIRSubmitWorkItem_Acc, Exposure)
  }


  override function findTargets() : Iterator<Exposure> {
   // print("in find targets  ******************************************************************************************")
    // get props as required
    var minReportingYear = Integer.valueOf(PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties").getProperty("ICOMPLY.MIN.SEND.DATE.YYYY"))
    var minReportingMonth = Integer.valueOf(PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties").getProperty("ICOMPLY.MIN.SEND.DATE.MM"))
    var minReportingDay = Integer.valueOf(PropertiesFileAccess.getProperties("acc/mir/properties/iComply.properties").getProperty("ICOMPLY.MIN.SEND.DATE.DD"))
    /*var minReportingYear = 2009
    var minReportingMonth = 12
    var minReportingDay = 31*/
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
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_LOSSOFUSEDAMAGE)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_MEDPAY)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_WCINJURYDAMAGE)
    })

    //exposureQuery.compare(Exposure#pip., Relop.Equals, ExposureType.TC_WCINJURYDAMAGE)

    //print("leaving find targets  ******************************************************************************************")
    return exposureQuery.select().iterator()
  }

  //protected override function buildBulkInsertSelect(o : Object, list : List<Object>) {}

  override function createWorkItem(exposure : Exposure, safeBundle : Bundle) : MIRSubmitWorkItem_Acc {
    //print("in create work item *******************************************************************************")
    var mirSubmitWorkItem_Acc = new MIRSubmitWorkItem_Acc(safeBundle)
    mirSubmitWorkItem_Acc.Exposure = exposure
    //print("leaving create work item *******************************************************************************")
    return mirSubmitWorkItem_Acc

  }

  override function processWorkItem(mirSubmitWorkItem_Acc : MIRSubmitWorkItem_Acc) {
    print("in process work item *******************************************************************************")
    print(mirSubmitWorkItem_Acc.Exposure.Claim.ClaimNumber)
    if (mirSubmitWorkItem_Acc.Exposure.Claim.IncidentReport || mirSubmitWorkItem_Acc.Exposure.Claim.Policy.Status != PolicyStatus.TC_INFORCE) {
      return
    }
    var service = new DataService()
    var reqXml = MirReqBuilder.buildClaimSubmitXML(mirSubmitWorkItem_Acc.Exposure)
    var resp = service.SubmitClaim(reqXml)
    print(resp.asUTFString())
    //TODO process response******************************************************
    print("leaving process work item *******************************************************************************")
    return
  }
}