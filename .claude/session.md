# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-24 8:20 PM

## 🔥 CURRENT TASK: Service Detail Pages — Ongoing Review

**Dev server:** http://localhost:3002/ (running on port 3002)

### Completed this session (Session 12):

1. ✅ **ServiceTabs layout fix** — fixed "Local Experts" tab being taller than others (`f1c1ff1`)
2. ✅ **SEO subtitles for all 29 services** — rewrote `shortDescription` in `data/services.ts` with keyword-rich, above-the-fold content matching water-damage-restoration pattern (`9b48d47`)
3. ✅ **Hero image mapping for all 29 services** — added entries to `data/serviceHeroTiles.ts` so every service shows a real photo instead of SVG fallback (`012801a`)
4. ✅ **Hero lookup fix** — `ServiceDetailNew.tsx` now checks both URL slug AND `heroVisualKey` to resolve images (`151fbd1`)
5. ✅ **Broken process tile images** — fixed colon in filename (Asbestos:Lead → Asbestos_Lead) and underscore prefix (_process-46) (`1617eb4`, `b706eaa`)
6. ✅ **Sticky CTA bar** — hidden on desktop, mobile-only single blue pill "Request Services" button linking to /request/ (`3cb4216`)
7. ✅ **EmergencyServiceCard redesign** — premium "Dispatch Center" look with blue accent bar, clean white metric cards, CTA button + phone link (`0b3080d`)

### What to review next:
- Frank is reviewing service pages one by one — continue checking each page for issues
- Services without dedicated hero images reuse closest related image (listed in serviceHeroTiles.ts comments)
- Eventually need dedicated images for: odor-removal, basement-flooding, crawl-space, hardwood-drying, healthcare, hospitality, municipal, industrial, moisture-mapping, iaq, env-testing

### Key files:
- **Service data (subtitles, slugs, keywords):** `data/services.ts`
- **Hero image mapping:** `data/serviceHeroTiles.ts`
- **Hero lookup logic:** `pages/templates/ServiceDetailNew.tsx` (line ~154)
- **Process tile images:** `data/serviceProcessMaps.ts`
- **Sticky CTA:** `generated-layouts/service-page/ServiceCTASticky.tsx`
- **Dashboard card:** `components/ui/EmergencyServiceCard.tsx`
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
