# Flood Doctor fd-google-redesign - Session State

**Last Updated:** 2026-02-20 (evening)

---

## 🟢 COMPLETE: Security P0 — Secret Scanning & Credential Rotation

**Commits pushed to main:**
- `4670a34` — Gitleaks secret scanning (pre-commit hook + CI workflow)
- `602f91f` — Resend API key moved to Worker env binding
- `c0b819d` — Form handler input sanitization (XSS prevention)

**Gitleaks Setup (both repos):**
- `.gitleaks.toml` config with custom rules + allowlists
- Pre-commit hook (local enforcement via `.git/hooks/pre-commit`)
- GitHub Actions workflow `.github/workflows/gitleaks.yml` (CI enforcement)
- Installed gitleaks 8.30.0 via Homebrew

**Credential Rotations:**
- ✅ Resend API key rotated (sending-only, scoped to `mail.flood.doctor`)
- ✅ Cloudflare API token (rotated by user day prior)
- ✅ GoDaddy SSH password rotated
- All updated in `~/.claude/credentials.local`

**Cloudflare Worker (`flood-doctor-forms`):**
- Resend key now reads from `env.RESEND_API_KEY` (Cloudflare secret binding)
- 500 guard if binding missing
- All user inputs HTML-escaped to prevent XSS in email notifications
- Deployed and smoke tested successfully

**Mission-Control-APP:**
- `.gitignore` patched (added `*.save` pattern)
- Gitleaks config + CI workflow + pre-commit hook added
- Committed `4d515c1` and pushed

**Skipped (by choice):**
- GITLEAKS_LICENSE GitHub secret (works without it)
- Branch protection on main (keeps direct-push workflow)

---

## 🟡 IMMEDIATE: Re-deploy dist-cities/ with full 8-service matrix

The current production deployment only has 4 services per city. Need to:
1. `npm run build:cities` → rebuild with fixes
2. Deploy updated dist-cities/ to all 13 city subdomains
3. Purge Cloudflare cache
4. Smoke test all 8 services for one city (e.g., herndon)

---

## 🔴 BLOCKED: P2 Strategic Decision

WordPress vs flood.doctor 301 redirects — still awaiting strategic decision.

---

## 🔴 ACTIVE: Service Request Form Redesign (SERVICE-FORM-COLLAB-001)

**Status:** Bootstrap created, ready for GPT↔Claude collab loop
**Bootstrap:** `collab-log/SERVICE-FORM-COLLAB-001-bootstrap.md`
**To resume:** Run `/collab resume SERVICE-FORM-COLLAB-001`

---

## Next Steps (Beyond CityLift)

- **Deploy CityLift to production** (immediate next action)
- Client Portal (CompanyCam + Matterport)
- Neighborhood Page Redesign (68 pages)
- Blog Content Expansion (5 cities need 2 more posts)

---

## Canonical Mapping Reference (P5)
| City Slug | Correct Nested Path |
|---|---|
| `mold-remediation` | `/services/residential/cleanup-services/mold-remediation/` |
| `sewage-cleanup` | `/services/residential/cleanup-services/sewage-cleanup/` |
| `flood-cleanup` | `/services/residential/restoration-services/flood-cleanup/` |
| `basement-flooding` | `/services/residential/specialty-services/basement-flooding/` |
| `storm-damage` | `/services/residential/restoration-services/storm-damage-restoration/` |
| `burst-pipe` | `/services/residential/restoration-services/burst-pipe-cleanup/` |
| `fire-damage` | `/services/residential/cleanup-services/fire-smoke-cleanup/` |
| `water-damage` | `/services/residential/restoration-services/water-damage-restoration/` |

---

## Production Info

- **Live URL:** https://flood.doctor
- **Hosting:** GoDaddy (132.148.253.156)
- **CDN:** Cloudflare
- **Deploy:** `./scripts/deploy.sh <password>`

---

*Updated: 2026-02-20 — Security P0 complete. All secrets rotated. Gitleaks on both repos.*
