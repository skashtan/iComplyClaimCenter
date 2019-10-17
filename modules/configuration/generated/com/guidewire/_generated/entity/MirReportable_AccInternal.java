package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirReportable_Acc.eti;MirReportable_Acc.eix;MirReportable_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MirReportable_AccInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the MirReportingHistorys array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMirReportingHistorys(entity.MirReportableHist_Acc element);
  
  
  /**
   * Adds the given element to the Relation array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRelation(entity.MirRelation_Acc element);
  
  
  /**
   * Adds the given element to the TPOC array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTPOC(entity.MirReportableTPOC_Acc element);
  
  
  /**
   * Gets the value of the CMSDateOfIncident field.
   * Date of Incident as defined by CMS
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCMSDateOfIncident();
  
  
  /**
   * Gets the value of the ClaimRREID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimRREID();
  
  
  /**
   * Gets the value of the HICNOrMBI field.
   * Medicare Health Insurance Claim Number or Medicare Beneficiary Identifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHICNOrMBI();
  
  
  /**
   * Gets the value of the HasORM field.
   * Indication of whether there is on-going responsibility for medicals (ORM)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHasORM();
  
  
  /**
   * Gets the value of the ICN field.
   * Internal Control Number - Unique identifier in MIR System
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getICN();
  
  
  /**
   * Gets the value of the LastSubmitAction field.
   * Identifies add/update or delete
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastSubmitAction();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the MirReportingHistorys field.
   * Array of each time this claim was reported
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirReportableHist_Acc[] getMirReportingHistorys();
  
  
  /**
   * Gets the value of the ORMTermDate field.
   * Date ongoing responsibility for medicals ended, where applicable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getORMTermDate();
  
  
  /**
   * Gets the value of the OfficeCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirOfficeCode_Acc getOfficeCode();
  
  
  public gw.pl.persistence.core.Key getOfficeCodeID();
  
  
  /**
   * Gets the value of the RREID field.
   * The RRE ID corresponding to the claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirRREID_Acc getRREID();
  
  
  public gw.pl.persistence.core.Key getRREIDID();
  
  
  /**
   * Gets the value of the Relation field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirRelation_Acc[] getRelation();
  
  
  /**
   * Gets the value of the Representative field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRepresentative();
  
  
  /**
   * Gets the value of the RepresentativeType field.
   * type of representative
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MirRepType_Acc getRepresentativeType();
  
  
  /**
   * Gets the value of the SettlementStatus field.
   * identifies settlement status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MirSettlementStatus_Acc getSettlementStatus();
  
  
  /**
   * Gets the value of the TPOC field.
   * Total Payment Obligation to Claimant
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirReportableTPOC_Acc[] getTPOC();
  
  
  /**
   * Gets the value of the TotalPropsedSettlementAmount field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.financials.CurrencyAmount getTotalPropsedSettlementAmount();
  
  
  /**
   * Gets the value of the HoldStatus field.
   * Allows the claim to be placed on “Hold” (prevents this file from being transmitted to CMS)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHoldStatus();
  
  
  /**
   * Removes the given element from the MirReportingHistorys array. This is achieved by marking the element for removal.
   */
  public void removeFromMirReportingHistorys(entity.MirReportableHist_Acc element);
  
  
  /**
   * Removes the given element from the MirReportingHistorys array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMirReportingHistorys(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Relation array. This is achieved by marking the element for removal.
   */
  public void removeFromRelation(entity.MirRelation_Acc element);
  
  
  /**
   * Removes the given element from the Relation array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRelation(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TPOC array. This is achieved by marking the element for removal.
   */
  public void removeFromTPOC(entity.MirReportableTPOC_Acc element);
  
  
  /**
   * Removes the given element from the TPOC array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTPOC(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CMSDateOfIncident field.
   */
  public void setCMSDateOfIncident(java.util.Date value);
  
  
  /**
   * Sets the value of the ClaimRREID field.
   */
  public void setClaimRREID(java.lang.String value);
  
  
  /**
   * Sets the value of the HICNOrMBI field.
   */
  public void setHICNOrMBI(java.lang.String value);
  
  
  /**
   * Sets the value of the HasORM field.
   */
  public void setHasORM(java.lang.String value);
  
  
  /**
   * Sets the value of the HoldStatus field.
   */
  public void setHoldStatus(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ICN field.
   */
  public void setICN(java.lang.String value);
  
  
  /**
   * Sets the value of the LastSubmitAction field.
   */
  public void setLastSubmitAction(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MirReportingHistorys field.
   */
  public void setMirReportingHistorys(entity.MirReportableHist_Acc[] value);
  
  
  /**
   * Sets the value of the ORMTermDate field.
   */
  public void setORMTermDate(java.util.Date value);
  
  
  /**
   * Sets the value of the OfficeCode field.
   */
  public void setOfficeCode(entity.MirOfficeCode_Acc value);
  
  
  public void setOfficeCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RREID field.
   */
  public void setRREID(entity.MirRREID_Acc value);
  
  
  public void setRREIDID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Relation field.
   */
  public void setRelation(entity.MirRelation_Acc[] value);
  
  
  /**
   * Sets the value of the Representative field.
   */
  public void setRepresentative(java.lang.Long value);
  
  
  /**
   * Sets the value of the RepresentativeType field.
   */
  public void setRepresentativeType(typekey.MirRepType_Acc value);
  
  
  /**
   * Sets the value of the SettlementStatus field.
   */
  public void setSettlementStatus(typekey.MirSettlementStatus_Acc value);
  
  
  /**
   * Sets the value of the TPOC field.
   */
  public void setTPOC(entity.MirReportableTPOC_Acc[] value);
  
  
  /**
   * Sets the value of the TotalPropsedSettlementAmount field.
   */
  public void setTotalPropsedSettlementAmount(gw.api.financials.CurrencyAmount value);
  
  
  
}