import { ServicePageContent } from '../../../../types/content';

export const viennaFireDamage: ServicePageContent = {
  city: 'Vienna',
  state: 'VA',
  serviceType: 'fire-damage',

  hero: {
    title: 'Vienna Fire Damage Restoration',
    subtitle: 'Complete Fire, Smoke & Water Restoration',
    description: '24/7 fire damage restoration for Vienna homes. Expert smoke damage cleanup, water extraction from firefighting, and full reconstruction preserving your home\'s character.',
    primaryCTA: 'Get Emergency Help',
    primaryCTALink: 'tel:7036560105',
    secondaryCTA: 'Learn About Restoration',
    secondaryCTALink: '#process',
    backgroundImage: '/images/services/fire-damage-vienna.jpg',
    backgroundAlt: 'Vienna fire damage restoration service'
  },

  intro: {
    heading: 'Vienna\'s Fire & Smoke Damage Restoration Experts',
    paragraphs: [
      'Fire damage affects Vienna homes on multiple levels—the fire itself, smoke penetration into every surface, and the significant water damage from firefighting efforts. Whether you\'re facing kitchen fire damage in a Church Street colonial or major fire restoration in an Oakton estate, our certified technicians provide comprehensive recovery services.',
      'From emergency board-up and tarping to complete reconstruction, we handle every aspect of fire damage restoration. Our Vienna teams understand the urgency families face after fire emergencies and work efficiently to return your home to pre-loss condition—or better.',
      'With 24/7 emergency response, IICRC-certified technicians, and extensive experience restoring Vienna\'s diverse housing stock, we deliver fire damage solutions that address visible damage and hidden smoke penetration throughout your property.'
    ]
  },

  services: {
    heading: 'Complete Fire Damage Restoration Services',
    description: 'Comprehensive solutions addressing every aspect of fire damage in Vienna homes.',
    servicesList: [
      {
        title: 'Emergency Board-Up & Tarping',
        description: 'Immediate property securing after fire damage. We board up broken windows, tarp damaged roofs, and secure openings preventing weather damage and intrusion while restoration planning proceeds.',
        features: [
          '24/7 emergency board-up response',
          'Roof tarping preventing weather intrusion',
          'Window and door securing',
          'Temporary fencing when needed',
          'Property security during restoration',
          'Insurance documentation of securing work',
          'Coordination with fire investigators'
        ],
        icon: 'emergency-response'
      },
      {
        title: 'Water Extraction from Firefighting',
        description: 'Rapid water removal from firefighting efforts. Fire suppression introduces significant water into structures—we extract standing water throughout affected areas, preventing secondary water damage and mold growth.',
        features: [
          'Truck-mounted water extraction',
          'Multi-floor water removal',
          'Carpet and flooring extraction',
          'Structural drying setup',
          'Dehumidification deployment',
          'Daily moisture monitoring',
          'Complete drying verification'
        ],
        icon: 'water-extraction'
      },
      {
        title: 'Smoke & Soot Cleaning',
        description: 'Professional smoke damage cleaning using specialized techniques for different smoke types. We remove soot from surfaces, clean HVAC systems, and address smoke penetration throughout your Vienna home.',
        features: [
          'Soot removal from all surfaces',
          'Smoke-damaged wall and ceiling cleaning',
          'HVAC system cleaning',
          'Content smoke cleaning',
          'Fabric and upholstery treatment',
          'Specialized cleaning for smoke types',
          'Air quality restoration'
        ],
        icon: 'smoke-cleaning'
      },
      {
        title: 'Odor Elimination',
        description: 'Complete smoke odor removal using thermal fogging, ozone treatment, and hydroxyl generators. We eliminate fire odors from structures and contents—not just masking but completely removing odor sources.',
        features: [
          'Thermal fogging penetrating porous materials',
          'Ozone treatment for severe odors',
          'Hydroxyl generator treatment',
          'Content odor removal',
          'HVAC odor treatment',
          'Multiple treatment rounds when needed',
          'Odor-free verification'
        ],
        icon: 'odor-removal'
      },
      {
        title: 'Contents Pack-Out & Restoration',
        description: 'Professional handling of fire and smoke-damaged contents. We inventory, pack, transport to our facility, clean, restore, and return your belongings—saving items whenever possible.',
        features: [
          'Complete room-by-room inventory',
          'Contents pack-out to cleaning facility',
          'Smoke and soot cleaning',
          'Electronics restoration',
          'Document recovery',
          'Furniture restoration',
          'Coordinated return when home is ready'
        ],
        icon: 'contents-restoration'
      },
      {
        title: 'Structural Cleaning & Restoration',
        description: 'Complete structural restoration for fire-damaged Vienna homes. We assess structural integrity, remove fire-damaged materials, clean salvageable structures, and prepare for reconstruction.',
        features: [
          'Structural integrity assessment',
          'Fire-damaged material removal',
          'Framing and structural cleaning',
          'Smoke penetration treatment',
          'Preparation for reconstruction',
          'Electrical and mechanical coordination',
          'Building code compliance'
        ],
        icon: 'structural-restoration'
      },
      {
        title: 'Complete Reconstruction',
        description: 'Full reconstruction returning Vienna homes to pre-fire condition. Our construction teams handle everything from framing and drywall to trim and paint—matching your home\'s original character.',
        features: [
          'Complete demolition of fire-damaged areas',
          'Framing and structural repairs',
          'Electrical and plumbing coordination',
          'Drywall installation and finishing',
          'Flooring replacement',
          'Trim, cabinetry, and millwork',
          'Paint and final finishes'
        ],
        icon: 'reconstruction'
      },
      {
        title: 'Insurance Claims Support',
        description: 'Comprehensive documentation and coordination with insurance companies. Fire damage claims are complex—we provide detailed documentation, work with adjusters, and help ensure fair settlement for complete restoration.',
        features: [
          'Complete damage documentation',
          'Detailed restoration estimates',
          'Insurance adjuster coordination',
          'Supplemental claims when needed',
          'Contents inventory for claims',
          'Direct billing when approved',
          'Claims advocacy throughout process'
        ],
        icon: 'insurance-support'
      }
    ]
  },

  waterDamageTypes: {
    heading: 'Types of Fire Damage in Vienna Homes',
    description: 'Understanding fire damage types helps plan appropriate restoration.',
    types: [
      {
        title: 'Kitchen Fire Damage',
        description: 'Kitchen fires are the most common fire type in Vienna homes. Grease fires, electrical fires, and unattended cooking create intense heat and heavy smoke damage requiring specialized cleaning and restoration.',
        causes: [
          'Grease fires during cooking',
          'Unattended cooking',
          'Electrical shorts in appliances',
          'Microwave fires',
          'Dishwasher electrical failures',
          'Overloaded circuits'
        ],
        solutions: [
          'Emergency board-up and securing',
          'Water extraction from firefighting',
          'Smoke and soot cleaning throughout',
          'Cabinet and countertop assessment',
          'Appliance replacement coordination',
          'Complete kitchen reconstruction'
        ],
        image: '/images/damage-types/kitchen-fire.jpg'
      },
      {
        title: 'Electrical Fire Damage',
        description: 'Aging electrical systems in Vienna\'s older colonials create fire risks. Outdated wiring, overloaded circuits, and failed components cause fires that spread through wall cavities before detection.',
        causes: [
          'Outdated electrical wiring',
          'Overloaded circuits',
          'Failed electrical components',
          'DIY electrical work',
          'Rodent damage to wiring',
          'Arc faults in aging systems'
        ],
        solutions: [
          'Complete electrical assessment',
          'Wall cavity fire damage evaluation',
          'Smoke damage cleaning throughout',
          'Electrical system replacement',
          'Wall reconstruction',
          'Code-compliant electrical upgrades'
        ],
        image: '/images/damage-types/electrical-fire.jpg'
      },
      {
        title: 'HVAC Fire Damage',
        description: 'Furnace failures and HVAC system fires in Vienna homes often occur in basements or utility areas. These fires can spread smoke throughout entire homes via ductwork.',
        causes: [
          'Furnace malfunctions',
          'Heat pump failures',
          'Ductwork fires',
          'Lack of maintenance',
          'Combustible materials near equipment',
          'Gas line issues'
        ],
        solutions: [
          'Emergency response and securing',
          'Complete duct system cleaning',
          'HVAC replacement coordination',
          'Smoke damage throughout home',
          'Utility room reconstruction',
          'Preventive recommendations'
        ],
        image: '/images/damage-types/hvac-fire.jpg'
      },
      {
        title: 'Major Structural Fire Damage',
        description: 'Significant fires causing structural damage to Vienna homes require extensive restoration including framing repairs, complete reconstruction, and often temporary relocation during restoration.',
        causes: [
          'Uncontrolled fire spread',
          'Delayed fire department response',
          'Flammable materials storage',
          'Multiple ignition sources',
          'Construction defects',
          'Weather-related fire spread'
        ],
        solutions: [
          'Structural engineering assessment',
          'Complete demolition of damaged areas',
          'Framing and structural repairs',
          'Full systems replacement',
          'Complete home reconstruction',
          'Project management throughout'
        ],
        image: '/images/damage-types/structural-fire.jpg'
      }
    ]
  },

  faq: {
    heading: 'Vienna Fire Damage FAQs',
    description: 'Common questions about fire damage restoration in Vienna.',
    questions: [
      {
        question: 'How quickly can you respond to fire damage emergencies in Vienna?',
        answer: 'We provide 24/7 emergency response throughout Vienna with typical arrival times of 45-60 minutes. After fire department clearance, we begin board-up, tarping, and initial assessment immediately. Call (703) 656-0105 as soon as the fire is out and you have clearance to access the property.'
      },
      {
        question: 'Why is there so much water damage after a fire?',
        answer: 'Fire suppression requires significant water—fire departments may use thousands of gallons extinguishing fires. This water saturates structures, floods lower levels, and creates secondary water damage requiring immediate extraction. We address both fire and water damage comprehensively, preventing mold growth from lingering moisture.'
      },
      {
        question: 'Can smoke-damaged items be saved?',
        answer: 'Many smoke-damaged items can be professionally cleaned and restored. Hard surfaces, some textiles, and properly treated contents often survive. Electronics require professional assessment. We inventory all contents, attempt restoration whenever possible, and document non-restorable items for insurance claims.'
      },
      {
        question: 'How long does fire damage restoration take?',
        answer: 'Timeline depends on damage extent. Minor kitchen fires may require 2-4 weeks for complete restoration. Significant structural fire damage often takes 3-6 months for full reconstruction. We provide detailed timelines after assessment and keep you informed throughout the restoration process.'
      },
      {
        question: 'Will insurance cover fire damage restoration?',
        answer: 'Most homeowners insurance policies cover fire damage comprehensively, including structure restoration, contents replacement, and additional living expenses during restoration. We document everything thoroughly, work directly with insurance companies, and help ensure fair settlements covering complete restoration.'
      },
      {
        question: 'Do I need to move out during fire restoration?',
        answer: 'For significant fire damage, temporary relocation is usually necessary and typically covered by insurance (Additional Living Expenses). We help document these needs for insurance claims and work efficiently to minimize displacement time. Minor fire damage may allow you to remain in unaffected areas of your home.'
      },
      {
        question: 'Can you match my home\'s original character during reconstruction?',
        answer: 'Absolutely. Our reconstruction teams specialize in matching Vienna\'s diverse housing styles—from 1950s-70s colonials with plaster walls and hardwood floors to modern Oakton construction. We source appropriate materials, replicate trim profiles, and ensure reconstruction preserves your home\'s character.'
      },
      {
        question: 'What about smoke odor in areas that didn\'t burn?',
        answer: 'Smoke penetrates throughout homes via HVAC systems and natural air movement. We address smoke odor in all affected areas using thermal fogging, ozone treatment, and hydroxyl generators. Complete odor elimination often requires cleaning HVAC ductwork and treating all porous surfaces throughout the home.'
      }
    ]
  },

  cta: {
    heading: 'Fire Damage Emergency? Call Now',
    subheading: '24/7 Emergency Response Throughout Vienna',
    buttonText: 'Call (703) 656-0105',
    buttonLink: 'tel:7036560105',
    secondaryText: 'Complete fire, smoke & water damage restoration',
    emergencyText: 'Serving Vienna Town, Oakton, Wolf Trap & surrounding areas'
  },

  relatedServices: [
    {
      title: 'Water Damage Restoration',
      description: 'Complete water damage solutions',
      link: '/locations/vienna/services/water-damage'
    },
    {
      title: 'Mold Remediation',
      description: 'Professional mold removal',
      link: '/locations/vienna/services/residential/cleanup-services/mold-remediation/'
    },
    {
      title: 'Storm Damage',
      description: 'Emergency storm restoration',
      link: '/locations/vienna/services/storm-damage'
    }
  ],

  schema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Fire Damage Restoration',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Flood Doctor - Vienna',
      telephone: '(703) 656-0105'
    },
    areaServed: 'Vienna, VA',
    description: '24/7 fire damage restoration in Vienna, VA. Complete fire, smoke, and water damage restoration for Vienna homes. Expert reconstruction preserving your home\'s character.',
    hoursAvailable: '24/7'
  }
};
