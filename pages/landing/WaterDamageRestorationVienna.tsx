import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Damage Restoration',
  title: 'Water Damage Restoration Vienna VA | Emergency Response',
  metaDescription: 'Professional water damage restoration in Vienna VA. 24/7 emergency service, certified technicians, insurance experts. Call (877) 497-0007.',
  h1: 'Water Damage Restoration Vienna Virginia',
  heroSubtitle: 'Expert water damage restoration for Vienna homes. Rapid emergency response, professional service, insurance claim specialists.',
  location: 'Vienna, VA',
  locationSlug: 'vienna',
  primaryService: 'water-damage',
  heroTagline: "Vienna's Preferred Restoration Company",
  neighborhoods: [
    { name: 'Vienna', count: '350+ projects', link: '/locations/vienna/' },
    { name: 'Oakton', count: '280+ projects', link: '/locations/vienna/' },
    { name: 'Dunn Loring', count: '180+ projects', link: '/locations/vienna/' },
    { name: 'Tysons Corner', count: '220+ projects', link: '/locations/vienna/' },
    { name: 'Wolf Trap', count: '140+ projects', link: '/locations/vienna/' },
    { name: 'Mosby Woods', count: '120+ projects', link: '/locations/vienna/' }
  ],
  faqs: [
    {
      question: 'How quickly can you respond to water damage in Vienna?',
      answer: 'Our Vienna-area crews typically arrive within 45-60 minutes. We maintain equipment and personnel in the Tysons/Vienna area for fast response.'
    },
    {
      question: 'Do you handle water damage in Vienna during events at Wolf Trap?',
      answer: 'Yes, we operate 24/7 regardless of local events. Summer storms during Wolf Trap season often cause water damage and we\'re always ready to respond.'
    },
    {
      question: 'What about Vienna\'s older downtown homes?',
      answer: 'We have extensive experience with Vienna\'s historic homes in the downtown area. We take extra care to preserve original features while addressing water damage.'
    },
    {
      question: 'Do you coordinate with Vienna Town regulations?',
      answer: 'Yes, we\'re familiar with Vienna Town requirements and coordinate any necessary permits or inspections as part of our restoration process.'
    }
  ]
};

const WaterDamageRestorationVienna: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterDamageRestorationVienna;
