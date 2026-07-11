'use client'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

/**
 * @param {{
 *   className?: string,
 *   style?: import('react').CSSProperties,
 *   children?: import('react').ReactNode,
 * }} props
 */
export default function BookButton({ className, style, children }) {
  const trackBookingClick = () => {
    trackEvent('book_appointment_click', { placement: 'site_cta' })
  }
  return (
    <Link href="/book" className={className} style={style} onClick={trackBookingClick}>
      {children || 'Book Your Appointment'}
    </Link>
  )
}
