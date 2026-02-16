import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Emergency Water Damage Restoration',
  title: '24/7 Emergency Water Damage Restoration',
  metaDescription: '24/7 emergency water damage restoration in Northern Virginia. 60-minute guaranteed response. IICRC certified. Call (877) 497-0007 now.',
  h1: '24/7 Emergency Water Damage Restoration',
  heroSubtitle: 'When water damage strikes, every minute counts. Our emergency teams respond in 60 minutes or less, day or night.',
  primaryService: 'emergency',
  heroTagline: '60-Minute Emergency Response Guaranteed',
  faqs: [
    {
      question: 'How fast is your emergency water damage response?',
      answer: 'We guarantee 60-minute response anywhere in Northern Virginia. Our crews are strategically positioned throughout the region for rapid emergency deployment.'
    },
    {
      question: 'Are you available 24/7 for water damage emergencies?',
      answer: 'Yes, our emergency line is staffed 24 hours a day, 7 days a week, 365 days a year. We respond to water damage emergencies at any hour.'
    },
    {
      question: 'What should I do while waiting for emergency water damage help?',
      answer: 'Turn off water at the source if safe, move to dry areas, shut off electricity in affected areas, and avoid using electrical appliances near water. We\'ll guide you by phone.'
    },
    {
      question: 'Does emergency service cost extra?',
      answer: 'No, we don\'t charge extra for nights, weekends, or holidays. Emergency water damage restoration is our core service—we\'re always ready to respond.'
    }
  ]
};

const EmergencyWaterDamageRestoration: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default EmergencyWaterDamageRestoration;
