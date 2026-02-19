# CityLift — Project State

**Plan Version:** FD-CITYLIFT-PLAN-005
**Execution Version:** FD-CITYLIFT-EXEC-005
**Last Updated:** 2026-02-18
**Last Completed Step:** P4.2 — Accuracy correction, word ceiling enforcement, canonical fix
**Next Step:** Deploy to production
**Current Phase:** P4.2 COMPLETE
**Blocking Issues:** None

## Phase Summary

| Phase | Status | Commits |
|-------|--------|---------|
| P0 Title Normalization | ✅ COMPLETE | `5ac41b0` |
| P1 Content Strength | ✅ COMPLETE | `cf960e2`, `9fb5e52`, `1ae84ac`, `4c94676` |
| P2 GSC Audit | ✅ AUDIT COMPLETE | `2900d71` |
| P2 Execution | ⏸️ BLOCKED — strategic decision (WordPress vs flood.doctor 301s) |
| P3a Duplication Analysis | ✅ COMPLETE | `1129d84` |
| P3b Mold Remediation | ✅ COMPLETE | `1129d84` |
| P3b Sewage Cleanup | ✅ COMPLETE | `838f0c1`, `9208019` |
| P3b Flood Cleanup | ✅ COMPLETE | `4734df5` |
| P3b Burst Pipe | ✅ COMPLETE | `5c04546` |
| P3b Fire Damage | ✅ COMPLETE | `f68a491` |
| P3b Basement Flooding | ✅ COMPLETE | `b6b8b00` |
| P4 Compression Pass | ✅ COMPLETE | `68da431` |
| P4.1 Similarity Boundary | ✅ COMPLETE | `a52fffd` |
| P4.2 Accuracy + Ceiling + Canonical | ✅ COMPLETE | (this session) |

## Final Validation — P4.2 (All 6 Clusters)

**Method:** Geo-normalized bigram analysis (citylift-duplication-analysis.mjs)
**Similarity reduced from 52–85% → <12% across all clusters.**

| Cluster | Max Sim (Before P3b) | Max Sim (After P4.2) | Highest Pair |
|---------|---------------------|---------------------|-------------|
| burst-pipe | 68.5% | 11.5% | mclean ↔ springfield |
| mold-remediation | 84.7% | 10.5% | herndon ↔ mclean |
| flood-cleanup | 75.3% | 10.3% | herndon ↔ springfield |
| sewage-cleanup | 77.2% | 10.2% | mclean ↔ springfield |
| fire-damage | 71.5% | 10.1% | herndon ↔ mclean |
| basement-flooding | 55.9% | 9.5% | herndon ↔ springfield |

> **Note:** Previous STATE.md reported 3.0–4.1% max similarity. Those values were from a
> different measurement methodology. The official geo-normalized bigram analysis consistently
> reports 9.5–11.5%. All clusters are rated 🟢 SAFE (well below 30% risk threshold).

### Title & H1 Audit
- Duplicate titles: 0
- Duplicate H1s: 0
- Titles > 60 chars: 0

### Build
- Routes: 189/189 ✅

### Sitemap
- 8 pre-existing duplicate URLs (water-damage-restoration city pages) — not P3b-related

## Word Count Status — P4.2 Final

| Range | Pages |
|-------|-------|
| 2,000–2,600 | 24/24 ✅ |

**All 24 pages within 2,208–2,597 words (wc -w).**

## Differentiation Angles (Reusable Across Clusters)

- **McLean:** Estate-grade, wine cellars, custom millwork, Potomac tributaries, multi-zone HVAC, walk-out basements, manifold plumbing, high-value contents triage
- **Herndon:** Townhome party-wall migration, shared laterals, galvanized plumbing, HOA coordination, Sugarland Run, rental/ADU lower levels, multi-generational housing
- **Springfield:** Split-level vertical migration, 1960s construction, asbestos/lead, Accotink Creek, Orangeburg pipe, ejector pumps, Fort Belvoir PCS timelines, crawlspace hybrids
- **Ashburn:** New construction defects, builder warranty, SWM pond overwhelm, PEX crimp rings, sealed envelopes, smart home integration, grading reversal, cold-joint intrusion

## P3a Original Analysis Results (Reference)

**624 pairs analyzed across 8 service clusters.**

| Cluster | Avg Sim | Max Sim | >50% pairs | Risk |
|---------|---------|---------|-----------|------|
| mold-remediation | 19.9% | 84.7% | 10 | ✅ FIXED |
| sewage-cleanup | 17.4% | 77.2% | 6 | ✅ FIXED |
| burst-pipe | 16.9% | 68.5% | 6 | ✅ FIXED |
| flood-cleanup | 16.0% | 75.3% | 6 | ✅ FIXED |
| fire-damage | 15.2% | 71.5% | 3 | ✅ FIXED |
| basement-flooding | 12.9% | 52.6% | 1 | ✅ FIXED |
| water-damage | 16.5% | 43.6% | 0 | 🟡 Below threshold |
| storm-damage | 13.8% | 48.8% | 0 | 🟢 Below threshold |

**Problem cities:** herndon, mclean, springfield, ashburn (appeared in 32/32 critical pairs)
**Root cause:** Template-cloned content generation batch (Jan 3, 2026)
**Resolution:** Full rewrite of all 24 pages across 6 clusters

## Resume Instructions

P4.2 is complete. Next actions:
1. **Deploy to production** — All changes committed to main, not yet deployed
2. **Sitemap cleanup** — Fix 8 duplicate water-damage-restoration URLs
3. **P2 strategic decision** — WordPress vs flood.doctor 301 redirects (blocked)
