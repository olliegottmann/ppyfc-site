import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Home from './pages/Home'
import MyPrampram from './pages/MyPrampram'
import ClubInfo from './pages/ClubInfo'
import CoachingStaff from './pages/CoachingStaff'
import Photos from './pages/Photos'
import Sponsors from './pages/Sponsors'
import SponsorAPlayer from './pages/SponsorAPlayer'
import NotFound from './pages/NotFound'

/**
 * The nav links into #history, #management-team and friends. React Router does not
 * scroll to a hash on its own, so do it here once the target has rendered.
 */
function ScrollToTarget() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTarget />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-prampram-youth-fc" element={<MyPrampram />} />
          <Route path="/club-info" element={<ClubInfo />} />
          <Route path="/coaching-staff" element={<CoachingStaff />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/sponsors" element={<Sponsors />} />
          {/* Old URL from the previous site - keep it working rather than 404 */}
          <Route path="/partners" element={<Navigate to="/sponsors" replace />} />
          <Route path="/sponsor-a-player" element={<SponsorAPlayer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
