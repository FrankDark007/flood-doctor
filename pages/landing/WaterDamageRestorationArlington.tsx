import React from 'react';
import KeywordLandingTemplate, { KeywordLandingConfig } from './KeywordLandingTemplate';

const config: KeywordLandingConfig = {
  keyword: 'Water Damage Restoration',
  title: 'Water Damage Restoration in Arlington, VA',
  metaDescription: 'Professional water damage restoration in Arlington VA. 24/7 emergency response, IICRC certified technicians, direct insurance billing. Call (877) 497-0007.',
  h1: 'Water Damage Restoration Arlington Virginia',
  heroSubtitle: '24/7 emergency water damage restoration serving Arlington, VA. 60-minute response, IICRC certified technicians, and direct insurance billing.',
  location: 'Arlington, VA',
  locationSlug: 'arlington',
  primaryService: 'water-damage',
  heroTagline: "Arlington's Trusted Water Damage Experts",
  neighborhoods: [
    { name: 'Clarendon', count: '450+ projects', link: '/locations/arlington/' },
    { name: 'Ballston', count: '380+ projects', link: '/locations/arlington/' },
    { name: 'Pentagon City', count: '320+ projects', link: '/locations/arlington/' },
    { name: 'Rosslyn', count: '290+ projects', link: '/locations/arlington/' },
    { name: 'Shirlington', count: '270+ projects', link: '/locations/arlington/' },
    { name: 'Crystal City', count: '250+ projects', link: '/locations/arlington/' }
  ],
  faqs: [
    {
      question: 'How fast can you respond to water damage in Arlington?',
      answer: 'Our Arlington crews are strategically positioned to reach any location in Arlington within 60 minutes, 24/7. We have teams stationed near Clarendon, Pentagon City, and Rosslyn for rapid response.'
    },
    {
      question: 'Do you work with Arlington homeowner insurance?',
      answer: 'Yes, we work directly with all major insurance providers in the Arlington area including State Farm, Allstate, USAA, and more. We handle the claims process and bill your insurance directly.'
    },
    {
      question: 'What types of water damage do you handle in Arlington?',
      answer: 'We handle all types of water damage including burst pipes, basement flooding, sewage backups, appliance leaks, storm damage, and roof leaks. Our IICRC certified technicians are equipped for any water emergency.'
    },
    {
      question: 'How much does water damage restoration cost in Arlington?',
      answer: 'Costs vary based on the extent of damage. Most Arlington homeowner policies cover water damage restoration. We provide free estimates and work with your insurance to maximize coverage.'
    }
  ]
};

const WaterDamageRestorationArlington: React.FC = () => {
  return <KeywordLandingTemplate config={config} />;
};

export default WaterDamageRestorationArlington;
