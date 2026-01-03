// src/content/cities/springfield/homepage.ts
// Generated: January 3, 2026
// Phase 3: Springfield Homepage Content - 100% Unique

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

export const springfieldHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Springfield's 24/7 Water Damage Restoration Experts",

  heroSubheadline: "30-minute emergency response to West Springfield, Franconia, Kingstowne & all Springfield neighborhoods. Serving military families and the I-95 corridor since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water threatens your Springfield home, every minute counts. Whether you're in a West Springfield split-level near Lake Accotink, a Kingstowne townhome, or a single-family home in Franconia backing to the Fairfax County Parkway, Flood Doctor responds within 30 minutes—day or night.

Springfield's diverse housing stock demands specialized care. From the 1970s-era homes in Newington to the newer construction in Kingstowne, each property presents unique restoration challenges. We've dried the basements of Fort Belvoir families dealing with sudden PCS orders, protected the townhomes of Franconia commuters, and restored single-family homes throughout Rolling Valley after summer storm damage.

Our IICRC-certified crews know the I-95 corridor, the Franconia-Springfield Metro area, and the neighborhoods that military families call home. We understand that a water emergency doesn't pause for deployment schedules or work travel. When your neighbor needs a recommendation, they call us—because we've already served their street.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Springfield Homeowners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response Throughout Springfield",
        description: "From our dispatch center, we reach West Springfield, Kingstowne, Franconia, Newington, and Rolling Valley faster than any regional competitor. When your sump pump fails during a summer thunderstorm, we're already on the Franconia-Springfield Parkway heading your way.",
        icon: "clock"
      },
      {
        title: "Military Family Specialists",
        description: "Springfield's proximity to Fort Belvoir means many homeowners are military families with unique needs. We work with deployment schedules, coordinate with property managers, handle insurance across carriers, and understand that water emergencies don't wait for your return from TDY.",
        icon: "shield"
      },
      {
        title: "I-95 Corridor Coverage",
        description: "Springfield sits at a critical intersection of I-95, I-395, and the Fairfax County Parkway. Our crews are positioned throughout this corridor to respond quickly whether you're in Kingstowne, near Springfield Town Center, or off Backlick Road.",
        icon: "map"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your West Springfield colonial or Newington rambler, you need crews trained in advanced drying science, mold prevention, and efficient restoration that respects your time and property.",
        icon: "certificate"
      },
      {
        title: "Insurance Billing Handled Directly",
        description: "We work directly with USAA, Navy Federal-affiliated insurers, and all major carriers. We document everything for claims, handle the paperwork, and coordinate with your insurance—so you focus on your family, not forms.",
        icon: "home"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Springfield Water Damage Experts",
    paragraph: `Marcus T., our Springfield Area Manager, has managed water emergencies throughout the I-95 corridor for over a decade. He knows that rush hour on I-95 can gridlock response times—which is why our crews are stationed throughout Springfield, Kingstowne, and Franconia, not just at a central warehouse.

When a West Springfield homeowner calls at 2 AM about a burst pipe, we don't dispatch from Manassas or Fredericksburg. Our trucks are already positioned to reach Backlick Road, Rolling Road, and the Kingstowne neighborhoods within our 30-minute guarantee.

We've learned the unique challenges of Springfield homes: the clay soil that shifts foundations in older Newington neighborhoods, the aging pipes in 1970s West Springfield construction, the lower-level flooding common in Rolling Valley split-levels, and the townhome HOA coordination required in Kingstowne. Many of our clients are military families stationed at Fort Belvoir—we understand PCS timelines, deployment schedules, and the urgency of resolving water damage before orders arrive.

This isn't just about drying water—it's about understanding the working families we serve and responding accordingly.`,

    architectureNote: "Mix of 1970s split-levels, colonials, and ramblers in established neighborhoods, plus newer townhomes and single-family construction in Kingstowne. Many properties with finished basements prone to flooding during summer storms.",

    commonIssues: [
      "Basement flooding in split-level homes—lower-level living spaces flood when sump pumps fail or foundation seepage occurs during storms",
      "Aging pipe failures in 1970s construction—original copper and galvanized lines in West Springfield and Newington deteriorate",
      "Townhome water damage in Kingstowne—shared walls mean water events can affect multiple units and require HOA coordination",
      "HVAC and appliance leaks—older systems and water heaters in established neighborhoods fail without warning",
      "Storm drainage overwhelm—heavy summer rains exceed capacity in lower-lying areas near Lake Accotink"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Springfield provides 24/7 water damage restoration throughout Springfield and surrounding areas. Our primary service area includes Springfield, West Springfield, Kingstowne, Franconia, and Newington—all within our 30-minute rapid response zone. Secondary coverage extends to Burke, Annandale, and the Fort Belvoir area within 60 minutes.

From the townhomes along Kingstowne Boulevard to the established neighborhoods near Lake Accotink, we serve every corner of Springfield's 22150, 22151, 22152, and 22153 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Springfield?",
    subtext: "Don't wait—water damage doubles every hour. Our crews are stationed throughout Springfield for immediate response.",
    buttonText: "Call (703) 656-0110 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Springfield Homeowners Say About Flood Doctor",

  // FAQ Section - 7 Springfield-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Springfield?",
      answer: "We guarantee 30-minute response to all Springfield neighborhoods, including West Springfield, Kingstowne, Franconia, Newington, and Rolling Valley. Our crews are stationed throughout the I-95 corridor—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you work with military families at Fort Belvoir?",
      answer: "Absolutely. Many Springfield homeowners are military families, and we understand the unique challenges: deployment schedules, PCS timelines, and the need for fast resolution. We work with USAA and military-affiliated insurers, coordinate with property managers if you're deployed, and handle everything efficiently."
    },
    {
      question: "What should I do if my basement floods in Springfield?",
      answer: "First, ensure everyone's safety and turn off electricity to affected areas if safe to do so. Call us immediately at (703) 656-0110. Don't attempt to remove water yourself—improper extraction can push water into wall cavities. Our certified technicians will extract water, set up industrial drying equipment, and prevent mold growth within the critical 24-48 hour window."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major carriers including USAA, Navy Federal-affiliated insurers, State Farm, and Allstate. We document everything for your claim and handle the paperwork. Many Springfield military families appreciate that we know the USAA process well."
    },
    {
      question: "Why do Springfield homes experience basement flooding?",
      answer: "Springfield's clay soil expands when wet and contracts when dry, causing foundation shifts and cracks over time. The area's many split-level homes have below-grade living spaces vulnerable to water intrusion. Add aging sump pumps in 1970s-era homes and heavy summer storms, and basement flooding becomes common. We address both the immediate damage and help identify underlying causes."
    },
    {
      question: "Do you handle water damage in Kingstowne townhomes?",
      answer: "Yes, and we understand the additional complexity. Townhome water damage often affects shared walls and may require HOA coordination. We communicate with property managers, document damage thoroughly for insurance, and work efficiently to minimize disruption to you and your neighbors."
    },
    {
      question: "What areas of Springfield do you serve?",
      answer: "We provide 30-minute response to all Springfield neighborhoods: West Springfield, Kingstowne, Franconia, Newington, Rolling Valley, and areas near Springfield Town Center, Lake Accotink, and the Franconia-Springfield Metro. We also serve nearby Burke, Annandale, and the Fort Belvoir area."
    }
  ]
};

// Export helper function to merge with franchise data
export function getSpringfieldHomepageData(franchise: FranchiseData) {
  return {
    ...springfieldHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
