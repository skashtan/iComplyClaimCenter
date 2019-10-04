package gw.api.databuilder

@Export
enhancement CredentialBuilderEnhancement: CredentialBuilder {

  public function withFailedAttempts(failedAttempts: int) : CredentialBuilder{
      this.set(Credential.Type.TypeInfo.getProperty("FailedAttempts"), failedAttempts)
      return this
  }
}
