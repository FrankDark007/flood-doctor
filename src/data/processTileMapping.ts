/**
 * Process Tile Mapping - Maps service IDs to their process step tiles
 *
 * Each service has a curated sequence of process tiles that visually represent
 * the restoration process specific to that service type.
 */

export interface ProcessStep {
  tile: string;      // Filename in /images/process-tiles/
  title: string;     // Step title
  description: string; // Brief description
}

export interface ServiceProcessMapping {
  serviceId: string;
  steps: ProcessStep[];
}

// Tile filename constants for consistency
const TILES = {
  // Emergency & Assessment
  EMERGENCY_DISPATCH: 'process-01-emergency-dispatch.png',
  INITIAL_ASSESSMENT: 'process-03-initial-assessment.png',
  MOISTURE_MAPPING: 'process-04-moisture-mapping.png',

  // Extraction & Containment
  WATER_EXTRACTION: 'process-05-water-extraction.png',
  CONTAINMENT_SETUP: 'process-06-containment-setup.png',

  // Demolition & Removal
  DEMOLITION_REMOVAL: 'process-07-demolition-removal.png',
  FLOORING_REMOVAL: 'process-18-flooring-removal.png',
  DRYWALL_REMOVAL: 'process-19-drywall-removal.png',

  // Drying & Air Quality
  AIR_MOVERS: 'process-08-air-movers.png',
  DEHUMIDIFIERS: 'process-09-dehumidifiers.png',
  AIR_SCRUBBERS: 'process-10-air-scrubbers.png',
  STRUCTURAL_DRYING: 'process-14-structural-drying.png',

  // Mold Services
  MOLD_INSPECTION: 'Process-11-mold-inspection.png',
  MOLD_REMEDIATION: 'process-12-mold-remediation.png',

  // Sanitization & Treatment
  ANTIMICROBIAL: 'process-13-antimicrobial-treatment.png',
  SANITIZATION: 'process-21-sanitization.png',
  ODOR_REMOVAL: 'process-22-odor-removal.png',
  THERMAL_FOGGING: 'process-37-thermal-fogging.png',

  // Contents & Pack-out
  CONTENTS_PACKOUT: 'process-15-contents-packout.png',
  DOCUMENT_DRYING: 'process-16-document-drying.png',
  ELECTRONICS: 'process-17-electronics-assessment.png',
  CONTENTS_MOVEBACK: 'process-32-contents-moveback.png',

  // HVAC & Technical
  HVAC_CLEANING: 'process-20-hvac-cleaning.png',
  AIR_SAMPLING: 'process-38-air-sampling.png',
  WATER_QUALITY_TESTING: 'process-40-water-quality-testing.png',

  // Reconstruction
  RECONSTRUCTION_PLANNING: 'process-23-reconstruction-planning.png',
  INSULATION_REPLACEMENT: 'process-24-insulation-replacement.png',
  DRYWALL_INSTALLATION: 'process-25-drywall-installation.png',
  DRYWALL_FINISHING: 'process-26-drywall-finishing.png',
  PAINTING: 'process-27-painting.png',
  FLOORING_INSTALLATION: 'process-28-flooring-installation.png',
  TRIM_INSTALLATION: 'process-29-trim-installation.png',

  // Final Steps
  FINAL_INSPECTION: 'process-30-final-inspection.png',
  INSURANCE_DOCS: 'process-31-insurance-documentation.png',

  // Fire & Smoke
  FIRE_INSPECTION: 'process-33-fire-inspection.png',
  SOOT_CLEANING: 'Process-36-Soot-Cleaning.png',
  GENERAL_CLEANING: 'process-35-general-cleaning.png',

  // Specialty
  HARDWOOD_DRYING: 'process-41-Hardwood-drying.png',
  CRAWL_SPACE: 'process-42-Crawl-Space.png',
  RESIDENTIAL_SAFETY: 'process-44-Residential-Safety.png',
  COMMERCIAL_SAFETY: 'process-45-Commercial-Safety.png',
  PROJECT_COORDINATION: 'process-46-project-coordination.png',

  // Exterior
  FLOOD_INTRUSION: 'process-34-flood-water-intrusion-exterior.png',
  RESTORATION_COMPLETE: 'process-33-restoration-complete-exterior.png',
} as const;

/**
 * Service-specific process tile mappings
 */
export const PROCESS_TILE_MAPPINGS: Record<string, ProcessStep[]> = {
  // =====================
  // RESIDENTIAL SERVICES
  // =====================

  // Water Damage Restoration
  'res-water': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Our team dispatches within 60 minutes of your call, 24/7.' },
    { tile: TILES.INITIAL_ASSESSMENT, title: 'Damage Assessment', description: 'Thermal imaging and moisture meters identify all affected areas.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'Truck-mounted pumps remove standing water rapidly.' },
    { tile: TILES.DEMOLITION_REMOVAL, title: 'Material Removal', description: 'Unsalvageable drywall and materials are carefully removed.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Structural Drying', description: 'Commercial dehumidifiers and air movers dry the structure.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Verification', description: 'Moisture readings confirm complete drying before restoration.' },
  ],

  // Mold Remediation
  'res-mold': [
    { tile: TILES.MOLD_INSPECTION, title: 'Mold Inspection', description: 'Identify mold type, extent, and moisture source.' },
    { tile: TILES.CONTAINMENT_SETUP, title: 'Containment', description: 'Negative air containment prevents spore spread.' },
    { tile: TILES.AIR_SCRUBBERS, title: 'Air Filtration', description: 'HEPA air scrubbers capture airborne spores.' },
    { tile: TILES.MOLD_REMEDIATION, title: 'Mold Removal', description: 'Safe removal of mold-affected materials.' },
    { tile: TILES.ANTIMICROBIAL, title: 'Antimicrobial Treatment', description: 'EPA-registered antimicrobials prevent regrowth.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Clearance Testing', description: 'Third-party testing verifies successful remediation.' },
  ],

  // Fire & Smoke Cleanup
  'res-fire': [
    { tile: TILES.FIRE_INSPECTION, title: 'Damage Assessment', description: 'Evaluate fire, smoke, and water damage extent.' },
    { tile: TILES.RESIDENTIAL_SAFETY, title: 'Safety & Board-Up', description: 'Secure the property and establish safe work zones.' },
    { tile: TILES.SOOT_CLEANING, title: 'Soot Removal', description: 'Specialized cleaning removes acidic soot residue.' },
    { tile: TILES.CONTENTS_PACKOUT, title: 'Contents Pack-Out', description: 'Salvageable items cleaned and stored off-site.' },
    { tile: TILES.THERMAL_FOGGING, title: 'Odor Treatment', description: 'Thermal fogging eliminates smoke odors.' },
    { tile: TILES.RECONSTRUCTION_PLANNING, title: 'Reconstruction', description: 'Full restoration to pre-loss condition.' },
  ],

  // Odor Removal
  'res-odor': [
    { tile: TILES.INITIAL_ASSESSMENT, title: 'Source Identification', description: 'UV lights and sensors locate odor sources.' },
    { tile: TILES.DEMOLITION_REMOVAL, title: 'Source Removal', description: 'Physical removal of contaminated materials.' },
    { tile: TILES.GENERAL_CLEANING, title: 'Deep Cleaning', description: 'Detailed cleaning of affected surfaces.' },
    { tile: TILES.THERMAL_FOGGING, title: 'Thermal Fogging', description: 'Penetrating fog neutralizes embedded odors.' },
    { tile: TILES.AIR_SCRUBBERS, title: 'Air Purification', description: 'HEPA and charcoal filtration polish the air.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Verification', description: 'Final walkthrough confirms odor elimination.' },
  ],

  // Contents Cleaning & Pack-out
  'res-content': [
    { tile: TILES.INITIAL_ASSESSMENT, title: 'Inventory Assessment', description: 'Digital documentation of all items for insurance.' },
    { tile: TILES.CONTENTS_PACKOUT, title: 'Professional Pack-Out', description: 'Careful packing and transport to our facility.' },
    { tile: TILES.ELECTRONICS, title: 'Electronics Cleaning', description: 'Specialized ultrasonic cleaning for electronics.' },
    { tile: TILES.DOCUMENT_DRYING, title: 'Document Recovery', description: 'Freeze-drying and restoration of documents.' },
    { tile: TILES.GENERAL_CLEANING, title: 'Contents Cleaning', description: 'Professional cleaning of furniture and belongings.' },
    { tile: TILES.CONTENTS_MOVEBACK, title: 'Pack-Back', description: 'Return and placement of restored items.' },
  ],

  // Basement Flooding
  'res-base': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Rapid dispatch with submersible pumps.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'High-capacity pumps remove standing water.' },
    { tile: TILES.MOISTURE_MAPPING, title: 'Moisture Assessment', description: 'Map moisture in concrete and walls.' },
    { tile: TILES.DEMOLITION_REMOVAL, title: 'Material Removal', description: 'Remove saturated drywall and flooring.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Structural Drying', description: 'Commercial drying for concrete and framing.' },
    { tile: TILES.ANTIMICROBIAL, title: 'Sanitization', description: 'Antimicrobial treatment prevents mold growth.' },
  ],

  // Crawl Space Drying
  'res-crawl': [
    { tile: TILES.INITIAL_ASSESSMENT, title: 'Crawl Space Inspection', description: 'Assess moisture, damage, and contamination.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Removal', description: 'Extract standing water and saturated soil.' },
    { tile: TILES.CRAWL_SPACE, title: 'Debris & Insulation Removal', description: 'Remove wet insulation and debris.' },
    { tile: TILES.ANTIMICROBIAL, title: 'Antimicrobial Treatment', description: 'Treat wood and soil for mold prevention.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Structural Drying', description: 'Low-profile equipment dries the space.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Moisture Verification', description: 'Confirm wood moisture at safe levels.' },
  ],

  // Hardwood Floor Restoration
  'res-floor': [
    { tile: TILES.INITIAL_ASSESSMENT, title: 'Damage Assessment', description: 'Evaluate cupping, warping, and moisture levels.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'Extract water from surface and seams.' },
    { tile: TILES.HARDWOOD_DRYING, title: 'Floor Drying System', description: 'Specialty mats draw moisture from wood.' },
    { tile: TILES.AIR_MOVERS, title: 'Controlled Drying', description: 'Gradual drying prevents cracking and gaps.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Moisture Verification', description: 'Pin meters confirm optimal moisture content.' },
    { tile: TILES.FLOORING_INSTALLATION, title: 'Refinishing', description: 'Sand and refinish if needed to restore beauty.' },
  ],

  // Roof Leak Emergency
  'res-roof': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Rapid response to stop water intrusion.' },
    { tile: TILES.FLOOD_INTRUSION, title: 'Emergency Tarping', description: 'Secure the roof to prevent further damage.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'Remove water from interior spaces.' },
    { tile: TILES.MOISTURE_MAPPING, title: 'Moisture Mapping', description: 'Identify all affected areas in ceiling and walls.' },
    { tile: TILES.STRUCTURAL_DRYING, title: 'Structural Drying', description: 'Dry ceiling, attic, and wall cavities.' },
    { tile: TILES.RECONSTRUCTION_PLANNING, title: 'Restoration', description: 'Repair ceiling, drywall, and roofing.' },
  ],

  // Flood Cleanup
  'res-flood': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: '24/7 response to flood emergencies.' },
    { tile: TILES.FLOOD_INTRUSION, title: 'Site Assessment', description: 'Evaluate flood water category and extent.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'Rapid removal of flood water.' },
    { tile: TILES.DEMOLITION_REMOVAL, title: 'Contaminated Removal', description: 'Remove flood-damaged materials.' },
    { tile: TILES.SANITIZATION, title: 'Sanitization', description: 'Disinfect all surfaces from contamination.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Drying & Restoration', description: 'Complete drying and reconstruction.' },
  ],

  // Sewage Cleanup
  'res-sewage': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Immediate response to sewage backups.' },
    { tile: TILES.RESIDENTIAL_SAFETY, title: 'Safety Containment', description: 'Establish safety zone and PPE protocols.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Sewage Extraction', description: 'Remove contaminated water and solids.' },
    { tile: TILES.DEMOLITION_REMOVAL, title: 'Material Removal', description: 'Remove all porous contaminated materials.' },
    { tile: TILES.SANITIZATION, title: 'Sanitization', description: 'EPA-registered disinfectants eliminate pathogens.' },
    { tile: TILES.ANTIMICROBIAL, title: 'Antimicrobial Treatment', description: 'Prevent bacterial and mold growth.' },
  ],

  // Structural Drying
  'res-struct': [
    { tile: TILES.MOISTURE_MAPPING, title: 'Moisture Mapping', description: 'Comprehensive moisture assessment of structure.' },
    { tile: TILES.CONTAINMENT_SETUP, title: 'Drying Zone Setup', description: 'Configure optimal drying environment.' },
    { tile: TILES.AIR_MOVERS, title: 'Air Movement', description: 'Strategic placement of high-velocity air movers.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Dehumidification', description: 'LGR dehumidifiers remove airborne moisture.' },
    { tile: TILES.STRUCTURAL_DRYING, title: 'Daily Monitoring', description: 'Track drying progress with daily readings.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Drying Verification', description: 'Confirm structure meets dry standards.' },
  ],

  // Storm Damage
  'res-storm': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Rapid response during and after storms.' },
    { tile: TILES.FLOOD_INTRUSION, title: 'Emergency Boarding', description: 'Secure openings and prevent further damage.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Removal', description: 'Extract rain and flood water.' },
    { tile: TILES.MOISTURE_MAPPING, title: 'Damage Assessment', description: 'Document all storm-related damage.' },
    { tile: TILES.STRUCTURAL_DRYING, title: 'Structural Drying', description: 'Dry affected areas thoroughly.' },
    { tile: TILES.INSURANCE_DOCS, title: 'Insurance Documentation', description: 'Complete documentation for claims.' },
  ],

  // Burst Pipe Cleanup
  'res-burst': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Immediate response to stop water damage.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'Rapid extraction of pipe-burst water.' },
    { tile: TILES.MOISTURE_MAPPING, title: 'Moisture Detection', description: 'Thermal imaging finds hidden moisture.' },
    { tile: TILES.AIR_MOVERS, title: 'Drying Setup', description: 'Air movers and dehumidifiers placed strategically.' },
    { tile: TILES.DEMOLITION_REMOVAL, title: 'Wet Material Removal', description: 'Remove saturated drywall and insulation.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Verification', description: 'Confirm complete drying before repairs.' },
  ],

  // =====================
  // COMMERCIAL SERVICES
  // =====================

  // Commercial Water Damage
  'com-water': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: '24/7 commercial water damage response.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Site Safety', description: 'Establish safety zones and protocols.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'Industrial extraction equipment deployed.' },
    { tile: TILES.MOISTURE_MAPPING, title: 'Moisture Mapping', description: 'Comprehensive commercial moisture assessment.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Commercial Drying', description: 'High-capacity drying equipment.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Project Management', description: 'Minimize business interruption.' },
  ],

  // Commercial Flood Response
  'com-flood': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Mobilization', description: 'Large-scale flood response team deployed.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Safety & Access', description: 'Secure site and establish safe zones.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'High-volume pumping and extraction.' },
    { tile: TILES.SANITIZATION, title: 'Sanitization', description: 'Commercial-grade disinfection protocols.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Structural Drying', description: 'Rapid drying to resume operations.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Business Continuity', description: 'Coordinate with your team to minimize downtime.' },
  ],

  // Large Loss Response
  'com-large': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Rapid Mobilization', description: 'Large-scale disaster response team.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Site Command', description: 'Establish incident command structure.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Resource Coordination', description: 'Multiple crews and equipment staged.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Mass Extraction', description: 'High-volume water removal operations.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Industrial Drying', description: 'Hundreds of drying units deployed.' },
    { tile: TILES.INSURANCE_DOCS, title: 'Documentation', description: 'Comprehensive loss documentation.' },
  ],

  // Commercial Sewage
  'com-sewage': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Immediate commercial sewage response.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Safety Containment', description: 'OSHA-compliant safety protocols.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Sewage Extraction', description: 'Industrial sewage removal.' },
    { tile: TILES.DEMOLITION_REMOVAL, title: 'Material Removal', description: 'Remove contaminated materials.' },
    { tile: TILES.SANITIZATION, title: 'Disinfection', description: 'Hospital-grade disinfection protocols.' },
    { tile: TILES.AIR_SAMPLING, title: 'Clearance Testing', description: 'Air and surface testing for safety.' },
  ],

  // Commercial Mold
  'com-mold': [
    { tile: TILES.MOLD_INSPECTION, title: 'Mold Assessment', description: 'Commercial mold inspection and testing.' },
    { tile: TILES.AIR_SAMPLING, title: 'Air Sampling', description: 'Baseline air quality testing.' },
    { tile: TILES.CONTAINMENT_SETUP, title: 'Containment', description: 'Large-scale negative air containment.' },
    { tile: TILES.MOLD_REMEDIATION, title: 'Mold Remediation', description: 'Safe removal of mold contamination.' },
    { tile: TILES.ANTIMICROBIAL, title: 'Treatment', description: 'Commercial antimicrobial application.' },
    { tile: TILES.AIR_SAMPLING, title: 'Clearance Testing', description: 'Post-remediation verification testing.' },
  ],

  // Commercial Fire
  'com-fire': [
    { tile: TILES.FIRE_INSPECTION, title: 'Damage Assessment', description: 'Comprehensive fire damage evaluation.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Board-Up & Security', description: 'Secure the facility immediately.' },
    { tile: TILES.SOOT_CLEANING, title: 'Soot Removal', description: 'Industrial soot and smoke cleaning.' },
    { tile: TILES.CONTENTS_PACKOUT, title: 'Contents Management', description: 'Inventory and salvage operations.' },
    { tile: TILES.THERMAL_FOGGING, title: 'Odor Elimination', description: 'Commercial odor treatment.' },
    { tile: TILES.RECONSTRUCTION_PLANNING, title: 'Reconstruction', description: 'Full commercial restoration.' },
  ],

  // Moisture Control
  'com-moist': [
    { tile: TILES.MOISTURE_MAPPING, title: 'Moisture Analysis', description: 'Comprehensive moisture assessment.' },
    { tile: TILES.AIR_SAMPLING, title: 'Environmental Testing', description: 'Humidity and air quality testing.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Dehumidification', description: 'Commercial dehumidification systems.' },
    { tile: TILES.AIR_MOVERS, title: 'Air Circulation', description: 'Improve airflow and ventilation.' },
    { tile: TILES.HVAC_CLEANING, title: 'HVAC Assessment', description: 'Evaluate and improve HVAC performance.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Ongoing Monitoring', description: 'Long-term moisture management.' },
  ],

  // Air Quality Services
  'com-air': [
    { tile: TILES.AIR_SAMPLING, title: 'Air Quality Testing', description: 'Comprehensive IAQ assessment.' },
    { tile: TILES.HVAC_CLEANING, title: 'HVAC Inspection', description: 'Ductwork and system evaluation.' },
    { tile: TILES.AIR_SCRUBBERS, title: 'Air Filtration', description: 'HEPA air scrubbing deployment.' },
    { tile: TILES.ANTIMICROBIAL, title: 'Duct Treatment', description: 'Antimicrobial duct cleaning.' },
    { tile: TILES.AIR_SAMPLING, title: 'Post-Treatment Testing', description: 'Verify air quality improvement.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Recommendations', description: 'Long-term IAQ improvement plan.' },
  ],

  // Environmental Assessment
  'com-env': [
    { tile: TILES.INITIAL_ASSESSMENT, title: 'Site Assessment', description: 'Comprehensive environmental evaluation.' },
    { tile: TILES.AIR_SAMPLING, title: 'Air Testing', description: 'Indoor air quality sampling.' },
    { tile: TILES.WATER_QUALITY_TESTING, title: 'Water Testing', description: 'Water quality analysis.' },
    { tile: TILES.MOLD_INSPECTION, title: 'Mold Inspection', description: 'Visual and sampling for mold.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Analysis & Report', description: 'Detailed findings and recommendations.' },
    { tile: TILES.FINAL_INSPECTION, title: 'Remediation Planning', description: 'Action plan for identified issues.' },
  ],

  // Healthcare Facilities
  'com-health': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Priority Response', description: 'Healthcare facility prioritized response.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Infection Control', description: 'Healthcare-specific safety protocols.' },
    { tile: TILES.CONTAINMENT_SETUP, title: 'Containment', description: 'Isolation of affected areas.' },
    { tile: TILES.SANITIZATION, title: 'Medical-Grade Disinfection', description: 'Hospital-standard sanitization.' },
    { tile: TILES.AIR_SCRUBBERS, title: 'Air Purification', description: 'HEPA filtration for clean air.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Compliance Documentation', description: 'Healthcare regulatory compliance.' },
  ],

  // Hospitality
  'com-hospitality': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Rapid Response', description: 'Minimize guest disruption.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Extraction', description: 'Quick extraction in guest areas.' },
    { tile: TILES.ODOR_REMOVAL, title: 'Odor Control', description: 'Eliminate odors discreetly.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Quiet Drying', description: 'Low-noise drying equipment.' },
    { tile: TILES.GENERAL_CLEANING, title: 'Detail Cleaning', description: 'Return rooms to guest-ready condition.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Room Coordination', description: 'Minimize revenue loss.' },
  ],

  // Municipal
  'com-muni': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Emergency Response', description: 'Government facility response.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Public Safety', description: 'Secure public access areas.' },
    { tile: TILES.WATER_EXTRACTION, title: 'Water Mitigation', description: 'Protect public assets.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Structural Drying', description: 'Dry municipal facilities.' },
    { tile: TILES.INSURANCE_DOCS, title: 'Documentation', description: 'Public record documentation.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Service Continuity', description: 'Restore public services quickly.' },
  ],

  // Industrial
  'com-ind': [
    { tile: TILES.EMERGENCY_DISPATCH, title: 'Industrial Response', description: 'Large-scale industrial capability.' },
    { tile: TILES.COMMERCIAL_SAFETY, title: 'Safety Protocols', description: 'Industrial safety compliance.' },
    { tile: TILES.WATER_EXTRACTION, title: 'High-Volume Extraction', description: 'Industrial extraction equipment.' },
    { tile: TILES.MOISTURE_MAPPING, title: 'Facility Assessment', description: 'Comprehensive moisture mapping.' },
    { tile: TILES.DEHUMIDIFIERS, title: 'Industrial Drying', description: 'High-capacity drying systems.' },
    { tile: TILES.PROJECT_COORDINATION, title: 'Production Coordination', description: 'Minimize production downtime.' },
  ],
};

/**
 * Get process steps for a given service ID
 */
export function getProcessSteps(serviceId: string): ProcessStep[] {
  return PROCESS_TILE_MAPPINGS[serviceId] || PROCESS_TILE_MAPPINGS['res-water'];
}

/**
 * Get the tile image path (original PNG)
 */
export function getTilePath(filename: string): string {
  return `/images/process-tiles/${filename}`;
}

/**
 * Get optimized WebP tile paths with srcset for responsive loading
 */
export function getOptimizedTilePaths(filename: string): {
  webp: string;
  srcSet: string;
  fallback: string;
} {
  const baseName = filename.replace(/\.(png|jpeg|jpg)$/i, '');
  const optimizedDir = '/images/process-tiles-optimized';
  const originalDir = '/images/process-tiles';

  return {
    webp: `${optimizedDir}/${baseName}.webp`,
    srcSet: `${optimizedDir}/${baseName}-320w.webp 320w, ${optimizedDir}/${baseName}-640w.webp 640w, ${optimizedDir}/${baseName}-960w.webp 960w`,
    fallback: `${originalDir}/${filename}`,
  };
}
