import { Link } from 'react-router-dom'
import { club } from '../data/content'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative flex h-screen items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/homepage.jpg)' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            From Humble Beginnings,
            <br />
            <span className="text-yellow-400">African Dreams Take Flight</span>
          </h1>
          <p className="mb-8 text-xl font-light md:text-2xl">
            Prampram Youth FC
            <br />
            Where passion meets purpose, and dreams become destiny
          </p>
          <Link
            to="/club-info"
            className="inline-block rounded-lg bg-yellow-400 px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-yellow-300"
          >
            Join Our Journey
          </Link>
        </div>
      </section>

      <section className="bg-red-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Reality</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xl leading-relaxed md:text-2xl">
              We train on dusty fields with worn equipment, but our hearts beat with the rhythm of
              champions.
            </p>
            <p className="text-lg opacity-90">
              Every morning, our young players gather on the red earth of Prampram, carrying dreams
              bigger than their circumstances. With makeshift goalposts and patched footballs, they
              practise with the dedication of professionals, knowing that talent doesn&rsquo;t
              require wealth&mdash;only opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Vision</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xl leading-relaxed md:text-2xl">
              To prove that greatness is born from unwavering belief and community spirit.
            </p>
            <p className="text-lg opacity-90">
              We envision a future where Prampram Youth FC becomes a beacon of hope across
              Africa&mdash; showing that with determination, proper guidance, and community support,
              young talents from the humblest backgrounds can compete on the world stage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-600 py-20 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Our Need</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-xl leading-relaxed md:text-2xl">
              Every sponsor, every supporter, every shared story brings us closer to changing lives
              through football.
            </p>
            <p className="mb-8 text-lg">
              We need partners who see potential where others see problems. Your support
              doesn&rsquo;t just buy equipment&mdash;it buys hope, builds character, and creates
              pathways to success for young people who are determined to define their own future.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/sponsors"
                className="rounded-lg bg-black px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-gray-800"
              >
                Support Our Vision
              </Link>
              <Link
                to="/photos"
                className="rounded-lg border-2 border-black px-8 py-4 text-lg font-bold text-black transition-colors hover:bg-black hover:text-white"
              >
                See Our Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <Link to="/club-info" className="transition-colors hover:text-yellow-400">
              Our Story
            </Link>
            <Link to="/coaching-staff" className="transition-colors hover:text-yellow-400">
              Our Team
            </Link>
            <Link to="/photos" className="transition-colors hover:text-yellow-400">
              Our Photos
            </Link>
            <Link to="/sponsor-a-player" className="transition-colors hover:text-yellow-400">
              Sponsor a Player
            </Link>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>Prampram Youth FC - Dreams in Motion</p>
            <p>Contact: {club.email}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
