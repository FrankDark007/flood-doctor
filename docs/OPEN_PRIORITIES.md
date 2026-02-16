# OPEN_PRIORITIES.md

Last updated: 2026-02-15

## P0 — Critical / Next Up

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

### 8. Neighborhood Page Redesign
- **Goal**: Redesign the 68 neighborhood pages across 13 city subdomains (e.g., vienna.flood.doctor/neighborhoods/clarks-crossing/)
- **Why**: Current pages use a basic layout with inconsistent content schemas (4+ formats). Need a polished, conversion-optimized design matching the city homepage quality.
- **Success metric**: Consistent, professional neighborhood pages with proper content structure across all cities
- **Files likely touched**: components/city/NeighborhoodPageRenderer.tsx, possibly content files for schema standardization
- **Do not break**: Prerender pipeline (656/656), city homepage layouts, main domain

### 9. Blog Content Expansion
- **Goal**: Add 10-15 new blog posts targeting underserved keywords
- **Success metric**: New posts indexed and ranking for target keywords within 60 days
- **Files likely touched**: pages/blog/ (new files), config/routes.ts, sitemaps
- **Do not break**: Existing blog posts, title uniqueness, H1 uniqueness
