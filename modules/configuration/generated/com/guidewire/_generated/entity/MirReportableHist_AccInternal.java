package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirReportableHist_Acc.eti;MirReportableHist_Acc.eix;MirReportableHist_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MirReportableHist_AccInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the BeneficiaryStatus field.
   * Returns the beneficiary status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBeneficiaryStatus();
  
  
  /**
   * Gets the value of the LastCMSSubmit field.
   * The date this claim was last submitted to CMS, if any
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastCMSSubmit();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the MIRReportable field.
   * Reverse foreign key to MIRReportable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirReportable_Acc getMIRReportable();
  
  
  public gw.pl.persistence.core.Key getMIRReportableID();
  
  
  /**
   * Gets the value of the NextCMSQuery field.
   * Next scheduled query date for this claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextCMSQuery();
  
  
  /**
   * Gets the value of the NextCMSSubmit field.
   * Next scheduled reporting date for this claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getNextCMSSubmit();
  
  
  /**
   * Gets the value of the Status field.
   * Shows if submission was ok or if there are reporting errors
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStatus();
  
  
  /**
   * Gets the value of the StatusDetail field.
   * Details of the error if Status = ERROR
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStatusDetail();
  
  
  /**
   * Gets the value of the DiagnosisCodeLock field.
   * whether or not the diagnosis codes have been locked by Franco Signor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDiagnosisCodeLock();
  
  
  /**
   * Gets the value of the IsCMSReportable field.
   * Yes/No flag indicating the reportable status of the 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIsCMSReportable();
  
  
  /**
   * Gets the value of the IsReadyForCMS field.
   * whether or not the claim has passed all validation checks and is ready for reporting
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isIsReadyForCMS();
  
  
  /**
   * Sets the value of the BeneficiaryStatus field.
   */
  public void setBeneficiaryStatus(java.lang.String value);
  
  
  /**
   * Sets the value of the DiagnosisCodeLock field.
   */
  public void setDiagnosisCodeLock(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the IsCMSReportable field.
   */
  public void setIsCMSReportable(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the IsReadyForCMS field.
   */
  public void setIsReadyForCMS(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LastCMSSubmit field.
   */
  public void setLastCMSSubmit(java.util.Date value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MIRReportable field.
   */
  public void setMIRReportable(entity.MirReportable_Acc value);
  
  
  public void setMIRReportableID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the NextCMSQuery field.
   */
  public void setNextCMSQuery(java.util.Date value);
  
  
  /**
   * Sets the value of the NextCMSSubmit field.
   */
  public void setNextCMSSubmit(java.util.Date value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(java.lang.String value);
  
  
  /**
   * Sets the value of the StatusDetail field.
   */
  public void setStatusDetail(java.lang.String value);
  
  
  
}