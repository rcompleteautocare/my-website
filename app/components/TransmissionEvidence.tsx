import Image from "next/image";
import {
  TRANSMISSION_PHOTOS,
  TRANSMISSION_PRICES,
  TRANSMISSION_REVIEWS,
} from "@/lib/transmission-page";

// Sections of /services/transmission-repair that depend on owner-supplied
// content (lib/transmission-page.ts). Each one returns null until its data is
// filled in, so nothing empty, fake or placeholder ever reaches the page.

const OPTIONS = [
  {
    key: "repair",
    title: "Repair",
    what: "Fixing the specific part that failed while the rest of the transmission stays as it is. Typical examples are a shift solenoid, a speed sensor, a leaking seal or cooler line, a valve body, or a fluid service.",
    when: "Testing shows one identifiable fault and the fluid and internal parts are otherwise healthy. This is the outcome a proper diagnosis is trying to find first.",
    turnaround: "Often the same day to a few days, depending mostly on parts availability.",
  },
  {
    key: "rebuild",
    title: "Rebuild",
    what: "The transmission is removed, taken apart and inspected, and its worn internal parts (clutches, bands, seals, gaskets and any damaged hard parts) are replaced before it is reassembled and reinstalled.",
    when: "There is confirmed internal wear or damage, such as worn clutch packs or debris in the fluid, but the case and major components are sound enough to reuse.",
    turnaround: "Usually several days to a week or more. It is the most labor-intensive option and parts are ordered once the unit is apart.",
  },
  {
    key: "replace",
    title: "Replace",
    what: "The whole transmission is swapped for another unit, usually a remanufactured one, or a used one where that suits the vehicle and budget.",
    when: "Damage is too extensive to rebuild economically, a quality remanufactured unit is readily available, or a faster and more predictable repair matters most.",
    turnaround: "Often a few days once the replacement unit arrives. Shipping time for the unit is usually the biggest variable.",
  },
] as const;

const label = { fontSize: "12px", fontWeight: "bold", letterSpacing: "0.06em", textTransform: "uppercase", color: "#e63946", margin: "14px 0 4px" } as const;
const body = { fontSize: "14px", color: "#555", lineHeight: 1.7, margin: 0 } as const;

export function RepairRebuildReplace() {
  const prices = TRANSMISSION_PRICES.filter((p) => p.price.trim());
  const priceFor = (key: string) => prices.find((p) => p.key === key);

  return (
    <section style={{ padding: "60px 24px", maxWidth: "960px", margin: "0 auto" }} aria-labelledby="repair-rebuild-replace">
      <h2 id="repair-rebuild-replace" style={{ fontSize: "28px", marginBottom: "12px" }}>Repair vs. Rebuild vs. Replace</h2>
      <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "28px", maxWidth: "800px" }}>
        These are three different jobs with very different scope. Which one your vehicle needs is decided by the diagnosis, not by the symptom, and we explain the reasoning before you approve anything.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {OPTIONS.map((option) => {
          const price = priceFor(option.key);
          return (
            <div key={option.key} style={{ border: "1px solid #e0e0e0", borderTop: "4px solid #e63946", borderRadius: "6px", padding: "24px", background: "#fff" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "bold", margin: 0, color: "#1a1a1a" }}>{option.title}</h3>
              <p style={label}>What it is</p>
              <p style={body}>{option.what}</p>
              <p style={label}>When it makes sense</p>
              <p style={body}>{option.when}</p>
              <p style={label}>Typical turnaround</p>
              <p style={body}>{option.turnaround}</p>
              {price && (
                <>
                  <p style={label}>Price</p>
                  <p style={{ ...body, color: "#1a1a1a", fontWeight: "bold", fontSize: "16px" }}>{price.price}</p>
                  {price.note && <p style={{ ...body, fontSize: "13px" }}>{price.note}</p>}
                </>
              )}
            </div>
          );
        })}
      </div>
      <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, marginTop: "16px" }}>
        Turnaround times are general ranges for this kind of work, not a promise for your vehicle. You get the expected timeline for your specific repair with the estimate.
      </p>

      {prices.length > 0 && (
        <div style={{ marginTop: "40px" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "16px" }}>Transmission Service Pricing</h3>
          <div style={{ border: "1px solid #e0e0e0", borderRadius: "6px", overflow: "hidden" }}>
            {prices.map((p, i) => (
              <div key={p.key} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", padding: "14px 18px", background: i % 2 ? "#f9f9f9" : "#fff", borderTop: i ? "1px solid #f0f0f0" : "none" }}>
                <div>
                  <div style={{ fontWeight: "bold", color: "#1a1a1a" }}>{p.service}</div>
                  {p.note && <div style={{ fontSize: "13px", color: "#666" }}>{p.note}</div>}
                </div>
                <div style={{ fontWeight: "bold", color: "#e63946", whiteSpace: "nowrap" }}>{p.price}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.7, marginTop: "12px" }}>
            Final cost depends on the vehicle and what the diagnosis finds. You approve a written estimate before any work begins.
          </p>
        </div>
      )}
    </section>
  );
}

export function TransmissionPhotos() {
  if (TRANSMISSION_PHOTOS.length === 0) return null;
  return (
    <section style={{ background: "#f5f5f5", padding: "60px 24px" }} aria-labelledby="transmission-photos">
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <h2 id="transmission-photos" style={{ fontSize: "28px", marginBottom: "24px" }}>Transmission Work From Our Shop</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {TRANSMISSION_PHOTOS.map((photo) => (
            <figure key={photo.src} style={{ margin: 0, background: "#fff", borderRadius: "6px", overflow: "hidden", border: "1px solid #e0e0e0" }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) calc(100vw - 48px), 300px"
                quality={70}
                loading="lazy"
                style={{ width: "100%", height: "auto", aspectRatio: "3 / 2", objectFit: "cover", display: "block" }}
              />
              {photo.caption && (
                <figcaption style={{ padding: "12px 16px", fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{photo.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TransmissionReviews() {
  if (TRANSMISSION_REVIEWS.length === 0) return null;
  return (
    <section style={{ padding: "60px 24px", maxWidth: "960px", margin: "0 auto" }} aria-labelledby="transmission-reviews">
      <h2 id="transmission-reviews" style={{ fontSize: "28px", marginBottom: "8px" }}>What Customers Say About Our Transmission Work</h2>
      <p style={{ color: "#666", fontSize: "14px", marginBottom: "24px" }}>Reviews from Google, shown as written.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
        {TRANSMISSION_REVIEWS.map((review) => {
          const stars = Math.max(0, Math.min(5, Math.round(review.rating)));
          return (
            <figure key={`${review.author}-${review.date}`} style={{ margin: 0, border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "20px", background: "#fff" }}>
              <div style={{ color: "#e63946", fontSize: "18px", letterSpacing: "2px", marginBottom: "10px" }} role="img" aria-label={`${stars} out of 5 stars`}>
                {"★".repeat(stars)}
                <span style={{ color: "#ddd" }}>{"★".repeat(5 - stars)}</span>
              </div>
              <blockquote style={{ margin: 0, color: "#444", lineHeight: 1.7, fontSize: "15px" }}>{review.text}</blockquote>
              <figcaption style={{ marginTop: "14px", fontSize: "14px", color: "#1a1a1a" }}>
                <strong>{review.author}</strong>
                <span style={{ color: "#666" }}> · {review.date} · </span>
                {review.url ? (
                  <a href={review.url} target="_blank" rel="noopener noreferrer" style={{ color: "#e63946" }}>Google review</a>
                ) : (
                  <span style={{ color: "#666" }}>Google review</span>
                )}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
