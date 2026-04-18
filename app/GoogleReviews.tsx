"use client";

import { useEffect, useRef, useState } from "react";

export default function GoogleReviews() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;
    const SRC = "https://elfsightcdn.com/platform.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    document.body.appendChild(s);
  }, [shouldLoad]);

  return (
    <section ref={sectionRef} style={{ padding: "60px 24px", background: "#f9f9f9" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
        {shouldLoad && (
          <div className="elfsight-app-10ba8f91-d08e-4d50-8d8e-3a7fb77e4247"></div>
        )}
      </div>
    </section>
  );
}
