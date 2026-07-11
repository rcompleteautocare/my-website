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
      <iframe
        title="Book an appointment with R Complete Auto Care"
        src={`${CALENDLY_URL}?embed_domain=www.rcompleteautocare.com&embed_type=Inline&hide_gdpr_banner=1`}
        style={{ width: '100%', minWidth: 280, height: 1050, border: 0 }}
      />
    </main>
  )
}
