"use client";

import { useEffect } from "react";

// Loads the Google Ads gtag.js library on the first user interaction, or after a
// short idle timeout — whichever comes first.
//
// Why not `<Script strategy="lazyOnload">`: lazyOnload fires on window `load`.
// The inline init (afterInteractive, in SiteTracking) defines `window.gtag` and
// queues calls into `dataLayer`, but queued is not transmitted — nothing leaves
// the browser until gtag.js itself arrives. On the emergency pages the whole
// user story is "land, immediately tap the phone number", and once the dialer
// backgrounds the page a still-pending library may never load. Binding to
// `pointerdown` means the very tap that precedes a `tel:` click starts the
// fetch, so the queued conversion has a library to flush it.
const GTAG_SRC_MATCH = "googletagmanager.com/gtag/js";
const IDLE_DELAY_MS = 3000;

export default function GtagLoader({ adsTagId }: { adsTagId: string }) {
  useEffect(() => {
    if (!adsTagId) return;
    // Already injected by an earlier mount / client-side navigation.
    if (document.querySelector(`script[src*="${GTAG_SRC_MATCH}"]`)) return;

    let loaded = false;
    const events = ["pointerdown", "keydown", "touchstart"] as const;

    // Both are function declarations so they hoist above `timer`, which lets
    // `timer` stay const — neither runs before the timer is assigned.
    function load() {
      if (loaded) return;
      loaded = true;
      // Re-check: a concurrent mount may have won the race.
      if (!document.querySelector(`script[src*="${GTAG_SRC_MATCH}"]`)) {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(adsTagId)}`;
        script.async = true;
        document.head.appendChild(script);
      }
      cleanup();
    }

    function cleanup() {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, load));
    }

    const timer = setTimeout(load, IDLE_DELAY_MS);
    events.forEach((event) =>
      window.addEventListener(event, load, { once: true, passive: true })
    );

    return cleanup;
  }, [adsTagId]);

  return null;
}
