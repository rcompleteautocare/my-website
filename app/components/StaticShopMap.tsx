// Static Google Map of the shop location. Server component so the image is in
// the server-rendered HTML (good for crawlers) and needs no client JS.
// Uses the same public NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as InteractiveShopMap;
// the Static Maps API is enabled on this key and does not require URL signing.

const SHOP = { lat: 41.427312, lng: -87.344627 };
const BRAND_RED = "0xe63946";
// Public Google Maps place link (Place CID), matches NeighborhoodMap / lib usage.
const MAPS_LINK = "https://www.google.com/maps?cid=13417684656168194405";

type Props = {
  /** Logical width in px (max 640 on the free tier). Rendered @2x via scale. */
  width?: number;
  /** Logical height in px. */
  height?: number;
  zoom?: number;
  className?: string;
};

export default function StaticShopMap({
  width = 640,
  height = 360,
  zoom = 15,
  className,
}: Props) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) return null;

  const params = new URLSearchParams({
    center: `${SHOP.lat},${SHOP.lng}`,
    zoom: String(zoom),
    size: `${width}x${height}`,
    scale: "2",
    markers: `color:${BRAND_RED}|${SHOP.lat},${SHOP.lng}`,
    key: apiKey,
  });
  const src = `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;

  return (
    <a
      href={MAPS_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label="Open R Complete Auto Care in Google Maps"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- external Static Maps URL, not eligible for next/image */}
      <img
        src={src}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        alt="Map of R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307"
      />
    </a>
  );
}
