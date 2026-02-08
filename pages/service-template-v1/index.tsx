
import React from 'react';
import { ServiceHero } from './ServiceHero';
import { ServiceFeatures } from './ServiceFeatures';
import { WhyChooseUs } from './WhyChooseUs';
import { GettingStarted } from './GettingStarted';
import { RelatedServices } from './RelatedServices';
import { ServiceFAQ } from './ServiceFAQ';
import { ServicePageContent } from './types';

// Sample content for Water Damage Restoration service
const waterDamageContent: ServicePageContent = {
  hero: {
    headline: 'Water Damage Restoration',
    description: 'Fast, professional water damage restoration for Northern Virginia homes and businesses. IICRC-certified technicians respond 24/7 to minimize damage and restore your property.',
    ctaText: 'Get Emergency Help',
    ctaHref: '/contact',
    phoneNumber: '(703) 656-3363'
  },
  featureTabs: [
    {
      id: 'assessment',
      title: 'Assessment',
      headline: 'Comprehensive damage assessment',
      description: 'Our certified technicians use advanced thermal imaging and moisture detection equipment to map the full extent of water intrusion. We document everything for your insurance claim and create a detailed restoration plan specific to your property.',
      image: '/images/process-tiles/process-04-moisture-mapping - Edited.png'
    },
    {
      id: 'extraction',
      title: 'Extraction',
      headline: 'Industrial water extraction',
      description: 'Using truck-mounted extraction units capable of removing thousands of gallons per hour, we quickly eliminate standing water from your property. Fast extraction is critical to preventing secondary damage and mold growth within the crucial 24-48 hour window.',
      image: '/images/process-tiles/process-05-water-extraction - Edited.png'
    },
    {
      id: 'drying',
      title: 'Drying',
      headline: 'Monitored structural drying',
      description: 'We deploy LGR dehumidifiers and high-velocity air movers strategically placed to optimize drying efficiency. Daily moisture readings ensure we achieve dry standard per IICRC S500 guidelines, typically within 3-5 days depending on severity.',
      image: '/images/process-tiles/process-14-structural-drying - Edited.png'
    },
    {
      id: 'restoration',
      title: 'Restoration',
      headline: 'Complete property restoration',
      description: 'From minor repairs to full reconstruction, our team handles drywall replacement, painting, flooring installation, and finish work. We coordinate directly with your insurance adjuster to streamline the claims process and restore your property to pre-loss condition.',
      image: '/images/process-tiles/process-33-restoration-complete-exterior - Edited.png'
    }
  ],
  whyChooseHeadline: 'Why choose Flood Doctor for water damage restoration?',
  whyChooseItems: [
    { text: '60-minute emergency response throughout Northern Virginia and Washington DC' },
    { text: 'IICRC-certified technicians with advanced water damage restoration training' },
    { text: 'Direct insurance billing - we work with all major carriers' },
    { text: 'Advanced moisture detection and thermal imaging equipment' },
    { text: '24/7 emergency service with live phone support, never an answering service' }
  ],
  gettingStarted: {
    headline: 'Get started with water damage restoration',
    description: 'We know that dealing with water damage can be overwhelming. Follow these simple steps to begin the restoration process.',
    ctaText: 'Get Started',
    ctaHref: '/contact',
    steps: [
      {
        number: 1,
        title: 'Call for emergency response',
        description: 'Contact our 24/7 emergency line. Our team will dispatch a certified technician to your location within 60 minutes to assess the damage.'
      },
      {
        number: 2,
        title: 'Damage assessment & plan',
        description: 'Our IICRC-certified technicians will inspect your property, document the damage for insurance, and create a detailed restoration plan.'
      },
      {
        number: 3,
        title: 'Restoration begins',
        description: 'We extract water, dry your property to industry standards, and complete any necessary repairs to restore your home to pre-loss condition.'
      }
    ]
  },
  relatedServices: [
    {
      title: 'Mold Remediation',
      description: 'Professional mold removal and remediation services following water damage to prevent health hazards.',
      href: '/services/mold-remediation'
    },
    {
      title: 'Basement Flooding',
      description: 'Specialized basement water extraction and drying services for flooded basements and below-grade spaces.',
      href: '/services/basement-flooding'
    },
    {
      title: 'Structural Drying',
      description: 'Advanced drying techniques for walls, floors, and structural components affected by water intrusion.',
      href: '/services/structural-drying'
    }
  ],
  faqs: [
    {
      question: 'How quickly should I address water damage?',
      answer: 'Water damage should be addressed within 24-48 hours to prevent mold growth and secondary damage. Mold can begin developing within 24 hours in warm, humid conditions. The longer water sits, the more damage it causes to building materials, and the more costly the restoration becomes. Call us immediately for emergency response.'
    },
    {
      question: 'Does my homeowner\'s insurance cover water damage restoration?',
      answer: 'Most homeowner\'s insurance policies cover sudden and accidental water damage, such as burst pipes, appliance failures, and storm damage. However, damage from gradual leaks or flooding typically requires separate flood insurance. We work directly with all major insurance carriers and can help you understand your coverage during our initial assessment.'
    },
    {
      question: 'How long does water damage restoration take?',
      answer: 'The restoration timeline depends on the extent of damage. Minor water damage may be dried within 3-5 days, while severe flooding or extensive structural damage can take 1-2 weeks or longer. Our team provides a detailed timeline during the initial assessment and keeps you updated throughout the process with daily progress reports.'
    },
    {
      question: 'Can I stay in my home during water damage restoration?',
      answer: 'In many cases, you can remain in your home during restoration, especially if the damage is limited to one area. However, for extensive damage, sewage backups, or when electrical systems are affected, temporary relocation may be necessary for safety. We\'ll advise you on the best course of action based on your specific situation.'
    },
    {
      question: 'What equipment do you use for water damage restoration?',
      answer: 'We use professional-grade equipment including truck-mounted water extractors, LGR (Low Grain Refrigerant) dehumidifiers, high-velocity air movers, HEPA air scrubbers, thermal imaging cameras, and moisture meters. This commercial equipment is far more effective than consumer-grade alternatives and ensures thorough drying to prevent future problems.'
    },
    {
      question: 'Do you provide free estimates for water damage restoration?',
      answer: 'Yes, we provide free on-site assessments for water damage restoration. Our certified technicians will inspect the damage, explain the restoration process, provide a detailed scope of work, and give you a written estimate. For insurance claims, we also provide complete documentation including photos and moisture readings.'
    }
  ]
};

const ServicePageTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero content={waterDamageContent.hero} />
      <ServiceFeatures tabs={waterDamageContent.featureTabs} />
      <WhyChooseUs
        headline={waterDamageContent.whyChooseHeadline}
        items={waterDamageContent.whyChooseItems}
      />
      <GettingStarted
        headline={waterDamageContent.gettingStarted.headline}
        description={waterDamageContent.gettingStarted.description}
        ctaText={waterDamageContent.gettingStarted.ctaText}
        ctaHref={waterDamageContent.gettingStarted.ctaHref}
        steps={waterDamageContent.gettingStarted.steps}
      />
      <RelatedServices services={waterDamageContent.relatedServices} />
      <ServiceFAQ faqs={waterDamageContent.faqs} />
    </div>
  );
};

export default ServicePageTemplate;
