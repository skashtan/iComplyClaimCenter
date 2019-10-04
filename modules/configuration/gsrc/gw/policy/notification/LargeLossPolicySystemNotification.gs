package gw.policy.notification
uses gw.plugin.policy.IPolicySystemNotificationPlugin
uses gw.api.util.CurrencyUtil
uses gw.api.financials.FinancialsCalculations

/**
 * Policy system notification for large losses. This notification fires if the
 * the gross total incurred on a claim rises above a configurable threshold.
 * <p>
 * This is a singleton strategy object; the rest of the policy notification
 * framework calls this singleton at stages during the delivery of a large loss
 * notification to the policy system.
 */
@Export
class LargeLossPolicySystemNotification extends PolicySystemNotificationBase {

  /** The event name for this notification */
  public static final var EVENT_NAME : String = "ClaimExceedsLargeLoss"
  
  /** Singleton instance of this notification strategy */
  public static final var INSTANCE : LargeLossPolicySystemNotification = new LargeLossPolicySystemNotification()

  private construct() {
    super(EVENT_NAME)
  }

  override function createMessage(context : MessageContext) {
    var claim = context.Root as Claim
    var totalIncurredGrossAmount = FinancialsCalculations.getTotalIncurredGross().withClaim(claim).Amount

    // Earlier versions used to create the message using "CurrencyUtil.renderAsCurrency(CurrencyAmount)", which used to
    // be in the format "$100". However, this had to be abandoned since this string format cannot be converted back to a
    // CurrencyAmount (if a plugin implementation had the need to do so). The only type of string format that can safely
    // be converted back to CurrencyAmount is of the type "100 USD", which is the one generated by
    // "CurrencyAmount.toString()". Hence, we now are having the message payload in this more compatible format instead.
    var msg = context.createMessage(totalIncurredGrossAmount.toString())
    msg.MessageRoot = claim
    claim.LargeLossNotificationStatus = TC_INQUEUE
  }

  override function send(plugin : IPolicySystemNotificationPlugin, message : Message, transformedPayload : String) {
    var claim = message.Claim
    plugin.claimExceedsLargeLossThreshold(claim.LossDate, claim.Policy.PolicyNumber, transformedPayload,
            message.PublicID)
  }

  override function afterSend(message : Message, status : MessageStatus) {
    if (status == GOOD) {
      message.Claim.LargeLossNotificationStatus = TC_SENT
    } else if (status == NON_RETRYABLE_ERROR){
      message.Claim.LargeLossNotificationStatus = TC_NONE
    }
  }
  
  override property get MessageResyncBehavior() : MessageResyncBehavior {
    return COPY_LAST
  }
}
