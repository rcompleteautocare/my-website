// Express app + webhook routes.
//   GET  /health                              liveness probe
//   POST /webhooks/tekmetric                  Tekmetric events -> scripts
//   POST /webhooks/ringcentral/inbound-sms    inbound replies (+ handshake)
import express from "express";
import { config } from "./config.js";
import { handleTekmetricWebhook } from "./webhooks/tekmetric.js";
import { handleInboundSms } from "./webhooks/inboundSms.js";

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, shop: config.shop.name });
});

// --- Tekmetric webhook -------------------------------------------------------
app.post("/webhooks/tekmetric", async (req, res) => {
  // Shared-secret check: accept the token from the header or a query param.
  const provided = req.get("X-Webhook-Token") || req.query.token;
  if (config.tekmetricWebhookSecret && provided !== config.tekmetricWebhookSecret) {
    return res.status(401).json({ error: "unauthorized" });
  }

  // Ack fast so Tekmetric doesn't retry; process after responding.
  res.status(202).json({ received: true });
  try {
    const result = await handleTekmetricWebhook(req.body);
    console.log("[tekmetric] ", result.status, result.detail ?? "");
  } catch (err) {
    console.error("[tekmetric] handler error:", err);
  }
});

// --- RingCentral inbound SMS -------------------------------------------------
// RingCentral sends a `Validation-Token` header when it (re)creates the
// subscription; we must echo it back on the response to complete the handshake.
app.post("/webhooks/ringcentral/inbound-sms", async (req, res) => {
  const validationToken = req.get("Validation-Token");
  if (validationToken) {
    res.set("Validation-Token", validationToken);
  }

  // Ack immediately.
  res.status(200).json({ ok: true });

  // A pure validation ping has no message body to process.
  const message = req.body?.body;
  if (!message) return;

  try {
    // VERIFY: inbound SMS payload path. Confirm the text arrives in
    // body.body.subject for your subscription's event type.
    const from = message.from?.phoneNumber || message.from;
    const text = message.subject ?? message.text ?? "";
    if (message.type && message.type !== "SMS") return; // ignore non-SMS events
    if (!from) return;

    const result = await handleInboundSms(from, text);
    console.log(`[inboundSms] ${from}: ${result.status}/${result.action ?? ""}`);
  } catch (err) {
    console.error("[inboundSms] handler error:", err);
  }
});

// Only listen when run directly (allows importing the app in tests).
const invokedDirectly = process.argv[1] && process.argv[1].endsWith("server.js");
if (invokedDirectly) {
  app.listen(config.port, () => {
    console.log(
      `${config.shop.name} messaging service listening on :${config.port}`,
    );
  });
}

export { app };
export default app;
