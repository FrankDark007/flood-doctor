# Google About Clone - Component Specifications

## Source
- URL: https://about.google/
- Extracted: 2024-12-24
- Brand mapping: Google -> Flood Doctor

---

## Header

**Structure:**
- Fixed height: 64px
- Background: white (#ffffff)
- Position: static (not sticky)

**Logo:**
- Height: ~30px
- Left-aligned with container padding

**Navigation:**
- Font: 16px / 500 weight
- Color: #5f6368 (muted)
- Active color: #202124 (dark)
- Active indicator: 3px blue (#1a73e8) underline
- Gap between items: 32px

**Mobile:**
- Hamburger menu replaces nav links
- Same 64px height maintained

---

## Hero Section

**Desktop Layout:**
- Max-width content: 616px
- Left-aligned
- Padding: 80px top/bottom

**Typography:**
- H1: 60px / 72px line-height / 400 weight / -0.5px letter-spacing
- Body: 18px / 28px line-height / #5f6368 color
- Gap between H1 and body: 24px
- Gap between body and CTA: 32px

**Mobile Layout:**
- Full-width (with 16px padding)
- Center-aligned text
- H1: 36px / 44px line-height
- CTA button: full-width

---

## Primary Button

**Dimensions:**
- Height: 50px (min-height: 48px)
- Padding: 12px 24px
- Border-radius: 48px (pill shape)

**Typography:**
- Font size: 16px
- Font weight: 500

**Colors:**
- Background: #1a73e8
- Text: #ffffff
- Hover background: #1557b0

**Mobile:**
- Full-width
- Same height and padding
- Center-aligned text

---

## Card Grid

**Desktop Layout:**
- 3 columns
- Gap: 64px between cards
- Max-width container: 1200px
- Centered in viewport

**Card Dimensions:**
- Width: ~389px
- Border-radius: 8px
- Background: white

**Card Image:**
- Aspect ratio: 16:9 (1.78)
- Height: ~218px
- Border-radius: 8px 8px 0 0 (top corners only)
- Object-fit: cover

**Card Content:**
- Padding: 16px all sides
- Title: 20px / 28px line-height / #202124

**Card Hover:**
- Box-shadow transition: 0.25s
- Shadow on hover: 0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)

**Mobile:**
- 1 column, full-width cards
- Gap: 24px
- Side padding: 16px

---

## Two-Column Feature Section

**Desktop Layout:**
- 50/50 split
- Gap: 64px
- Vertically centered content
- Alternating image left/right

**Content Side:**
- H2: 36px / 44px line-height
- Body: 18px / 28px
- CTA button below

**Image Side:**
- Border-radius: 8px or 16px
- Aspect ratio flexible

**Mobile:**
- Stacked (image on top, content below)
- Full-width elements

---

## Section Backgrounds

**Alternating pattern:**
1. White (#ffffff)
2. Subtle gray (#f8f9fa)

**Section Padding:**
- Desktop: 80px top/bottom
- Mobile: 48px top/bottom

---

## Footer

**Background:** #f8f9fa
**Padding:** 48px vertical, 24px horizontal
**Typography:** 14px, #5f6368

---

## Responsive Breakpoints

| Breakpoint | Width | Columns | Container Padding |
|------------|-------|---------|-------------------|
| Mobile     | < 768px | 1 | 16px |
| Tablet     | 768-1023px | 2 | 24px |
| Desktop    | >= 1024px | 3 | 24px |

---

## Animation & Transitions

- Button hover: background-color 150ms ease
- Card hover: box-shadow 250ms ease
- Focus states: outline appears immediately
- Page transitions: none (static page)
