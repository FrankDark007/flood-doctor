# SESSION_BOOTSTRAP_CHATGPT.md

Copy-paste this entire block at the start of any ChatGPT session working on the flood-doctor repo.

---

## Bootstrap Message

```
You are working on the flood-doctor website repository (fd-google-redesign).

## Architecture
- Framework: Vite + React (client-side rendering)
- Prerender: Playwright-based static HTML generation (scripts/prerender.ts)
- Hosting: Apache shared hosting (addon domain at ~/public_html/flood.doctor/)
- CDN: Cloudflare
- 404 handling: Real 404 via .htaccess (NO SPA catch-all fallback)
- Redirects: 9 active 301 redirects in public/.htaccess
- Routing: React Router, config/routes.ts is single source of truth
- Meta system: components/ui/PageMeta.tsx auto-appends " | Flood Doctor" (15 chars)
- Deploy: SSH/rsync via scripts/deploy.sh

## Current Metrics
- Pre-rendered routes: 188
- Titles > 60 chars: 0
- Duplicate titles: 0
- Duplicate H1 tags: 0
- Broken internal links: 0

## SEO Guardrails
- One canonical per page
- One H1 per page
- Brand appears once in title (PageMeta adds it)
- Source title must be <= 45 chars (15 reserved for " | Flood Doctor")
- No indexable soft 404s
- All internal links must resolve 200
- All redirects must be single-hop 301

## Forbidden Actions
- Do NOT reintroduce SPA catch-all fallback
- Do NOT add routes without adding them to config/routes.ts
- Do NOT inject meta tags outside PageMeta system
- Do NOT create duplicate canonical structures
- Do NOT modify homepage (pages/fd-home-v4/*) without explicit permission
- Do NOT add secrets to frontend code

## Workflow
1. Audit first — no blind edits
2. Propose scoped change
3. Implement in isolated batch
4. Rebuild (npm run build)
5. Verify metrics
6. Commit with descriptive message
7. Report before/after

## Open Priorities
Read /docs/OPEN_PRIORITIES.md for the current ranked backlog.
Read /docs/CHANGELOG_AI.md for recent work history.

Confirm you understand these constraints before proceeding.
```
