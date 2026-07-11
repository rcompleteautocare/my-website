// `window.gtag` is declared ambiently in global.d.ts (installed by the base
// Google tag). We call the standard gtag `event` command through it.
type EventParams = Record<string, string | number | boolean>

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window !== 'undefined') window.gtag?.('event', name, params)
}
