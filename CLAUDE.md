@AGENTS.md

# R Complete Auto Care — Website

Marketing + local-SEO website for **R Complete Auto Care**, a diagnostic-first
auto repair shop in Crown Point, Indiana. The site is content-heavy (service
pages, city landing pages, symptom/emergency guides) and optimized for local
search, structured data, and AI crawlers. Two small server-side integrations
(a call-tracking webhook and a weekly Google-rating drift check) run as API
routes.

> ⚠️ **Read `AGENTS.md` first (imported above).** This is Next.js 16 with
> breaking changes vs. older versions. When `node_modules` is installed, consult
> the guides in `node_modules/next/dist/docs/` before writing framework code.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5** (strict), with `allowJs` — the codebase mixes `.tsx`/`.ts`
  and `.jsx`/`.js` (see conventions below)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — but note most components use
  **inline `style={{}}` objects**, not utility classes (see below)
- **@vercel/analytics** + **@vercel/speed-insights** (wired in `app/layout.tsx`)
- **Calendly** (external script) for appointment booking
- Deployed on **Vercel** (`vercel.json` defines the cron; `next.config.ts`
  defines redirects/headers)

## Commands

```bash
npm install            # install deps (also fetches next/dist/docs)
cp .env.example .env.local   # then fill in real values (never commit .env.local)
npm run dev            # local dev server → http://localhost:3000
npm run build          # production build (run before assuming a change compiles)
npm run start          # serve the production build
npm run lint           # ESLint (eslint-config-next: core-web-vitals + typescript)
npm run resolve-place-id     # one-time helper to resolve the Google Place ID
node scripts/seo-audit.mjs   # audit titles/descriptions/canonicals/H1s across pages
ANALYZE=true npm run build    # bundle analysis (@next/bundle-analyzer)
```

There is **no test suite**. Validate changes with `npm run build` and
`npm run lint`. For content/SEO changes, run `node scripts/seo-audit.mjs`
(defaults to the production URL; override with `BASE_URL=http://localhost:3000`).

## Directory layout

```
app/                         # Next.js App Router — every folder is a route
  layout.tsx                 # Root layout: <Nav>, <Footer>, global JSON-LD (LocalBusiness), analytics, Calendly
  page.tsx                   # Homepage
  globals.css                # Global styles
  sitemap.ts                 # Hand-maintained sitemap (MetadataRoute.Sitemap) — ADD NEW ROUTES HERE
  about/  contact/  book/  inspection-checklist/   # Standalone pages
  services/<slug>/page.tsx   # Service pages (diagnostics, brake-repair, engine-repair, ...)
  services/page.tsx          # Services index
  auto-repair-<city>-in/     # City landing pages (crown-point, st-john, schererville, merrillville, cedar-lake)
  <symptom>-crown-point-in/  # Symptom/emergency guides (car-wont-start, car-overheating, transmission-slipping, ...)
  api/
    rating-drift/route.ts            # GET — weekly Google rating drift check (Vercel cron)
    tekmetric/inbound-call/route.ts  # POST — call-tracking webhook → Tekmetric CRM (edge runtime)
  components/                # Page-level components (Nav, Footer, FaqAccordion, FaqSchema, ReviewsWidget, ...)
components/                  # Shared components used across app/ (currently BookButton.jsx)
lib/                         # Config/constants shared across pages (see below) — single sources of truth
public/                      # Static assets + robots.txt, llms.txt, badges/, site-verification file
scripts/                     # Node ESM utilities (resolve-place-id.mjs, seo-audit.mjs)
```

Note the two component directories: `app/components/` (most components) and
top-level `components/` (imported as `@/components/...`). Both are reachable via
the `@/*` path alias. Match whichever the file you're editing already uses.

## `lib/` — single sources of truth

Business-critical constants live in `lib/` and are imported everywhere. Change
the value **here**, not inline in pages:

- `lib/rating.js` — `RATING` (4.9) and `REVIEW_COUNT` (114), the publicly
  displayed Google rating. Used by the root JSON-LD (`aggregateRating`), the Nav
  trust bar, and the drift check. Update when Google changes; the weekly drift
  check will alert if these go stale.
- `lib/place.js` — `PLACE_CID` (public maps link) and `PLACE_ID` (Places API
  resource ID, used only by the drift check).
- `lib/booking.js` — `CALENDLY_URL`, the Calendly scheduling link used by
  `BookButton` and `/book`.

## Key conventions

### File extensions (`.tsx`/`.ts` vs `.jsx`/`.js`)
The project mixes both. TypeScript files use `Metadata`/typed props; JS files use
JSDoc where helpful. There is no migration in progress — **follow the existing
extension of the file/folder you're working in** rather than converting.

### Styling: inline styles, not Tailwind classes
Despite Tailwind v4 being installed, nearly all UI uses inline `style={{}}`
objects with a consistent brand palette:
- `#e63946` / `#f1626f` — brand red/pink (accents, CTAs)
- `#1a1a1a` — near-black (headers, text, dark hero sections)
- `#fff` / `#f9f9f9` / `#f0f0f0` — backgrounds/borders
Responsive behavior (e.g. mobile nav) is done with small inline `<style>` blocks
using media queries and CSS class toggles. Match this pattern for consistency.

### Server vs. client components
Default to **server components** (no directive) — this keeps content in the
server-rendered HTML for crawlers. Add `"use client"` only when a component
needs state/effects/browser APIs (`Nav`, `Contact` form, `BookButton`,
`ReviewsWidget`, `FaqAccordion`).
- Because a `"use client"` page can't export `metadata`, pages like `/contact`
  put their `metadata` in a sibling `layout.tsx`. Follow that pattern when a
  route needs both client interactivity and metadata.

### SEO & metadata (this is the core of the site)
Every page must be discoverable and correctly tagged. When adding a page:
1. Export `metadata` with `title`, `description`, `alternates.canonical`
   (absolute URL), and usually `openGraph`/`twitter`/`robots` — copy the shape
   from an existing service page (e.g. `app/services/brake-repair/page.tsx`).
2. **Add the route to `app/sitemap.ts`** (with a `lastModified` date) — the
   sitemap is hand-maintained, not auto-generated.
3. Consider adding the page to `public/llms.txt` (the AI-crawler index) and to
   the `PATHS` list in `scripts/seo-audit.mjs`.
4. Use exactly one `<h1>`; use the `.speakable` class on TL;DR content
   (referenced by the SpeakableSpecification schema in the root layout).
5. For FAQ content, use `FaqAccordion` (UI) + `FaqSchema` (JSON-LD).
6. All JSON-LD is injected via `<script type="application/ld+json">` with
   `JSON.stringify(...).replace(/</g, "\\u003c")` to escape `<`. Reuse this pattern.

### NAP consistency (Name / Address / Phone)
These must stay identical everywhere (JSON-LD, pages, `llms.txt`, footer):
- **R Complete Auto Care**, 1305 E Summit St, Crown Point, IN 46307
- Phone **(219) 262-2711** (link as `tel:2192622711`)
- Hours: Mon–Fri 8am–6pm, Sat 8am–2pm, Sun closed
- Serving: Crown Point · St. John · Schererville · Merrillville · Cedar Lake

### Redirects & junk paths
Add permanent (308) redirects in `next.config.ts` `redirects()` when a URL
changes or to consolidate variants — e.g. old flat URLs → `/services/<slug>`
and apex → `www`. Don't remove existing ones without checking the sitemap and
inbound links.

Junk/malformed paths (bracket-wrapped URLs, pasted full URLs — e.g.
`/[https://…]`, `/https://…`) are handled in `proxy.ts`, which returns
**410 Gone** so crawlers permanently deindex them (a cleaner signal than a 308
to `/`, which reads as a soft 404). Widen the checks there if new junk-path
variants show up in logs.

## API routes (server-side integrations)

Both routes fail safe and are gated by environment variables:

- **`GET /api/rating-drift`** (`app/api/rating-drift/route.ts`) — `force-dynamic`,
  never cached. Called by Vercel Cron (`vercel.json`: Mondays 13:00 UTC).
  Authorized via `Bearer ${CRON_SECRET}`. Fetches live Google rating from the
  Places API and compares against `lib/rating.js`; on drift (rating gap ≥ 0.05
  or count mismatch) POSTs an alert to `DRIFT_WEBHOOK_URL`. It **never** writes
  the live value back — a human updates `lib/rating.js`. `PLACES_API_KEY` is
  **required** — the route returns a 500 if it's missing (so the weekly cron
  fails loudly rather than silently). If only `PLACE_ID` is unconfigured, the
  route skips gracefully.
- **`POST /api/tekmetric/inbound-call`** (`runtime = "edge"`) — call-tracking
  webhook. **Disabled unless `TEKMETRIC_ENABLED === "true"`** (returns a skip).
  Requires `Bearer ${INTERNAL_KEY}`. Searches/creates a Tekmetric customer by
  phone and appends a tagged call note. Only trusts an exact phone match.

Env vars are documented in `.env.example`: `INTERNAL_KEY`, `TEKMETRIC_*`,
`PLACES_API_KEY`, `PLACES_PLACE_ID` (optional override), `CRON_SECRET`,
`DRIFT_WEBHOOK_URL`. Put real values in `.env.local` (gitignored) and in Vercel
project env for production.

## Git workflow

- Work happens on feature branches; changes land on `main` via PR (see recent
  history — PRs are squash/merge-titled with `(#NN)`).
- Do **not** open a pull request unless explicitly asked.
- There is no CI test gate configured in-repo — run `npm run build` and
  `npm run lint` locally before pushing.
