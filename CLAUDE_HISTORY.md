# CDI Engineering Clone — Change History

All notable changes, feature additions, and file modifications are recorded here.

---

## [2026-07-11] — Initial Build (Phases 1–4)

### Project Scaffold
- Created Next.js 16.2.10 project with TypeScript, Tailwind CSS v4, App Router, `src/` directory
- Installed dependencies: `framer-motion`, `react-hook-form`, `react-intersection-observer`, `lucide-react`

### Files Created

#### Foundation
| File | Purpose |
|---|---|
| `src/app/globals.css` | Tailwind v4 `@theme` design tokens (colors, fonts), keyframe animations, skip-nav styles |
| `src/app/layout.tsx` | Root layout: Onest + Inter fonts, metadata, Navbar, Footer, skip-nav link |
| `src/app/template.tsx` | Framer Motion page-transition wrapper (fade + slide up) |
| `src/app/loading.tsx` | Global loading spinner |
| `src/app/not-found.tsx` | Custom 404 page with quick links |
| `src/app/sitemap.ts` | Dynamic sitemap.xml covering all routes |
| `src/app/robots.ts` | robots.txt — allow all, disallow /api |
| `src/lib/constants.ts` | All static data: nav, stats, services, values, process steps, differentiators, offices, projects, clients |
| `src/lib/types.ts` | TypeScript interfaces for all data shapes |

#### UI Primitives
| File | Purpose |
|---|---|
| `src/components/ui/Button.tsx` | 4 variants (primary, outline, ghost, white), 3 sizes, href or button |
| `src/components/ui/SectionHeading.tsx` | Shared label + h2 + subtitle pattern, light/dark prop |
| `src/components/ui/PageHeader.tsx` | Dark banner with breadcrumbs for inner pages |
| `src/components/ui/AnimatedCounter.tsx` | CountUp via `requestAnimationFrame` on viewport entry |

#### Layout
| File | Purpose |
|---|---|
| `src/components/layout/Navbar.tsx` | Sticky header, top bar, desktop dropdowns (hover), mobile slide-in drawer with accordion, active link via `usePathname`, shadow on scroll |
| `src/components/layout/Footer.tsx` | 4-column dark footer: brand, quick links, services, offices |

#### Home Page Components
| File | Purpose |
|---|---|
| `src/components/home/HeroSection.tsx` | Full-viewport hero, teal orbs, headline with gradient accent, CTA pair, inline mini-stats, office location badges |
| `src/components/home/StatsSection.tsx` | Dark stats bar with animated counters: 3000+ Projects, 120+ Partners, 250+ Cities |
| `src/components/home/AboutSnippet.tsx` | 2-column: mission text + checklist + CTAs left; dark visual card with office chips right |
| `src/components/home/ServicesPreview.tsx` | 3 dark gradient cards (Mechanical/Electrical/Plumbing) with colored accent bars and hover overlays |
| `src/components/home/WhyCDISection.tsx` | 4 pillars: 20-Hour Ops, Dedicated PMs, Double-Review, Coast-to-Coast |

#### Services
| File | Purpose |
|---|---|
| `src/components/services/ServiceCard.tsx` | Dark gradient header + icon, description, bullet list |

#### About
| File | Purpose |
|---|---|
| `src/components/about/ValuesGrid.tsx` | 6 value cards (Responsiveness, Speed, Proactive, Technical, Standardization, Continuous Improvement) |
| `src/components/about/OfficeLocations.tsx` | 3 office cards: Irvine CA, Edison NJ, HCMC Vietnam |

#### Leadership
| File | Purpose |
|---|---|
| `src/components/leadership/LeadershipProfile.tsx` | Photo placeholder (left) + bio text + credentials grid (right) — David Kang PE |

#### Process
| File | Purpose |
|---|---|
| `src/components/process/ProcessSteps.tsx` | 5-step horizontal timeline with connector line |
| `src/components/process/DifferentiatorSection.tsx` | Alternating text/visual blocks: Speed, Responsiveness, Accuracy |

#### Projects
| File | Purpose |
|---|---|
| `src/components/projects/ProjectCategoryNav.tsx` | Active-state pill tab navigation for project categories |
| `src/components/projects/ProjectGrid.tsx` | Responsive card grid with gradient placeholders and category badges |

#### Clients
| File | Purpose |
|---|---|
| `src/components/clients/ClientsShowcase.tsx` | Staggered grid of client name cards with scroll-reveal |

#### Contact
| File | Purpose |
|---|---|
| `src/components/contact/ContactForm.tsx` | `react-hook-form` form: First Name, Last Name, Phone, Email, Message; validation, loading/success/error states |
| `src/components/contact/OfficeCard.tsx` | Address + phone + email card, featured (teal) variant |

#### Pages
| File | Route | Notes |
|---|---|---|
| `src/app/page.tsx` | `/` | Home: Hero → Stats → About → Services → WhyCDI → CTA |
| `src/app/services/page.tsx` | `/services` | 3 service cards + CTA banner |
| `src/app/cdi/page.tsx` | `/cdi` | Mission + 6 Values + 3 Offices |
| `src/app/our-leadership/page.tsx` | `/our-leadership` | David Kang PE profile |
| `src/app/our-process/page.tsx` | `/our-process` | 5-step timeline + 3 differentiators |
| `src/app/projects/page.tsx` | `/projects` | All projects grid + category cards |
| `src/app/projects/[category]/page.tsx` | `/projects/:slug` | Dynamic per-category page (5 categories, SSG) |
| `src/app/clients/page.tsx` | `/clients` | Client grid + partnership CTA |
| `src/app/contact/page.tsx` | `/contact` | Form + offices + map placeholder |
| `src/app/api/contact/route.ts` | `POST /api/contact` | Validates and logs form submissions |

---

## [2026-07-11] — Design Fixes (Post-Screenshot Review)

### Root Bug Fixed: Heading Color Cascade Issue
**Problem:** `h1–h6 { color: #111827 }` in `globals.css` was declared after `@import "tailwindcss"`, meaning it overrode Tailwind utility classes like `text-white` on all headings. This caused:
- Hero H1 to appear dark/invisible against the dark background
- "Contact Us" outline button to be invisible (border-white + text-white both overridden)
- Service card headings and text to be near-invisible on dark backgrounds

**Fix:** Wrapped all base element styles inside `@layer base {}` in `globals.css` so Tailwind utilities always win in the cascade.

**Files Modified:**
- `src/app/globals.css` — Moved `h1–h6`, `body`, `html`, `a`, `img` rules into `@layer base`; removed `color` property from heading rule (color now controlled exclusively by utility classes)

### Hero Section Redesign
**Problem:** Hero lacked visual impact — gradient orbs were too subtle, headline wasn't punchy enough.

**Changes:**
- Deeper layered dark background gradient
- Larger teal radial orbs with better placement
- Gradient text on the word "Affordable" using `WebkitTextFillColor`
- Added subtle dot-grid background texture
- Inline mini-stats row (3000+ / 120+ / 250+) below CTAs
- Office location floating chips (CA / NJ / VN) on right side
- "Contact Us" button now uses `bg-white/10 backdrop-blur` for glass effect
- Added phone number link beside the CTA buttons

**Files Modified:**
- `src/components/home/HeroSection.tsx` — Full redesign

### Stats Section Redesign
**Problem:** Teal bar was too garish; stats competed with hero mini-stats.

**Changes:**
- Changed to dark background (`bg-dark`) for visual continuity with hero
- Added subtle teal radial glow overlay
- Added animated underscore bar that expands on hover
- Labels now uppercase tracking-wide for professional feel

**Files Modified:**
- `src/components/home/StatsSection.tsx` — Redesigned

### Services Preview Redesign
**Problem:** Card text was near-invisible (headings overridden to dark), background colors looked random.

**Changes:**
- Each card now has a distinct themed dark gradient (navy/amber/teal)
- Colored accent bar on top edge of each card
- Icon color matches card accent
- Hover: subtle glow overlay + card lifts (`-translate-y-2`) + increased shadow
- Text explicitly set to `text-white` / `text-white/60`

**Files Modified:**
- `src/components/home/ServicesPreview.tsx` — Full redesign

### About Snippet Redesign
**Problem:** Visual card side lacked polish; `Building2` icon cleaner than text-only CDI circle.

**Changes:**
- Replaced "CDI" text circle with `Building2` icon
- Added deep layered gradient to card background
- Added teal glow orb in corner
- Office chips styled as bordered cards
- Floating "15+" badge refined

**Files Modified:**
- `src/components/home/AboutSnippet.tsx` — Visual card + layout polish

---

---

## [2026-07-11] — Parity Pass: Original Site Comparison & Improvements

### Analysis
Fetched and compared https://cdieng.com against clone. Identified 5 key gaps.

### 1. Hero — Video Background + Play/Pause Controls
**Problem:** Original site uses a full-width MP4 video background (1080p) with a dark overlay and play/pause control. Clone used static gradient only.

**Changes:**
- Added `<video>` element (`/videos/hero-bg.mp4`) with `autoPlay muted loop playsInline`
- Added `poster="/videos/hero-poster.jpg"` fallback for before video loads
- Dark `bg-black/60` overlay + teal-tinted gradient overlay for legibility
- Play/Pause toggle button (bottom-right) with `useRef` + click handler
- Removed inline mini-stats from inside hero (those live in the StatsSection below)
- Created `public/videos/README.md` to guide video file placement

**Files Modified:**
- `src/components/home/HeroSection.tsx` — Video bg, play/pause controls, simplified CTA area

### 2. Services Page — Alternating Image+Text Layout
**Problem:** Original uses large full-width alternating sections (visual panel left/right + text panel), styled with black-and-white photography. Clone used 3 compact cards.

**Changes:**
- Created new `ServiceSection` component with left/right alternating layout
- Each service: large styled visual panel (dark gradient + grid pattern + radial glow + icon) + white text panel with bullets
- Each service has its own accent color: Mechanical=blue, Electrical=teal, Plumbing=amber
- Alternating: even index = visual right, odd index = visual left
- Updated `services/page.tsx` to use `ServiceSection` instead of `ServiceCard` grid

**Files Created:**
- `src/components/services/ServiceSection.tsx` — Full-width alternating service layout

**Files Modified:**
- `src/app/services/page.tsx` — Replaced grid of ServiceCards with ServiceSection list

### 3. About/Values Page — Divider List Style
**Problem:** Original presents values as a simple text list separated by horizontal dividers. Clone used a card grid.

**Changes:**
- Replaced card grid with divider-line list: each value separated by `border-b divide-gray-200`
- Each item: icon (left) + title + description (right), slide-in animation on scroll
- Cleaner, closer to the original's minimalist hierarchy

**Files Modified:**
- `src/components/about/ValuesGrid.tsx` — Redesigned to divider list

### Build Status After Changes
| Check | Result |
|---|---|
| `npm run lint` | ✅ 0 errors |
| `npm run build` | ✅ 19 static routes, 0 errors |

---

## Build & Lint Status

| Check | Result |
|---|---|
| `npm run lint` | ✅ 0 errors, 0 warnings |
| `npm run build` | ✅ 19 static routes, 0 errors |
| TypeScript | ✅ Strict mode, no errors |
| Dev server | ✅ Running on port 3001/3002 |
