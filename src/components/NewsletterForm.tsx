import { useState, type FormEvent } from 'react'
import { club } from '../data/content'

type Props = {
  heading: string
  headingClass?: string
  blurbClass?: string
  inputClass?: string
  buttonClass?: string
  buttonLabel?: string
  noteClass?: string
}

/**
 * Newsletter signup.
 *
 * The original site rendered this form but never sent the address anywhere, so
 * every signup was silently discarded. Until a real provider is connected
 * (Mailchimp, Buttondown, a Supabase table, ...) this hands the address to the
 * club's inbox via the visitor's mail client, so interest actually arrives
 * somewhere a human reads.
 */
export default function NewsletterForm({
  heading,
  headingClass = 'text-white',
  blurbClass = 'text-gray-300',
  inputClass = '',
  buttonClass = '',
  buttonLabel = 'Subscribe to Newsletter',
  noteClass = 'text-gray-400',
}: Props) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    const subject = encodeURIComponent('Newsletter signup')
    const body = encodeURIComponent(`Please add ${email} to the Prampram Youth FC newsletter.`)
    window.location.href = `mailto:${club.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="mb-4">
        <h3 className={`mb-2 text-lg font-semibold ${headingClass}`}>Thanks for signing up</h3>
        <p className={`text-sm ${blurbClass}`}>
          Your mail app should have opened with a message to {club.email}. Send it and we will add
          you to the list.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4">
        <h3 className={`mb-2 text-lg font-semibold ${headingClass}`}>{heading}</h3>
        <p className={`text-sm ${blurbClass}`}>
          Get the latest match results, player updates, and exclusive club news delivered straight
          to your inbox.
        </p>
      </div>
      <form className="space-y-3" onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            aria-label="Email address"
            className={`w-full rounded-lg border px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-ghanafc-primary ${inputClass}`}
          />
        </div>
        <button
          type="submit"
          className={`w-full rounded-lg px-4 py-3 font-bold transition-colors ${buttonClass}`}
        >
          {buttonLabel}
        </button>
      </form>
      <p className={`mt-2 text-xs ${noteClass}`}>
        By subscribing, you agree to receive marketing emails from Prampram Youth FC. You can
        unsubscribe at any time.
      </p>
    </div>
  )
}
