# CHANGELOG_AI.md

Running log of major AI-assisted work batches.

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
