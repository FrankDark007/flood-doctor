# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-21

---

## 🟢 COMPLETE THIS SESSION

### 1. CityLift Production Deployment (P0 #11) ✅
- **Commit:** `18a29f2` — deploy.sh updated with `--delete` for sitemaps/ dir
- Deleted 13 stale city sitemap XMLs + stale `sitemaps/` subdir from production via SSH
- Fixed 403 site outage caused by rsync permission changes (chmod 755/644 restored)
- Cloudflare cache purged, all 10 smoke test URLs verified 200
- All 13 stale sitemaps confirmed 404
- **Tag:** `citylift-production-stable` at `1d736af` (pushed to origin)
- OPEN_PRIORITIES.md #11 marked complete

### 2. Agent Gamma Homepage Changes — REVERTED ✅
- `pages/Home.tsx` had uncommitted changes violating guardrails:
  - CTA text changed ("Request Services" → "Get Emergency Help Now")
  - CTA layout restructured (single → dual button + phone)
  - Mobile visibility changed (`hidden md:` removed on 2 CTAs)
  - H1 text modified, hero paragraph rewritten
- **Decision:** Full revert via `git restore pages/Home.tsx`
- Homepage restored to original state

### 3. Sitemap Timestamp Regeneration ✅
- **Commit:** `1d736af` — timestamps updated 2026-02-19 → 2026-02-22 (build artifact only)

### 4. MCP Stdio Auth Fix Verified ✅ (Mission Control)
- `mcp__mission-control__get_status` returned full integration health JSON (no 401)
- Commit `1274157` was already pushed to both remotes

---

## 🟡 NEXT: P2 #8 — Neighborhood Page Redesign

**Status:** Audit complete, micro-scoped redesign plan approved. Ready for implementation.

### Phase 1: Schema + Meta fixes (no layout changes)
1. Add `@graph` schema to NeighborhoodPageRenderer via PageMeta:
   - BreadcrumbList, LocalBusiness, Service (keep existing FAQPage)
2. Enforce title ≤60 chars across all 68 content files
3. Standardize meta.canonical format

### Phase 2: Internal linking (renderer change, no layout change)
4. Add "Related Services" link block after Services section
5. Add "Nearby Neighborhoods" link block before Final CTA
6. Add H2 heading to neighborhood intro section

### Phase 3: Content normalization (data files only)
7. Improve normalizeContent() to extract more from Format C/D
8. Ensure all 68 pages produce non-empty: intro, services, FAQ, breadcrumbs

### Key Findings from Audit
- **68 total neighborhood pages** across 13 cities
- **4+ incompatible content formats** (Format A: meta/h1/heroSection, B: heroSection/introSection, C: hero/intro/services, D: heroH1/heroP/mainContent)
- **Schema gaps:** Only FAQPage present; missing BreadcrumbList, LocalBusiness, Service
- **No contextual internal links** in body (all 97-98 links from nav/footer)
- **1 title >60 chars:** Ashburn/Brambleton (63 chars)
- **Files in scope:** NeighborhoodPageRenderer.tsx, DynamicNeighborhoodPage.tsx, content files (title fixes only)
- **Files NOT in scope:** Homepage, service pages, CTA components, city archetypes

---

## 🔴 BLOCKED: P2 Strategic Decision

WordPress vs flood.doctor 301 redirects — still awaiting strategic decision.

---

## 🔴 ACTIVE: Service Request Form Redesign (SERVICE-FORM-COLLAB-001)

**Status:** Bootstrap created, ready for GPT↔Claude collab loop
**Bootstrap:** `collab-log/SERVICE-FORM-COLLAB-001-bootstrap.md`
**To resume:** Run `/collab resume SERVICE-FORM-COLLAB-001`

---

## Canonical Mapping Reference (P5)
| City Slug | Correct Nested Path |
|---|---|
| `mold-remediation` | `/services/residential/cleanup-services/mold-remediation/` |
| `sewage-cleanup` | `/services/residential/cleanup-services/sewage-cleanup/` |
| `flood-cleanup` | `/services/residential/restoration-services/flood-cleanup/` |
| `basement-flooding` | `/services/residential/specialty-services/basement-flooding/` |
| `storm-damage` | `/services/residential/restoration-services/storm-damage-restoration/` |
| `burst-pipe` | `/services/residential/restoration-services/burst-pipe-cleanup/` |
| `fire-damage` | `/services/residential/cleanup-services/fire-smoke-cleanup/` |
| `water-damage` | `/services/residential/restoration-services/water-damage-restoration/` |

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`
- **Tag:** `citylift-production-stable` at `1d736af`
- **HEAD:** `1d736af` on `main`

---

*Updated: 2026-02-21 — CityLift deployed to production. Neighborhood redesign audit complete, ready for Phase 1.*
