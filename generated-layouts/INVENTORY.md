# Generated Layouts & Components Inventory

> Generated via Google AI Studio (Gemini) for Flood Doctor website redesign
> Organized: January 6, 2026

---

## Quick Stats

| Category | Count | Status |
|----------|-------|--------|
| Hero Variants | 5 | Ready |
| Service Grids | 6 | Ready |
| Process Sections | 4 | Ready |
| Longpage Layout | 1 (10 sections) | Ready |
| **Total Components** | **16+** | |

---

## GitHub Repositories

| Repo | URL |
|------|-----|
| Hero Variants | https://github.com/FrankDark007/Hero-Variants |
| Service Grid Layouts | https://github.com/FrankDark007/Service-Grid-Layouts |
| Process Components | https://github.com/FrankDark007/-Restoration-Process-Components |
| Longpage Design | https://github.com/FrankDark007/Longpage-Design-for-Services |

---

## 1. Hero Variants (`/heroes/`)

| Component | Style | Best For |
|-----------|-------|----------|
| `HeroMagazine.tsx` | Editorial typography, mixed weights | Brand storytelling |
| `HeroDashboard.tsx` | Dark mission control, widgets | Enterprise/tech feel |
| `HeroTestimonial.tsx` | Large quote, social proof first | Trust building |
| `HeroComparison.tsx` | Before/after split screen | Problem/solution narrative |
| `HeroInteractive.tsx` | Zip code checker, mock API | Lead generation |

**Dependencies:** `lucide-react`
**Custom CSS Needed:** `animate-float`, `animate-pulse-slow`, `bg-noise`

---

## 2. Service Grid Layouts (`/service-grids/`)

| Component | Style | Best For |
|-----------|-------|----------|
| `ServiceGridStandard.tsx` | Classic 3-column cards | Services overview |
| `ServiceGridBento.tsx` | Asymmetric, featured first | Homepage highlight |
| `ServiceIconRail.tsx` | Horizontal scroll (mobile) | Mobile-first UX |
| `ServiceFeatureCards.tsx` | Gradient cards, reveal hover | Visual impact |
| `ServiceMinimalList.tsx` | Table/list view | Dense info display |
| `ServiceModal.tsx` | Detail modal | Service deep-dive |

**Dependencies:** `lucide-react`, `types.ts`, `constants.tsx`
**Props Interface:** `ServiceGridProps { services, onServiceClick }`

---

## 3. Process Components (`/process/`)

| Component | Style | Best For |
|-----------|-------|----------|
| `ProcessTimeline.tsx` | Horizontal steps, animated line | Linear flow |
| `ProcessBento.tsx` | Asymmetric grid (7/5, 6/6) | Visual hierarchy |
| `ProcessCards.tsx` | Card grid, progress bars | Project roadmap |
| `ProcessAccordion.tsx` | Expandable, sticky sidebar | Detailed steps |

**Dependencies:** `lucide-react`, `constants.tsx`, `hooks/useIntersectionObserver.ts`
**Custom CSS Needed:** `fade-in-section`, `.is-visible`

---

## 4. Longpage Layout (`/longpage/`)

Complete service detail page with 10 sections:

| Section | Description |
|---------|-------------|
| `Hero` | Badges, floating cards, trust indicators |
| `Introduction` | Quote card + "Why Speed Matters" timeline |
| `EmergencyServices` | 3-column features + modal |
| `RestorationServices` | Bento grid (Residential/Commercial/Biohazard) |
| `WhyChooseUs` | Dark section, 4 value props |
| `Process` | 6-step roadmap with tooltips |
| `CommonCauses` | 4 icon cards |
| `InfoSections` | Service Areas + FAQ accordion |
| `Testimonials` | 3-column reviews |
| `Footer` | Contact form, credentials |

**Files:**
- `App.tsx` - Main layout, scroll spy
- `Sections.tsx` - All 10 sections (44KB)
- `Navigation.tsx` - Sidebar, MobileHeader, MobileMenu, StickyBottomCTA
- `UI.tsx` - Button, Card, Badge, Accordion, Modal, Tooltip, StarRating
- `types.ts` - TypeScript interfaces

---

## Integration Requirements

### Tailwind Config Additions

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        'primary-light': '#e8f0fe',
        'primary-dark': '#1557b0',
        surface: '#F8FAFC',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'slide-up': 'slideUp 0.3s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

### Global CSS Additions

```css
/* Intersection Observer animations */
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hide scrollbar utility */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

/* iOS safe area */
.pb-safe-area { padding-bottom: env(safe-area-inset-bottom); }

/* Noise texture (optional) */
.bg-noise {
  background-image: url("data:image/svg+xml,..."); /* noise pattern */
}
```

---

## Usage Examples

### Hero Variant
```tsx
import HeroInteractive from './generated-layouts/heroes/HeroInteractive';
// Use directly - self-contained component
<HeroInteractive />
```

### Service Grid
```tsx
import ServiceGridBento from './generated-layouts/service-grids/ServiceGridBento';
import { SERVICES } from './generated-layouts/service-grids/constants';

<ServiceGridBento
  services={SERVICES}
  onServiceClick={(service) => openModal(service)}
/>
```

### Process Section
```tsx
import ProcessBento from './generated-layouts/process/ProcessBento';
// Uses constants internally
<ProcessBento />
```

---

## Next Steps

- [ ] Add more section types (CTA, Trust, FAQ standalone)
- [ ] Create blog post layouts
- [ ] Generate city-specific landing page variants
- [ ] Build component preview routes at `/dev/`
