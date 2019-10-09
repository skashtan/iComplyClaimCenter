package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirReportableTPOC_Acc.eti;MirReportableTPOC_Acc.eix;MirReportableTPOC_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MirReportableTPOC_AccInternal extends com.guidewire._generated.entity.RetireableInternal {
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
   * Gets the value of the TpocAmount field.
   * Dollar amount of the total payment obligation to the claimant.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.financials.CurrencyAmount getTpocAmount();
  
  
  /**
   * Gets the value of the TpocDate field.
   * Date of associated Total Payment Obligation to the Claimant (TPOC)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTpocDate();
  
  
  /**
   * Gets the value of the TpocDelayedFunding field.
   * If funding for the TPOC Amount is delayed, provide actual or estimated date of funding
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getTpocDelayedFunding();
  
  
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
   * Sets the value of the TpocAmount field.
   */
  public void setTpocAmount(gw.api.financials.CurrencyAmount value);
  
  
  /**
   * Sets the value of the TpocDate field.
   */
  public void setTpocDate(java.util.Date value);
  
  
  /**
   * Sets the value of the TpocDelayedFunding field.
   */
  public void setTpocDelayedFunding(java.util.Date value);
  
  
  
}