# SESSION_BOOTSTRAP_CHATGPT.md

Copy-paste **everything below the line** at the start of any new ChatGPT session.

Last regenerated: 2026-02-16

---

## ⬇️ COPY FROM HERE ⬇️

You are resuming work on the flood-doctor website repository (fd-google-redesign). All context you need is inlined below — you do NOT need access to any files to begin.

---

## ARCHITECTURE (do not change)

- **Framework**: Vite + React 19 (client-side rendering)
- **Prerender**: Playwright-based static HTML generation (scripts/prerender.ts)
- **Hosting**: Apache shared hosting (addon domain → ~/public_html/flood.doctor/)
- **CDN**: Cloudflare
- **404 handling**: Real 404 via .htaccess (NO SPA catch-all fallback)
- **Redirects**: 9 active 301 redirects in public/.htaccess
- **Routing**: React Router, config/routes.ts is single source of truth
- **Meta system**: components/ui/PageMeta.tsx auto-appends " | Flood Doctor" (15 chars)
- **Deploy**: SSH/rsync via scripts/deploy.sh (~10 seconds)
- **City strategy**: 13 independent city subdomain sites (e.g., mclean.flood.doctor) built from dist-city template + /locations/{city}-{service}/ + /water-damage-restoration-{city}-va/ landing pages
- **Service pages**: 27 services use `pages/templates/ServiceDetailNew.tsx` template
- **City build**: `npm run build:city` → `npm run build:cities` → 13 independent React apps in dist-cities/

---

## CURRENT METRICS (verified 2026-02-16)

| Metric | Value |
|--------|-------|
| Main domain pre-rendered routes | 189 |
| City subdomain routes | 656 (all 13 cities) |
| Titles > 60 chars | 0 |
| Duplicate titles | 0 |
| Duplicate H1 tags | 0 |
| Broken internal links | 0 |
| Build time | ~15 seconds |

---

## ROUTE BREAKDOWN

| Category | Count | Location |
|----------|-------|----------|
| Blog posts | 45 | pages/blog/*.tsx |
| Blog index | 1 | pages/BlogIndex.tsx |
| Location pages | 29 | pages/locations/*.tsx |
| Landing pages | 23 | pages/landing/*.tsx |
| Guides | 17 | pages/guides/**/*.tsx |
| Resources | 26 | pages/resources/*.tsx |
| Service pages | 5 | pages/ServicesHub.tsx + leaves |
| Other (home, about, contact, etc.) | 43 | pages/*.tsx |

---

## CITY SEO CONTENT INVENTORY (audited 2026-02-16)

### Primary Content: `src/content/cities/` — 296 files, 3.3 MB (PRODUCTION)

All content is TypeScript modules (.ts) exporting typed content objects. Committed to `main`, consumed by city subdomain builds.

| City | Services | Blog | Neighborhoods | Homepage |
|------|----------|------|---------------|----------|
| alexandria | 8 | 5 | 6 | 1 |
| arlington | 9 | 5 | 6 | 1 |
| ashburn | 8 | 5 | 5 | 1 |
| fairfax | 8 | 5 | 5 | 1 |
| fallschurch | 8 | 3 | 5 | 1 |
| greatfalls | 8 | 3 | 5 | 1 |
| herndon | 8 | 3 | 5 | 1 |
| lorton | 8 | 3 | 5 | 1 |
| mclean | 8 | 5 | 5 | 1 |
| reston | 8 | 5 | 5 | 1 |
| springfield | 8 | 3 | 5 | 1 |
| tysons | 8 | 5 | 5 | 1 |
| vienna | 8 | 5 | 6 | 1 |
| **TOTAL** | **105** | **55** | **68** | **13** |

**File sizes:** Services ~278 lines, Blog ~150-300 lines, Neighborhoods ~variable (4+ schema variants), Homepage ~163 lines

**Content types per service file:** `ServicePageContent` — meta, h1, introSection, localContext, processSteps, faq, schema

### Reference Content: `seo-project/content-output/` (earlier-gen, Markdown)

Located in separate repo (`FrankDark007/flood-doctor-seo`). NOT consumed by build — used as source/reference.

- `city-pages/` — 31 city landing pages (.md), 13 match current subdomains + 18 extended markets
- `*.md` — 8 service pages (water-damage, mold, flood-cleanup, fire-damage, etc.)
- `core-pages/` — 10 core pages (about, contact, insurance, emergency, etc.)
- `resources/` — 14 resource guides (cost, timeline, categories, insurance claims, etc.)
- `competitor-reports/` — 6 competitor analysis reports
- `website-build-spec/` — 7 build specification docs
- `nap-citation-strategy/` — 5 NAP/citation files
- `research-phase-3/` — 8 research docs including city subdomain playbook

### Template-Driven Pages (NOT unique per city — shared React components with franchise context)

| Route | Component | Content Source |
|-------|-----------|----------------|
| `/about/` | `pages/city-app/CityAbout.tsx` (185 lines) | Template + `useFranchise()` |
| `/contact/` | `pages/city-app/CityContact.tsx` (176 lines) | Template + `useFranchise()` |
| `/request/` | `pages/city-app/CityRequest.tsx` (20 lines) | Wraps main RequestService |
| `/guides/emergency-response/` | `pages/guides/city/CityEmergencyGuide.tsx` (531 lines) | Template + archetype system |
| `/guides/prevention/` | `pages/guides/city/CityPreventionGuide.tsx` (555 lines) | Template + archetype system |
| `/guides/insurance-claims/` | `pages/guides/city/CityInsuranceGuide.tsx` (590 lines) | Template + archetype system |
| `/faq/` | Shared FAQ component | Shared |

### Content Gaps

| Gap | Details |
|-----|---------|
| 5 cities have only 3 blog posts | fallschurch, greatfalls, herndon, lorton, springfield (others have 5) |
| About pages not unique per city | Template-driven, no unique team/history/community copy |
| Guide pages not unique per city | Template + archetype, no city-specific emergency/prevention content |
| No city-specific FAQ content | Shared component, not localized |
| No city-specific resources | Resources not routed on subdomains |

### Other SEO Data

- `src/data/seo/content-matrix.ts` — SEO content strategy matrix
- `src/data/seo/keywords/mclean.ts` — McLean keyword data
- `content/blog/*.md` — 10 main-domain blog posts (some city-specific)
- `ASHBURN_CONTENT_SUMMARY.md` — 161-line Ashburn content summary

---

## OPEN PRIORITIES (ranked)

### P0 — Critical / Next Up
All P0 items complete.

### P1 — Important
All P1 items complete.

### P2 — Backlog

**6. Standard Project Package** ✅ Complete (2026-02-16)
- Full resource page at /resources/standard-project-package/

**7. Client Portal (CompanyCam + Matterport)**
- Goal: UI for clients to browse/download project files, photos, 3D scans
- Success metric: Working portal with API integrations behind authentication

**8. Blog Content Expansion**
- Goal: Add 10-15 new blog posts targeting underserved keywords
- Success metric: New posts indexed and ranking within 60 days

---

## COMPLETED WORK (for context, do not redo)

- **2026-02-16**: City subdomain nav link fix (temporary stopgap) — NavLink component + .htaccess redirects to main domain. To be revised for full standalone city UX.
- **2026-02-16**: City neighborhood prerender fix — all 656/656 city routes now prerender (was 619/656)
- **2026-02-16**: Service Detail post-process layout redesign — TopicJumpLinks + RelatedResourcesCard
- **2026-02-16**: Standard Project Package page built and deployed (189 routes, schema verified)
- **2026-02-16**: Cost Calculator fixes + deploy (WebApplication schema, a11y, cross-links)
- **2026-02-15**: P0 Schema Rollout — PageMeta @graph, 106 files, all page types with JSON-LD
- **2026-02-15**: Title tag shortening — all 189 pages ≤ 60 chars, 0 duplicates
- **2026-02-15**: Internal linking — 30 contextual links added to 10 priority blog posts
- **2026-02-15**: Location meta cleanup — phone numbers removed from 28 meta descriptions
- **2026-02-13**: H1 dedup, broken link repair (94 files), route consolidation, SPA fallback removal

---

## CITY SUBDOMAIN ARCHITECTURE

- 13 independent city sites built from `city.html` + `CityApp.tsx` template
- Cities: mclean, arlington, alexandria, fairfax, vienna, tysons, reston, herndon, ashburn, springfield, fallschurch, greatfalls, lorton
- Each city has ~50 routes (homepage + neighborhoods + services + blog)
- Build: `npm run build:city` (shared bundle) → `scripts/build-cities.ts` (13 variants)
- Prerender: `npm run prerender -- --cities` (656 routes, ~55 seconds)
- Content normalization layer in `DynamicNeighborhoodPage.tsx` handles 4+ incompatible neighborhood content schemas
- `NeighborhoodPageRenderer.tsx` has defensive guards on all 15+ `.map()` calls

---

## FORBIDDEN ACTIONS

- Do NOT reintroduce SPA catch-all fallback (200 for all routes)
- Do NOT add routes without adding them to config/routes.ts
- Do NOT inject meta tags outside PageMeta system
- Do NOT create duplicate canonical structures
- Do NOT modify homepage (pages/fd-home-v4/*) without explicit permission
- Do NOT modify ServiceDetailNew.tsx lines 1-170 (hero through process tiles)
- Do NOT add secrets to frontend code
- Do NOT redesign the architecture
- Do NOT add IntersectionObserver scroll spy to accordion sections
- Do NOT recap previous work — just continue from the top priority

---

## SEO GUARDRAILS

- One canonical per page
- One H1 per page
- Brand appears once in title (PageMeta adds it)
- Source title must be ≤ 45 chars (15 reserved for " | Flood Doctor")
- No indexable soft 404s
- All internal links must resolve 200
- All redirects must be single-hop 301
- Heading hierarchy: H1 → H2 → H3 (no skipping levels)

---

## KNOWN ISSUES / OPEN RISKS

- Addon domain quirk: SPA fallback can silently return 200 for missing assets — always verify content-types
- Cloudflare cache must be purged after deploy
- PageMeta 45-char limit for source titles
- No automated CI — build + prerender verification is manual
- max-h-[5000px] accordion can jank on very long content sections
- scroll-margin-top: 100px assumes fixed navbar height

---

## YOUR INSTRUCTIONS

1. Confirm you understand the constraints above.
2. State the next available work: **P2 #7 — Client Portal** or **P2 #8 — Blog Content Expansion**
3. All previous priorities (P0, P1, P2 #6) and the service detail redesign are complete.
4. Wait for the user to specify which task to work on.
5. Do NOT expand scope beyond the current task.
