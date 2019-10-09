package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirOfficeCode_Acc.eti;MirOfficeCode_Acc.eix;MirOfficeCode_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MirOfficeCode_AccInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the OfficeCode field.
   * RRE-definted code to uniquely identify variations in insurer addresses/offices
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOfficeCode();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the OfficeCode field.
   */
  public void setOfficeCode(java.lang.String value);
  
  
  
}