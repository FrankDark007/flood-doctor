import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Damage Restoration',
  title: 'Water Damage Restoration Alexandria VA | Emergency Service | Flood Doctor',
  metaDescription: 'Water damage restoration in Alexandria VA. 24/7 emergency response, IICRC certified, direct insurance billing. Call (877) 497-0007 now.',
  h1: 'Water Damage Restoration Alexandria Virginia',
  heroSubtitle: 'Trusted water damage restoration for Alexandria homes and businesses. Fast response, expert technicians, insurance specialists.',
  location: 'Alexandria, VA',
  locationSlug: 'alexandria',
  primaryService: 'water-damage',
  heroTagline: "Alexandria's Trusted Restoration Experts",
  neighborhoods: [
    { name: 'Old Town', count: '420+ projects', link: '/locations/alexandria/' },
    { name: 'Del Ray', count: '350+ projects', link: '/locations/alexandria/' },
    { name: 'Kingstowne', count: '310+ projects', link: '/locations/alexandria/' },
    { name: 'Huntington', count: '280+ projects', link: '/locations/alexandria/' },
    { name: 'Belle Haven', count: '240+ projects', link: '/locations/alexandria/' },
    { name: 'Seminary Hill', count: '220+ projects', link: '/locations/alexandria/' }
  ],
  faqs: [
    {
      question: 'Do you serve all of Alexandria including Old Town?',
      answer: 'Yes, we serve all Alexandria neighborhoods including Old Town, Del Ray, Kingstowne, and the waterfront areas. We understand the unique challenges of historic properties.'
    },
    {
      question: 'How do you handle water damage in historic Alexandria homes?',
      answer: 'Our technicians are trained in historic preservation techniques. We use specialized equipment and methods to protect original materials while thoroughly addressing water damage.'
    },
    {
      question: 'What should I do while waiting for your Alexandria team?',
      answer: 'Turn off the water source if possible, move valuables to dry areas, and avoid using electrical appliances near water. Our team will guide you over the phone until we arrive.'
    },
    {
      question: 'Do you offer 24/7 emergency service in Alexandria?',
      answer: 'Yes, our emergency line is available 24/7/365. Alexandria residents can call anytime and expect a crew on-site within 60 minutes.'
    }
  ]
};

const WaterDamageRestorationAlexandria: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterDamageRestorationAlexandria;
