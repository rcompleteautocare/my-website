// Ambient type for the Google Ads / gtag.js global installed by the base tag.
// Declared here so the phone-conversion listener can call `window.gtag(...)`
// without an `any` cast.
export {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    // Mutual-exclusion state for the tel: conversion listener, shared between
    // the server-rendered bootstrap in app/layout.tsx and
    // components/PhoneConversionListener.tsx. Whichever binds first sets
    // `bound`; the other stands down so the conversion cannot double-fire.
    __rcPhoneConv?: { bound: boolean; lastHref: string | null; lastAt: number };
  }
}
