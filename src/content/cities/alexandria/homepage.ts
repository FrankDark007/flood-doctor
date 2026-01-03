// src/content/cities/alexandria/homepage.ts
// Generated: January 3, 2026
// Alexandria Homepage Content - 100% Unique - Historic Preservation Focus

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

export const alexandriaHomepageContent: HomepageContent = {
  // Hero Section - Historic preservation + emergency positioning
  heroHeadline: "Alexandria's Historic Property Water Damage Specialists",

  heroSubheadline: "BAR-compliant restoration for Old Town, Del Ray & Rosemont. Protecting Alexandria's architectural heritage since 2005. 24/7 emergency response.",

  // Intro paragraph - 150-200 words, mentions 3+ neighborhoods and 2+ landmarks
  introParagraph: `Alexandria's historic properties deserve restoration experts who understand both water damage science and architectural preservation. When a burst pipe threatens your 1890s Old Town rowhouse or a sewer backup floods your Del Ray Craftsman bungalow, Flood Doctor provides the specialized response these irreplaceable structures demand.

Our IICRC-certified technicians navigate Alexandria's unique restoration landscape daily. We coordinate with the Board of Architectural Review for exterior work on properties within the historic district. We know that your Rosemont Colonial's original plaster walls require controlled drying techniques that prevent cracking. We understand that the cast iron drain lines in your Carlyle townhome are likely approaching the end of their 80-year lifespan.

From the cobblestone streets near King Street Metro to the waterfront properties along the Potomac, Alexandria homeowners trust us because we've already dried their neighbor's basement. When the combined sewer system backs up during a spring storm, when the high water table pushes moisture through your Belle Haven foundation, when decades-old pipes finally fail—we respond within 30 minutes to protect your piece of Alexandria's history.`,

  // Why Choose Us - Each point includes local reference
  whyChooseUs: {
    headline: "Why Alexandria Property Owners Choose Flood Doctor",
    points: [
      {
        title: "Historic District Restoration Expertise",
        description: "Old Town properties require specialized knowledge. Our crews understand original plaster walls, heart pine floors, and brick foundations dating to the 1800s. We dry these sensitive materials without causing the secondary damage that less experienced companies create.",
        icon: "landmark"
      },
      {
        title: "BAR Compliance Coordination",
        description: "The Board of Architectural Review governs exterior modifications in Alexandria's historic districts. When water damage requires visible repairs to your Old Town property, we document everything and coordinate with BAR requirements—preventing delays and compliance issues.",
        icon: "clipboard-check"
      },
      {
        title: "30-Minute Response Throughout Alexandria",
        description: "Our crews reach Old Town, Del Ray, Rosemont, Carlyle, and Kingstowne within 30 minutes. We know that Duke Street traffic changes everything during rush hour, so we position vehicles strategically throughout the city for guaranteed response times.",
        icon: "clock"
      },
      {
        title: "Older Infrastructure Specialists",
        description: "Alexandria's housing stock includes cast iron pipes, galvanized supply lines, clay sewer laterals, and combined sewer connections. When these systems fail—and they eventually do—we handle the Category 3 contaminated water that results, not just the clean water events.",
        icon: "wrench"
      },
      {
        title: "Insurance Documentation for Historic Properties",
        description: "Historic property claims require detailed documentation. We photograph original features, document material types, and provide the comprehensive reports that adjusters need to approve claims for authentic restoration—not just replacement with modern materials.",
        icon: "file-text"
      }
    ]
  },

  // Local Expertise Section - Heavy local references
  localExpertise: {
    headline: "Alexandria Water Damage Restoration Experts",
    paragraph: `Sarah M., our Alexandria Branch Manager, has lived in Del Ray for over a decade. She knows that the brick rowhouses on Lee Street have different water intrusion patterns than the Victorian properties on Queen Street. She understands that Rosemont's mature trees create root intrusion issues that newer neighborhoods don't face.

When an Old Town property owner calls about water in their basement, we don't send someone unfamiliar with Alexandria's historic construction methods. Our technicians have dried the original heart pine floors in townhomes near Market Square. They've extracted sewage from basements on South Fairfax Street after combined sewer overflows. They've protected irreplaceable original plaster in properties that predate the Civil War.

Alexandria's water damage challenges are unique. The high water table near the Potomac pushes groundwater into basements during wet seasons. The combined sewer system in Old Town can overflow during heavy rainfall. Cast iron drain lines installed when your property was built may be developing pinholes that create slow, hidden leaks behind walls. We've spent two decades learning these patterns and developing solutions specific to Alexandria's built environment.`,

    architectureNote: "Diverse architectural inventory: 1800s-1900s Federal and Georgian rowhouses in Old Town, early 1900s Craftsman bungalows in Del Ray, mid-century colonials in Rosemont, modern condos in Carlyle, and suburban townhomes in Kingstowne. Many properties contain original plaster, heart pine flooring, and cast iron plumbing.",

    commonIssues: [
      "Combined sewer backups in Old Town during heavy rainfall—Category 3 biohazard requiring specialized protocols",
      "Cast iron drain line failures in homes built before 1960—pinhole leaks create hidden water damage behind walls",
      "High water table basement flooding in Belle Haven and waterfront properties—persistent moisture issues",
      "Original plaster wall damage—improper drying causes cracking and separation from lath",
      "BAR compliance for visible repairs—exterior work in historic districts requires architectural review"
    ]
  },

  // Service Area Description
  serviceAreaDescription: `Flood Doctor of Alexandria provides 24/7 water damage restoration throughout Alexandria and surrounding areas. Our primary service area includes Old Town, Del Ray, Rosemont, Carlyle, and Eisenhower Valley—all within our 30-minute rapid response zone. Secondary coverage extends to Kingstowne, Mount Vernon, Belle Haven, Potomac Yard, and Huntington within 45 minutes.

From the historic streets near the Torpedo Factory to the suburban communities near Kingstowne Town Center, we serve every corner of Alexandria's 22301 through 22315 ZIP codes.`,

  // Emergency CTA
  emergencyCTA: {
    headline: "Water Damage in Your Alexandria Property?",
    subtext: "Historic properties suffer irreversible damage when water isn't addressed quickly. Our crews understand Alexandria's unique architecture and respond within 30 minutes—day or night.",
    buttonText: "Call (703) 656-0103 Now"
  },

  // Testimonial Section Intro
  localTestimonialIntro: "What Alexandria Property Owners Say About Our Restoration Work",

  // FAQ Section - 7 Alexandria-specific FAQs
  faqSection: [
    {
      question: "Do you understand Board of Architectural Review requirements for Old Town properties?",
      answer: "Yes. We work within Alexandria's historic district regularly and understand BAR requirements for visible repairs. When water damage affects exterior elements—doors, windows, siding, roofing—we document the original materials and coordinate with BAR guidelines. Our goal is restoration that maintains your property's historic character while meeting all compliance requirements."
    },
    {
      question: "How do you handle combined sewer backups in Old Town?",
      answer: "Combined sewer overflows are common in Old Town during heavy rain. This is Category 3 water—containing sewage and requiring biohazard protocols. We extract contaminated water, apply antimicrobial treatments, remove affected materials according to IICRC standards, and thoroughly dry the space. We also document everything for your insurance claim, as these events are typically covered."
    },
    {
      question: "Can you dry original plaster walls without damaging them?",
      answer: "Original plaster requires controlled drying to prevent cracking and separation from the lath. Aggressive, high-heat drying destroys historic plaster. We use lower-temperature dehumidification and strategic air movement that removes moisture gradually. This approach takes longer but preserves your irreplaceable original finishes."
    },
    {
      question: "My 1920s Del Ray bungalow has cast iron pipes. What should I know?",
      answer: "Cast iron drain lines typically last 75-100 years. Properties built in the 1920s are approaching or past that lifespan. We often discover existing pinhole leaks and internal corrosion when responding to water damage in these homes. After addressing your immediate damage, we recommend having a plumber camera-inspect your lines to identify problems before they cause larger failures."
    },
    {
      question: "How quickly can you respond to water damage in Alexandria?",
      answer: "We guarantee 30-minute response throughout Alexandria—Old Town, Del Ray, Rosemont, Carlyle, and surrounding neighborhoods. Our crews are positioned throughout the city and know the fastest routes regardless of traffic conditions. Call (703) 656-0103 any time, day or night."
    },
    {
      question: "What makes Alexandria water damage restoration different from other areas?",
      answer: "Alexandria's historic properties, older infrastructure, combined sewer systems, and high water table create unique challenges. A water damage company unfamiliar with these conditions may cause secondary damage to irreplaceable features. We've specialized in Alexandria for nearly two decades—understanding original plaster, heart pine floors, brick foundations, and the specific ways water behaves in these structures."
    },
    {
      question: "Do you work directly with insurance companies for historic property claims?",
      answer: "Yes. Historic property claims require detailed documentation to ensure you receive coverage for authentic restoration—not just replacement with modern materials. We photograph original features, document material types, and provide comprehensive reports that support claims for appropriate restoration. We bill insurance directly and handle the paperwork."
    }
  ]
};

// Export helper function to merge with franchise data
export function getAlexandriaHomepageData(franchise: FranchiseData) {
  return {
    ...alexandriaHomepageContent,
    franchise,
    phone: franchise.phone,
    serviceArea: franchise.serviceArea,
    manager: franchise.manager,
    emergencyContacts: franchise.emergencyContacts
  };
}
