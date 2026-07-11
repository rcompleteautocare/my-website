import Link from 'next/link'

/**
 * @param {{
 *   className?: string,
 *   style?: import('react').CSSProperties,
 *   children?: import('react').ReactNode,
 * }} props
 */
export default function BookButton({ className, style, children }) {
  return (
    <Link href="/book" className={className} style={style}>
      {children || 'Book Appointment'}
    </Link>
  )
}
