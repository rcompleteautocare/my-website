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

export default function ReviewsWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const loadScript = () => {
      if (document.querySelector(`script[src="${ELFSIGHT_SRC}"]`)) return;
      const s = document.createElement("script");
      s.src = ELFSIGHT_SRC;
      s.async = true;
      document.body.appendChild(s);
    };

    if (typeof IntersectionObserver === "undefined") {
      loadScript();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          loadScript();
          io.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ padding: "60px 24px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        <div
          className="elfsight-app-10ba8f91-d08e-4d50-8d8e-3a7fb77e4247"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
