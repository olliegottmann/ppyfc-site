import { Link } from 'react-router-dom'
import { club, sponsors, sponsorshipTypes } from '../data/content'
import SponsorCard from '../components/SponsorCard'
import { SPONSORSHIP } from '../data/players'

export default function Sponsors() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Sponsors</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Prampram Youth FC is backed by businesses who believe that talent deserves an
            opportunity, wherever it is found.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-ghanafc-secondary">
            {SPONSORSHIP.season} Season Sponsors
          </h3>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((s) => (
              <SponsorCard key={s.name} {...s} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Our thanks to each of them for supporting the club this season.
          </p>
        </div>

        <div className="rounded-lg bg-gray-50 p-8 shadow-md lg:p-12">
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-ghanafc-primary md:text-3xl">
              Become a Sponsor
            </h3>
            <p className="mx-auto max-w-2xl text-gray-700">
              We are building relationships with businesses, educational institutions and community
              organisations to support our youth development programmes. Sponsorship packages range
              from kit and equipment through to season-long club partnerships.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 text-left md:grid-cols-2">
            {sponsorshipTypes.map((p) => (
              <div key={p.title} className="rounded-lg bg-white p-4 shadow-sm">
                <h4 className="mb-2 font-semibold text-ghanafc-secondary">{p.title}</h4>
                <p className="text-sm text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Sponsoring as an individual?{' '}
            <Link to="/sponsor-a-player" className="text-ghanafc-primary underline">
              Back a player for the season
            </Link>{' '}
            instead.
          </p>
        </div>

        <div className="mt-12 rounded-lg bg-ghanafc-primary p-8 text-center text-white shadow-md">
          <h3 className="mb-4 text-2xl font-bold">Interested in Sponsoring Us?</h3>
          <p className="mb-6 text-lg">
            We welcome sponsors who align with our mission of developing young talent and
            strengthening our community through football.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${club.sponsorshipEmail}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-ghanafc-primary transition-colors hover:bg-gray-100"
            >
              Contact Us About Sponsorship
            </a>
            <Link
              to="/club-info"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-ghanafc-primary"
            >
              Learn More About Our Club
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
