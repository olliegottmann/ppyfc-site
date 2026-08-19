import { club } from '../data/content'
import { payment } from '../data/payment'
import { SPONSORSHIP } from '../data/players'

/**
 * How a sponsor actually pays.
 *
 * A Revolut link takes one-off payments; it does not set up a £5 monthly
 * subscription on its own. So we ask for a standing order for the monthly
 * option, and offer a single season payment for people who would rather pay
 * once and be done.
 */
export default function SponsorPayment() {
  if (!payment.enabled) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
        <p>
          Recurring online payments are not connected yet. Choosing a player opens an email to{' '}
          {club.email} and the club will arrange your monthly sponsorship directly.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-ghanafc-primary">How to pay</h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[auto,1fr] md:items-start">
        <div className="mx-auto">
          <img
            src={payment.qrImage}
            alt={`Scan to pay Prampram Youth FC ${SPONSORSHIP.symbol}${SPONSORSHIP.monthly}`}
            className="h-48 w-48 rounded-lg border border-gray-200 object-contain p-2"
          />
          <a
            href={payment.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-lg bg-ghanafc-primary px-4 py-2 text-center text-sm font-semibold text-white hover:bg-red-800"
          >
            Open payment link
          </a>
        </div>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h4 className="mb-1 font-bold text-ghanafc-dark">
              {SPONSORSHIP.symbol}
              {SPONSORSHIP.monthly} a month
            </h4>
            <p>
              Set up a standing order for {SPONSORSHIP.symbol}
              {SPONSORSHIP.monthly} a month to the account shown when you scan. A scan on its own
              sends a single payment, so please set it to repeat monthly for the{' '}
              {SPONSORSHIP.season} season.
            </p>
          </div>

          <div>
            <h4 className="mb-1 font-bold text-ghanafc-dark">
              Or {SPONSORSHIP.symbol}
              {payment.seasonTotal} for the whole season
            </h4>
            <p>
              One payment covering all twelve months, if you would rather not set up a standing
              order.
            </p>
          </div>

          <div className="rounded bg-ghanafc-light p-3">
            <strong className="text-ghanafc-dark">{payment.referenceHint}</strong> Then email{' '}
            <a href={`mailto:${club.email}`} className="text-ghanafc-primary underline">
              {club.email}
            </a>{' '}
            so we know who to thank and can confirm your player.
          </div>
        </div>
      </div>
    </div>
  )
}
