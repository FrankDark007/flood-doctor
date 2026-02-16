# SESSION_BOOTSTRAP_CHATGPT.md

Copy-paste **everything below the line** at the start of any new ChatGPT session.

Last regenerated: 2026-02-15

---

## ⬇️ COPY FROM HERE ⬇️

You are resuming work on the flood-doctor website repository (fd-google-redesign). All context you need is inlined below — you do NOT need access to any files to begin.

---

## ARCHITECTURE (do not change)

- **Framework**: Vite + React (client-side rendering)
- **Prerender**: Playwright-based static HTML generation (scripts/prerender.ts)
- **Hosting**: Apache shared hosting (addon domain → ~/public_html/flood.doctor/)
- **CDN**: Cloudflare
- **404 handling**: Real 404 via .htaccess (NO SPA catch-all fallback)
- **Redirects**: 9 active 301 redirects in public/.htaccess
- **Routing**: React Router, config/routes.ts is single source of truth
- **Meta system**: components/ui/PageMeta.tsx auto-appends " | Flood Doctor" (15 chars)
- **Deploy**: SSH/rsync via scripts/deploy.sh (~10 seconds)
- **City strategy**: Subdomain city pages + /locations/{city}-{service}/ + /water-damage-restoration-{city}-va/ landing pages

---

## CURRENT METRICS (verified 2026-02-15)

| Metric | Value |
|--------|-------|
| Pre-rendered routes | 188 |
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
| Resources | 25 | pages/resources/*.tsx |
| Service pages | 5 | pages/ServicesHub.tsx + leaves |
| Other (home, about, contact, etc.) | 43 | pages/*.tsx |

---

## OPEN PRIORITIES (ranked)

### P0 — Critical / Next Up

**1. Schema Markup Audit (JSON-LD)**
- Goal: Every page type has correct JSON-LD structured data (LocalBusiness, FAQPage, Article, HowTo, BreadcrumbList)
- Success: Google Rich Results Test passes for all 188 pages; no missing required fields
- Files likely touched: components/ui/PageMeta.tsx, utils/schema.ts, individual page files
- Do not break: Existing PageMeta title/description/canonical behavior

**2. Production Deployment + Verification**
- Goal: Deploy current title-shortened build to production, verify all 188 routes return correct status codes
- Success: curl audit shows 200 for valid, 301 for redirects, 404 for fake routes; Cloudflare cache purged
- Files likely touched: None (deploy only)

### P1 — Important

**3. Location Page Meta Description Cleanup** — Remove phone numbers from meta descriptions in 29 location pages
**4. Cost Calculator** — Interactive water damage cost estimation tool
**5. Internal Linking Strategy** — Contextual cross-links between blog posts, guides, service pages

### P2 — Backlog

**6.** Standard Project Package | **7.** Client Portal (CompanyCam + Matterport) | **8.** Blog Content Expansion (10-15 new posts)

---

## COMPLETED WORK (for context, do not redo)

- **2026-02-15**: Title tag shortening — all 188 pages ≤ 60 chars, 0 duplicates (commit c4324e9, 119 files)
- **2026-02-15**: Animated SVG favicon deployed to production
- **2026-02-13**: H1 deduplication, broken link repair (94 files), route consolidation (8 city pages → 301s), sitemap cleanup, SPA fallback removal, duplicate brand removal

---

## FORBIDDEN ACTIONS

- Do NOT reintroduce SPA catch-all fallback (200 for all routes)
- Do NOT add routes without adding them to config/routes.ts
- Do NOT inject meta tags outside PageMeta system
- Do NOT create duplicate canonical structures
- Do NOT modify homepage (pages/fd-home-v4/*) without explicit permission
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

---

## REQUIRED WORKFLOW FOR ANY CHANGE

1. **Audit first** — no blind edits
2. **Propose scoped change** — get approval before touching files
3. **Implement in isolated batch** — one logical change at a time
4. **Rebuild** — `npm run build` must pass
5. **Verify metrics** — re-run relevant checks
6. **Commit** — descriptive message, one change per commit
7. **Report before/after** — show what changed

---

## KNOWN ISSUES / OPEN RISKS

- Addon domain quirk: SPA fallback can silently return 200 for missing assets — always verify content-types
- Cloudflare cache must be purged after deploy
- PageMeta 45-char limit for source titles
- No automated CI — build + prerender verification is manual
- Some location page meta descriptions still contain phone numbers (titles are clean)

---

## YOUR INSTRUCTIONS

1. Confirm you understand the constraints above.
2. State the current top priority: **P0 #1 — Schema Markup Audit (JSON-LD)**
3. Propose a scoped audit-first plan for that item only.
4. Wait for approval before implementing.
5. Do NOT expand scope beyond P0 #1.
