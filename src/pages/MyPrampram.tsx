import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { comingFeatures, earlyAccessPerks } from '../data/content'
import NewsletterForm from '../components/NewsletterForm'
import { SPONSORSHIP } from '../data/players'

/**
 * Target for the "Countdown to next Season" clock. The original site had this
 * baked into the bundle with no way to edit it - change the date here.
 */
const NEXT_SEASON_START = new Date('2026-11-21T12:00:00Z')

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const ms = Math.max(0, target.getTime() - now)
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  }
}

export default function MyPrampram() {
  const { days, hours, minutes, seconds } = useCountdown(NEXT_SEASON_START)

  const units = [
    { value: days, label: 'DAYS' },
    { value: hours, label: 'HOURS' },
    { value: minutes, label: 'MINUTES' },
    { value: seconds, label: 'SECONDS' },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ghanafc-primary via-red-800 to-ghanafc-secondary py-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full border-4 border-ghanafc-accent" />
        <div className="absolute right-20 top-32 h-24 w-24 rounded-full border-4 border-yellow-300" />
        <div className="absolute bottom-20 left-32 h-40 w-40 rounded-full border-4 border-green-400" />
        <div className="absolute bottom-10 right-10 h-28 w-28 rounded-full border-4 border-ghanafc-accent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center text-white">
          <div className="mb-12">
            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
              <span className="text-ghanafc-accent">MY PRAMPRAM</span>
              <br />
              <span className="text-ghanafc-accent">YOUTH FC</span>
            </h1>
            <p className="mb-4 text-xl font-light md:text-2xl">
              Your Personal Gateway to Supporting African Football Dreams
            </p>
            <div className="mx-auto h-1 w-24 bg-ghanafc-accent" />
          </div>

          <div className="mb-12">
            <div className="inline-block rotate-3 rounded-full bg-ghanafc-accent px-8 py-4 text-2xl font-bold text-black shadow-lg transition-transform hover:rotate-0">
              🚀 COMING SOON 🚀
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-yellow-300">Countdown to next Season!</h3>
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
              {units.map((u) => (
                <div key={u.label} className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-black text-yellow-300 md:text-4xl">{u.value}</div>
                  <div className="text-sm font-medium text-yellow-200">{u.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-8 text-3xl font-bold text-green-300">What&rsquo;s Coming Your Way</h3>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
              {comingFeatures.map((f) => (
                <div
                  key={f.title}
                  id={f.id}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <div className="mb-4 text-4xl">{f.icon}</div>
                  <h4 className={`mb-3 text-xl font-bold ${f.accent}`}>{f.title}</h4>
                  <p className="text-sm opacity-90">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-yellow-300">
              Be Among the First to Experience
            </h3>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 text-left md:grid-cols-2">
              {earlyAccessPerks.map((p) => (
                <div key={p} className="flex items-center space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ghanafc-accent">
                    <svg
                      className="h-4 w-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-bold text-green-300">Back a player this season</h3>
            <p className="mb-6 opacity-90">
              While we&rsquo;re building your personalized experience, you can still make a
              difference today. {SPONSORSHIP.symbol}
              {SPONSORSHIP.monthly} a month backs one young footballer through the{' '}
              {SPONSORSHIP.season} season.
            </p>
            <Link
              to="/sponsor-a-player"
              className="inline-block rounded-lg bg-ghanafc-accent px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-yellow-300"
            >
              Sponsor a Player
            </Link>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-md text-white">
              <NewsletterForm
                heading="Get Notified When We Launch"
                headingClass="text-yellow-300"
                blurbClass="text-white/80"
                inputClass="bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-ghanafc-accent"
                buttonClass="bg-ghanafc-accent text-black hover:bg-yellow-300"
                buttonLabel="Notify Me"
                noteClass="text-white/60"
              />
            </div>
            <p className="mt-2 text-center text-xs opacity-75">
              Be the first to access exclusive features and early supporter benefits
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
