// Guard for lib/junk-paths.js — run with `npm test` (node --test).
// Ensures malformed-URL paths and scanner probes are classified correctly so
// they get 410'd at the edge (proxy.ts) and kept out of analytics
// (components/SiteTracking.tsx), and that real routes are never misclassified.
import test from "node:test";
import assert from "node:assert/strict";
import {
  isMalformedUrlPath,
  isProbePath,
  isUntrackablePath,
} from "../lib/junk-paths.js";

// Bracket-wrapped / pasted-URL junk — must 410 AND be untrackable.
const MALFORMED = [
  "/[https://www.rcompleteautocare.com]",
  "/[https:/www.rcompleteautocare.com]", // "//" collapsed to "/" by URL parsing
  "/%5Bhttps%3A%2F%2Fwww.rcompleteautocare.com%5D",
  "/%5bhttps://www.rcompleteautocare.com%5d", // lowercase percent-hex
  "/https://www.rcompleteautocare.com",
  "/http://example.com/foo",
  "/services/[http://evil.com]", // bracketed URL mid-path
];

// Template-injection scanner probes — untrackable, but NOT 410 (plain 404).
const PROBES = ["/{ignore}", "/%7Bignore%7D", "/api/{id}", "/%7bfoo%7d"];

// Legitimate routes — must never be flagged by any predicate.
const REAL = [
  "/",
  "/services/brake-repair",
  "/auto-repair-crown-point-in",
  "/chevrolet-silverado-repair-crown-point-in",
  "/repair-guides/honda-check-engine-light",
  "/book",
  "/contact",
  "/warranty-resources/carshield",
];

test("malformed URL paths are detected", () => {
  for (const p of MALFORMED) {
    assert.equal(isMalformedUrlPath(p), true, `expected malformed: ${p}`);
    assert.equal(isUntrackablePath(p), true, `expected untrackable: ${p}`);
  }
});

test("scanner probe paths are untrackable but not malformed-URL", () => {
  for (const p of PROBES) {
    assert.equal(isProbePath(p), true, `expected probe: ${p}`);
    assert.equal(isMalformedUrlPath(p), false, `probe must not be 410'd: ${p}`);
    assert.equal(isUntrackablePath(p), true, `expected untrackable: ${p}`);
  }
});

test("real routes are never flagged", () => {
  for (const p of REAL) {
    assert.equal(isMalformedUrlPath(p), false, `false positive (410): ${p}`);
    assert.equal(isProbePath(p), false, `false positive (probe): ${p}`);
    assert.equal(isUntrackablePath(p), false, `false positive: ${p}`);
  }
});

test("non-string input is handled safely", () => {
  for (const bad of [undefined, null, 42, {}]) {
    assert.equal(isMalformedUrlPath(bad), false);
    assert.equal(isProbePath(bad), false);
    assert.equal(isUntrackablePath(bad), false);
  }
});
