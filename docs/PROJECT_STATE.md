# PROJECT_STATE.md

Last updated: 2026-02-15

## Completed SEO Work

- **Title tag shortening**: All 188 pages ≤ 60 characters, 0 duplicates
- **H1 deduplication**: 0 duplicate H1 tags across all 188 pages
- **Broken link repair**: 0 broken internal links (94 source files audited and fixed)
- **Sitemap cleanup**: Removed test pages, duplicate water-damage location URLs
- **Route consolidation**: 8 city /locations/{city}-water-damage/ pages consolidated to /water-damage-restoration-{city}-va/ keyword landing pages via 301 redirects
- **Duplicate brand removal**: Eliminated double "| Flood Doctor" from 29 page titles
- **SPA fallback removal**: Replaced catch-all 200 with real 404 handling
- **Static prerender pipeline**: Playwright-based prerender producing 188 static HTML pages

## Current Indexed Route Count

- **188 pre-rendered routes** (config/routes.ts — single source of truth)
- 45 blog posts + 1 blog index
- 29 location pages (city × service combinations)
- 23 keyword landing pages
- 10 city landing pages
- 6 insurance carrier guides
- 10 how-to guides
- 18 resource pages
- 5 service hub/leaf pages
- Remaining: homepage, about, contact, careers, privacy, terms, portal-demo, etc.

## Current Structural Decisions

- **Prerender engine**: Playwright-based (scripts/prerender.ts), not SSR/SSG framework
- **Hosting**: Apache on shared hosting (132.148.253.156), flood.doctor is addon domain
- **SPA routing**: React Router with static HTML shell per route
- **PageMeta system**: All meta tags flow through components/ui/PageMeta.tsx (auto-appends " | Flood Doctor")
- **Route config**: config/routes.ts is the single source of truth for all prerender enumeration
- **City strategy**: Subdomain city pages + /locations/{city}-{service}/ paths + /water-damage-restoration-{city}-va/ landing pages
- **Redirects**: 9 active 301 redirects in public/.htaccess for consolidated routes
- **Deploy method**: SSH/rsync via scripts/deploy.sh (~10 seconds)

## Open Priorities

1. Cost Calculator — interactive tool using actual price lists
2. Standard Project Package — template/bundle definition
3. Client Portal — CompanyCam API + Matterport 3D scan integration
4. Location page title shortening (phone numbers still in some meta descriptions)
5. Schema markup audit (JSON-LD coverage across all page types)

## Known Technical Constraints

- **Addon domain**: flood.doctor serves from ~/public_html/flood.doctor/, not site root
- **SPA fallback masking**: Apache returns 200 for everything unless .htaccess explicitly returns 404 — always verify content-types, not just HTTP status
- **PageMeta suffix**: Auto-appends " | Flood Doctor" (15 chars) — source titles must be ≤ 45 chars
- **Cloudflare**: Zone 7b3b2f087429c5c3e9688253d8df11eb — cache must be purged after deploy
- **No SSR**: All rendering is client-side with static HTML prerender shells — dynamic content requires hydration
- **Build time**: ~15 seconds for full build + prerender of 188 routes
