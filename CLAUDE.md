## SESSION CONTINUITY — READ FIRST

**Before doing anything:**
1. Read `.claude/session.md` — Current task, blockers, next steps
2. Read `.claude/project-history.md` — Complete record of all work done

**Before any restart:** Update both files with current state.
**After completing work:** Log it in project-history.md. Never lose progress.

### 5. REGENERATE CHATGPT BOOTSTRAP AFTER EVERY SESSION
- After completing any work on this repo, regenerate `docs/SESSION_BOOTSTRAP_CHATGPT.md`
- Pull current values from: `docs/OPEN_PRIORITIES.md`, `docs/PROJECT_STATE.md`, `docs/CHANGELOG_AI.md`
- Inline everything — ChatGPT has no filesystem access
- Update the "Last regenerated" date
- This keeps the ChatGPT handoff prompt always current without manual effort

---

## ⛔ HARD RULES — NEVER BREAK THESE

### 1. ALWAYS COMMIT TO `main`
- Before EVERY commit, run `git branch --show-current` and confirm it says `main`
- After EVERY commit, run `git log --oneline -1` to confirm it landed on `main`
- NEVER create or switch to side branches (no `claude/*`, no feature branches) unless the user explicitly asks
- If you find yourself on a different branch, STOP and tell the user immediately

### 2. COMMIT AFTER EVERY CHANGE
- After each meaningful change, commit immediately — do NOT batch changes
- Every commit = one logical change, committed right away
- Never leave work uncommitted in the working tree

### 3. NEVER MAKE UNSOLICITED CHANGES
- Only modify files the user explicitly asks you to modify
- If the user asks a question, ANSWER IT — do not start editing files
- If you think something else should change, ASK FIRST — do not touch it
- "While I'm at it" changes are FORBIDDEN

### 4. NEVER MODIFY THE HOMEPAGE WITHOUT EXPLICIT PERMISSION
- `pages/fd-home-v4/*` files are protected — do not touch without direct instruction
- This includes index.tsx, Hero.tsx, ValueProps.tsx, FeatureSection.tsx, and all other homepage components

---

Flood Doctor — Water Damage Restoration (Northern VA + Washington, DC)

Design system:
- Google Aesthetic (clean, tech-forward), Material Design 3
- Primary color: #1a73e8
- Fonts: Plus Jakarta Sans (preferred), Inter (fallback)
- Section padding: `py-20` (80px top/bottom) — uniform across all rows
- Premium tone, direct, no fluff

Engineering contract:
- All UI code: root level (flat structure, no src/)
- SEO files: /public (sitemap.xml, robots.txt)
- Schema utilities: /utils/schema.ts
- Config: /config (site.ts, constants.ts)
- QA log: /qa/issues.md (append-only, newest at top)

Deployment:
- ALWAYS use: `./scripts/deploy.sh <ssh_password>`
- Method: SSH/rsync (faster than FTP, ~10 seconds)
- SSH Host: 132.148.253.156:22
- SSH User: hubbds2w11bg
- Remote Path: ~/public_html/flood.doctor/ (ADDON DOMAIN)
- After deploy: `./scripts/verify-deployment.sh` (checks content-types)
- Cloudflare Zone: 7b3b2f087429c5c3e9688253d8df11eb

⚠️ IMPORTANT: flood.doctor is an ADDON DOMAIN → ~/public_html/flood.doctor/
   Primary domain is flooddoctor.us → ~/public_html/

⚠️ CRITICAL: SPA fallback masks missing assets (returns 200 for everything).
   Always verify content-types, not just HTTP status codes.

Version: V15 (Service Page Customization System)
- V15: Custom hero tiles, service-specific process maps, page-by-page review workflow
- V14: Restored from backup + SEO infrastructure from design-build branch

Blog Article Gold Standard (see /pages/blog/ for examples):
- Structure: PageMeta w/ FAQ + LocalBusiness schema → Header (category label, H1, date/read time, CTA banner) → Lead paragraph (text-xl) → Sections (H2 with border-b-4 border-[#1a73e8])
- Visual patterns: Numbered steps (blue circles), timeline cards (color-coded severity), expert blockquotes (border-l-4), warning callouts (red bg), comparison grids
- CTAs: Primary banner in header, gradient CTA near conclusion, stats grid (3-col)
- Content: Actionable, IICRC-backed, local (Northern VA specific), FAQ at end, resource links
- Tone: Professional authority, direct, scannable, no fluff

Roadmap (TODO):
1. Cost Calculator — interactive tool using actual price lists
2. Standard Project Package — template/bundle definition
3. Client Portal:
   - UI for clients to browse/download project files
   - CompanyCam API integration (project photos)
   - Matterport API integration (3D scans)
