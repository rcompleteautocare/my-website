import { Clock3, ExternalLink, MapPin, Navigation } from "lucide-react";
import styles from "./NeighborhoodMap.module.css";
import InteractiveShopMap from "./InteractiveShopMap";

const serviceAreas = ["Crown Point", "St. John", "Schererville", "Merrillville", "Cedar Lake"];
const destination = "R Complete Auto Care, 1305 E Summit St, Crown Point, IN 46307";

export default function NeighborhoodMap() {
  return (
    <section className={styles.section} aria-labelledby="neighborhood-map-heading">
      <div className={styles.heading}>
        <p>Plan your visit</p>
        <h2 id="neighborhood-map-heading">Find Us in Crown Point</h2>
        <span>Conveniently located on E Summit Street with customer parking in front.</span>
      </div>

      <div className={styles.discovery}>
        <aside className={styles.panel} aria-label="Shop location details">
          <div className={styles.pin}><MapPin aria-hidden="true" size={23} /></div>
          <p className={styles.label}>R Complete Auto Care</p>
          <address>1305 E Summit St<br />Crown Point, IN 46307</address>

          <div className={styles.detail}>
            <Clock3 aria-hidden="true" size={18} />
            <span><strong>Open Mon–Fri 8–6</strong>Saturday 8–2 · Sunday closed</span>
          </div>

          <a
            className={styles.directions}
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation aria-hidden="true" size={18} /> Get Directions
          </a>

          <div className={styles.areas}>
            <p>Serving nearby drivers</p>
            <div>
              {serviceAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
          </div>
        </aside>

        <div className={styles.map}>
          <InteractiveShopMap apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} />
          <a
            className={styles.openMap}
            href="https://www.google.com/maps?cid=13417684656168194405"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
