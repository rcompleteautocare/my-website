# Tekmetric Estimate Agent Prompts

Copy-paste prompts for driving Tekmetric with a browser agent (Codex + the
ChatGPT Chrome Extension). Two workflows:

- **[Workflow A](#workflow-a--create-an-estimate-on-an-existing-ro)** — create an
  estimate on an **existing RO** from a typed request.
- **[Workflow B](#workflow-b--build-a-work-sheet-from-an-intake-photo)** — build
  an estimate **work sheet from an intake-sheet photo** (extract → triage →
  build sheet), before any Tekmetric entry.

## Shared setup (do this first)

- Sign in to **Tekmetric** in Google Chrome (Shop ID **17529**).
- Install and enable the **ChatGPT Chrome Extension**. The agent can open its
  own Tekmetric tab in the signed-in profile if no tab is shared.

## Safety rules (apply to every prompt below)

- **Never advance status.** Do not send the estimate to the customer, approve
  work, order parts, post the RO, or collect payment unless I explicitly ask.
- **Never touch a locked RO.** Do not unpost, reopen, or edit a paid, posted,
  completed, or previously approved RO without my explicit permission.
- **Stop and ask when unsure.** If a service is ambiguous, or there are multiple
  materially different parts/pricing choices, stop and ask before saving.
- **Verify before editing.** Confirm the customer and vehicle match; check for
  existing jobs first so nothing is duplicated.

---

## Workflow A — Create an estimate on an existing RO

### Full prompt

```text
Create an estimate in Tekmetric using my signed-in Google Chrome session (Shop ID 17529).

Repair order: RO #[RO NUMBER]
Customer: [CUSTOMER NAME]
Vehicle: [YEAR MAKE MODEL/TRIM]
Requested services:
- [SERVICE 1]
- [SERVICE 2]
- [SERVICE 3]

Open the existing repair order and confirm the customer and vehicle match before editing; if they don't, stop and ask me. Check existing jobs first so nothing is duplicated — if a job already covers a requested service, reuse or adjust it instead of adding a second one. Use our shop's existing canned jobs, labor rates, parts sources, pricing, fees, and estimate conventions when available. If a service is ambiguous or has multiple materially different parts/pricing options, stop and ask me before saving.

Do not unpost, reopen, or change a paid, posted, completed, or previously approved repair order without my explicit permission. Do not send the estimate to the customer, approve work, order parts, post the RO, collect payment, or otherwise advance its status unless I explicitly request that action.

After creating the estimate, verify each requested job, its parts, labor hours, prices, taxes, fees, discounts, and the estimate total. Leave the completed estimate open in Chrome and report a concise summary of the jobs and total.
```

### Short form

For routine requests:

```text
In Tekmetric (Shop 17529), create an estimate on RO #[RO NUMBER] for [CUSTOMER]'s [VEHICLE]: [SERVICES]. Confirm the customer and vehicle match, use existing shop canned jobs and pricing, avoid duplicates, and verify the jobs and total. Do not send, approve, order parts, post, unpost, or alter a paid/posted RO without asking me. Leave the estimate open in Chrome and summarize it.
```

### Example

```text
In Tekmetric (Shop 17529), create an estimate on RO #4109 for Hannah Glaze's 2011 Honda CR-V SE: tune-up, A/C compressor, and oil change. Confirm the customer and vehicle match, use existing shop canned jobs and pricing, avoid duplicates, and verify the jobs and total. Do not send, approve, order parts, post, unpost, or alter a paid/posted RO without asking me. Leave the estimate open in Chrome and summarize it.
```

---

## Workflow B — Build a work sheet from an intake photo

Use this to turn a customer intake sheet **photo** into a structured build sheet
you can hand to Tekmetric entry. It extracts and prepares only — it does **not**
enter anything until you confirm.

```text
You are building a Tekmetric estimate work sheet from a customer intake photo for R Complete Auto Care (Tekmetric Shop ID 17529). An intake sheet image is attached. Extract, structure, and prepare — do not invent anything not visible.

STEP 1 — EXTRACT (from the image only)
Pull every field you can read:
- Customer: first/last name, phone, email, address
- Vehicle: year, make, model, VIN, license plate, mileage, color
- Customer concerns/complaints (verbatim, numbered C1, C2, ...)
- Notes: warranty company, drop-off vs. waiter, authorized amount, preferred contact method
Rules:
- Transcribe phone as digits only (e.g. 2193081934).
- If a VIN is present, decode it and cross-check year/make/model against what's written; flag any mismatch.
- Mark unreadable or missing fields as [ILLEGIBLE] or [MISSING] — never guess names, numbers, or VIN characters. For low-confidence characters, show alternatives like [8 or B].

STEP 2 — TRIAGE EACH CONCERN
For each concern, output:
- Concern (customer's words, cleaned up)
- Likely system(s) involved
- Recommended starting job: the matching diagnostic entry from our canned jobs catalog (check engine light diag, electrical diag, no-start diag, brake inspection, A/C performance test, etc.). We are diagnostic-first — default to a DIAGNOSTIC line; do not pre-add repair jobs before diagnosis unless the intake explicitly authorizes a specific repair (e.g. customer wrote "oil change" or "replace battery").
- Tech notes: what to check first, and any pattern-failure knowledge for this year/make/model.

STEP 3 — OUTPUT THE ESTIMATE BUILD SHEET
Format as a copy-paste block in this exact order (matches Tekmetric entry flow):

CUSTOMER SEARCH: <phone digits>   (exact match only — if no exact match, create a new customer with the fields below)
NEW CUSTOMER: <first> | <last> | <phone> | <email>
VEHICLE: <year> <make> <model> | VIN <vin> | Plate <plate> | Miles <mileage>
RO CONCERNS:
  C1: <verbatim concern>
  C2: ...
JOBS TO ADD (from canned catalog):
  J1: <canned job name> — links to C1
  J2: ...
NOTES FOR ADVISOR: <warranty info, waiter/drop-off, auth limit, callback preference, VIN mismatches, illegible fields needing confirmation>

STEP 4 — CONFIRM BEFORE ANY AUTOMATION
List every [ILLEGIBLE], [MISSING], or mismatch item as a question for the advisor. Do not proceed to any browser automation or Tekmetric entry until those are confirmed. Never state or write labor rates or prices anywhere in the output — pricing comes from the Tekmetric labor/parts matrix at entry time.
```
