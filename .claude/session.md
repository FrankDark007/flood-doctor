# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-21

---

## 🟢 COMPLETE THIS SESSION

### P2 #8 Phase 1: Schema + Title Normalization ✅
- **Commit:** `52470ca` — Neighborhood Phase 1: schema expansion + title normalization
- Added `@graph` schema to all 68 neighborhood pages via NeighborhoodPageRenderer:
  - BreadcrumbList (Home → City → Neighborhood)
  - LocalBusiness (city-level with neighborhood areaServed, DPOR/IICRC credentials)
  - Service (Water Damage Restoration, neighborhood-scoped)
  - FAQPage (preserved existing)
- Title normalization in `normalizeContent()` (DynamicNeighborhoodPage.tsx):
  - Strips pipe-delimited segments ("| Differentiator | Flood Doctor")
  - Standard format: "Water Damage Restoration {Neighborhood}" (≤45 chars, rendered ≤60)
  - 13 titles were >60 chars → now 0/68 over limit (max: 60)
- **Builds:** 189/189 main ✅ | 436/436 cities ✅
- **Files modified:** NeighborhoodPageRenderer.tsx, DynamicNeighborhoodPage.tsx, PROJECT_STATE.md, CHANGELOG_AI.md
- **NOT deployed to production yet**

---

## 🟡 NEXT: P2 #8 — Neighborhood Page Redesign Phase 2

**Status:** Phase 1 complete. Phase 2 ready for implementation.

### Phase 2: Internal linking (renderer change, no layout change)
4. Add "Related Services" link block after Services section
5. Add "Nearby Neighborhoods" link block before Final CTA
6. Add H2 heading to neighborhood intro section

### Phase 3: Content normalization (data files only)
7. Improve normalizeContent() to extract more from Format C/D
8. Ensure all 68 pages produce non-empty: intro, services, FAQ, breadcrumbs

### Key Context
- **68 neighborhood pages** across 13 cities
- **4+ content formats** — normalizeContent() handles all
- **Files in scope:** NeighborhoodPageRenderer.tsx, DynamicNeighborhoodPage.tsx, content files
- **Files NOT in scope:** Homepage, service pages, CTA components, city archetypes
- Phase 1 schema is in @graph block 2 (block 1 is city-level LocalBusiness from CityApp layout)

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
- **HEAD:** `52470ca` on `main`

---

*Updated: 2026-02-21 — Neighborhood Phase 1 complete (schema + titles). Phase 2 (internal linking) next.*
