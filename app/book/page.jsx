import Script from 'next/script'
import { CALENDLY_URL } from '@/lib/booking'

export const metadata = {
  title: 'Book an Appointment | R Complete Auto Care',
  description:
    'Schedule auto repair and diagnostics online in Crown Point, IN — diagnostic-first, no-upsell, transparent service.',
  alternates: {
    canonical: 'https://www.rcompleteautocare.com/book',
  },
}

export default function BookPage() {
  return (
    <main style={{ color: '#1a1a1a', maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px' }}>Book an Appointment</h1>
      <p style={{ color: '#555', marginBottom: '24px', lineHeight: 1.7 }}>
        Schedule your visit to R Complete Auto Care online. Prefer to talk to a real person? Call{' '}
        <a href="tel:2192622711" style={{ color: '#e63946' }}>(219) 262-2711</a>.
      </p>
      <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: 320, height: 720 }} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </main>
  )
}
