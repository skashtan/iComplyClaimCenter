package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/acc/mir/MirAdditionalContactLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MirAdditionalContactLVExpressions {
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirAdditionalContactLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MirAdditionalContactLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=Name) at MirAdditionalContactLV.pcf: line 60, column 39
    function valueRoot_13 () : java.lang.Object {
      return ClaimContact
    }
    
    // 'value' attribute on TextCell (id=Name) at MirAdditionalContactLV.pcf: line 60, column 39
    function value_11 () : entity.Contact {
      return ClaimContact.Contact
    }
    
    // 'value' attribute on TextCell (id=Roles) at MirAdditionalContactLV.pcf: line 66, column 45
    function value_14 () : java.lang.String {
      return ClaimContact.RolesString
    }
    
    property get ClaimContact () : entity.ClaimContact {
      return getIteratedValue(1) as entity.ClaimContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/acc/mir/MirAdditionalContactLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MirAdditionalContactLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirAdditionalContactLV.pcf: line 43, column 71
    function filter_3 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return gw.api.util.CoreFilters.ALL
    }
    
    // 'filter' attribute on ToolbarFilterOption at MirAdditionalContactLV.pcf: line 48, column 78
    function filter_5 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter {
      return FilterSet.Separator
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MirAdditionalContactLV.pcf: line 36, column 62
    function filters_2 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter[] {
      return FilterSet.ExposureFilters.FilterOptions
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MirAdditionalContactLV.pcf: line 45, column 73
    function filters_4 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter[] {
      return FilterSet.ContactRoleCategoryFilters.FilterOptions
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MirAdditionalContactLV.pcf: line 50, column 48
    function filters_6 () : com.guidewire.pl.system.filters.BeanBasedQueryFilter[] {
      return rolesFilter.FilterOptions
    }
    
    // 'initialValue' attribute on Variable at MirAdditionalContactLV.pcf: line 18, column 62
    function initialValue_0 () : gw.api.claimparties.ClaimPartiesToolbarFilters {
      return new gw.api.claimparties.ClaimPartiesToolbarFilters(claim)
    }
    
    // 'initialValue' attribute on Variable at MirAdditionalContactLV.pcf: line 23, column 62
    function initialValue_1 () : gw.api.filters.ClaimPartiesRolesToolbarFilters {
      return new gw.api.filters.ClaimPartiesRolesToolbarFilters(claim)
    }
    
    // 'sortBy' attribute on RowIterator at MirAdditionalContactLV.pcf: line 60, column 39
    function sortValue_10 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.QuaternarySortValue
    }
    
    // 'sortBy' attribute on RowIterator at MirAdditionalContactLV.pcf: line 60, column 39
    function sortValue_7 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.PrimarySortValue
    }
    
    // 'sortBy' attribute on RowIterator at MirAdditionalContactLV.pcf: line 60, column 39
    function sortValue_8 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.SecondarySortValue
    }
    
    // 'sortBy' attribute on RowIterator at MirAdditionalContactLV.pcf: line 60, column 39
    function sortValue_9 (ClaimContact :  entity.ClaimContact) : java.lang.Object {
      return ClaimContact.Contact.TertiarySortValue
    }
    
    // 'value' attribute on RowIterator at MirAdditionalContactLV.pcf: line 30, column 41
    function value_17 () : entity.ClaimContact[] {
      return claim.getContactsWithPreload()
    }
    
    property get FilterSet () : gw.api.claimparties.ClaimPartiesToolbarFilters {
      return getVariableValue("FilterSet", 0) as gw.api.claimparties.ClaimPartiesToolbarFilters
    }
    
    property set FilterSet ($arg :  gw.api.claimparties.ClaimPartiesToolbarFilters) {
      setVariableValue("FilterSet", 0, $arg)
    }
    
    property get claim () : Claim {
      return getRequireValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setRequireValue("claim", 0, $arg)
    }
    
    property get rolesFilter () : gw.api.filters.ClaimPartiesRolesToolbarFilters {
      return getVariableValue("rolesFilter", 0) as gw.api.filters.ClaimPartiesRolesToolbarFilters
    }
    
    property set rolesFilter ($arg :  gw.api.filters.ClaimPartiesRolesToolbarFilters) {
      setVariableValue("rolesFilter", 0, $arg)
    }
    
    
  }
  
  
}