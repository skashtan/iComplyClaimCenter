package acc.mir.batch

uses acc.mir.helper.MirActivityEnhancement
uses acc.mir.helper.MirRREIDEnhancement
uses acc.mir.helper.MirReqBuilder
uses acc.mir.helper.MirRespProcessor
uses acc.mir.webservice.mirsubmitfs.dataservice.DataService
uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.financials.CurrencyAmount
uses gw.api.financials.FinancialsCalculations
uses gw.api.locale.DisplayKey
uses gw.api.util.DateUtil
uses gw.pl.persistence.core.Bundle
uses gw.processes.WorkQueueBase
uses gw.util.PropertiesFileAccess

/**
 * Created by Sara.Kashtan on 9/30/2019.
 */
//TODO change to BulkInsertWorkQueueBase **********************************************************************
class MirSubmitClaimsToFSWorkQueue extends WorkQueueBase<Exposure, MirSubmitWorkItem_Acc> {
  var props = PropertiesFileAccess.getProperties("acc/mir/properties/MMSEA.properties")

  construct() {
    super(BatchProcessType.TC_MIRSUBMITCLAIMSTOFS, MirSubmitWorkItem_Acc, Exposure)
  }


  override function findTargets() : Iterator<Exposure> {
    // get props as required
    var minReportingYear = Integer.valueOf(props.getProperty("MIR.MIN.SEND.DATE.YYYY"))
    var minReportingMonth = Integer.valueOf(props.getProperty("MIR.MIN.SEND.DATE.MM"))
    var minReportingDay = Integer.valueOf(props.getProperty("MIR.MIN.SEND.DATE.DD"))
    var minReportingDate = DateUtil.createDateInstance(minReportingMonth, minReportingDay, minReportingYear)

    // get exposures to process
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
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_MEDPAY)
      criteria.compare(Exposure#ExposureType, Relop.Equals, ExposureType.TC_WCINJURYDAMAGE)
    })
    //exposureQuery.compare(Exposure#Claimant#Type, Relop.Equals, Contact.TC_PERSON) //TODO test this
    return exposureQuery.select().iterator()
  }

  override function createWorkItem(exposure : Exposure, safeBundle : Bundle) : MirSubmitWorkItem_Acc {
    print("creating work item")
    var mirSubmitWorkItem_Acc = new MirSubmitWorkItem_Acc(safeBundle)
    mirSubmitWorkItem_Acc.Exposure = exposure
    return mirSubmitWorkItem_Acc
  }

  override function processWorkItem(mirSubmitWorkItem_Acc : MirSubmitWorkItem_Acc) {
    print("processing work item")
    if (mirSubmitWorkItem_Acc.Exposure.Claim.IncidentReport || mirSubmitWorkItem_Acc.Exposure.Claim.Policy.Status != PolicyStatus.TC_INFORCE) {
      return
    }
    if (mirSubmitWorkItem_Acc.Exposure.Segment == ClaimSegment.TC_WC_MED_ONLY &&
        FinancialsCalculations.getTotalIncurredGross().withExposure(mirSubmitWorkItem_Acc.Exposure).withCostCategory(CostCategory.TC_MEDICAL).Amount
        < new CurrencyAmount(750)){
      return
    }

    var hasRREID = MirRREIDEnhancement.checkOrSetRREID(mirSubmitWorkItem_Acc.Exposure)
    if (!hasRREID) {
      var existingActivityCount = mirSubmitWorkItem_Acc.Exposure.Activities.countWhere(\elt -> elt.ActivityPattern.Code == props.getProperty("MIR.ACTIVITY.CODE") && elt.Status == ActivityStatus.TC_OPEN)
      if (existingActivityCount < 1){
        var activity = MirActivityEnhancement.createActivityWithBundle(mirSubmitWorkItem_Acc.Exposure, DisplayKey.get("Accelerator.mir.messages.RREID"))
      }
      return
    }

    var service = new DataService()
    var reqXml = MirReqBuilder.buildMirSubmitXML(mirSubmitWorkItem_Acc.Exposure)
    var resp = service.SubmitClaim(reqXml)
    MirRespProcessor.processMirSubmitResp(mirSubmitWorkItem_Acc.Exposure, resp)
    return
  }
}