import { useState } from 'react'

type Props = {
  name: string
  logo: string
  url: string
  tagline: string
  blurb: string
}

export default function SponsorCard({ name, logo, url, tagline, blurb }: Props) {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 flex h-24 items-center justify-center rounded-lg bg-white px-4">
        {logoFailed ? (
          <span className="text-2xl font-bold text-ghanafc-dark">{name}</span>
        ) : (
          <img
            src={logo}
            alt={`${name} logo`}
            onError={() => setLogoFailed(true)}
            className="max-h-20 w-auto max-w-full object-contain"
          />
        )}
      </div>

      <h3 className="text-xl font-bold text-ghanafc-dark">{name}</h3>
      <p className="mb-3 text-sm font-medium text-ghanafc-secondary">{tagline}</p>
      <p className="mb-5 text-sm leading-relaxed text-gray-700">{blurb}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-sm font-semibold text-ghanafc-primary hover:underline"
      >
        Visit {name} &rarr;
      </a>
    </div>
  )
}
