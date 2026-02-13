import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Remediation',
  title: 'Water Remediation Services | Expert Solutions',
  metaDescription: 'Professional water remediation services in Northern Virginia. Complete water removal and structural drying. Call (877) 497-0007.',
  h1: 'Professional Water Remediation Services',
  heroSubtitle: 'Complete water remediation solutions. We eliminate water damage and restore your property to safe, dry condition.',
  primaryService: 'water-damage',
  heroTagline: 'Water Remediation Experts',
  faqs: [
    {
      question: 'What is water remediation?',
      answer: 'Water remediation is the process of removing water, drying affected areas, and addressing all water damage to return your property to a safe, pre-loss condition.'
    },
    {
      question: 'When do I need water remediation services?',
      answer: 'You need water remediation whenever water has penetrated building materials, been present for more than a few hours, or involves contaminated water sources.'
    },
    {
      question: 'What equipment is used for water remediation?',
      answer: 'We use professional-grade water extractors, industrial dehumidifiers, high-velocity air movers, thermal imaging cameras, and moisture meters for complete remediation.'
    },
    {
      question: 'How long does water remediation take?',
      answer: 'Initial water extraction takes hours. Complete structural drying typically requires 3-5 days. We monitor daily and adjust equipment to achieve optimal drying.'
    }
  ]
};

const WaterRemediation: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterRemediation;
