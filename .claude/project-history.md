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

### 2026-02-17: DEV-Only Variant Gallery at `/__variants` — Complete

**What:** Discovered 56 page variants scattered across the repo (7 homepages, 4 GBP clones, 9 About/Contact/Services variants, 13 service detail variants, 10 service pages, 3 landing pages, 3 litho, 2 gemini, 3 dev tools, 2 templates) and wired them into a DEV-only gallery.

**Safety approach:** Zero changes to production imports. All variant imports live in a self-contained registry (`pages/__variants/registry.ts`) using `React.lazy()`. The route is `null` in production — completely tree-shaken.

**Files Created:**
- `pages/__variants/registry.ts` — 56-entry lazy registry
- `pages/__variants/index.tsx` — Gallery + slug viewer with floating dev banner

**Files Modified:**
- `App.tsx` — +2 lines (DEV-guarded import + route)
- `pages/VariantIndex.tsx` — Updated with tags and counts

**Commit:** `2594081` — feat: add DEV-only variant gallery at /__variants

**Verification:** Build 189/189, `/__variants` absent from dist, gallery renders all 56 variants in dev.

---

### 2026-02-16: Phase 2 — City Services Parity (Nested URLs + Content-Gated Nav) — Complete + Deployed

**What:** Gave all 13 city subdomains nested service URL structure matching the main site (`/services/residential/restoration-services/water-damage-restoration/` instead of flat `/services/water-damage/`), with content-gated visibility — only services with city content files are linked, prerendered, and visible in nav/hubs.

**Architecture:**
- City content files use flat slugs (e.g., `water-damage.ts`) that differ from main taxonomy slugs (e.g., `water-damage-restoration`). 4 of 8 have mismatches. Created a comprehensive slug mapping layer.
- `filterServiceIds` prop added to `CategoryLanding` for content-gating.
- Hub pages only show services with city content. Subcategory hubs redirect to parent if zero services match.
- Flat URLs 301 redirect to nested paths via .htaccess.

**Files Created (6):**
- `data/city-service-map.ts` — Slug mapping layer (mapCitySlugs, getFlatToNestedRedirects, getCityServiceRoutes)
- `pages/city-app/CityServiceDetailLegacyRedirect.tsx` — SPA-side flat→nested redirect
- `pages/city-app/CityResidentialHub.tsx` — Content-gated residential hub
- `pages/city-app/CityCommercialHub.tsx` — Content-gated commercial hub
- `pages/city-app/CitySubcategoryHub.tsx` — Content-gated subcategory hub
- `docs/plans/2026-02-16-city-services-parity-phase-2.md` — Implementation plan

**Files Modified (8):**
- `hooks/useCityApp.ts` — Added getCityServiceMap(), hasCityServiceContent(), CityServiceMapEntry
- `scripts/build-cities.ts` — Inject __FLOOD_DOCTOR_CITY_SERVICE_MAP__, dynamic .htaccess redirects, nested sitemap routes
- `scripts/prerender.ts` — Content-gated nested routes via getCityServiceRoutes()
- `CityApp.tsx` — Nested route tree (audience/subcategory/detail routes)
- `pages/city-app/CityServicesHub.tsx` — Rewritten with content-gated ServiceArchiveGrid
- `pages/templates/CategoryLanding.tsx` — Added filterServiceIds prop
- `components/layout/Header.tsx` — Content-gated mega menu (Residential/Commercial columns)
- `components/layout/MobileMenu.tsx` — Residential/Commercial sections via getCityServiceMap()
- `components/layout/Footer.tsx` — Added Residential/Commercial hub links

**Key Metrics:**
- Route count: 656 → 436 (content-gated, no dead routes)
- 4 slug mismatches handled: water-damage→water-damage-restoration, fire-damage→fire-smoke-cleanup, storm-damage→storm-damage-restoration, burst-pipe→burst-pipe-cleanup
- Arlington alias: emergency-water-removal→water-damage-restoration

**Commits (8):**
- `c4a7bf9` — docs: add Phase 2 parity audit and implementation plan
- `91e77bc` — feat: add city-to-main service slug mapping layer
- `f6631b8` — feat: inject city service map with nested paths at build time
- `455dac4` — feat: add nested service routes and content-gated hub pages to CityApp
- `f59d55d` — feat: generate flat-to-nested 301 redirects in city .htaccess
- `b4fd3dc` — feat: content-gated nested routes for city prerender and sitemap
- `021429e` — feat: replace city nav flat dropdown with content-gated mega menu
- `cda78c8` — feat: update city mobile menu and footer with nested service structure

**Verification:**
- Main build: 189/189 ✅
- City prerender: 436/436 ✅
- 13/13 city sites deployed
- Nested URL returns 200, flat URL 301→nested ✅
- Canonical = city subdomain ✅
- No flood.doctor links in city nav ✅

---

### 2026-02-16: City Subdomain Nav Link Fix — Complete + Deployed

**What:** Fixed all header/footer/mobile-menu links on city subdomains that were 404ing because shared layout components used React Router `<Link>` for paths that only exist on the main domain.

**Solution:** Created a NavLink smart component that detects city context via `window.__FLOOD_DOCTOR_CITY__` and renders `<a href="https://flood.doctor/...">` for main-domain-only paths while keeping city-local paths as `<Link>` for SPA navigation. Also added 10 single-hop 301 redirect rules in city .htaccess for crawled/bookmarked URLs.

**Files Created (2):**
- `hooks/useCityApp.ts` — City context detection (`isCityApp()`, `mainDomainUrl()`)
- `components/layout/NavLink.tsx` — Smart link with city-local route allowlist + special `/services/` handling

**Files Modified (4):**
- `components/layout/Header.tsx` — Link→NavLink for all nav links
- `components/layout/Footer.tsx` — Link→NavLink for all footer links
- `components/layout/MobileMenu.tsx` — Link→NavLink for all mobile menu links
- `scripts/build-cities.ts` — 10 redirect rules in .htaccess (residential, commercial, locations, resources, reviews, nearme, awards, careers, privacy-policy, terms)

**Key Design Decisions:**
- Allowlist pattern: city-local routes explicitly listed; new main-domain routes auto-excluded
- `/services/residential/` and `/services/commercial/` explicitly excluded (audience hubs, not city routes)
- `/guides/` index excluded (city app has only specific guide sub-paths)
- Two-layer fix: client-side NavLink prevents broken links + server-side 301s catch crawled URLs

**Bug Fixed During Implementation:**
- First NavLink version classified `/services/residential/` as city-local (segments.length <= 2 matched). Fixed by adding explicit check for 'residential'/'commercial' segments.

**Commits:** `ed4cbd8`
**Deployed:** All 13 cities + main site. Browser verified on mclean.flood.doctor.

---

### 2026-02-16: Service Detail Post-Process Redesign — IMPLEMENTED

**What:** Executed the 9-task redesign plan in one batch. Redesigned service detail page layout after process tiles for better mobile UX, cleaner heading hierarchy, and enhanced sidebar.

**Files Changed (4):**
1. `pages/templates/ServiceDetailNew.tsx` — post-process area redesigned with TopicJumpLinks, section H2, controlled accordion, mobile/desktop sidebar split
2. `generated-layouts/service-page/ServiceDetailedContent.tsx` — removed nested sidebar, h2→h3, added controlled openIndex prop, aria attributes
3. `components/sections/TopicJumpLinks.tsx` — NEW horizontal scrollable chip navigation
4. `components/sections/RelatedResourcesCard.tsx` — NEW sidebar card with 4 internal links

**Key Decisions:**
- Lifted accordion `openIndex` state to parent so jump links can open sections (code review catch)
- Changed RelatedResourcesCard heading from `<h3>` to `<span>` to avoid orphaned heading in sidebar
- Added `aria-expanded`, `aria-controls`, `role="region"`, `aria-labelledby` to accordion (a11y fix)
- Added `scroll-margin-top: 100px` to section divs so scrollIntoView clears sticky navbar

**Verification:** Build PASS, 189/189 routes, 1 H1/page, correct H1→H2→H3, 0 titles >60, 0 duplicates

---

### 2026-02-16: Service Detail Post-Process Redesign — Plan Created + Reviewed + Patched

**What:** Created, peer-reviewed, and patched implementation plan for redesigning service detail page layout after the process tiles section.

**Goal:** Improve mobile UX, simplify nested layouts, add SEO improvements (heading hierarchy, internal links), enhance sidebar with related resources.

**Plan Document:** `docs/plans/2026-02-16-service-detail-post-process-redesign.md`

**Session 1 — Plan Creation:**
- Audited ServiceDetailNew.tsx (247 lines) and ServiceDetailedContent.tsx (176 lines)
- Identified 5 issues: nested multi-column, no jump links, missing resources, heading hierarchy, hidden mobile sidebar
- Wrote 10-task implementation plan with code snippets and acceptance criteria

**Session 2 (Opus 4.6) — Plan Review + Patch:**
Peer-reviewed the plan and identified 5 issues. Applied all fixes:
1. **Heading hierarchy**: Accordion `<h2>` → `<h3>` (under section H2) — SEO correctness
2. **Removed redundant Task 8**: Duplicated Task 4 output, deleted and renumbered to 9 tasks
3. **Replaced scroll spy**: IntersectionObserver removed (brittle with collapsed accordions), replaced with deterministic `onSectionChange` callback synced to accordion `openIndex`
4. **Verified resource URLs**: All 4 confirmed in `config/routes.ts` (lines 174-180), documented with line references
5. **Slimmed mobile sidebar**: Only `RelatedResourcesCard` on mobile; EmergencyServiceCard + Quick CTA desktop-only; `ServiceCTASticky` already handles mobile emergency CTA

**Also this session:**
- Regenerated `docs/SESSION_BOOTSTRAP_CHATGPT.md` with current state (189 routes, all priorities updated, redesign plan as active work)
- Crafted and iterated execution prompt through 3 review rounds

**Commits:**
- `b213e8b` — docs: refine service detail post-process redesign plan
- `1713bd1` — docs: regenerate ChatGPT bootstrap with current state

**Files to Change (4 total):**
1. `pages/templates/ServiceDetailNew.tsx` (modify lines 173-225 only)
2. `generated-layouts/service-page/ServiceDetailedContent.tsx` (remove nested sidebar, add onSectionChange, h2→h3)
3. `components/sections/TopicJumpLinks.tsx` (NEW)
4. `components/sections/RelatedResourcesCard.tsx` (NEW)

**Status:** Plan patched, execution prompt finalized. Ready for ONE-BATCH execution in new session.
**Execution prompt:** Saved in `.claude/session.md` — copy-paste into fresh Claude Code session

---

### 2026-02-16: Standard Project Package (P2 #6) — Complete + Deployed

**What:** Implemented and deployed Standard Project Package resource page defining complete scope of water damage restoration service deliverables.

**Implementation:**
- Created 876-line `StandardProjectPackage.tsx` component
- 6 service groups (Emergency Response, Water Extraction, Structural Drying, Antimicrobial Treatment, Containment & Protection, Documentation & Reporting)
- 4 "NOT included" categories (Reconstruction, Mold Remediation >10 sq ft, Contents Pack-out, Building Code Upgrades)
- IICRC standard assumptions (Category 1-3 classification, drying goals, timeline expectations, property access requirements)
- 4 documentation phases with specific deliverables
- 12 FAQ items covering timeline, reconstruction, mold, cost, insurance, occupancy, certifications

**SEO Implementation:**
- Schema: Service + FAQPage (12 questions) + BreadcrumbList combined via PageMeta
- Title: "Standard Water Damage Restoration Package | Flood Doctor" (62 chars)
- Single H1, proper heading hierarchy
- Internal links from ResourcesHub (featured card) and Cost Calculator FAQ

**Cross-Site Integration:**
- Added to ResourcesHub as first primary featured resource with Package icon
- Added Unsplash hero image (https://images.unsplash.com/photo-1581578731548-c64695cc6952)
- Referenced in WaterDamageCostCalculator FAQ answer
- Route added to config/routes.ts
- Sitemap regenerated (189 URLs total)

**Bug Fix:**
- Escaped apostrophe in detail string ("What's running" → "What\'s running") to resolve build error

**Commits:**
- `2577082` — feat(resources): add Standard Project Package page with complete service scope definition
- `659c16f` — seo: link standard project package across site
- `a7fed9c` — fix: escape apostrophe in detail string
- `ed54d34` — chore: add P2 #6 standard project package to changelog
- `ea6b584` — chore: deploy and verify standard project package page

**Deployment:**
- Method: rsync via SSH (132.148.253.156)
- 548 files transferred
- Permissions set (755 directories, 644 .htaccess)
- Cloudflare cache purged (Zone: 7b3b2f087429c5c3e9688253d8df11eb)

**Production Verification (2026-02-16):**
- Page returns 200 (122.6KB pre-rendered HTML)
- JSON-LD valid: Service + FAQPage (12 questions) + BreadcrumbList (4 items)
- ResourcesHub featured card present and links correctly
- Fake routes return 404 as expected
- Live URL: https://flood.doctor/resources/standard-project-package/

**Impact:**
- P2 #6 complete
- Clear service scope documentation for clients and sales
- SEO benefit from Service schema and FAQ markup
- Internal linking improved (4 new contextual links)

---

### 2026-02-16: Cost Calculator Audit + Fixes (P1 #4)

**What:** Audited `/resources/cost-calculator/` for bugs, SEO, a11y, legal compliance. Found 15 issues. Fixed all Critical/High/Medium items.

**Fixes:** HTML entity bug, NaN guard, Article→WebApplication schema, meta desc shortened (189→145), estimate disclaimer, 5 role=group + aria-labelledby, toggle role=switch, id/htmlFor bindings, min/max clamp, 4 outbound + 6 inbound internal links.

**Commits:** `f0b57c9`, `9f8a699`
**Deployed:** 2026-02-16, verified on production.

---

### 2026-02-15: Schema Markup Audit (P0 #1) — Audit Only

**What:** Full JSON-LD schema coverage and compliance audit across all 188 prerendered pages.

**Key Findings:**
- `components/ui/PageMeta.tsx` is the sole active injection point (179 pages import it)
- `components/seo/*.tsx` (LocalBusinessSchema, BlogPostingSchema, FAQSchema, alternate PageMeta) are dead code for active routes
- `utils/schema.ts` has comprehensive generators (Article, LocalBusiness, BreadcrumbList, Service, FAQ, HowTo, WebSite, Organization, etc.) — most are unused

**Critical Issues:**
- **0/45 blog posts have Article/BlogPosting schema** — `generateBlogArticleSchema()` exists but no blog calls it
- **0/45 blog posts have BreadcrumbList**
- **0/21 location pages have BreadcrumbList**; 13/21 missing FAQPage
- **12/12 landing pages have only LocalBusiness** — missing Service, BreadcrumbList, FAQ
- **Duplicate LocalBusiness on ~8 location pages** — PageMeta serializes array as bare JSON array (not @graph), creating 2 conflicting LocalBusiness entities
- **3/3 service pages missing Service schema**

**Root Cause:** PageMeta uses single `<script id="json-ld-schema">`. When `schema` prop receives an array, `JSON.stringify` emits a bare JSON array instead of a `@graph` wrapper. Combined with other schema sources, this creates duplicate entities.

**Implementation Plan (5 phases):**
1. Fix PageMeta injection: array → `@graph` + entity dedupe (infrastructure)
2. Blog posts: add `generateBlogArticleSchema()` (45 pages, highest ROI)
3. Location pages: switch to `generateLocationPageSchema()` (21 pages)
4. Landing pages: add Service + BreadcrumbList + FAQ (12 pages)
5. Service/hub pages: add missing schema types

**Status:** Audit complete. All phases implemented (see below).

---

### 2026-02-15: Internal Linking Strategy Phase 1 (P1 #5)

**What:** Added 2-3 contextual internal links to each of 10 priority blog posts (30 total links). Links use React Router `<Link>` with natural anchor text pointing to related blog posts, service pages, and guides.

**Pages modified:**
- sewage-backup-cleanup-health-risks-virginia.tsx (3 links)
- emergency-water-damage-response-virginia.tsx (3 links)
- mold-growth-after-water-damage-timeline.tsx (3 links)
- homeowners-insurance-water-damage-virginia.tsx (3 links)
- hidden-water-damage-signs.tsx (3 links)
- burst-pipe-emergency-response.tsx (2 links)
- mold-after-water-damage-virginia.tsx (3 links)
- water-damage-restoration-cost-fairfax.tsx (3 links)
- water-damage-northern-virginia-guide.tsx (3 links)
- basement-flooding-guide.tsx (3 links)

**Link targets:** All 11 unique targets verified 200 in dist/. Hub-and-spoke pattern: mold-growth-timeline and insurance-coverage are hubs receiving most inbound links.

**Note:** Service pages deferred — content lives in `data/services.ts` as plain strings rendered via `{item.answer}`. Adding `<Link>` would require refactoring FAQ/content rendering to support JSX or `dangerouslySetInnerHTML`.

**Commits:** `81ccf21`
**Status:** Complete

---

### 2026-02-15: Remove Hardcoded LocalBusiness from index.html (P1 #3b)

**What:** Removed 52-line hardcoded `<script type="application/ld+json">` LocalBusiness block from `index.html`. This block was creating a duplicate ld+json script on every page alongside the dynamic PageMeta-injected schema.

**Verification:**
- Build: 188/188 pass
- 5 pages spot-checked: all have exactly 1 ld+json block (homepage, blog, location, service, resources)
- `@graph` present on pages with multiple entities (homepage, location, service)

**Commits:** `662c26c`
**Status:** Complete

---

### 2026-02-15: Location Meta Description Cleanup (P1 #3)

**What:** Removed phone numbers from all 28 location page meta descriptions (McLeanWaterDamage.tsx skipped — uses archetype component system with no inline PageMeta).

**Verification:**
- Build: 188/188 pass
- Grep: 0 phone patterns in location `description=` props
- Spot-check: 3 prerendered pages (Arlington, Fairfax, Herndon) confirmed clean

**Commits:** `7f17338`
**Status:** Complete

---

### 2026-02-15: Schema Rollout — Phase 1: PageMeta Infrastructure

**What:** Fixed PageMeta.tsx to emit `@graph` wrapper when schema prop receives an array, and deduplicate entities by `@type`+`@id`.

**Commits:** `8a1c104`
**Status:** Complete

---

### 2026-02-15: Schema Rollout — Phase 2: Blog, Location, Landing Pages

**What:** Replaced all inline JSON-LD schemas across 75 page files with centralized builder calls from `utils/schema.ts`. Executed via 9 parallel sub-agents.

**Blog Posts (45 files):**
- All inline `articleSchema`, `faqSchema`, `localBusinessSchema`, `combinedSchema`, `schemaData`, `schemaMarkup` declarations removed
- Replaced with `generateBlogArticleSchema()` → produces Article + BreadcrumbList + LocalBusiness + FAQPage in `@graph`
- Normalized prop from `structuredData=` to `schema=` on all 45 files
- Net: +1,056 / -2,885 lines

**Location Pages (29 files):**
- All inline schemas replaced with `generateLocationPageSchema()`
- 1 archetype component (`CityPageEstate.tsx`) also updated for McLeanWaterDamage delegation
- Locations agent created a migration script (deleted after use)
- Net: +462 / -2,085 lines

**Landing Pages (1 file):**
- Added `generateServicePageSchema()` to `KeywordLandingTemplate.tsx`
- Used `useLocation().pathname` for dynamic slug (config has no slug field)
- Single file change covers all 23 landing pages
- Net: +16 / -1 lines

**Commits:** `26b21cb` (blogs), `d60631a` (locations), `9b58d61` (landings)
**Status:** Complete — build 188/188

---

### 2026-02-15: Schema Rollout — Phase 3: Service Templates + Hub/Index Pages

**What:** Closed remaining schema gaps across service detail templates and hub/index pages.

**Changes:**
- `ServiceDetailNew.tsx` — FAQ-only inline schema → `generateServicePageSchema()` (Service + BreadcrumbList + FAQ)
- `ServiceDetail.tsx` — Same transformation
- `LocationsHub.tsx` — No schema → BreadcrumbList (Home > Locations)
- `ResourcesHub.tsx` — No schema → BreadcrumbList (Home > Resources)
- `BlogIndex.tsx` — No schema → BreadcrumbList (Home > Blog)

**Commits:** `7b00553`
**Status:** Complete — build 188/188, deployed to production

---

### 2026-02-15: ChatGPT Bootstrap Script + Plugin Optimization

**What:** Created `scripts/chatgpt-bootstrap.sh` (copies inlined bootstrap to clipboard), rewrote `docs/SESSION_BOOTSTRAP_CHATGPT.md` with all state inlined, added auto-regeneration rule to CLAUDE.md. Trimmed Claude Code plugins from ~90 → ~15 enabled (fixed 24.8k token agent description warning).

**Commits:** `80dd48b`
**Status:** Complete

---

### 2026-02-15: AI Project Memory System

**What:** Created durable documentation and automation so any AI agent can bootstrap into full project context.

**Files Created:**
- `docs/PROJECT_STATE.md` — Architecture, metrics (with auto-update markers), route breakdown, decisions, risks, guardrails
- `docs/AI_EXECUTION_PROTOCOL.md` — Governance rules, forbidden actions, SEO guardrails, deployment rules
- `docs/OPEN_PRIORITIES.md` — P0/P1/P2 ranked backlog (8 items)
- `docs/CHANGELOG_AI.md` — Running log of AI work batches
- `docs/SESSION_BOOTSTRAP_CLAUDE.md` — Copy-paste start/end/reload blocks
- `docs/SESSION_BOOTSTRAP_CHATGPT.md` — Copy-paste bootstrap message
- `scripts/update-project-state.mjs` — Scans dist/, patches METRICS markers in PROJECT_STATE.md
- `scripts/preflight-ai-session.sh` — Build + metrics + git + docs health check

**Commits:** `d142b23`, `cce5ac9`, `5b29b9f`
**Status:** Complete

---

### 2026-02-15: Title Tag Shortening — All 188 Pages

**What:** Shortened all page titles to ≤ 60 characters (rendered with " | Flood Doctor" suffix). Source titles ≤ 45 chars.

**Scope:** 119 files across all page categories (city landing, blog, static, location, guides, insurance, resources, other).

**Before:** 118 pages (62.8%) over 60 chars
**After:** 0 pages over 60 chars, 0 duplicate titles

**Patterns Applied:**
- City landing: "Water Damage Restoration in {City}, VA"
- Blog: "{Topic}: {Benefit}" (removed "Northern Virginia", year brackets)
- Location: "{Service} in {City}, VA"
- Insurance: "{Carrier} Water Damage Claim Guide"
- Guides/Resources: Short descriptive (no pipes, no region)

**Bug Fixed:** EmergencyWaterDamageRestoration shortened title matched homepage — changed to "24/7 Emergency Water Damage Restoration"

**Commits:** `c4324e9`
**Status:** Complete — 188/188 build, 0 over-60, 0 duplicates

---

### 2026-02-13: SEO Audit & Structural Fixes

**What:** Comprehensive SEO hygiene pass — broken links, duplicate titles/H1s, route consolidation, 404 handling, sitemap cleanup.

**Changes:**
- Replaced SPA catch-all fallback with real 404 handling
- Eliminated double "| Flood Doctor" from 29 page titles
- Fixed all broken internal links across 94 source files
- Consolidated 8 duplicate city water-damage pages into keyword landing pages with 301 redirects
- Cleaned sitemaps (removed test pages, redirect URLs)
- Fixed duplicate H1 tags (ServicesHub residential vs commercial)
- Regenerated sitemaps with correct lastmod dates

**Commits:** `ef0cf7c`, `0c650fc`, `3694da0`, `c5b96ce`, `fb13820`, `047d48d`
**Status:** Complete

---

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

### 2026-02-17: CityLift P0 — Service Title Normalization ✅

**What:** Normalized all 91 city service page meta titles from avg 78 chars (max 103) to ≤60 chars (max 59). Part of CityLift multi-phase SEO audit project (FD-CITYLIFT-PLAN-005).

**Root Cause:** Titles used pattern `{Service} {City}, VA | {Differentiator} | Flood Doctor` with double-pipe segments causing all titles to exceed Google's 60-char display limit.

**Fix:** Script-based deterministic refactor mapping 25+ service name variants to 9 canonical keywords. New pattern: `{Primary Keyword} in {City}, VA | Flood Doctor`. Also fixed CityServicesHub template title (64→53 chars for Falls Church).

**Results:**
- Before: 91/91 titles >60 chars | After: 0/91 titles >60 chars
- 0 duplicate titles, 0 duplicate H1s
- Build: 189/189 routes OK

**Key Decision:** Differentiator segments (e.g., "Estate Specialists", "High-Rise Specialists") removed from titles, preserved in meta descriptions. Logged in `citylift/DECISIONS.md`.

**Files Created:**
- `citylift/` directory (STATE.md, DECISIONS.md, ARTIFACTS.md)
- `citylift/audit/p0-before-metrics.json`
- `citylift/audit/p0-after-metrics.json`
- `scripts/citylift-p0-title-refactor.mjs`
- `scripts/citylift-p0-audit.mjs`
- `scripts/citylift-p0-after-audit.mjs`
- `scripts/citylift-test-titles.mjs`
- `docs/plans/2026-02-17-citylift-seo-audit-plan.md`

**Files Modified:**
- 91 service content files (`src/content/cities/*/services/*.ts`) — meta.title only
- `pages/city-app/CityServicesHub.tsx` — PageMeta title

**Commits:**
- `46ba6df` — feat: CityLift project infrastructure
- `7e31656` — feat: CityLift P0 baseline snapshot
- `5ac41b0` — feat: CityLift P0 — normalize all 91 service titles to ≤60 chars

**Next:** P1 (thin content remediation) — awaiting human approval

---
