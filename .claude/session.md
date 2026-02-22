# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-21 (late evening)

---

## 🟢 COMPLETE THIS SESSION

### P1 #4: Cost Calculator ✅ CLOSED
- Pricing extracted to typed module: `data/pricing/flood-doctor-rates.ts`
- All dates data-driven from `currentPricing.lastUpdated`
- Schema dateModified wired
- Commits: `000df30`, `359769c`

### P2 #6: Standard Project Package ✅ CLOSED (was already done, marked complete)
- Commit: `cb8ef96`

### P2 #9: Blog Expansion Batch 1 ✅ (3 of 12 posts)
- `toilet-overflow-cleanup-guide` (Emergency)
- `flood-insurance-nfip-virginia` (Insurance/NFIP)
- `filing-water-damage-insurance-claim` (Insurance/Claims)
- Commit: `ff4fb38`
- Build: 192/192

---

## 🟡 NEXT: P2 #9 Blog Expansion — Batches 2-4 (9 remaining posts)

### 12-Post Queue (✅ = done, ○ = pending)

| # | Slug | Title | Category | Status |
|---|------|-------|----------|--------|
| 1 | `toilet-overflow-cleanup-guide` | Toilet Overflow Cleanup: Steps & Safety | Emergency | ✅ |
| 2 | `flood-insurance-nfip-virginia` | Flood Insurance in Virginia: NFIP Guide | Insurance | ✅ |
| 3 | `filing-water-damage-insurance-claim` | Filing a Water Damage Insurance Claim | Insurance | ✅ |
| 4 | `diy-vs-professional-water-damage` | DIY vs Professional Water Damage Cleanup | Process | ○ |
| 5 | `how-long-run-dehumidifier-after-water-damage` | How Long to Run a Dehumidifier After Leak | Process | ○ |
| 6 | `spring-storm-flooding-virginia` | Spring Storm Flooding in Virginia | Emergency | ○ |
| 7 | `what-to-expect-water-damage-restoration` | What to Expect During Water Restoration | Process | ○ |
| 8 | `how-to-choose-restoration-company` | How to Choose a Restoration Company | Process | ○ |
| 9 | `water-damage-categories-explained` | Water Damage Categories 1 2 3 Explained | Education | ○ |
| 10 | `water-damage-home-value-impact` | Water Damage Impact on Home Value | Real Estate | ○ |
| 11 | `garage-water-damage-guide` | Garage Water Damage: Causes & Solutions | Water Damage | ○ |
| 12 | `saving-documents-photos-after-flooding` | Saving Documents & Photos After Flooding | Restoration | ○ |

### Per-Post Internal Link Map (for next session)

| # | Slug | Link OUT (3 existing routes) | Link IN (2 existing to edit) |
|---|------|------------------------------|------------------------------|
| 4 | `diy-vs-professional-water-damage` | `/blog/professional-drying-dehumidification/`, `/resources/choosing-restoration-company/`, `/blog/mold-growth-after-water-damage-timeline/` | `hidden-water-damage-signs`, `water-damage-restoration-timeline` |
| 5 | `how-long-run-dehumidifier-after-water-damage` | `/blog/professional-drying-dehumidification/`, `/resources/structural-drying-guide/`, `/blog/wet-carpet-water-damage/` | `professional-drying-dehumidification`, `basement-flooding-guide` |
| 6 | `spring-storm-flooding-virginia` | `/blog/roof-leak-water-damage-virginia-storms/`, `/blog/sump-pump-failure-basement-flooding-nova/`, `/resources/emergency-preparedness-northern-va/` | `sump-pump-failure-basement-flooding-nova`, `roof-leak-water-damage-virginia-storms` |
| 7 | `what-to-expect-water-damage-restoration` | `/blog/water-damage-restoration-timeline/`, `/resources/standard-project-package/`, `/blog/water-damage-restoration-cost-fairfax/` | `water-damage-restoration-timeline`, `emergency-water-damage-response-virginia` |
| 8 | `how-to-choose-restoration-company` | `/resources/choosing-restoration-company/`, `/blog/water-damage-restoration-cost-fairfax/`, `/blog/commercial-water-damage-business-continuity/` | `water-damage-northern-virginia-guide`, `water-damage-restoration-cost-fairfax` |
| 9 | `water-damage-categories-explained` | `/resources/water-damage-categories/`, `/blog/sewage-backup-cleanup-health-risks-virginia/`, `/blog/professional-drying-dehumidification/` | `mold-after-water-damage-virginia`, `wet-carpet-water-damage` |
| 10 | `water-damage-home-value-impact` | `/blog/water-damage-home-selling-disclosure/`, `/blog/hidden-water-damage-signs/`, `/resources/cost-calculator/` | `water-damage-home-selling-disclosure`, `hidden-water-damage-signs` |
| 11 | `garage-water-damage-guide` | `/blog/sump-pump-failure-basement-flooding-nova/`, `/blog/drywall-water-damage-guide/`, `/resources/home-waterproofing-guide/` | `basement-flooding-guide`, `hidden-water-damage-signs` |
| 12 | `saving-documents-photos-after-flooding` | `/blog/water-damaged-furniture-restoration/`, `/blog/water-damaged-electronics-guide/`, `/blog/emergency-water-damage-response-virginia/` | `water-damaged-furniture-restoration`, `emergency-water-damage-response-virginia` |

### Execution Pattern (proven in batch 1)
1. Spawn 3 parallel agents — each writes one complete .tsx blog post
2. Wire routes in `config/routes.ts`, lazy imports + Route in `App.tsx`, entries in `data/blog-articles.ts`
3. `npm run build` — verify N/N routes
4. Update `docs/PROJECT_STATE.md` + `docs/CHANGELOG_AI.md`
5. Commit

### After All 12 Posts
- Add inbound links (edit 2 existing posts per new post = ~24 edits)
- Mark P2 #9 complete in OPEN_PRIORITIES.md
- Deploy to production

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
- **HEAD:** `ff4fb38` on `main` (8 commits ahead of last deploy)

---

*Updated: 2026-02-21 — P1 #4 closed, P2 #6 closed, Blog batch 1 done (3/12). Next: batches 2-4 (posts 4-12).*
