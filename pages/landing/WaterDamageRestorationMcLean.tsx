import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Damage Restoration',
  title: 'Water Damage Restoration McLean VA | Premium Service | Flood Doctor',
  metaDescription: 'Premium water damage restoration in McLean VA. Discrete, professional service for luxury homes. 24/7 response. Call (877) 497-0007.',
  h1: 'Water Damage Restoration McLean Virginia',
  heroSubtitle: 'Premium water damage restoration for McLean\'s finest homes. Discrete service, expert technicians, white-glove treatment.',
  location: 'McLean, VA',
  locationSlug: 'mclean',
  primaryService: 'water-damage',
  heroTagline: "McLean's Premium Restoration Service",
  neighborhoods: [
    { name: 'McLean', count: '320+ projects', link: '/locations/mclean/' },
    { name: 'Great Falls', count: '280+ projects', link: '/locations/mclean/' },
    { name: 'Langley', count: '180+ projects', link: '/locations/mclean/' },
    { name: 'Tysons', count: '240+ projects', link: '/locations/mclean/' },
    { name: 'Franklin Park', count: '140+ projects', link: '/locations/mclean/' },
    { name: 'Pimmit Hills', count: '120+ projects', link: '/locations/mclean/' }
  ],
  faqs: [
    {
      question: 'Do you specialize in luxury home restoration in McLean?',
      answer: 'Yes, we have extensive experience with McLean\'s luxury properties. We understand the care required for high-end finishes, custom millwork, and valuable furnishings.'
    },
    {
      question: 'How do you protect valuable items during McLean water damage restoration?',
      answer: 'We carefully document and protect all valuables, coordinate with art handlers when needed, and use specialized techniques for antiques and fine furnishings.'
    },
    {
      question: 'Is your service discrete for McLean properties?',
      answer: 'Absolutely. We use unmarked vehicles when requested, coordinate schedules to minimize disruption, and maintain strict confidentiality for high-profile clients.'
    },
    {
      question: 'Do you handle large McLean estates and properties?',
      answer: 'Yes, we\'ve restored many large McLean estates. We have the equipment and crew capacity to handle properties of any size efficiently.'
    }
  ]
};

const WaterDamageRestorationMcLean: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterDamageRestorationMcLean;
