import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Flood Damage Cleanup',
  title: 'Flood Damage Cleanup | 24/7 Emergency',
  metaDescription: 'Emergency flood damage cleanup in Northern Virginia. Fast water extraction, contamination treatment, and drying. Call (877) 497-0007 now.',
  h1: 'Emergency Flood Damage Cleanup Services',
  heroSubtitle: 'Fast flood damage cleanup when you need it most. We extract water, treat contamination, and dry your property safely.',
  primaryService: 'flood',
  heroTagline: 'Fast Flood Cleanup When It Matters Most',
  faqs: [
    {
      question: 'How quickly can you start flood damage cleanup?',
      answer: 'Our emergency crews arrive within 60 minutes and begin water extraction immediately. Speed is critical with flood damage to prevent contamination spread and mold growth.'
    },
    {
      question: 'Is flood water dangerous during cleanup?',
      answer: 'Yes, flood water often contains sewage, chemicals, and bacteria. Our crews wear protective equipment and follow strict protocols to handle contaminated flood water safely.'
    },
    {
      question: 'What happens during flood damage cleanup?',
      answer: 'We extract all standing water, remove contaminated materials, apply antimicrobial treatments, set up industrial drying equipment, and monitor moisture until fully dry.'
    },
    {
      question: 'Can I stay in my home during flood damage cleanup?',
      answer: 'It depends on the extent of damage and contamination. We\'ll assess safety and advise. If you need to relocate temporarily, we can help coordinate with your insurance.'
    }
  ]
};

const FloodDamageCleanup: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default FloodDamageCleanup;
