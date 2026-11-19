// Owner-supplied content for /services/transmission-repair.
//
// Everything in this file is real-world evidence that only the shop owner can
// provide. The page sections are already built and styled; each one renders
// NOTHING while its array is empty (or, for prices, while a price is blank), so
// it is safe to deploy before the content arrives.
//
// DO NOT fill these with placeholder, sample, paraphrased or AI-written
// content. Reviews must be copied word for word from Google, photos must be of
// real jobs at this shop, and prices must be figures the shop will honour.

export type TransmissionReview = {
  /** Reviewer name exactly as shown on Google (e.g. "Jane D."). */
  author: string;
  /** Review text, copied verbatim from Google. Trim, but do not reword. */
  text: string;
  /** Star rating the reviewer gave, 1–5. */
  rating: number;
  /** Month and year of the review as shown on Google, e.g. "October 2026". */
  date: string;
  /** Optional link to the review on Google. */
  url?: string;
};

// TODO(owner): add 3 to 5 real Google reviews that mention transmission work.
export const TRANSMISSION_REVIEWS: TransmissionReview[] = [];

export type TransmissionPhoto = {
  /** Path under public/, short kebab-case, under 100 chars (see CLAUDE.md). e.g. "/images/transmission-valve-body-repair.webp" */
  src: string;
  /** What the photo shows. Descriptive text belongs here, not in the filename. */
  alt: string;
  /** Intrinsic pixel size of the file. */
  width: number;
  height: number;
  /** Optional short caption shown under the photo. */
  caption?: string;
};

// TODO(owner): add 3 photos of real transmission jobs done at the shop
// (1200x800 WebP recommended, saved under public/images/).
export const TRANSMISSION_PHOTOS: TransmissionPhoto[] = [];

export type TransmissionPrice = {
  /** Stable key; "repair", "rebuild" and "replace" also feed the comparison cards. */
  key: "diagnostics" | "fluid-service" | "repair" | "rebuild" | "replace";
  /** Label shown to customers. */
  service: string;
  /**
   * Price range or "starting at" figure exactly as it should appear, e.g.
   * "Starting at $149" or "$1,800–$3,500". Leave "" to hide this row.
   */
  price: string;
  /** Optional qualifier, e.g. "Most front-wheel-drive automatics". */
  note?: string;
};

// TODO(owner): fill in `price` for each row (range or "starting at" figure).
// Rows with an empty price are not shown; with all five empty the pricing
// block is hidden entirely.
export const TRANSMISSION_PRICES: TransmissionPrice[] = [
  { key: "diagnostics", service: "Transmission diagnostic", price: "" },
  { key: "fluid-service", service: "Transmission fluid service", price: "" },
  { key: "repair", service: "Targeted repair (solenoid, sensor, leak, valve body)", price: "" },
  { key: "rebuild", service: "Transmission rebuild", price: "" },
  { key: "replace", service: "Transmission replacement", price: "" },
];
