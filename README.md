This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
npm install
cp .env.example .env
npm run dev
npm run sync
# R Complete Command Center — Phase 1

The command center is available at `/command-center` and is isolated from the existing public R Complete Auto Care website. Phase 1 includes authentication, role-ready sessions, the owner dashboard, global search, operational index pages, settings, Prisma models, and realistic seed data.

## Local installation

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and replace the database URL, auth secret, and demo credentials.
3. Create the PostgreSQL database, then run `npm run db:migrate`.
4. Populate sample data with `npm run db:seed`.
5. Start the application with `npm run dev` and open `http://localhost:3000/login`.

The default development login is `owner@rcomplete.com` / `ChangeMe123!`. Change it before deploying.

## Production

Set all values from `.env.example` in Vercel, point `DATABASE_URL` to a managed PostgreSQL database, run migrations as part of the release process, and deploy with the standard Next.js Vercel preset. The dashboard uses Auth.js JWT sessions and all `/command-center/*` routes are protected by the Next.js proxy plus server-side session checks.

## Integration architecture

Tekmetric remains the operational System of Record. The Command Center never scrapes Tekmetric and does not replace its official RingCentral integration. It synchronizes approved data into PostgreSQL for fast executive reporting through five independent adapters:

- `services/integrations/tekmetric` — customers, vehicles, repair orders, estimates, and appointments from endpoints explicitly issued through Tekmetric's approved integration program. No undocumented default URLs are embedded.
- `services/integrations/ringcentral` — official call-log API, including duration, answered/missed status, and voicemail metadata.
- `services/integrations/gmail` — official Gmail API message metadata.
- `services/integrations/google-calendar` — official Calendar Events API with sync-token pagination.
- `services/integrations/quickbooks` — official QuickBooks Online Accounting API customer financial links.

Each adapter owns its credentials, cursor, mapping, persistence, and errors. `POST /api/integrations/sync` executes adapters concurrently with `Promise.allSettled`; failures are recorded per provider and cannot stop successful adapters. `SyncCursor` stores incremental checkpoints, `SyncRun` provides an audit trail, and `IntegrationConnection` exposes independent health state through `GET /api/integrations/health`.

All synchronized activity joins to the canonical local `Customer.id`. The unified profile endpoint at `GET /api/customers/:id/profile` returns vehicles, repair orders, estimates, calls, emails, appointments, used-car purchases, and notes. `GET /api/caller-context?phone=...` provides the RingCentral caller context: customer, vehicles, repair history, lifetime spend, open repair orders, and upcoming appointments.

The retired `/api/tekmetric/inbound-call` route now returns HTTP 410 and performs no Tekmetric writes. Tekmetric's official RingCentral integration remains authoritative for operational call workflows.
