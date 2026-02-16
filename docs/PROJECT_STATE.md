# PROJECT_STATE.md

Last updated: 2026-02-15

## Architecture

- **Framework**: Vite + React (client-side rendering)
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
- **Pre-rendered routes**: 188
- **Titles > 60 chars**: 0
- **Duplicate titles**: 0
<!-- METRICS:END -->
- **Duplicate H1 tags**: 0
- **Broken internal links**: 0
- **Build time**: ~15 seconds

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

- **2026-02-15**: Title tag shortening — all 188 pages ≤ 60 chars, 0 duplicates
- **2026-02-13**: H1 deduplication — 0 duplicate H1 across all pages
- **2026-02-13**: Broken link repair — 94 source files audited and fixed
- **2026-02-13**: Route consolidation — 8 city water-damage pages merged to keyword landing pages via 301
- **2026-02-13**: Sitemap cleanup — removed test pages, duplicate URLs
- **2026-02-13**: SPA fallback removal — replaced catch-all 200 with real 404
- **2026-02-13**: Duplicate brand removal — "| Flood Doctor" appeared twice in 29 titles
- **Pre-2026-02**: Playwright prerender pipeline, config/routes.ts single source of truth, hydration detection, sitemap generation from shared config

## Active Decisions

| Decision | Rationale |
|----------|-----------|
| Subdomains for cities | SEO signal for local intent (e.g., alexandria.flood.doctor) |
| /locations/ paths also exist | Different content depth than subdomains; not duplicates |
| /water-damage-restoration-{city}-va/ as canonical | Keyword-rich URL for city landing pages |
| PageMeta auto-suffix | Consistent branding, single place to change |
| Static prerender (not SSR) | Shared hosting, no Node server in production |
| config/routes.ts as SSOT | Prevents route/sitemap/prerender drift |

## Known Issues / Open Risks

- **Addon domain quirk**: SPA fallback can silently return 200 for missing assets — always verify content-types after deploy
- **Cloudflare cache**: Must purge after deploy or changes won't be visible
- **PageMeta 45-char limit**: Any new page title must be ≤ 45 chars in source (15 chars reserved for brand suffix)
- **No automated CI**: Build + prerender verification is manual (run locally before deploy)
- **Location page meta descriptions**: Some still contain phone numbers (not titles — titles are clean)

## What Not To Change

- **Do not** reintroduce SPA catch-all fallback (200 for all routes)
- **Do not** remove or bypass the prerender pipeline
- **Do not** add routes without adding them to config/routes.ts
- **Do not** inject meta tags outside the PageMeta system
- **Do not** create duplicate canonical structures (path + subdomain for same content)
- **Do not** modify homepage (pages/fd-home-v4/*) without explicit permission
- **Do not** add secrets or API keys to frontend code
