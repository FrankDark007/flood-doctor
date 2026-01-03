// src/content/cities/reston/homepage.ts
// Generated: January 3, 2026
// Phase 3: Reston Homepage Content - 100% Unique

import type { FranchiseData } from '../../../data/franchises';

export interface HomepageContent {
  heroHeadline: string;
  heroSubheadline: string;
  introParagraph: string;
  whyChooseUs: {
    headline: string;
    points: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  localExpertise: {
    headline: string;
    paragraph: string;
    architectureNote: string;
    commonIssues: string[];
  };
  serviceAreaDescription: string;
  emergencyCTA: {
    headline: string;
    subtext: string;
    buttonText: string;
  };
  localTestimonialIntro: string;
  faqSection: Array<{
    question: string;
    answer: string;
  }>;
}

export const restonHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Reston's 24/7 Water Damage Restoration Experts",

  heroSubheadline: "30-minute emergency response to Reston Town Center, South Lakes, Lake Anne & all Reston neighborhoods. Serving America's first planned community since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: \`When water threatens your Reston home, every minute counts. Whether you're in a Lake Anne townhome with views of Washington Plaza, a South Lakes colonial backing to one of Reston's 50+ miles of pathways, or a contemporary condo near Reston Town Center, Flood Doctor responds within 30 minutes—day or night.

Reston's planned community design creates unique water damage challenges. The integration of homes with lakes, streams, and natural areas means higher groundwater tables and flood exposure. Your HOA-maintained exterior doesn't mean you handle interior water damage alone. From cluster housing in Hunters Woods to single-family homes in North Point, we understand Reston's diverse housing stock.

Our IICRC-certified crews know the Reston Association's covenants, the pathways that shortcut response times, and the tight timelines Reston homeowners expect. We've dried basements throughout Lake Anne Village, protected condos in Reston Town Center, and restored flooded lower levels across every Reston cluster. When your neighbor needs a recommendation, they call us—because we've already served your community.\`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Reston Homeowners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response to All Reston Clusters",
        description: "From our dispatch center, we reach Lake Anne, Hunters Woods, South Lakes, North Point, and Reston Town Center faster than any regional competitor. When your sump pump fails during a summer storm off Wiehle Avenue, we're already on Reston Parkway heading your way.",
        icon: "clock"
      },
      {
        title: "HOA & Reston Association Navigation",
        description: "We understand Reston's unique governance structure. Whether your cluster has specific vendor requirements, your condo association needs documentation, or the Reston Association needs notification for exterior work, we handle the coordination so you focus on your family.",
        icon: "document"
      },
      {
        title: "Insurance Billing Handled Directly",
        description: "Your local insurance agent knows us. We work directly with all major carriers, document everything for claims, and handle the paperwork so you focus on your family—not forms.",
        icon: "shield"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your North Point colonial or Lake Anne townhome, you need crews trained in advanced drying science, mold prevention, and restoration of all housing types.",
        icon: "certificate"
      },
      {
        title: "Lake & Groundwater Expertise",
        description: "Reston's lakes and natural areas are beautiful—until groundwater rises into your basement. We understand the water table challenges near Lake Anne, Lake Thoreau, and Lake Audubon, and the specialized drying these properties require.",
        icon: "water"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Reston Water Damage Experts",
    paragraph: \`Our Reston team lives and works in the community Robert E. Simon envisioned. We know that Reston Parkway traffic during rush hour can add 15 minutes to response times—which is why our crews are stationed throughout the Reston corridor, not just at a central warehouse.

When a Hunters Woods homeowner calls at 2 AM about a burst pipe, we don't dispatch from Manassas or Fredericksburg. Our trucks are already positioned to reach Sunrise Valley Drive, South Lakes Drive, and North Shore Drive within our 30-minute guarantee.

We've learned the unique challenges of Reston homes: the higher water tables near the four lakes, the cluster housing designs that require careful coordination with neighbors, the townhome associations with specific exterior requirements, and the aging infrastructure in original Lake Anne Village properties that can fail without warning.

This isn't just about drying water—it's about understanding the planned community where neighbors share walls, pathways, and cluster maintenance, and restoring properties with full respect for that interconnected design.\`,

    architectureNote: "Diverse housing stock: townhomes, cluster housing, single-family colonials, contemporary condos, and high-rise residences near Reston Town Center. Many properties feature walkout basements facing natural areas or lake views.",

    commonIssues: [
      "Basement flooding from lake-area groundwater—high water tables near Lake Anne, Lake Thoreau, and Lake Audubon create persistent moisture challenges",
      "Sump pump failures during summer storms—Reston's aggressive stormwater management still overwhelms pumps during heavy rainfall",
      "Townhome shared-wall water migration—water from one unit can travel through party walls to affect neighbors",
      "HOA exterior delays—waiting for association approval while interior water damage spreads",
      "Aging infrastructure in original clusters—Lake Anne Village and early Reston construction with 50+ year-old plumbing"
    ]
  },

  // Service Area Description
  serviceAreaDescription: \`Flood Doctor of Reston provides 24/7 water damage restoration throughout Reston and surrounding areas. Our primary service area includes all Reston clusters, Reston Town Center, and the Lake Anne to North Point corridor—all within our 30-minute rapid response zone. Secondary coverage extends to Herndon, Sterling, and Great Falls within 60 minutes.

From the high-rises near Wiehle-Reston East Metro to the original townhomes surrounding Lake Anne, we serve every corner of Reston's 20190, 20191, and 20194 ZIP codes.\`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Reston?",
    subtext: "Don't wait—water damage doubles every hour. Our crews are stationed throughout Reston for immediate response.",
    buttonText: "Call (703) 656-0107 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Reston Homeowners Say About Flood Doctor",

  // FAQ Section - 7 Reston-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Reston?",
      answer: "We guarantee 30-minute response to all Reston neighborhoods, including Lake Anne, Hunters Woods, South Lakes, North Point, and Reston Town Center. Our crews are stationed throughout the Reston corridor—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you work with Reston HOAs and the Reston Association?",
      answer: "Yes. We understand Reston's unique governance structure with cluster associations and the overarching Reston Association. We provide documentation for HOA requirements, coordinate any exterior work through proper channels, and communicate with property managers when needed."
    },
    {
      question: "What should I do if my basement floods near one of Reston's lakes?",
      answer: "First, ensure everyone's safety and turn off electricity to affected areas if safe to do so. Call us immediately at (703) 656-0107. Lake-adjacent properties often have higher groundwater and require specialized drying approaches. Our certified technicians will extract water, address groundwater intrusion, and prevent mold growth within the critical 24-48 hour window."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major insurance carriers and document everything for your claim. We know their adjusters and processes, which speeds up your claim approval."
    },
    {
      question: "Why do Reston basements experience more flooding?",
      answer: "Reston's integration with natural areas and four man-made lakes creates higher water tables than typical Northern Virginia developments. Combined with the stormwater management system that directs runoff through the community, even well-maintained homes can experience water intrusion during heavy rain or snowmelt."
    },
    {
      question: "I live in a townhome—can water damage affect my neighbors?",
      answer: "Yes. Water travels through party walls, shared foundations, and common areas. We assess the full scope, including potential impact on attached units. For cluster housing with shared walls, early detection and proper drying prevent damage from spreading to neighbors' properties."
    },
    {
      question: "Do you handle water damage in Reston Town Center condos?",
      answer: "Absolutely. We work with Reston Town Center property management and individual condo owners. High-rise water damage requires coordination with building management, access to mechanical rooms, and understanding of multi-unit implications. We handle all of this while restoring your unit."
    }
  ]
};

// Export helper function to merge with franchise data
export function getRestonHomepageData(franchise: FranchiseData) {
  return {
    ...restonHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
