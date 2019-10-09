package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirRelation_Acc.eti;MirRelation_Acc.eix;MirRelation_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface MirRelation_AccInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID();
  
  
  /**
   * Gets the value of the MirReportable_Acc field.
   * reverse foreign key to Mir Reportable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirReportable_Acc getMirReportable_Acc();
  
  
  public gw.pl.persistence.core.Key getMirReportable_AccID();
  
  
  /**
   * Gets the value of the RelationType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MirRelationType_Acc getRelationType();
  
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  public void setLoadCommandID(java.lang.Long value);
  
  
  /**
   * Sets the value of the MirReportable_Acc field.
   */
  public void setMirReportable_Acc(entity.MirReportable_Acc value);
  
  
  public void setMirReportable_AccID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RelationType field.
   */
  public void setRelationType(typekey.MirRelationType_Acc value);
  
  
  
}