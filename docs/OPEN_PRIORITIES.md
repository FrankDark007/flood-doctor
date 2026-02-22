# OPEN_PRIORITIES.md

Last updated: 2026-02-21

## P0 — Critical / Next Up

### ~~10. CityLift SEO Audit (P0–P5.1)~~ ✅ Complete (2026-02-19)
- **Scope**: 13 cities × 8 services (104 pages) + canonical normalization + sitemap cleanup
- **Results**: 87 canonical URLs aligned to nested served paths, 9 legacy-format pages backfilled, 13 stale city sitemaps removed, duplication analysis baseline established (max cluster avg 16.5%)
- **Commits**: `a80ac11`, `8d702ed`, `4053cf2`, `aa7a6b1` + earlier CityLift commits
- **Next**: Deploy to production

### ~~11. Production Deployment of CityLift Changes~~ ✅ Complete (2026-02-21)
- **Deployed**: All CityLift P0–P5.1 changes live. 13 stale city sitemaps deleted from production. deploy.sh updated with `--delete` for sitemaps directory.
- **Verified**: 10/10 smoke test URLs 200, 13/13 stale sitemaps 404, canonical spot-check correct, sitemap-index valid, fake routes 404

### ~~1. Schema Markup Audit (JSON-LD)~~ ✅ Complete (2026-02-15)
- **Deployed**: PageMeta @graph infrastructure, 45 blog posts, 29 location pages, 23 landing pages, 2 service templates, 3 hub pages — all using centralized `utils/schema.ts` builders
- **Commits**: `8a1c104`, `26b21cb`, `d60631a`, `9b58d61`, `7b00553`

### ~~2. Production Deployment + Verification~~ ✅ Complete (2026-02-15)
- **Deployed**: All schema changes live on flood.doctor via rsync + Cloudflare cache purge
- **Verified**: 188/188 prerender, JSON-LD spot-checked on service/hub/blog pages

## P1 — Important

### ~~3. Location Page Meta Description Cleanup~~ ✅ Complete (2026-02-15)
- **Done**: Removed phone numbers from 28 location page meta descriptions (McLeanWaterDamage uses archetype system)
- **Commit**: `7f17338`

### ~~3b. Remove Hardcoded LocalBusiness from index.html~~ ✅ Complete (2026-02-15)
- **Done**: Removed 52-line hardcoded LocalBusiness `<script>` from `index.html`. All pages now have exactly 1 ld+json block (PageMeta-managed).
- **Commit**: `662c26c`

### 4. Cost Calculator
- **Goal**: Interactive water damage cost estimation tool using actual price lists
- **Success metric**: Functional calculator page at /resources/cost-calculator/ with accurate pricing
- **Files likely touched**: pages/resources/WaterDamageCostCalculator.tsx, possibly new components
- **Do not break**: Existing resource page structure, PageMeta patterns

### ~~5. Internal Linking Strategy (Phase 1)~~ ✅ Complete (2026-02-15)
- **Done**: Added 2-3 contextual internal links to each of 10 priority blog posts (30 total links). All link targets verified 200. Service pages deferred (content is string-based, needs rendering refactor).
- **Commit**: `81ccf21`

## P2 — Backlog

### 6. Standard Project Package
- **Goal**: Define template/bundle for standard restoration project deliverables
- **Success metric**: Documented package structure with pricing tiers
- **Files likely touched**: New pages/resources/ file
- **Do not break**: Resource hub navigation

### 7. Client Portal (CompanyCam + Matterport)
- **Goal**: UI for clients to browse/download project files, photos, 3D scans
- **Success metric**: Working portal with API integrations behind authentication
- **Files likely touched**: New pages/portal/ directory, API integration layer
- **Do not break**: Public-facing site (portal is separate authenticated section)

### ~~8. Neighborhood Page Redesign~~ ✅ Complete (2026-02-21)
- **Phases**: 4 phases completed — schema expansion, internal linking, normalization hardening, QA sweep
- **Results**: 68 pages with @graph schema (BreadcrumbList, LocalBusiness, Service, FAQPage), H2 semantic hierarchy, Related Services block (4 links), Nearby Neighborhoods block (2-3 sibling links), FAQ fallback for sparse content, 5 content format normalization. 68/68 unique titles, 68/68 unique H1s, 0 canonical mismatches, 0 broken links.
- **Commits**: `52470ca` (Phase 1), `f1f5e2a` (Phase 2), `63584dc` (Phase 3), see Phase 4 commit
- **Validator**: `scripts/validate-neighborhoods.ts` — 8 automated checks

### 9. Blog Content Expansion
- **Goal**: Add 10-15 new blog posts targeting underserved keywords
- **Success metric**: New posts indexed and ranking for target keywords within 60 days
- **Files likely touched**: pages/blog/ (new files), config/routes.ts, sitemaps
- **Do not break**: Existing blog posts, title uniqueness, H1 uniqueness
