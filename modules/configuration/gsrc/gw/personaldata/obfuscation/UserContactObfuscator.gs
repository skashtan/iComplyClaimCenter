package gw.personaldata.obfuscation

uses gw.api.archiving.ArchiveDocumentReferencesUtil
uses gw.api.personaldata.DatabaseReferenceTrackerUtility

@Export
class UserContactObfuscator extends UserContactDefaultObfuscator {

  private var _eftDataToDelete: Collection<EFTData> = {}


  construct(bean: UserContact) {
    super(bean)
  }

  override function beforeObfuscate() {
    super.beforeObfuscate()

    removeUnreferencedEFTRecords(_userContact.EFTRecords)
    addCallback(new RemoveRetireableTransactionCallback(_eftDataToDelete))
  }

  private function removeUnreferencedEFTRecords(eftRecords: EFTData[]): void {
    eftRecords.each(\ eftData -> {
      if (not DatabaseReferenceTrackerUtility.isReferencedFromDatabase(eftData)
          and not ArchiveDocumentReferencesUtil.isReferencedFromArchiveDocument(eftData)) {
        eftData.remove()
        _eftDataToDelete.add(eftData)
      }
    })
  }

}