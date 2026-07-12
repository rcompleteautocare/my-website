import type { Metadata } from 'next'
import { Suspense } from 'react'
import VehicleInformationForm from './VehicleInformationForm'
import styles from '../scheduling.module.css'

export const metadata: Metadata = {
  title: 'Vehicle Information | R Complete Auto Care',
  description: 'Secure vehicle intake form for scheduled R Complete Auto Care appointments.',
  robots: { index: false, follow: false },
}

export default function VehicleInformationPage() {
  return <main className={styles.page}>
    <section className={styles.intro}><span className={styles.eyebrow}>Appointment intake</span><h1>Tell us about your vehicle</h1><p>Your appointment is reserved. These details help our service advisor prepare before you arrive.</p></section>
    <Suspense fallback={<div className={styles.formCard}>Loading secure intake form…</div>}><VehicleInformationForm /></Suspense>
  </main>
}
