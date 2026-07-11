'use client'
import { useRouter } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

/**
 * @param {{
 *   className?: string,
 *   style?: import('react').CSSProperties,
 *   children?: import('react').ReactNode,
 * }} props
 */
export default function BookButton({ className, style, children }) {
  const router = useRouter()
  const open = () => {
    trackEvent('book_appointment_click', { placement: 'site_cta' })
    router.push('/book')
  }
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children || 'Book Your Appointment'}
    </button>
  )
}
