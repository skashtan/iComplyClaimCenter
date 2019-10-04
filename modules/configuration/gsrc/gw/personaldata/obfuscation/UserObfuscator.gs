package gw.personaldata.obfuscation

uses gw.api.archiving.ArchiveDocumentReferencesUtil
uses gw.api.personaldata.DatabaseReferenceTrackerUtility

@Export
class UserObfuscator extends UserDefaultObfuscator {

  construct(bean: User) {
    super(bean)
  }

  override function beforeObfuscate() {
    super.beforeObfuscate()
    var user = getOwner() as User

    if (isOnlySingleOwner(user.AuthorityProfile)) {
      user.AuthorityProfile.remove()
      addCallback(new RemoveRetireableTransactionCallback({user.AuthorityProfile}))
    }
  }
}