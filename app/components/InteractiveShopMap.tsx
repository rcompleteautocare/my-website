"use client";

import Script from "next/script";
import { useCallback, useRef, useState } from "react";
import styles from "./NeighborhoodMap.module.css";

type MapsApi = {
  Map: new (element: HTMLElement, options: Record<string, unknown>) => unknown;
  Marker: new (options: Record<string, unknown>) => unknown;
  event: { addListenerOnce: (target: unknown, eventName: string, listener: () => void) => void };
};

declare global {
  interface Window {
    google?: { maps: MapsApi };
  }
}

const SHOP = { lat: 41.427312, lng: -87.344627 };

export default function InteractiveShopMap({ apiKey }: { apiKey?: string }) {
  const mapElement = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [status, setStatus] = useState(apiKey ? "Loading map" : "");

  const initializeMap = useCallback(() => {
    if (initialized.current || !mapElement.current || !window.google?.maps) return;
    initialized.current = true;
    setStatus("Rendering map");

    const maps = window.google.maps;
    const map = new maps.Map(mapElement.current, {
      center: SHOP,
      zoom: 16,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      zoomControl: true,
    });

    new maps.Marker({
      map,
      position: SHOP,
      title: "R Complete Auto Care",
    });

    maps.event.addListenerOnce(map, "tilesloaded", () => setStatus(""));
  }, []);

  if (!apiKey) {
    return (
      <iframe
        title="Map showing R Complete Auto Care at 1305 E Summit Street in Crown Point, Indiana"
        src="https://maps.google.com/maps?q=R+Complete+Auto+Care,1305+E+Summit+St,Crown+Point,IN+46307&z=15&output=embed"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <>
      <Script
        id="google-maps-javascript-api"
        src={`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`}
        strategy="lazyOnload"
        onLoad={initializeMap}
        onError={() => setStatus("Map unavailable — use Open in Google Maps")}
      />
      <div
        ref={mapElement}
        className={styles.interactiveMap}
        role="img"
        aria-label="Interactive map showing R Complete Auto Care in Crown Point, Indiana"
      />
      {status ? <div className={styles.mapStatus} role="status">{status}</div> : null}
    </>
  );
}
