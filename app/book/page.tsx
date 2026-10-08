import type { Metadata } from 'next'
import TekmetricBooking from './TekmetricBooking'
import styles from '../scheduling.module.css'

export const metadata: Metadata = {
  title: 'Auto Repair Appointment Crown Point Indiana | Book Service Online',
  description: 'Book auto repair service online with R Complete Auto Care in Crown Point, Indiana.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/book' },
  openGraph: {
    title: 'Auto Repair Appointment Crown Point Indiana | Book Service Online',
    description: 'Book auto repair service online with R Complete Auto Care in Crown Point, Indiana.',
    url: 'https://www.rcompleteautocare.com/book',
    images: [
      {
        url: 'https://www.rcompleteautocare.com/og.png',
        width: 1200,
        height: 630,
        alt: 'R Complete Auto Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Auto Repair Appointment Crown Point Indiana | Book Service Online',
    description: 'Book auto repair service online with R Complete Auto Care in Crown Point, Indiana.',
    images: ['https://www.rcompleteautocare.com/og.png'],
  },
}

const appointmentTypes = ['Oil Change', 'Diagnostics', 'Brakes', 'Suspension', 'Engine Repair', 'Transmission Repair', 'Electrical Diagnosis', 'A/C Repair', 'Check Engine Light', 'Pre-Purchase Inspection', 'Used Car Inspection']

export default function BookPage() {
  return <main className={styles.page}>
    {/* The Tekmetric scheduler is loaded on this route only (TekmetricBooking
        injects modal.css + modal.js on mount), so the preconnect belongs here
        rather than the root layout. */}
    <link rel="preconnect" href="https://booking.tekmetric.com" />
    <section className={styles.intro}>
      <span className={styles.eyebrow}>Schedule service online</span>
      <h1>Book Your Appointment</h1>
      <p>Choose a service and a time that works for you. Your appointment goes straight onto our shop schedule, and we’ll confirm by text and email.</p>
      <div className={styles.hours}><strong>Shop hours</strong><span>Mon–Fri 8am–6pm</span><span>Sat 8am–2pm</span><span>Sunday closed</span></div>
    </section>
    <section className={styles.bookingCard} aria-label="Online appointment scheduler"><TekmetricBooking /></section>
    <section className={styles.serviceList} aria-label="Available appointment types">
      <h2>Services you can schedule</h2><div>{appointmentTypes.map(item => <span key={item}>{item}</span>)}</div>
    </section>
    <aside className={styles.help}>Prefer to speak with us? <a href="tel:2192622711">Call (219) 262-2711</a></aside>
  </main>
}
