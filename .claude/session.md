# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-19

---

## 🟢 COMPLETE: CityLift P0–P5 — Full Content Matrix + Structural Cleanup

**Plan:** FD-CITYLIFT-PLAN-005
**Tracker:** `citylift/STATE.md` (read this first for CityLift work)

### Phase Summary
| Phase | Status | Key Commits |
|-------|--------|-------------|
| P0 Title Normalization | ✅ | `5ac41b0` |
| P1 Content Strength | ✅ | `cf960e2`, `9fb5e52`, `1ae84ac`, `4c94676` |
| P2 GSC Audit | ✅ AUDIT ONLY | `2900d71` — execution BLOCKED on strategic decision |
| P3a Duplication Analysis | ✅ | `1129d84` |
| P3b Differentiation (6 clusters) | ✅ | `1129d84`, `838f0c1`, `9208019`, `4734df5`, `5c04546`, `f68a491`, `b6b8b00` |
| P4 Compression | ✅ | `68da431` |
| P4.1 Boundary Correction | ✅ | `a52fffd` |
| P4.2 Accuracy + Ceiling + Canonical | ✅ | `99bfc81`, `3dd5e05`, `c98bcba` |
| P5 Canonical + Sitemap Cleanup | ✅ | `a80ac11`, `8d702ed` |

### P5 Results (This Session — 2026-02-19)
- **Canonical fixes:** 87 files across 13 cities × 8 services — all flat paths replaced with nested served paths
- **Sitemap cleanup:** Removed 13 stale city sitemaps from main domain; city sitemaps now solely from `build-cities.ts`
- **Build:** 189/189 ✅
- **Flat-path canonicals remaining:** 0
- **Key finding:** `meta.canonical` in content files is NOT rendered in HTML — `PageMeta` auto-generates from URL path. Fixed for data consistency.
- **9 files (5 Alexandria, 4 Tysons)** use older `ServicePageContent` format without `meta.canonical` — no action needed, canonical auto-generated correctly by PageMeta.

### Canonical Mapping Applied (P5)
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

## Next Steps (CityLift)

1. **Deploy to production** — all P3b through P5 changes committed to main, not yet deployed
2. **P2 strategic decision** — WordPress vs flood.doctor 301 redirects (still blocked)

---

## 🔴 ACTIVE: Service Request Form Redesign (SERVICE-FORM-COLLAB-001)

**Status:** Bootstrap created, ready for GPT↔Claude collab loop
**Bootstrap:** `collab-log/SERVICE-FORM-COLLAB-001-bootstrap.md`

**Goal:** Redesign the service request form to match approved reference design:
- Card-style layout with subtle shadow, light gray bg
- 2-column grid: First/Last Name, Email/Phone, Address 1/Address 2
- 3-column row: City/State dropdown/Zip
- Bold uppercase labels, red asterisks for required, icons in fields
- Phone field with US flag +1 prefix
- Red "Proceed →" button
- Must preserve existing submission logic

**To resume:** Run `/collab resume SERVICE-FORM-COLLAB-001`

---

## Next Steps (Beyond CityLift)

- Client Portal (CompanyCam + Matterport)
- Neighborhood Page Redesign (68 pages)
- Blog Content Expansion (5 cities need 2 more posts)

---

## Previous Phases (Reference)

### CityLift Session Continuity
On resume, always read:
1. `citylift/STATE.md`
2. `citylift/DECISIONS.md`
3. `citylift/ARTIFACTS.md`

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`

---

*Updated: 2026-02-19 (CityLift P5 COMPLETE — 87 canonicals fixed, legacy city sitemaps removed)*
