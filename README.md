# RevEng Government Adoption Playbook

Interview dashboard demo showing how a venture-backed cyber company can be mapped to government mission owners, cyber offices, and 90-day adoption pathways.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Recharts
- Static TypeScript data in [`/data/playbook.ts`](/Users/samkoralnik/Documents/Codex/IQT/data/playbook.ts)

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

## Edit the playbook

All demo content lives in:

- [`data/playbook.ts`](/Users/samkoralnik/Documents/Codex/IQT/data/playbook.ts)

This includes:

- hero KPIs
- company snapshot
- capability-to-mission map
- opportunity matrix
- scoring weights
- agency scores
- 90-day plan
- stakeholder map
- final recommendation

## Vercel deployment

### Option 1: Vercel import

1. Push this repo to GitHub as `reveng-iqt-adoption-playbook`.
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
- Designed for a polished laptop presentation and clean Vercel deployment
