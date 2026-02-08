/**
 * Reference content for parity testing against Google Business Profile snapshot
 * This content mirrors the structure/lengths of the snapshot for pixel-perfect diffs
 * ONLY used with ?__content=ref for development parity testing
 */

import type { HomeV3Content } from './types';

export const refContent: HomeV3Content = {
  // Header/Footer removed - using existing FD components from components/layout/
  // Body content only for parity testing

  hero: {
    headline: 'Grow your business with Google',
    subheadline: 'Reach more customers with a free Business Profile on Google Search and Maps.',
    ctaPrimary: {
      label: 'Manage now',
      href: '/manage',
      variant: 'primary',
    },
    ctaSecondary: {
      label: 'Learn more',
      href: '/learn',
      variant: 'outline',
    },
  },

  tabSection: {
    sectionTitle: 'Benefits',
    tabs: [
      {
        id: 'connect',
        label: 'Connect',
        title: 'Connect with customers',
        bullets: [
          'Share updates about your business',
          'Respond to reviews and messages',
          'Keep hours, address, and contact info current',
        ],
        image: {
          src: '/images/tab-connect-placeholder.png',
          alt: 'Connect with customers illustration',
        },
      },
      {
        id: 'stand-out',
        label: 'Stand out',
        title: 'Stand out on Google',
        bullets: [
          'Add photos and videos',
          'Highlight your offerings',
          'Build trust with reviews',
        ],
        image: {
          src: '/images/tab-standout-placeholder.png',
          alt: 'Stand out illustration',
        },
      },
      {
        id: 'insights',
        label: 'Insights',
        title: 'Understand your customers',
        bullets: [
          'See how customers find you',
          'Track calls and messages',
          'Learn what works',
        ],
        image: {
          src: '/images/tab-insights-placeholder.png',
          alt: 'Insights illustration',
        },
      },
    ],
  },

  // TILES section (ion-standard-3up-stacked-list) - after Hero
  tilesSection: {
    tiles: [
      {
        id: 'tile-connect',
        icon: 'chat',
        title: 'Connect with customers',
        description: 'Communicate directly with customers who find you on Google Search and Maps.',
      },
      {
        id: 'tile-stand-out',
        icon: 'star',
        title: 'Stand out on Google',
        description: 'Share what makes your business unique and attract new customers with photos and offers.',
      },
      {
        id: 'tile-insights',
        icon: 'chart',
        title: 'See how people find you',
        description: 'Learn what searches lead people to your business and where they come from.',
      },
    ],
  },

  // Gate 3: Animated Text List sections (matches GBP ion-animated-text-list)
  atlSections: [
    {
      id: 'atl-first-impression',
      sectionTitle: 'Take charge of your first impression',
      theme: 'light',
      autoAdvanceMs: 8000,
      items: [
        {
          id: 'essential-info',
          title: 'Add essential info',
          description: 'Claim your free Business Profile on Google so customers can find info about your business, like your address, hours, and phone number.',
        },
        {
          id: 'share-photos',
          title: 'Share photos and logos',
          description: 'Show who you are with photos of your business, products, or services. Add your logo so customers recognize your brand.',
        },
        {
          id: 'show-who',
          title: 'Show who you are',
          description: 'Use posts, owner-verified Q&As, and more to share what makes your business unique.',
        },
      ],
      cta: {
        label: 'Manage now',
        href: '/manage',
        variant: 'primary',
      },
    },
    {
      id: 'atl-connect-customers',
      sectionTitle: 'Easily connect with customers',
      theme: 'dark',
      autoAdvanceMs: 8000,
      items: [
        {
          id: 'create-posts',
          title: 'Create posts, offers, and events',
          description: 'Share timely updates about your business, like special offers, events, and news to keep customers engaged.',
        },
        {
          id: 'respond-reviews',
          title: 'Respond to reviews',
          description: 'Build trust with customers by responding to reviews and showing that you value their feedback.',
        },
        {
          id: 'post-answers',
          title: 'Post answers to frequently asked questions',
          description: 'Answer common questions about your business so customers can quickly find the information they need.',
        },
      ],
      cta: {
        label: 'Learn more',
        href: '/learn',
        variant: 'outline',
      },
    },
  ],

  // Gate 4: Scrolling 3-up Cards
  scrollingCardsSection: {
    sectionTitle: 'Show what you offer, from products to services',
    sectionDescription: 'Whether you\'re a restaurant, store, or service provider, your profile helps customers do business with you easily and directly with product inventory, ordering, bookings, quotes, and more.',
    cards: [
      {
        id: 'food-orders',
        title: 'Accept food orders',
        description: 'Let customers order food directly from Google Search or Maps.',
        image: {
          src: '/images/tab-connect-placeholder.png',
          alt: 'Accept food orders illustration',
        },
      },
      {
        id: 'be-found',
        title: 'Be found for what you sell',
        description: 'Show in-stock products and help shoppers find what they need.',
        image: {
          src: '/images/tab-standout-placeholder.png',
          alt: 'Product inventory illustration',
        },
      },
      {
        id: 'offer-services',
        title: 'Offer your services',
        description: 'Let customers request quotes or book appointments.',
        image: {
          src: '/images/tab-insights-placeholder.png',
          alt: 'Service booking illustration',
        },
      },
    ],
    cta: {
      label: 'Manage now',
      href: '/manage',
      variant: 'primary',
    },
  },

  // Gate 4: Two-up Media/Text
  twoUpSection: {
    headline: 'Know how customers find your business',
    description: 'Discover what keywords people search to find you, and get insights on calls, reviews, bookings, and more to understand how your business connects with customers.',
    image: {
      src: '/images/tab-insights-placeholder.png',
      alt: 'Analytics chart showing customer insights',
    },
    layout: 'image-left',
    stats: [
      { value: '8,210', label: 'searches' },
      { value: '1,450', label: 'profile views' },
      { value: '320', label: 'calls' },
    ],
  },

  // Gate 4: Case Studies
  caseStudiesSection: {
    sectionTitle: 'What success looks like',
    caseStudies: [
      {
        id: 'detroit-voltage',
        companyName: 'Detroit Voltage',
        quote: 'Using Google Business Profile to share updates, promotions, and events has been crucial. We\'ve seen a noticeable increase in foot traffic.',
        attribution: 'Owner',
        image: {
          src: '/images/tab-connect-placeholder.png',
          alt: 'Detroit Voltage storefront',
        },
        stat: {
          value: '40%',
          label: 'increase in foot traffic',
        },
      },
      {
        id: 'yogolandia',
        companyName: 'Yogolandia',
        quote: 'Our Business Profile makes it easy for customers to find us and see what we offer. The reviews feature has been especially valuable.',
        attribution: 'Owner',
        image: {
          src: '/images/tab-standout-placeholder.png',
          alt: 'Yogolandia frozen yogurt shop',
        },
        stat: {
          value: '2x',
          label: 'more reviews',
        },
      },
    ],
  },

  // CTA Header section (ion-section-header) - after Case Studies
  ctaHeaderSection: {
    headline: 'Get started with a free Business Profile',
    description: 'Stand out on Google Search and Maps for free.',
    cta: {
      label: 'Manage now',
      href: '/manage',
      variant: 'primary',
    },
  },

  // Steps section (ion-standard-3up-stacked-list) - after CTA Header
  stepsSection: {
    steps: [
      {
        id: 'step-1',
        stepNumber: 1,
        title: 'Sign in to Google',
        description: 'Create an account or sign in to your existing Google Account to get started.',
      },
      {
        id: 'step-2',
        stepNumber: 2,
        title: 'Add your business',
        description: 'Enter your business name and address to find or create your Business Profile.',
      },
      {
        id: 'step-3',
        stepNumber: 3,
        title: 'Verify and manage',
        description: 'Verify your business to start managing your profile on Google Search and Maps.',
      },
    ],
    cta: {
      label: 'Manage now',
      href: '/manage',
      variant: 'primary',
    },
  },

  // FAQ section (ion-accordion) - at end
  faqSection: {
    sectionTitle: 'Your questions, answered',
    anchorId: 'your-questions-answered',
    items: [
      {
        id: 'faq-1',
        question: 'What is Google Business Profile?',
        answer: 'Google Business Profile is a free tool that lets you manage how your business appears on Google Search and Maps. It helps you connect with customers, share updates, and grow your business.',
      },
      {
        id: 'faq-2',
        question: 'How much does it cost?',
        answer: 'Creating and managing a Business Profile on Google is free. There are no fees to claim and verify your business or to use the management features.',
      },
      {
        id: 'faq-3',
        question: 'How do I get started?',
        answer: 'Sign in to Google, search for your business, and claim your Business Profile. Follow the verification steps to confirm you own or manage the business.',
      },
      {
        id: 'faq-4',
        question: 'How long does verification take?',
        answer: 'Verification methods vary by business type. Most businesses can verify by phone or email within minutes. Some may require postcard verification, which takes 5-14 days.',
      },
    ],
  },
};

export default refContent;
