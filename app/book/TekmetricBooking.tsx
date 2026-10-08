'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { TEKMETRIC_BOOKING_ORIGIN, TEKMETRIC_BOOKING_SHOP_ID } from '@/lib/booking'
import { trackEvent } from '@/lib/analytics'

declare global {
  interface Window {
    tekmetricBooking?: { shopId: string; orgId?: string }
    onShowBooking?: (shopId: string, orgId?: string) => void
  }
}

// Tekmetric's scheduler is a modal: modal.js defines window.onShowBooking(),
// which opens an iframe served from booking.tekmetric.com. The script + CSS are
// injected on this route only, so no other page pays for them.
export default function TekmetricBooking() {
  const [ready, setReady] = useState(false)
  const openWhenReady = useRef(false)

  const open = useCallback(() => {
    trackEvent('booking_start', { provider: 'tekmetric' })
    if (window.onShowBooking) window.onShowBooking(TEKMETRIC_BOOKING_SHOP_ID)
    else openWhenReady.current = true
  }, [])

  useEffect(() => {
    window.tekmetricBooking = { shopId: TEKMETRIC_BOOKING_SHOP_ID, orgId: undefined }

    if (!document.querySelector('link[data-tekmetric-booking]')) {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = `${TEKMETRIC_BOOKING_ORIGIN}/iframe/modal.css`
      css.setAttribute('data-tekmetric-booking', '')
      document.head.appendChild(css)
    }

    const onLoad = () => {
      setReady(true)
      if (openWhenReady.current) {
        openWhenReady.current = false
        window.onShowBooking?.(TEKMETRIC_BOOKING_SHOP_ID)
      }
    }

    let script = document.querySelector<HTMLScriptElement>('script[data-tekmetric-booking]')
    if (window.onShowBooking) {
      onLoad()
    } else if (script) {
      script.addEventListener('load', onLoad)
    } else {
      script = document.createElement('script')
      script.src = `${TEKMETRIC_BOOKING_ORIGIN}/iframe/modal.js`
      script.async = true
      script.setAttribute('data-tekmetric-booking', '')
      script.addEventListener('load', onLoad)
      document.body.appendChild(script)
    }

    // The booking iframe posts a success message when an appointment is created.
    const receive = (event: MessageEvent) => {
      if (event.origin !== TEKMETRIC_BOOKING_ORIGIN) return
      const name = typeof event.data === 'string' ? event.data : event.data?.name
      if (name === 'bookingTool:success') trackEvent('booking_complete', { provider: 'tekmetric' })
    }
    window.addEventListener('message', receive)

    return () => {
      script?.removeEventListener('load', onLoad)
      window.removeEventListener('message', receive)
    }
  }, [])

  return (
    <div style={{ padding: 'clamp(28px,6vw,56px) 24px', textAlign: 'center' }}>
      <h2 style={{ margin: '0 0 10px', fontSize: '1.6rem', color: '#1a1a1a' }}>Pick your service and time</h2>
      <p style={{ margin: '0 auto 24px', maxWidth: 520, color: '#444' }}>
        Choose drop-off or wait, tell us about your vehicle, and you’ll get a confirmation by text and email.
        After-hours key drop is available.
      </p>
      <button
        type="button"
        onClick={open}
        aria-busy={!ready}
        style={{
          border: 0,
          borderRadius: 10,
          padding: '18px 40px',
          background: '#e63946',
          color: '#fff',
          font: 'inherit',
          fontSize: '1.15rem',
          fontWeight: 800,
          cursor: 'pointer',
        }}
      >
        Book Appointment Online
      </button>
      <p style={{ margin: '18px 0 0', fontSize: '.9rem', color: '#666' }}>
        Scheduler not opening? <a href="tel:2192622711" style={{ color: '#c1121f', fontWeight: 700 }}>Call (219) 262-2711</a>
      </p>
    </div>
  )
}
