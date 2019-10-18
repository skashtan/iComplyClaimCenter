package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Generaldamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ExposureDetailDV_GeneraldamageExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/exposures/ExposureDetailDV.Generaldamage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ExposureDetailDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 16, column 225
    function action_113 () : void {
      AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 18, column 285
    function action_115 () : void {
      if (Exposure.Claimant != null) { ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function action_116 () : void {
      ClaimContactDetailPopup.push(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name) at ExposureDetailDV.Generaldamage.pcf: line 69, column 49
    function action_57 () : void {
      UserContactDetailPopup.push(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_79 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_81 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine) at ExposureDetailDV.Generaldamage.pcf: line 91, column 63
    function action_90 () : void {
      ClaimPolicyStatCodePickerPopup.push(Exposure.Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_114 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_117 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Exposure.Claimant, Exposure.Claim)
    }
    
    // 'action' attribute on TextInput (id=AssignedUser_Name) at ExposureDetailDV.Generaldamage.pcf: line 69, column 49
    function action_dest_58 () : pcf.api.Destination {
      return pcf.UserContactDetailPopup.createDestination(Exposure.AssignedUser)
    }
    
    // 'action' attribute on MenuItem (id=StatLine_PickerButton) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_80 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function action_dest_82 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'action' attribute on PolicyStatCodePickerInput (id=StatLine) at ExposureDetailDV.Generaldamage.pcf: line 91, column 63
    function action_dest_91 () : pcf.api.Destination {
      return pcf.ClaimPolicyStatCodePickerPopup.createDestination(Exposure.Claim)
    }
    
    // 'available' attribute on TextInput (id=AssignedUser_Name) at ExposureDetailDV.Generaldamage.pcf: line 69, column 49
    function available_53 () : java.lang.Boolean {
      return Exposure.AssignedUser.Contact != null
    }
    
    // 'condition' attribute on ReflectCondition at ExposureDetailDV.Generaldamage.pcf: line 121, column 45
    function condition_105 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Boolean {
      return VALUE == TC_INSURED
    }
    
    // 'condition' attribute on ReflectCondition at ExposureDetailDV.Generaldamage.pcf: line 138, column 42
    function condition_127 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Boolean {
      return Exposure.Claim.Insured==VALUE
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_110 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Generaldamage.pcf: line 166, column 51
    function def_onEnter_154 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on ListViewInput at ExposureDetailDV.Generaldamage.pcf: line 223, column 110
    function def_onEnter_197 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.onEnter(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Generaldamage.pcf: line 243, column 128
    function def_onEnter_204 (def :  pcf.OtherServicesLVInputSet) : void {
      def.onEnter(Exposure.Claim, Exposure.Incident, Exposure.Incident.ServiceRequests.toSet(), null, {})
    }
    
    // 'def' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_111 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Exposure.Claimant), null, Exposure.Claim)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Generaldamage.pcf: line 166, column 51
    function def_refreshVariables_155 (def :  pcf.ExposureWorkloadInputSet) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on ListViewInput at ExposureDetailDV.Generaldamage.pcf: line 223, column 110
    function def_refreshVariables_198 (def :  pcf.EditableOtherCoverageDetailsLV) : void {
      def.refreshVariables(Exposure)
    }
    
    // 'def' attribute on InputSetRef at ExposureDetailDV.Generaldamage.pcf: line 243, column 128
    function def_refreshVariables_205 (def :  pcf.OtherServicesLVInputSet) : void {
      def.refreshVariables(Exposure.Claim, Exposure.Incident, Exposure.Incident.ServiceRequests.toSet(), null, {})
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_120 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Claimant = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type) at ExposureDetailDV.Generaldamage.pcf: line 133, column 42
    function defaultSetter_133 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantType = (__VALUE_TO_SET as typekey.ClaimantType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited) at ExposureDetailDV.Generaldamage.pcf: line 148, column 36
    function defaultSetter_139 (__VALUE_TO_SET :  java.lang.Object) : void {
      ContactProhibited = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=GeneralDamage_Severity) at ExposureDetailDV.Generaldamage.pcf: line 178, column 43
    function defaultSetter_161 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Severity = (__VALUE_TO_SET as typekey.SeverityType)
    }
    
    // 'value' attribute on TextAreaInput (id=GeneralDamage_Description) at ExposureDetailDV.Generaldamage.pcf: line 185, column 48
    function defaultSetter_166 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=GeneralDamage_LossEstimate) at ExposureDetailDV.Generaldamage.pcf: line 190, column 49
    function defaultSetter_172 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Incident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState) at ExposureDetailDV.Generaldamage.pcf: line 200, column 43
    function defaultSetter_179 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage) at ExposureDetailDV.Generaldamage.pcf: line 219, column 41
    function defaultSetter_195 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.OtherCoverage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.Coverage = (__VALUE_TO_SET as entity.Coverage)
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function defaultSetter_85 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.StatLine = (__VALUE_TO_SET as entity.StatCode)
    }
    
    // 'filter' attribute on TypeKeyInput (id=GeneralDamage_Severity) at ExposureDetailDV.Generaldamage.pcf: line 178, column 43
    function filter_163 (VALUE :  typekey.SeverityType, VALUES :  typekey.SeverityType[]) : java.lang.Boolean {
      return VALUE.hasCategory( Exposure.Incident.Subtype )
    }
    
    // 'filter' attribute on TypeKeyInput (id=JurisdictionState) at ExposureDetailDV.Generaldamage.pcf: line 200, column 43
    function filter_181 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'label' attribute on Label at ExposureDetailDV.Generaldamage.pcf: line 16, column 98
    function label_0 () : java.lang.String {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Overall")
    }
    
    // 'label' attribute on TypeKeyInput (id=LossParty) at ExposureDetailDV.Generaldamage.pcf: line 22, column 44
    function label_1 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.LossParty")
    }
    
    // 'label' attribute on TypeKeyInput (id=ValidationLevel) at ExposureDetailDV.Generaldamage.pcf: line 105, column 46
    function label_100 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.ValidationLevel")
    }
    
    // 'label' attribute on TypeKeyInput (id=Claimant_Type) at ExposureDetailDV.Generaldamage.pcf: line 133, column 42
    function label_129 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Claimant.Type")
    }
    
    // 'label' attribute on TypeKeyInput (id=PrimaryCoverage) at ExposureDetailDV.Generaldamage.pcf: line 32, column 43
    function label_13 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.PrimaryCoverage")
    }
    
    // 'label' attribute on BooleanRadioInput (id=Claimant_ContactProhibited) at ExposureDetailDV.Generaldamage.pcf: line 148, column 36
    function label_135 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Claimant.ContactProhibited")
    }
    
    // 'label' attribute on TextInput (id=Claimant_PrimaryPhone) at ExposureDetailDV.Generaldamage.pcf: line 152, column 53
    function label_142 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Claimant.PrimaryPhone")
    }
    
    // 'label' attribute on TextInput (id=Claimant_Address) at ExposureDetailDV.Generaldamage.pcf: line 160, column 62
    function label_149 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Claimant.Address")
    }
    
    // 'label' attribute on Label at ExposureDetailDV.Generaldamage.pcf: line 171, column 88
    function label_156 () : java.lang.String {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Damage")
    }
    
    // 'label' attribute on TypeKeyInput (id=GeneralDamage_Severity) at ExposureDetailDV.Generaldamage.pcf: line 178, column 43
    function label_157 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Severity")
    }
    
    // 'label' attribute on CurrencyInput (id=GeneralDamage_LossEstimate) at ExposureDetailDV.Generaldamage.pcf: line 190, column 49
    function label_168 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.LossEstimate")
    }
    
    // 'label' attribute on Label at ExposureDetailDV.Generaldamage.pcf: line 193, column 97
    function label_174 () : java.lang.String {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Coding")
    }
    
    // 'label' attribute on TypeKeyInput (id=JurisdictionState) at ExposureDetailDV.Generaldamage.pcf: line 200, column 43
    function label_175 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.JurisdictionState")
    }
    
    // 'label' attribute on TypeKeyInput (id=Segment) at ExposureDetailDV.Generaldamage.pcf: line 205, column 43
    function label_182 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Segment")
    }
    
    // 'label' attribute on TypeKeyInput (id=Strategy) at ExposureDetailDV.Generaldamage.pcf: line 210, column 44
    function label_187 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Strategy")
    }
    
    // 'label' attribute on TypeKeyInput (id=ClosedOutcome) at ExposureDetailDV.Generaldamage.pcf: line 38, column 50
    function label_19 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.ClosedOutcome")
    }
    
    // 'label' attribute on Label at ExposureDetailDV.Generaldamage.pcf: line 213, column 105
    function label_192 () : java.lang.String {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.OtherCarrierInvolvement")
    }
    
    // 'label' attribute on ListViewInput at ExposureDetailDV.Generaldamage.pcf: line 223, column 110
    function label_199 () : java.lang.String {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.OtherCoverageDetails")
    }
    
    // 'label' attribute on Label at ExposureDetailDV.Generaldamage.pcf: line 247, column 70
    function label_207 () : java.lang.String {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Financials")
    }
    
    // 'label' attribute on CurrencyInput (id=RemainingReserves) at ExposureDetailDV.Generaldamage.pcf: line 253, column 60
    function label_209 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.RemainingReserves")
    }
    
    // 'label' attribute on CurrencyInput (id=FuturePayments) at ExposureDetailDV.Generaldamage.pcf: line 258, column 60
    function label_216 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.FuturePayments")
    }
    
    // 'label' attribute on CurrencyInput (id=TotalPayments) at ExposureDetailDV.Generaldamage.pcf: line 263, column 60
    function label_223 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.TotalPayments")
    }
    
    // 'label' attribute on CurrencyInput (id=TotalRecoveries) at ExposureDetailDV.Generaldamage.pcf: line 268, column 62
    function label_230 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.TotalRecoveries")
    }
    
    // 'label' attribute on CurrencyInput (id=TotalIncurredNet) at ExposureDetailDV.Generaldamage.pcf: line 274, column 68
    function label_237 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.TotalIncurredNet")
    }
    
    // 'label' attribute on TypeKeyInput (id=CoverageSubType) at ExposureDetailDV.Generaldamage.pcf: line 43, column 46
    function label_25 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.CoverageSubType")
    }
    
    // 'label' attribute on DateInput (id=ReOpenDate) at ExposureDetailDV.Generaldamage.pcf: line 49, column 50
    function label_31 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.ReOpenDate")
    }
    
    // 'label' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function label_37 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.Coverage")
    }
    
    // 'label' attribute on TypeKeyInput (id=ReopenedReason) at ExposureDetailDV.Generaldamage.pcf: line 63, column 50
    function label_47 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.ReopenedReason")
    }
    
    // 'label' attribute on TextInput (id=AssignedUser_Name) at ExposureDetailDV.Generaldamage.pcf: line 69, column 49
    function label_54 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.AssignedUser.Name")
    }
    
    // 'label' attribute on TextInput (id=AssignedGroup_Name) at ExposureDetailDV.Generaldamage.pcf: line 73, column 58
    function label_62 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.AssignedGroup.Name")
    }
    
    // 'label' attribute on TypeKeyInput (id=State) at ExposureDetailDV.Generaldamage.pcf: line 78, column 44
    function label_67 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.State")
    }
    
    // 'label' attribute on DateInput (id=ClosedDate) at ExposureDetailDV.Generaldamage.pcf: line 27, column 50
    function label_7 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.ClosedDate")
    }
    
    // 'label' attribute on DateInput (id=CreateTime) at ExposureDetailDV.Generaldamage.pcf: line 82, column 38
    function label_72 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.CreateTime")
    }
    
    // 'label' attribute on PolicyStatCodePickerInput (id=StatLine) at ExposureDetailDV.Generaldamage.pcf: line 91, column 63
    function label_77 () : java.lang.Object {
      return DisplayKey.get("NVV.Exposure.SubView.GeneralDamage.Exposure.StatLine")
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function onPick_118 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Exposure.Claimant); var result = eval("Exposure.Claimant = Exposure.Claim.resolveContact(Exposure.Claimant) as " + contactType.Name + ";return null;"); ;
    }
    
    // Reflect at ExposureDetailDV.Generaldamage.pcf: line 118, column 34
    function reflectionValue_107 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return (VALUE == TC_INSURED) ? (Exposure.Claim.Insured) : (true) ? ("") : "<NOCHANGE>"
    }
    
    // Reflect at ExposureDetailDV.Generaldamage.pcf: line 135, column 40
    function reflectionValue_128 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return (Exposure.Claim.Insured==VALUE) ? ("insured") : (true) ? ("") : "<NOCHANGE>"
    }
    
    // 'value' attribute on Reflect at ExposureDetailDV.Generaldamage.pcf: line 155, column 44
    function reflectionValue_140 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryPhoneValue
    }
    
    // 'value' attribute on Reflect at ExposureDetailDV.Generaldamage.pcf: line 163, column 53
    function reflectionValue_147 (TRIGGER_INDEX :  int, VALUE :  entity.Contact) : java.lang.Object {
      return VALUE.PrimaryAddressDisplayValue
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_122 () : java.lang.Object {
      return Exposure.Claim.getRelatedContacts(Exposure.getContactType(TC_CLAIMANT))
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function valueRange_43 () : java.lang.Object {
      return Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function valueRange_87 () : java.lang.Object {
      return Exposure.Claim.Policy.CappedStatCodes
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone) at ExposureDetailDV.Generaldamage.pcf: line 152, column 53
    function valueRoot_146 () : java.lang.Object {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=GeneralDamage_Severity) at ExposureDetailDV.Generaldamage.pcf: line 178, column 43
    function valueRoot_162 () : java.lang.Object {
      return Exposure.Incident
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves) at ExposureDetailDV.Generaldamage.pcf: line 253, column 60
    function valueRoot_214 () : java.lang.Object {
      return Exposure.ExposureRpt
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty) at ExposureDetailDV.Generaldamage.pcf: line 22, column 44
    function valueRoot_5 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on TypeKeyInput (id=ValidationLevel) at ExposureDetailDV.Generaldamage.pcf: line 105, column 46
    function value_101 () : typekey.ValidationLevel {
      return Exposure.ValidationLevel
    }
    
    // 'value' attribute on ReflectCondition at ExposureDetailDV.Generaldamage.pcf: line 121, column 45
    function value_106 (TRIGGER_INDEX :  int, VALUE :  typekey.LossPartyType) : java.lang.Object {
      return Exposure.Claim.Insured
    }
    
    // 'value' attribute on ClaimContactInput (id=Claimant_Picker) at ExposureDetailDV.Generaldamage.pcf: line 116, column 94
    function value_108 () : entity.Contact {
      return Exposure.Claimant
    }
    
    // 'value' attribute on TypeKeyInput (id=Claimant_Type) at ExposureDetailDV.Generaldamage.pcf: line 133, column 42
    function value_130 () : typekey.ClaimantType {
      return Exposure.ClaimantType
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_ContactProhibited) at ExposureDetailDV.Generaldamage.pcf: line 148, column 36
    function value_136 () : java.lang.Boolean {
      return ContactProhibited
    }
    
    // 'value' attribute on TypeKeyInput (id=PrimaryCoverage) at ExposureDetailDV.Generaldamage.pcf: line 32, column 43
    function value_14 () : typekey.CoverageType {
      return Exposure.PrimaryCoverage
    }
    
    // 'value' attribute on TextInput (id=Claimant_PrimaryPhone) at ExposureDetailDV.Generaldamage.pcf: line 152, column 53
    function value_143 () : java.lang.String {
      return Exposure.Claimant.PrimaryPhoneValue
    }
    
    // 'value' attribute on TextInput (id=Claimant_Address) at ExposureDetailDV.Generaldamage.pcf: line 160, column 62
    function value_150 () : java.lang.String {
      return Exposure.Claimant.PrimaryAddressDisplayValue
    }
    
    // 'value' attribute on TypeKeyInput (id=GeneralDamage_Severity) at ExposureDetailDV.Generaldamage.pcf: line 178, column 43
    function value_158 () : typekey.SeverityType {
      return Exposure.Incident.Severity
    }
    
    // 'value' attribute on TextAreaInput (id=GeneralDamage_Description) at ExposureDetailDV.Generaldamage.pcf: line 185, column 48
    function value_164 () : java.lang.String {
      return Exposure.Incident.Description
    }
    
    // 'value' attribute on CurrencyInput (id=GeneralDamage_LossEstimate) at ExposureDetailDV.Generaldamage.pcf: line 190, column 49
    function value_169 () : gw.api.financials.CurrencyAmount {
      return Exposure.Incident.LossEstimate
    }
    
    // 'value' attribute on TypeKeyInput (id=JurisdictionState) at ExposureDetailDV.Generaldamage.pcf: line 200, column 43
    function value_176 () : typekey.Jurisdiction {
      return Exposure.JurisdictionState
    }
    
    // 'value' attribute on TypeKeyInput (id=Segment) at ExposureDetailDV.Generaldamage.pcf: line 205, column 43
    function value_183 () : typekey.ClaimSegment {
      return Exposure.Segment
    }
    
    // 'value' attribute on TypeKeyInput (id=Strategy) at ExposureDetailDV.Generaldamage.pcf: line 210, column 44
    function value_188 () : typekey.ClaimStrategy {
      return Exposure.Strategy
    }
    
    // 'value' attribute on BooleanRadioInput (id=Claimant_OtherCoverage) at ExposureDetailDV.Generaldamage.pcf: line 219, column 41
    function value_193 () : java.lang.Boolean {
      return Exposure.OtherCoverage
    }
    
    // 'value' attribute on TypeKeyInput (id=LossParty) at ExposureDetailDV.Generaldamage.pcf: line 22, column 44
    function value_2 () : typekey.LossPartyType {
      return Exposure.LossParty
    }
    
    // 'value' attribute on TypeKeyInput (id=ClosedOutcome) at ExposureDetailDV.Generaldamage.pcf: line 38, column 50
    function value_20 () : typekey.ExposureClosedOutcomeType {
      return Exposure.ClosedOutcome
    }
    
    // 'value' attribute on CurrencyInput (id=RemainingReserves) at ExposureDetailDV.Generaldamage.pcf: line 253, column 60
    function value_210 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.RemainingReserves
    }
    
    // 'value' attribute on CurrencyInput (id=FuturePayments) at ExposureDetailDV.Generaldamage.pcf: line 258, column 60
    function value_217 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.FuturePayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPayments) at ExposureDetailDV.Generaldamage.pcf: line 263, column 60
    function value_224 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalPayments
    }
    
    // 'value' attribute on CurrencyInput (id=TotalRecoveries) at ExposureDetailDV.Generaldamage.pcf: line 268, column 62
    function value_231 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalRecoveries
    }
    
    // 'value' attribute on CurrencyInput (id=TotalIncurredNet) at ExposureDetailDV.Generaldamage.pcf: line 274, column 68
    function value_238 () : gw.api.financials.CurrencyAmount {
      return Exposure.ExposureRpt.TotalIncurredNet
    }
    
    // 'value' attribute on TypeKeyInput (id=CoverageSubType) at ExposureDetailDV.Generaldamage.pcf: line 43, column 46
    function value_26 () : typekey.CoverageSubtype {
      return Exposure.CoverageSubType
    }
    
    // 'value' attribute on DateInput (id=ReOpenDate) at ExposureDetailDV.Generaldamage.pcf: line 49, column 50
    function value_32 () : java.util.Date {
      return Exposure.ReOpenDate
    }
    
    // 'value' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function value_38 () : entity.Coverage {
      return Exposure.Coverage
    }
    
    // 'value' attribute on TypeKeyInput (id=ReopenedReason) at ExposureDetailDV.Generaldamage.pcf: line 63, column 50
    function value_48 () : typekey.ExposureReopenedReason {
      return Exposure.ReopenedReason
    }
    
    // 'value' attribute on TextInput (id=AssignedUser_Name) at ExposureDetailDV.Generaldamage.pcf: line 69, column 49
    function value_55 () : java.lang.String {
      return Exposure.AssigneeDisplayString
    }
    
    // 'value' attribute on TextInput (id=AssignedGroup_Name) at ExposureDetailDV.Generaldamage.pcf: line 73, column 58
    function value_63 () : java.lang.String {
      return Exposure.AssigneeGroupOnlyDisplayString
    }
    
    // 'value' attribute on TypeKeyInput (id=State) at ExposureDetailDV.Generaldamage.pcf: line 78, column 44
    function value_68 () : typekey.ExposureState {
      return Exposure.State
    }
    
    // 'value' attribute on DateInput (id=CreateTime) at ExposureDetailDV.Generaldamage.pcf: line 82, column 38
    function value_73 () : java.util.Date {
      return Exposure.CreateTime
    }
    
    // 'value' attribute on PolicyStatCodePickerInput (id=StatLine) at ExposureDetailDV.Generaldamage.pcf: line 91, column 63
    function value_78 () : entity.StatCode {
      return Exposure.StatLine
    }
    
    // 'value' attribute on DateInput (id=ClosedDate) at ExposureDetailDV.Generaldamage.pcf: line 27, column 50
    function value_8 () : java.util.Date {
      return Exposure.CloseDate
    }
    
    // 'value' attribute on TextInput (id=StatLine_Warning) at ExposureDetailDV.Generaldamage.pcf: line 98, column 65
    function value_96 () : java.lang.String {
      return DisplayKey.get("Java.StatCodes.StatCodeListCappedWarning", Exposure.Claim.Policy.StatCodeListCap, Exposure.Claim.Policy.StatCodes.length)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_123 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_123 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_123 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function verifyValueRangeIsAllowedType_44 ($$arg :  entity.Coverage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function verifyValueRangeIsAllowedType_44 ($$arg :  gw.api.database.IQueryBeanResult<entity.Coverage>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function verifyValueRangeIsAllowedType_44 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_88 ($$arg :  entity.StatCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_88 ($$arg :  gw.api.database.IQueryBeanResult<entity.StatCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRangeIsAllowedType_88 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_124 () : void {
      var __valueRangeArg = Exposure.Claim.getRelatedContacts(Exposure.getContactType(TC_CLAIMANT))
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_123(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Coverage) at ExposureDetailDV.Generaldamage.pcf: line 57, column 38
    function verifyValueRange_45 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.getCoveragesByCoverageType(Exposure.PrimaryCoverage)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_44(__valueRangeArg)
    }
    
    // 'valueRange' attribute on PolicyStatCodePickerInput (id=StatLine) at PolicyStatCodePickerWidget.xml: line 5, column 25
    function verifyValueRange_89 () : void {
      var __valueRangeArg = Exposure.Claim.Policy.CappedStatCodes
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_88(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 14, column 229
    function visible_109 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Claimant_Picker) at ClaimContactWidget.xml: line 16, column 225
    function visible_112 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Exposure.Claimant), Exposure.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessageFNOL) at ExposureDetailDV.Generaldamage.pcf: line 236, column 46
    function visible_200 () : java.lang.Boolean {
      return Exposure.Claim.DraftClaim
    }
    
    // 'visible' attribute on TextInput (id=ServiceRequestSubmitMessage) at ExposureDetailDV.Generaldamage.pcf: line 241, column 81
    function visible_202 () : java.lang.Boolean {
      return not Exposure.Claim.DraftClaim and CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on Label at ExposureDetailDV.Generaldamage.pcf: line 247, column 70
    function visible_206 () : java.lang.Boolean {
      return perm.Claim.viewtransactiondetails(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=RemainingReserves) at ExposureDetailDV.Generaldamage.pcf: line 253, column 60
    function visible_208 () : java.lang.Boolean {
      return perm.Claim.viewreserves(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=FuturePayments) at ExposureDetailDV.Generaldamage.pcf: line 258, column 60
    function visible_215 () : java.lang.Boolean {
      return perm.Claim.viewpayments(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalRecoveries) at ExposureDetailDV.Generaldamage.pcf: line 268, column 62
    function visible_229 () : java.lang.Boolean {
      return perm.Claim.viewrecoveries(Exposure.Claim)
    }
    
    // 'visible' attribute on CurrencyInput (id=TotalIncurredNet) at ExposureDetailDV.Generaldamage.pcf: line 274, column 68
    function visible_236 () : java.lang.Boolean {
      return perm.Claim.viewnettotalincurred(Exposure.Claim)
    }
    
    // 'visible' attribute on DateInput (id=ReOpenDate) at ExposureDetailDV.Generaldamage.pcf: line 49, column 50
    function visible_30 () : java.lang.Boolean {
      return  Exposure.ReOpenDate != null 
    }
    
    // 'visible' attribute on DateInput (id=ClosedDate) at ExposureDetailDV.Generaldamage.pcf: line 27, column 50
    function visible_6 () : java.lang.Boolean {
      return  Exposure.State == TC_CLOSED 
    }
    
    // 'visible' attribute on TextInput (id=StatLine_Warning) at ExposureDetailDV.Generaldamage.pcf: line 98, column 65
    function visible_95 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodeListCapped
    }
    
    // 'visible' attribute on InputSet at ExposureDetailDV.Generaldamage.pcf: line 84, column 59
    function visible_99 () : java.lang.Boolean {
      return Exposure.Claim.Policy.StatCodingEnabled
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
    property get ContactProhibited() : boolean {
        return Exposure.Claim.getClaimContact(Exposure.Claimant).ContactProhibited
    }
    
    property set ContactProhibited(prohibited : boolean) {
      var claimContact = Exposure.Claim.getClaimContact(Exposure.Claimant)
      if (claimContact != null) claimContact.ContactProhibited = prohibited
    }
          
        
    
    
  }
  
  
}