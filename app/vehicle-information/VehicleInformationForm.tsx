'use client'

import { useSearchParams } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'
import styles from '../scheduling.module.css'

const textFields = [
  ['customer_name','Customer Name','text',true], ['phone','Phone','tel',true], ['email','Email','email',true],
  ['vehicle_year','Vehicle Year','number',true], ['vehicle_make','Vehicle Make','text',true], ['vehicle_model','Vehicle Model','text',true],
  ['engine_size','Engine Size','text',false], ['vin','VIN','text',false], ['mileage','Mileage','number',false],
  ['license_plate','License Plate','text',false], ['warranty_company','Warranty Company','text',false],
] as const

export default function VehicleInformationForm() {
  const params = useSearchParams()
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  const action = formId ? `https://formspree.io/f/${formId}` : '/thank-you'
  return <form className={styles.formCard} action={action} method="POST" encType="multipart/form-data" onSubmit={() => trackEvent('vehicle_form_submitted')}>
    <input type="hidden" name="_subject" value="New Scheduled Appointment" />
    <input type="hidden" name="_next" value="https://www.rcompleteautocare.com/thank-you" />
    <input type="hidden" name="calendly_invitee" value={params.get('invitee') || ''} />
    <div className={styles.formGrid}>
      {textFields.map(([name,label,type,required]) => <div className={styles.field} key={name}><label htmlFor={name}>{label}{required && ' *'}</label><input id={name} name={name} type={type} required={required} /></div>)}
      <fieldset className={styles.choice}><legend>Arrival plan *</legend><div>{['Waiting','Drop Off','Need Shuttle','Need Loaner'].map(option => <label key={option}><input type="radio" name="arrival_plan" value={option} required /> {option}</label>)}</div></fieldset>
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="primary_concern">Primary Concern *</label><textarea id="primary_concern" name="primary_concern" required placeholder="Describe the symptom, when it started, and anything that makes it better or worse." /></div>
      <div className={`${styles.field} ${styles.full}`}><label htmlFor="additional_concerns">Additional Concerns</label><textarea id="additional_concerns" name="additional_concerns" /></div>
      {[['photos','Upload Photos'],['warranty_card','Upload Warranty Card'],['previous_estimate','Upload Previous Estimate']].map(([name,label]) => <div className={styles.field} key={name}><label htmlFor={name}>{label}</label><input id={name} name={name} type="file" accept="image/*,.pdf" multiple={name === 'photos'} /></div>)}
      <div className={styles.notice}><label className={styles.authorization}><input type="checkbox" name="diagnostic_authorization" value="Authorized" required /><span><strong>I authorize R Complete Auto Care to perform diagnostics.</strong><br />Diagnostic charges apply if repairs are declined. *</span></label></div>
      <button className={styles.submit} type="submit">Send Vehicle Information</button>
    </div>
  </form>
}
