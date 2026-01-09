/**
 * Service-Specific Process Maps
 * Each service gets unique process steps with relevant tiles and SEO keywords
 * DO NOT reuse generic content - each service needs unique, relevant content
 */

export interface ProcessStep {
  title: string;
  image: string;
  tasks: string[];
  color: string;
}

export interface ServiceProcessMap {
  sectionTitle: string;
  steps: ProcessStep[];
}

// Tile base path
const TILES = '/images/process-tiles';

export const serviceProcessMaps: Record<string, ServiceProcessMap> = {
  // ============================================
  // RESIDENTIAL RESTORATION SERVICES
  // ============================================

  'water-damage-restoration': {
    sectionTitle: 'Our Water Damage Restoration Process',
    steps: [
      {
        title: 'Emergency Assessment',
        image: `${TILES}/process-03-initial-assessment.png`,
        tasks: ['Thermal imaging inspection', 'Moisture mapping', 'Damage documentation'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Water Extraction',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['Truck-mounted extraction', 'Carpet water removal', 'Standing water pumping'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Structural Drying',
        image: `${TILES}/process-08-air-movers.png`,
        tasks: ['LGR dehumidifiers', 'High-velocity air movers', 'Daily moisture readings'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Restoration Complete',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Final moisture verification', 'Insurance documentation', 'Property walk-through'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'flood-cleanup': {
    sectionTitle: 'Our Flood Cleanup Process',
    steps: [
      {
        title: 'Emergency Response',
        image: `${TILES}/process-34-flood-water-intrusion-exterior.png`,
        tasks: ['24/7 flood response', 'Safety assessment', 'Water source identification'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Flood Water Removal',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['Submersible pump extraction', 'Sediment removal', 'Debris clearing'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Sanitization',
        image: `${TILES}/process-21-sanitization.png`,
        tasks: ['Category 3 decontamination', 'Antimicrobial treatment', 'Biohazard disposal'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Property Restored',
        image: `${TILES}/process-33-restoration-complete-exterior.png`,
        tasks: ['Structural repairs', 'Clearance testing', 'Insurance claim filing'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'structural-drying': {
    sectionTitle: 'Our Structural Drying Process',
    steps: [
      {
        title: 'Moisture Mapping',
        image: `${TILES}/process-04-moisture-mapping.png`,
        tasks: ['FLIR thermal imaging', 'Pin & pinless meter readings', 'Affected area mapping'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Equipment Placement',
        image: `${TILES}/process-09-dehumidifiers.png`,
        tasks: ['LGR dehumidifier setup', 'Strategic air mover placement', 'Drying chamber creation'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Monitored Drying',
        image: `${TILES}/process-14-structural-drying.png`,
        tasks: ['Daily psychrometric readings', 'Equipment adjustment', 'Progress documentation'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Dry Standard Achieved',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['IICRC S500 verification', 'Before/after comparison', 'Certificate of completion'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'storm-damage-restoration': {
    sectionTitle: 'Our Storm Damage Restoration Process',
    steps: [
      {
        title: 'Emergency Dispatch',
        image: `${TILES}/process-01-emergency-dispatch.png`,
        tasks: ['24/7 storm response', 'Board-up & tarping', 'Property securing'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Damage Assessment',
        image: `${TILES}/process-34-flood-water-intrusion-exterior.png`,
        tasks: ['Wind damage evaluation', 'Water intrusion mapping', 'Structural inspection'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Debris & Demolition',
        image: `${TILES}/process-07-demolition-removal.png`,
        tasks: ['Tree debris removal', 'Damaged material extraction', 'Controlled demolition'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Full Reconstruction',
        image: `${TILES}/process-23-reconstruction-planning.png`,
        tasks: ['Rebuild planning', 'Insurance coordination', 'Complete restoration'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'burst-pipe-cleanup': {
    sectionTitle: 'Our Burst Pipe Cleanup Process',
    steps: [
      {
        title: 'Emergency Response',
        image: `${TILES}/process-01-emergency-dispatch.png`,
        tasks: ['60-minute arrival', 'Water shutoff assistance', 'Immediate extraction'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Water Extraction',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['Truck-mounted extraction', 'Ceiling water removal', 'Multi-floor response'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Wall Cavity Drying',
        image: `${TILES}/process-19-drywall-removal.png`,
        tasks: ['Flood cuts as needed', 'Insulation inspection', 'Wall cavity drying'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Drywall Restoration',
        image: `${TILES}/process-25-drywall-installation.png`,
        tasks: ['Drywall replacement', 'Painting & finishing', 'Final inspection'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  // ============================================
  // RESIDENTIAL CLEANUP SERVICES
  // ============================================

  'fire-smoke-cleanup': {
    sectionTitle: 'Our Fire & Smoke Cleanup Process',
    steps: [
      {
        title: 'Fire Damage Assessment',
        image: `${TILES}/process-33-fire-inspection.png`,
        tasks: ['Structural safety evaluation', 'Smoke damage mapping', 'Salvage assessment'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Soot Removal',
        image: `${TILES}/Process-36-Soot-Cleaning.png`,
        tasks: ['Dry sponge cleaning', 'HEPA vacuuming', 'Chemical soot removal'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Odor Elimination',
        image: `${TILES}/process-37-thermal-fogging.png`,
        tasks: ['Thermal fogging', 'Ozone treatment', 'Hydroxyl generation'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Complete Restoration',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Final cleaning', 'Air quality testing', 'Insurance documentation'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'mold-remediation': {
    sectionTitle: 'Our Mold Remediation Process',
    steps: [
      {
        title: 'Mold Inspection',
        image: `${TILES}/Process-11-mold-inspection.png`,
        tasks: ['Visual inspection', 'Air quality sampling', 'Mold species identification'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Containment Setup',
        image: `${TILES}/process-06-containment-setup.png`,
        tasks: ['Negative air pressure', 'Poly barrier isolation', 'HEPA filtration'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Mold Removal',
        image: `${TILES}/process-12-mold-remediation.png`,
        tasks: ['HEPA vacuuming', 'Antimicrobial treatment', 'Material removal'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Clearance Testing',
        image: `${TILES}/process-38-air-sampling.png`,
        tasks: ['Post-remediation testing', 'Air quality verification', 'Clearance certificate'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'sewage-cleanup': {
    sectionTitle: 'Our Sewage Cleanup Process',
    steps: [
      {
        title: 'Hazmat Response',
        image: `${TILES}/process-44-Residential-Safety.png`,
        tasks: ['PPE-equipped technicians', 'Area isolation', 'Health hazard assessment'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Contamination Removal',
        image: `${TILES}/process-06-containment-setup.png`,
        tasks: ['Sewage extraction', 'Contaminated material disposal', 'EPA-compliant handling'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Sanitization',
        image: `${TILES}/process-13-antimicrobial-treatment.png`,
        tasks: ['Hospital-grade disinfection', 'Antimicrobial application', 'Surface treatment'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Safe for Occupancy',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Bacteria testing', 'Odor elimination', 'Clearance documentation'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'odor-removal': {
    sectionTitle: 'Our Odor Removal Process',
    steps: [
      {
        title: 'Odor Source Detection',
        image: `${TILES}/process-22-odor-removal.png`,
        tasks: ['Odor type identification', 'Source location', 'Severity assessment'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Thermal Fogging',
        image: `${TILES}/process-37-thermal-fogging.png`,
        tasks: ['Penetrating deodorizer', 'HVAC treatment', 'Cavity fumigation'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Air Purification',
        image: `${TILES}/process-10-air-scrubbers.png`,
        tasks: ['Hydroxyl generators', 'Ozone treatment', 'HEPA air scrubbing'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Odor-Free Verified',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Air quality testing', 'Client walkthrough', 'Satisfaction guarantee'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'contents-cleaning-packout': {
    sectionTitle: 'Our Contents Cleaning Process',
    steps: [
      {
        title: 'Contents Inventory',
        image: `${TILES}/process-15-contents-packout.png`,
        tasks: ['Item cataloging', 'Photo documentation', 'Salvage assessment'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Document Recovery',
        image: `${TILES}/process-16-document-drying.png`,
        tasks: ['Document freeze-drying', 'Photo restoration', 'Paper recovery'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Electronics Assessment',
        image: `${TILES}/process-17-electronics-assessment.png`,
        tasks: ['Electronics evaluation', 'Data recovery', 'Corrosion prevention'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Contents Return',
        image: `${TILES}/process-32-contents-moveback.png`,
        tasks: ['Cleaned item delivery', 'Placement assistance', 'Final inventory check'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  // ============================================
  // RESIDENTIAL SPECIALTY SERVICES
  // ============================================

  'basement-flooding': {
    sectionTitle: 'Our Basement Flooding Cleanup Process',
    steps: [
      {
        title: 'Flood Assessment',
        image: `${TILES}/Basement-Debris-Removal-tile.png`,
        tasks: ['Water level measurement', 'Source identification', 'Safety evaluation'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Water Extraction',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['Submersible pumping', 'Debris removal', 'Sediment extraction'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Foundation Drying',
        image: `${TILES}/process-42-Crawl-Space.png`,
        tasks: ['Concrete slab drying', 'Wall cavity treatment', 'Moisture barrier inspection'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Basement Restored',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Mold prevention', 'Drainage recommendations', 'Final inspection'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'crawl-space-drying': {
    sectionTitle: 'Our Crawl Space Drying Process',
    steps: [
      {
        title: 'Crawl Space Inspection',
        image: `${TILES}/process-42-Crawl-Space.png`,
        tasks: ['Entry assessment', 'Moisture source ID', 'Structural evaluation'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Moisture Mapping',
        image: `${TILES}/process-04-moisture-mapping.png`,
        tasks: ['Joist moisture readings', 'Subfloor testing', 'Foundation assessment'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Drying & Treatment',
        image: `${TILES}/process-14-structural-drying.png`,
        tasks: ['Commercial dehumidification', 'Antimicrobial application', 'Wood treatment'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Encapsulation Ready',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Dry verification', 'Encapsulation consult', 'Prevention plan'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'hardwood-floor-drying': {
    sectionTitle: 'Our Hardwood Floor Drying Process',
    steps: [
      {
        title: 'Hardwood Assessment',
        image: `${TILES}/process-41-Hardwood-drying.png`,
        tasks: ['Cupping evaluation', 'Moisture content testing', 'Salvage determination'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Precision Drying',
        image: `${TILES}/process-04-moisture-mapping.png`,
        tasks: ['Floor mat system', 'Controlled evaporation', 'Subfloor drying'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Monitored Recovery',
        image: `${TILES}/process-14-structural-drying.png`,
        tasks: ['Daily MC readings', 'Crown/cup monitoring', 'Acclimation tracking'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Refinish Ready',
        image: `${TILES}/process-28-flooring-installation.png`,
        tasks: ['Sanding assessment', 'Finish recommendations', 'Floor restoration'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'roof-leak-water-damage': {
    sectionTitle: 'Our Roof Leak Restoration Process',
    steps: [
      {
        title: 'Leak Assessment',
        image: `${TILES}/process-03-initial-assessment.png`,
        tasks: ['Attic inspection', 'Water path tracing', 'Damage extent mapping'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Insulation Removal',
        image: `${TILES}/process-24-insulation-replacement.png`,
        tasks: ['Wet insulation extraction', 'Rafter inspection', 'Mold prevention'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Ceiling Drying',
        image: `${TILES}/process-14-structural-drying.png`,
        tasks: ['Controlled drying', 'Drywall preservation', 'Stain prevention'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Ceiling Repair',
        image: `${TILES}/process-25-drywall-installation.png`,
        tasks: ['Drywall replacement', 'Texture matching', 'Paint restoration'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  // ============================================
  // COMMERCIAL SERVICES
  // ============================================

  'commercial-water-damage': {
    sectionTitle: 'Our Commercial Water Damage Process',
    steps: [
      {
        title: 'Rapid Assessment',
        image: `${TILES}/process-45-Commercial-Safety.png`,
        tasks: ['Business continuity planning', 'Safety protocols', 'Scope documentation'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Industrial Extraction',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['High-capacity extraction', 'Asset protection', 'Minimal disruption'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Commercial Drying',
        image: `${TILES}/process-09-dehumidifiers.png`,
        tasks: ['Large-scale dehumidification', 'HVAC coordination', '24/7 monitoring'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Business Restored',
        image: `${TILES}/process-46-project-coordination.png`,
        tasks: ['Project management', 'Final walkthrough', 'Documentation package'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'commercial-flood-cleanup': {
    sectionTitle: 'Our Commercial Flood Cleanup Process',
    steps: [
      {
        title: 'Emergency Mobilization',
        image: `${TILES}/process-01-emergency-dispatch.png`,
        tasks: ['Multi-crew deployment', 'Equipment staging', 'Safety coordination'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Mass Extraction',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['Truck-mounted systems', 'Submersible pumps', 'Sediment removal'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Facility Sanitization',
        image: `${TILES}/process-21-sanitization.png`,
        tasks: ['Category 3 protocols', 'Antimicrobial treatment', 'Health compliance'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Operational Recovery',
        image: `${TILES}/process-45-Commercial-Safety-2.png`,
        tasks: ['Clearance testing', 'Occupancy approval', 'Insurance documentation'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'large-loss-restoration': {
    sectionTitle: 'Our Large Loss Restoration Process',
    steps: [
      {
        title: 'Incident Command',
        image: `${TILES}/process-45-Commercial-Safety.png`,
        tasks: ['Project leadership', 'Resource allocation', 'Stakeholder coordination'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Phased Response',
        image: `${TILES}/process-46-project-coordination.png`,
        tasks: ['Strategic prioritization', 'Multi-team deployment', 'Timeline management'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Parallel Operations',
        image: `${TILES}/process-07-demolition-removal.png`,
        tasks: ['Concurrent work streams', 'Demolition & drying', 'Reconstruction prep'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Full Restoration',
        image: `${TILES}/process-23-reconstruction-planning.png`,
        tasks: ['Build-back coordination', 'Quality assurance', 'Project completion'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'commercial-sewage-cleanup': {
    sectionTitle: 'Our Commercial Sewage Cleanup Process',
    steps: [
      {
        title: 'Hazmat Response',
        image: `${TILES}/process-45-Commercial-Safety.png`,
        tasks: ['Area lockdown', 'PPE protocols', 'Health & safety plan'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Contamination Removal',
        image: `${TILES}/process-06-containment-setup.png`,
        tasks: ['Waste extraction', 'Material disposal', 'Regulatory compliance'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Industrial Sanitization',
        image: `${TILES}/process-13-antimicrobial-treatment.png`,
        tasks: ['Hospital-grade disinfection', 'Surface treatment', 'Air purification'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Clearance Verified',
        image: `${TILES}/process-38-air-sampling.png`,
        tasks: ['ATP testing', 'Air quality verification', 'Health department approval'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'commercial-mold-remediation': {
    sectionTitle: 'Our Commercial Mold Remediation Process',
    steps: [
      {
        title: 'Assessment & Testing',
        image: `${TILES}/Process-11-mold-inspection.png`,
        tasks: ['Industrial hygienist consult', 'Air sampling', 'Scope of work'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Containment Engineering',
        image: `${TILES}/process-06-containment-setup.png`,
        tasks: ['Negative pressure barriers', 'HVAC isolation', 'Decontamination chamber'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Remediation',
        image: `${TILES}/process-12-mold-remediation.png`,
        tasks: ['HEPA removal', 'Antimicrobial treatment', 'Material disposal'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Clearance Protocol',
        image: `${TILES}/process-38-air-sampling.png`,
        tasks: ['Third-party testing', 'Clearance certification', 'Tenant notification'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'commercial-fire-smoke-cleanup': {
    sectionTitle: 'Our Commercial Fire Cleanup Process',
    steps: [
      {
        title: 'Fire Damage Assessment',
        image: `${TILES}/process-33-fire-inspection.png`,
        tasks: ['Structural evaluation', 'Smoke migration mapping', 'Asset inventory'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Soot & Residue Removal',
        image: `${TILES}/Process-36-Soot-Cleaning.png`,
        tasks: ['Industrial cleaning', 'Equipment cleaning', 'HVAC decontamination'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Odor Elimination',
        image: `${TILES}/process-37-thermal-fogging.png`,
        tasks: ['Commercial thermal fogging', 'Ozone treatment', 'Air scrubbing'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Business Restored',
        image: `${TILES}/process-46-project-coordination.png`,
        tasks: ['Reconstruction coordination', 'Final inspection', 'Reopening support'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'commercial-storm-damage': {
    sectionTitle: 'Our Commercial Storm Damage Process',
    steps: [
      {
        title: 'Emergency Board-Up',
        image: `${TILES}/process-01-emergency-dispatch.png`,
        tasks: ['Rapid response team', 'Temporary protection', 'Property securing'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Damage Assessment',
        image: `${TILES}/process-34-flood-water-intrusion-exterior.png`,
        tasks: ['Roof damage evaluation', 'Water intrusion mapping', 'Structural analysis'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Mitigation',
        image: `${TILES}/process-07-demolition-removal.png`,
        tasks: ['Debris removal', 'Water extraction', 'Temporary repairs'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Full Reconstruction',
        image: `${TILES}/process-23-reconstruction-planning.png`,
        tasks: ['Rebuild coordination', 'Permit management', 'Project completion'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'commercial-roof-leak': {
    sectionTitle: 'Our Commercial Roof Leak Process',
    steps: [
      {
        title: 'Emergency Response',
        image: `${TILES}/process-01-emergency-dispatch.png`,
        tasks: ['Rapid deployment', 'Asset protection', 'Temporary containment'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Water Extraction',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['Ceiling water removal', 'Equipment protection', 'Inventory salvage'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Structural Drying',
        image: `${TILES}/process-14-structural-drying.png`,
        tasks: ['Commercial drying systems', 'Insulation assessment', 'Deck inspection'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Interior Restoration',
        image: `${TILES}/process-25-drywall-installation.png`,
        tasks: ['Ceiling replacement', 'Lighting restoration', 'Final inspection'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  // Commercial Specialty
  'healthcare-facilities': {
    sectionTitle: 'Our Healthcare Facility Restoration Process',
    steps: [
      {
        title: 'Infection Control',
        image: `${TILES}/process-45-Commercial-Safety.png`,
        tasks: ['ICRA protocols', 'Patient safety plan', 'Regulatory compliance'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Containment Barriers',
        image: `${TILES}/process-06-containment-setup.png`,
        tasks: ['Negative air machines', 'HEPA filtration', 'Air quality monitoring'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Hospital-Grade Cleaning',
        image: `${TILES}/process-21-sanitization.png`,
        tasks: ['Medical-grade disinfection', 'Surface decontamination', 'Equipment cleaning'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Clearance & Documentation',
        image: `${TILES}/process-38-air-sampling.png`,
        tasks: ['Environmental testing', 'Compliance verification', 'Occupancy approval'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'hospitality-multifamily': {
    sectionTitle: 'Our Hospitality Restoration Process',
    steps: [
      {
        title: 'Guest Impact Assessment',
        image: `${TILES}/process-03-initial-assessment.png`,
        tasks: ['Unit-by-unit evaluation', 'Guest relocation support', 'Revenue impact analysis'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Rapid Room Turnaround',
        image: `${TILES}/process-05-water-extraction.png`,
        tasks: ['Fast-track drying', 'Noise-conscious work', 'Minimal disruption'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Odor & Quality Control',
        image: `${TILES}/process-22-odor-removal.png`,
        tasks: ['Guest-ready standards', 'Odor elimination', 'Appearance restoration'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Revenue Recovery',
        image: `${TILES}/process-46-project-coordination.png`,
        tasks: ['Fast room return', 'Quality inspection', 'Management sign-off'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'municipal-education': {
    sectionTitle: 'Our Municipal & Education Restoration Process',
    steps: [
      {
        title: 'Safety Assessment',
        image: `${TILES}/process-44-Residential-Safety.png`,
        tasks: ['Student/staff safety', 'Building evaluation', 'Temporary closure planning'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'After-Hours Work',
        image: `${TILES}/process-46-project-coordination.png`,
        tasks: ['Weekend scheduling', 'Minimal disruption', 'Accelerated timelines'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Air Quality Focus',
        image: `${TILES}/process-38-air-sampling.png`,
        tasks: ['IAQ monitoring', 'Mold prevention', 'HVAC inspection'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Occupancy Clearance',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Health dept approval', 'Parent notification', 'Reopening support'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'industrial-facilities': {
    sectionTitle: 'Our Industrial Facility Restoration Process',
    steps: [
      {
        title: 'Production Assessment',
        image: `${TILES}/process-45-Commercial-Safety-2.png`,
        tasks: ['Equipment evaluation', 'Production impact', 'Safety protocols'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Equipment Cleaning',
        image: `${TILES}/process-35-general-cleaning.png`,
        tasks: ['Machinery cleaning', 'Corrosion prevention', 'Electrical inspection'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Large-Scale Drying',
        image: `${TILES}/process-09-dehumidifiers.png`,
        tasks: ['Industrial dehumidification', 'Warehouse drying', 'Concrete treatment'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Production Restored',
        image: `${TILES}/process-46-project-coordination.png`,
        tasks: ['Equipment testing', 'Safety verification', 'Operations resume'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  // Technical Services
  'moisture-mapping-consulting': {
    sectionTitle: 'Our Moisture Mapping Process',
    steps: [
      {
        title: 'Thermal Imaging',
        image: `${TILES}/process-04-moisture-mapping.png`,
        tasks: ['FLIR thermal scan', 'Anomaly detection', 'Hidden moisture location'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Meter Verification',
        image: `${TILES}/process-23-moisture-mapping-2.png`,
        tasks: ['Pin meter readings', 'Pinless scanning', 'MC documentation'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Detailed Mapping',
        image: `${TILES}/process-31-insurance-documentation.png`,
        tasks: ['CAD floor plans', 'Moisture data overlay', 'Photo documentation'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Consulting Report',
        image: `${TILES}/process-30-final-inspection.png`,
        tasks: ['Written analysis', 'Recommendations', 'Expert testimony support'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'indoor-air-quality': {
    sectionTitle: 'Our Indoor Air Quality Testing Process',
    steps: [
      {
        title: 'Initial Sampling',
        image: `${TILES}/process-38-air-sampling.png`,
        tasks: ['Spore trap collection', 'VOC monitoring', 'Baseline readings'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Lab Analysis',
        image: `${TILES}/process-40-water-quality-testing.png`,
        tasks: ['Third-party lab testing', 'Species identification', 'Count analysis'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Real-Time Monitoring',
        image: `${TILES}/process-10-air-scrubbers.png`,
        tasks: ['Continuous monitoring', 'Particle counting', 'HVAC evaluation'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Report & Recommendations',
        image: `${TILES}/process-31-insurance-documentation.png`,
        tasks: ['Detailed IAQ report', 'Remediation plan', 'Follow-up testing'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  },

  'environmental-testing': {
    sectionTitle: 'Our Environmental Testing Process',
    steps: [
      {
        title: 'Site Assessment',
        image: `${TILES}/process-03-initial-assessment.png`,
        tasks: ['Building age analysis', 'Material identification', 'Testing scope'],
        color: 'bg-blue-50 text-blue-700'
      },
      {
        title: 'Sample Collection',
        image: `${TILES}/process-39-Asbestos:Lead-Testing.png`,
        tasks: ['Asbestos sampling', 'Lead paint testing', 'Chain of custody'],
        color: 'bg-indigo-50 text-indigo-700'
      },
      {
        title: 'Laboratory Analysis',
        image: `${TILES}/process-40-water-quality-testing.png`,
        tasks: ['NVLAP/AIHA certified labs', 'PLM/TEM analysis', 'Results interpretation'],
        color: 'bg-purple-50 text-purple-700'
      },
      {
        title: 'Compliance Report',
        image: `${TILES}/process-31-insurance-documentation.png`,
        tasks: ['Regulatory compliance', 'Abatement recommendations', 'Documentation package'],
        color: 'bg-green-50 text-green-700'
      }
    ]
  }
};

// Helper to get process map by service slug
export function getProcessMapBySlug(fullSlug: string): ServiceProcessMap | null {
  // Extract the last segment of the slug (e.g., 'water-damage-restoration' from '/services/residential/restoration-services/water-damage-restoration/')
  const segments = fullSlug.split('/').filter(Boolean);
  const serviceKey = segments[segments.length - 1];

  return serviceProcessMaps[serviceKey] || null;
}

// Export list of tiles needed that don't exist yet
export const missingTiles = [
  // Currently all services have mapped tiles
  // Add any needed tiles here as we expand
];
