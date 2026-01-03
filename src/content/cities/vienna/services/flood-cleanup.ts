import { ServicePageContent } from '../../../../types/content';

export const viennaFloodCleanup: ServicePageContent = {
  city: 'Vienna',
  state: 'VA',
  serviceType: 'flood-cleanup',
  
  hero: {
    title: 'Vienna Flood Cleanup & Storm Restoration',
    subtitle: 'Expert Storm Damage Recovery Near Difficult Run',
    description: '24/7 flood cleanup for Vienna properties affected by storms and flash flooding. Comprehensive restoration for Wolf Trap area homes, Difficult Run watershed properties, and sump pump failures throughout Vienna.',
    primaryCTA: 'Get Storm Help Now',
    primaryCTALink: 'tel:7036560105',
    secondaryCTA: 'Learn About Flood Services',
    secondaryCTALink: '#services'
  },
  
  intro: {
    heading: 'Vienna Storm & Flood Restoration Experts',
    paragraphs: [
      'Vienna\'s location near Difficult Run Creek and Wolf Trap Stream creates flash flood risks during severe storms. Properties in low-lying areas face basement flooding when sump pumps fail or storm drainage becomes overwhelmed—requiring immediate professional response.',
      'From rapid flood water extraction to complete structural restoration, our certified teams deliver comprehensive storm damage solutions protecting Vienna homes. We understand local flood patterns and provide restoration services specifically addressing Vienna\'s unique drainage challenges.',
      'With 24/7 emergency response throughout Vienna and experience handling insurance flood claims, we guide homeowners through every step of storm recovery—from initial water removal to final reconstruction and flood prevention recommendations.'
    ]
  },
  
  services: {
    heading: 'Complete Storm & Flood Restoration Services',
    description: 'Comprehensive flood cleanup addressing all Vienna storm damage scenarios.',
    servicesList: [
      {
        title: 'Emergency Flood Water Extraction',
        description: 'Rapid response removing flood water from Vienna basements and living spaces. Our industrial extraction equipment handles severe flooding quickly, minimizing damage and beginning recovery immediately.',
        features: [
          'Truck-mounted extraction systems',
          'Submersible pumps for deep flooding',
          'Continuous extraction during active events',
          'All-level water removal capability',
          'Basement complete water extraction',
          'Contents protection during extraction'
        ],
        icon: 'flood-extraction'
      },
      {
        title: 'Sump Pump Failure Response',
        description: 'Emergency service when sump pumps fail during storms causing basement flooding. We extract water, assess pump systems, and coordinate emergency replacement preventing continued flooding.',
        features: [
          'Immediate water removal',
          'Pump system evaluation',
          'Battery backup recommendations',
          'Discharge line assessment',
          'Emergency pump replacement coordination',
          'Preventive maintenance education'
        ],
        icon: 'sump-pump'
      },
      {
        title: 'Storm-Damaged Basement Restoration',
        description: 'Complete basement recovery after flood events. We remove contaminated materials, perform thorough structural drying, treat for bacteria and mold, and restore basements to safe, dry condition.',
        features: [
          'Contaminated material removal',
          'Complete structural drying',
          'Antimicrobial treatment',
          'Mold prevention protocols',
          'Finished basement reconstruction',
          'Humidity control systems'
        ],
        icon: 'basement-restoration'
      },
      {
        title: 'Roof Leak & Storm Damage Repair',
        description: 'Comprehensive restoration for roof damage from severe storms. We address water intrusion through damaged roofing, dry affected ceilings and attics, and coordinate roofing repairs.',
        features: [
          'Ceiling water damage restoration',
          'Attic drying and ventilation',
          'Insulation assessment',
          'Roof leak tarping when needed',
          'Roofing contractor coordination',
          'Interior restoration after repairs'
        ],
        icon: 'roof-damage'
      }
    ]
  },
  
  faq: {
    heading: 'Vienna Flood Cleanup FAQs',
    description: 'Common questions about storm damage and flood restoration.',
    questions: [
      {
        question: 'How quickly can you respond to flood emergencies in Vienna?',
        answer: 'We maintain 24/7 emergency teams throughout Vienna with average response times of 45 minutes. During severe storm events, we prioritize dispatch to flooded properties requiring immediate water extraction. Call (703) 656-0105 for emergency flood response.'
      },
      {
        question: 'Does homeowners insurance cover flood damage?',
        answer: 'Standard homeowners insurance typically covers sudden internal water events (burst pipes, appliance failures) but NOT surface water flooding from storms. Flood damage usually requires separate flood insurance through NFIP or private carriers. Sump pump failures have varying coverage. We document all damage thoroughly and work with both types of insurance.'
      },
      {
        question: 'What areas near Difficult Run are most flood-prone?',
        answer: 'Properties in the Wolf Trap area near Difficult Run and Wolf Trap Stream face highest flash flood risks. Low-lying properties throughout Vienna can experience basement flooding when storm drainage becomes overwhelmed. We serve all Vienna flood-prone areas with rapid emergency response.'
      },
      {
        question: 'How do you handle contaminated flood water?',
        answer: 'Storm flood water often contains contaminants requiring careful handling. We remove contaminated materials, use EPA-approved disinfectants throughout affected areas, employ proper PPE, and follow IICRC standards for contaminated water restoration. Complete sanitization protects your family\'s health.'
      }
    ]
  },
  
  cta: {
    heading: 'Flood Emergency? We Respond Immediately',
    subheading: '24/7 Storm Damage Restoration Throughout Vienna',
    buttonText: 'Call (703) 656-0105',
    buttonLink: 'tel:7036560105',
    secondaryText: 'Expert flood cleanup near Difficult Run',
    emergencyText: 'Serving Vienna, Wolf Trap & surrounding areas'
  },
  
  relatedServices: [
    {
      title: 'Basement Flooding Solutions',
      description: 'Complete basement water damage restoration',
      link: '/locations/vienna/services/basement-flooding'
    },
    {
      title: 'Storm Damage Restoration',
      description: 'Comprehensive storm recovery services',
      link: '/locations/vienna/services/storm-damage'
    },
    {
      title: 'Mold Remediation',
      description: 'Professional mold removal after flooding',
      link: '/locations/vienna/services/mold-remediation'
    }
  ],
  
  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Flood Cleanup',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flood Doctor - Vienna',
      telephone: '(703) 656-0105'
    },
    areaServed: 'Vienna, VA'
  }
};
