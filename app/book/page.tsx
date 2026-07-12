import type { Metadata } from 'next'
import CalendlyEmbed from './CalendlyEmbed'
import styles from '../scheduling.module.css'

export const metadata: Metadata = {
  title: 'Auto Repair Appointment Crown Point Indiana | Book Service Online',
  description: 'Book auto repair service online with R Complete Auto Care in Crown Point, Indiana.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/book' },
}

const appointmentTypes = ['Oil Change', 'Diagnostics', 'Brakes', 'Suspension', 'Engine Repair', 'Transmission Repair', 'Electrical Diagnosis', 'A/C Repair', 'Check Engine Light', 'Pre-Purchase Inspection', 'Used Car Inspection']

export default function BookPage() {
  return <main className={styles.page}>
    <section className={styles.intro}>
      <span className={styles.eyebrow}>Schedule service online</span>
      <h1>Book Your Appointment</h1>
      <p>Choose a service and a time that works for you. After booking, we’ll collect your vehicle details so our team can prepare.</p>
      <div className={styles.hours}><strong>Shop hours</strong><span>Mon–Fri 8am–6pm</span><span>Sat 8am–2pm</span><span>Sunday closed</span></div>
    </section>
    <section className={styles.bookingCard} aria-label="Online appointment scheduler"><CalendlyEmbed /></section>
    <section className={styles.serviceList} aria-label="Available appointment types">
      <h2>Services you can schedule</h2><div>{appointmentTypes.map(item => <span key={item}>{item}</span>)}</div>
    </section>
    <aside className={styles.help}>Prefer to speak with us? <a href="tel:2192622711">Call (219) 262-2711</a></aside>
  </main>
}
