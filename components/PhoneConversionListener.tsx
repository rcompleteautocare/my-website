'use client';

import { useEffect } from "react";

// Google Ads "Click to call" conversion. We attach ONE document-level click
// listener (event delegation) instead of wiring every `tel:` link, so none of
// the 29 files containing phone links — nor any server component — has to change.
const DEDUPE_WINDOW_MS = 1000;

export default function PhoneConversionListener() {
  useEffect(() => {
    const tagId = process.env.NEXT_PUBLIC_ADS_TAG_ID;
    const label = process.env.NEXT_PUBLIC_ADS_PHONE_CONVERSION_LABEL;
    // Silent no-op if either env var is missing — never throws, never logs.
    if (!tagId || !label) return;

    const sendTo = `${tagId}/${label}`;
    let lastHref: string | null = null;
    let lastFiredAt = 0;

    const handler = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      // `closest` catches clicks on nested spans/icons inside the anchor too.
      const link = target.closest('a[href^="tel:"]');
      if (!link) return;

      // Guard: do nothing if the base gtag.js tag hasn't loaded.
      if (typeof window.gtag !== "function") return;

      // De-dupe rapid double-clicks on the same number within 1s.
      const href = link.getAttribute("href") ?? "";
      const now = Date.now();
      if (href === lastHref && now - lastFiredAt < DEDUPE_WINDOW_MS) return;
      lastHref = href;
      lastFiredAt = now;

      // No preventDefault / no event_callback: a `tel:` click hands off to the
      // dialer without unloading the page, so the beacon has time to send and
      // we must not risk blocking the call action.
      window.gtag("event", "conversion", { send_to: sendTo });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
