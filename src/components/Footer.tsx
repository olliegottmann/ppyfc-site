import { Link } from 'react-router-dom'
import { club } from '../data/content'
import NewsletterForm from './NewsletterForm'

const quickLinks = [
  { label: 'My Prampram Youth FC', to: '/my-prampram-youth-fc' },
  { label: 'Club Info', to: '/club-info' },
  { label: 'Coaching Staff', to: '/coaching-staff' },
  { label: 'Photos', to: '/photos' },
  { label: 'Partners', to: '/partners' },
]

const clubInfoLinks = [
  { label: 'History', to: '/club-info#history' },
  { label: 'Management Team', to: '/club-info#management-team' },
  { label: 'Ownership', to: '/club-info#ownership' },
  { label: 'CSR / Social Impact', to: '/club-info#csr' },
  { label: 'Regional Partners', to: '/partners' },
  { label: 'Contact Us', to: '/my-prampram-youth-fc' },
]

const supportLinks = [
  { label: 'Donations', to: '/my-prampram-youth-fc#donations' },
  { label: 'Sponsorship Opportunities', to: '/my-prampram-youth-fc#sponsorship-opportunities' },
  { label: 'Sponsor a Player', to: '/sponsor-a-player' },
]

export default function Footer() {
  return (
    <footer className="bg-ghanafc-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-ghanafc-accent">Prampram Youth FC</h3>
            <div className="mb-6">
              <img
                src="/prampramfc-logo.png"
                alt="Prampram Youth FC"
                className="mb-4 h-12 w-auto"
              />
              <p className="text-sm leading-relaxed text-gray-300">{club.blurb}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-ghanafc-accent">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-gray-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-ghanafc-accent">Club Information</h3>
            <ul className="space-y-2">
              {clubInfoLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-gray-300 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-ghanafc-accent">
              Support Prampram Youth FC
            </h3>
            <p className="mb-4 text-sm text-gray-300">
              Join our community and help support youth football development in Prampram.
            </p>
            <div className="space-y-3">
              {supportLinks.map((l) => (
                <Link key={l.label} to={l.to} className="block text-gray-300 hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-white">
              <NewsletterForm
                heading="Stay Updated with Our Newsletter"
                inputClass="bg-white/10 border-white/20 text-white placeholder-gray-300"
                buttonClass="bg-white text-ghanafc-primary hover:bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-ghanafc-primary">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between text-sm text-gray-400 md:flex-row">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Prampram Youth FC. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href={`mailto:${club.email}`} className="hover:text-white">
                {club.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
