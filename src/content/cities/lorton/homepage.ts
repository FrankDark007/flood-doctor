// src/content/cities/lorton/homepage.ts
// Generated: January 3, 2026
// Phase 3: Lorton Homepage Content - 100% Unique

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

export const lortonHomepageContent: HomepageContent = {
  // Hero Section - Must include city name + emergency positioning
  heroHeadline: "Lorton's 24/7 Water Damage Restoration Experts",

  heroSubheadline: "30-minute emergency response to Laurel Hill, Mason Neck, Occoquan & all Lorton neighborhoods. Protecting South Fairfax County's waterfront community since 2005.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `When water threatens your Lorton home, every minute counts. Whether you're in a Laurel Hill colonial near the former prison site, a waterfront property on Mason Neck overlooking the Potomac, or a townhome in the growing South County corridor, Flood Doctor responds within 30 minutes—day or night.

Lorton's homes face unique water challenges. The Occoquan River watershed creates higher flood risk during storms. Laurel Hill's newer construction on the redeveloped Lorton Reformatory land requires understanding of modern building systems. Mason Neck's waterfront properties deal with tidal influences and high water tables that most restoration companies don't comprehend.

Our IICRC-certified crews know the Route 1 corridor, the winding roads of Mason Neck, and the rapid growth that's transformed Lorton from rural Fairfax to a thriving suburban community. We've dried the basements of Laurel Hill families, protected waterfront investments along Gunston Cove, and restored finished lower levels throughout South County. When your neighbor needs a recommendation, they call us—because we've already served their street.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Lorton Homeowners Trust Flood Doctor",
    points: [
      {
        title: "30-Minute Response to All Lorton Neighborhoods",
        description: "From our dispatch center, we reach Laurel Hill, Mason Neck, Occoquan, South County, and Gunston faster than any regional competitor. When your sump pump fails during a summer thunderstorm, we're already heading down Lorton Road your way.",
        icon: "clock"
      },
      {
        title: "Waterfront Property Specialists",
        description: "Lorton's proximity to the Occoquan River and Potomac creates unique restoration challenges. We understand tidal influences on Mason Neck, high water tables near Gunston Cove, and the flood patterns that affect waterfront properties throughout the area.",
        icon: "home"
      },
      {
        title: "Insurance Billing Handled Directly",
        description: "Your local insurance agent knows us. We work directly with all major carriers, document everything for claims, and handle the paperwork so you focus on your family—not forms.",
        icon: "shield"
      },
      {
        title: "IICRC Master Certification",
        description: "Our technicians hold the industry's highest certifications. When protecting your Laurel Hill home or Mason Neck waterfront property, you need crews trained in advanced drying science, mold prevention, and structural restoration.",
        icon: "certificate"
      },
      {
        title: "New Construction & Historic Property Expertise",
        description: "Lorton spans new Laurel Hill developments and established neighborhoods near historic Occoquan. Whether your home is five years old or fifty, our crews understand the construction methods and materials that affect restoration approach.",
        icon: "tools"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Your Lorton Water Damage Experts",
    paragraph: `Our Lorton-area crews know the community intimately. They understand that Laurel Hill's rapid development created infrastructure challenges during heavy storms. They know Mason Neck's waterfront properties face different risks than inland Lorton homes. They recognize that the Occoquan River watershed affects flood patterns throughout the area.

When a Laurel Hill homeowner calls at 2 AM about a burst pipe, we don't dispatch from Fairfax or Alexandria. Our trucks are already positioned to reach Lorton Road, Route 1 corridor, and Mason Neck within our 30-minute guarantee.

We've learned the unique challenges of Lorton properties: the high water tables near Occoquan and Gunston Cove that cause persistent basement moisture, the newer construction in Laurel Hill that requires understanding of modern building systems, and the storm drainage challenges in South County that overwhelm during heavy rainfall.

This isn't just about drying water—it's about understanding Lorton's waterfront community and the homes we serve.`,

    architectureNote: "Mix of newer construction (Laurel Hill development 2005-present), established single-family homes, townhome communities, and waterfront properties with unique moisture challenges from Potomac and Occoquan River proximity.",

    commonIssues: [
      "Basement flooding in low-lying areas—Occoquan River watershed properties face higher flood risk during storms",
      "Sump pump failures in Laurel Hill—newer homes with unproven drainage systems can be overwhelmed",
      "Waterfront property moisture—Mason Neck and Gunston Cove homes deal with high water tables and tidal influence",
      "Storm drainage overwhelm—South County's rapid development strains infrastructure during heavy rainfall",
      "HVAC and appliance leaks—modern systems in newer construction create hidden water sources"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Lorton provides 24/7 water damage restoration throughout Lorton and surrounding areas. Our primary service area includes Lorton, Laurel Hill, Mason Neck, Occoquan, and South County—all within our 30-minute rapid response zone. Secondary coverage extends to Woodbridge, Springfield, and Fort Belvoir within 60 minutes.

From the waterfront properties along Gunston Cove to the family neighborhoods near Lorton Station, we serve every corner of Lorton's 22079 ZIP code.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Emergency in Lorton?",
    subtext: "Don't wait—water damage doubles every hour. Our crews are stationed throughout South Fairfax County for immediate response.",
    buttonText: "Call (703) 656-0113 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Lorton Homeowners Say About Flood Doctor",

  // FAQ Section - 7 Lorton-specific FAQs
  faqSection: [
    {
      question: "How quickly can you respond to a water emergency in Lorton?",
      answer: "We guarantee 30-minute response to all Lorton neighborhoods, including Laurel Hill, Mason Neck, Occoquan, South County, and Gunston. Our crews are stationed throughout South Fairfax County—not at a distant warehouse—so we're already nearby when you call."
    },
    {
      question: "Do you have experience with Lorton's newer Laurel Hill homes?",
      answer: "Absolutely. We've served Laurel Hill since the development began on the former Lorton Reformatory site. We understand the modern construction methods, newer building systems, and specific drainage challenges these homes face. Our equipment and expertise match both new and established Lorton properties."
    },
    {
      question: "What should I do if my basement floods in Lorton?",
      answer: "First, ensure everyone's safety and turn off electricity to affected areas if safe to do so. Call us immediately at (703) 656-0113. Don't attempt to remove water yourself—improper extraction can push water into wall cavities. Our certified technicians will extract water, set up industrial drying equipment, and prevent mold growth within the critical 24-48 hour window."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer: "Yes. We handle direct billing with all major insurance carriers and document everything for your claim. We know local adjusters and processes, which speeds up your claim approval."
    },
    {
      question: "Why do Lorton homes experience flooding more than other areas?",
      answer: "Lorton's location within the Occoquan River watershed creates higher flood risk during storms. Properties near Mason Neck and Gunston Cove face high water tables and tidal influences. Laurel Hill's newer infrastructure can be overwhelmed during exceptional rainfall. We address both the immediate damage and help identify underlying causes."
    },
    {
      question: "Can you help with waterfront property water damage?",
      answer: "Waterfront property restoration is a specialty for Lorton's Mason Neck and Gunston Cove areas. We understand the unique challenges of high water tables, tidal influence, and persistent moisture that waterfront homeowners face. Our crews are trained in handling these specific conditions."
    },
    {
      question: "Do you serve the Occoquan area as well?",
      answer: "Yes. Historic Occoquan and surrounding areas are within our primary service zone. We understand the older construction in downtown Occoquan and the mixed housing stock throughout the watershed. Whether you're in a historic building or newer construction, we respond within 30 minutes."
    }
  ]
};

// Export helper function to merge with franchise data
export function getLortonHomepageData(franchise: FranchiseData) {
  return {
    ...lortonHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
