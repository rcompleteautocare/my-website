import { createHash, timingSafeEqual } from "node:crypto";

/**
 * Constant-time string comparison for secrets (bearer tokens, credentials).
 *
 * `a === b` returns as soon as it finds a differing character, so response
 * time leaks how much of a guessed secret is correct. timingSafeEqual does not
 * short-circuit, but it requires equal-length inputs, so both sides are hashed
 * to fixed-length SHA-256 digests first. That also avoids leaking the length.
 *
 * Node.js runtime only (uses node:crypto).
 */
export function safeEqual(a: string, b: string): boolean {
  const digest = (value: string) => createHash("sha256").update(value).digest();
  return timingSafeEqual(digest(a), digest(b));
}
