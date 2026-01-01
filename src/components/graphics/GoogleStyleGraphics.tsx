import React from 'react';

/**
 * Google Material Design 3 Style Graphics
 * Based on Google's design language for business pages
 * Colors: #4285f4 (blue), #34a853 (green), #fbbc04 (yellow), #ea4335 (red)
 */

/**
 * Water Damage Assessment Dashboard
 * Similar style to Google Analytics/Search Console visualizations
 */
export const AssessmentDashboardGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 951 639" fill="none" className={className}>
    {/* Background */}
    <rect width="951" height="639" fill="white" />

    {/* Main dashboard card */}
    <rect x="120" y="60" width="711" height="480" rx="16" fill="#f8f9fa" />

    {/* Header bar */}
    <rect x="120" y="60" width="711" height="56" rx="16" fill="#f1f3f4" />
    <circle cx="152" cy="88" r="8" fill="#ea4335" />
    <circle cx="180" cy="88" r="8" fill="#fbbc04" />
    <circle cx="208" cy="88" r="8" fill="#34a853" />
    <rect x="240" y="80" width="200" height="16" rx="8" fill="#dadce0" />

    {/* Left sidebar */}
    <rect x="140" y="136" width="180" height="384" rx="12" fill="white" />
    <rect x="160" y="160" width="140" height="12" rx="6" fill="#4285f4" />
    <rect x="160" y="188" width="100" height="10" rx="5" fill="#e8eaed" />
    <rect x="160" y="212" width="120" height="10" rx="5" fill="#e8eaed" />
    <rect x="160" y="236" width="90" height="10" rx="5" fill="#e8eaed" />
    <rect x="160" y="260" width="110" height="10" rx="5" fill="#e8eaed" />

    {/* Moisture level indicator */}
    <rect x="160" y="300" width="140" height="80" rx="8" fill="#e8f5e9" />
    <text x="175" y="325" fill="#34a853" fontSize="12" fontWeight="500">Moisture Level</text>
    <text x="175" y="360" fill="#34a853" fontSize="28" fontWeight="600">24%</text>
    <path d="M265 330 L285 345 L265 360" fill="none" stroke="#34a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </path>

    {/* Main chart area */}
    <rect x="340" y="136" width="471" height="240" rx="12" fill="white" />

    {/* Chart title */}
    <text x="360" y="165" fill="#202124" fontSize="16" fontWeight="500">Drying Progress</text>
    <text x="360" y="185" fill="#5f6368" fontSize="12">Last 7 days</text>

    {/* Chart grid lines */}
    <line x1="380" y1="220" x2="780" y2="220" stroke="#e8eaed" strokeWidth="1" />
    <line x1="380" y1="260" x2="780" y2="260" stroke="#e8eaed" strokeWidth="1" />
    <line x1="380" y1="300" x2="780" y2="300" stroke="#e8eaed" strokeWidth="1" />
    <line x1="380" y1="340" x2="780" y2="340" stroke="#e8eaed" strokeWidth="1" />

    {/* Chart line - animated */}
    <path
      d="M400 320 Q450 310 500 280 T600 240 T700 220 T760 200"
      fill="none"
      stroke="#4285f4"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <animate
        attributeName="d"
        values="
          M400 320 Q450 310 500 280 T600 240 T700 220 T760 200;
          M400 325 Q450 305 500 275 T600 235 T700 215 T760 195;
          M400 320 Q450 310 500 280 T600 240 T700 220 T760 200
        "
        dur="4s"
        repeatCount="indefinite"
      />
    </path>

    {/* Chart area fill */}
    <path
      d="M400 320 Q450 310 500 280 T600 240 T700 220 T760 200 V350 H400 Z"
      fill="#4285f4"
      opacity="0.1"
    />

    {/* Data points */}
    <circle cx="400" cy="320" r="6" fill="#4285f4" />
    <circle cx="500" cy="280" r="6" fill="#4285f4" />
    <circle cx="600" cy="240" r="6" fill="#4285f4" />
    <circle cx="700" cy="220" r="6" fill="#4285f4" />
    <circle cx="760" cy="200" r="6" fill="#34a853">
      <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Status cards row */}
    <rect x="340" y="396" width="145" height="100" rx="12" fill="white" />
    <text x="360" y="425" fill="#5f6368" fontSize="12">Affected Areas</text>
    <text x="360" y="465" fill="#ea4335" fontSize="32" fontWeight="600">6</text>
    <text x="400" y="465" fill="#34a853" fontSize="14">↓ 2</text>

    <rect x="503" y="396" width="145" height="100" rx="12" fill="white" />
    <text x="523" y="425" fill="#5f6368" fontSize="12">Equipment</text>
    <text x="523" y="465" fill="#4285f4" fontSize="32" fontWeight="600">12</text>
    <text x="578" y="465" fill="#5f6368" fontSize="14">units</text>

    <rect x="666" y="396" width="145" height="100" rx="12" fill="white" />
    <text x="686" y="425" fill="#5f6368" fontSize="12">Est. Completion</text>
    <text x="686" y="465" fill="#34a853" fontSize="32" fontWeight="600">2d</text>
    <text x="726" y="465" fill="#5f6368" fontSize="14">remaining</text>

    {/* Live indicator */}
    <circle cx="795" cy="88" r="6" fill="#34a853">
      <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="805" y="92" fill="#34a853" fontSize="12" fontWeight="500">LIVE</text>
  </svg>
);

/**
 * Fleet Dispatch Map Visualization
 * Google Maps style dispatch tracking
 */
export const FleetMapGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 951 639" fill="none" className={className}>
    {/* Background */}
    <rect width="951" height="639" fill="white" />

    {/* Map area */}
    <rect x="80" y="60" width="791" height="519" rx="16" fill="#e8f0fe" />

    {/* Road grid */}
    <path d="M80 250 H871" stroke="#dadce0" strokeWidth="6" />
    <path d="M80 400 H871" stroke="#dadce0" strokeWidth="6" />
    <path d="M300 60 V579" stroke="#dadce0" strokeWidth="6" />
    <path d="M550 60 V579" stroke="#dadce0" strokeWidth="6" />
    <path d="M750 60 V579" stroke="#dadce0" strokeWidth="6" />

    {/* Main roads */}
    <path d="M80 320 H400 Q450 320 450 370 V500" stroke="#f8f9fa" strokeWidth="12" />
    <path d="M300 200 H650 Q700 200 700 250 V400" stroke="#f8f9fa" strokeWidth="12" />

    {/* Destination marker */}
    <g>
      <ellipse cx="650" cy="340" rx="30" ry="8" fill="#ea4335" opacity="0.2">
        <animate attributeName="rx" values="30;35;30" dur="2s" repeatCount="indefinite" />
      </ellipse>
      <path d="M650 240 C680 240 700 265 700 295 C700 330 650 350 650 350 C650 350 600 330 600 295 C600 265 620 240 650 240Z" fill="#ea4335" />
      <circle cx="650" cy="290" r="15" fill="white" />
      <path d="M642 290 L648 296 L660 284" stroke="#ea4335" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Truck 1 - Moving */}
    <g>
      <circle cx="250" cy="320" r="25" fill="#4285f4">
        <animate attributeName="cx" values="250;400;250" dur="6s" repeatCount="indefinite" />
      </circle>
      <rect x="238" y="312" width="18" height="12" rx="2" fill="white">
        <animate attributeName="x" values="238;388;238" dur="6s" repeatCount="indefinite" />
      </rect>
      <rect x="256" y="316" width="8" height="8" rx="1" fill="white">
        <animate attributeName="x" values="256;406;256" dur="6s" repeatCount="indefinite" />
      </rect>
    </g>

    {/* Truck 2 - Stationary */}
    <g>
      <circle cx="550" cy="400" r="25" fill="#34a853" />
      <rect x="538" y="392" width="18" height="12" rx="2" fill="white" />
      <rect x="556" y="396" width="8" height="8" rx="1" fill="white" />
    </g>

    {/* Route line - animated */}
    <path
      d="M550 400 Q580 400 600 350 T650 340"
      fill="none"
      stroke="#4285f4"
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="12 8"
    >
      <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1s" repeatCount="indefinite" />
    </path>

    {/* Info card */}
    <rect x="680" y="420" width="180" height="120" rx="12" fill="white" filter="url(#shadow)" />
    <text x="700" y="450" fill="#5f6368" fontSize="12">Estimated Arrival</text>
    <text x="700" y="485" fill="#4285f4" fontSize="28" fontWeight="600">8 min</text>
    <text x="700" y="510" fill="#5f6368" fontSize="12">Truck #2 - En route</text>
    <circle cx="840" cy="445" r="8" fill="#34a853">
      <animate attributeName="r" values="8;10;8" dur="1s" repeatCount="indefinite" />
    </circle>

    {/* Location label */}
    <rect x="100" y="80" width="200" height="40" rx="20" fill="white" />
    <circle cx="125" cy="100" r="8" fill="#4285f4" />
    <text x="145" y="105" fill="#202124" fontSize="14" fontWeight="500">Northern Virginia</text>

    {/* Drop shadow filter */}
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1" />
      </filter>
    </defs>
  </svg>
);

/**
 * Process Steps Visualization
 * Google style numbered steps (like Google Analytics "How to get started")
 */
export const ProcessStepsGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 951 380" fill="none" className={className}>
    {/* Background */}
    <rect width="951" height="380" fill="white" />

    {/* Step 1: Call */}
    <g>
      {/* Number badge */}
      <rect x="100" y="50" width="70" height="70" rx="16" fill="#d2e3fc" />
      <text x="135" y="100" textAnchor="middle" fill="#4285f4" fontSize="36" fontWeight="500">1</text>

      {/* Icon below */}
      <circle cx="135" cy="170" r="35" fill="#e8f0fe" />
      <rect x="120" y="155" width="20" height="30" rx="4" fill="#4285f4" />
      <rect x="125" y="160" width="10" height="15" rx="2" fill="white" opacity="0.4" />
      <circle cx="130" cy="180" r="3" fill="white" />
      {/* Signal waves */}
      <path d="M143 158 Q150 165 143 172" stroke="#4285f4" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
      </path>

      <text x="135" y="235" textAnchor="middle" fill="#202124" fontSize="18" fontWeight="500">Call Us</text>
      <text x="135" y="258" textAnchor="middle" fill="#5f6368" fontSize="14">24/7 emergency hotline</text>
      <text x="135" y="278" textAnchor="middle" fill="#5f6368" fontSize="14">for immediate response.</text>
    </g>

    {/* Step 2: Dispatch */}
    <g>
      {/* Number badge */}
      <rect x="310" y="50" width="70" height="70" rx="16" fill="#fef7e0" />
      <text x="345" y="100" textAnchor="middle" fill="#f9ab00" fontSize="36" fontWeight="500">2</text>

      {/* Icon below */}
      <circle cx="345" cy="170" r="35" fill="#fef7e0" />
      <rect x="325" y="158" width="28" height="18" rx="3" fill="#fbbc04" />
      <rect x="353" y="162" width="12" height="14" rx="2" fill="#fbbc04" />
      <circle cx="333" cy="180" r="4" fill="white" />
      <circle cx="357" cy="180" r="4" fill="white" />
      {/* Motion lines */}
      <line x1="318" y1="165" x2="308" y2="165" stroke="#fbbc04" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="0.8s" repeatCount="indefinite" />
      </line>
      <line x1="318" y1="172" x2="305" y2="172" stroke="#fbbc04" strokeWidth="2" strokeLinecap="round" opacity="0.4">
        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="0.8s" begin="0.2s" repeatCount="indefinite" />
      </line>

      <text x="345" y="235" textAnchor="middle" fill="#202124" fontSize="18" fontWeight="500">Dispatch</text>
      <text x="345" y="258" textAnchor="middle" fill="#5f6368" fontSize="14">Nearest crew dispatched</text>
      <text x="345" y="278" textAnchor="middle" fill="#5f6368" fontSize="14">within 60 minutes.</text>
    </g>

    {/* Step 3: Assessment */}
    <g>
      {/* Number badge */}
      <rect x="520" y="50" width="70" height="70" rx="16" fill="#e6f4ea" />
      <text x="555" y="100" textAnchor="middle" fill="#34a853" fontSize="36" fontWeight="500">3</text>

      {/* Icon below */}
      <circle cx="555" cy="170" r="35" fill="#e6f4ea" />
      <rect x="540" y="150" width="22" height="30" rx="3" fill="#34a853" />
      <rect x="550" y="145" width="10" height="6" rx="2" fill="#34a853" />
      {/* Checkmarks */}
      <rect x="545" y="158" width="5" height="5" rx="1" fill="white">
        <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="545" y="167" width="5" height="5" rx="1" fill="white">
        <animate attributeName="opacity" values="0;0;1;1" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="545" y="176" width="5" height="5" rx="1" fill="white">
        <animate attributeName="opacity" values="0;0;0;1" dur="2s" repeatCount="indefinite" />
      </rect>
      <line x1="553" y1="160" x2="558" y2="160" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="553" y1="169" x2="558" y2="169" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <line x1="553" y1="178" x2="558" y2="178" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      <text x="555" y="235" textAnchor="middle" fill="#202124" fontSize="18" fontWeight="500">Assess</text>
      <text x="555" y="258" textAnchor="middle" fill="#5f6368" fontSize="14">Complete damage inspection</text>
      <text x="555" y="278" textAnchor="middle" fill="#5f6368" fontSize="14">and restoration plan.</text>
    </g>

    {/* Step 4: Restore */}
    <g>
      {/* Number badge */}
      <rect x="730" y="50" width="70" height="70" rx="16" fill="#d2e3fc" />
      <text x="765" y="100" textAnchor="middle" fill="#4285f4" fontSize="36" fontWeight="500">4</text>

      {/* Icon below */}
      <circle cx="765" cy="170" r="35" fill="#e8f0fe" />
      <path d="M750 185 L765 160 L780 185 V195 H750 V185Z" fill="#4285f4" />
      <rect x="758" y="185" width="14" height="10" rx="1" fill="white" opacity="0.4" />
      {/* Sparkles */}
      <path d="M795 145 L797 150 L802 152 L797 154 L795 159 L793 154 L788 152 L793 150 Z" fill="#fbbc04">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </path>
      <path d="M738 155 L740 159 L744 160 L740 161 L738 165 L736 161 L732 160 L736 159 Z" fill="#fbbc04">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.7s" repeatCount="indefinite" />
      </path>

      <text x="765" y="235" textAnchor="middle" fill="#202124" fontSize="18" fontWeight="500">Restore</text>
      <text x="765" y="258" textAnchor="middle" fill="#5f6368" fontSize="14">Property restored to</text>
      <text x="765" y="278" textAnchor="middle" fill="#5f6368" fontSize="14">pre-damage condition.</text>
    </g>

    {/* Connection line with animated dots */}
    <line x1="185" y1="85" x2="300" y2="85" stroke="#e8eaed" strokeWidth="2" />
    <line x1="395" y1="85" x2="510" y2="85" stroke="#e8eaed" strokeWidth="2" />
    <line x1="605" y1="85" x2="720" y2="85" stroke="#e8eaed" strokeWidth="2" />

    {/* Animated progress dots */}
    <circle cx="242" cy="85" r="4" fill="#34a853">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="452" cy="85" r="4" fill="#34a853">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="662" cy="85" r="4" fill="#34a853">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Technology Stack Visualization
 * Google Cloud style architecture diagram
 */
export const TechnologyStackGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 951 500" fill="none" className={className}>
    {/* Background */}
    <rect width="951" height="500" fill="white" />

    {/* Central hub */}
    <circle cx="475" cy="250" r="80" fill="#4285f4" />
    <circle cx="475" cy="250" r="60" fill="white" />
    <text x="475" y="245" textAnchor="middle" fill="#4285f4" fontSize="14" fontWeight="600">FLOOD</text>
    <text x="475" y="265" textAnchor="middle" fill="#4285f4" fontSize="14" fontWeight="600">DOCTOR</text>

    {/* Orbiting elements */}
    {/* Top - Sensors */}
    <g>
      <circle cx="475" cy="80" r="45" fill="#e8f5e9" />
      <circle cx="475" cy="80" r="35" fill="white" />
      <rect x="460" y="65" width="30" height="30" rx="4" fill="#34a853" />
      <path d="M470 75 V85 M465 80 H485" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <text x="475" y="145" textAnchor="middle" fill="#202124" fontSize="12" fontWeight="500">Smart Sensors</text>
    </g>

    {/* Right - Dashboard */}
    <g>
      <circle cx="700" cy="250" r="45" fill="#e3f2fd" />
      <circle cx="700" cy="250" r="35" fill="white" />
      <rect x="680" y="235" width="40" height="30" rx="4" fill="#4285f4" />
      <rect x="685" y="240" width="15" height="8" rx="1" fill="white" />
      <rect x="685" y="252" width="30" height="3" rx="1" fill="white" opacity="0.5" />
      <rect x="685" y="258" width="20" height="3" rx="1" fill="white" opacity="0.5" />
      <text x="700" y="315" textAnchor="middle" fill="#202124" fontSize="12" fontWeight="500">Live Dashboard</text>
    </g>

    {/* Bottom - Mobile */}
    <g>
      <circle cx="475" cy="420" r="45" fill="#fef7e0" />
      <circle cx="475" cy="420" r="35" fill="white" />
      <rect x="460" y="400" width="30" height="45" rx="4" fill="#fbbc04" />
      <rect x="465" y="405" width="20" height="30" rx="2" fill="white" />
      <circle cx="475" cy="440" r="3" fill="white" />
      <text x="475" y="485" textAnchor="middle" fill="#202124" fontSize="12" fontWeight="500">Mobile Updates</text>
    </g>

    {/* Left - Thermal */}
    <g>
      <circle cx="250" cy="250" r="45" fill="#ffebee" />
      <circle cx="250" cy="250" r="35" fill="white" />
      <rect x="230" y="235" width="40" height="30" rx="4" fill="#ea4335" />
      <path d="M240 245 L250 255 L260 245 M240 255 L250 265 L260 255" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="250" y="315" textAnchor="middle" fill="#202124" fontSize="12" fontWeight="500">Thermal Imaging</text>
    </g>

    {/* Connection lines - animated */}
    <line x1="475" y1="170" x2="475" y2="125" stroke="#34a853" strokeWidth="2" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
    </line>
    <line x1="555" y1="250" x2="655" y2="250" stroke="#4285f4" strokeWidth="2" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
    </line>
    <line x1="475" y1="330" x2="475" y2="375" stroke="#fbbc04" strokeWidth="2" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
    </line>
    <line x1="395" y1="250" x2="295" y2="250" stroke="#ea4335" strokeWidth="2" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
    </line>

    {/* Floating data points */}
    <circle cx="380" cy="150" r="6" fill="#4285f4" opacity="0.5">
      <animate attributeName="cy" values="150;140;150" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="570" cy="350" r="4" fill="#34a853" opacity="0.5">
      <animate attributeName="cy" values="350;360;350" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="320" cy="380" r="5" fill="#fbbc04" opacity="0.5">
      <animate attributeName="cx" values="320;330;320" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default {
  AssessmentDashboardGraphic,
  FleetMapGraphic,
  ProcessStepsGraphic,
  TechnologyStackGraphic,
};
