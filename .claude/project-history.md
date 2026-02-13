# Flood Doctor Project History

> **PURPOSE:** Complete record of all work done on this project. Never start from zero. Always append, never delete.

---

## Project Overview

**Client:** Flood Doctor
**Business:** Water damage restoration company
**Service Area:** Northern Virginia & Washington DC Metro
**Website:** Marketing site with service pages, blog, locations, resources

**Stack:**
- React 19 + TypeScript
- Vite dev server (port 3000)
- Tailwind CSS
- No src/ folder - flat structure at root

**Design System:**
- Google Aesthetic (clean, tech-forward)
- Material Design 3 principles
- Primary: #1a73e8 (Google Blue)
- Fonts: Plus Jakarta Sans, Inter fallback
- Tone: Premium, professional, direct

---

## Completed Work

### 2026-02-13: Security Fix — GEMINI_API_KEY Removed from Frontend

**What:** Removed exposed API credentials from the client-side JavaScript bundle.

**Root Cause:** `vite.config.ts` had a `define` block that injected `GEMINI_API_KEY` directly into the client bundle via `process.env.API_KEY`. Anyone viewing source could see the key.

**Changes:**
- Removed `define` block from `vite.config.ts`, added security comment
- Deleted `components/tools/VeoGenerator.tsx` and `pages/VideoGenerator.tsx`
- Removed route + lazy import from `App.tsx`
- Removed `@google/genai` from `package.json`, `index.html`, `city.html`, `scripts/build-cities.ts`
- Cleaned `netlify.toml` and `README.md`
- Hardened `.gitignore` with `.env` patterns + security comment
- Removed `generativelanguage.googleapis.com` from parity scanner safe list

**Commits:** `6111a02`, `f7f2cb1`
**Status:** Complete — verified no secrets in dist/

---

### 2026-02-13: Plugin Ecosystem Optimization

**What:** Researched, pruned, and installed plugins for better workflow.

**Pruned:** ~55 low-value plugins disabled (social media, enterprise, redundant)
**Installed:**
- ralph-loop, playground, claude-md-management, hookify (Anthropic official)
- gemini-tools, headless (paddo-tools marketplace)
- Cloudflare MCP server, Context7 MCP server
- Agent Teams enabled (experimental)
- Claude Squad installed (`brew install claude-squad`)

**Configuration:**
- Added "Iterative Quality Standard" to `~/.claude/CLAUDE.md` (ralph-loop default for design/content)

**Still to install after restart:**
- Firecrawl plugin, Sequential Thinking MCP

---

### 2026-02-13: Static Pre-Rendering Implementation (197/197 routes)

**What:** Implemented full static pre-rendering pipeline so every route serves unique HTML with metadata, schema, and content (not a blank SPA shell).

**Spec:** `docs/PRERENDER_STATIC_IMPLEMENTATION_PLAN.md`

**Files Created:**
- `config/routes.ts` — Single source of truth for all 197 routes + city data
- `scripts/prerender.ts` — Playwright-based pre-render engine (custom HTTP server, 5 concurrent tabs, 15s timeout)
- `scripts/verify-prerender.ts` — Post-build verification (file size, unique title, canonical, og:title)

**Files Modified:**
- `components/ui/PageMeta.tsx` — Added `__PRERENDER_READY__` flag (false → true after meta applied)
- `pages/fd-home-v4/index.tsx` — Added PageMeta + schema (was the only route without PageMeta)
- `index.tsx` — Hydration detection: `hydrateRoot` for pre-rendered, `createRoot` for SPA fallback
- `scripts/generate-sitemaps.ts` — Refactored to use shared routes from `config/routes.ts`
- `package.json` — Updated build chain: `vite build → generate:sitemaps → prerender`

**Bug Found & Fixed:**
- 3 guide pages (`BasementWaterproofingGuide`, `BurstPipeGuide`, `FloodPreparationGuide`) passed `faqs={faqs}` to `LazyFAQ` but component expects `data` prop → runtime crash ("Cannot read properties of undefined (reading 'length')")

**Architecture Decisions:**
- Custom HTTP server instead of sirv for SPA fallback — always serves clean shell with empty `#root`
- Homepage rendered last so its output overwrites dist/index.html
- `__PRERENDER_READY__` flag is deterministic (not timer-based)

**Commits:** `da0e558`, `d784916`, `1a8b592`, `5d0048e`, `665ada7`, `6cd7e7f`, `9ed8331`, `2b4bd53`, `315e43f`

**Build Stats:** 197/197 routes, ~13 seconds, all verified

---

### 2026-02-08: Service Detail Longform Redesign

**Scope:** Make 2500+ word service pages feel lighter and easier to scan.

**Key Changes:**
- `ServiceDetailedContent` redesigned into a magazine-style layout with highlight cards, summary previews, and read-more toggles.
- Added sticky in-page navigation for service detail pages with anchor targets.

### 2026-02-08: Indexing Hygiene

**Scope:** Prevent internal/demo pages from being indexed.

**Key Changes:**
- Added `noIndex` meta on `/pages/VideoGenerator.tsx`, `/pages/ClientPortalDemo.tsx`, `/pages/WorkAuthorization.tsx`.

### 2026-02-08: Conversion + SEO Polish Pass

**Scope:** Conversion-focused UI polish and additional SEO structure on hub pages.

**Key Changes:**
- Added top trust bar to header with response time + license + phone CTA.
- Hero trust chips and mobile CTA visibility improved.
- Trust bar updated with 4.9★ rating.
- Request Service header clarity improved; added autofill hints for key fields.
- Resources Hub and Blog Index now include schema + lazy-loaded images.
- robots.txt now disallows dev/tools/demo routes from indexing.

### 2026-02-08: SEO + Performance + Security Baseline

**Scope:** Tightened CSP, fixed fonts, improved SEO schema coverage, removed hard-coded secrets.

**Key Changes:**
- Removed importmap and tightened CSP in `/index.html` and `/city.html`.
- Standardized fonts (Plus Jakarta Sans + Inter), removed duplicate font import.
- `PageMeta` now avoids double-brand titles, sets robots meta, and cleans JSON-LD on route change.
- Added schema to service detail pages, reviews page, locations hub, and request service.
- Set `DEBUG=false` in `/config/site.ts`.
- Removed hard-coded Resend API key from `/cloudflare-worker/form-handler.js`; now uses env secret.
- Added secret setup note to `/cloudflare-worker/wrangler.toml`.

**Follow-up Required:**
- Run `wrangler secret put RESEND_API_KEY` before deploying the Cloudflare Worker.

### 2026-01-12: Emergency WordPress Restoration

**Context:** React site was accidentally deployed to ALL WordPress domains (flooddoctorva.com + 8 subdomains) when it should only go to flood.doctor. ManageWP automatic restore didn't work (sites disconnected).

**Solution:** Manual restoration via SFTP + SSH:
1. Downloaded backups from ManageWP for each site
2. Uploaded via SFTP to ~/wordpress-backups/
3. Extracted via SSH to ~/public_html/{subdomain}.flooddoctorva.com/
4. Fixed .htaccess Wordfence WAF errors on lorton/reston/tysons

**Sites Restored:**
- flooddoctorva.com (main)
- alexandria, arlington, ashburn, fallschurch, greatfalls, herndon, lorton, reston, tysons subdomains

**Key Fix:** `.htaccess` files on 4 sites (alexandria, lorton, reston, tysons) had `auto_prepend_file` pointing to non-existent `wordfence-waf.php`. Commented out Wordfence WAF blocks with sed.

**Scripts Used:** `/tmp/fix_htaccess.sh`, `/tmp/extract_*.sh`, `/tmp/upload_*.sh`

---

### Infrastructure & Setup
- [x] Project scaffolding with Vite + React + TypeScript
- [x] Tailwind CSS configuration
- [x] Routing with React Router
- [x] SEO infrastructure (PageMeta component, schema utilities)
- [x] Figma Desktop MCP integration (2026-01-02)

### Pages Built
- [x] Homepage (`/pages/Home.tsx`)
- [x] About page (`/pages/About.tsx`)
- [x] Contact page (`/pages/Contact.tsx`)
- [x] Services Hub (`/pages/ServicesHub.tsx`)
- [x] Locations Hub (`/pages/LocationsHub.tsx`)
- [x] Resources Hub (`/pages/ResourcesHub.tsx`)
- [x] Reviews page (`/pages/Reviews.tsx`)
- [x] Request Service page (`/pages/RequestService.tsx`)
- [x] Blog Index (`/pages/BlogIndex.tsx`)
- [x] Careers page (`/pages/Careers.tsx`)
- [x] Privacy Policy, Terms

### Templates
- [x] ServiceDetail template (`/pages/templates/ServiceDetail.tsx`) - Google "How It Works" layout
- [x] Blog article template structure
- [x] Location page templates

### Components
- [x] Header/Navigation with dropdowns
- [x] Footer
- [x] Button component
- [x] PageMeta (SEO)
- [x] ServiceCard, ServiceCardThumb
- [x] RelatedServices section
- [x] ServiceAreaLinks section
- [x] FAQ accordion (Google style)

### Data
- [x] Services data (`/data/services.ts`) - 20+ services with full content
- [x] Blog articles data
- [x] Navigation data

### Blog Articles Written
- Water damage restoration cost (Fairfax)
- Water damage restoration timeline
- Kitchen water damage guide
- Appliance water damage (dishwasher/washing machine)
- (check /pages/blog/ for full list)

---

## Bugs Fixed

### 2026-01-02: Service Detail Steps Empty
**Problem:** Steps 1-4 on service pages showed empty headings/descriptions
**Root Cause:** `services.ts` stores whatWeDo as strings `"Title: Description"` but `ServiceDetail.tsx` expected objects `{title, description}`
**Fix:** Updated ServiceDetail.tsx lines 93-123 to parse both string and object formats
**File:** `/pages/templates/ServiceDetail.tsx`

### 2026-01-02: ServiceDetail Design Fixes (Google Alignment)
**Problem:** Page layout didn't match Google Ads "How It Works" reference accurately
**Fixes Applied:**
1. Step number badges - changed from large circles (56px, rounded-2xl) to small squares (32px, rounded-lg)
2. Resources section - replaced icon boxes with actual images
3. Expert section - removed yellow colored container, now rounded image with shadow
**File:** `/pages/templates/ServiceDetail.tsx`
**Status:** Complete - awaiting user review

---

## Key Decisions

### 2026-01-02: Figma MCP Setup
**Decision:** Set up Figma Desktop MCP for design accuracy
**Reason:** Claude was having trouble replicating Google page layouts accurately
**Result:** MCP connected successfully, but requires actual Figma designs to be useful
**Investment:** User spent ~2 hours on Figma Pro subscription + MCP configuration
**Status:** Connected but underutilized (no designs in Figma yet)
**Important Discovery:** Figma MCP tools are READ-only. Cannot create designs - only extract from existing ones. For autonomous design work, Claude should code directly + use Playwright for visual verification.

### 2026-01-02: claude-mem Plugin Installed
**Decision:** Install claude-mem plugin for automatic session continuity
**Reason:** User frustrated by losing context on every restart, having to start from zero
**Installation:**
- `claude plugin marketplace add thedotmack/claude-mem`
- `claude plugin install claude-mem@thedotmack`
**Features:** Auto-captures tool usage, compresses with AI, injects context into future sessions
**Web UI:** http://localhost:37777 (after restart)
**Status:** Installed - requires Claude Code restart to activate

### Design Direction: Google Aesthetic
**Decision:** Model pages after Google Ads/Workspace pages
**Reason:** Clean, professional, tech-forward look that builds trust
**Reference:** Google Ads landing pages, Google Workspace product pages

### Flat File Structure
**Decision:** No /src folder, all code at root level
**Reason:** Simpler navigation, faster development

---

## Current Issues / Technical Debt

1. **Design accuracy** - Some layouts don't match Google reference pages exactly
2. **CDN Tailwind warning** - Using cdn.tailwindcss.com (fine for dev, need to fix for production)
3. **Dev variants** - Multiple DevA/DevB/DevC files exist for some pages (cleanup needed)

---

## Roadmap (From CLAUDE.md)

1. **Cost Calculator** — Interactive tool using actual price lists
2. **Standard Project Package** — Template/bundle definition
3. **Client Portal:**
   - UI for clients to browse/download project files
   - CompanyCam API integration (project photos)
   - Matterport API integration (3D scans)

---

## Tools & Integrations

### Figma MCP
- **Type:** Desktop app local server
- **URL:** http://127.0.0.1:3845/mcp
- **Status:** Connected
- **Tools Available:** get_design_context, get_screenshot, get_metadata, get_variable_defs

### Dev Server
- **Command:** `npm run dev`
- **URL:** http://localhost:3000

---

## File Structure Reference

```
/flood-doctor/fd-prototype-final/
├── .claude/
│   ├── session.md          # Current session state (read first!)
│   └── project-history.md  # This file - complete history
├── components/
│   ├── ui/                 # Buttons, PageMeta, etc.
│   ├── sections/           # RelatedServices, ServiceAreaLinks
│   └── services/           # ServiceCard variants
├── config/
│   ├── site.ts
│   └── constants.ts
├── data/
│   ├── services.ts         # All service definitions
│   ├── blog-articles.ts
│   └── nav.ts
├── pages/
│   ├── templates/          # ServiceDetail, CategoryLanding, etc.
│   ├── blog/               # Individual blog articles
│   ├── locations/          # Location pages
│   └── *.tsx               # Main pages (Home, About, etc.)
├── public/                 # Static assets, SEO files
├── utils/
│   └── schema.ts           # JSON-LD schema generators
├── App.tsx                 # Main app + routing
├── CLAUDE.md               # Project instructions for Claude
└── package.json
```

---

## How To Update This File

**After completing any work:**
1. Add to "Completed Work" section
2. Document any bugs fixed
3. Record key decisions with reasoning
4. Update current issues if resolved

**Format for new entries:**
```
### YYYY-MM-DD: Brief Title
**What:** Description of work done
**Why:** Reasoning behind it
**Files:** List of files changed
**Status:** Complete/In Progress/Blocked
```

---

---

### 2026-01-03: V3 City Subdomain Architecture Complete

**What:** Implemented full V3 "Digital Franchise" multi-subdomain SEO architecture

**Components Created:**
- `data/franchises.ts` - 14 franchises (HQ + 13 cities) with rich localHooks
  - Each city has: neighborhoods, landmarks, commonIssues, architectureNotes, permitOffice
  - Manager bios with local ties
  - Emergency contacts and partner networks
  - GeoCoordinates for schema
  - Nested serviceArea (primary: <30min, secondary: <60min)
- `hooks/useFranchise.ts` - Subdomain detection with `?city=` dev mode
- `contexts/FranchiseContext.tsx` - Provider pattern for app-wide franchise data
- `components/seo/PageMeta.tsx` - Dynamic canonicals, OG/Twitter, geo meta tags
- `components/seo/LocalBusinessSchema.tsx` - SAB-compliant JSON-LD (no streetAddress)
- `components/seo/FAQSchema.tsx` - Dynamic city-specific FAQs
- `components/forms/ServiceRequestForm.tsx` - City-tagged form submissions
- `scripts/generate-sitemaps.ts` - Generates 15 sitemaps (1 per subdomain + index)
- `config/site.ts`, `config/constants.ts`, `.env.example`

**SAB Compliance:**
- No street addresses exposed in schema (per Google SAB guidelines)
- areaServed with City type entries from franchise service areas
- GeoCoordinates for local ranking signals

**Files Changed:**
- App.tsx - Wrapped with FranchiseProvider
- All SEO components updated for V3 serviceArea structure

**Status:** Complete - Build verified, 15 sitemaps generated

---

### 2026-01-03: City Blog Content Generation Complete

**What:** Created 55 SEO blog articles across all 13 city subdomains

**Content Distribution:**
| City | Articles | Topics |
|------|----------|--------|
| McLean | 5 | Luxury estates, estate homes |
| Arlington | 5 | Condos, townhomes, urban density |
| Alexandria | 5 | Historic, waterfront, Old Town |
| Fairfax | 5 | Suburban families, basements, insurance |
| Tysons | 5 | High-rises, commercial, condos |
| Reston | 5 | Townhomes, planned community |
| Ashburn | 5 | New construction, data centers |
| Vienna | 5 | Historic homes, aging plumbing |
| Great Falls | 3 | Luxury estates, generators |
| Herndon | 3 | Mixed housing, waterproofing |
| Springfield | 3 | Established suburbs, basements |
| Lorton | 3 | New construction, Laurel Hill |
| Falls Church | 3 | Historic homes, moisture control |

**Content Structure (TypeScript exports):**
- meta: title, description, canonical URL, publishDate, author, category
- h1, heroSection (headline, subheadline, backgroundImage)
- content: introduction, sections array, conclusion
- callToAction with phone: (703) 656-0103
- breadcrumbs array

**Content Differentiation Strategy:**
- Tysons: High-rises, underground parking, commercial properties
- Great Falls/McLean: Luxury estates, high-value finishes, generators
- Vienna/Falls Church: Historic homes, aging plumbing, established neighborhoods
- Ashburn/Lorton: New construction, builder warranties
- Reston: Townhomes, HOA coordination, planned community
- Arlington/Alexandria: Urban density, condos, historic preservation

**Files Created:** 55 files in `src/content/cities/[city]/blog/`

**Status:** Complete - All 13 cities have blog content

---

### Architecture V2 Compliance Audit (2026-01-03)

**Audit Request:** Verify implementation against City Subdomain Architecture V2 spec

**Result: ✅ PASSED — All 5 phases fully implemented**

| Phase | Component | Status | Location |
|-------|-----------|--------|----------|
| 1 | FranchiseData type | ✅ | `data/franchises.ts` |
| 1 | HQ + 13 cities | ✅ | All franchises configured |
| 1 | SAB compliance | ✅ | No street addresses exposed |
| 2 | useFranchise hook | ✅ | `hooks/useFranchise.ts` |
| 2 | Dev mode ?city= | ✅ | Working |
| 2 | Reserved subdomains | ✅ | mail, ftp, api, admin, staging, dev, test |
| 3 | ServiceRequestForm | ✅ | `components/forms/ServiceRequestForm.tsx` |
| 3 | Environment variables | ✅ | VITE_API_URL configured |
| 4 | Sitemap generator | ✅ | `scripts/generate-sitemaps.ts` |
| 4 | HQ sitemap | ✅ | sitemap-main.xml |
| 4 | City sitemaps | ✅ | 13 files generated |
| 5 | DNS/Cloudflare | ✅ | Wildcard + 13 A records |
| 5 | Apache .htaccess | ✅ | SPA routing configured |

**Enhancements Beyond V2 Spec:**
- `coordinates` field added for LocalBusiness schema
- `isHQ` flag for HQ detection
- `window.__FLOOD_DOCTOR_CITY__` build-time injection
- `FranchiseContext` provider pattern

**Placeholder Data (needs real values):**
- Phone numbers: `703-656-0XXX` pattern
- Google Maps embed URLs
- Google Place IDs
- Manager/team images
- Partner contact info

---

---

### 2026-01-03: SEO Audit & Partner Data Update

**What:** Comprehensive SEO audit + real partner data for all 13 cities

**SEO Fixes Applied:**
1. `LocalBusinessSchema.tsx` - Changed `@type: 'LocalBusiness'` to `@type: ['HomeAndConstructionBusiness', 'EmergencyService']` with `additionalType: 'https://schema.org/LocalBusiness'`
2. All 13 city `water-damage.ts` files - Added "24/7 Emergency" to meta titles for urgency signals
3. `pages/Home.tsx` - Added localHooks section that displays city-specific content on subdomains (architectureNotes, commonIssues, neighborhoods, landmarks)

**Partner Data Update (data/franchises.ts):**
Replaced placeholder partner data with REAL verified local businesses. Each company was verified via Perplexity to NOT offer competing services (water damage restoration, flood cleanup, mold remediation, fire damage).

**Partner Categories Added (8 per city):**
| Category | Companies Added |
|----------|-----------------|
| Plumbers | CroppMetcalfe (703-420-5030), Freedom Plumbers (703-895-4109), Benjamin Franklin Plumbing (571-488-6097) |
| Roofers | Impact Roofing (703-329-2959), MidAtlantic Contracting (703-492-4663), A&M Roofing |
| Waterproofing | JES Foundation Repair (703-379-8888), Lux Foundation Solutions, NV Waterproofing (855-649-7594) |
| Property Managers | Peabody Residential, WJD Management, Richey Property Management (703-721-4453), PMI of Fairfax, RentSimple, Chambers Theory |
| Insurance Agents | Frank D. Spicer Insurance, Preferred Insurance, Bridge First Insurance, Integrated Insurance Solutions, Advantage II Insurance |
| Kitchen & Bath Remodeling | Galaxy Construction (703-858-9599) - galaxy.construction - User's preferred contractor |
| Carpet Cleaning | Ayoub Carpet Service, Absolute Carpet Care |
| Flooring Installers | Flooring America Fairfax (703-934-8447), Prospect Hardwood Flooring |

**Verification Process:**
- Each company searched via Perplexity with explicit query: "do they offer water damage restoration flood cleanup mold remediation?"
- User explicitly warned about companies like "Michael & Son" that appear to be plumbers but also offer competing services
- Galaxy Construction verified as kitchen/bath remodeling ONLY - user's preferred contractor

**Files Changed:**
- `components/seo/LocalBusinessSchema.tsx` - Schema type fix
- `pages/Home.tsx` - LocalHooks section added
- `src/content/cities/*/services/water-damage.ts` (13 files) - Meta title updates
- `data/franchises.ts` - All partner arrays updated (13 cities × 8 partners = 104 partner entries)

**Build Status:** PASSING (264 URLs across 15 sitemaps)

**Status:** Complete

---

### 2026-01-03: City Page Hyper-Differentiation Architecture (Phase 1)

**What:** Implemented archetype-based city page differentiation system

**Problem Solved:**
- 29 location pages were 85-95% templated
- Rich localHooks data in franchises.ts was NOT being used
- Unique content files in src/content/cities/ were NOT being rendered
- Pages were at risk of Google spam flags due to copy-paste patterns

**Solution: 4-Archetype System**

| Archetype | Cities | Unique Features |
|-----------|--------|-----------------|
| Estate/Luxury | McLean, Great Falls | Wine cellar protection, high-value assets, discrete service, equestrian facilities |
| Historic/Urban | Alexandria, Falls Church, Vienna | BAR compliance, original materials, preservation |
| High-Rise/Urban | Arlington, Tysons, Reston | HOA coordination, multi-unit, commercial |
| Suburban/Family | Fairfax, Springfield, Herndon, Ashburn, Lorton | Split-levels, sump pumps, military families |

**Files Created:**
- `config/archetypeMapping.ts` - City-to-archetype mapping + configs
- `hooks/useArchetypeContent.ts` - Merged franchise + archetype data hook
- `components/archetypes/estate/CityPageEstate.tsx` - Estate archetype template
- `components/archetypes/estate/WineCellarProtection.tsx` - Estate-specific component
- `components/archetypes/estate/HighValueAssetCallout.tsx` - Estate-specific component
- `components/archetypes/estate/DiscreteServiceBadge.tsx` - Estate-specific component
- `components/archetypes/estate/index.ts` - Exports

**Files Refactored:**
- `pages/locations/McLeanWaterDamage.tsx` - Now 16 lines using Estate template (was 333 lines hardcoded)

**Key Changes in McLean Page:**
- Uses `useArchetypeContent('mclean')` hook
- Renders `CityPageEstate` template with franchise data
- Dynamically displays neighborhoods, landmarks, commonIssues from franchises.ts
- Shows estate-specific sections: wine cellar, high-value assets, discrete service badge
- Equestrian facilities section for Great Falls

**Build Status:** PASSING (264 URLs across 15 sitemaps)

**Next Steps:**
- Create Historic, Urban, Suburban archetype templates
- Refactor remaining 28 location pages
- Source city-specific images with proper ALT tags
- Run competitor analysis and content audit

---

### 2026-01-03: Competitive SEO Audit Complete

**What:** Comprehensive competitor analysis and SEO gap identification

**Competitors Researched:**
- PuroClean McLean (city pages, blog, IICRC)
- Voda Cleaning & Restoration (8,000+ reviews, regional)
- ServiceMaster NCR (mentions neighborhoods, templates)
- FloodTech USA (regional VA/MD/DC)
- Tri State Restorations (lists neighborhoods, no dedicated pages)
- Total Home Rescue (Fairfax/McLean/Tysons)
- Anthony Restoration (Tysons Corner)
- Flood Metrix (zip code pages)

**Critical Finding:**
NO COMPETITOR HAS NEIGHBORHOOD-LEVEL LANDING PAGES.
We have 80+ neighborhood content files ready to render.

**Our Content Inventory:**
- 294 total content files in src/content/cities/
- 80+ neighborhood pages (Rosslyn, Crystal City, Old Town, Lake Barcroft, etc.)
- 55+ city-specific blog articles
- 13 city subdomain structures

**Keyword Gaps Identified:**
- Tier 1: Neighborhood keywords (0 competition, content ready)
- Tier 2: Service-specific ("burst pipe repair [city]", "frozen pipes [city]")
- Tier 3: Problem-specific ("water damage insurance claim Virginia")

**Action Plan Created:**
1. Phase 1: Render 80+ neighborhood pages (IMMEDIATE - 3-5 days)
2. Phase 2: Complete archetype refactoring (5-7 days)
3. Phase 3: Service-specific landing pages (7-10 days)
4. Phase 4: Seasonal content campaign (before winter)
5. Phase 5: Review & authority building (ongoing)

**Files Created:**
- `.claude/competitive-seo-audit.md` - Full audit document with competitor matrix, keyword gaps, action plan

**Status:** Audit complete. Ready to execute Phase 1 (neighborhood pages).

---

*Last updated: 2026-01-03*

---

### 2026-01-03: Visual Components Library

**Task:** Create high-end SVG animations, graphics, and premium visual components to make city pages less text-heavy.

**Completed:**

1. **Premium Visual Components** (`components/graphics/`):
   - `WaterDropletIcon.tsx` - Animated water droplet with SVG gradients and SMIL animations
   - `EmergencyBadge.tsx` - Pulsing 24/7 emergency badge with Tailwind animations
   - `TrustBadges.tsx` - 6 certification badges (IICRC, Licensed, Insured, 24/7, Local, Guarantee)
   - `ProcessTimeline.tsx` - 4-step restoration process infographic (Assessment → Extraction → Drying → Restoration)
   - `ComparisonTable.tsx` - Flood Doctor vs competitors comparison table
   - `AnimatedStats.tsx` - Counter animation with Intersection Observer (60min response, 25+ years, etc.)
   - `BeforeAfterSlider.tsx` - Interactive before/after image comparison slider
   - `AnimatedHeroBackground.tsx` - 5 variants (estate, historic, urban, suburban, water)
   - `ServiceIconGrid.tsx` - 6 service icons with custom SVG gradients
   - `ProcessGallery.tsx` - Interactive gallery using 30+ process tile images

2. **Unsplash Image Configuration** (`config/unsplashImages.ts`):
   - Estate: luxury homes, wine cellars, grand interiors
   - Historic: brick buildings, colonial homes, Old Town style
   - Urban: high-rises, condos, city skylines
   - Suburban: single-family homes, basements

3. **Process Tile Images**:
   - Extracted 50+ user-provided process tiles to `/public/images/process-tiles/`
   - Categories: assessment, extraction, drying, remediation, restoration, documentation

4. **Enhanced Archetype Templates** (`components/archetypes/`):
   - `CityPageEstate.tsx` - McLean, Great Falls
     - Wine cellar protection, high-value assets, discrete service badge
     - AnimatedHeroBackground, AnimatedStats, TrustBadges, ProcessTimeline, ComparisonTable, ServiceIconGrid, ProcessGallery, EmergencyBadge
   - `CityPageHistoric.tsx` - Alexandria, Falls Church, Vienna
     - BAR compliance section, original materials expertise, preservation badge
     - Historic-specific styling with amber accent colors
   - `CityPageUrban.tsx` - Arlington, Tysons, Reston
     - Multi-unit coordination, HOA partnerships, building systems expertise
     - Commercial/residential toggle, parking garage section
   - `CityPageSuburban.tsx` - Fairfax, Springfield, Herndon, Ashburn, Lorton
     - Basement flooding specialists, split-level expertise, sump pump section
     - Optional military family badge for Springfield

5. **Demo Route**:
   - Added `/dev/visual-components/` route to App.tsx
   - `pages/VisualComponentsDemo.tsx` showcases all components

6. **Fixed Graphics Exports**:
   - Updated `components/graphics/index.ts` with all animation exports
   - Added LocationsHeroAnimation, TechnologyHeroAnimation, etc.

**Build Status:** ✅ Passing (264 URLs in sitemaps)

**Files Created/Modified:**
- 10 new graphics components
- 4 new archetype templates (historic, urban, suburban) + enhanced estate
- 1 config file for Unsplash images
- 1 demo page
- Updated App.tsx with demo route
- Updated graphics/index.ts with all exports

---

### 2026-01-04: Neighborhood Pages Visual Component Integration

**Task:** Render 80+ neighborhood pages using the new visual components library.

**Completed:**

1. **Enhanced NeighborhoodPageRenderer** (`components/city/NeighborhoodPageRenderer.tsx`):
   - Integrated all premium visual components
   - Added archetype detection via `getArchetype(citySlug)`
   - Dynamic hero backgrounds matching city archetype (estate/historic/urban/suburban)

2. **Visual Components Added to Neighborhood Pages:**
   - `AnimatedHeroBackground` - Archetype-specific animated SVG backgrounds
   - `TrustBadges` - Horizontal layout with response time, IICRC, ratings
   - `EmergencyBadge` - In hero CTA section + final CTA section
   - `AnimatedStats` - Counter cards below hero section
   - `ProcessTimeline` - Horizontal 4-step restoration process
   - `ServiceIconGrid` - Large 3-column service icons

3. **Enhanced UI Elements:**
   - Hero section: Added relative z-index layering with animated background
   - Stats section: New section with AnimatedStats cards variant
   - Services section: Combined ServiceIconGrid with detailed service cards
   - Final CTA: Added wave SVG pattern + EmergencyBadge

4. **Coverage:**
   - 81 neighborhood content files across 13 cities
   - All neighborhood pages now use consistent visual language
   - Archetype-specific styling automatically applied

**Build Status:** ✅ Passing (264 URLs in sitemaps)

**Files Modified:**
- `components/city/NeighborhoodPageRenderer.tsx` - Full visual component integration

**Impact:**
- All 81 neighborhood pages now have premium visual elements
- Consistent with city archetype templates (Estate/Historic/Urban/Suburban)
- Better visual differentiation from competitors
- Reduced "text-heavy" appearance

---

### 2026-01-04: AI Search Visibility Optimization

**Task:** Fix zero AI visibility issue (Flood Doctor appears in 0/13 city AI searches)

**Problem Identified:**
- Perplexity, ChatGPT, Claude, Gemini show ZERO results for Flood Doctor
- Competitors dominating: FloodTech USA (100%), Anthony Restoration (92%)
- Missing AI ranking signals: geographic targeting, structured contact info, certifications, years of experience

**Audit Document:** `.claude/ai-search-visibility-audit.md`

**Fixes Applied:**

1. **Home.tsx - Title Tag Keyword-First:**
   - Before: "Emergency Water Damage Restoration & Flood Cleanup | Northern Virginia"
   - After: "Water Damage Restoration Northern Virginia | 60-Min Response | 24/7"

2. **Home.tsx - Hero AI Visibility Badges:**
   - Added "IICRC Certified" badge with Shield icon
   - Added "20+ Years Experience" badge with Award icon
   - Green availability badge maintained

3. **Home.tsx - Crawlable Contact Info:**
   - Phone number "(877) 497-0007" in visible paragraph text
   - License "Virginia Licensed #2705155505" in crawlable text
   - Not just in buttons/images that AI can't parse

4. **Home.tsx - "Why Choose Us" Section (400+ words):**
   - E-E-A-T content with expertise signals
   - Credential grid with all license numbers (VA, DC, MD)
   - IICRC certification details
   - Professional copy differentiating from competitors

5. **Home.tsx - Visible FAQ Section:**
   - 7 FAQ questions with full answers for main site visitors
   - Details/summary accordion pattern
   - Questions include conversational AI queries

6. **Home.tsx - Enhanced FAQ Schema:**
   - Added conversational queries like "Who is the best water damage restoration company in Northern Virginia?"
   - City-specific questions for subdomains
   - Full detailed answers with stats

7. **schema.ts - Organization Schema:**
   - Added `foundingDate: '2005'`
   - Added `knowsAbout` array with 6 expertise areas
   - Added `slogan` property

8. **constants.ts - Site Info:**
   - Added `foundingDate: '2005'`
   - Added `yearsExperience: '20+'`
   - Added `slogan: "Northern Virginia's 24/7 Water Damage Experts"`

**Build Status:** ✅ Passing (264 URLs across 15 sitemaps)

**Files Modified:**
- `pages/Home.tsx` - Major SEO enhancements
- `utils/schema.ts` - Organization schema updates
- `config/constants.ts` - Site info additions

**Next Steps (from audit Phase 1):**
- [ ] Verify AI crawlability with Google's Mobile-Friendly Test
- [ ] Submit sitemap to Google Search Console
- [ ] Apply to IICRC directory listing
- [ ] Claim/verify all Google Business Profiles
- [ ] Submit to top 10 directories (Yelp, BBB, Angi, etc.)

---

### 2026-01-04: HowTo Guides Section for Rich Results

**What:** Created complete HowTo guides section for Google rich results

**Purpose:**
- Google loves showing HowTo rich results in SERPs
- Comprehensive guides establish E-E-A-T authority
- Each guide has HowTo schema + FAQPage schema for maximum rich result eligibility

**Files Created:**

| File | Steps | Read Time | Content |
|------|-------|-----------|---------|
| `pages/guides/GuidesHub.tsx` | — | — | Hub page with 6 guide cards, ItemList schema |
| `pages/guides/WaterDamageCleanupGuide.tsx` | 8 | 10 min | Emergency water damage response |
| `pages/guides/MoldRemediationGuide.tsx` | 7 | 12 min | DIY vs professional mold remediation |
| `pages/guides/InsuranceClaimGuide.tsx` | 10 | 15 min | Maximize insurance claim settlements |
| `pages/guides/BasementWaterproofingGuide.tsx` | 9 | 14 min | Interior & exterior waterproofing |
| `pages/guides/BurstPipeGuide.tsx` | 6 | 8 min | Emergency burst pipe response |
| `pages/guides/FloodPreparationGuide.tsx` | 8 | 11 min | Pre-storm flood preparation |

**Schema Markup Per Guide:**
- `@type: HowTo` with full step array, supplies, tools, estimatedCost, totalTime
- `@type: FAQPage` with 5-6 questions per guide
- `@type: BreadcrumbList` for navigation

**Routes Added:**
- `/guides/` — Hub page
- `/guides/water-damage-cleanup/`
- `/guides/mold-remediation/`
- `/guides/water-damage-insurance-claim/`
- `/guides/basement-waterproofing/`
- `/guides/burst-pipe-emergency/`
- `/guides/flood-preparation/`

**Navigation Updated:**
- Added "Guides" link to main nav in `data/nav.ts`

**Files Modified:**
- `App.tsx` - Added lazy imports and routes for all 7 guide pages
- `data/nav.ts` - Added Guides to MAIN_NAV_ITEMS

**Build Status:** ✅ Passing (264 URLs across 15 sitemaps)

**Deployment Status:** ⏳ PENDING — FTP password needed for Deploy@flood.doctor

---

### 2026-01-27: Work Authorization Contract (Accordion-Style)

**Context:** Client's existing WPSignature contract was too long and required excessive scrolling on mobile. Wanted Amazon/Netflix-style accordion format where users acknowledge each section individually.

**Solution:** Built React accordion contract component:

1. **WorkAuthorization.tsx** - Full component with:
   - 7 collapsible accordion sections
   - Checkbox acknowledgment per section
   - Initial field for Price List
   - Searchable price list (75+ items)
   - Signature pad (draw or type)
   - Progress indicator
   - URL pre-fill support

2. **Contract Sections:**
   | # | Section |
   |---|---------|
   | 1 | Introduction & Definitions |
   | 2 | Payment & Insurance |
   | 3 | Water Damage & Mold |
   | 4 | Safety & Client Responsibilities |
   | 5 | Legal Terms & Protections |
   | A | Scope of Work |
   | B | Price List (requires initial) |

3. **Route:** `/work-authorization/`

**Files Created:**
- `pages/WorkAuthorization.tsx` - Main component

**Files Modified:**
- `App.tsx` - Added route

**Source Documents:**
- `/Users/ghost/Desktop/Flood Doctor Service Contract & Terms of Service - In Progress.docx`
- `/Users/ghost/Desktop/RD Contract and Price List.docx`

**Next Steps:**
- Connect to Emergency flow from RequestService
- Update Cloudflare Worker for signed contract emails
- Generate PDF on submission
- Add audit trail for legal compliance

---

### 2026-01-27: Form Submission System (Cloudflare Worker + Resend)

**Context:** Form at flood.doctor/request/ was fake - showed success message but data went nowhere.

**Solution:** Built Cloudflare Worker + Resend email integration:

1. **Cloudflare Worker** (`cloudflare-worker/form-handler.js`):
   - Receives form POST
   - Validates required fields
   - Sends email via Resend API
   - Returns JSON response

2. **Resend Setup:**
   - Domain: `mail.flood.doctor`
   - DNS records: DKIM, SPF, MX
   - From: `noreply@mail.flood.doctor`
   - To: `help@flood.doctor`

3. **Updated RequestService.tsx:**
   - Posts to Cloudflare Worker
   - Handles errors gracefully
   - Shows success/error states

**Deployment:**
- Worker: `flood-doctor-forms.bluemedia-account.workers.dev`
- Deploy: `cd cloudflare-worker && wrangler deploy`

**Files Created:**
- `cloudflare-worker/form-handler.js`
- `cloudflare-worker/wrangler.toml`

**Files Modified:**
- `pages/RequestService.tsx`

---
