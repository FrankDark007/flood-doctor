import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Flood Cleanup Services',
  title: 'Flood Cleanup Services | 24/7 Emergency',
  metaDescription: 'Professional flood cleanup services in Northern Virginia. Fast water extraction, contamination treatment. Call (877) 497-0007 for emergency help.',
  h1: 'Professional Flood Cleanup Services',
  heroSubtitle: 'Complete flood cleanup services for homes and businesses. From water extraction to final sanitization, we handle everything.',
  primaryService: 'flood',
  heroTagline: 'Complete Flood Cleanup Solutions',
  faqs: [
    {
      question: 'What do your flood cleanup services include?',
      answer: 'Our flood cleanup services include water extraction, debris removal, contamination treatment, structural drying, content cleaning, deodorization, and mold prevention.'
    },
    {
      question: 'Do you handle contaminated flood water?',
      answer: 'Yes, we\'re equipped for all water categories including contaminated flood water (Category 3). Our crews use protective equipment and follow strict protocols.'
    },
    {
      question: 'How much do flood cleanup services cost?',
      answer: 'Costs depend on the extent of flooding and contamination level. We provide free estimates and work with insurance to maximize your coverage for flood cleanup services.'
    },
    {
      question: 'How quickly can you provide flood cleanup services?',
      answer: 'We respond within 60 minutes for emergency flood cleanup. Our crews are available 24/7 and equipped to begin cleanup immediately upon arrival.'
    }
  ]
};

const FloodCleanupServices: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default FloodCleanupServices;
