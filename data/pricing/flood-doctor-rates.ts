/**
 * Flood Doctor Pricing Data — Xactimate-based Rate Sheet
 *
 * This module is the single source of truth for all pricing used in the
 * Cost Calculator and any future pricing-dependent features.
 *
 * To update rates:
 *   1. Edit the values in `currentPricing` below
 *   2. Bump `version` (YYYY-MM format)
 *   3. Update `lastUpdated` to today's ISO date
 *   4. Run `npm run build` to verify no breakage
 *   5. Commit with message: "Update Flood Doctor pricing to vYYYY-MM"
 */

// ── Interfaces ──────────────────────────────────────────────────────────────

export interface EquipmentRates {
  airMoverStandard: number;     // Standard drying fan per day
  airMoverAxial: number;        // Axial fan per day
  dehumidifierMedium: number;   // Medium commercial DH per day
  dehumidifierLarge: number;    // Large commercial DH per day
  dehumidifierXLarge: number;   // XLarge LGR per day
  airScrubber500: number;       // 500 CFM HEPA scrubber per day
  airScrubber2000: number;      // 2000 CFM HEPA scrubber per day
  negativeAir: number;          // Negative air machine per day
  desiccant1000: number;        // Desiccant DH 1000 CFM per day
  desiccant3000: number;        // Desiccant DH 3000 CFM per day
}

export interface LaborRates {
  skilledTechDay: number;
  skilledTechNight: number;
  skilledTechWeekend: number;
  skilledTechHoliday: number;
  certifiedTechDay: number;
  certifiedTechNight: number;
  extractionTech: number;
  equipmentMonitoring: number;
  equipmentMonitoringAfter: number;
  projectManager: number;       // Residential supervision
  projectManagerAfter: number;
  plumber: number;
  electrician: number;
}

export interface PerSqFtRates {
  extractionCat1: number;       // Clean water extraction
  extractionCat2: number;       // Gray water extraction
  extractionCat2Heavy: number;  // Heavy gray water
  extractionCat3: number;       // Black water extraction
  antimicrobial: number;        // Antimicrobial application
  tearOutCarpet: number;        // Non-salvageable carpet removal
  tearOutPad: number;           // Carpet pad removal
  tearOutDrywall: number;       // Wet drywall removal
  tearOutInsulation: number;    // Wet insulation removal
  tearOutFlooring: number;      // Floating floor removal
  tearOutTile: number;          // Tile removal
  tearOutHardwood: number;      // Hardwood removal
  containment: number;          // Containment barrier
  hepaVacLight: number;         // Light HEPA vacuum
  hepaVacDetailed: number;      // Detailed HEPA vacuum
  protectPlastic: number;       // Plastic protection
  finalCleaning: number;        // Final cleaning
}

export interface FixedCosts {
  emergencyServiceCall: number;
  thermalImaging: number;
  matterportScan: number;
  digitizedSketch: number;
  blockAndPadRoom: number;
  equipmentDecon: number;       // Per piece for Cat 2/3
}

export interface PerLinearFtRates {
  baseboardDetach: number;
  baseboardTearOut: number;
  drywallFloodCut2ft: number;
  tacklessTearOut: number;
  trimTearOut: number;
}

export interface FloodDoctorPricing {
  version: string;              // YYYY-MM format
  lastUpdated: string;          // ISO date string
  source: string;               // Origin of pricing data
  equipment: EquipmentRates;
  labor: LaborRates;
  perSqFt: PerSqFtRates;
  fixed: FixedCosts;
  perLF: PerLinearFtRates;
}

// ── Current Pricing Data ────────────────────────────────────────────────────

export const currentPricing: FloodDoctorPricing = {
  version: '2026-01',
  lastUpdated: '2026-01-01',
  source: 'Xactimate-based Flood Doctor price list',

  equipment: {
    airMoverStandard: 42.00,
    airMoverAxial: 58.08,
    dehumidifierMedium: 92.75,
    dehumidifierLarge: 129.50,
    dehumidifierXLarge: 204.00,
    airScrubber500: 75.00,
    airScrubber2000: 150.00,
    negativeAir: 278.59,
    desiccant1000: 575.00,
    desiccant3000: 875.00,
  },

  labor: {
    skilledTechDay: 55.50,
    skilledTechNight: 89.50,
    skilledTechWeekend: 99.50,
    skilledTechHoliday: 124.50,
    certifiedTechDay: 74.50,
    certifiedTechNight: 94.50,
    extractionTech: 79.34,
    equipmentMonitoring: 79.34,
    equipmentMonitoringAfter: 119.13,
    projectManager: 74.50,
    projectManagerAfter: 125.00,
    plumber: 177.81,
    electrician: 147.15,
  },

  perSqFt: {
    extractionCat1: 0.35,
    extractionCat2: 0.49,
    extractionCat2Heavy: 1.15,
    extractionCat3: 0.85,
    antimicrobial: 0.56,
    tearOutCarpet: 1.76,
    tearOutPad: 1.67,
    tearOutDrywall: 1.32,
    tearOutInsulation: 1.47,
    tearOutFlooring: 3.91,
    tearOutTile: 4.16,
    tearOutHardwood: 12.34,
    containment: 1.23,
    hepaVacLight: 0.48,
    hepaVacDetailed: 0.96,
    protectPlastic: 0.54,
    finalCleaning: 0.36,
  },

  fixed: {
    emergencyServiceCall: 498.00,
    thermalImaging: 650.00,
    matterportScan: 1500.00,
    digitizedSketch: 750.00,
    blockAndPadRoom: 66.18,
    equipmentDecon: 46.50,
  },

  perLF: {
    baseboardDetach: 2.98,
    baseboardTearOut: 2.52,
    drywallFloodCut2ft: 5.04,
    tacklessTearOut: 2.91,
    trimTearOut: 1.24,
  },
};
