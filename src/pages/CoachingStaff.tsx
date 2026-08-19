import { useState } from 'react'
import { coaches } from '../data/content'

const PREVIEW_LENGTH = 180

function CoachCard({
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
  const [expanded, setExpanded] = useState(false)
  const needsToggle = bio.length > PREVIEW_LENGTH

  return (
    <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-3 shadow-md sm:p-4">
      <div className="flex items-start space-x-3 sm:space-x-4">
        <img
          src={encodeURI(image)}
          alt={name}
          loading="lazy"
          className="h-20 w-16 flex-shrink-0 rounded-md object-cover object-top shadow-sm sm:h-24 sm:w-20"
        />
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-sm font-bold text-ghanafc-primary sm:text-base">{name}</h3>
          <p className="mb-2 text-xs font-medium text-ghanafc-secondary">{role}</p>
          <div className="text-xs leading-relaxed text-gray-600">
            <p>
              {expanded || !needsToggle ? bio : `${bio.slice(0, PREVIEW_LENGTH).trimEnd()}...`}
            </p>
            {needsToggle && (
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
                className="mt-1 text-xs font-medium text-ghanafc-primary underline hover:text-ghanafc-secondary"
              >
                {expanded ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CoachingStaff() {
  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="mb-6 text-center">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">Coaching Staff</h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-600">
            Meet the dedicated professionals who lead our team to success both on and off the pitch.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {coaches.map((c) => (
            <CoachCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
