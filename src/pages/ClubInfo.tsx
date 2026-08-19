import { useState } from 'react'
import { alumni, history, impactAreas, management, ownership } from '../data/content'

function Accordion({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg border border-gray-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-t-lg bg-gray-50 px-4 py-3 text-left text-sm font-semibold hover:bg-gray-100 sm:px-6 sm:py-4 sm:text-lg"
      >
        {title}
        <span className="text-xl sm:text-2xl">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="space-y-4 px-4 py-4 text-sm text-gray-700 sm:px-6 sm:text-base">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      )}
    </div>
  )
}

function BioCard({
  name,
  role,
  image,
  bio,
}: {
  name: string
  role: string
  image: string
  bio: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-lg bg-white p-4 text-center shadow-md sm:p-6">
      <img
        src={encodeURI(image)}
        alt={name}
        loading="lazy"
        className="mx-auto mb-3 h-24 w-24 rounded-lg object-cover object-top sm:mb-4 sm:h-32 sm:w-32"
      />
      <h4 className="text-lg font-bold sm:text-xl">{name}</h4>
      <p className="mb-3 text-sm text-ghanafc-secondary sm:text-base">{role}</p>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="mb-3 text-sm font-medium text-ghanafc-primary hover:underline sm:text-base"
      >
        {open ? 'Hide Biography' : 'View Biography'}
      </button>
      {open && <p className="text-left text-sm leading-relaxed text-gray-600">{bio}</p>}
    </div>
  )
}

export default function ClubInfo() {
  return (
    <section className="bg-white py-6 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center sm:mb-12">
          <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
            Club Information
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            Learn about Prampram Youth Football Club, our grassroots origins, youth development
            mission, and role in Ghanaian football.
          </p>
        </div>

        <div id="history" className="mb-8 sm:mb-16">
          <h3 className="mb-4 text-xl font-bold text-ghanafc-primary sm:mb-6 sm:text-2xl">
            Club History &amp; Development
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {history.map((h) => (
              <Accordion key={h.title} title={h.title} paragraphs={h.paragraphs} />
            ))}
          </div>
        </div>

        <div className="mb-8 sm:mb-16">
          <h3 className="mb-4 text-xl font-bold text-ghanafc-primary sm:mb-6 sm:text-2xl">
            Notable Alumni
          </h3>
          <div className="rounded-lg bg-gray-50 p-4 sm:p-6">
            <p className="mb-4 text-sm text-gray-700 sm:text-base">
              Prampram Youth FC has successfully developed players who have moved on to higher-level
              academies and professional clubs, demonstrating the effectiveness of our youth
              development programs.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {alumni.map((a) => (
                <div key={a.name} className="rounded-lg bg-white p-3 shadow-sm sm:p-4">
                  <h4 className="text-base font-bold sm:text-lg">{a.name}</h4>
                  <p className="text-sm text-ghanafc-secondary">{a.position}</p>
                  <p className="mt-2 text-xs text-gray-600 sm:text-sm">{a.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="management-team" className="mb-8 sm:mb-16">
          <h3 className="mb-4 text-xl font-bold text-ghanafc-primary sm:mb-6 sm:text-2xl">
            Management Team
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {management.map((m) => (
              <BioCard key={m.name} {...m} />
            ))}
          </div>
        </div>

        <div id="ownership" className="mb-8 sm:mb-16">
          <h3 className="mb-4 text-xl font-bold text-ghanafc-primary sm:mb-6 sm:text-2xl">
            Ownership &amp; Organization
          </h3>
          <div className="rounded-lg bg-gray-50 p-4 text-sm shadow-md sm:p-6 sm:text-base lg:p-8">
            {ownership.map((p, i) => (
              <p key={p.slice(0, 40)} className={i < ownership.length - 1 ? 'mb-4 text-gray-700' : 'text-gray-700'}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div id="csr">
          <h3 className="mb-4 text-xl font-bold text-ghanafc-primary sm:mb-6 sm:text-2xl">
            Community Impact &amp; Social Responsibility
          </h3>
          <div className="rounded-lg bg-gray-50 p-4 shadow-md sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-2">
              <div className="text-sm sm:text-base">
                <p className="mb-4 text-gray-700">
                  Prampram Youth FC&rsquo;s primary social impact lies in its commitment to youth
                  development and community football accessibility. The club serves as a vital
                  pathway for young talent in the Ningo-Prampram District, providing opportunities
                  that might otherwise be unavailable.
                </p>
                <h4 className="mb-2 text-lg font-bold">Our Key Impact Areas:</h4>
                <ul className="mb-4 list-disc space-y-2 pl-5 text-gray-700">
                  {impactAreas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <p className="text-gray-700">
                  The club&rsquo;s location near the Ghanaman Soccer Centre of Excellence allows it
                  to benefit from and contribute to the national football development
                  infrastructure, creating a positive cycle of growth and opportunity.
                </p>
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/community-impact.jpg"
                  alt="Prampram Youth FC community impact"
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
