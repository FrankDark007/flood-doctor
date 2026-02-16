# PROJECT_STATE.md

Last updated: 2026-02-16

## Architecture

- **Framework**: Vite + React 19 + TypeScript + Tailwind CSS
- **Prerender**: Playwright-based static HTML generation (scripts/prerender.ts)
- **Hosting**: Apache shared hosting (132.148.253.156:22, user hubbds2w11bg)
- **Domain**: flood.doctor is an **addon domain** → ~/public_html/flood.doctor/
- **CDN**: Cloudflare (zone 7b3b2f087429c5c3e9688253d8df11eb)
- **404 handling**: Real 404 via .htaccess (no SPA catch-all fallback)
- **Redirects**: 9 active 301 redirects in public/.htaccess for consolidated routes
- **Routing**: React Router, config/routes.ts is single source of truth
- **Meta system**: components/ui/PageMeta.tsx auto-appends " | Flood Doctor" (15 chars)
- **Deploy**: SSH/rsync via scripts/deploy.sh (~10 seconds)
- **City strategy**: Subdomain city pages + /locations/{city}-{service}/ paths + /water-damage-restoration-{city}-va/ landing pages

## Key Metrics

<!-- AUTO-UPDATED BY scripts/update-project-state.mjs — do not edit between markers -->
<!-- METRICS:START -->
- **Pre-rendered routes**: 189
- **Titles > 60 chars**: 0
- **Duplicate titles**: 0
<!-- METRICS:END -->
- **Duplicate H1 tags**: 0
- **Broken internal links**: 0
- **Build time**: ~12 seconds

## Route Breakdown

| Category | Count | Location |
|----------|-------|----------|
| Blog posts | 45 | pages/blog/*.tsx |
| Blog index | 1 | pages/BlogIndex.tsx |
| Location pages | 29 | pages/locations/*.tsx |
| Landing pages | 23 | pages/landing/*.tsx |
| Guides | 17 | pages/guides/**/*.tsx |
| Resources | 25 | pages/resources/*.tsx |
| Service pages | 5 | pages/ServicesHub.tsx + leaves |
| Other (home, about, contact, etc.) | 43 | pages/*.tsx |

## Completed Work (Chronological)

- **2026-02-16**: Service detail post-process layout redesign — removed nested sidebar, added TopicJumpLinks, RelatedResourcesCard, section H2, h2→h3 accordion, controlled accordion state, mobile sidebar slim, aria attrs
- **2026-02-16**: Standard Project Package (P2 #6) — /resources/standard-project-package/ with 6 service groups, 12 FAQs, schema
- **2026-02-16**: Cost Calculator audit + fixes (P1 #4) — schema fix, a11y, legal disclaimer, inbound/outbound links
- **2026-02-15**: Schema markup rollout (P0 #1) — all content pages have structured data via @graph
- **2026-02-15**: Title tag shortening — all 189 pages ≤ 60 chars, 0 duplicates
- **2026-02-15**: Location meta description cleanup (P1 #3) — phone numbers removed from 28 pages
- **2026-02-13**: H1 deduplication, broken link repair, route consolidation, sitemap cleanup, SPA fallback removal
- **Pre-2026-02**: Playwright prerender pipeline, config/routes.ts SSOT, hydration detection, city subdomain architecture

## Active Decisions

| Decision | Rationale |
|----------|-----------|
| Subdomains for cities | SEO signal for local intent (e.g., alexandria.flood.doctor) |
| /locations/ paths also exist | Different content depth than subdomains; not duplicates |
| /water-damage-restoration-{city}-va/ as canonical | Keyword-rich URL for city landing pages |
| PageMeta auto-suffix | Consistent branding, single place to change |
| Static prerender (not SSR) | Shared hosting, no Node server in production |
| config/routes.ts as SSOT | Prevents route/sitemap/prerender drift |
| Accordion state lifted to parent | Jump links can control which section is open |
| No IntersectionObserver for accordion | Deterministic state sync via onSectionChange callback |

## Known Issues / Open Risks

- **Addon domain quirk**: SPA fallback can silently return 200 for missing assets — always verify content-types after deploy
- **Cloudflare cache**: Must purge after deploy or changes won't be visible
- **PageMeta 45-char limit**: Any new page title must be ≤ 45 chars in source (15 chars reserved for brand suffix)
- **No automated CI**: Build + prerender verification is manual (run locally before deploy)
- **max-h-[5000px] accordion**: Can jank on very long content sections
- **scroll-margin-top: 100px**: Assumes fixed navbar height — update if navbar changes

## Guardrails — What Not To Change

- **Do not** reintroduce SPA catch-all fallback (200 for all routes)
- **Do not** remove or bypass the prerender pipeline
- **Do not** add routes without adding them to config/routes.ts
- **Do not** inject meta tags outside the PageMeta system
- **Do not** create duplicate canonical structures (path + subdomain for same content)
- **Do not** modify homepage (pages/fd-home-v4/*) without explicit permission
- **Do not** add secrets or API keys to frontend code
- **Do not** add IntersectionObserver scroll spy to accordion sections
- **Do not** modify ServiceDetailNew.tsx lines 1–170 (hero through process tiles)
