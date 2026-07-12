import { timingSafeEqual } from 'node:crypto'
import { NextResponse } from 'next/server'

function validSecret(request: Request) {
  const expected = process.env.FORMSPREE_WEBHOOK_SECRET
  const supplied = request.headers.get('x-formspree-secret')
  if (!expected || !supplied) return false
  const a = Buffer.from(expected), b = Buffer.from(supplied)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export async function POST(request: Request) {
  if (!validSecret(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  let submission: Record<string, unknown>
  try {
    submission = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
  // Phase 1 intentionally prepares the RingCentral handoff without sending SMS.
  // The structured log is visible in Vercel and can be replaced by the adapter later.
  console.info('NEW APPOINTMENT', {
    customer: submission.customer_name,
    vehicle: [submission.vehicle_year, submission.vehicle_make, submission.vehicle_model].filter(Boolean).join(' '),
    appointmentTime: submission.appointment_time,
    calendlyInvitee: submission.calendly_invitee,
  })
  return NextResponse.json({ received: true, smsSent: false })
}
