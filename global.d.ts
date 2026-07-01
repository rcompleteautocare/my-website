// Ambient type for the Google Ads / gtag.js global installed by the base tag.
// Declared here so the phone-conversion listener can call `window.gtag(...)`
// without an `any` cast.
export {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
