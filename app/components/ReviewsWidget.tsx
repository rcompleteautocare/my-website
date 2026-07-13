"use client";

import { useEffect, useRef } from "react";

// Elfsight Google-reviews widget. platform.js is a heavy third-party bundle, so
// instead of loading it on every page view we gate it behind an Intersection
// Observer: the script is only injected once the reviews section nears the
// viewport (it lives well below the fold). This keeps it off the initial
// main-thread path — improving TBT/long-task counts — while still rendering the
// real reviews when a visitor scrolls down. The container is server-rendered,
// so there is no layout shift and no indexable content is removed.
const ELFSIGHT_SRC = "https://elfsightcdn.com/platform.js";
const ELFSIGHT_CLASS = "elfsight-app-10ba8f91-d08e-4d50-8d8e-3a7fb77e4247";
const SCRIPT_SELECTOR = `script[src="${ELFSIGHT_SRC}"]`;

export default function ReviewsWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

    const getWidgetContainer = () => el.querySelector<HTMLDivElement>(`.${ELFSIGHT_CLASS}`);

    const isRendered = () => {
      const container = getWidgetContainer();
      return Boolean(container && container.childElementCount > 0);
    };

    const loadScript = (forceReload = false) => {
      const existing = document.querySelector<HTMLScriptElement>(SCRIPT_SELECTOR);

      if (existing && !forceReload) {
        return;
      }

      if (existing && forceReload) {
        existing.remove();
      }

      const s = document.createElement("script");
      s.src = ELFSIGHT_SRC;
      s.async = true;
      document.body.appendChild(s);
    };

    const ensureWidgetRendered = async () => {
      if (isRendered()) return;

      loadScript(false);

      for (let i = 0; i < 10 && !cancelled; i += 1) {
        if (isRendered()) return;
        await wait(300);
      }

      if (cancelled || isRendered()) return;

      // If Elfsight did not hydrate this mount, force one script re-run.
      loadScript(true);

      for (let i = 0; i < 10 && !cancelled; i += 1) {
        if (isRendered()) return;
        await wait(300);
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      void ensureWidgetRendered();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          void ensureWidgetRendered();
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  return (
    <section ref={ref} style={{ padding: "60px 24px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <div className={ELFSIGHT_CLASS}></div>
      </div>
    </section>
  );
}
