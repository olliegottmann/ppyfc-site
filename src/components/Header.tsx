import { useState } from 'react'
import { Link } from 'react-router-dom'
import { club } from '../data/content'

type NavChild = { label: string; to: string }

const myClubLinks: NavChild[] = [
  { label: 'Donations', to: '/my-prampram-youth-fc#donations' },
  { label: 'Sponsorship Opportunities', to: '/my-prampram-youth-fc#sponsorship-opportunities' },
  { label: 'Sponsor a Player', to: '/sponsor-a-player' },
]

const clubInfoLinks: NavChild[] = [
  { label: 'History', to: '/club-info#history' },
  { label: 'Management Team', to: '/club-info#management-team' },
  { label: 'Ownership', to: '/club-info#ownership' },
  { label: 'CSR / Social Impact', to: '/club-info#csr' },
]

function Dropdown({ label, to, children }: { label: string; to: string; children: NavChild[] }) {
  return (
    <div className="group relative">
      <Link to={to} className="nav-link">
        {label}
      </Link>
      <div className="dropdown-menu">
        {children.map((c) => (
          <Link key={c.label} to={c.to} className="block rounded px-4 py-2 hover:bg-ghanafc-light">
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)

  return (
    <header className="bg-white shadow-md">
      <div className="bg-ghanafc-primary py-2 text-center text-sm text-white">
        <div className="container mx-auto">
          <p className="font-medium">Support Prampram Youth FC - Join Our Community</p>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex-shrink-0">
          <Link to="/" className="block">
            <img src="/prampramfc-logo.png" alt="Prampram Youth FC" className="h-14 w-auto" />
          </Link>
        </div>

        <nav className="hidden items-center space-x-1 lg:flex">
          <Dropdown label="My Prampram Youth FC" to="/my-prampram-youth-fc">
            {myClubLinks}
          </Dropdown>
          <Dropdown label="Club Info" to="/club-info">
            {clubInfoLinks}
          </Dropdown>
          <Link to="/coaching-staff" className="nav-link">
            Technical Staff
          </Link>
          <Link to="/photos" className="nav-link">
            Photos
          </Link>
          <Link to="/partners" className="nav-link">
            Partners
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-full p-2 hover:bg-ghanafc-light lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a
            href={club.staffPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-gray-600 hover:text-ghanafc-primary lg:block"
          >
            Staff Login
          </a>
          <Link to="/sponsor-a-player" className="btn-primary hidden md:block">
            Sponsor a Player
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 overflow-y-auto bg-white transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="mb-6 flex items-center justify-between">
            <Link to="/" className="block" onClick={close}>
              <img src="/prampramfc-logo.png" alt="Prampram Youth FC" className="h-10 w-auto" />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="rounded-full p-2 hover:bg-ghanafc-light"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-6">
            <div>
              <h3 className="mb-2 font-bold text-ghanafc-primary">My Prampram Youth FC</h3>
              <div className="space-y-2 pl-2">
                {myClubLinks.map((l) => (
                  <Link key={l.label} to={l.to} className="block py-2" onClick={close}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-bold text-ghanafc-primary">Club Info</h3>
              <div className="space-y-2 pl-2">
                {clubInfoLinks.map((l) => (
                  <Link key={l.label} to={l.to} className="block py-2" onClick={close}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Link to="/coaching-staff" className="block py-2 font-bold" onClick={close}>
                Technical Staff
              </Link>
              <Link to="/photos" className="block py-2 font-bold" onClick={close}>
                Photos
              </Link>
              <Link to="/partners" className="block py-2 font-bold" onClick={close}>
                Partners
              </Link>
            </div>
            <div>
              <a
                href={club.staffPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-gray-600"
                onClick={close}
              >
                Staff Login
              </a>
            </div>
            <div>
              <Link
                to="/sponsor-a-player"
                className="btn-primary block text-center"
                onClick={close}
              >
                Sponsor a Player
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
