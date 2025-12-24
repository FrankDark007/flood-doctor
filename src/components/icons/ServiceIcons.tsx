import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

// Water Damage Icon
export const WaterDamageIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path
      d="M24 4L12 20C9.5 24 8 28.5 8 32C8 40.84 15.16 48 24 48C32.84 48 40 40.84 40 32C40 28.5 38.5 24 36 20L24 4Z"
      fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`}
    />
    <path
      d="M24 4L12 20C9.5 24 8 28.5 8 32C8 40.84 15.16 48 24 48C32.84 48 40 40.84 40 32C40 28.5 38.5 24 36 20L24 4Z"
      stroke={color === 'currentColor' ? '#1a73e8' : color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 32C16 36.42 19.58 40 24 40"
      stroke={color === 'currentColor' ? '#1a73e8' : color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Flood Cleanup Icon
export const FloodCleanupIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="6" y="20" width="36" height="24" rx="3" fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`} />
    <rect x="6" y="20" width="36" height="24" rx="3" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <path d="M6 32C12 28 18 36 24 32C30 28 36 36 42 32" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 4V16M24 8V16M30 4V16" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Mold Remediation Icon
export const MoldIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" fill={color === 'currentColor' ? '#e8f5e9' : `${color}20`} />
    <circle cx="24" cy="24" r="18" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="2.5" />
    <circle cx="18" cy="20" r="4" fill={color === 'currentColor' ? '#34a853' : color} />
    <circle cx="30" cy="18" r="3" fill={color === 'currentColor' ? '#34a853' : color} />
    <circle cx="26" cy="30" r="5" fill={color === 'currentColor' ? '#34a853' : color} />
    <circle cx="16" cy="32" r="2.5" fill={color === 'currentColor' ? '#34a853' : color} />
    <path d="M32 28L36 32M16 14L14 10M34 14L38 10" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Fire & Smoke Icon
export const FireSmokeIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path
      d="M24 4C24 4 28 12 28 18C28 22 26 24 24 24C22 24 20 22 20 18C20 14 24 4 24 4Z"
      fill={color === 'currentColor' ? '#ffccbc' : `${color}30`}
    />
    <path
      d="M16 16C16 16 22 22 22 30C22 36 18 42 24 44C30 46 34 40 34 32C34 24 28 18 32 12"
      stroke={color === 'currentColor' ? '#ea4335' : color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 28C12 28 16 32 16 38C16 42 20 46 24 44"
      stroke={color === 'currentColor' ? '#fbbc04' : color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M36 28C36 28 32 32 32 38C32 42 28 46 24 44"
      stroke={color === 'currentColor' ? '#fbbc04' : color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

// Sewage Cleanup Icon
export const SewageIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <ellipse cx="24" cy="36" rx="16" ry="8" fill={color === 'currentColor' ? '#fce4ec' : `${color}20`} />
    <ellipse cx="24" cy="36" rx="16" ry="8" stroke={color === 'currentColor' ? '#7b1fa2' : color} strokeWidth="2.5" />
    <path d="M24 8V28" stroke={color === 'currentColor' ? '#7b1fa2' : color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 14L24 8L30 14" stroke={color === 'currentColor' ? '#7b1fa2' : color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="34" r="2" fill={color === 'currentColor' ? '#7b1fa2' : color} />
    <circle cx="32" cy="38" r="2" fill={color === 'currentColor' ? '#7b1fa2' : color} />
    <circle cx="26" cy="36" r="1.5" fill={color === 'currentColor' ? '#7b1fa2' : color} />
  </svg>
);

// Structural Drying Icon
export const DryingIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="8" width="32" height="32" rx="4" fill={color === 'currentColor' ? '#fff3e0' : `${color}20`} />
    <rect x="8" y="8" width="32" height="32" rx="4" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" />
    <path d="M16 24H32" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 18H28" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 30H28" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M36 16L42 16M36 24L44 24M36 32L42 32" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
  </svg>
);

// Emergency Response Icon
export const EmergencyIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" fill={color === 'currentColor' ? '#ffebee' : `${color}20`} />
    <circle cx="24" cy="24" r="18" stroke={color === 'currentColor' ? '#ea4335' : color} strokeWidth="2.5" />
    <path d="M24 14V26" stroke={color === 'currentColor' ? '#ea4335' : color} strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="32" r="2" fill={color === 'currentColor' ? '#ea4335' : color} />
  </svg>
);

// Basement Flooding Icon
export const BasementIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M8 20L24 8L40 20V40C40 42.21 38.21 44 36 44H12C9.79 44 8 42.21 8 40V20Z" fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`} />
    <path d="M8 20L24 8L40 20V40C40 42.21 38.21 44 36 44H12C9.79 44 8 42.21 8 40V20Z" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M8 32H40" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <path d="M8 38C14 34 20 42 26 38C32 34 38 42 40 38" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Burst Pipe Icon
export const BurstPipeIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M8 16H40" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="4" strokeLinecap="round" />
    <path d="M16 16V40" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="4" strokeLinecap="round" />
    <ellipse cx="28" cy="16" rx="4" ry="2" fill={color === 'currentColor' ? '#ea4335' : color} />
    <path d="M28 18L26 28M28 18L30 28M28 18L28 30" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
    <path d="M24 32C24 34 22 36 22 38" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
    <path d="M32 30C32 32 34 34 34 36" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Roof Leak Icon
export const RoofLeakIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M6 24L24 8L42 24" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 22V40H38V22" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="2.5" />
    <path d="M30 12L30 20L32 28" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
    <path d="M32 32L32 38" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4" />
  </svg>
);

// Storm Damage Icon
export const StormDamageIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M12 20C12 14.48 16.48 10 22 10C26.14 10 29.66 12.54 31.16 16.14C31.76 16.05 32.38 16 33 16C37.42 16 41 19.58 41 24C41 28.42 37.42 32 33 32H12C8.69 32 6 29.31 6 26C6 22.69 8.69 20 12 20Z" fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`} />
    <path d="M12 20C12 14.48 16.48 10 22 10C26.14 10 29.66 12.54 31.16 16.14C31.76 16.05 32.38 16 33 16C37.42 16 41 19.58 41 24C41 28.42 37.42 32 33 32H12C8.69 32 6 29.31 6 26C6 22.69 8.69 20 12 20Z" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <path d="M16 36L14 44M24 36L22 44M32 36L30 44" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
    <path d="M26 24L22 28H28L24 32" stroke={color === 'currentColor' ? '#fbbc04' : color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Odor Removal Icon
export const OdorRemovalIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="28" r="14" fill={color === 'currentColor' ? '#e8f5e9' : `${color}20`} />
    <circle cx="24" cy="28" r="14" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="2.5" />
    <path d="M18 6C18 6 20 10 20 14" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M24 4C24 4 24 8 24 12" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M30 6C30 6 28 10 28 14" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    <path d="M20 28L24 24L28 28" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 24V34" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Contents Packout Icon
export const ContentsPackoutIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="8" y="16" width="32" height="28" rx="2" fill={color === 'currentColor' ? '#fff3e0' : `${color}20`} />
    <rect x="8" y="16" width="32" height="28" rx="2" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" />
    <path d="M8 24H40" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" />
    <path d="M20 16V4H28V16" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" />
    <path d="M24 20V24" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 32H32M16 38H28" stroke={color === 'currentColor' ? '#f57c00' : color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Commercial Building Icon
export const CommercialIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="6" y="12" width="24" height="32" rx="2" fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`} />
    <rect x="6" y="12" width="24" height="32" rx="2" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <rect x="26" y="24" width="16" height="20" rx="2" fill={color === 'currentColor' ? '#e8f0fe' : `${color}15`} />
    <rect x="26" y="24" width="16" height="20" rx="2" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <path d="M12 20H18M12 28H18M12 36H18" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
    <path d="M32 32H36M32 38H36" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Residential Home Icon
export const ResidentialIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M6 22L24 6L42 22V42C42 43.1 41.1 44 40 44H8C6.9 44 6 43.1 6 42V22Z" fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`} />
    <path d="M6 22L24 6L42 22V42C42 43.1 41.1 44 40 44H8C6.9 44 6 43.1 6 42V22Z" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="18" y="28" width="12" height="16" rx="1" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" />
    <circle cx="27" cy="36" r="1.5" fill={color === 'currentColor' ? '#1a73e8' : color} />
  </svg>
);

// 24/7 Clock Icon
export const Clock24Icon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="18" fill={color === 'currentColor' ? '#e8f0fe' : `${color}20`} />
    <circle cx="24" cy="24" r="18" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <path d="M24 12V24L32 28" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="24" y="42" textAnchor="middle" fill={color === 'currentColor' ? '#1a73e8' : color} fontSize="8" fontWeight="600">24/7</text>
  </svg>
);

// Certified Badge Icon
export const CertifiedIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 4L30 10H38L44 16V24L38 30V38L30 44H24H18L12 38V30L6 24V16L12 10H20L24 4Z" fill={color === 'currentColor' ? '#e8f5e9' : `${color}20`} />
    <path d="M24 4L30 10H38L44 16V24L38 30V38L30 44H24H18L12 38V30L6 24V16L12 10H20L24 4Z" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 24L22 30L32 18" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Insurance Icon
export const InsuranceIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <path d="M24 4L8 12V22C8 33.05 14.84 43.22 24 46C33.16 43.22 40 33.05 40 22V12L24 4Z" fill={color === 'currentColor' ? '#e8f0fe' : `${color}20`} />
    <path d="M24 4L8 12V22C8 33.05 14.84 43.22 24 46C33.16 43.22 40 33.05 40 22V12L24 4Z" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M16 24L22 30L32 18" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Technology/Dashboard Icon
export const TechnologyIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="4" y="8" width="40" height="28" rx="3" fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`} />
    <rect x="4" y="8" width="40" height="28" rx="3" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <path d="M18 44H30M24 36V44" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M12 18H20V28H12V18Z" stroke={color === 'currentColor' ? '#34a853' : color} strokeWidth="2" />
    <path d="M24 18H36M24 24H32M24 30H36" stroke={color === 'currentColor' ? '#5f6368' : color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Moisture Meter Icon
export const MoistureMeterIcon: React.FC<IconProps> = ({ size = 24, className = '', color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <rect x="12" y="4" width="24" height="40" rx="4" fill={color === 'currentColor' ? '#e3f2fd' : `${color}20`} />
    <rect x="12" y="4" width="24" height="40" rx="4" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2.5" />
    <circle cx="24" cy="20" r="8" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" />
    <path d="M24 14V20L28 22" stroke={color === 'currentColor' ? '#1a73e8' : color} strokeWidth="2" strokeLinecap="round" />
    <rect x="18" y="32" width="12" height="4" rx="1" fill={color === 'currentColor' ? '#34a853' : color} />
    <rect x="18" y="38" width="8" height="2" rx="1" fill={color === 'currentColor' ? '#5f6368' : color} />
  </svg>
);

export default {
  WaterDamageIcon,
  FloodCleanupIcon,
  MoldIcon,
  FireSmokeIcon,
  SewageIcon,
  DryingIcon,
  EmergencyIcon,
  BasementIcon,
  BurstPipeIcon,
  RoofLeakIcon,
  StormDamageIcon,
  OdorRemovalIcon,
  ContentsPackoutIcon,
  CommercialIcon,
  ResidentialIcon,
  Clock24Icon,
  CertifiedIcon,
  InsuranceIcon,
  TechnologyIcon,
  MoistureMeterIcon,
};
