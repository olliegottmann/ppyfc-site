import { Link } from 'react-router-dom'
import { club } from '../data/content'
import HeroSlideshow from '../components/HeroSlideshow'
import SponsorStrip from '../components/SponsorStrip'

export default function Home() {
  return (
    <div>
      <SponsorStrip />

      <section className="relative flex min-h-[80vh] items-center justify-center">
        <HeroSlideshow />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Prampram Youth FC</h1>
          <p className="mb-8 text-lg font-light md:text-xl">
            A grassroots club developing young footballers in Prampram, Greater Accra.
          </p>
          <Link
            to="/club-info"
            className="inline-block rounded-lg bg-ghanafc-primary px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-800"
          >
            About the Club
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-ghanafc-dark md:text-4xl">Our Reality</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-xl leading-relaxed text-ghanafc-dark">
              We train on dusty fields with worn equipment, but our hearts beat with the rhythm of
              champions.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Every morning, our young players gather on the red earth of Prampram, carrying dreams
              bigger than their circumstances. With makeshift goalposts and patched footballs, they
              practise with the dedication of professionals, knowing that talent doesn&rsquo;t
              require wealth&mdash;only opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-ghanafc-dark md:text-4xl">Our Vision</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-xl leading-relaxed text-ghanafc-dark">
              To prove that greatness is born from unwavering belief and community spirit.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We envision a future where Prampram Youth FC becomes a beacon of hope across
              Africa&mdash; showing that with determination, proper guidance, and community support,
              young talents from the humblest backgrounds can compete on the world stage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ghanafc-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Need</h2>
          <div className="mx-auto max-w-3xl">
            <p className="mb-6 text-xl leading-relaxed">
              Every sponsor, every supporter, every shared story brings us closer to changing lives
              through football.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-red-50">
              We need partners who see potential where others see problems. Your support
              doesn&rsquo;t just buy equipment&mdash;it buys hope, builds character, and creates
              pathways to success for young people who are determined to define their own future.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/sponsors"
                className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-ghanafc-primary transition-colors hover:bg-gray-100"
              >
                Support Our Vision
              </Link>
              <Link
                to="/photos"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-ghanafc-primary"
              >
                See Our Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <Link to="/club-info" className="text-ghanafc-dark transition-colors hover:text-ghanafc-primary">
              Our Story
            </Link>
            <Link to="/coaching-staff" className="text-ghanafc-dark transition-colors hover:text-ghanafc-primary">
              Our Team
            </Link>
            <Link to="/photos" className="text-ghanafc-dark transition-colors hover:text-ghanafc-primary">
              Our Photos
            </Link>
            <Link to="/sponsor-a-player" className="text-ghanafc-dark transition-colors hover:text-ghanafc-primary">
              Sponsor a Player
            </Link>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>Contact: {club.email}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
