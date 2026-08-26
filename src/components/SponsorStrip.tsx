import { sponsors } from '../data/content'

/**
 * Sponsor logos across the top of the landing page, under the menu.
 * Each logo links out to the sponsor's own site.
 */
export default function SponsorStrip() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-6">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-gray-500">
          Our Sponsors
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {sponsors.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`${s.name} - ${s.tagline}`}
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <img
                src={s.logo}
                alt={`${s.name} logo`}
                className="h-12 w-auto max-w-[180px] object-contain sm:h-14"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
