## SESSION CONTINUITY — READ FIRST

**Before doing anything:**
1. Read `.claude/session.md` — Current task, blockers, next steps
2. Read `.claude/project-history.md` — Complete record of all work done

**Before any restart:** Update both files with current state.
**After completing work:** Log it in project-history.md. Never lose progress.

---

Flood Doctor — Water Damage Restoration (Northern VA + Washington, DC)

Design system:
- Google Aesthetic (clean, tech-forward), Material Design 3
- Primary color: #1a73e8
- Fonts: Plus Jakarta Sans (preferred), Inter (fallback)
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

Version: V14 (restored from backup + SEO infrastructure from design-build branch)

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
