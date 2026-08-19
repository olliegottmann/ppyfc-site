import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ppyfc-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(localStorage.getItem(STORAGE_KEY) !== 'accepted')
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 text-left">
          <h3 className="mb-1 font-bold text-gray-900">COOKIES</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            We use cookies to improve your browsing experience and help us improve ppyfc.com. By
            using our website you agree to use of cookies as described in our Cookie Policy
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, 'accepted')
              setVisible(false)
            }}
            className="rounded bg-ghanafc-primary px-6 py-2 font-medium text-white transition-colors hover:bg-ghanafc-secondary"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
