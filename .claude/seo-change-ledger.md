# SEO Change Ledger

> **Purpose:** Track all SEO changes for rollback safety and performance correlation
> **Protocol:** Append-only. Never delete entries.

---

## Change Log

| Date | Page | Change Type | Change | Reason | Expected Impact | Observation End | Result |
|------|------|-------------|--------|--------|-----------------|-----------------|--------|
| 2026-01-04 | `App.tsx` | routing | Added `host.endsWith(".flood.doctor")` to BrowserRouter condition | Hash (#) URLs terrible for SEO | Enable proper indexing | 2026-01-18 | Pending |
| 2026-01-04 | `ServiceDetail.tsx` | title | Title now has keyword at BEGINNING + city | RankMath Pro requirement | +CTR, +rankings | 2026-01-18 | Pending |
| 2026-01-04 | `ServiceDetail.tsx` | h1 | H1 now includes city name dynamically | Local SEO critical factor | +local rankings | 2026-01-18 | Pending |
| 2026-01-04 | `ServiceDetail.tsx` | h2 | All 6 H2s now include city/service keywords | 50%+ H2 keyword coverage | +topical relevance | 2026-01-18 | Pending |
| 2026-01-04 | `ProcessTimeline.tsx` | content | Enhanced from 28 words to 400+ words | Thin content penalty risk | +content score | 2026-01-18 | Pending |
| 2026-01-04 | `ProcessTimeline.tsx` | content | Added 3 variants: horizontal, vertical, detailed | Flexibility for different pages | Better engagement | 2026-01-18 | Pending |
| 2026-01-04 | `scripts/seo-audit.ts` | tool | Created 24-check SEO audit system | RankMath Pro parity | Catch issues early | N/A | Active |
| 2026-01-04 | `NeighborhoodPageRenderer.tsx` | visual | Added visual components | Improve engagement, reduce bounce | +10% time on page | 2026-01-18 | Pending |
| 2026-01-04 | All 81 neighborhood pages | visual | Integrated AnimatedHeroBackground, TrustBadges, EmergencyBadge, AnimatedStats, ProcessTimeline, ServiceIconGrid | Visual differentiation, better UX | Improved CTR, lower bounce | 2026-01-18 | Pending |

---

## Pending Rollbacks

*None currently*

---

## Performance Correlation Notes

*Add observations here when GSC data shows ranking/traffic changes*

---

*Last Updated: 2026-01-04*
