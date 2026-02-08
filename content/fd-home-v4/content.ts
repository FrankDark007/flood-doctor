/**
 * Flood Doctor Homepage V4 - Content
 * Google Business Profile placeholder text (SEO content to be added later)
 */

import type { HomeV4Content } from './types';

export const content: HomeV4Content = {
  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Stand out on Google with a free Business Profile',
    subheadline: 'With a Business Profile, you can show up when customers search for businesses like yours on Google Search and Maps.',
    searchText: 'Electricians near me',
    ctaPrimary: {
      label: 'Start now',
      href: '/request/',
    },
  },

  // ============================================
  // VALUE PROPS SECTION
  // ============================================
  valueProps: [
    {
      icon: 'tag',
      title: 'Free',
      description: 'Create a Business Profile at no cost',
    },
    {
      icon: 'refresh',
      title: 'Easy',
      description: 'Manage your profile from Search and Maps',
    },
    {
      icon: 'settings',
      title: 'Personalized',
      description: 'Add hours, photos, posts, and more',
    },
  ],

  // ============================================
  // FEATURE SECTION 1 (text-left, light theme)
  // ============================================
  feature1: {
    title: 'Take charge of your first impression',
    subtitle: 'Highlight essential info and show what makes your business unique, right on your Business Profile.',
    visualType: 'attributes',
    items: [
      {
        id: 'add-info',
        title: 'Add essential info',
        description: 'Let customers know your location, phone number, and hours so they can reach you easily.',
      },
      {
        id: 'share-photos',
        title: 'Share photos and logos',
        description: 'Show off your storefront, products, and team to build trust with potential customers.',
      },
      {
        id: 'show-who',
        title: 'Show who you are',
        description: 'Add attributes to show your business identifies as Black-owned, women-owned, veteran-owned, and is LGBTQ+ friendly so people can learn more about your business.',
      },
    ],
  },

  // ============================================
  // FEATURE SECTION 2 (text-right, dark theme)
  // ============================================
  feature2: {
    title: 'Easily connect with customers',
    subtitle: 'Update customers with the latest via posts, offers, and more.',
    visualType: 'posts',
    items: [
      {
        id: 'create-posts',
        title: 'Create posts, offers, and events',
        description: 'Add posts to your Business Profile to promote special offers, events, and updates to keep customers in the loop.',
      },
      {
        id: 'respond-reviews',
        title: 'Respond to reviews',
        description: 'Engage with your audience by responding to feedback and building long-term customer loyalty.',
      },
      {
        id: 'post-answers',
        title: 'Post answers to frequently asked questions',
        description: 'Reduce the need for direct queries by providing clear answers to common customer questions upfront.',
      },
    ],
  },

  // ============================================
  // PRODUCT OFFERINGS SECTION
  // ============================================
  products: [
    {
      id: 'services',
      type: 'services',
      title: 'Service businesses',
      description: 'Let customers request quotes directly from your profile',
    },
    {
      id: 'products',
      type: 'products',
      title: 'Retail businesses',
      description: 'Show what you sell with product listings',
    },
    {
      id: 'food',
      type: 'food',
      title: 'Restaurants',
      description: 'Enable online ordering for pickup and delivery',
    },
  ],

  // ============================================
  // INSIGHTS SECTION
  // ============================================
  insights: {
    headline: 'Know how customers find your business',
    description: 'Discover what keywords people search to find you, and get insights on calls, reviews, bookings, and more to understand how your business connects with customers.',
    statValue: '8,210',
    statLabel: 'Business Profile interactions',
  },

  // ============================================
  // SUCCESS STORY / TESTIMONIALS
  // ============================================
  testimonials: [
    {
      id: 'detroit-voltage',
      quote: "I always asked customers, 'What made you call me?' and oftentimes they tell me, 'We reached out because of your Business Profile on Google.'",
      company: 'Detroit Voltage',
      location: 'Detroit, Michigan',
      videoLabel: 'Watch Story',
    },
  ],

  // ============================================
  // FINAL STEPS SECTION
  // ============================================
  finalSteps: {
    headline: 'Show the best of your business',
    subtitle: 'Reach more customers in three simple steps with your free Business Profile.',
    ctaLabel: 'Start now',
    ctaHref: '/request/',
    steps: [
      {
        number: 1,
        title: 'Claim',
        description: 'Create a Business Profile, or manage an existing profile on Search and Maps',
      },
      {
        number: 2,
        title: 'Personalize',
        description: 'Add hours, photos, and other details and get discovered by customers near you',
      },
      {
        number: 3,
        title: 'Manage',
        description: 'Share updates, respond to reviews, and connect with customers on Google',
      },
    ],
  },

  // ============================================
  // FAQ SECTION
  // ============================================
  faq: [
    {
      id: 'faq-free',
      question: 'Is a Business Profile on Google free?',
      answer: 'Yes, creating and managing a Business Profile on Google is completely free.',
    },
    {
      id: 'faq-qualify',
      question: 'How do I qualify for a Business Profile?',
      answer: 'Most businesses that serve customers at a physical location or within a service area are eligible for a Business Profile.',
    },
    {
      id: 'faq-time',
      question: 'How long does it take to create a Business Profile?',
      answer: 'Creating a profile takes just a few minutes. Verification may take additional time depending on the method chosen.',
    },
    {
      id: 'faq-manage',
      question: 'How do I manage my Business Profile?',
      answer: 'You can manage your Business Profile directly from Google Search or Maps by searching for your business name.',
    },
  ],
};
