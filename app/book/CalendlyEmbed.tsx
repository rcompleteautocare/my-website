'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { CALENDLY_URL } from '@/lib/booking'
import { trackEvent } from '@/lib/analytics'

export default function CalendlyEmbed() {
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin !== 'https://calendly.com') return
      if (event.data?.event === 'calendly.event_type_viewed') trackEvent('calendly_start')
      if (event.data?.event === 'calendly.event_scheduled') {
        trackEvent('calendly_complete')
        const invitee = event.data.payload?.invitee?.uri || ''
        router.push(`/vehicle-information?invitee=${encodeURIComponent(invitee)}`)
      }
    }
    window.addEventListener('message', receive)
    return () => window.removeEventListener('message', receive)
  }, [router])
  const url = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=171717&primary_color=c1121f`
  function loadCalendly() {
    if (loaded) return
    const container = document.createElement('div')
    container.className = 'calendly-inline-widget'
    container.setAttribute('data-url', url)
    container.style.minWidth = '280px'
    container.style.height = '760px'
    const mount = document.querySelector('#calendly-mount')
    if (mount) mount.appendChild(container)
    const s = document.createElement('script')
    s.src = 'https://assets.calendly.com/assets/external/widget.js'
    s.async = true
    document.head.appendChild(s)
    setLoaded(true)
  }

  return (
    <div>
      <div id="calendly-mount">
        {!loaded && (
          <div style={{ padding: 24, textAlign: 'center' }}>
            <button className="primary" onClick={loadCalendly}>Load scheduler</button>
          </div>
        )}
      </div>
    </div>
  )
}
