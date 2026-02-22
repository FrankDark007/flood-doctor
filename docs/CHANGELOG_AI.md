# CHANGELOG_AI.md

Running log of major AI-assisted work batches.

---

## 2026-02-22 — Go-Live Blocker Fix

- Fixed duplicate title: `/guides/water-damage-insurance-claim/` changed from "Filing a Water Damage Insurance Claim | Flood Doctor" → "Water Damage Insurance Claim Steps | Flood Doctor"
- Duplicate titles: 1 → 0
- PROJECT_STATE.md refreshed: 192 routes, 0 duplicates, 0 over-60

---

## 2026-02-22 — Go-Live Closeout

- Tags pushed: `go_live_2026-02-21`, `rollback_anchor_2026-02-21` (on `daa9b86`)
- PROD_HEAD recorded in PROJECT_STATE.md
- Rollback command documented

---

## 2026-02-22 — Go-Live Deployment Verification

**Deployed**: HEAD `daa9b86` on main
- Build: 192/192 routes, 0 errors
- rsync SSH: 552 files synced to production
- Sitemaps: --delete sync (stale removed)
- Cloudflare cache purge: success
- Post-deploy: all checks passed — homepage, sitemaps, calculator, 404s, 3 city pages, 3 neighborhood pages (all 200, canonicals match)

---

## 2026-02-22 — Production Deploy (blog batch 1 + calculator updates)

**Deployed**: 10 commits synced to production (000df30 → e77c896)
- Blog batch 1: 3 new posts live
- Cost calculator: pricing extracted to typed module
- Sitemap: 3 new blog URLs added to sitemap-main.xml
- Routes: 192/192 verified
- Post-deploy: all checks passed (200s, 404s, sitemaps)

---

## 2026-02-21 — P2 #9 Blog Expansion Batch 1 (3 posts)

**Scope**: 3 new blog posts, 3 config files updated

### New Posts
| Slug | Title | Category | Words |
|------|-------|----------|-------|
| `toilet-overflow-cleanup-guide` | Toilet Overflow Cleanup: Steps & Safety | Emergency | ~2200 |
| `flood-insurance-nfip-virginia` | Flood Insurance in Virginia: NFIP Guide | Insurance | ~2300 |
| `filing-water-damage-insurance-claim` | Filing a Water Damage Insurance Claim | Insurance | ~2400 |

### Each Post Includes
- `generateBlogArticleSchema` (Article + BreadcrumbList + LocalBusiness + FAQPage)
- 7 FAQ items each
- 3 contextual internal links out
- MidArticleCTA + bottom CTA
- Gold Standard styling (H2 border-b-4, blockquotes, callouts)

### Build
- Routes: 192/192 ✅ (was 189)
- Pre-rendered sizes: 74-78KB each

---

## 2026-02-21 — P1 #4 Cost Calculator: Data-Driven Dates + Close Priority

**Scope**: 1 edited file, 3 doc files

### Changes
- Hero badge "Updated January 2026" → derives from `currentPricing.lastUpdated`
- H1 year "[2026]" → derives from `currentPricing.lastUpdated`
- Comment date → updated to reference data source
- Schema `dateModified` already wired in previous commit
- **P1 #4 marked ✅ Complete in OPEN_PRIORITIES.md**

### Verification
- Badge: "Updated January 2026" ✅
- H1: "Calculator [2026]" ✅
- Schema dateModified: "2026-01-01" ✅
- Build: 189/189 ✅

---

## 2026-02-21 — P1 #4 Cost Calculator: Pricing Data Extraction

**Scope**: 1 new file, 1 edited file, 2 doc files

### Changes
- **Created** `data/pricing/flood-doctor-rates.ts` — typed pricing module with `FloodDoctorPricing` interface and `currentPricing` export
- **Edited** `pages/resources/WaterDamageCostCalculator.tsx` — replaced inline 70-line pricing object with import from data module; schema `dateModified` now reads `currentPricing.lastUpdated`
- **Zero UI/layout changes** — calculator inputs, outputs, and copy unchanged
- **Build**: 189/189 routes ✅

### Pricing Module Structure
| Export | Type | Purpose |
|--------|------|---------|
| `FloodDoctorPricing` | interface | Full rate sheet shape (equipment, labor, perSqFt, fixed, perLF) |
| `currentPricing` | const | Current Xactimate-based rates (version 2026-01) |

### Verification
Baseline scenario (residential, 500sqft, class 2, cat 1, regular): $2,770–$3,748 — identical before/after.

---

## 2026-02-21 — P2 #8 Phase 4: QA Sweep + Close Priority

**Scope**: 1 file updated (validate-neighborhoods.ts) + 3 doc files

### Validator Enhancements (8 checks total)
| # | Check | Result |
|---|-------|--------|
| 1 | Title exists + ≤60 chars | 68/68 ✅ |
| 2 | H1 exists + non-empty | 68/68 ✅ |
| 3 | Internal link blocks present | 68/68 ✅ |
| 4 | Schema: BreadcrumbList, LocalBusiness, Service | 68/68 ✅ |
| 5 | Word count ≥1200 | 8/68 pass, 60 warnings (content volume) |
| 6 | Canonical matches `https://{city}.flood.doctor/neighborhoods/{slug}/` | 68/68 ✅ |
| 7 | Breadcrumb schema: Home → City → Neighborhood | 68/68 ✅ |
| 8 | Related service link paths exist in build output | 68/68 ✅ |

### Uniqueness Audit
- Duplicate titles: **0** (68/68 unique)
- Duplicate H1s: **0** (68/68 unique)

### Build
- Main: 189/189 ✅
- Cities: 436/436 ✅ (58.8s)

### Priority Closed
- P2 #8 (Neighborhood Page Redesign) marked ✅ Complete in OPEN_PRIORITIES.md

---

## 2026-02-21 — P2 #8 Phase 3: Content Normalization + Consistency Validation

**Scope**: 1 file modified (DynamicNeighborhoodPage.tsx) + 1 new script + 2 doc files

### Formats Identified
| Format | Cities | Key Fields |
|--------|--------|------------|
| A | McLean, Fairfax, Great Falls, Springfield, Falls Church, Reston, Herndon, Ashburn, Alexandria, Arlington (shirlington), Vienna (tysons-woods) | meta, h1, heroSection, neighborhoodIntro, hyperLocalContent, serviceList, testimonialSection, emergencySection, faq, breadcrumbs |
| B | Lorton | meta, h1, introSection.paragraphs, processSection, localChallenges.challenges, faqSection, serviceAreaSection |
| C | Vienna (5 files) | hero, intro.paragraphs, services.servicesList[].features, faq.questions |
| D | Tysons (5 files) | heroH1, heroP, mainContent.overview.paragraphs, faqSection.faqs, closingContent |
| A-urban | Arlington (5 files) | Format A + buildingTypesSection.buildingTypes[].commonIssues |

### Normalization Improvements
- **Format C `services.servicesList[].features`**: Now folded into service descriptions as bullet points
- **Format C `intro.paragraphs`**: Now captured for intro paragraph (was missing)
- **Format C `hero.*`**: Now mapped to heroSection and meta (was falling through to defaults)
- **Format A-urban `buildingTypesSection`**: Building types mapped to subdivisions; commonIssues extracted
- **Format B `localChallenges`**: Challenges mapped to commonIssues with title + truncated description
- **FAQ fallback**: Pages with no FAQ data now receive 6 standard neighborhood-specific questions
- **Testimonials**: Empty array correctly causes section omission (renderer conditional already handles)

### Validation Script
Added `scripts/validate-neighborhoods.ts` — checks all 68 pages for:
- Title exists and ≤60 chars (with HTML entity decoding)
- H1 exists and non-empty
- At least 1 link block (Related Services or Nearby Neighborhoods)
- Schema types: BreadcrumbList, LocalBusiness, Service present
- Word count ≥1200 (warning only)

### Verification
| Check | Result |
|-------|--------|
| Main build | 189/189 ✅ |
| City build | 436/436 ✅ |
| Validator failures | 0/68 ✅ |
| Validator warnings | 60 (word count < 1200 — content volume, not normalization) |
| Vienna Format C: services populated | ✅ (22 service links per page) |
| Vienna Format C: testimonials omitted | ✅ (no fabricated data) |
| Vienna Format C: FAQ present | ✅ (2 source questions preserved) |
| Files outside scope | 0 modified ✅ |

---

## 2026-02-21 — P2 #8 Phase 2: Internal Linking + Semantic Hierarchy

**Scope**: 2 files modified (NeighborhoodPageRenderer.tsx, DynamicNeighborhoodPage.tsx) + 2 doc files

### What Changed

**Intro Heading (NeighborhoodPageRenderer.tsx)**:
- Added `<h2>Water Damage Restoration in {Neighborhood}</h2>` after hero, before intro content
- Establishes correct semantic hierarchy: H1 (hero) → H2 (intro) → H2 (services) etc.

**Related Services Block (NeighborhoodPageRenderer.tsx)**:
- New section after Services Grid with heading "Water Damage Services in {City}"
- 4 contextual links to city service detail pages using canonical nested paths:
  - Water Damage Restoration, Mold Remediation, Sewage Cleanup, Basement Flooding
- Links use existing text styling (blue, underline on hover)

**Nearby Neighborhoods Block (NeighborhoodPageRenderer.tsx)**:
- New section before Final CTA with heading "Nearby Neighborhoods in {City}"
- Dynamically populated from contentRegistry with 2-3 sibling neighborhood links
- Excludes current neighborhood automatically
- Standard text links (no buttons)

**Props Extended (NeighborhoodPageRenderer.tsx + DynamicNeighborhoodPage.tsx)**:
- Added `neighborhoodSlug` and `siblingNeighborhoods` props to renderer
- DynamicNeighborhoodPage computes siblings from contentRegistry via useMemo

### Verification
| Check | Result |
|-------|--------|
| Main build | 189/189 ✅ |
| City build | 436/436 ✅ |
| Body links (lorton/laurel-hill) | 139 ✅ |
| Body links (arlington/ballston) | 140 ✅ |
| Body links (vienna/clarks-crossing) | 139 ✅ |
| H2 intro heading | All 68 pages ✅ |
| Related Services block | All 68 pages ✅ |
| Nearby Neighborhoods block | All 68 pages ✅ |
| Schema intact | BreadcrumbList, LocalBusiness, Service, FAQPage ✅ |
| Files outside scope | 0 modified ✅ |

---

## 2026-02-21 — P2 #8 Phase 1: Neighborhood Schema Expansion + Title Normalization

**Commits**: See below
**Scope**: 2 files modified (NeighborhoodPageRenderer.tsx, DynamicNeighborhoodPage.tsx) + 2 doc files

### What Changed

**Title Normalization (normalizeContent in DynamicNeighborhoodPage.tsx)**:
- All 68 neighborhood page titles normalized to ≤45 chars before PageMeta appends " | Flood Doctor" (total ≤60)
- Strips pipe-delimited differentiator segments (e.g., "| New Construction Specialists | Flood Doctor")
- Standard format: "Water Damage Restoration {Neighborhood}"
- Fallback for long names: "{Neighborhood} Water Damage"
- 13 titles were previously >60 chars rendered; now 0

**Schema Expansion (NeighborhoodPageRenderer.tsx)**:
- Added `@graph` schema array with 4 entity types to every neighborhood page:
  - **BreadcrumbList**: Home → {City} Water Damage → {Neighborhood}
  - **LocalBusiness**: City-level business with Neighborhood-scoped areaServed, DPOR/IICRC credentials, 24/7 hours
  - **Service**: Water Damage Restoration for specific neighborhood, with ServiceChannel/ContactPoint
  - **FAQPage**: Preserved existing FAQ schema (moved into @graph)
- Imported SITE_PHONE, SITE_INFO, CREDENTIALS, COMPANY_ADDRESS from config/constants
- PageMeta handles @graph normalization and deduplication

### Verification
| Check | Result |
|-------|--------|
| Main build | 189/189 ✅ |
| City build | 436/436 ✅ |
| Titles ≤60 chars | 68/68 ✅ (max: 60) |
| BreadcrumbList schema | All 68 pages ✅ |
| LocalBusiness schema | All 68 pages ✅ |
| Service schema | All 68 pages ✅ |
| FAQPage schema | All 68 pages ✅ |
| Files outside scope | 0 modified ✅ |

---

## 2026-02-21 — P0 #11: Production Deployment of CityLift Changes

**Scope**: 1 file modified (scripts/deploy.sh) + 13 stale files deleted from production server

### What Changed
- **Deleted 13 stale city sitemap XML files** from production (`~/public_html/flood.doctor/sitemaps/`): alexandria, arlington, ashburn, fairfax, fallschurch, greatfalls, herndon, lorton, mclean, reston, springfield, tysons, vienna
- **Removed stale `sitemaps/` subdirectory** nested inside the sitemaps directory (artifact from earlier deploy)
- **Updated `scripts/deploy.sh`** with Step 2b: dedicated rsync with `--delete` flag scoped to `sitemaps/` directory only — prevents stale sitemap accumulation on future deploys without risking deletion of other production files
- **Fixed expect script** in Step 2b to handle SSH key auth (no password prompt) gracefully via `exp_continue`
- **Fixed production permissions** (chmod 755/644) after rsync changed file modes

### Verification
| Check | Result |
|-------|--------|
| Homepage | 200 ✅ |
| sitemap-index.xml | 200 ✅ |
| sitemap-main.xml | 200 ✅ |
| reston.flood.doctor sitemap | 200 ✅ |
| 10 smoke test URLs (following redirects) | All 200 ✅ |
| 13 stale city sitemaps on flood.doctor | All 404 ✅ |
| Fake route (main domain) | 404 ✅ |
| Fake route (city subdomain) | 301→404 ✅ |
| Canonical spot-check (3 city pages) | All correct nested paths ✅ |
| Cloudflare cache purge | success: true ✅ |

---

## 2026-02-19 — CityLift P5.1: Legacy Canonical Gap + Audit Artifact Cleanup

**Commits**: `4053cf2`, `aa7a6b1`
**Scope**: 9 content files + .gitignore

### What Changed
- **Added `meta.canonical`** to 9 old-format service content files that lacked canonical URLs entirely:
  - Alexandria: water-damage, burst-pipe, flood-cleanup, fire-damage, basement-flooding (Format A: `heroSection`/`introduction`)
  - Tysons: water-damage, burst-pipe, flood-cleanup, basement-flooding (Format B: `heroH1`/`heroP`)
- **Root cause**: These files predated the `meta` block pattern and imported from a non-existent `../../types` module (transpiler ignores, no runtime impact)
- **Gitignored `citylift/audit/`** — untracked 5 ephemeral analysis JSON artifacts to eliminate rebuild noise

### Verification
- Build: 189/189 ✅
- Service files missing canonical: 0 (was 9)
- Known exception: `arlington/services/emergency-water-removal` (extra page, not in standard 8-service matrix)

---

## 2026-02-18 — CityLift P5: Canonical URL Normalization + Sitemap Cleanup

**Commits**: `a80ac11`, `8d702ed`
**Scope**: 87 content files + sitemap generator + 13 stale XML files

### What Changed
- **Fixed 87 canonical URLs** across all 13 cities × 8 services from flat paths (`/services/water-damage`) to correct nested served paths (`/services/residential/restoration-services/water-damage-restoration/`)
- **Removed legacy city sitemap generation** from `generate-sitemaps.ts` — was producing flat-slug URLs that conflicted with the nested paths served by `build-cities.ts`
- **Deleted 13 stale city sitemap XML files** from `public/sitemaps/`
- **Key discovery**: `PageMeta.tsx` auto-generates canonical from browser pathname at runtime; content file `meta.canonical` is for data consistency, not directly rendered in HTML

### Canonical Mapping (service slug → nested path)
| Flat Slug | Nested Path |
|-----------|-------------|
| water-damage | restoration-services/water-damage-restoration |
| burst-pipe | restoration-services/burst-pipe-cleanup |
| flood-cleanup | restoration-services/flood-cleanup |
| storm-damage | restoration-services/storm-damage-restoration |
| fire-damage | cleanup-services/fire-smoke-cleanup |
| mold-remediation | cleanup-services/mold-remediation |
| sewage-cleanup | cleanup-services/sewage-cleanup |
| basement-flooding | specialty-services/basement-flooding |

### Verification
- Build: 189/189 ✅
- Flat-path canonicals: 0
- Missing canonicals: 0

---

## 2026-02-18 — CityLift P1: Herndon + Springfield Storm-Damage Upgrade

**Scope**: 2 files modified (storm-damage content files)
**Commit**: `4c94676`

### What Changed
- **Replaced stormTypes + emergencyServices** with `localChallenges` (5 city-specific problem→solution items) and `equipmentSection` (8 items with brands: Prochem, FLIR, Dri-Eaz, Honda)
- **Added TypeScript `ServicePageContent` interface** matching Vienna/Great Falls baseline
- **Expanded neighborhoods** from 10 → 15 per city
- **Added 2 FAQs** per page (6 → 8 questions)
- **Added `/roof-leak-damage`** to related services (4 → 5)
- **Localized pricing** with city-specific intro and 7 factors (from 5 generic)
- **E-E-A-T signals**: IICRC certification, thermal imaging, moisture mapping, building envelope terminology, direct billing, Xactimate estimates

### Metrics
| City | Before | After |
|------|--------|-------|
| Herndon | 1,428 words / ~74 score | 2,814 words / ~97 projected |
| Springfield | 1,405 words / ~74 score | 2,973 words / ~98 projected |

### Herndon Local Themes
- Fox Mill mature canopy hazards (1970s-80s plantings)
- Worldgate/Franklin Farm shared-roof townhome damage
- Sugarland Run watershed flooding
- Aging colonial roof systems
- Power outage cascade failures

### Springfield Local Themes
- Split-level below-grade flooding
- Accotink Creek watershed overflow
- Kingstowne shared-structure townhome damage
- West Springfield 1960s mature canopy
- Power outage sump pump failures

---

## 2026-02-16 — Service Detail Post-Process Layout Redesign

**Scope**: 4 files (2 modified, 2 new components)

### What Changed
- **Removed nested sidebar** from ServiceDetailedContent — fixes cramped mobile UX
- **Added TopicJumpLinks** — horizontal scrollable chip row for section navigation (mobile + desktop)
- **Added RelatedResourcesCard** — sidebar card with 4 verified internal links (cost calculator, project package, insurance guide, water damage categories)
- **Added section H2** (`id="guide"`) above accordion for proper heading hierarchy
- **Accordion h2→h3** — accordion titles now render as `<h3>` under the section H2
- **Controlled accordion** — parent lifts openIndex state so jump links open the correct section
- **Mobile sidebar slimmed** — only RelatedResourcesCard on mobile; EmergencyServiceCard + Quick CTA desktop-only (ServiceCTASticky handles mobile CTA)
- **Accessibility** — `aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby` on accordion items; `scroll-margin-top` for nav offset

### Verification
- Build: PASS (189/189 routes pre-rendered)
- H1 count: 1 per page (3 pages spot-checked)
- Heading hierarchy: H1→H2→H3 correct on all checked pages
- No new build warnings
- Titles >60: 0 | Duplicates: 0
- No broken internal links

---

## 2026-02-16 — P2 #6 Standard Project Package

**Commits**: `2577082`, `659c16f`, `a7fed9c`
**Scope**: 5 files (1 new resource page, 2 hub integrations, 1 route config, 1 sitemap)

### What Changed
- **New page**: `/resources/standard-project-package/` — Complete scope definition for standard water damage restoration service
  - 876-line React component with 6 service groups, 4 "NOT included" categories, standard assumptions, 4 documentation phases, 12 FAQs
  - Hero with promise statement + stats (60min response, 4-10 days, IICRC S500)
  - Service groups: Emergency Response, Water Extraction, Structural Drying, Antimicrobial Treatment, Containment & Protection, Documentation
  - NOT included: Reconstruction, mold remediation (>10 sq ft), contents pack-out, building code upgrades
  - IICRC standard assumptions: Category 1-3 classification, drying goals, timeline expectations, property access requirements
- **Schema**: Service + FAQPage (12 questions) + BreadcrumbList combined via PageMeta
- **Integration**: Added to ResourcesHub as first primary featured resource with Package icon and Unsplash image
- **Cross-links**: Referenced in WaterDamageCostCalculator FAQ ("See our complete Standard Project Package for full scope details")
- **Sitemap**: Regenerated sitemap-main.xml (189 URLs total, new URL included)
- **Bug fix**: Escaped apostrophe in equipment inventory detail string to resolve build error

### Production Verification (2026-02-16)
| Check | Result |
|-------|--------|
| Standard Project Package page | 200, 122.6KB pre-rendered HTML |
| JSON-LD | 1 block: Service + FAQPage (12 questions) + BreadcrumbList (4 items) |
| ResourcesHub featured card | Present, links to new page |
| Fake routes (2 tested) | All 404 |
| Cloudflare cache purge | Confirmed (Zone: 7b3b2f087429c5c3e9688253d8df11eb) |

---

## 2026-02-16 — P1 #4 Cost Calculator Fixes + Deploy

**Commit**: `f0b57c9`
**Scope**: 7 files (1 calculator page, 5 blog posts, 1 resource page)

### What Changed
- **Bug fix**: HTML entity `&lt;` rendered literally in damage class description → replaced with `<`
- **Bug fix**: Range input `parseInt` could produce NaN → added fallback
- **Schema**: Replaced incorrect `Article` schema with `WebApplication` (+ Offer, creator, dateModified)
- **SEO**: Meta description shortened from 189 → 145 chars; dateModified set to `2026-01-01`
- **Legal**: Added estimate disclaimer under price range: "Estimate only. Actual costs may vary."
- **A11y**: Added `role="group"` + `aria-labelledby` to 5 button groups, `role="switch"` + `aria-checked` to toggle, `htmlFor`/`id` bindings, `min`/`max` + clamp on number input
- **Internal links**: Added 4 outbound links (Related Resources section) + 6 inbound links from blog/resource pages

### Production Verification (2026-02-16)
| Check | Result |
|-------|--------|
| Calculator page | 200, meta desc present (145 chars) |
| JSON-LD | 1 block: WebApplication + FAQPage + BreadcrumbList |
| Disclaimer | Rendered in HTML |
| 6 inbound link pages | All contain `/resources/cost-calculator/` link |
| Fake routes (3 tested) | All 404 |
| Cloudflare cache purge | Confirmed |

---

## 2026-02-15 — P0 Schema Rollout + Production Deploy

**Commits**: `8a1c104`, `26b21cb`, `d60631a`, `9b58d61`, `7b00553`, `81f7bb4`
**Scope**: 106 files across all page categories

### What Changed
- **Phase 1**: Fixed PageMeta.tsx to emit `@graph` wrapper for schema arrays and deduplicate entities
- **Phase 2**: Replaced inline JSON-LD across 75 files (45 blog, 29 location, 1 landing template)
  - Blog posts: Article + BreadcrumbList + LocalBusiness + FAQPage via `generateBlogArticleSchema()`
  - Location pages: BreadcrumbList + LocalBusiness + FAQPage via `generateLocationPageSchema()`
  - Landing pages: Service + BreadcrumbList + FAQPage via `generateServicePageSchema()` (single template change covers 23 pages)
- **Phase 3**: Added Service + BreadcrumbList to both service detail templates; BreadcrumbList to LocationsHub, ResourcesHub, BlogIndex
- **Phase 4**: Added Article + BreadcrumbList to all 25 resource pages; guides already had proper HowTo + BreadcrumbList

### Production Verification (2026-02-15)
| Check | Result |
|-------|--------|
| Valid routes (17 sampled) | All 200 |
| 301 redirects (5 sampled) | All single-hop 301 |
| Fake routes (5 sampled) | All real 404 |
| Cloudflare cache purge | Confirmed |
| JSON-LD spot-check (5 pages) | All correct: single @graph, proper types, no duplicate LocalBusiness in dynamic schema |

**Known pre-existing**: `index.html` contains a hardcoded site-wide LocalBusiness `<script>` tag (separate from PageMeta). This predates the schema rollout and appears as a second ld+json script on every page. Removal is a separate task.

### Before/After
| Metric | Before | After |
|--------|--------|-------|
| Blog posts with Article schema | 0/45 | 45/45 |
| Location pages with BreadcrumbList | 0/29 | 29/29 |
| Landing pages with Service schema | 0/23 | 23/23 |
| Resource pages with Article schema | 0/25 | 25/25 |
| Service pages with Service schema | 0 | All |
| Build | 188/188 | 188/188 |

---

## 2026-02-15 — Title Tag Shortening (All Pages)

**Commits**: `c4324e9`
**Scope**: 119 files across all page categories

### What Changed
- Shortened all 188 page titles to ≤ 60 characters (rendered with " | Flood Doctor" suffix)
- Removed phone numbers from location page titles
- Removed "Northern Virginia", "NoVA", year brackets from blog titles
- Removed duplicate modifiers ("24/7", "Emergency") where they pushed titles over limit
- Standardized patterns:
  - City landing: "Water Damage Restoration in {City}, VA"
  - Blog: "{Topic}: {Benefit}" (≤ 45 chars source)
  - Location: "{Service} in {City}, VA"
  - Insurance: "{Carrier} Water Damage Claim Guide"
  - Guides: Short descriptive title (no pipes, no region)
  - Resources: Short descriptive title

### Before/After
| Metric | Before | After |
|--------|--------|-------|
| Pages > 60 chars | 118 (62.8%) | 0 (0%) |
| Duplicate titles | 0 | 0 |
| Build | 188/188 | 188/188 |

---

## 2026-02-13 — SEO Audit & Structural Fixes

**Commits**: `ef0cf7c`, `0c650fc`, `3694da0`, `c5b96ce`, `fb13820`, `047d48d`
**Scope**: 94+ files

### What Changed
- Replaced SPA catch-all fallback with real 404 handling
- Eliminated double "| Flood Doctor" from 29 page titles
- Fixed all broken internal links across 94 source files
- Consolidated 8 duplicate city water-damage pages into keyword landing pages with 301 redirects
- Cleaned sitemaps (removed test pages, redirect URLs)
- Fixed duplicate H1 tags (ServicesHub residential vs commercial)
- Regenerated sitemaps with correct lastmod dates

### Before/After
| Metric | Before | After |
|--------|--------|-------|
| Broken internal links | 12+ | 0 |
| Duplicate titles | 29 | 0 |
| Duplicate H1 | 2 | 0 |
| Soft 404s | Yes (SPA fallback) | No (real 404) |

---

## Pre-2026-02 — Prerender Pipeline & Infrastructure

**Commits**: `5d0048e` through `da0e558`
**Scope**: Build system, routing, sitemaps

### What Changed
- Added Playwright-based prerender engine (scripts/prerender.ts)
- Created config/routes.ts as single source of truth for all routes
- Added prerender verification step to build chain
- Refactored sitemap generation to use shared route config
- Added hydration detection to index.tsx
- Added PageMeta __PRERENDER_READY__ flag
