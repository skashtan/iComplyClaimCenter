package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirRelationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirRelationsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirRelationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirRelationsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 14, column 225
    function action_10 () : void {
      AddressBookPickerPopup.push(statictypeof (MirRelation.Contact))
    }
    
    // 'action' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 16, column 285
    function action_12 () : void {
      if (MirRelation.Contact != null) { ClaimContactDetailPopup.push(MirRelation.Contact, anExposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function action_13 () : void {
      ClaimContactDetailPopup.push(MirRelation.Contact, anExposure.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 16, column 225
    function action_28 () : void {
      AddressBookPickerPopup.push(Doctor.Type, anExposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 18, column 285
    function action_30 () : void {
      if (gw.transaction.Transaction MirRelation.Contact != null) { ClaimContactDetailPopup.push(gw.transaction.Transaction MirRelation.Contact, anExposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function action_31 () : void {
      ClaimContactDetailPopup.push(gw.transaction.Transaction MirRelation.Contact, anExposure.Claim)
    }
    
    // 'action' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 14, column 225
    function action_dest_11 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (MirRelation.Contact))
    }
    
    // 'action' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function action_dest_14 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(MirRelation.Contact, anExposure.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_29 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(Doctor.Type, anExposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_32 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(gw.transaction.Transaction MirRelation.Contact, anExposure.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_25 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(Doctor.Type, null, anExposure.Claim)
    }
    
    // 'def' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 12, column 229
    function def_onEnter_7 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (MirRelation.Contact), , anExposure.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_26 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(Doctor.Type, null, anExposure.Claim)
    }
    
    // 'def' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 12, column 229
    function def_refreshVariables_8 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (MirRelation.Contact), , anExposure.Claim)
    }
    
    // 'value' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      MirRelation.Contact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      gw.transaction.Transaction MirRelation.Contact = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function onPick_33 (PickedValue :  Contact) : void {
      var contactType = Doctor.Type; var result = eval("gw.transaction.Transaction MirRelation.Contact = anExposure.Claim.resolveContact(gw.transaction.Transaction MirRelation.Contact) as " + contactType.Name + ";return null;"); helper.providerOnPick(aMedicalDiagnosis);
    }
    
    // 'onPick' attribute on ClaimContactCell (id=Provider_name) at MirRelationsLV.pcf: line 40, column 57
    function onPick_39 (PickedValue :  java.lang.Object) : void {
      helper.providerOnPick(aMedicalDiagnosis)
    }
    
    // 'valueRange' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function valueRange_18 () : java.lang.Object {
      return anExposure.Claim.RelatedContacts
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_36 () : java.lang.Object {
      return injury.Claim.RelatedDoctorArray
    }
    
    // 'value' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function valueRoot_17 () : java.lang.Object {
      return MirRelation
    }
    
    // 'value' attribute on ClaimContactCell (id=Provider_name) at MirRelationsLV.pcf: line 40, column 57
    function value_23 () : entity.Contact {
      return gw.transaction.Transaction MirRelation.Contact
    }
    
    // 'value' attribute on ClaimRelatedContactCell (id=Contact) at MirRelationsLV.pcf: line 30, column 58
    function value_5 () : entity.Contact {
      return MirRelation.Contact
    }
    
    // 'valueRange' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function verifyValueRangeIsAllowedType_19 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function verifyValueRangeIsAllowedType_19 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function verifyValueRangeIsAllowedType_19 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_37 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_37 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_37 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 10, column 83
    function verifyValueRange_20 () : void {
      var __valueRangeArg = anExposure.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_19(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_38 () : void {
      var __valueRangeArg = injury.Claim.RelatedDoctorArray
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_37(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyCell (id=MirRelationTypeDropdown2) at MirRelationsLV.pcf: line 45, column 44
    function verifyValueType_41 () : void {
      var __valueTypeArg : MirRelationType_Acc
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    // 'visible' attribute on ClaimContactCell (id=Provider_name) at ClaimContactWidget.xml: line 16, column 225
    function visible_27 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(Doctor.Type, anExposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 12, column 229
    function visible_6 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimRelatedContactCell (id=Contact) at ClaimRelatedContactWidget.xml: line 14, column 225
    function visible_9 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (MirRelation.Contact))" != "" && true
    }
    
    property get MirRelation () : entity.MirRelation_Acc {
      return getIteratedValue(1) as entity.MirRelation_Acc
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirRelationsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirRelationsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on RowIterator at MirRelationsLV.pcf: line 30, column 58
    function sortValue_0 (MirRelation :  entity.MirRelation_Acc) : java.lang.Object {
      return contactContact.getOtherContact(Contact).PrimarySortValue
    }
    
    // 'sortBy' attribute on RowIterator at MirRelationsLV.pcf: line 30, column 58
    function sortValue_1 (MirRelation :  entity.MirRelation_Acc) : java.lang.Object {
      return contactContact.getOtherContact(Contact).SecondarySortValue
    }
    
    // 'sortBy' attribute on RowIterator at MirRelationsLV.pcf: line 30, column 58
    function sortValue_2 (MirRelation :  entity.MirRelation_Acc) : java.lang.Object {
      return contactContact.getOtherContact(Contact).TertiarySortValue
    }
    
    // 'sortBy' attribute on RowIterator at MirRelationsLV.pcf: line 30, column 58
    function sortValue_3 (MirRelation :  entity.MirRelation_Acc) : java.lang.Object {
      return contactContact.getOtherContact(Contact).QuaternarySortValue
    }
    
    // 'value' attribute on RowIterator at MirRelationsLV.pcf: line 40, column 57
    function sortValue_4 (MirRelation :  entity.MirRelation_Acc) : java.lang.Object {
      return gw.transaction.Transaction MirRelation.Contact
    }
    
    // 'toAdd' attribute on RowIterator at MirRelationsLV.pcf: line 19, column 44
    function toAdd_42 (MirRelation :  entity.MirRelation_Acc) : void {
      anExposure.mirReportable_Acc.addToRelation(MirRelation)
    }
    
    // 'toRemove' attribute on RowIterator at MirRelationsLV.pcf: line 19, column 44
    function toRemove_43 (MirRelation :  entity.MirRelation_Acc) : void {
      anExposure.mirReportable_Acc.removeFromRelation(MirRelation)
    }
    
    // 'value' attribute on RowIterator at MirRelationsLV.pcf: line 19, column 44
    function value_44 () : entity.MirRelation_Acc[] {
      return anExposure.mirReportable_Acc.Relation
    }
    
    property get anExposure () : Exposure {
      return getRequireValue("anExposure", 0) as Exposure
    }
    
    property set anExposure ($arg :  Exposure) {
      setRequireValue("anExposure", 0, $arg)
    }
    
    
  }
  
  
}