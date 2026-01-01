# Google Graphics Design System
## Comprehensive Documentation for Flood Doctor

Based on extensive analysis of Google's web properties including Google Ads, Google Analytics, Google Workspace, Google Maps Platform, and YouTube Ads.

---

## 1. Core Color Palette

### Primary Google Colors
```
Blue:   #4285f4 (primary actions, links, active states)
Green:  #34a853 (success, positive indicators)
Yellow: #fbbc04 (warnings, highlights, accents)
Red:    #ea4335 (errors, urgent, alerts)
```

### Soft Pastel Backgrounds (for icons/badges)
```
Light Blue:   #e8f0fe, #d2e3fc
Light Green:  #e6f4ea, #ceead6
Light Yellow: #fef7e0, #feefc3
Light Red:    #fce8e6, #fad2cf
```

### Neutral Colors
```
Text Primary:    #202124
Text Secondary:  #5f6368
Text Tertiary:   #3c4043
Border:          #dadce0
Background:      #f8f9fa
Surface:         #ffffff
```

---

## 2. Typography Patterns

### Headlines
- **Display**: 48-56px, font-weight 400 (normal), line-height 1.2
- **H1**: 36-40px, font-weight 400, line-height 1.25
- **H2**: 28-32px, font-weight 400, line-height 1.3
- **Section titles**: Often in *italic* for emphasis

### Body Text
- **Large**: 18px, line-height 1.5
- **Regular**: 16px, line-height 1.5
- **Small**: 14px, line-height 1.4

### Special
- **Category labels**: 12-14px, uppercase, letter-spacing 0.5px, color #5f6368
- **Stats/metrics**: 40-56px, font-weight 400, Google Blue

---

## 3. Layout Patterns

### Hero Sections
1. **Split Layout**: Text left (40-45%) + Visual right (55-60%)
2. **Centered Layout**: Logo/icon → Headline → Description → CTA buttons (centered)
3. **Full-width Visual**: Centered text over large visual/photo

### Content Sections
1. **Feature Split**: Alternating left/right layouts
2. **3-Column Grid**: Icon cards or feature cards
3. **4-Column Grid**: Compact feature lists with icons
4. **Tabbed Content**: Tab navigation with content panels below

### Common Ratios
- Content max-width: 1200-1296px
- Section padding: 80-120px vertical
- Card padding: 24-32px
- Grid gaps: 24-32px

---

## 4. Button Styles

### Primary (Filled)
```css
background: #1a73e8;
color: white;
padding: 12px 24px;
border-radius: 24px; /* pill shape */
font-weight: 500;
```

### Secondary (Outline)
```css
background: transparent;
color: #1a73e8;
border: 1px solid #dadce0;
padding: 12px 24px;
border-radius: 24px;
font-weight: 500;
```

### Text Link
```css
color: #1a73e8;
font-weight: 500;
text-decoration: none;
/* with optional arrow icon */
```

---

## 5. Icon Patterns

### Icon Sizes
- Small: 20-24px (inline, navigation)
- Medium: 32-40px (cards, lists)
- Large: 48-64px (features, process steps)
- XL: 80-120px (hero graphics)

### Icon Style
- Simple line stroke (2px weight)
- Single color (usually Google Blue or gray)
- Rounded corners/caps
- Minimal detail

### Icon with Background
```
Circle: 56-80px diameter, pastel background
Icon: 24-32px centered, Google Blue or matching dark
```

---

## 6. Card Patterns

### Feature Card
```
- Rounded corners: 16-24px
- Border: 1px solid #dadce0 OR subtle shadow
- Padding: 24-32px
- Icon at top (in pastel circle)
- Bold headline
- Description text
```

### Case Study Card
```
- Split layout: branding left, photo right
- Logo prominently displayed
- Italic headline
- Brief description
- Optional stat overlay on photo
```

### Article/News Card
```
- Thumbnail image left (40%)
- Category label (uppercase, gray)
- Headline
- Brief description or date
```

---

## 7. Graphics Patterns (KEY FOR FLOOD DOCTOR)

### UI Mockup Graphics
Google frequently uses **composite UI mockups** showing:
- Multiple overlapping interface elements
- Floating cards/widgets on top of base UI
- Realistic data and content
- Subtle shadows for depth
- Rounded corners throughout

**Example structure:**
```
Base layer: Full UI screenshot/mockup
Middle layer: Floating stat card or widget
Top layer: Icon or decorative element
```

### Photo + UI Overlay
Real photography with floating UI elements:
- Stats cards with metrics
- Progress indicators
- Notification cards
- Line charts or simple graphs

### Data Visualization
- Simple line charts with fill area
- Progress bars in Google colors
- Circular progress indicators
- Stat cards with large numbers

### Map Graphics
- Simplified, light-toned base maps
- Highlighted regions (Google Blue or Green)
- Location pins (Google Red pin style)
- Route lines (Blue with rounded caps)
- Floating info cards

---

## 8. Animation Principles

### Timing
- Standard: 300ms
- Quick: 150-200ms
- Slow/emphasis: 400-500ms
- Easing: ease-out or ease-in-out

### Types
- Fade in/out (opacity)
- Slide up/in (transform)
- Scale (micro-interactions)
- Draw/stroke (SVG paths)
- Pulse (attention)

### When to Animate
- Page load (staggered fade-in)
- Scroll into view
- Hover states
- State changes
- Process steps (sequential)

---

## 9. Specific Graphics for Flood Doctor

### Rapid Response Hero (from hero.svg)
Create a speedometer/gauge graphic showing:
- Main circular gauge with colored sections (Green → Yellow → Red)
- Needle pointing to "fast" zone
- "60 MIN" large text
- Small secondary gauge showing response status
- Animated needle movement

### DMV Service Area Map
Based on maps.svg reference:
- Isometric or flat map of DMV region
- Blue highlighted service zone
- Pin markers for each city:
  - Ashburn, Arlington, Alexandria, Falls Church
  - Fairfax, Great Falls, Herndon, Lorton
  - McLean, Reston, Springfield, Tysons, Vienna
- Route lines showing coverage
- Floating info card with stats

### Inspection/Assessment (from section1.svg)
Dashboard-style graphic showing:
- Search/magnifying glass element
- Bar charts for moisture readings
- Line graph for drying progress
- Data cards with status indicators
- Checklist elements

### Process Steps
Sequential graphic showing:
1. Phone call icon (animated ring)
2. Dispatch truck icon (animated movement)
3. Assessment clipboard (animated checkmarks)
4. Restoration tools (animated progress)

---

## 10. Implementation Notes

### SVG Best Practices
- Use viewBox for scaling
- Group related elements with `<g>`
- Use `<defs>` for reusable elements
- Apply animations via CSS or SMIL
- Keep file size optimized

### React Component Structure
```tsx
interface GraphicProps {
  className?: string;
  animated?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
```

### Responsive Considerations
- Mobile: Simplify graphics, reduce animation
- Tablet: Maintain layout with scaled graphics
- Desktop: Full graphics with all animations

---

## 11. Quality Checklist

Before finalizing any graphic:
- [ ] Uses correct Google color palette
- [ ] Typography matches Google style
- [ ] Rounded corners consistent (8px, 16px, 24px)
- [ ] Appropriate shadows/depth
- [ ] Animation timing feels natural
- [ ] Works at all sizes (responsive)
- [ ] Accessible (sufficient contrast)
- [ ] File size optimized
- [ ] Cross-browser compatible

---

## 12. Reference Pages Analyzed

1. Google Workspace Healthcare - UI mockups, testimonials
2. Google Ads Campaign Budget - Photo + UI overlay, tool forms
3. Google Analytics - Feature cards, case studies, process steps
4. YouTube Ads - Photo collages, tab navigation
5. Google Maps Platform - Map graphics, interactive demos

---

*Document created: December 2024*
*For Flood Doctor design system implementation*
