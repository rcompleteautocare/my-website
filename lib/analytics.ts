type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window { gtag?: (command: 'event', name: string, params?: EventParams) => void }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window !== 'undefined') window.gtag?.('event', name, params)
}
