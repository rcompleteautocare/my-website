"use client";

import { useEffect } from "react";

// Reused from the base Google Ads tag (see app/layout.tsx) plus the
// "Click to call" conversion label. Both are NEXT_PUBLIC_ and inlined at
// build time; if either is missing the listener is a silent no-op.
const TAG_ID = process.env.NEXT_PUBLIC_ADS_TAG_ID;
const PHONE_LABEL = process.env.NEXT_PUBLIC_ADS_PHONE_CONVERSION_LABEL;

/**
 * Fires a Google Ads "Click to call" conversion when any `tel:` link is
 * clicked, using a single document-level click listener (event delegation)
 * so no individual `tel:` link or its page needs to be touched.
 *
 * Renders nothing. We deliberately do NOT preventDefault / event_callback:
 * `tel:` links hand off to the dialer without unloading the page, so the
 * conversion ping has time to send and blocking navigation would risk
 * breaking the call action.
 */
export default function PhoneConversionListener() {
  useEffect(() => {
    // Nothing to do without both env vars — guarded again here in case the
    // component is ever mounted without the layout-level gate.
    if (!TAG_ID || !PHONE_LABEL) return;

    const sendTo = `${TAG_ID}/${PHONE_LABEL}`;
    let lastHref = "";
    let lastTime = 0;

    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      // `closest` walks up from the actual click target, so clicks on a
      // nested icon/span inside the anchor still match.
      const link = target.closest('a[href^="tel:"]');
      if (!link) return;

      if (typeof window.gtag !== "function") return;

      const href = link.getAttribute("href") ?? "";
      const now = Date.now();
      // De-dupe rapid double-clicks on the same number within 1s.
      if (href === lastHref && now - lastTime < 1000) return;
      lastHref = href;
      lastTime = now;

      window.gtag("event", "conversion", { send_to: sendTo });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
