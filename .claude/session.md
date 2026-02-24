# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-24 7:45 PM

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

### Deployment
- Full deploy ran — 170/192 pages succeeded, 22 city landing pages had pre-existing pre-render timeouts
- Homepage and Reviews page ARE live on flood.doctor

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

### Images to review for logo placement:
1. **Team photo** — `public/images/insights/flood-doctor-northern-virginia-restoration-team.png`
2. **Water damage card** — `public/images/cards/water-damage-restoration-emergency-service.png`
3. **Mold remediation card** — `public/images/cards/mold-remediation-professional-inspection.png`
4. **Fire damage card** — `public/images/cards/fire-smoke-damage-restoration-cleanup.png`
5. **Testimonial: basement** — `public/images/testimonials/basement-water-damage-restoration-mclean-virginia.png`
6. **Testimonial: insurance** — `public/images/testimonials/insurance-claim-restoration-arlington-virginia.png`
7. **Testimonial: living room** — `public/images/testimonials/full-home-restoration-alexandria-virginia.png`
8. **Testimonial: hardwood floors** — `public/images/testimonials/emergency-pipe-burst-restoration-fairfax-virginia.png`
9. **Hero tiles row 1** — 3 restoration process images
10. **Hero tiles row 2** — 3 "why choose us" images

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
9. **Image logo review** — paused, 10 images queued
10. **CTA Section (new)** — no reusable conversion block exists
11. **ServicePageRenderer.tsx** — serves 104+ city service pages
12. **Header.tsx** — functional but could be tighter
13. **Footer.tsx** — needs CTA strip above links
14. **ServiceRequestForm.tsx** — needs trust signals

### Dev Server
- `npx vite --host` runs on port 3003 — http://localhost:3003/
