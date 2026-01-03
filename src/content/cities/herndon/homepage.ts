// src/content/cities/herndon/homepage.ts
// Generated: January 3, 2026
// Phase 3: Herndon Homepage Content - 100% Unique

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

export const herndonHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Herndon's 24/7 Water Damage Restoration Experts",

  heroSubheadline: "30-minute emergency response to Downtown Herndon, Fox Mill, Worldgate & all Herndon neighborhoods. Protecting Northern Virginia's tech corridor since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water threatens your Herndon property, every minute counts. Whether you're in a Downtown Herndon townhome near the W&OD Trail, a Fox Mill colonial backing to mature trees, or a commercial space in the Worldgate Centre, Flood Doctor responds within 30 minutes—day or night.

Herndon's unique position in the Dulles data center corridor means we serve both homeowners and businesses with critical uptime requirements. From the historic properties near the Herndon Depot to the modern communities in Franklin Farm, we understand that water damage here affects both families and enterprises.

Our IICRC-certified crews know Elden Street's commercial strip, the winding residential roads of McNair, and the tight timelines both homeowners and facility managers expect. We've dried the basements of Fox Mill families, protected server rooms in Dulles-area facilities, and restored finished lower levels throughout Worldgate. When your neighbor or IT director needs a recommendation, they call us—because we've already served their street or building.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Herndon Property Owners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response to All Herndon Neighborhoods",
        description: "From our dispatch center, we reach Downtown Herndon, Fox Mill, Worldgate, Franklin Farm, and McNair faster than any regional competitor. When your sump pump fails during a summer thunderstorm or a pipe bursts in your commercial space, we're already on Route 606 heading your way.",
        icon: "clock"
      },
      {
        title: "Residential & Commercial Expertise",
        description: "Herndon's mix of homes and tech facilities requires versatile restoration expertise. We've protected wine cellars in Fox Mill estates, dried server rooms in Dulles-corridor data centers, and restored both residential basements and commercial spaces with equal precision.",
        icon: "building"
      },
      {
        title: "Insurance Billing Handled Directly",
        description: "Your insurance agent knows us. We work directly with all major carriers, document everything for claims, and handle the paperwork so you focus on your family or business—not forms.",
        icon: "shield"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your Franklin Farm home or Downtown Herndon commercial property, you need crews trained in advanced drying science, mold prevention, and high-value asset protection.",
        icon: "certificate"
      },
      {
        title: "Data Center Corridor Ready",
        description: "Herndon sits in America's data center capital. Our crews understand the critical nature of tech infrastructure—when water threatens your commercial facility near Dulles, we respond with the urgency your uptime requirements demand.",
        icon: "server"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Herndon Water Damage Experts",
    paragraph: `Our Herndon operations team has managed water emergencies throughout the town for over a decade. They know that Route 28 traffic during rush hour can add 30 minutes to response times—which is why our crews are stationed throughout the Herndon corridor, not just at a central warehouse.

When a Fox Mill homeowner calls at 2 AM about a burst pipe, we don't dispatch from Manassas or Fredericksburg. Our trucks are already positioned to reach Elden Street, Center Street, and Centreville Road within our 30-minute guarantee.

We've learned the unique challenges of Herndon properties: the clay soil that shifts foundations during wet seasons, the mature oak and maple roots that invade sewer lines in established neighborhoods like Downtown Herndon, and the commercial water systems that can release thousands of gallons when they fail. From the historic downtown near the Herndon Depot to the modern developments in Worldgate, we understand this community.

This isn't just about drying water—it's about understanding both the residential neighborhoods and the commercial facilities that make Herndon unique.`,

    architectureNote: "Mix of historic townhomes downtown, colonial-style homes in established neighborhoods (Fox Mill, McNair), modern townhome communities (Worldgate, Franklin Farm), and significant commercial/tech infrastructure near Dulles corridor.",

    commonIssues: [
      "Finished basement flooding—sump pump failures during summer storms can damage home theaters, recreation rooms, and home offices",
      "Commercial water system failures—sprinkler systems, HVAC, and plumbing in office buildings and data centers",
      "Tree root intrusions—mature oaks in Fox Mill and Downtown Herndon infiltrate aging sewer lines",
      "Foundation seepage from clay soil—Northern Virginia's expanding/contracting soil creates cracks in older foundations",
      "Townhome water migration—multi-level attached homes allow water to affect multiple units"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Herndon provides 24/7 water damage restoration throughout Herndon and surrounding areas. Our primary service area includes Herndon, Reston, Sterling, and the Dulles corridor—all within our 30-minute rapid response zone. Secondary coverage extends to Chantilly, Centreville, and Ashburn within 60 minutes.

From the historic properties near the Herndon Depot to the modern communities in Franklin Farm, we serve every corner of Herndon's 20170, 20171, and 20194 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Herndon?",
    subtext: "Don't wait—water damage doubles every hour. Our crews are stationed throughout Herndon for immediate response.",
    buttonText: "Call (703) 656-0108 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Herndon Property Owners Say About Flood Doctor",

  // FAQ Section - 7 Herndon-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Herndon?",
      answer: "We guarantee 30-minute response to all Herndon neighborhoods, including Downtown Herndon, Fox Mill, Worldgate, Franklin Farm, and McNair. Our crews are stationed throughout the Herndon corridor—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you handle commercial water damage in Herndon's tech corridor?",
      answer: "Absolutely. Herndon's position in the Dulles data center corridor means we regularly respond to commercial facilities with critical uptime requirements. We understand that water in a server room or office building demands immediate, expert response."
    },
    {
      question: "What should I do if my basement floods in Herndon?",
      answer: "First, ensure everyone's safety and turn off electricity to affected areas if safe to do so. Call us immediately at (703) 656-0108. Don't attempt to remove water yourself—improper extraction can push water into wall cavities. Our certified technicians will extract water, set up industrial drying equipment, and prevent mold growth within the critical 24-48 hour window."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major insurance carriers and document everything for your claim. We know their adjusters and processes, which speeds up your claim approval."
    },
    {
      question: "Why do Herndon homes experience basement flooding?",
      answer: "Herndon's clay soil expands when wet and contracts when dry, causing foundation shifts and cracks over time. Combined with high water tables and mature tree roots in neighborhoods like Fox Mill and Downtown Herndon, even well-maintained homes can experience water intrusion. We address both the immediate damage and help identify underlying causes."
    },
    {
      question: "Do you serve the downtown Herndon historic district?",
      answer: "Yes. Downtown Herndon's historic properties near the Herndon Depot and along Elden Street require specialized attention. We understand older construction—original plaster walls, aging plumbing, and historic details—and restore these properties with appropriate care."
    },
    {
      question: "What areas of Herndon do you serve?",
      answer: "We serve all of Herndon including Downtown Herndon, Fox Mill, Worldgate, Franklin Farm, McNair, Dulles Park, Chandon, and the Herndon Station area. We also respond to commercial properties throughout the Dulles corridor."
    }
  ]
};

// Export helper function to merge with franchise data
export function getHerndonHomepageData(franchise: FranchiseData) {
  return {
    ...herndonHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
