# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-21

---

## 🟢 COMPLETE THIS SESSION

### P2 #8: Neighborhood Page Redesign — ALL 4 PHASES COMPLETE ✅

**Phase 1** (`52470ca`): Schema expansion + title normalization
- @graph schema (BreadcrumbList, LocalBusiness, Service, FAQPage) on all 68 pages
- Title normalization ≤60 chars via normalizeContent()

**Phase 2** (`f1f5e2a`): Internal linking + semantic hierarchy
- H2 intro heading after hero
- Related Services block (4 city service links)
- Nearby Neighborhoods block (2-3 sibling links)
- New props: neighborhoodSlug, siblingNeighborhoods

**Phase 3** (`63584dc`): Normalization hardening
- Format C services.servicesList[].features → folded into descriptions
- Format C intro.paragraphs + hero.* → mapped to renderer fields
- buildingTypesSection → subdivisions + commonIssues
- FAQ fallback: 6 standard questions when content file has none
- 5 content formats (A, A-urban, B, C, D) all normalized

**Phase 4** (`ab4cd55`): QA sweep + close
- Enhanced validator (8 checks): title, H1, link blocks, schema, word count, canonical, breadcrumb path, related service links
- 68/68 unique titles, 68/68 unique H1s, 0 canonical mismatches, 0 broken links
- P2 #8 marked ✅ in OPEN_PRIORITIES.md

**NOT deployed to production yet** — 4 commits ahead of last deploy

---

## 🟡 NEXT: P1 #4 — Cost Calculator

**Status:** Page exists at `/resources/cost-calculator/` — was audited + fixed in a prior session (schema, a11y, disclaimer, links). OPEN_PRIORITIES still lists it as open with goal "Interactive water damage cost estimation tool using actual price lists."

### Audit Plan (do before implementing)
- Read `pages/resources/WaterDamageCostCalculator.tsx` — assess current state vs. goal
- Check if actual Flood Doctor price lists exist in repo
- Verify PageMeta, schema, mobile responsiveness
- Determine what "actual price lists" means — static ranges or dynamic data from Frank

### Implementation Plan
- Interactive form: service type → area size → damage severity → estimated range
- Legal: "estimates only" disclaimer (BUSINESS rule: ranges, never exact)
- Schema: WebApplication or HowTo
- Internal links: 3-5 inbound from blog/service pages
- A11y: ARIA labels, keyboard nav, focus management

### Verification Gates
1. Renders at `/resources/cost-calculator/` with no errors
2. Produces range estimates (not exact figures)
3. Legal disclaimer visible
4. Schema validates
5. Title ≤60, unique H1, canonical correct
6. Mobile 375px functional
7. Build 189/189
8. ≥3 inbound links

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
- **HEAD:** `ab4cd55` on `main` (4 commits ahead of last deploy)

---

*Updated: 2026-02-21 — P2 #8 complete (all 4 phases). Next: P1 #4 Cost Calculator.*
