package entity;

/**
 * MirReportable_Acc
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MirReportable_Acc.eti;MirReportable_Acc.eix;MirReportable_Acc.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "MirReportable_Acc")
public class MirReportable_Acc extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.MirReportable_Acc> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.MirReportable_Acc>("entity.MirReportable_Acc");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CMSDATEOFINCIDENT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CMSDateOfIncident");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HICNORMBI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HICNOrMBI");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HASORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HasORM");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> HOLDSTATUS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "HoldStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ICN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ICN");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTSUBMITACTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastSubmitAction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LOADCOMMANDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LoadCommandID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> MIRREPORTINGHISTORYS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "MirReportingHistorys");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ORMTERMDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ORMTermDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> OFFICECODE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "OfficeCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RREID_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RREID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REPRESENTATIVETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RepresentativeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SETTLEMENTSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SettlementStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TPOC_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "TPOC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALPROPSEDSETTLEMENTAMOUNT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalPropsedSettlementAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.MirReportable_AccInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public MirReportable_Acc()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public MirReportable_Acc(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected MirReportable_Acc(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.MirReportable_AccInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.MirReportable_AccInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the MirReportingHistorys array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMirReportingHistorys(entity.MirReportableHist_Acc element) {
    __getInternalInterface().addArrayElement(MIRREPORTINGHISTORYS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the TPOC array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTPOC(entity.MirReportableTPOC_Acc element) {
    __getInternalInterface().addArrayElement(TPOC_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CMSDateOfIncident field.
   * Date of Incident as defined by CMS
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCMSDateOfIncident() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CMSDATEOFINCIDENT_PROP.get());
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the HICNOrMBI field.
   * Medicare Health Insurance Claim Number or Medicare Beneficiary Identifier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHICNOrMBI() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HICNORMBI_PROP.get());
  }
  
  /**
   * Gets the value of the HasORM field.
   * Indication of whether there is on-going responsibility for medicals (ORM)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getHasORM() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HASORM_PROP.get());
  }
  
  /**
   * Gets the value of the ICN field.
   * Internal Control Number - Unique identifier in MIR System
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getICN() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ICN_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LastSubmitAction field.
   * Identifies add/update or delete
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastSubmitAction() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTSUBMITACTION_PROP.get());
  }
  
  /**
   * Gets the value of the LoadCommandID field.
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getLoadCommandID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
  }
  
  /**
   * Gets the value of the MirReportingHistorys field.
   * Array of each time this claim was reported
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirReportableHist_Acc[] getMirReportingHistorys() {
    return (entity.MirReportableHist_Acc[])__getInternalInterface().getFieldValue(MIRREPORTINGHISTORYS_PROP.get());
  }
  
  /**
   * Gets the value of the ORMTermDate field.
   * Date ongoing responsibility for medicals ended, where applicable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getORMTermDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(ORMTERMDATE_PROP.get());
  }
  
  /**
   * Gets the value of the OfficeCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirOfficeCode_Acc getOfficeCode() {
    return (entity.MirOfficeCode_Acc)__getInternalInterface().getFieldValue(OFFICECODE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RREID field.
   * The RRE ID corresponding to the claim
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirRREID_Acc getRREID() {
    return (entity.MirRREID_Acc)__getInternalInterface().getFieldValue(RREID_PROP.get());
  }
  
  /**
   * Gets the value of the RepresentativeType field.
   * type of representative
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MirRepType_Acc getRepresentativeType() {
    return (typekey.MirRepType_Acc)__getInternalInterface().getFieldValue(REPRESENTATIVETYPE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the SettlementStatus field.
   * identifies settlement status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MirSettlementStatus_Acc getSettlementStatus() {
    return (typekey.MirSettlementStatus_Acc)__getInternalInterface().getFieldValue(SETTLEMENTSTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the TPOC field.
   * Total Payment Obligation to Claimant
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MirReportableTPOC_Acc[] getTPOC() {
    return (entity.MirReportableTPOC_Acc[])__getInternalInterface().getFieldValue(TPOC_PROP.get());
  }
  
  /**
   * Gets the value of the TotalPropsedSettlementAmount field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.api.financials.CurrencyAmount getTotalPropsedSettlementAmount() {
    return (gw.api.financials.CurrencyAmount)__getInternalInterface().getFieldValue(TOTALPROPSEDSETTLEMENTAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the HoldStatus field.
   * Allows the claim to be placed on “Hold” (prevents this file from being transmitted to CMS)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isHoldStatus() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(HOLDSTATUS_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Removes the given element from the MirReportingHistorys array. This is achieved by marking the element for removal.
   */
  public void removeFromMirReportingHistorys(entity.MirReportableHist_Acc element) {
    __getInternalInterface().removeArrayElement(MIRREPORTINGHISTORYS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the MirReportingHistorys array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMirReportingHistorys(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(MIRREPORTINGHISTORYS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the TPOC array. This is achieved by marking the element for removal.
   */
  public void removeFromTPOC(entity.MirReportableTPOC_Acc element) {
    __getInternalInterface().removeArrayElement(TPOC_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the TPOC array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTPOC(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(TPOC_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CMSDateOfIncident field.
   */
  public void setCMSDateOfIncident(java.util.Date value) {
    __getInternalInterface().setFieldValue(CMSDATEOFINCIDENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HICNOrMBI field.
   */
  public void setHICNOrMBI(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(HICNORMBI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HasORM field.
   */
  public void setHasORM(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(HASORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the HoldStatus field.
   */
  public void setHoldStatus(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(HOLDSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ICN field.
   */
  public void setICN(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ICN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastSubmitAction field.
   */
  public void setLastSubmitAction(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTSUBMITACTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LoadCommandID field.
   */
  private void setLoadCommandID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MirReportingHistorys field.
   */
  public void setMirReportingHistorys(entity.MirReportableHist_Acc[] value) {
    __getInternalInterface().setFieldValue(MIRREPORTINGHISTORYS_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the ORMTermDate field.
   */
  public void setORMTermDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(ORMTERMDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OfficeCode field.
   */
  public void setOfficeCode(entity.MirOfficeCode_Acc value) {
    __getInternalInterface().setFieldValue(OFFICECODE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RREID field.
   */
  public void setRREID(entity.MirRREID_Acc value) {
    __getInternalInterface().setFieldValue(RREID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RepresentativeType field.
   */
  public void setRepresentativeType(typekey.MirRepType_Acc value) {
    __getInternalInterface().setFieldValue(REPRESENTATIVETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SettlementStatus field.
   */
  public void setSettlementStatus(typekey.MirSettlementStatus_Acc value) {
    __getInternalInterface().setFieldValue(SETTLEMENTSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TPOC field.
   */
  public void setTPOC(entity.MirReportableTPOC_Acc[] value) {
    __getInternalInterface().setFieldValue(TPOC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalPropsedSettlementAmount field.
   */
  public void setTotalPropsedSettlementAmount(gw.api.financials.CurrencyAmount value) {
    __getInternalInterface().setFieldValue(TOTALPROPSEDSETTLEMENTAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.MirReportable_AccInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.MirReportable_Acc.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the MirReportingHistorys array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToMirReportingHistorys(entity.MirReportableHist_Acc element) {
      __getInternalInterface().addArrayElement(MIRREPORTINGHISTORYS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the TPOC array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToTPOC(entity.MirReportableTPOC_Acc element) {
      __getInternalInterface().addArrayElement(TPOC_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CMSDateOfIncident field.
     * Date of Incident as defined by CMS
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCMSDateOfIncident() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CMSDATEOFINCIDENT_PROP.get());
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the HICNOrMBI field.
     * Medicare Health Insurance Claim Number or Medicare Beneficiary Identifier
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHICNOrMBI() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HICNORMBI_PROP.get());
    }
    
    /**
     * Gets the value of the HasORM field.
     * Indication of whether there is on-going responsibility for medicals (ORM)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getHasORM() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(HASORM_PROP.get());
    }
    
    /**
     * Gets the value of the ICN field.
     * Internal Control Number - Unique identifier in MIR System
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getICN() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ICN_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the LastSubmitAction field.
     * Identifies add/update or delete
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastSubmitAction() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTSUBMITACTION_PROP.get());
    }
    
    /**
     * Gets the value of the LoadCommandID field.
     * LoadCommand for load where row was created. If not null this object was loaded via the loader.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getLoadCommandID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(LOADCOMMANDID_PROP.get());
    }
    
    /**
     * Gets the value of the MirReportingHistorys field.
     * Array of each time this claim was reported
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MirReportableHist_Acc[] getMirReportingHistorys() {
      return (entity.MirReportableHist_Acc[])__getInternalInterface().getFieldValue(MIRREPORTINGHISTORYS_PROP.get());
    }
    
    /**
     * Gets the value of the ORMTermDate field.
     * Date ongoing responsibility for medicals ended, where applicable
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getORMTermDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(ORMTERMDATE_PROP.get());
    }
    
    /**
     * Gets the value of the OfficeCode field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MirOfficeCode_Acc getOfficeCode() {
      return (entity.MirOfficeCode_Acc)__getInternalInterface().getFieldValue(OFFICECODE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getOfficeCodeID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(OFFICECODE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the RREID field.
     * The RRE ID corresponding to the claim
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MirRREID_Acc getRREID() {
      return (entity.MirRREID_Acc)__getInternalInterface().getFieldValue(RREID_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRREIDID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RREID_PROP.get());
    }
    
    /**
     * Gets the value of the RepresentativeType field.
     * type of representative
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MirRepType_Acc getRepresentativeType() {
      return (typekey.MirRepType_Acc)__getInternalInterface().getFieldValue(REPRESENTATIVETYPE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the SettlementStatus field.
     * identifies settlement status
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MirSettlementStatus_Acc getSettlementStatus() {
      return (typekey.MirSettlementStatus_Acc)__getInternalInterface().getFieldValue(SETTLEMENTSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the TPOC field.
     * Total Payment Obligation to Claimant
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MirReportableTPOC_Acc[] getTPOC() {
      return (entity.MirReportableTPOC_Acc[])__getInternalInterface().getFieldValue(TPOC_PROP.get());
    }
    
    /**
     * Gets the value of the TotalPropsedSettlementAmount field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.api.financials.CurrencyAmount getTotalPropsedSettlementAmount() {
      return (gw.api.financials.CurrencyAmount)__getInternalInterface().getFieldValue(TOTALPROPSEDSETTLEMENTAMOUNT_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Gets the value of the HoldStatus field.
     * Allows the claim to be placed on “Hold” (prevents this file from being transmitted to CMS)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isHoldStatus() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(HOLDSTATUS_PROP.get());
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    /**
     * Removes the given element from the MirReportingHistorys array. This is achieved by marking the element for removal.
     */
    public void removeFromMirReportingHistorys(entity.MirReportableHist_Acc element) {
      __getInternalInterface().removeArrayElement(MIRREPORTINGHISTORYS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the MirReportingHistorys array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromMirReportingHistorys(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(MIRREPORTINGHISTORYS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the TPOC array. This is achieved by marking the element for removal.
     */
    public void removeFromTPOC(entity.MirReportableTPOC_Acc element) {
      __getInternalInterface().removeArrayElement(TPOC_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the TPOC array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromTPOC(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(TPOC_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CMSDateOfIncident field.
     */
    public void setCMSDateOfIncident(java.util.Date value) {
      __getInternalInterface().setFieldValue(CMSDATEOFINCIDENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HICNOrMBI field.
     */
    public void setHICNOrMBI(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HICNORMBI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HasORM field.
     */
    public void setHasORM(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(HASORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the HoldStatus field.
     */
    public void setHoldStatus(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(HOLDSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ICN field.
     */
    public void setICN(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ICN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastSubmitAction field.
     */
    public void setLastSubmitAction(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTSUBMITACTION_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LoadCommandID field.
     */
    public void setLoadCommandID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(LOADCOMMANDID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MirReportingHistorys field.
     */
    public void setMirReportingHistorys(entity.MirReportableHist_Acc[] value) {
      __getInternalInterface().setFieldValue(MIRREPORTINGHISTORYS_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the ORMTermDate field.
     */
    public void setORMTermDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(ORMTERMDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OfficeCode field.
     */
    public void setOfficeCode(entity.MirOfficeCode_Acc value) {
      __getInternalInterface().setFieldValue(OFFICECODE_PROP.get(), value);
    }
    
    public void setOfficeCodeID(gw.pl.persistence.core.Key value) {
      setFieldValue(OFFICECODE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the RREID field.
     */
    public void setRREID(entity.MirRREID_Acc value) {
      __getInternalInterface().setFieldValue(RREID_PROP.get(), value);
    }
    
    public void setRREIDID(gw.pl.persistence.core.Key value) {
      setFieldValue(RREID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RepresentativeType field.
     */
    public void setRepresentativeType(typekey.MirRepType_Acc value) {
      __getInternalInterface().setFieldValue(REPRESENTATIVETYPE_PROP.get(), value);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SettlementStatus field.
     */
    public void setSettlementStatus(typekey.MirSettlementStatus_Acc value) {
      __getInternalInterface().setFieldValue(SETTLEMENTSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TPOC field.
     */
    public void setTPOC(entity.MirReportableTPOC_Acc[] value) {
      __getInternalInterface().setFieldValue(TPOC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalPropsedSettlementAmount field.
     */
    public void setTotalPropsedSettlementAmount(gw.api.financials.CurrencyAmount value) {
      __getInternalInterface().setFieldValue(TOTALPROPSEDSETTLEMENTAMOUNT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.MirReportable_Acc.class, config);
    com.guidewire._generated.entity.MirReportable_AccInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.MirReportable_Acc, com.guidewire._generated.entity.MirReportable_AccInternal>() {
      public java.lang.Object getImplementation(entity.MirReportable_Acc bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.MirReportable_AccInternal getInternalInterface(entity.MirReportable_Acc bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.MirReportable_Acc newEmptyInstance() {
        return new entity.MirReportable_Acc((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}