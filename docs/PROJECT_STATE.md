# PROJECT_STATE.md

Last updated: 2026-02-19

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
- **Canonical status**: All 105 city service pages aligned to nested served paths (0 flat-path, 0 missing)
- **Sitemap status**: Single generator (build-cities.ts) for city sitemaps; legacy flat-slug generator removed; 13 stale city sitemaps purged from production (2026-02-21)
- **Content similarity**: Geo-normalized bigram, max cluster avg ~16.5% (water-damage), 0 pairs >50%

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

- **2026-02-21**: Neighborhood Phase 3 — normalization hardening + consistency validation. Enhanced normalizeContent() to capture Format C services.servicesList[].features, buildingTypesSection, intro.paragraphs, and hero fields. Added FAQ fallback (6 standard questions) for pages with no FAQ data. Added build-time validator script (scripts/validate-neighborhoods.ts) checking title, H1, schema, link blocks, and word count across all 68 pages. 0 failures, 60 word-count warnings (content volume, not normalization).
- **2026-02-21**: Neighborhood Phase 2 — internal linking + semantic hierarchy. Added H2 intro heading, Related Services block (4 city service links), and Nearby Neighborhoods block (2-3 sibling links) to all 68 neighborhood pages via NeighborhoodPageRenderer. Props extended with neighborhoodSlug and siblingNeighborhoods.
- **2026-02-21**: Neighborhood Phase 1 — schema expansion + title normalization across 68 neighborhood pages. All titles ≤60 chars (max: 60). Added @graph schema with BreadcrumbList, LocalBusiness, Service, FAQPage to every neighborhood page via NeighborhoodPageRenderer. Title normalization via normalizeContent() strips pipe segments and enforces standard format.
- **2026-02-21**: Production deployment of CityLift changes — 13 stale city sitemaps deleted from production, deploy.sh updated with --delete for sitemaps dir, Cloudflare cache purged, all 189 routes verified
- **2026-02-19**: CityLift P6 closeout — final verification, state freeze, all phases P0–P5.1 complete
- **2026-02-19**: CityLift P5.1 — canonical meta added to 9 legacy-format service pages (5 Alexandria, 4 Tysons); audit artifacts gitignored
- **2026-02-18**: CityLift P5 — 87 canonical URLs fixed to nested paths, legacy city sitemaps removed (13 stale XMLs), generate-sitemaps.ts cleaned to main-site-only
- **2026-02-18**: CityLift P4.2 — accuracy correction, word ceiling enforcement, canonical slug alignment across 24-page city service matrix
- **2026-02-18**: CityLift P3a — cross-city duplication analysis (geo-normalized bigram similarity), all clusters <17% avg
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

## Production Deployment Checklist

**Release:** `prod_citylift_phase1_2026-02-19` → `f2c59be`

### Pre-Deploy
1. `npm ci && npm run build` → confirm 189/189 routes
2. `git log --oneline -1` → confirm HEAD matches expected commit

### Deploy
3. `./scripts/deploy.sh <password>` → main site (flood.doctor)
4. Deploy `dist-city/` to city subdomains (13 cities)
5. Cloudflare cache purge: zone `7b3b2f087429c5c3e9688253d8df11eb`

### Smoke Tests (10 URLs)
6. https://flood.doctor/ — homepage loads, no console errors
7. https://flood.doctor/sitemaps/sitemap-index.xml — references sitemap-main.xml
8. https://flood.doctor/sitemaps/sitemap-main.xml — valid XML, no stale entries
9. https://reston.flood.doctor/sitemaps/sitemap-reston.xml — city sitemap loads
10. https://herndon.flood.doctor/services/mold-remediation — canonical tag present
11. https://mclean.flood.doctor/services/burst-pipe — canonical tag present
12. https://springfield.flood.doctor/services/sewage-cleanup — content renders
13. https://ashburn.flood.doctor/services/basement-flooding — content renders
14. https://alexandria.flood.doctor/services/flood-cleanup — content renders
15. https://arlington.flood.doctor/services/emergency-water-removal — content renders

### Verification
16. **Junk-URL 404 check:** Request a nonsense path (e.g., `/services/fake-service-xyz`) on both main domain and a city subdomain — must return 404, NOT 200
17. **Sitemap validation:** No duplicate `<loc>` entries across sitemap-index children; all URLs return 200
18. **Canonical spot-check:** View source on 3 random city service pages — `<link rel="canonical">` must match the nested `/services/residential/...` path
19. **Content-type check:** Run `./scripts/verify-deployment.sh` — CSS/JS/images must return correct MIME types (not text/html)

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
