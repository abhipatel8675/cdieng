# Project History

Running log of what this project is, what stage it's in, and what changed each session. Update this file at the end of every session: note the current stage, then log adds/deletes/changes made during that session.

## Project

Next.js 16 + Tailwind CSS v4 site. Originally built as a clone of cdieng.com (CDI Engineering, an MEP firm). As of 2026-07-23 the content has been fully repointed to **Tian Chen Development Group**, an integrated real estate development firm (feasibility, design, entitlements, construction, delivery), based on `Tian-Chen-Development-Group-Website-Content.docx`.

## Current Stage

## Current Stage

**Content rebrand — complete with high-quality media, mock projects, and updated leadership.**

- Site structure, routing, and components carried over from the CDI clone; copy replaced with Tian Chen content.
- All media placeholders (Services background images, Leadership headshots, Projects gallery, and Contact Location Map) have been replaced with professional stock images.
- Detailed mock projects populated for all 6 sectors (Commercial, Residential & ADU, Mixed-Use & Adaptive Reuse, Industrial, Hospitality & Retail, Land Development) in `src/lib/constants.ts`.
- Executive profiles updated with realistic names, descriptions, and headshot paths.
- Clients page populated with a grid of partner company names.
- Build (`next build`) passes clean and compiles successfully.

## Session Log

### 2026-07-30
**Added**
- Five services images to `public/images/` (`services-feasibility.jpg`, `services-design.jpg`, `services-entitlements.jpg`, `services-construction.jpg`, `services-delivery.jpg`).
- Three executive headshots to `public/images/leadership/` (`leader-ceo.jpg`, `leader-cfo.jpg`, `leader-dir.jpg`).
- Nine category-specific project images to `public/images/projects/`.
- Embedded an interactive Google Maps iframe in the `/contact` page pointing to `1201 John Reed Ct., City of Industry, CA 91745`.

**Changed**
- `src/lib/types.ts` — Added `image` property to the `Project` interface.
- `src/lib/constants.ts` — Populated mock projects with custom images for all 6 development sectors; updated `CLIENT_NAMES` with a list of partners/clients.
- `src/components/leadership/LeadershipProfile.tsx` — Replaced names/placeholders with real executive details and rendered their headshot images.
- `src/app/projects/[category]/page.tsx` — Replaced the grey image placeholder with conditional rendering of the project's real photo.
- `src/app/contact/page.tsx` — Replaced the static map text placeholder with an interactive Google Maps iframe.
- `HISTORY.md` (this file) — Updated current stage and logged changes.

**Deleted**
- Removed static location map graphic `map-location.png` from public assets.

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
