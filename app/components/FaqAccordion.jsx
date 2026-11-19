// Collapsible FAQ list built on native <details>/<summary>.
//
// This is a server component on purpose. The previous version was a client
// component that rendered each answer as <p hidden> and toggled it with React
// state, so collapsed answers carried the `hidden` attribute in the server
// HTML: crawlers and text extractors that honour `hidden` saw questions with
// no answers, and nothing could be opened without JavaScript. With <details>
// the answer text is ordinary content in the initial HTML, collapsing is done
// by the browser, find-in-page can expand a match, and no JS ships.
//
// The shared `name` makes the group exclusive (opening one closes the others),
// matching the old one-open-at-a-time behaviour in browsers that support it.

import { useId } from 'react'

/**
 * @param {{ faqs: { q: string, a: string }[] }} props
 */
export default function FaqAccordion({ faqs }) {
  const group = useId()

  return (
    <div className="faq-list">
      {faqs.map((item) => (
        <details key={item.q} className="faq-item" name={group}>
          <summary className="faq-question">{item.q}</summary>
          <p className="faq-answer">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
