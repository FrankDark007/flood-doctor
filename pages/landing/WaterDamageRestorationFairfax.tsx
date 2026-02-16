import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Damage Restoration',
  title: 'Water Damage Restoration in Fairfax, VA',
  metaDescription: 'Expert water damage restoration in Fairfax VA. IICRC certified, 60-minute response, direct insurance billing. Call (877) 497-0007 for emergency service.',
  h1: 'Water Damage Restoration Fairfax Virginia',
  heroSubtitle: 'Professional water damage restoration serving Fairfax County. Fast response, certified technicians, and hassle-free insurance claims.',
  location: 'Fairfax, VA',
  locationSlug: 'fairfax',
  primaryService: 'water-damage',
  heroTagline: "Fairfax County's #1 Water Damage Company",
  neighborhoods: [
    { name: 'Fairfax City', count: '580+ projects', link: '/locations/fairfax/' },
    { name: 'Burke', count: '420+ projects', link: '/locations/fairfax/' },
    { name: 'Oakton', count: '350+ projects', link: '/locations/fairfax/' },
    { name: 'Centreville', count: '390+ projects', link: '/locations/fairfax/' },
    { name: 'Chantilly', count: '310+ projects', link: '/locations/fairfax/' },
    { name: 'Fairfax Station', count: '280+ projects', link: '/locations/fairfax/' }
  ],
  faqs: [
    {
      question: 'How quickly can you arrive for water damage in Fairfax?',
      answer: 'We guarantee 60-minute response anywhere in Fairfax County. Our crews are stationed throughout the area for rapid deployment to any water emergency.'
    },
    {
      question: 'Are you licensed for water damage restoration in Fairfax County?',
      answer: 'Yes, we are fully licensed, bonded, and insured for restoration work in Fairfax County. All technicians are IICRC certified with ongoing training.'
    },
    {
      question: 'What causes most water damage in Fairfax homes?',
      answer: 'Common causes include burst pipes (especially in winter), water heater failures, washing machine leaks, and basement flooding during heavy rain. We handle all types of water emergencies.'
    },
    {
      question: 'Will my Fairfax homeowner insurance cover water damage?',
      answer: 'Most Fairfax homeowner policies cover sudden water damage like burst pipes and appliance failures. We work directly with your insurance to maximize your claim coverage.'
    }
  ]
};

const WaterDamageRestorationFairfax: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterDamageRestorationFairfax;
