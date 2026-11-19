@AGENTS.md

# R Complete Auto Care — Website

Marketing + local-SEO website for **R Complete Auto Care**, a diagnostic-first
auto repair shop in Crown Point, Indiana. The site is content-heavy (service
pages, city landing pages, symptom/emergency guides, repair guides, warranty
resources) and optimized for local search, structured data, and AI crawlers.

The same Next.js app also hosts the **Command Center**, a private, login-gated
operations dashboard at `/command-center` backed by Postgres (Prisma) and
next-auth, plus a handful of server-side API routes (see below).

> ⚠️ **Read `AGENTS.md` first (imported above).** This is Next.js 16 with
> breaking changes vs. older versions. When `node_modules` is installed, consult
> the guides in `node_modules/next/dist/docs/` before writing framework code.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript 5** (strict), with `allowJs` — the codebase mixes `.tsx`/`.ts`
  and `.jsx`/`.js` (see conventions below)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — but note most public-site
  components use **inline `style={{}}` objects**, not utility classes (see
  below). The Command Center is the exception: it uses Tailwind classes.
- **@vercel/analytics** + **@vercel/speed-insights**, plus gtag (Google Ads /
  GA4) loaded by `components/SiteTracking.tsx`
- **Tekmetric Online Booking** (modal script, loaded on `/book` only) for appointment booking
- **Prisma 6 + PostgreSQL** (`prisma/schema.prisma`, client via `lib/prisma.ts`)
  — used only by the Command Center and the integration sync
- **next-auth v5 (Auth.js)** credentials login (`auth.ts`) for the Command Center
- Deployed on **Vercel** (`vercel.json` defines the crons; `next.config.ts`
  defines redirects/headers)

## Commands

```bash
npm install            # install deps (also fetches next/dist/docs)
cp .env.example .env.local   # then fill in real values (never commit .env.local)
npm run dev            # local dev server → http://localhost:3000
npm run build          # prisma generate + production build
npm run start          # serve the production build
npm run lint           # ESLint + tracked-path length check
npm test               # node --test scripts/*.test.mjs (unit tests)
npx tsc --noEmit       # typecheck
npm run check:sitemap  # python scripts/check-sitemap-coverage.py — every route is in the sitemap
npm run hash-password  # generate DEMO_ADMIN_PASSWORD_HASH for the Command Center login
npm run resolve-place-id     # one-time helper to resolve the Google Place ID
node scripts/seo-audit.mjs   # audit titles/descriptions/canonicals/H1s across pages
ANALYZE=true npm run build    # bundle analysis (@next/bundle-analyzer)
```

**Tests and CI exist.** `npm test` runs the Node test runner over
`scripts/*.test.mjs` (junk-path classifier, login throttle). GitHub Actions
(`.github/workflows/ci.yml`) runs lint, build, `npx tsc --noEmit`, `npm test`
and the sitemap coverage check on every pull request. Run them locally first
too. Before pushing, all of these should pass: `npm run lint`,
`npx tsc --noEmit`, `npm test`, `npm run build`,
`python scripts/check-sitemap-coverage.py`. For content/SEO changes, also run
`node scripts/seo-audit.mjs` (defaults to the production URL; override with
`BASE_URL=http://localhost:3000` against `npm run start`).

Never skip, disable or weaken a check to get a green run.

## Directory layout

```
app/                         # Next.js App Router — every folder is a route
  layout.tsx                 # Root layout: <Nav>, <main>, <Footer>, global JSON-LD (AutoRepair/LocalBusiness + WebPage), analytics
  page.tsx                   # Homepage
  not-found.tsx              # Custom 404 (noindex is added by Next.js)
  globals.css                # Global styles (incl. the FAQ accordion)
  sitemap.ts                 # Hand-maintained sitemap (MetadataRoute.Sitemap) — ADD NEW ROUTES HERE
  llms.txt/route.ts          # Generates /llms.txt (the AI-crawler index)
  about/  contact/  book/  financing/  inspection-checklist/   # Standalone pages
  services/<slug>/page.tsx   # Service pages (diagnostics, brake-repair, engine-repair, ...)
  services/page.tsx          # Services index
  auto-repair-<city>-in/     # City landing pages — all ten service-area towns (see NAP section)
  <make>-repair-crown-point-in/          # Make hubs, generated from lib/make-pages.ts and lib/honda-pages.ts
  <make>-<model>-repair-crown-point-in/  # Vehicle model pages (chevrolet-silverado, ford-f-150) — full make name
  <symptom>-crown-point-in/  # Symptom/emergency guides (car-wont-start, car-overheating, transmission-slipping, ...)
  repair-guides/[guide]/     # Vehicle repair guides, content in lib/repair-guides.ts
  warranty-resources/[provider]/  # Warranty provider guides, content in lib/warranty-providers.ts
  login/                     # Command Center sign-in (noindex)
  command-center/            # Private dashboard (noindex, auth required)
  api/                       # Route handlers — see "API routes"
  components/                # Page-level components (Nav, Footer, FaqAccordion, FaqSchema, ServiceFaqHub, CityPage, ...)
components/                  # Shared components (BookButton, SiteTracking, command-center/, ui/)
lib/                         # Config/constants/content shared across pages (see below) — single sources of truth
services/integrations/       # Command Center sync adapters (Tekmetric, RingCentral, QuickBooks, Gmail, Google Calendar)
prisma/                      # schema.prisma + seed.ts
auth.ts                      # next-auth configuration (credentials login)
proxy.ts                     # Request proxy (Next 16's replacement for middleware.ts) — see below
public/                      # Static assets + robots.txt, badges/, og.png, site-verification file
scripts/                     # Node ESM utilities, *.test.mjs unit tests, check-sitemap-coverage.py
```

Note the two component directories: `app/components/` (most components) and
top-level `components/` (imported as `@/components/...`). Both are reachable via
the `@/*` path alias. Match whichever the file you're editing already uses.

Vehicle model pages use the slug `/<full-make>-<model>-repair-crown-point-in`
(e.g. `/chevrolet-silverado-repair-crown-point-in`), matching the make-hub slug
(`/chevrolet-repair-crown-point-in`). Use the **full make name** — not a
shortened form like `chevy`.

## `lib/` — single sources of truth

Business-critical constants live in `lib/` and are imported everywhere. Change
the value **here**, not inline in pages:

- `lib/rating.js` — `RATING` (4.9) and `REVIEW_COUNT` (128), the publicly
  displayed Google rating. Used by the root JSON-LD (`aggregateRating`), the Nav
  trust bar, and the drift check. Update when Google changes; the weekly drift
  check will alert if these go stale. (The numbers quoted here go stale too —
  `lib/rating.js` is the authority.)
- `lib/business.js` — `SERVICE_AREAS`, `CITY_PAGE_HREFS`, `AREA_SERVED_SCHEMA`,
  `WARRANTY_PROVIDERS`, `SERVICE_TYPES`, `OWNER_EMAIL`, `SHOP_WARRANTY`,
  `SAME_DAY_COPY`, and the experience claim (`EXPERIENCE_CLAIM`,
  `EXPERIENCE_SHORT` — see "Experience claim" below).
- `lib/place.js` — `PLACE_CID` (public maps link) and `PLACE_ID` (Places API
  resource ID, used only by the drift check).
- `lib/booking.js` — `TEKMETRIC_BOOKING_SHOP_ID`, the Tekmetric Online Booking
  shop ID used by the scheduler on `/book` (`BookButton` links to `/book`).
- `lib/seo.ts` — site-wide Open Graph/Twitter defaults (`/og.png`, 1200x630) and
  `socialMetadata()` for page-specific share cards.
- `lib/service-faqs.ts` — the shared service FAQ questions and the per-page
  list of shared topics each service page omits.
- `lib/repair-guides.ts`, `lib/warranty-providers.ts`, `lib/transmission-page.ts`
  — page content, including owner TODO fields (see "Owner-supplied content").
- `lib/junk-paths.js` — junk/malformed path classifier shared by `proxy.ts` and
  analytics.

## Key conventions

### File extensions (`.tsx`/`.ts` vs `.jsx`/`.js`)
The project mixes both. TypeScript files use `Metadata`/typed props; JS files use
JSDoc where helpful. There is no migration in progress — **follow the existing
extension of the file/folder you're working in** rather than converting.

### Styling: inline styles, not Tailwind classes
Despite Tailwind v4 being installed, nearly all public-site UI uses inline
`style={{}}` objects with a consistent brand palette:
- `#e63946` / `#f1626f` — brand red/pink (accents, CTAs)
- `#1a1a1a` — near-black (headers, text, dark hero sections)
- `#fff` / `#f9f9f9` / `#f0f0f0` — backgrounds/borders
Responsive behavior (e.g. mobile nav) is done with small inline `<style>` blocks
using media queries and CSS class toggles. Match this pattern for consistency.
(Command Center files under `app/command-center` and `components/command-center`
use Tailwind classes; match those there.)

### Server vs. client components
Default to **server components** (no directive) — this keeps content in the
server-rendered HTML for crawlers. Add `"use client"` only when a component
needs state/effects/browser APIs (`Nav`, `Contact` form, `BookButton`,
`ReviewsWidget`).
- `FaqAccordion` is a **server component** built on native
  `<details>`/`<summary>`. Keep it that way: an earlier client version rendered
  answers as `<p hidden>`, which hid every answer from crawlers and no-JS users.
- Because a `"use client"` page can't export `metadata`, pages like `/contact`
  put their `metadata` in a sibling `layout.tsx`. Follow that pattern when a
  route needs both client interactivity and metadata.
- The root layout already renders `<main>`. Pages must not render another
  `<main>`; use `<div>`, `<section>` or `<article>`.

### SEO & metadata (this is the core of the site)
Every page must be discoverable and correctly tagged. When adding a page:
1. Export `metadata` with `title` (60 characters or fewer), `description` (160
   or fewer, with the keyword and city), `alternates.canonical`, and usually
   `openGraph`/`twitter`/`robots` — copy the shape from an existing service page
   (e.g. `app/services/brake-repair/page.tsx`) or use `socialMetadata()` from
   `lib/seo.ts`. A page's `openGraph` replaces the layout default entirely
   (Next.js does not deep-merge it), so include site name, locale and image.
2. **Add the route to `app/sitemap.ts`** with a `lastModified` date equal to the
   page's real last content change (`git log -1 --format=%cs -- <file>`). The
   sitemap is hand-maintained; `scripts/check-sitemap-coverage.py` fails if a
   route folder is missing from it.
3. Add the page to `app/llms.txt/route.ts` (the AI-crawler index) and to the
   `PATHS` list in `scripts/seo-audit.mjs`.
4. Use exactly one `<h1>`; use the `.speakable` class on TL;DR content. The
   root layout emits a `WebPage` JSON-LD node whose `speakable` property points
   at `h1` and `.speakable` (a standalone `SpeakableSpecification` is not valid).
5. For FAQ content, use `FaqAccordion` (UI) + `FaqSchema` (JSON-LD), both fed
   from the **same array**, so the schema always matches what is visible. Emit
   **exactly one** `FAQPage` per page. On service pages, pass the page's own
   `FAQS` to `<ServiceFaqHub slug faqs={FAQS} />`, which merges in the shared
   questions and renders the single FAQ section and single `FAQPage` block; do
   not add another FAQ list or inline `FAQPage` JSON-LD there.
   `/services/transmission-repair` and `/transmission-slipping-crown-point-in`
   must not share FAQ questions.
6. All JSON-LD is injected via `<script type="application/ld+json">` with
   `JSON.stringify(...).replace(/</g, "\\u003c")` to escape `<`. Reuse this pattern.

### Experience claim
The one shop-level experience claim is **"Diagnosing and repairing vehicles
since 1989"** (short form where space is tight: **"Since 1989"**). Use
`EXPERIENCE_CLAIM` / `EXPERIENCE_SHORT` from `lib/business.js`. Never write
"25+ years", "35+ years", "combined experience", "family experience" or
"decades of experience" for the shop. 1989 is when lead technician Dave started
working on vehicles, not when the business opened (current ownership dates from
April 2026), so never phrase it as business tenure ("in business since 1989").
Individual bios on `/about` (Dave since 1989, ASE certified since 1993; Dave R
15 years) are separate and stay as written.

### Owner-supplied content (TODO fields)
Never invent facts, reviews, names, prices or photos. Where real content has to
come from the owner, there is a typed, clearly marked TODO field whose section
renders nothing while it is empty:
- `lib/transmission-page.ts` — Google reviews, job photos and prices for
  `/services/transmission-repair`.
- `lib/warranty-providers.ts` — the `verified` block per provider (administrator,
  claims phone/hours/URL, shop notes). Everything else in that file is general
  claims-process guidance and must not state what a named company covers,
  charges or requires.

### Asset filenames (`public/`)
Keep every tracked path — filenames in `public/` especially — **under 100
characters**, in short kebab-case, with a real extension. Windows caps a full
path at 260 chars and the clone directory eats into that budget, so an
over-long name makes `git clone` fail outright on Windows (checkout aborts;
the repo lands half-populated). Put descriptive text in the `alt` attribute,
never in the filename. `npm run lint` enforces this via
`scripts/check-path-lengths.mjs`. When renaming an existing asset, update every
reference (pages, JSON-LD `image` fields, OG/twitter metadata, `llms.txt`) and
add a 308 redirect per the section below if the old path is live.

### NAP consistency (Name / Address / Phone)
These must stay identical everywhere (JSON-LD, pages, `llms.txt`, footer):
- **R Complete Auto Care**, 1305 E Summit St, Crown Point, IN 46307
- Phone **(219) 262-2711** (link as `tel:2192622711`)
- Hours: Mon–Fri 8am–6pm, Sat 8am–2pm, Sun closed
- Serving (from `SERVICE_AREAS` in `lib/business.js`, in this order): Crown Point · St. John · Schererville · Merrillville · Cedar Lake · Dyer · Lowell · Hobart · Munster · Valparaiso. All ten have a landing page (`/auto-repair-<city>-in`, listed in `CITY_PAGE_HREFS`), so footer and homepage lists link every town.

City pages for Dyer, Munster and Valparaiso share the `CityPage` layout
component (`app/components/CityPage.tsx`) with all copy in the page file; the
older seven are hand-built pages. Either way, each city page needs its own copy
(real route and drive time, local roads, city-specific FAQs). Do not clone
another city's text and swap the name.

### Redirects, headers & junk paths
Add permanent (308) redirects in `next.config.ts` `redirects()` when a URL
changes or to consolidate variants — e.g. old flat URLs → `/services/<slug>`
and apex → `www`. Don't remove existing ones without checking the sitemap and
inbound links.

`next.config.ts` `headers()` sends baseline security headers on every route
(HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
`Permissions-Policy`), and `poweredByHeader` is off. There is deliberately no
enforcing Content-Security-Policy: the site loads Tekmetric booking, Google
Maps, gtag, Formspree and Vercel analytics. If CSP is ever added, ship it as
`Content-Security-Policy-Report-Only` first and confirm those still load.

### `proxy.ts`
`proxy.ts` is Next 16's request proxy (the file formerly called
`middleware.ts`). It does two things:
1. **Junk paths, all routes.** Bracket-wrapped URLs and pasted full URLs (e.g.
   `/[https://…]`, `/https://…`), classified by `lib/junk-paths.js`, get
   **410 Gone** so crawlers permanently deindex them (a cleaner signal than a
   308 to `/`, which reads as a soft 404). Widen the checks in
   `lib/junk-paths.js` if new variants show up in logs; the same classifier
   keeps them out of analytics.
2. **Auth, `/command-center` only.** Unauthenticated requests are redirected to
   `/login?callbackUrl=…`. Auth must **not** wrap every request: doing so made
   Auth.js set `authjs.csrf-token` / `authjs.callback-url` cookies on public
   pages for anonymous visitors and crawlers. `GET /` must set no cookies.

## Command Center

Private dashboard at `/command-center` (customers, repair orders, used cars,
reports, settings). Not part of the public site: `noindex` via metadata and
`X-Robots-Tag`, excluded from the sitemap.

- **Auth** (`auth.ts`): next-auth credentials provider with JWT sessions. The
  admin account comes from `DEMO_ADMIN_EMAIL` and `DEMO_ADMIN_PASSWORD_HASH`, a
  bcrypt hash generated with `npm run hash-password`. No plaintext password is
  stored or compared. Sign-in fails closed when either variable is missing or
  the hash is malformed, and failed attempts are throttled per IP and per email
  (`lib/login-throttle.js`; in-memory, so per server instance).
  In `.env.local` every `$` in the hash must be escaped as `\$` because Next.js
  expands `$` in `.env` files; in Vercel paste the raw hash.
- **Access checks**: the layout and `proxy.ts` both require a session, but
  server actions and route handlers are separately reachable, so each one
  checks `auth()` itself (see `settings/actions.ts`, `app/api/search`).
- **Data**: Prisma models in `prisma/schema.prisma` (Postgres, `DATABASE_URL`).
  Do not return demo or placeholder records from an action or API route: query
  Prisma, and return an empty result or an honest error when there is no data
  or the database is unreachable. Never report "saved" unless the write
  succeeded. (Some dashboard pages still render sample data from
  `lib/dashboard-data.ts`.)
- **Integrations** (`services/integrations/`): sync adapters for Tekmetric,
  RingCentral, QuickBooks, Gmail and Google Calendar write into Prisma.

## API routes

All fail safe and are gated by a secret or a session:

- **`GET /api/rating-drift`** — Vercel Cron, Mondays 13:00 UTC (`vercel.json`).
  `force-dynamic`. Authorized via `Bearer ${CRON_SECRET}`, compared in constant
  time. Fetches the live Google rating from the Places API and compares it with
  `lib/rating.js`; on drift (rating gap ≥ 0.05 or count mismatch) POSTs an alert
  to `DRIFT_WEBHOOK_URL`. It **never** writes the live value back — a human
  updates `lib/rating.js`. `PLACES_API_KEY` is **required** (500 if missing, so
  the cron fails loudly). If only `PLACE_ID` is unconfigured, the route skips.
- **`GET|POST /api/integrations/sync`** — Vercel Cron, daily 11:00 UTC. Node
  runtime, up to 300s. Authorized via `Bearer` `INTEGRATION_SYNC_SECRET` or
  `CRON_SECRET`. Runs every integration adapter and reports
  healthy/partial/unavailable.
- **`GET /api/integrations/health`**, **`GET /api/search`**,
  **`GET /api/caller-context`**, **`GET /api/customers/[id]/profile`** —
  Command Center data endpoints. Session required (401 otherwise).
- **`POST /api/webhooks/formspree`** — Formspree webhook, authorized by the
  `x-formspree-secret` header (`FORMSPREE_WEBHOOK_SECRET`).
- **`/api/auth/[...nextauth]`** — next-auth handlers.
- **`POST /api/tekmetric/inbound-call`** — **retired.** Kept as a tombstone that
  returns **410 Gone** for legacy callers. Call activity is handled by
  Tekmetric's own RingCentral integration and the Command Center RingCentral
  sync adapter. Do not revive it.

Env vars are documented in `.env.example`. Put real values in `.env.local`
(gitignored) and in the Vercel project env for production. The Command Center
needs `DATABASE_URL`, `AUTH_SECRET`, `AUTH_TRUST_HOST`, `DEMO_ADMIN_EMAIL` and
`DEMO_ADMIN_PASSWORD_HASH`; the crons need `CRON_SECRET` and `PLACES_API_KEY`.

## Git workflow

- Work happens on feature branches; changes land on `main` via PR (see recent
  history — PRs are squash/merge-titled with `(#NN)`).
- Do **not** open a pull request unless explicitly asked.
- CI (`.github/workflows/ci.yml`) runs lint, build, typecheck, unit tests and
  the sitemap coverage check on pull requests. Run the full local list in
  "Commands" before pushing.
