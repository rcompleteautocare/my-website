export {};

declare global {
  interface Window {
    // Google global site tag (gtag.js). Optional because the script is only
    // loaded when NEXT_PUBLIC_ADS_TAG_ID is set (see app/layout.tsx).
    gtag?: (...args: unknown[]) => void;
  }
}
