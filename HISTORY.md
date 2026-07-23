# Project History

Running log of what this project is, what stage it's in, and what changed each session. Update this file at the end of every session: note the current stage, then log adds/deletes/changes made during that session.

## Project

Next.js 16 + Tailwind CSS v4 site. Originally built as a clone of cdieng.com (CDI Engineering, an MEP firm). As of 2026-07-23 the content has been fully repointed to **Tian Chen Development Group**, an integrated real estate development firm (feasibility, design, entitlements, construction, delivery), based on `Tian-Chen-Development-Group-Website-Content.docx`.

## Current Stage

**Content rebrand — mostly complete, placeholders outstanding.**

- Site structure, routing, and components carried over from the CDI clone; copy replaced with Tian Chen content.
- Still open / placeholder:
  - Leadership bios (`/our-leadership`) — 3 role placeholders (`[Name]` for CEO, CFO/Secretary, Director of Construction or Design), no real names/bios yet.
  - Phone and email — shown as "TBD" (contact page, footer) until real values are provided.
  - Real domain — metadata/sitemap/robots use placeholder `tianchendevelopment.com`.
  - Projects (`/projects/[category]`) — all 6 sectors show "coming soon" empty state; no real project examples yet.
  - Clients (`/clients`) — no logos/testimonials yet; shows a placeholder message.
  - Media — hero video, service images, etc. still reference old asset paths/placeholders; not yet replaced with real Tian Chen assets.
- Build (`next build`) and `tsc --noEmit` pass clean as of the last session.

## Session Log

### 2026-07-23
**Added**
- `HISTORY.md` (this file).

**Changed**
- Full content rebrand from CDI Engineering → Tian Chen Development Group, driven by `Tian-Chen-Development-Group-Website-Content.docx`:
  - `src/lib/constants.ts` — nav, services (renamed to 5 development phases), values, process steps, differentiators, offices, project categories (6 sectors, empty project lists), client names (emptied), company info.
  - Renamed route `src/app/cdi/` → `src/app/company/`.
  - Rewrote: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/services/page.tsx`, `src/app/company/page.tsx`, `src/app/our-leadership/page.tsx`, `src/app/our-process/page.tsx`, `src/app/projects/page.tsx`, `src/app/projects/[category]/page.tsx`, `src/app/clients/page.tsx`, `src/app/contact/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx`.
  - Rewrote components: `src/components/leadership/LeadershipProfile.tsx`, `src/components/clients/ClientsShowcase.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/components/home/ServicesPreview.tsx`, `src/components/process/DifferentiatorSection.tsx`.

**Deleted**
- `<StatsSection />` usage removed from the homepage (`src/app/page.tsx`) — the old "3000+ Projects / 120+ Partners / 250+ Cities" stats were CDI-specific and no equivalent figures exist for Tian Chen; component file left in place but unused rather than showing fabricated numbers.
- `CLIENT_NAMES` array emptied (was a list of fake/placeholder client logos: Honeywell, CBRE, Marriott, etc.).
- All project entries in `PROJECT_CATEGORIES` removed (were fictional MEP project examples like "Office Complex — Irvine, CA").
- `/cdi` route removed (superseded by `/company`).
