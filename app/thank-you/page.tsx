import type { Metadata } from 'next'
import { Check, MapPin, Phone } from 'lucide-react'
import styles from '../scheduling.module.css'

export const metadata: Metadata = { title: "You're Scheduled! | R Complete Auto Care", robots: { index: false, follow: false } }
export default function ThankYouPage() {
  return <main className={styles.confirmation}><div className={styles.check}><Check size={42} /></div><h1>You’re Scheduled!</h1><p>Thank you for choosing R Complete Auto Care. Your appointment has been confirmed, and a service advisor will review your information before your arrival.</p><p>If additional information is needed, we’ll contact you. Need immediate assistance?</p><div className={styles.actions}><a href="tel:2192622711"><Phone size={18} /> Call Shop</a><a href="https://www.google.com/maps/dir/?api=1&destination=1305+E+Summit+St+Crown+Point+IN+46307"><MapPin size={18} /> Directions</a></div></main>
}
