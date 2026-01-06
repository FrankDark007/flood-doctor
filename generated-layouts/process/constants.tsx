import { ClipboardCheck, Droplets, Wind, Hammer } from 'lucide-react';
import { StepData } from './types';

export const PROCESS_STEPS: StepData[] = [
  {
    id: 1,
    title: "Inspection",
    description: "Thermal imaging assessment, moisture mapping, and complete damage documentation to create a tailored restoration plan.",
    Icon: ClipboardCheck,
    duration: "1-4 Hours"
  },
  {
    id: 2,
    title: "Water Extraction",
    description: "Truck-mounted vacuums remove standing water within hours to prevent secondary damage and mold growth.",
    Icon: Droplets,
    duration: "Day 1"
  },
  {
    id: 3,
    title: "Structural Drying",
    description: "Industrial dehumidifiers and high-velocity air movers placed strategically to dry materials for 3-5 days.",
    Icon: Wind,
    duration: "3-5 Days"
  },
  {
    id: 4,
    title: "Restoration",
    description: "Repairs, reconstruction of drywall/flooring, and final walkthrough to ensure pre-loss condition.",
    Icon: Hammer,
    duration: "Day 5-7"
  }
];

export const THEME = {
  primary: '#1a73e8',
  radius: '24px',
};