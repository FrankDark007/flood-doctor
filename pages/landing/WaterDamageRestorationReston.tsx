import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Damage Restoration',
  title: 'Water Damage Restoration Reston VA | 24/7 Service | Flood Doctor',
  metaDescription: 'Water damage restoration in Reston VA. IICRC certified, 60-minute response, direct insurance billing. Call (877) 497-0007 for emergency help.',
  h1: 'Water Damage Restoration Reston Virginia',
  heroSubtitle: 'Professional water damage restoration serving Reston communities. Fast, reliable, and insurance-friendly service.',
  location: 'Reston, VA',
  locationSlug: 'reston',
  primaryService: 'water-damage',
  heroTagline: "Reston's Premier Restoration Company",
  neighborhoods: [
    { name: 'Reston Town Center', count: '220+ projects', link: '/locations/reston/' },
    { name: 'North Reston', count: '190+ projects', link: '/locations/reston/' },
    { name: 'South Reston', count: '180+ projects', link: '/locations/reston/' },
    { name: 'Lake Anne', count: '140+ projects', link: '/locations/reston/' },
    { name: 'Hunters Woods', count: '130+ projects', link: '/locations/reston/' },
    { name: 'Tall Oaks', count: '110+ projects', link: '/locations/reston/' }
  ],
  faqs: [
    {
      question: 'Do you serve Reston condos and townhomes?',
      answer: 'Yes, we regularly work with Reston condo associations and townhome communities. We understand multi-unit challenges and coordinate with HOAs and property managers.'
    },
    {
      question: 'What causes water damage in Reston homes?',
      answer: 'Common causes include HVAC condensation issues, ice dams in winter, appliance failures, and plumbing leaks. Reston\'s wooded areas can also contribute to drainage issues.'
    },
    {
      question: 'How long does water damage restoration take in Reston?',
      answer: 'Most Reston water damage projects take 3-5 days for drying, with full restoration completed within 1-2 weeks depending on the extent of damage.'
    },
    {
      question: 'Are your Reston technicians certified?',
      answer: 'All our technicians are IICRC certified in water damage restoration. Many have additional certifications in mold remediation and structural drying.'
    }
  ]
};

const WaterDamageRestorationReston: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterDamageRestorationReston;
