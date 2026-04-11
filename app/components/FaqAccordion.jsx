'use client'../../components/FaqAccordion

// This file is shared by all 4 pages.
// Save as: app/components/FaqAccordion.jsx
// (or drop it inside each page folder if you prefer)

import { useState } from 'react'

export default function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.q}
          </button>
          {open === i && <p className="faq-answer">{item.a}</p>}
        </div>
      ))}
    </div>
  )
}
