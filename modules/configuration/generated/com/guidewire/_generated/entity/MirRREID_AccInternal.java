package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirRREID_Acc.eti;MirRREID_Acc.eix;MirRREID_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MirRREID_AccInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the RREID field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRREID();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the RREID field.
   */
  public void setRREID(java.lang.String value);
  
  
  
}