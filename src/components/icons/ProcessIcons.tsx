import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

/**
 * Step 1: Call Icon
 * Phone with incoming signal
 */
export const CallIcon: React.FC<IconProps> = ({ size = 64, className = '', animated = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
    {/* Background circle */}
    <circle cx="32" cy="32" r="30" fill="#e8f0fe" />

    {/* Phone shape */}
    <path
      d="M26 18C24.9 18 24 18.9 24 20V44C24 45.1 24.9 46 26 46H38C39.1 46 40 45.1 40 44V20C40 18.9 39.1 18 38 18H26Z"
      fill="white"
      stroke="#1a73e8"
      strokeWidth="2"
    />
    <rect x="28" y="22" width="8" height="16" rx="1" fill="#f8f9fa" />
    <circle cx="32" cy="42" r="2" fill="#1a73e8" />

    {/* Signal waves */}
    {animated ? (
      <>
        <path d="M44 24C46 26 47 29 47 32C47 35 46 38 44 40" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" fill="none">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M48 20C51 23 53 27 53 32C53 37 51 41 48 44" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" fill="none">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
        </path>
      </>
    ) : (
      <>
        <path d="M44 24C46 26 47 29 47 32C47 35 46 38 44 40" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M48 20C51 23 53 27 53 32C53 37 51 41 48 44" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      </>
    )}
  </svg>
);

/**
 * Step 2: Dispatch Icon
 * Truck with motion lines
 */
export const DispatchIcon: React.FC<IconProps> = ({ size = 64, className = '', animated = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
    {/* Background circle */}
    <circle cx="32" cy="32" r="30" fill="#e8f0fe" />

    {/* Truck body */}
    <rect x="14" y="26" width="24" height="16" rx="2" fill="white" stroke="#1a73e8" strokeWidth="2" />
    <path d="M38 30H46C47.1 30 48 30.9 48 32V40C48 41.1 47.1 42 46 42H38V30Z" fill="white" stroke="#1a73e8" strokeWidth="2" />
    <rect x="42" y="32" width="4" height="4" rx="1" fill="#e8f0fe" />

    {/* Wheels */}
    <circle cx="22" cy="42" r="4" fill="#1a73e8" />
    <circle cx="22" cy="42" r="2" fill="white" />
    <circle cx="42" cy="42" r="4" fill="#1a73e8" />
    <circle cx="42" cy="42" r="2" fill="white" />

    {/* Motion lines */}
    {animated ? (
      <g>
        <line x1="10" y1="30" x2="6" y2="30" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="x1" values="10;8;10" dur="0.5s" repeatCount="indefinite" />
          <animate attributeName="x2" values="6;4;6" dur="0.5s" repeatCount="indefinite" />
        </line>
        <line x1="10" y1="34" x2="4" y2="34" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="x1" values="10;8;10" dur="0.5s" begin="0.1s" repeatCount="indefinite" />
          <animate attributeName="x2" values="4;2;4" dur="0.5s" begin="0.1s" repeatCount="indefinite" />
        </line>
        <line x1="10" y1="38" x2="6" y2="38" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="x1" values="10;8;10" dur="0.5s" begin="0.2s" repeatCount="indefinite" />
          <animate attributeName="x2" values="6;4;6" dur="0.5s" begin="0.2s" repeatCount="indefinite" />
        </line>
      </g>
    ) : (
      <g>
        <line x1="10" y1="30" x2="6" y2="30" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="34" x2="4" y2="34" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="38" x2="6" y2="38" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" />
      </g>
    )}
  </svg>
);

/**
 * Step 3: Assessment Icon
 * Clipboard with checkmarks
 */
export const AssessmentIcon: React.FC<IconProps> = ({ size = 64, className = '', animated = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
    {/* Background circle */}
    <circle cx="32" cy="32" r="30" fill="#e8f0fe" />

    {/* Clipboard */}
    <rect x="18" y="14" width="28" height="38" rx="3" fill="white" stroke="#1a73e8" strokeWidth="2" />
    <rect x="26" y="10" width="12" height="8" rx="2" fill="#1a73e8" />

    {/* Checklist items */}
    {animated ? (
      <>
        <g>
          <rect x="22" y="24" width="4" height="4" rx="1" fill="#34a853">
            <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" />
          </rect>
          <path d="M23 26L24 27L26 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" />
          </path>
          <line x1="30" y1="26" x2="42" y2="26" stroke="#5f6368" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" />
          </line>
        </g>
        <g>
          <rect x="22" y="32" width="4" height="4" rx="1" fill="#34a853">
            <animate attributeName="opacity" values="0;0;1;1" dur="2s" repeatCount="indefinite" />
          </rect>
          <path d="M23 34L24 35L26 33" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values="0;0;1;1" dur="2s" repeatCount="indefinite" />
          </path>
          <line x1="30" y1="34" x2="40" y2="34" stroke="#5f6368" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;0;1;1" dur="2s" repeatCount="indefinite" />
          </line>
        </g>
        <g>
          <rect x="22" y="40" width="4" height="4" rx="1" fill="#34a853">
            <animate attributeName="opacity" values="0;0;0;1" dur="2s" repeatCount="indefinite" />
          </rect>
          <path d="M23 42L24 43L26 41" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values="0;0;0;1" dur="2s" repeatCount="indefinite" />
          </path>
          <line x1="30" y1="42" x2="38" y2="42" stroke="#5f6368" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="opacity" values="0;0;0;1" dur="2s" repeatCount="indefinite" />
          </line>
        </g>
      </>
    ) : (
      <>
        <rect x="22" y="24" width="4" height="4" rx="1" fill="#34a853" />
        <path d="M23 26L24 27L26 25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="26" x2="42" y2="26" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" />

        <rect x="22" y="32" width="4" height="4" rx="1" fill="#34a853" />
        <path d="M23 34L24 35L26 33" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="34" x2="40" y2="34" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" />

        <rect x="22" y="40" width="4" height="4" rx="1" fill="#34a853" />
        <path d="M23 42L24 43L26 41" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="30" y1="42" x2="38" y2="42" stroke="#5f6368" strokeWidth="2" strokeLinecap="round" />
      </>
    )}
  </svg>
);

/**
 * Step 4: Restoration Icon
 * House with sparkle/clean effect
 */
export const RestorationIcon: React.FC<IconProps> = ({ size = 64, className = '', animated = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
    {/* Background circle */}
    <circle cx="32" cy="32" r="30" fill="#e8f5e9" />

    {/* House */}
    <path d="M12 30L32 14L52 30V50C52 51.1 51.1 52 50 52H14C12.9 52 12 51.1 12 50V30Z" fill="white" stroke="#34a853" strokeWidth="2" strokeLinejoin="round" />
    <rect x="26" y="36" width="12" height="16" rx="1" fill="#e8f5e9" stroke="#34a853" strokeWidth="2" />
    <circle cx="35" cy="44" r="1.5" fill="#34a853" />

    {/* Sparkles */}
    {animated ? (
      <>
        <g>
          <path d="M48 18L50 22L54 24L50 26L48 30L46 26L42 24L46 22L48 18Z" fill="#fbbc04">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="scale" values="0.8;1.2;0.8" dur="1.5s" repeatCount="indefinite" additive="sum" />
          </path>
        </g>
        <g>
          <path d="M18 12L19 14L21 15L19 16L18 18L17 16L15 15L17 14L18 12Z" fill="#fbbc04">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="scale" values="0.8;1.2;0.8" dur="1.5s" begin="0.5s" repeatCount="indefinite" additive="sum" />
          </path>
        </g>
        <g>
          <path d="M54 38L55 40L57 41L55 42L54 44L53 42L51 41L53 40L54 38Z" fill="#fbbc04">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="1s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="scale" values="0.8;1.2;0.8" dur="1.5s" begin="1s" repeatCount="indefinite" additive="sum" />
          </path>
        </g>
      </>
    ) : (
      <>
        <path d="M48 18L50 22L54 24L50 26L48 30L46 26L42 24L46 22L48 18Z" fill="#fbbc04" />
        <path d="M18 12L19 14L21 15L19 16L18 18L17 16L15 15L17 14L18 12Z" fill="#fbbc04" />
        <path d="M54 38L55 40L57 41L55 42L54 44L53 42L51 41L53 40L54 38Z" fill="#fbbc04" />
      </>
    )}
  </svg>
);

/**
 * Timer Icon
 * 60 minute countdown visual
 */
export const Timer60Icon: React.FC<IconProps> = ({ size = 64, className = '', animated = true }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" className={className}>
    {/* Background circle */}
    <circle cx="32" cy="34" r="26" fill="#e8f0fe" />
    <circle cx="32" cy="34" r="26" stroke="#1a73e8" strokeWidth="2" fill="none" />

    {/* Progress arc */}
    {animated ? (
      <circle
        cx="32"
        cy="34"
        r="22"
        stroke="#1a73e8"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="138.23"
        strokeDashoffset="138.23"
        transform="rotate(-90 32 34)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="138.23"
          to="0"
          dur="3s"
          fill="freeze"
        />
      </circle>
    ) : (
      <circle
        cx="32"
        cy="34"
        r="22"
        stroke="#1a73e8"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="138.23"
        strokeDashoffset="34.56"
        transform="rotate(-90 32 34)"
      />
    )}

    {/* Center text */}
    <text x="32" y="38" textAnchor="middle" fill="#1a73e8" fontSize="16" fontWeight="600">60</text>
    <text x="32" y="48" textAnchor="middle" fill="#5f6368" fontSize="8">MIN</text>

    {/* Top button */}
    <rect x="28" y="4" width="8" height="6" rx="2" fill="#1a73e8" />
  </svg>
);

export default {
  CallIcon,
  DispatchIcon,
  AssessmentIcon,
  RestorationIcon,
  Timer60Icon,
};
