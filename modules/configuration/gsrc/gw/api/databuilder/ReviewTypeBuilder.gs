package gw.api.databuilder

@Export
class ReviewTypeBuilder extends CCDataBuilder<ReviewType, ReviewTypeBuilder> {
  construct()
  {
    super( entity.ReviewType );
  }

  public function withContactSubtype(contactSubtype : typekey.Contact) : ReviewTypeBuilder {
    set(ReviewType#ContactSubtype, contactSubtype)
    return this
  }

  public function withDescription(description : String) : ReviewTypeBuilder {
    set(ReviewType#Description, description)
    return this
  }

  public function withName(name : String) : ReviewTypeBuilder {
    set(ReviewType#Name, name)
    return this
  }

  public function withDescriptionByDisplayKey(displayKey : String) : ReviewTypeBuilder {
    setLocalizedFieldFromDisplayKey(ReviewType#Description.PropertyInfo, displayKey)
    return this
  }

  public function withLocalizedDescription(languageCode : LanguageType, des : String): ReviewTypeBuilder {
    withLocalizedProperty(ReviewType#Description.PropertyInfo, languageCode, des)
    return this
  }

  public function withNameByDisplayKey(displayKey : String) : ReviewTypeBuilder {
    setLocalizedFieldFromDisplayKey(ReviewType#Name.PropertyInfo, displayKey)
    return this
  }

  public function withLocalizedName(languageCode : LanguageType, name : String): ReviewTypeBuilder {
    withLocalizedProperty(ReviewType#Name.PropertyInfo, languageCode, name)
    return this
  }
}
