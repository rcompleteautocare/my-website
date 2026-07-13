# Tekmetric Estimate Agent Prompt

Use the following prompt whenever you want Codex to create an estimate in Tekmetric:

```text
Create an estimate in Tekmetric using my signed-in Google Chrome session.

Repair order: RO #[RO NUMBER]
Customer: [CUSTOMER NAME]
Vehicle: [YEAR MAKE MODEL/TRIM]
Requested services:
- [SERVICE 1]
- [SERVICE 2]
- [SERVICE 3]

Open the existing repair order and confirm that the customer and vehicle match before editing. Check for existing jobs first so nothing is duplicated. Use our shop's existing canned jobs, labor rates, parts sources, pricing, fees, and estimate conventions when available. If a requested service is ambiguous or there are multiple materially different parts/pricing choices, stop and ask me before saving.

Do not unpost, reopen, or change a paid, posted, completed, or previously approved repair order without my explicit permission. Do not order parts, send the estimate to the customer, approve work, post the RO, collect payment, or otherwise advance its status unless I explicitly request that action.

After creating the estimate, verify each requested job, parts, labor hours, prices, taxes, fees, discounts, and the estimate total. Leave the completed estimate open in Chrome and report a concise summary of the jobs and total.
```

## Short Form

For routine requests, this shorter prompt is enough:

```text
In Tekmetric, create an estimate on RO #[RO NUMBER] for [CUSTOMER]'s [VEHICLE]: [SERVICES]. Use existing shop canned jobs and pricing, avoid duplicates, and verify the customer, vehicle, jobs, and total. Do not send, approve, order parts, post, unpost, or alter a paid/posted RO without asking me. Leave the estimate open in Chrome and summarize it.
```

## Example

```text
In Tekmetric, create an estimate on RO #4109 for Hannah Glaze's 2011 Honda CR-V SE: tune-up, A/C compressor, and oil change. Use existing shop canned jobs and pricing, avoid duplicates, and verify the customer, vehicle, jobs, and total. Do not send, approve, order parts, post, unpost, or alter a paid/posted RO without asking me. Leave the estimate open in Chrome and summarize it.
```

Before starting, sign in to Tekmetric in Google Chrome and make sure the ChatGPT Chrome Extension is installed and enabled. Codex can create its own Tekmetric tab in the signed-in Chrome profile if an existing tab is not shared.
