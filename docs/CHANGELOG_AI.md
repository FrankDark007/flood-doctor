# CHANGELOG_AI.md

Running log of major AI-assisted work batches.

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

### Production Verification (pending deployment)
| Check | Result |
|-------|--------|
| Standard Project Package page | (to be verified) |
| JSON-LD | (to be verified) |
| ResourcesHub featured card | (to be verified) |
| Fake routes (2 tested) | (to be verified) |
| Cloudflare cache purge | (to be verified) |

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
