'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function SiteAnalytics() {
  useEffect(() => {
    const click = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest('a')
      if (!link) return
      if (link.href.startsWith('tel:')) trackEvent('call_button_click', { path: location.pathname })
      if (link.href.includes('google.com/maps')) trackEvent('directions_click', { path: location.pathname })
      if (link.dataset.reviewLink) trackEvent('google_reviews_click', { path: location.pathname })
    }
    document.addEventListener('click', click)
    return () => document.removeEventListener('click', click)
  }, [])
  return null
}
