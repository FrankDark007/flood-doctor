/**
 * DEV-ONLY Variant Registry
 * All imports are lazy — nothing enters the production bundle.
 * This file is only imported by the /__variants route, which is DEV-guarded.
 */
import { lazy, type ComponentType } from 'react';

export type VariantKind =
  | 'homepage'
  | 'gbp-clone'
  | 'about'
  | 'contact'
  | 'services-index'
  | 'service-detail'
  | 'service-page'
  | 'landing'
  | 'litho'
  | 'gemini'
  | 'hero'
  | 'city'
  | 'dev-tool'
  | 'template';

export interface VariantEntry {
  slug: string;
  title: string;
  kind: VariantKind;
  Component: React.LazyExoticComponent<ComponentType<any>>;
  notes?: string;
  fullscreen?: boolean;
}

export const variants: VariantEntry[] = [
  // ── FD Home Versions ──
  {
    slug: 'fd-home-v4',
    title: 'FD Home V4 (Production)',
    kind: 'homepage',
    Component: lazy(() => import('../fd-home-v4')),
    notes: 'Current production homepage — Google aesthetic',
    fullscreen: true,
  },
  {
    slug: 'fd-home-v3',
    title: 'FD Home V3 (GBP Layout)',
    kind: 'homepage',
    Component: lazy(() => import('../FloodDoctorHomeV3')),
    notes: 'GBP layout clone with query param controls',
    fullscreen: true,
  },
  {
    slug: 'fd-home-v3-parity',
    title: 'V3 Parity Tester',
    kind: 'homepage',
    Component: lazy(() => import('../FloodDoctorHomeV3Parity')),
    notes: 'Side-by-side parity comparison tool',
    fullscreen: true,
  },
  {
    slug: 'home-a',
    title: 'Home A (Apple/Google Marketing)',
    kind: 'homepage',
    Component: lazy(() => import('../HomeDevA')),
    notes: 'Cinematic hero, animated counter stats',
  },
  {
    slug: 'home-b',
    title: 'Home B',
    kind: 'homepage',
    Component: lazy(() => import('../HomeDevB')),
  },
  {
    slug: 'home-c',
    title: 'Home C (Editorial/Magazine)',
    kind: 'homepage',
    Component: lazy(() => import('../HomeDevC')),
    notes: 'Magazine-style editorial layout',
  },
  {
    slug: 'home-legacy',
    title: 'Home (Legacy)',
    kind: 'homepage',
    Component: lazy(() => import('../Home')),
    notes: 'Original homepage with franchise context',
  },

  // ── GBP Clone Versions ──
  {
    slug: 'gbp-clone',
    title: 'GBP Clone (Full)',
    kind: 'gbp-clone',
    Component: lazy(() => import('../GoogleBusinessProfileClone')),
    notes: 'Full Google Business Profile clone with CSS',
    fullscreen: true,
  },
  {
    slug: 'gbp-clone-v3',
    title: 'GBP V3 Viewport Tester',
    kind: 'gbp-clone',
    Component: lazy(() => import('../GbpCloneDevV3')),
    notes: 'GBP clone viewport tester with iframe',
    fullscreen: true,
  },
  {
    slug: 'gbp-clone-v5',
    title: 'GBP V5 (Keyword Planner)',
    kind: 'gbp-clone',
    Component: lazy(() => import('../gbp-clone-v5')),
    notes: 'Keyword planner clone',
    fullscreen: true,
  },
  {
    slug: 'google-home-clone',
    title: 'Google Home Section Clone',
    kind: 'gbp-clone',
    Component: lazy(() => import('../GoogleHomeCloneDev')),
    notes: '15+ passes of iteration on Google Home section',
  },

  // ── About Variants ──
  {
    slug: 'about-a',
    title: 'About A',
    kind: 'about',
    Component: lazy(() => import('../AboutDevA')),
  },
  {
    slug: 'about-b',
    title: 'About B',
    kind: 'about',
    Component: lazy(() => import('../AboutDevB')),
  },
  {
    slug: 'about-c',
    title: 'About C',
    kind: 'about',
    Component: lazy(() => import('../AboutDevC')),
  },

  // ── Contact Variants ──
  {
    slug: 'contact-a',
    title: 'Contact A',
    kind: 'contact',
    Component: lazy(() => import('../ContactDevA')),
  },
  {
    slug: 'contact-b',
    title: 'Contact B',
    kind: 'contact',
    Component: lazy(() => import('../ContactDevB')),
  },
  {
    slug: 'contact-c',
    title: 'Contact C',
    kind: 'contact',
    Component: lazy(() => import('../ContactDevC')),
  },

  // ── Services Index Variants ──
  {
    slug: 'services-a',
    title: 'Services A',
    kind: 'services-index',
    Component: lazy(() => import('../ServicesDevA')),
  },
  {
    slug: 'services-b',
    title: 'Services B',
    kind: 'services-index',
    Component: lazy(() => import('../ServicesDevB')),
  },
  {
    slug: 'services-c',
    title: 'Services C',
    kind: 'services-index',
    Component: lazy(() => import('../ServicesDevC')),
  },

  // ── Service Detail A/B/C ──
  {
    slug: 'service-detail-a',
    title: 'Service Detail A',
    kind: 'service-detail',
    Component: lazy(() => import('../templates/ServiceDetailDevA')),
  },
  {
    slug: 'service-detail-b',
    title: 'Service Detail B',
    kind: 'service-detail',
    Component: lazy(() => import('../templates/ServiceDetailDevB')),
  },
  {
    slug: 'service-detail-c',
    title: 'Service Detail C',
    kind: 'service-detail',
    Component: lazy(() => import('../templates/ServiceDetailDevC')),
  },

  // ── Landing Pages ──
  {
    slug: 'landing-a',
    title: 'Landing Page A',
    kind: 'landing',
    Component: lazy(() => import('../templates/LandingPageA')),
  },
  {
    slug: 'landing-b',
    title: 'Landing Page B',
    kind: 'landing',
    Component: lazy(() => import('../templates/LandingPageB')),
  },
  {
    slug: 'landing-c',
    title: 'Landing Page C',
    kind: 'landing',
    Component: lazy(() => import('../templates/LandingPageC')),
  },

  // ── Service Pages 1-10 ──
  ...Array.from({ length: 10 }, (_, i) => ({
    slug: `service-page-${i + 1}`,
    title: `Service Page ${i + 1}`,
    kind: 'service-page' as VariantKind,
    Component: lazy(() => import(`../templates/dev/Service-Dev-${i + 1}`)),
  })),

  // ── Service Detail 1-10 ──
  ...Array.from({ length: 10 }, (_, i) => ({
    slug: `service-detail-${i + 1}`,
    title: `Service Detail ${i + 1}`,
    kind: 'service-detail' as VariantKind,
    Component: lazy(() => import(`../templates/dev/ServiceDetailDev${i + 1}`)),
  })),

  // ── Litho Style ──
  ...Array.from({ length: 3 }, (_, i) => ({
    slug: `litho-${i + 1}`,
    title: `Litho ${i + 1}`,
    kind: 'litho' as VariantKind,
    Component: lazy(() => import(`../templates/dev/LithoDev${i + 1}`)),
  })),

  // ── Gemini Coded ──
  {
    slug: 'gemini-water-damage',
    title: 'Gemini Water Damage',
    kind: 'gemini',
    Component: lazy(() => import('../templates/dev/GeminiWaterDamage')),
  },
  {
    slug: 'gemini-water-damage-v2',
    title: 'Gemini Water Damage V2',
    kind: 'gemini',
    Component: lazy(() => import('../templates/dev/GeminiWaterDamageV2')),
  },

  // ── Dev Tools & Showcases ──
  {
    slug: 'component-showcase',
    title: 'Component Showcase',
    kind: 'dev-tool',
    Component: lazy(() => import('../ComponentShowcase')),
    notes: 'CTA + Service Grid variant library',
  },
  {
    slug: 'visual-components',
    title: 'Visual Components Demo',
    kind: 'dev-tool',
    Component: lazy(() => import('../VisualComponentsDemo')),
  },
  {
    slug: 'generated-layouts',
    title: 'Generated Layouts Lab',
    kind: 'dev-tool',
    Component: lazy(() => import('../GeneratedLayoutsLab')),
    notes: '5 hero variants + layout components',
  },
  {
    slug: 'service-template-v1',
    title: 'Service Template V1',
    kind: 'template',
    Component: lazy(() => import('../service-template-v1')),
    fullscreen: true,
  },
  {
    slug: 'residential-variant-a',
    title: 'Residential Variant A',
    kind: 'template',
    Component: lazy(() => import('../templates/ResidentialVariantA')),
    notes: 'Residential service variant with Google colors',
  },
];
