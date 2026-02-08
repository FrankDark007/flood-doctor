# Layout Fix Backlog

**Date:** 2025-01-08
**Reviewed Pages:**
- https://flood.doctor/
- https://flood.doctor/services/residential/
- https://flood.doctor/services/residential/restoration-services/flood-cleanup/

---

## Page 1: Homepage (/)

| Issue | Severity | Fix Scope | Likely File(s) | Fix Type |
|-------|----------|-----------|----------------|----------|
| None observed | - | - | - | - |

**Notes:** Homepage layout appears solid. Hero, trust bar, process section, dispatch panel, FAQ accordion, CTA, and service areas all render correctly on desktop.

---

## Page 2: Services/Residential (/services/residential/)

| Issue | Severity | Fix Scope | Likely File(s) | Fix Type |
|-------|----------|-----------|----------------|----------|
| Massive blank space in middle of page | HIGH | PAGE-ONLY | `pages/services/ServicesHub.tsx` or `pages/services/ResidentialServices.tsx` | PAGE MARKUP |
| Service cards (Restoration, Remediation, Specialty) not rendering | HIGH | PAGE-ONLY | `pages/services/ResidentialServices.tsx`, check component imports | PAGE MARKUP |
| Testimonial quote section missing | MED | PAGE-ONLY | `pages/services/ResidentialServices.tsx` | PAGE MARKUP |
| Commercial promo section missing | MED | PAGE-ONLY | `pages/services/ResidentialServices.tsx` | PAGE MARKUP |
| Trust badges section missing | MED | PAGE-ONLY | `pages/services/ResidentialServices.tsx` | PAGE MARKUP |
| CTA section missing | MED | PAGE-ONLY | `pages/services/ResidentialServices.tsx` | PAGE MARKUP |

**Root Cause Hypothesis:** The page renders hero + stats bar, then nothing until footer. Likely a React component error, missing import, or conditional rendering failure in the middle sections. Check browser console for errors.

---

## Page 3: Flood Cleanup Service (/services/residential/restoration-services/flood-cleanup/)

| Issue | Severity | Fix Scope | Likely File(s) | Fix Type |
|-------|----------|-----------|----------------|----------|
| "Technicians available now" badge could be more prominent | LOW | PAGE-ONLY | `data/servicePageOverrides.ts` (add flood-cleanup override) | DATA/OVERRIDE |
| Problem section lacks X icons on problem points | LOW | SHARED | `generated-layouts/service-page/ProblemSolution.tsx` | SHARED STYLES (avoid for now) |
| Process timeline icons small on desktop | LOW | SHARED | `generated-layouts/service-page/ProcessMap.tsx` | SHARED STYLES (avoid for now) |
| Pricing card CTA button could be larger | LOW | SHARED | `generated-layouts/service-page/PricingCard.tsx` | SHARED STYLES (avoid for now) |
| Related services section spacing tight | LOW | SHARED | `generated-layouts/service-page/RelatedServices.tsx` | SHARED STYLES (avoid for now) |
| Footer city links could use better spacing | LOW | SHARED | `components/Footer.tsx` | SHARED STYLES (avoid for now) |

**Notes:** This page renders well overall. The generated service page layout is functioning correctly. Minor polish issues only.

---

## Priority Summary

### CRITICAL (Fix First)
1. **Services/Residential blank page** - HIGH severity, PAGE-ONLY fix
   - Debug why middle content sections not rendering
   - Check `ResidentialServices.tsx` or equivalent for errors

### NEXT (After Critical)
2. Add `flood-cleanup` slug to `servicePageOverrides.ts` with customized content

### LATER (Polish Phase)
3. Minor SHARED component styling (avoid for now per instructions)

---

## Recommended Debug Steps for /services/residential/

1. Open browser DevTools → Console, check for React errors
2. Check if `ResidentialServices.tsx` exists and is imported correctly
3. Verify all child components (service cards, testimonial, commercial promo) are imported
4. Test locally with `npm run dev` to see if issue reproduces
5. Check for any conditional rendering that might be failing (e.g., empty data arrays)
