import React from 'react';

/**
 * Real-time Monitoring Dashboard Illustration
 */
export const MonitoringDashboardIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 300" fill="none" className={className}>
    {/* Background */}
    <rect width="400" height="300" rx="16" fill="#f8f9fa" />

    {/* Window frame */}
    <rect x="20" y="20" width="360" height="260" rx="12" fill="white" stroke="#dadce0" strokeWidth="1" />

    {/* Title bar */}
    <rect x="20" y="20" width="360" height="40" rx="12" fill="#f8f9fa" />
    <rect x="20" y="48" width="360" height="12" fill="#f8f9fa" />
    <circle cx="40" cy="40" r="6" fill="#ea4335" />
    <circle cx="60" cy="40" r="6" fill="#fbbc04" />
    <circle cx="80" cy="40" r="6" fill="#34a853" />

    {/* Sidebar */}
    <rect x="20" y="60" width="80" height="220" fill="#f8f9fa" />
    <rect x="32" y="80" width="56" height="8" rx="4" fill="#dadce0" />
    <rect x="32" y="100" width="56" height="8" rx="4" fill="#1a73e8" />
    <rect x="32" y="120" width="56" height="8" rx="4" fill="#dadce0" />
    <rect x="32" y="140" width="56" height="8" rx="4" fill="#dadce0" />

    {/* Main content - Moisture chart */}
    <rect x="120" y="80" width="240" height="100" rx="8" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <text x="135" y="100" fill="#202124" fontSize="12" fontWeight="500">Moisture Levels</text>

    {/* Chart line */}
    <path
      d="M140 160 Q160 140, 180 145 T220 130 T260 140 T300 120 T340 130"
      stroke="#1a73e8"
      strokeWidth="2"
      fill="none"
    >
      <animate
        attributeName="d"
        values="
          M140 160 Q160 140, 180 145 T220 130 T260 140 T300 120 T340 130;
          M140 155 Q160 145, 180 140 T220 135 T260 135 T300 125 T340 125;
          M140 160 Q160 140, 180 145 T220 130 T260 140 T300 120 T340 130
        "
        dur="4s"
        repeatCount="indefinite"
      />
    </path>

    {/* Chart fill */}
    <path
      d="M140 160 Q160 140, 180 145 T220 130 T260 140 T300 120 T340 130 V165 H140 Z"
      fill="#1a73e8"
      opacity="0.1"
    />

    {/* Stats cards */}
    <rect x="120" y="200" width="110" height="60" rx="8" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <text x="135" y="225" fill="#5f6368" fontSize="10">Current Level</text>
    <text x="135" y="245" fill="#34a853" fontSize="20" fontWeight="600">24%</text>

    <rect x="250" y="200" width="110" height="60" rx="8" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <text x="265" y="225" fill="#5f6368" fontSize="10">Target</text>
    <text x="265" y="245" fill="#1a73e8" fontSize="20" fontWeight="600">15%</text>

    {/* Live indicator */}
    <circle cx="355" cy="90" r="4" fill="#34a853">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Insurance Coordination Illustration
 */
export const InsuranceCoordinationIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 300" fill="none" className={className}>
    {/* Background */}
    <rect width="400" height="300" rx="16" fill="#f8f9fa" />

    {/* Document stack */}
    <rect x="60" y="80" width="140" height="180" rx="8" fill="white" stroke="#dadce0" strokeWidth="1" transform="rotate(-3 130 170)" />
    <rect x="60" y="80" width="140" height="180" rx="8" fill="white" stroke="#dadce0" strokeWidth="1" transform="rotate(2 130 170)" />
    <rect x="60" y="80" width="140" height="180" rx="8" fill="white" stroke="#1a73e8" strokeWidth="2" />

    {/* Document content */}
    <rect x="80" y="100" width="100" height="8" rx="4" fill="#202124" />
    <rect x="80" y="120" width="80" height="6" rx="3" fill="#dadce0" />
    <rect x="80" y="135" width="90" height="6" rx="3" fill="#dadce0" />
    <rect x="80" y="150" width="70" height="6" rx="3" fill="#dadce0" />

    {/* Checkbox items */}
    <rect x="80" y="175" width="12" height="12" rx="2" fill="#34a853" />
    <path d="M83 181L86 184L90 179" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="98" y="178" width="70" height="6" rx="3" fill="#5f6368" />

    <rect x="80" y="195" width="12" height="12" rx="2" fill="#34a853" />
    <path d="M83 201L86 204L90 199" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="98" y="198" width="60" height="6" rx="3" fill="#5f6368" />

    <rect x="80" y="215" width="12" height="12" rx="2" fill="#34a853" />
    <path d="M83 221L86 224L90 219" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="98" y="218" width="80" height="6" rx="3" fill="#5f6368" />

    {/* Arrow connection */}
    <path d="M220 170 L260 170" stroke="#1a73e8" strokeWidth="2" strokeDasharray="6 4">
      <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
    </path>
    <path d="M255 165 L265 170 L255 175" fill="#1a73e8" />

    {/* Insurance card */}
    <rect x="280" y="110" width="100" height="70" rx="8" fill="white" stroke="#dadce0" strokeWidth="1" />
    <rect x="290" y="120" width="30" height="20" rx="4" fill="#1a73e8" />
    <rect x="290" y="150" width="60" height="6" rx="3" fill="#202124" />
    <rect x="290" y="162" width="40" height="4" rx="2" fill="#5f6368" />

    {/* Status badge */}
    <rect x="280" y="200" width="100" height="40" rx="20" fill="#e8f5e9" stroke="#34a853" strokeWidth="1" />
    <circle cx="300" cy="220" r="8" fill="#34a853" />
    <path d="M296 220L299 223L305 217" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="315" y="224" fill="#34a853" fontSize="12" fontWeight="500">Approved</text>
  </svg>
);

/**
 * Communication Timeline Illustration
 */
export const CommunicationTimelineIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 300" fill="none" className={className}>
    {/* Background */}
    <rect width="400" height="300" rx="16" fill="#f8f9fa" />

    {/* Timeline line */}
    <line x1="80" y1="40" x2="80" y2="260" stroke="#e8eaed" strokeWidth="2" />

    {/* Timeline items */}
    {/* Item 1 */}
    <circle cx="80" cy="60" r="12" fill="#1a73e8" />
    <circle cx="80" cy="60" r="6" fill="white" />
    <rect x="110" y="45" width="260" height="50" rx="8" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <text x="125" y="65" fill="#202124" fontSize="12" fontWeight="500">Assessment Complete</text>
    <text x="125" y="82" fill="#5f6368" fontSize="10">Moisture levels documented - 6 affected areas found</text>
    <text x="340" y="65" fill="#5f6368" fontSize="10">9:00 AM</text>

    {/* Item 2 */}
    <circle cx="80" cy="130" r="12" fill="#34a853" />
    <path d="M74 130L78 134L86 126" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="110" y="115" width="260" height="50" rx="8" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <text x="125" y="135" fill="#202124" fontSize="12" fontWeight="500">Equipment Deployed</text>
    <text x="125" y="152" fill="#5f6368" fontSize="10">4 dehumidifiers, 8 air movers placed</text>
    <text x="340" y="135" fill="#5f6368" fontSize="10">10:30 AM</text>

    {/* Item 3 */}
    <circle cx="80" cy="200" r="12" fill="#1a73e8" />
    <rect x="110" y="185" width="260" height="50" rx="8" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <text x="125" y="205" fill="#202124" fontSize="12" fontWeight="500">Progress Update</text>
    <text x="125" y="222" fill="#5f6368" fontSize="10">Moisture reduced from 45% to 32%</text>
    <text x="340" y="205" fill="#5f6368" fontSize="10">2:00 PM</text>

    {/* Pending item */}
    <circle cx="80" cy="260" r="12" fill="#dadce0" stroke="#1a73e8" strokeWidth="2" strokeDasharray="4 2">
      <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Fleet Dispatch Map Illustration
 */
export const FleetDispatchIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 300" fill="none" className={className}>
    {/* Background map */}
    <rect width="400" height="300" rx="16" fill="#e8f0fe" />

    {/* Map roads */}
    <path d="M0 150 L400 150" stroke="#dadce0" strokeWidth="4" />
    <path d="M100 0 L100 300" stroke="#dadce0" strokeWidth="4" />
    <path d="M300 0 L300 300" stroke="#dadce0" strokeWidth="4" />
    <path d="M0 80 L200 80 L200 220 L400 220" stroke="#dadce0" strokeWidth="3" />

    {/* Location marker - destination */}
    <g>
      <ellipse cx="320" cy="115" rx="20" ry="6" fill="#ea4335" opacity="0.2" />
      <path d="M320 30 C340 30 355 50 355 70 C355 95 320 115 320 115 C320 115 285 95 285 70 C285 50 300 30 320 30Z" fill="#ea4335" />
      <circle cx="320" cy="65" r="12" fill="white" />
      <path d="M316 65 L318 67 L324 61" stroke="#ea4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Truck markers */}
    <g>
      <circle cx="120" cy="150" r="18" fill="#1a73e8" />
      <rect x="110" y="144" width="14" height="10" rx="2" fill="white" />
      <rect x="124" y="147" width="6" height="7" rx="1" fill="white" />
      <circle cx="114" cy="156" r="2" fill="#1a73e8" />
      <circle cx="126" cy="156" r="2" fill="#1a73e8" />

      {/* Route line */}
      <path d="M138 150 L200 150 L200 80 L280 80 L280 100" stroke="#1a73e8" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 4">
        <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Second truck */}
    <g>
      <circle cx="80" cy="220" r="18" fill="#34a853" />
      <rect x="70" y="214" width="14" height="10" rx="2" fill="white" />
      <rect x="84" y="217" width="6" height="7" rx="1" fill="white" />
      <circle cx="74" cy="226" r="2" fill="#34a853" />
      <circle cx="86" cy="226" r="2" fill="#34a853" />
    </g>

    {/* ETA box */}
    <rect x="240" y="230" width="140" height="50" rx="8" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <text x="260" y="252" fill="#5f6368" fontSize="11">Estimated arrival</text>
    <text x="260" y="270" fill="#1a73e8" fontSize="16" fontWeight="600">12 minutes</text>
    <circle cx="360" cy="255" r="10" fill="#34a853">
      <animate attributeName="r" values="10;12;10" dur="1s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default {
  MonitoringDashboardIllustration,
  InsuranceCoordinationIllustration,
  CommunicationTimelineIllustration,
  FleetDispatchIllustration,
};
