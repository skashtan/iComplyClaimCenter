package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirReportableRespCode_Acc.eti;MirReportableRespCode_Acc.eix;MirReportableRespCode_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MirReportableRespCode_AccInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the CMSCode field.
   * The CMS-provided (or CMS-equivalent) error/compliance code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCMSCode();
  
  
  /**
   * Gets the value of the CodeOrigin field.
   * “CMS” for CMS-returned codes “MIRX” for system-generated validation warnings 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeOrigin();
  
  
  /**
   * Gets the value of the CodeType field.
   * E” for errors, “C” for compliance
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeType();
  
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the MIRReportableHist field.
   * Reverse foreign key to MIRReportableHist
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirReportableHist_Acc getMIRReportableHist();
  
  
  public gw.pl.persistence.core.Key getMIRReportableHistID();
  
  
  /**
   * Gets the value of the ResponseDescription field.
   * Detailed description of the error code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getResponseDescription();
  
  
  /**
   * Sets the value of the CMSCode field.
   */
  public void setCMSCode(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeOrigin field.
   */
  public void setCodeOrigin(java.lang.String value);
  
  
  /**
   * Sets the value of the CodeType field.
   */
  public void setCodeType(java.lang.String value);
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MIRReportableHist field.
   */
  public void setMIRReportableHist(entity.MirReportableHist_Acc value);
  
  
  public void setMIRReportableHistID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ResponseDescription field.
   */
  public void setResponseDescription(java.lang.String value);
  
  
  
}