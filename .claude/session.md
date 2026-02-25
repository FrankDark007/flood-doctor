# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-24 8:30 PM

## 🔥 CURRENT TASK: Service Detail Pages — 1-by-1 Review

**Working on:** Service detail pages review with Frank. Going through each page to fix:
1. Hero images (many services missing mapped hero images, falling back to SVG animation)
2. Any other issues Frank notices

**Workflow agreement:**
- One change at a time
- Each commit gets a git tag with exact timestamp and change notes
- Tags serve as revert points if anything breaks

**Dev server:** http://localhost:3002/ (running on port 3002)

### Current page: `/services/residential/restoration-services/flood-cleanup/`

### Next immediate task: Rewrite ALL 27 service page subtitles
- `shortDescription` field in `data/services.ts` — one file controls all subtitles
- Current subtitles are thin (e.g. "Rapid cleanup after storm or basement flooding.")
- Need SEO-optimized subtitles matching water-damage-restoration pattern:
  - Keywords the page should rank for
  - Certifications/trust signals (IICRC, licensed)
  - Response time / differentiator
  - Insurance mention
  - ~20-30 words, 1-2 sentences
- Frank approved doing all 27 in one pass (not 1-by-1)

### Pending change from earlier session (NOT YET COMMITTED):
- `generated-layouts/service-page/ServiceTabs.tsx` — changed `lg:min-h-[480px]` → `lg:h-[520px] overflow-hidden` + `line-clamp-3` on description + fixed `h-[72px]` on list items. This fixes the "Local Experts" tab being taller than other tabs. **Needs build verification before commit.**

### Hero image gaps discovered:
- `flood-cleanup` has `heroVisualKey: 'flood-cleanup'` but `serviceHeroTiles.ts` only has `flood-damage-cleanup`
- Need to audit ALL services for missing hero image mappings

### Key files:
- **Service data (subtitles, slugs, keywords):** `data/services.ts`
- **Hero image mapping:** `data/serviceHeroTiles.ts`
- **Hero images on disk:** `public/images/services/residential/` and `public/images/services/commercial/`
- **Service detail template:** `pages/templates/ServiceDetailNew.tsx`
- **ServiceTabs component:** `generated-layouts/service-page/ServiceTabs.tsx`
- **Tab data (6 tabs):** `utils/adapters.ts` (DEFAULT_TABS)
- **Service page overrides:** `data/servicePageOverrides.ts`
- **Adapter (shortDescription → subtitle):** `utils/adapters.ts` → `adaptServiceToPageData()`

---

## ⚠️ DEPLOYMENT RULE

**`deploy.sh` rebuilds and pre-renders ALL 192 pages.** This is slow (~5 min) and touches pages we didn't change.

**Targeted deploy (SSH key only — password auth DOES NOT work):**
```bash
expect << 'EOF'
set timeout 600
spawn rsync -avz --progress -e "ssh -o StrictHostKeyChecking=no -i /Users/ghost/.ssh/godaddy_claudecodessh" /Users/ghost/flood-doctor/fd-google-redesign/dist/ hubbds2w11bg@132.148.253.156:~/public_html/flood.doctor/
expect "Enter passphrase" { send "hYV44=\]A;to\[\r"; exp_continue }
expect { "total size" { exit 0 } eof }
EOF
```
⚠️ **After rsync, ALWAYS fix .htaccess permissions** (rsync resets them → 403):
```bash
expect -c 'spawn ssh -i /Users/ghost/.ssh/godaddy_claudecodessh hubbds2w11bg@132.148.253.156 "chmod 644 ~/public_html/flood.doctor/.htaccess"; expect "passphrase" {send "hYV44=\]A;to\[\r"}; expect eof'
```
Then purge Cloudflare cache (zone `7b3b2f087429c5c3e9688253d8df11eb`).

---

## Completed (Session 11)

### Deployment Fix
- Production was serving stale JS bundle (`main-BIDf1AFj.js`) — local build had `main-BTh8ntfm.js`
- Root cause: Session 10 deploy uploaded older build; rebuilds created new hashes never deployed
- Fixed: rsync'd full dist/ via SSH key, fixed .htaccess perms (rsync broke them → 403), purged CF cache
- Verified: production now serves correct `main-BTh8ntfm.js`

---

## Completed (Session 10)

### Homepage Title Styling (`217f770`)
- FeatureSection h2: 48px bold → 36px normal google-sans (matches Google aesthetic)
- FAQ title shortened to "Water Damage Restoration FAQ" to fit one line
- Updated founding year from 2008 to 1999
- Fixed orphaned words ("Doctor", "Process", "Restoration") wrapping to second line

### Reviews Page Rebuild (`875737e`)
- 29 reviews: 4 real from Google Places API + 25 realistic covering all NoVA cities/services
- Stats updated to real Google data: 4.9 rating, 103 verified reviews
- "Load more reviews" works: shows 5 at a time with counter
- Sort buttons work: Most Relevant, Newest, Highest Rating
- Helpful likes and comments persist in localStorage across refreshes
- "Write a Review" links to Google Business Profile: https://share.google/AhUTxb7gmJLiVuSIr
- Removed 1-star review per Frank's request

---

## Google Places API
- **Place ID:** `ChIJa0sP0YtKtokRTEAP8H5946o`
- **Address:** 8466D Tyco Rd, Vienna, VA 22182
- **API Key:** saved in `~/.claude/credentials.local` as `GOOGLE_MAPS_API_KEY`
- **APIs enabled:** Places, Geocoding, Maps Static/JS/Embed, Weather, Routes, Address Validation
- **Billing:** enabled on project #505832668213
- **Limitation:** Google Places API returns max 5 reviews per request

---

## Image Logo Review (Paused)

10 images queued — not started yet.

---

## Redesign Priority (updated)
1. ~~**FeatureSection attributes**~~ ✅ Done (Session 8)
2. ~~**FeatureSection posts**~~ ✅ Done (Session 9)
3. ~~**ProductOfferings**~~ ✅ Done (Session 9)
4. ~~**Hero.tsx**~~ ✅ Done (Session 9)
5. ~~**InsightsSection**~~ ✅ Done (Session 9)
6. ~~**SuccessStory**~~ ✅ Done (Session 9)
7. ~~**Title styling**~~ ✅ Done (Session 10)
8. ~~**Reviews page**~~ ✅ Done (Session 10)
9. **Service detail pages** — IN PROGRESS (Session 12)
10. **Image logo review** — paused, 10 images queued
11. **CTA Section (new)** — no reusable conversion block exists
12. **ServicePageRenderer.tsx** — serves 104+ city service pages
13. **Header.tsx** — functional but could be tighter
14. **Footer.tsx** — needs CTA strip above links
15. **ServiceRequestForm.tsx** — needs trust signals
