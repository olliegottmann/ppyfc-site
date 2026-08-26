import { useEffect, useState } from 'react'
import { heroImages } from '../data/content'

const INTERVAL_MS = 6000

/**
 * Cross-fading backdrop for the landing page hero. Holds still for anyone who
 * has asked their system for reduced motion.
 */
export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (heroImages.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % heroImages.length),
      INTERVAL_MS,
    )
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((src, i) => (
        <div
          key={src}
          aria-hidden="true"
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url("${src}")` }}
        />
      ))}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {heroImages.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photograph ${i + 1} of ${heroImages.length}`}
            aria-current={i === index}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
