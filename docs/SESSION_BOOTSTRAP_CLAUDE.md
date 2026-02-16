# SESSION_BOOTSTRAP_CLAUDE.md

Copy-paste blocks for starting and ending Claude Code sessions on this repo.

---

## New Session Start

Paste this at the beginning of every new Claude Code session:

```
Read the following files in order before doing anything:

1. /docs/PROJECT_STATE.md
2. /docs/AI_EXECUTION_PROTOCOL.md
3. /docs/OPEN_PRIORITIES.md
4. /docs/CHANGELOG_AI.md

Confirm:
- Current architecture (framework, hosting, prerender pipeline)
- Key metrics (routes, titles, H1s, broken links)
- Active decisions (subdomains, PageMeta suffix, static prerender)
- What NOT to change
- Current open priorities

Then tell me what you understand and ask what I'd like to work on.
```

---

## End of Session

Before ending any session, run these steps:

```
1. Commit all pending changes (one logical change per commit)
2. Run: npm run build — confirm 188/188 pass
3. Run: node /tmp/title-audit.mjs — confirm 0 over-60, 0 duplicates
4. Update /docs/PROJECT_STATE.md metrics if any changed
5. Append to /docs/CHANGELOG_AI.md if substantive work was done
6. Update /docs/OPEN_PRIORITIES.md if any priority was completed or added
7. Push to origin/main
8. Report: what changed, metrics before/after, files touched
```

---

## Quick Context Reload

If a session loses context mid-conversation:

```
Re-read /docs/PROJECT_STATE.md and /docs/AI_EXECUTION_PROTOCOL.md.
Do not modify any files until you confirm understanding of:
- 188 pre-rendered routes
- PageMeta 45-char source title limit
- Real 404 handling (no SPA fallback)
- config/routes.ts as single source of truth
- 0 duplicate titles, 0 duplicate H1, 0 broken links
```
