# CityLift — Decision Log

| Date | Decision | Rationale | Who | Reversible |
|------|----------|-----------|-----|-----------|
| 2026-02-17 | Use deterministic data sources only (no crawling) | Ensures reproducible audits from source files | Human + Claude | Y |
| 2026-02-17 | P0 scope: H1/title template fix only | Smallest safe change, reduces risk | Human + Claude | Y |
| 2026-02-17 | Do not modify content body or schema in P0 | Isolate template fix from content changes | Human + Claude | Y |
| 2026-02-17 | Title pattern: `{Keyword} in {City}, VA | Flood Doctor` | Consistent, city-first, brand after pipe, ≤60 chars for all cities | Human + Claude | Y |
| 2026-02-17 | Service name shortening map (9 canonical keywords) | Deterministic mapping eliminates redundant modifiers while preserving search intent | Claude | Y |
| 2026-02-17 | CityServicesHub title shortened to "Restoration Services in {city}, VA" | Falls Church was 64 chars, now 53 | Claude | Y |
| 2026-02-17 | Differentiator segments moved out of titles | They exceeded 60 char limit; differentiators belong in meta descriptions | Human + Claude | Y |
| 2026-02-17 | 4 content formats detected (A/B/C/D) — scoring adapts per format | Different cities use different TS structures; parsers must handle all 4 to avoid false negatives | Claude | Y |
| 2026-02-17 | Content strength uses 6 weighted dimensions (15/25/20/20/10/10) | Matches PLAN-005 rubric: word count, topical depth, E-E-A-T, local specificity, semantic coverage, originality | Human + Claude | Y |
| 2026-02-17 | Calibration validated: McLean water-damage=98, Vienna flood-cleanup=39 | Strong anchor scores 80+ as expected; thin anchor scores <40 as expected | Claude | Y |
