import { Link } from 'react-router-dom'
import { club, partnershipTypes } from '../data/content'

export default function Partners() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Partners</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Prampram Youth FC is actively seeking partnerships with organisations that share our
            vision for youth development and community impact.
          </p>
        </div>

        <div className="py-16 text-center">
          <div className="mx-auto max-w-2xl rounded-lg bg-gray-50 p-12 shadow-md">
            <div className="mb-8">
              <svg
                className="mx-auto mb-6 h-24 w-24 text-ghanafc-primary"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-3xl font-bold text-ghanafc-primary">Coming Soon</h3>
            <p className="mb-6 text-lg text-gray-700">
              We are currently building partnerships with local businesses, educational
              institutions, and community organisations to support our youth development
              programmes.
            </p>
            <p className="mb-8 text-gray-600">
              Our partnership opportunities will include sponsorship packages, community outreach
              programmes, and collaborative initiatives that benefit both our club and the wider
              Prampram community.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-ghanafc-primary">
                Partnership Opportunities
              </h4>
              <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-2">
                {partnershipTypes.map((p) => (
                  <div key={p.title} className="rounded-lg bg-white p-4 shadow-sm">
                    <h5 className="mb-2 font-semibold text-ghanafc-secondary">{p.title}</h5>
                    <p className="text-sm text-gray-600">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-lg bg-ghanafc-primary p-8 text-center text-white shadow-md">
          <h3 className="mb-4 text-2xl font-bold">Interested in Partnering with Us?</h3>
          <p className="mb-6 text-lg">
            We welcome partnerships that align with our mission of developing young talent and
            strengthening our community through football.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${club.partnershipsEmail}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-ghanafc-primary transition-colors hover:bg-gray-100"
            >
              Contact Us About Partnerships
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
