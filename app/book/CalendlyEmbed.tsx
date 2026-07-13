'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { CALENDLY_URL } from '@/lib/booking'
import { trackEvent } from '@/lib/analytics'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

export default function CalendlyEmbed() {
  const router = useRouter()
  const mountRef = useRef<HTMLDivElement>(null)

  // Booking analytics + redirect: listen for Calendly's postMessage events.
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

  // Preload the Calendly CSS + JS on mount, then render the inline widget.
  useEffect(() => {
    const url = `${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=171717&primary_color=c1121f`
    const parent = mountRef.current

    if (!document.querySelector('link[data-calendly]')) {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = 'https://assets.calendly.com/assets/external/widget.css'
      css.setAttribute('data-calendly', '')
      document.head.appendChild(css)
    }

    const initWidget = () => {
      if (!parent || !window.Calendly) return
      parent.innerHTML = ''
      window.Calendly.initInlineWidget({ url, parentElement: parent })
    }

    let script = document.querySelector<HTMLScriptElement>('script[data-calendly]')
    if (window.Calendly) {
      initWidget()
    } else if (script) {
      script.addEventListener('load', initWidget)
    } else {
      script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.setAttribute('data-calendly', '')
      script.addEventListener('load', initWidget)
      document.head.appendChild(script)
    }

    return () => {
      script?.removeEventListener('load', initWidget)
      if (parent) parent.innerHTML = ''
    }
  }, [])

  return (
    <div>
      <div id="calendly-mount" ref={mountRef} style={{ minWidth: 280, height: 760 }} />
    </div>
  )
}
