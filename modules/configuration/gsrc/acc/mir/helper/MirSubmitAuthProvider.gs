package acc.mir.helper

uses javax.xml.namespace.QName

uses gw.util.PropertiesFileAccess
uses gw.xml.XmlElement
uses gw.xml.ws.WsdlConfig
uses gw.xml.ws.IWsiWebserviceConfigurationProvider

class MirSubmitAuthProvider implements IWsiWebserviceConfigurationProvider {
    override function configure(serviceName : QName, portName : QName, config : WsdlConfig) {
      var props = PropertiesFileAccess.getProperties("acc/mir/clientimplementation/account.properties")
      var securityElement = new XmlElement(new QName("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "Security", "wsse"))
      var usernameTokenElement = new XmlElement(new QName("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "UsernameToken", "wsse"))
      usernameTokenElement.setAttributeValue(new QName("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd", "Id", "wsu"), " ")
      securityElement.addChild(usernameTokenElement)
      var username = new XmlElement(new QName("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "Username", "wsse"))
      username.set$Text(props.getProperty("MIR.USERNAME"))
      var password = new XmlElement(new QName("http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd", "Password", "wsse"))
      password.setAttributeValue("Type", "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText")
      password.set$Text(props.getProperty("MIR.PASSWORD"))

      usernameTokenElement.addChild(username)
      usernameTokenElement.addChild(password)

      config.RequestSoapHeaders.add(securityElement)
    }
 }