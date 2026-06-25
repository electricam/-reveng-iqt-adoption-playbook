# RevEng Government Adoption Playbook

Interview dashboard demo showing how a venture-backed cyber company can be mapped to concrete government mission owners, acquisition pathways, and named stakeholder targets.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- `lucide-react`
- Static TypeScript data in [`data/playbook.ts`](/Users/samkoralnik/Documents/Codex/IQT/data/playbook.ts)

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Current dashboard sections

- Hero / executive summary
- Company snapshot
- Capability-to-mission map
- Government opportunity matrix
- Live & Future Acquisition Pathways
- Stakeholder map

## Current interaction model

- The acquisition section uses a compact horizontal opportunity tracker.
- Clicking an opportunity tile opens one shared detail panel below.
- The default expanded opportunity is `CISA Cyber Technology Services`.
- Every acquisition record includes a direct source link.
- The stakeholder section is focused on named personnel, not abstract org boxes.

## Edit the dashboard data

All demo content lives in:

- [`data/playbook.ts`](/Users/samkoralnik/Documents/Codex/IQT/data/playbook.ts)

This includes:

- hero KPIs
- company snapshot
- capability-to-mission map
- opportunity matrix
- acquisition opportunities with source-backed links
- stakeholder map

## Key UI files

- Main page layout: [`app/page.tsx`](/Users/samkoralnik/Documents/Codex/IQT/app/page.tsx)
- Acquisition tracker: [`components/acquisition-tracker.tsx`](/Users/samkoralnik/Documents/Codex/IQT/components/acquisition-tracker.tsx)
- Stakeholder cards: [`components/stakeholder-network.tsx`](/Users/samkoralnik/Documents/Codex/IQT/components/stakeholder-network.tsx)

## Vercel deployment

This repo is set up to deploy cleanly on Vercel as a static Next.js app.

### Option 1: Vercel import

1. Push the repo to GitHub.
2. Import the repository into Vercel.
3. Keep the default framework setting as `Next.js`.
4. Build command: `npm run build`
5. Output setting: leave blank
6. Deploy

### Option 2: Vercel CLI

```bash
npx vercel
```

For production deploys:

```bash
npx vercel --prod
```

## Notes

- No backend
- No database
- Static demo data only
- Source links in the acquisition tracker are intended for customer-discovery credibility
- Designed for a polished laptop presentation and clean Vercel deployment
