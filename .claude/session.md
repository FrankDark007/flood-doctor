# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-17

---

## 🔵 ACTIVE: CityLift — Multi-Phase SEO Audit & Content System

**Plan:** FD-CITYLIFT-PLAN-005
**Tracker:** `citylift/STATE.md` (read this first for CityLift work)
**Plan doc:** `docs/plans/2026-02-17-citylift-seo-audit-plan.md`

### P0 — Title Normalization ✅ COMPLETE (commit `5ac41b0`)
- 91/91 service page titles normalized to ≤60 chars
- Pattern: `{Primary Keyword} in {City}, VA | Flood Doctor`
- CityServicesHub template title also fixed
- Before: avg 78 chars, max 103 | After: max 59 chars
- 0 duplicate titles, 0 duplicate H1s, build 189/189 OK
- Baseline: `citylift/audit/p0-before-metrics.json`
- After: `citylift/audit/p0-after-metrics.json`
- Refactor script: `scripts/citylift-p0-title-refactor.mjs`

### P1 — Thin Content Remediation (NOT STARTED — awaiting approval)
### P2 — High-Impression / Low-CTR Pages (requires GSC baseline)
### P3 — Full City Uniqueness Expansion

### CityLift Session Continuity
On resume, always read:
1. `citylift/STATE.md`
2. `citylift/DECISIONS.md`
3. `citylift/ARTIFACTS.md`

### CityLift AI Role Assignments
- **Claude Code:** Steps 0–3, Step 6 orchestration, all file writes
- **ChatGPT:** Steps 4–5 scoring design, content drafting
- **Human:** Approval gates, GSC exports, phase transitions

---

## ✅ COMPLETE: McLean Homepage Premium Redesign (2026-02-17)

### Status: Committed + Built + Deployed. 10 design enhancements implemented.

**Commits:**
- `ae7006c` — 10-task McLean homepage UI/UX redesign
- `5572a9b` — fix: copy images and fonts to city build output
- `60d3cda` — premium 2026 redesign with 10 design enhancements
- `5b30a96` — fix: CTA contrast, H1 city name, dispatch text
- `5a31b2d` — feat: wire city-specific service content into CityServiceDetail
- `57d4897` — fix: ServicePageRenderer link corrections
- `e0c56c4` — fix: prerender timeout increase to 45s

### Critical Bug Fix: City Service Pages "Thin Content"
**Root Cause:** CityServiceDetail.tsx was using generic ServiceDetailNew template (thin H1 + generic content). Rich city-specific content in src/content/cities/{city}/services/*.ts existed but wasn't rendered.

**Fix:** Rewrote CityServiceDetail.tsx to check contentRegistry (104 city×service content files) and render via ServicePageRenderer when available.

### Content Inventory
| City | Service Files | Words | Homepage Words |
|------|-------------|-------|----------------|
| mclean | 8 | 13,444 | 1,380 |
| arlington | 9 | 16,943 | 1,384 |
| alexandria | 8 | 19,329 | 1,489 |
| fairfax | 8 | 15,655 | 1,415 |
| vienna | 8 | 16,426 | 2,544 |
| tysons | 8 | 21,187 | 1,390 |
| reston | 8 | 14,574 | 1,375 |
| herndon | 8 | 13,215 | 1,348 |
| ashburn | 8 | 14,495 | 1,409 |
| springfield | 8 | 13,189 | 1,384 |
| fallschurch | 8 | 15,172 | 1,423 |
| greatfalls | 8 | 12,436 | 1,454 |
| lorton | 8 | 14,665 | 1,349 |
| **TOTAL** | **105** | **200,730** | **18,345** |

---

## ✅ DEPLOYED: All sites live (2026-02-17)
- Main site: https://flood.doctor ✅ 200
- All 13 city subdomains: ✅ 200 (rsync + Cloudflare purge)

## Tooling Updates (2026-02-17 evening)
- Created `/rl` slash command alias for ralph-loop
- Installed `firecrawl-cli` globally (525 credits, free tier)
- Stored all credentials in `~/.claude/credentials.local`
- Added CLAUDE.md rules: always use Firecrawl for web ops
- Deploy reads SSH password from credentials.local

## Next Up (after CityLift)
- **P2 #7:** Client Portal (CompanyCam + Matterport)
- **P2 #8:** Neighborhood Page Redesign (68 pages)
- **P2 #9:** Blog Content Expansion (5 cities need 2 more posts)

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`

---

*Updated: 2026-02-17 (CityLift P0 Title Normalization Complete)*
