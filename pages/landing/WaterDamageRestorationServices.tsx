import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Damage Restoration Services',
  title: 'Water Damage Restoration Services',
  metaDescription: 'Professional water damage restoration services in Northern Virginia. 60-minute response, IICRC certified, direct insurance billing. Call (877) 497-0007.',
  h1: 'Professional Water Damage Restoration Services',
  heroSubtitle: 'Complete water damage restoration services for homes and businesses. From emergency water extraction to full structural repairs.',
  primaryService: 'water-damage',
  heroTagline: 'Northern Virginia\'s Complete Restoration Solution',
  faqs: [
    {
      question: 'What water damage restoration services do you offer?',
      answer: 'We provide complete water damage restoration services including emergency water extraction, structural drying, mold prevention, content cleaning, and full reconstruction. We handle everything from start to finish.'
    },
    {
      question: 'How much do water damage restoration services cost?',
      answer: 'Costs vary based on the extent of damage, typically ranging from $1,500 for minor damage to $10,000+ for severe flooding. Most homeowner insurance covers water damage restoration services.'
    },
    {
      question: 'Are your water damage restoration services covered by insurance?',
      answer: 'Yes, most homeowner policies cover sudden water damage. We work directly with your insurance company, document all damage, and handle billing to maximize your coverage.'
    },
    {
      question: 'What makes your water damage restoration services different?',
      answer: 'We combine 60-minute response, IICRC certified technicians, advanced equipment, and direct insurance billing. We\'ve completed over 10,000 water damage restorations in Northern Virginia.'
    }
  ]
};

const WaterDamageRestorationServices: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterDamageRestorationServices;
