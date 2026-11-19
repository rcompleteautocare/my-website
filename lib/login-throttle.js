// Basic sign-in attempt throttling for the Command Center login (auth.ts).
//
// Failed attempts are counted per key (one key per client IP, one per email)
// inside a fixed window. Once a key reaches its limit, further attempts are
// refused until the window expires, without the password ever being checked.
//
// LIMITATION: state lives in this module's memory. On Vercel each serverless
// instance has its own copy and it resets on cold start, so this slows down
// casual guessing but is not a hard guarantee. For a strict limit, back this
// with a shared store (Vercel KV / Upstash / the Postgres database) or enable
// a Vercel Firewall rate-limit rule for POST /api/auth/callback/credentials.

export const WINDOW_MS = 15 * 60 * 1000;
export const MAX_FAILURES_PER_EMAIL = 5;
export const MAX_FAILURES_PER_IP = 20;
const MAX_TRACKED_KEYS = 5000;

/**
 * @param {{ now?: () => number, windowMs?: number }} [options]
 */
export function createLoginThrottle(options = {}) {
  const now = options.now ?? Date.now;
  const windowMs = options.windowMs ?? WINDOW_MS;
  /** @type {Map<string, { count: number, resetAt: number }>} */
  const attempts = new Map();

  function prune() {
    const t = now();
    for (const [key, entry] of attempts) {
      if (entry.resetAt <= t) attempts.delete(key);
    }
    // Hard cap so a flood of unique keys cannot grow memory without bound.
    // Map iterates in insertion order, so this drops the oldest keys first.
    for (const key of attempts.keys()) {
      if (attempts.size < MAX_TRACKED_KEYS) break;
      attempts.delete(key);
    }
  }

  /** @param {string} key */
  function live(key) {
    const entry = attempts.get(key);
    if (!entry) return undefined;
    if (entry.resetAt <= now()) {
      attempts.delete(key);
      return undefined;
    }
    return entry;
  }

  return {
    /**
     * True when `key` has used up its failures for the current window.
     * @param {string} key
     * @param {number} limit
     */
    isBlocked(key, limit) {
      const entry = live(key);
      return Boolean(entry && entry.count >= limit);
    },
    /** @param {string} key */
    recordFailure(key) {
      const entry = live(key);
      if (entry) {
        entry.count += 1;
        return;
      }
      if (attempts.size >= MAX_TRACKED_KEYS) prune();
      attempts.set(key, { count: 1, resetAt: now() + windowMs });
    },
    /** @param {string} key */
    clear(key) {
      attempts.delete(key);
    },
    /** Number of keys currently tracked (for tests). */
    size() {
      return attempts.size;
    },
  };
}

// Process-wide instance used by auth.ts.
export const loginThrottle = createLoginThrottle();
