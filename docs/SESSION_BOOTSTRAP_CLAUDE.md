# SESSION_BOOTSTRAP_CLAUDE.md

Last updated: 2026-02-16

## Quick Resume

```
Read these files before doing anything:
1. .claude/session.md
2. .claude/project-history.md
3. docs/PROJECT_STATE.md
4. docs/OPEN_PRIORITIES.md
Then confirm understanding and ask what to work on.
```

## Architecture (8 bullets)

- Vite + React 19 + TypeScript + Tailwind CSS, no src/ folder (flat root)
- Playwright prerender: 189 static HTML pages from config/routes.ts (SSOT)
- Apache shared hosting + Cloudflare CDN, deploy via SSH/rsync
- PageMeta auto-appends " | Flood Doctor" (15 chars) → source titles ≤ 45 chars
- Real 404 via .htaccess, no SPA catch-all
- 13 independent city subdomain builds (CityApp.tsx)
- Schema via utils/schema.ts + PageMeta @graph injection
- Service detail pages: ServiceDetailNew.tsx template (27 services)

## Current Metrics

| Metric | Value |
|--------|-------|
| Pre-rendered routes | 189 |
| Titles > 60 chars | 0 |
| Duplicate titles | 0 |
| Duplicate H1 | 0 |
| Broken internal links | 0 |
| Build time | ~12s |

## Current Priority

See `docs/OPEN_PRIORITIES.md` for ranked backlog.

## Hard Constraints

- Do NOT modify pages/fd-home-v4/* without permission
- Do NOT add routes without config/routes.ts entry
- Do NOT inject meta outside PageMeta
- Do NOT add secrets to frontend code
- Do NOT add IntersectionObserver to accordion sections
- Do NOT modify ServiceDetailNew.tsx lines 1–170
- Route count must stay at 189 unless explicitly adding pages

## SEO Guardrails

- 1 canonical per page, 1 H1 per page
- Source title ≤ 45 chars (rendered ≤ 60 with brand suffix)
- Heading hierarchy: H1 → H2 → H3 (no skips)
- All pages must have structured data via PageMeta schema prop
- Internal links must use routes from config/routes.ts

## End of Session Checklist

```
1. Commit all changes to main
2. npm run build — confirm 189/189 pass
3. node scripts/update-project-state.mjs
4. Update docs/CHANGELOG_AI.md
5. Update .claude/session.md + .claude/project-history.md
6. Report: files changed, metrics, commit hash
```
