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
- **City strategy**: Subdomain city pages + /locations/{city}-{service}/ + /water-damage-restoration-{city}-va/ landing pages
- **Service pages**: 27 services use `pages/templates/ServiceDetailNew.tsx` template

---

## CURRENT METRICS (verified 2026-02-16)

| Metric | Value |
|--------|-------|
| Pre-rendered routes | 189 |
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

## OPEN PRIORITIES (ranked)

### P0 — Critical / Next Up
All P0 items complete.

### P1 — Important

**4. Cost Calculator** ✅ Complete (2026-02-16)
- Interactive water damage cost estimation tool at /resources/cost-calculator/
- WebApplication schema, accessibility fixes, 6 inbound cross-links

**~~3. Location Page Meta Description Cleanup~~** ✅ Complete (2026-02-15)
**~~3b. Remove Hardcoded LocalBusiness from index.html~~** ✅ Complete (2026-02-15)
**~~5. Internal Linking Strategy (Phase 1)~~** ✅ Complete (2026-02-15)

### P2 — Backlog

**6. Standard Project Package** ✅ Complete (2026-02-16)
- Full resource page at /resources/standard-project-package/
- 876-line component, 6 service groups, 12 FAQs, Service+FAQPage+BreadcrumbList schema

**7. Client Portal (CompanyCam + Matterport)**
- Goal: UI for clients to browse/download project files, photos, 3D scans
- Success metric: Working portal with API integrations behind authentication

**8. Blog Content Expansion**
- Goal: Add 10-15 new blog posts targeting underserved keywords
- Success metric: New posts indexed and ranking within 60 days

### In Progress — Service Detail Post-Process Redesign

**Plan**: `docs/plans/2026-02-16-service-detail-post-process-redesign.md` (9 tasks)
- Redesign ServiceDetailNew.tsx layout AFTER process tiles section (lines 173-225)
- Remove nested sidebar from ServiceDetailedContent (cramped mobile UX)
- Add horizontal TopicJumpLinks component for mobile/desktop navigation
- Add RelatedResourcesCard to sidebar (4 verified internal links)
- Fix heading hierarchy: H1 (hero) → H2 (guide section) → H3 (accordion titles)
- Slim mobile sidebar: only RelatedResourcesCard (ServiceCTASticky handles emergency CTA)
- Active jump link synced to accordion state (no scroll spy)
- Does NOT touch hero, process tiles, routes, schema, or PageMeta

---

## COMPLETED WORK (for context, do not redo)

- **2026-02-16**: Standard Project Package page built and deployed (189 routes, schema verified)
- **2026-02-16**: Cost Calculator fixes + deploy (WebApplication schema, a11y, cross-links)
- **2026-02-16**: Service Detail post-process redesign plan created and refined (9 tasks)
- **2026-02-15**: P0 Schema Rollout — PageMeta @graph, 106 files, all page types with JSON-LD
- **2026-02-15**: Title tag shortening — all 188→189 pages ≤ 60 chars, 0 duplicates
- **2026-02-15**: Internal linking — 30 contextual links added to 10 priority blog posts
- **2026-02-15**: Location meta cleanup — phone numbers removed from 28 meta descriptions
- **2026-02-15**: Hardcoded LocalBusiness removed from index.html
- **2026-02-13**: H1 dedup, broken link repair (94 files), route consolidation (8 city pages → 301s), sitemap cleanup, SPA fallback removal, duplicate brand removal

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

---

## YOUR INSTRUCTIONS

1. Confirm you understand the constraints above.
2. State the current active work: **Service Detail Post-Process Redesign** (9-task plan ready for implementation)
3. If asked to implement: follow the plan at `docs/plans/2026-02-16-service-detail-post-process-redesign.md` task by task
4. If asked for next priority after redesign: **P2 #7 — Client Portal** or **P2 #8 — Blog Content Expansion**
5. Wait for approval before implementing.
6. Do NOT expand scope beyond the current task.
