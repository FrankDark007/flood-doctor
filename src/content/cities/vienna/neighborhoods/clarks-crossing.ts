import { NeighborhoodPageContent } from '../../../../types/content';

export const clarksCrossing: NeighborhoodPageContent = {
  city: 'Vienna',
  state: 'VA',
  neighborhood: 'Clarks Crossing',

  hero: {
    title: 'Clarks Crossing Water Damage Restoration',
    subtitle: 'Established Neighborhood Restoration Experts',
    description: '24/7 water damage restoration for Clarks Crossing\'s 1960s-70s colonials. Expert solutions for basement seepage, aging plumbing, and foundation water issues common in established Vienna neighborhoods.',
    primaryCTA: 'Get Emergency Help',
    primaryCTALink: 'tel:7036560105'
  },

  intro: {
    heading: 'Clarks Crossing Water Damage Specialists',
    paragraphs: [
      'Clarks Crossing represents Vienna\'s established family neighborhoods, featuring well-maintained 1960s-70s colonials on mature lots. These homes share common water damage challenges—basement foundation seepage, aging plumbing systems, and water intrusion issues requiring specialized restoration expertise.',
      'From chronic basement moisture to burst galvanized pipes, our certified technicians understand Clarks Crossing property characteristics. We deliver comprehensive water damage solutions addressing both immediate damage and underlying causes common to Vienna\'s established neighborhoods.',
      'With rapid response throughout Clarks Crossing and extensive experience with older Vienna colonials, we provide restoration services protecting your family home investment.'
    ]
  },

  services: {
    heading: 'Clarks Crossing Water Damage Services',
    description: 'Specialized solutions for established neighborhood challenges.',
    servicesList: [
      {
        title: 'Basement Foundation Seepage',
        description: 'Expert basement water removal for foundation seepage common in Clarks Crossing colonials. We extract water, perform complete structural drying, and provide drainage improvement recommendations.',
        features: [
          'Emergency basement water extraction',
          'Foundation seepage source identification',
          'Complete structural drying',
          'Mold prevention protocols',
          'Drainage assessment',
          'Waterproofing coordination referrals'
        ],
        icon: 'basement-flooding'
      },
      {
        title: 'Aging Plumbing Restoration',
        description: 'Complete restoration after galvanized pipe failures and plumbing issues. We handle burst pipes, supply line failures, and hot water heater disasters common in established Clarks Crossing homes.',
        features: [
          'Emergency pipe burst response',
          'Complete water extraction',
          'Wall cavity drying',
          'Hardwood floor protection',
          'Plaster wall preservation',
          'Plumbing upgrade recommendations'
        ],
        icon: 'plumbing-restoration'
      }
    ]
  },

  faq: {
    heading: 'Clarks Crossing Water Damage FAQs',
    description: 'Common questions from Clarks Crossing homeowners.',
    questions: [
      {
        question: 'Why does my Clarks Crossing basement flood during heavy rain?',
        answer: 'Basement flooding in Clarks Crossing colonials typically results from foundation seepage due to hydrostatic pressure, inadequate exterior drainage, or sump pump issues. Older foundations lack modern waterproofing standards. We extract water immediately, identify the source, and provide recommendations for preventing future flooding.'
      },
      {
        question: 'How do you handle water damage from old galvanized pipes?',
        answer: 'Galvanized pipes in Clarks Crossing homes often reach end of service life after 50-60 years. When they burst, we shut off water immediately, extract throughout affected areas, dry wall cavities preventing mold, and coordinate with plumbers for repairs. We protect hardwood floors and plaster walls throughout restoration.'
      }
    ]
  },

  cta: {
    heading: 'Clarks Crossing Water Damage?',
    subheading: 'Established Neighborhood Expertise',
    buttonText: 'Call (703) 656-0105',
    buttonLink: 'tel:7036560105',
    secondaryText: '24/7 Response for Vienna Families'
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flood Doctor - Clarks Crossing',
      telephone: '(703) 656-0105'
    },
    areaServed: 'Clarks Crossing, Vienna, VA'
  }
};
