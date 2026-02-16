# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-16 01:30 AM

---

## 🔄 NEXT: Service Detail Post-Process Redesign — Ready to Execute

### Status: Plan patched and reviewed. Ready for ONE-BATCH execution in new session.

**Plan Document:** `docs/plans/2026-02-16-service-detail-post-process-redesign.md`
**Plan Version:** Patched (commit `b213e8b`) — all review feedback incorporated

### What This Does
Redesigns service detail page layout AFTER the process tiles section (lines 173-225) for:
- Better mobile UX (horizontal jump links, slim mobile sidebar)
- Cleaner desktop layout (remove nested sidebars)
- Improved SEO (proper H1→H2→H3 heading hierarchy, internal links)
- Enhanced sidebar (related resources card with 4 verified internal links)

### Plan Patches Applied (this session)
1. **Heading hierarchy fixed**: Accordion titles `<h2>` → `<h3>` (under section H2)
2. **Redundant task removed**: Old Task 8 deleted (duplicated Task 4), renumbered to 9 tasks
3. **Scroll spy replaced**: IntersectionObserver removed, replaced with deterministic accordion-synced active state via `onSectionChange` callback
4. **Resource URLs verified**: All 4 internal links confirmed in `config/routes.ts` lines 174-180
5. **Mobile sidebar slimmed**: Only `RelatedResourcesCard` on mobile; `ServiceCTASticky` handles emergency CTA; EmergencyServiceCard + Quick CTA are desktop-only

### EXACTLY 4 Files to Change
1. `pages/templates/ServiceDetailNew.tsx` — post-process area ONLY (lines 173-225)
2. `generated-layouts/service-page/ServiceDetailedContent.tsx` — remove nested sidebar, add `onSectionChange`, h2→h3
3. `components/sections/TopicJumpLinks.tsx` — NEW
4. `components/sections/RelatedResourcesCard.tsx` — NEW

### Execution Prompt (paste in new session)
The full execution prompt is saved below. Copy-paste it into a fresh Claude Code session:

```
ONE-BATCH EXECUTION. NO QUESTIONS. NO SCOPE CREEP.

Repo: flood-doctor (fd-google-redesign)
PLAN: docs/plans/2026-02-16-service-detail-post-process-redesign.md

USE (mandatory)
- /executing-plans (OVERRIDE: run ALL 9 tasks in ONE batch, ZERO checkpoints)
- /verification-before-completion
- Task(superpowers:code-reviewer)
- scripts/preflight-ai-session.sh
- scripts/update-project-state.mjs

OVERRIDE
- Commit cadence: SINGLE commit for entire change-set (do NOT commit per-task)

HARD BOUNDS (do not violate)
- Do NOT modify ServiceDetailNew.tsx lines 1–170
- Modify ONLY code AFTER the process tiles section and BEFORE the footer block
- Do NOT touch pages/fd-home-v4/*
- Do NOT change architecture, routing model, schema system, PageMeta, or .htaccess
- Do NOT add routes (prerendered route count must remain EXACTLY 189)
- Do NOT add meta tags outside PageMeta
- Do NOT modify any files other than the 4 explicitly listed below
- Keep: 1 canonical, 1 H1, title source ≤45 chars, strict H1→H2→H3 hierarchy
- No skipped heading levels (no H4 unless nested under H3 content)
- No IntersectionObserver / scroll spy
- No secrets

IMPLEMENT (single coherent diff — EXACTLY 4 files)
1) Modify: pages/templates/ServiceDetailNew.tsx
   - Post-process area ONLY (after process tiles)
2) Modify: generated-layouts/service-page/ServiceDetailedContent.tsx
   - Remove nested sidebar
   - Add onSectionChange callback
   - Convert accordion titles from h2 → h3
3) Create: components/sections/TopicJumpLinks.tsx
4) Create: components/sections/RelatedResourcesCard.tsx

Behavior requirements
- Remove nested sidebar from ServiceDetailedContent (fix cramped mobile UX)
- Add horizontal TopicJumpLinks (mobile + desktop)
- Add RelatedResourcesCard in sidebar with EXACTLY 4 internal links already present in config/routes.ts
- Mobile sidebar: ONLY RelatedResourcesCard (ServiceCTASticky owns mobile CTA)
- Desktop: keep emergency/quick CTA desktop-only per plan
- Active jump link MUST sync to accordion openIndex via onSectionChange callback (state-driven only)

VERIFY (must pass)
1) Run scripts/preflight-ai-session.sh and report results
2) Run /verification-before-completion with explicit checks:
   - npm run build PASS
   - No new build warnings introduced
   - prerender PASS
   - prerendered routes = EXACTLY 189
   - broken internal links = 0
   - titles > 60 = 0
   - duplicate titles = 0
   - duplicate H1 = 0
   - Spot-check 3 service pages:
       • mobile + desktop layout correct
       • heading hierarchy H1→H2→H3 correct
       • no sidebar duplication
       • jump link state sync working

REVIEW + FIX
- Run Task(superpowers:code-reviewer) on final diff
- Apply fixes ONLY if within bounds (no scope expansion)

DOCS + COMMIT
- Run scripts/update-project-state.mjs
- Update docs/CHANGELOG_AI.md with one concise entry (what changed + verification)
- Make ONE commit:
  message: "service-detail: post-process layout redesign"
  include verification notes in commit body

OUTPUT (strict)
- Execution Report:
  • files changed
  • key changes (bullets)
  • verification results (build, warnings, prerender, routes=189, links, titles/H1)
  • commit hash
- Risks (max 5 bullets)

BEGIN NOW.
```

### Hard Constraints
- Do NOT modify content above process tiles (lines 1-170)
- Do NOT change routes or PageMeta/schema logic
- Keep Related Services, Service Area Links, Sticky Bottom CTA unchanged
- EXACTLY 4 files, no more

---

## ✅ COMPLETE: Standard Project Package — P2 #6 (2026-02-16)

### Status: Deployed to Production

**Live URL:** https://flood.doctor/resources/standard-project-package/

### What Was Done
- Created 876-line StandardProjectPackage.tsx component
- 6 service groups, 4 "NOT included" categories, 12 FAQs
- Schema: Service + FAQPage (12Q) + BreadcrumbList
- Featured in ResourcesHub as first primary resource
- Referenced in Cost Calculator FAQ
- Sitemap regenerated (189 URLs)

### Commits
- `2577082` — feat(resources): add Standard Project Package page
- `659c16f` — seo: link standard project package across site
- `a7fed9c` — fix: escape apostrophe in detail string
- `ed54d34` — chore: add P2 #6 to changelog
- `ea6b584` — chore: deploy and verify

### Production Verification ✓
- Page returns 200 (122.6KB pre-rendered)
- JSON-LD valid (Service + FAQPage + BreadcrumbList)
- ResourcesHub integration working
- Fake routes return 404
- Cloudflare cache purged

---

## ✅ COMPLETE: Schema Markup Audit + Rollout — P0 #1 (2026-02-15)

### Status: ALL PHASES COMPLETE — Deployed to production

### Audit Findings (full report delivered to user)

**Architecture:**
- All 188 pages use `components/ui/PageMeta.tsx` exclusively
- `components/seo/*.tsx` are dead code (not used in active routes)
- `utils/schema.ts` has all needed generators (Article, LocalBusiness, BreadcrumbList, Service, FAQ, HowTo, etc.) — they exist but most pages don't call them

**Critical Issues Found:**
1. **0/45 blog posts have Article/BlogPosting schema** — `generateBlogArticleSchema()` exists but no blog page calls it
2. **0/45 blog posts have BreadcrumbList**
3. **0/21 location pages have BreadcrumbList**; 13/21 missing FAQPage
4. **12/12 landing pages have ONLY LocalBusiness** — missing Service, BreadcrumbList, FAQ
5. **Duplicate LocalBusiness on ~8 location pages** — array serialization creates bare JSON array + separate LocalBusiness = 2 conflicting entities
6. **3/3 service pages missing Service schema**

**PageMeta injection bug:**
- Single `<script id="json-ld-schema">` element
- When `schema` receives an array (e.g., `schema={[faqSchema, localBusinessSchema]}`), it serializes as bare JSON array, not `@graph`
- This + the `generateLocalBusinessSchema()` call elsewhere = duplicate LocalBusiness

**Implementation Plan (5 phases):**
1. Fix PageMeta: array → `@graph` handling + dedupe (INFRASTRUCTURE — do first)
2. Blog posts: add `generateBlogArticleSchema()` (45 pages, highest ROI)
3. Location pages: switch to `generateLocationPageSchema()` (21 pages)
4. Landing pages: add Service + BreadcrumbList + FAQ (12 pages)
5. Service/hub pages: add missing schema types

### Commits
- `8a1c104` — Phase 1: PageMeta @graph + dedupe infrastructure
- `26b21cb` — Phase 2: 45 blog posts → Article + BreadcrumbList
- `d60631a` — Phase 2: 29 location pages → BreadcrumbList + LocalBusiness
- `9b58d61` — Phase 2: 23 landing pages → Service + BreadcrumbList (via template)
- `7b00553` — Phase 3: Service templates + hub/index BreadcrumbList

### Result
Every content page now has structured data via centralized builders in `utils/schema.ts`. Deployed 2026-02-15.

---

## ✅ Statusline + ChatGPT Bootstrap (2026-02-15)

### Status: Complete

### What Was Done
- Created `scripts/chatgpt-bootstrap.sh` — copies latest bootstrap prompt to clipboard
- Rewrote `docs/SESSION_BOOTSTRAP_CHATGPT.md` with inlined state (no file references)
- Added auto-regeneration rule to CLAUDE.md (rule #5)
- Trimmed Claude Code plugins from ~90 enabled → ~15 (fixed 24.8k token agent warning)
- Committed: `80dd48b`

---

## ✅ AI Project Memory System (2026-02-15)

### Status: Complete — committed & pushed (`5b29b9f`)

### What Was Done

Created a durable AI project memory system so any AI agent (Claude Code, ChatGPT, etc.) can bootstrap into full project context in one prompt.

#### Files Created/Updated
| File | Purpose |
|------|---------|
| `docs/PROJECT_STATE.md` | Enhanced with auto-update metrics markers, route breakdown, decisions, risks |
| `docs/AI_EXECUTION_PROTOCOL.md` | Governance rules for AI agents (created prior commit) |
| `docs/OPEN_PRIORITIES.md` | P0/P1/P2 ranked backlog (8 items) |
| `docs/CHANGELOG_AI.md` | Running log of AI work batches (3 entries) |
| `docs/SESSION_BOOTSTRAP_CLAUDE.md` | Copy-paste blocks for Claude sessions |
| `docs/SESSION_BOOTSTRAP_CHATGPT.md` | Copy-paste bootstrap for ChatGPT |
| `scripts/update-project-state.mjs` | Auto-patches METRICS markers in PROJECT_STATE.md |
| `scripts/preflight-ai-session.sh` | Build + metrics + git health check |
| `.gitignore` | Added test/CI artifact patterns |

---

## ✅ Title Tag Shortening — All Pages (2026-02-15)

### Status: Complete — committed & pushed (`c4324e9`)

### What Was Done
- Shortened all 188 page titles to ≤ 60 characters rendered
- 118 pages (62.8%) were over → 0 over
- 0 duplicate titles maintained throughout
- Categories: city landing (10), blog (46), static (3), location (21), guides (10), insurance (6), resources (18), other (5)

---

## ✅ COMPLETE: Location Meta Description Cleanup — P1 #3 (2026-02-15)

### Status: Complete — committed (`7f17338`)

- Removed phone numbers from 28 location page meta descriptions
- McLeanWaterDamage.tsx skipped (uses archetype system, no inline PageMeta)
- Build: 188/188 pass
- Grep: 0 phone numbers in any location `description=` prop
- Spot-check: 3 prerendered pages verified clean

---

## Next Up
- See `docs/OPEN_PRIORITIES.md` for ranked backlog
- ~~P0: Schema Markup Audit (JSON-LD)~~ ✅ Complete + Deployed
- ~~P0: Production Deployment + Verification~~ ✅ Complete (2026-02-15)
- ~~P1 #3: Location Meta Description Cleanup~~ ✅ Complete (2026-02-15)
- ~~P1 #3b: Remove hardcoded LocalBusiness from index.html~~ ✅ Complete (2026-02-15)
- ~~P1 #4: Cost Calculator Audit + Fixes~~ ✅ Complete + Deployed (2026-02-16)
- ~~P1 #5: Internal Linking Strategy (Phase 1)~~ ✅ Complete (2026-02-15)

---

## ✅ COMPLETE: Cost Calculator Audit + Fixes — P1 #4 (2026-02-16)

### Status: Complete — Deployed to production

### Audit Findings (15 issues ranked Critical/High/Medium/Low)

### Fixes Applied
- **Bug**: HTML entity `&lt;` rendered literally in Class 2 description → fixed to `<`
- **Bug**: Range input NaN guard added (fallback to 50)
- **Schema**: Article → WebApplication (with Offer, creator, dateModified)
- **SEO**: Meta description 189 → 145 chars; dateModified = 2026-01-01
- **Legal**: Estimate disclaimer added under price range
- **A11y**: 5 button groups with `role="group"` + `aria-labelledby`, toggle with `role="switch"` + `aria-checked`, id/htmlFor bindings, min/max clamp
- **Links**: 4 outbound (Related Resources section) + 6 inbound from blog/resource pages

### Commits
- `f0b57c9` — fix(calculator): schema, a11y, links, and estimate safeguards
- `9f8a699` — chore: deploy and verify cost calculator improvements

---

## ✅ LATEST: Service Detail Longform Redesign (2026-02-08)

### Status: Complete

### What Was Done

- Redesigned longform service content into a lighter, magazine-style layout with summaries and expandable sections.
- Added sticky in-page navigation on service detail pages for fast scanning.

#### Files Updated
| File | Purpose |
|------|---------|
| `/generated-layouts/service-page/ServiceDetailedContent.tsx` | New longform layout with highlights + read-more |
| `/pages/templates/ServiceDetailNew.tsx` | Sticky section nav + anchor targets |

---

## ✅ LATEST: Indexing Hygiene (2026-02-08)

### Status: Complete

### What Was Done

- Marked internal/demo routes as noindex (Video Generator, Client Portal Demo, Work Authorization).

#### Files Updated
| File | Purpose |
|------|---------|
| `/pages/VideoGenerator.tsx` | noIndex meta |
| `/pages/ClientPortalDemo.tsx` | noIndex meta |
| `/pages/WorkAuthorization.tsx` | noIndex meta |

---

## ✅ LATEST: Conversion + SEO Polish Pass (2026-02-08)

### Status: Complete

### What Was Done

- Added header top bar with 24/7, response time, and license trust signals.
- Strengthened hero trust signals and ensured CTAs visible on mobile.
- Added 4.9★ rating to Trust Bar.
- Improved Request Service header clarity and added input autofill hints.
- Added schema to Resources Hub and Blog Index; added lazy loading to resource/blog images.
- Updated robots.txt to disallow dev/tools/demo routes from indexing.

#### Files Updated
| File | Purpose |
|------|---------|
| `/components/layout/Header.tsx` | Top trust bar with phone CTA |
| `/components/sections/HeroV14.tsx` | Trust chips + mobile CTAs |
| `/components/sections/TrustBarV14.tsx` | Rating chip |
| `/pages/RequestService.tsx` | Header copy + autocomplete/inputmode |
| `/pages/ResourcesHub.tsx` | Schema + lazy images |
| `/pages/BlogIndex.tsx` | Schema + lazy images |
| `/public/robots.txt` | Disallow dev/tools/demo |

---

## ✅ LATEST: SEO + Performance + Security Baseline (2026-02-08)

### Status: Complete

### What Was Done

- Hardened CSP and removed unused importmap (no runtime `esm.sh`).
- Fixed font mismatch (Plus Jakarta Sans + Inter) on main and city HTML templates.
- Removed duplicate font loading in `index.css`.
- Standardized `PageMeta` titles (avoid double branding) and added robots meta.
- Ensured JSON-LD schema updates cleanly on route changes.
- Added missing schema on ServiceDetail and Reviews pages.
- Added Organization + breadcrumb schema on Locations hub.
- Added schema on Request Service page.
- Disabled `DEBUG` in production config.
- Removed hard-coded Resend API key from Cloudflare worker; switched to env secret.

#### Files Updated
| File | Purpose |
|------|---------|
| `/index.html` | CSP tightened, removed importmap, font fixes |
| `/city.html` | CSP tightened, removed importmap, font fixes |
| `/index.css` | Removed duplicate font import |
| `/components/ui/PageMeta.tsx` | Title logic, robots meta, JSON-LD cleanup |
| `/pages/templates/ServiceDetailNew.tsx` | Full service schema + breadcrumbs |
| `/pages/Reviews.tsx` | Reviews schema added |
| `/pages/LocationsHub.tsx` | Organization + breadcrumb schema |
| `/pages/RequestService.tsx` | Contact schema |
| `/config/site.ts` | DEBUG=false |
| `/cloudflare-worker/form-handler.js` | RESEND_API_KEY via env |
| `/cloudflare-worker/wrangler.toml` | Secret setup note |

### Required Follow-ups

1. Set Cloudflare Worker secret:
   - `wrangler secret put RESEND_API_KEY` (required for form email delivery)

---

## ✅ LATEST: Independent City Subdomain Architecture (2026-02-07)

### Status: Complete

### What Was Done

Converted from single SPA with runtime subdomain detection to 13 truly independent city websites.

**Before:** `mclean.flood.doctor` → Same React app, runtime detection, `/city/mclean` routes
**After:** `mclean.flood.doctor` → Independent React app, `/` is homepage, no shared routing

#### New Files Created
| File | Purpose |
|------|---------|
| `/city.tsx` | Entry module for city subdomain builds |
| `/city.html` | HTML template with `window.__FLOOD_DOCTOR_CITY__` injection |
| `/CityApp.tsx` | City-specific router (/, /services/, /blog/, etc.) |
| `/contexts/CityFranchiseContext.tsx` | Static franchise provider (no runtime detection) |
| `/pages/city-app/*.tsx` | 9 city page components |

#### Modified Files
| File | Changes |
|------|---------|
| `/vite.config.ts` | Added `VITE_BUILD_MODE=city` conditional input |
| `/package.json` | Added `build:city` and `build:cities` scripts |
| `/scripts/build-cities.ts` | Now reads from `dist-city/`, removed `npm run build` |
| `/App.tsx` | Removed ~40 city routes and ~20 lazy imports |

### Build Commands

```bash
# Build city bundle once
npm run build:city

# Build all 13 city sites
npm run build:cities

# Test locally
npx serve dist-cities/mclean -l 3003 -s
```

### Architecture

```
flood.doctor           → App.tsx (main site only, NO city routes)
mclean.flood.doctor    → CityApp.tsx (independent, city="mclean" baked in)
arlington.flood.doctor → CityApp.tsx (independent, city="arlington" baked in)
...13 total city sites
```

### Output Structure

```
dist-cities/
├── mclean/
│   ├── index.html   (window.__FLOOD_DOCTOR_CITY__ = 'mclean')
│   ├── assets/      (CityApp bundle)
│   ├── sitemap.xml
│   ├── robots.txt
│   └── .htaccess
├── arlington/
└── ... (11 more)
```

### Cities Included
mclean, arlington, alexandria, fairfax, vienna, tysons, reston, herndon, ashburn, springfield, fallschurch, greatfalls, lorton

---

## ✅ LATEST: Security Fix + Plugin Optimization (2026-02-13)

### Status: Complete

### What Was Done

1. **GEMINI_API_KEY removed from frontend build** (commit `6111a02`)
   - Removed `define` block from vite.config.ts
   - Deleted VeoGenerator.tsx and VideoGenerator.tsx
   - Removed @google/genai from package.json, index.html, city.html, build-cities.ts
   - Cleaned netlify.toml and README.md
   - Hardened .gitignore with .env patterns
   - Verified no secrets in dist/

2. **Plugin ecosystem optimized** (commit `f7f2cb1`)
   - Pruned ~55 low-value plugins
   - Installed: ralph-loop, playground, claude-md-management, hookify (Anthropic official)
   - Installed: gemini-tools, headless (paddo-tools marketplace)
   - Installed MCP servers: Cloudflare, Context7
   - Enabled Agent Teams (experimental)
   - Configured ralph-loop as default for design/content work in ~/.claude/CLAUDE.md

3. **Claude Squad installed** — multi-agent terminal manager via tmux

---

## ✅ LATEST: Static Pre-Rendering Implementation (2026-02-13)

### Status: Complete — 197/197 routes pre-rendered and verified

**Spec:** `docs/PRERENDER_STATIC_IMPLEMENTATION_PLAN.md`

### What Was Done (8 tasks)

| # | Task | Commit |
|---|------|--------|
| 1 | `config/routes.ts` — shared route source of truth (197 routes) | `da0e558` |
| 2 | `PageMeta.tsx` — `__PRERENDER_READY__` flag | `d784916` |
| 3 | `fd-home-v4/index.tsx` — add PageMeta to homepage | `1a8b592` |
| 4 | `scripts/prerender.ts` — Playwright-based pre-render engine | `5d0048e` |
| 5 | `index.tsx` — hydration detection (hydrateRoot vs createRoot) | `665ada7` |
| 6 | `verify-prerender.ts` + `package.json` build chain | `6cd7e7f` |
| 7 | `generate-sitemaps.ts` refactored to shared routes | `9ed8331` |
| 8 | Build, verify — 197/197 pass | `2b4bd53`, `315e43f` |

### Bug Found & Fixed

3 guide routes (`/guides/basement-waterproofing/`, `/guides/burst-pipe-emergency/`, `/guides/flood-preparation/`) passed `faqs={faqs}` to `LazyFAQ` but the component expects `data` prop. Fixed in commit `2b4bd53`.

### Prerender Architecture

- Custom HTTP server serves clean SPA shell as fallback (no sirv dependency)
- Homepage rendered last so its output overwrites dist/index.html
- 5 concurrent Playwright tabs, 15s timeout per route
- Full build: ~13 seconds for 197 routes
- Verification checks: file exists, >5KB, unique title, canonical, og:title

### Build Chain

```bash
npm run build     # vite build → generate:sitemaps → prerender
npm run prerender:verify  # Post-build verification
```

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`

---

*Updated: 2026-02-16 (Cost Calculator Audit + Fixes Deployed)*
