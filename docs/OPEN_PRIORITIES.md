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

### 5. Internal Linking Strategy
- **Goal**: Add contextual cross-links between related blog posts, guides, and service pages
- **Success metric**: Every blog post links to ≥ 2 related articles; service pages link to relevant guides
- **Files likely touched**: pages/blog/*.tsx, components/ui/RelatedArticles.tsx
- **Do not break**: Existing links (0 broken currently), page layouts

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

### 8. Blog Content Expansion
- **Goal**: Add 10-15 new blog posts targeting underserved keywords
- **Success metric**: New posts indexed and ranking for target keywords within 60 days
- **Files likely touched**: pages/blog/ (new files), config/routes.ts, sitemaps
- **Do not break**: Existing blog posts, title uniqueness, H1 uniqueness
