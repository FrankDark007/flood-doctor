import { NeighborhoodPageContent } from '../../../../types/content';

export const wolftrap: NeighborhoodPageContent = {
  city: 'Vienna',
  state: 'VA',
  neighborhood: 'Wolf Trap',

  hero: {
    title: 'Wolf Trap Water Damage & Flood Restoration',
    subtitle: 'Expert Storm Damage Near Wolf Trap Creek',
    description: '24/7 water damage and flood restoration serving Wolf Trap area homes near the performing arts center. Specialized solutions for properties near Difficult Run and Wolf Trap Creek.',
    primaryCTA: 'Get Flood Help Now',
    primaryCTALink: 'tel:7036560105'
  },

  intro: {
    heading: 'Wolf Trap\'s Flood & Water Damage Specialists',
    paragraphs: [
      'The Wolf Trap area\'s proximity to Wolf Trap Creek and Difficult Run creates unique water damage challenges during storms. Flash flooding risks, wooded property drainage issues, and storm-related basement flooding require specialized expertise and rapid response.',
      'From emergency flood water extraction to storm damage restoration, our certified technicians understand Wolf Trap\'s specific flooding patterns and property characteristics. We provide comprehensive solutions protecting homes near the performing arts center and throughout this beautiful wooded community.',
      'With 24/7 emergency response and extensive experience handling flood damage and insurance claims, we guide Wolf Trap homeowners through complete water damage recovery.'
    ]
  },

  services: {
    heading: 'Wolf Trap Water Damage & Flood Services',
    description: 'Comprehensive solutions for storm-prone Wolf Trap properties.',
    servicesList: [
      {
        title: 'Emergency Flood Water Extraction',
        description: 'Rapid flood response for Wolf Trap area properties. We extract flood water from basements and living spaces, handle contaminated water safely, and begin structural drying immediately minimizing damage.',
        features: [
          'Emergency flood water extraction',
          'Contaminated water handling',
          'Storm damage rapid response',
          'Complete basement water removal',
          'All-level flood cleanup',
          'Insurance flood claim support'
        ],
        icon: 'flood-extraction'
      },
      {
        title: 'Storm Damage Restoration',
        description: 'Complete storm restoration for Wolf Trap homes. We address roof leaks, basement flooding, sump pump failures, and severe weather damage with comprehensive recovery services.',
        features: [
          'Roof leak water damage restoration',
          'Storm-damaged basement recovery',
          'Sump pump failure response',
          'Structural drying after storms',
          'Mold prevention treatment',
          'Complete reconstruction services'
        ],
        icon: 'storm-damage'
      }
    ]
  },

  faq: {
    heading: 'Wolf Trap Water Damage FAQs',
    description: 'Common questions about Wolf Trap area flooding.',
    questions: [
      {
        question: 'Are Wolf Trap properties at high flood risk?',
        answer: 'Properties near Wolf Trap Creek and Difficult Run face flash flood risks during severe storms. Low-lying areas and properties with drainage toward creeks experience higher flooding potential. We provide rapid emergency response for flood events and recommendations for flood prevention specific to Wolf Trap topography.'
      },
      {
        question: 'Does standard insurance cover flood damage?',
        answer: 'Standard homeowners insurance typically does NOT cover surface water flooding from storms—that requires separate flood insurance through NFIP or private carriers. Internal water events (burst pipes, sump pump failures) are usually covered. We work with both standard and flood insurance, documenting damage thoroughly for claims.'
      }
    ]
  },

  cta: {
    heading: 'Wolf Trap Flood Emergency?',
    subheading: 'Expert Storm & Flood Restoration',
    buttonText: 'Call (703) 656-0105',
    buttonLink: 'tel:7036560105',
    secondaryText: '24/7 Response Near Difficult Run'
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flood Doctor - Wolf Trap',
      telephone: '(703) 656-0105'
    },
    areaServed: 'Wolf Trap, Vienna, VA'
  }
};
