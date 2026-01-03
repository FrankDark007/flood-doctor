import { NeighborhoodPageContent } from '../../../../types/content';

export const dunnLoring: NeighborhoodPageContent = {
  city: 'Vienna',
  state: 'VA',
  neighborhood: 'Dunn Loring',

  hero: {
    title: 'Dunn Loring Water Damage Restoration',
    subtitle: 'Metro-Accessible Townhome Restoration Experts',
    description: '24/7 water damage restoration for Dunn Loring townhomes and condos. Expert shared-wall coordination, HOA compliance, and multi-unit restoration services.',
    primaryCTA: 'Get Emergency Help',
    primaryCTALink: 'tel:7036560105'
  },

  intro: {
    heading: 'Dunn Loring\'s Townhome Water Damage Specialists',
    paragraphs: [
      'Dunn Loring\'s convenient Metro access makes it a popular Vienna neighborhood for townhome communities. Water damage in these properties requires unique expertise—shared walls, HOA coordination, and multi-unit concerns demand specialized restoration approaches.',
      'From upstairs bathroom leaks affecting neighbors to washing machine failures in multi-level townhomes, our certified technicians understand townhome water damage challenges. We coordinate with HOAs, communicate with affected neighbors, and ensure restoration meets community standards.',
      'With rapid response throughout Dunn Loring and extensive townhome experience, we deliver comprehensive water damage solutions addressing both your property and community requirements.'
    ]
  },

  services: {
    heading: 'Townhome Water Damage Services',
    description: 'Specialized restoration for Dunn Loring\'s shared-wall properties.',
    servicesList: [
      {
        title: 'Multi-Unit Coordination',
        description: 'Expert handling when water damage affects multiple townhomes. We coordinate restoration across units, communicate with all affected homeowners, and ensure consistent quality throughout shared-wall properties.',
        features: [
          'Multi-unit damage assessment',
          'Neighbor coordination and communication',
          'Shared wall water extraction',
          'Consistent restoration across units',
          'HOA documentation compliance',
          'Multi-policy insurance coordination'
        ],
        icon: 'multi-unit'
      },
      {
        title: 'HOA Compliance & Documentation',
        description: 'Complete HOA coordination throughout restoration. We provide required documentation, meet community standards, communicate with property management, and ensure restoration complies with all association requirements.',
        features: [
          'HOA notification and updates',
          'Compliance with community standards',
          'Property management coordination',
          'Documentation for association records',
          'Meeting attendance when needed',
          'Community-appropriate scheduling'
        ],
        icon: 'hoa-coordination'
      }
    ]
  },

  faq: {
    heading: 'Dunn Loring Townhome FAQs',
    description: 'Common questions about townhome water damage.',
    questions: [
      {
        question: 'How do you handle water damage affecting multiple townhomes?',
        answer: 'We coordinate restoration across all affected units, communicate with neighbors and HOAs, extract water from shared walls, and ensure consistent restoration quality. Our experience with Dunn Loring townhome communities ensures smooth multi-unit coordination and compliance with association requirements.'
      },
      {
        question: 'Will you work with our HOA?',
        answer: 'Absolutely. HOA coordination is a core service for Dunn Loring properties. We provide required documentation, communicate with property management, attend meetings when needed, and ensure restoration meets all community standards and architectural requirements.'
      }
    ]
  },

  cta: {
    heading: 'Dunn Loring Townhome Water Damage?',
    subheading: 'Expert HOA Coordination',
    buttonText: 'Call (703) 656-0105',
    buttonLink: 'tel:7036560105',
    secondaryText: '24/7 Response for Metro-Area Communities'
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flood Doctor - Dunn Loring',
      telephone: '(703) 656-0105'
    },
    areaServed: 'Dunn Loring, Vienna, VA'
  }
};
