// How sponsorship money is collected.
//
// IMPORTANT: this must be the CLUB's / charity's account, not a personal one.
// The club operates under the registered charity KRA Football Academy
// (NPOS/GR01/LN02499/25). Charity income paid into an individual's personal
// account is a governance problem at audit, however honestly it is handled.

export const payment = {
  /**
   * Turn the QR panel on once the link and image below are real.
   * While false, the page falls back to arranging sponsorship by email.
   */
  enabled: false,

  /**
   * Revolut payment link, e.g. https://revolut.me/<handle>
   * Replace the placeholder before enabling.
   */
  link: 'https://revolut.me/REPLACE-ME',

  /**
   * QR code image. Export it from Revolut and save it to
   * public/revolut-qr.png (a PNG around 600x600 is plenty).
   */
  qrImage: '/revolut-qr.png',

  /** Shown so the club can match a payment to a player. */
  referenceHint: 'Put the player number in the payment reference, e.g. "PLAYER 9".',

  /** One-off equivalent of 12 monthly payments, for sponsors who prefer to pay once. */
  seasonTotal: 60,
}
