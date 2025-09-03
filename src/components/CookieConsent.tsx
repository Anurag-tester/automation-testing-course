'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    
    // Enable Google Analytics and GTM after consent
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-700">
            <p className="font-medium mb-1">We use cookies to enhance your experience</p>
            <p className="text-xs text-gray-600">
              This website uses cookies for analytics and to improve user experience. 
              By continuing to use this site, you consent to our use of cookies.{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Learn more
              </Link>
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={declineCookies}
            className="text-xs px-3 py-1 h-8"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="text-xs px-3 py-1 h-8 bg-blue-600 hover:bg-blue-700"
          >
            Accept All
          </Button>
          <button
            onClick={declineCookies}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}