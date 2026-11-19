import { test } from "node:test";
import assert from "node:assert/strict";
import { createLoginThrottle } from "../lib/login-throttle.js";

test("blocks a key once it reaches the failure limit", () => {
  const throttle = createLoginThrottle();
  for (let i = 0; i < 4; i += 1) throttle.recordFailure("email:a@example.com");
  assert.equal(throttle.isBlocked("email:a@example.com", 5), false);
  throttle.recordFailure("email:a@example.com");
  assert.equal(throttle.isBlocked("email:a@example.com", 5), true);
});

test("keys are tracked independently", () => {
  const throttle = createLoginThrottle();
  for (let i = 0; i < 5; i += 1) throttle.recordFailure("ip:203.0.113.1");
  assert.equal(throttle.isBlocked("ip:203.0.113.1", 5), true);
  assert.equal(throttle.isBlocked("ip:203.0.113.2", 5), false);
});

test("the block lifts when the window expires", () => {
  let t = 1_000;
  const throttle = createLoginThrottle({ now: () => t, windowMs: 60_000 });
  for (let i = 0; i < 5; i += 1) throttle.recordFailure("k");
  assert.equal(throttle.isBlocked("k", 5), true);
  t += 59_999;
  assert.equal(throttle.isBlocked("k", 5), true);
  t += 1;
  assert.equal(throttle.isBlocked("k", 5), false);
  assert.equal(throttle.size(), 0);
});

test("clear() resets a key after a successful sign-in", () => {
  const throttle = createLoginThrottle();
  for (let i = 0; i < 5; i += 1) throttle.recordFailure("k");
  throttle.clear("k");
  assert.equal(throttle.isBlocked("k", 5), false);
});
