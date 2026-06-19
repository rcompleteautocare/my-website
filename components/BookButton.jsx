'use client'
import { CALENDLY_URL } from '@/lib/booking'

/**
 * @param {{
 *   className?: string,
 *   style?: import('react').CSSProperties,
 *   children?: import('react').ReactNode,
 * }} props
 */
export default function BookButton({ className, style, children }) {
  const open = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  return (
    <button type="button" className={className} style={style} onClick={open}>
      {children || 'Book Appointment'}
    </button>
  )
}
