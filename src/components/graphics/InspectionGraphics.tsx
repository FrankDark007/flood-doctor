import React from 'react';

/**
 * Inspection & Assessment Graphics
 * Google Analytics-style dashboard mockups for assessment visualization
 * Based on Google section1.svg design
 */

/**
 * Moisture Assessment Dashboard
 * Shows a dashboard with moisture readings and charts
 */
export const MoistureAssessmentDashboard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 380" fill="none" className={className}>
    <defs>
      <filter id="dashboardShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12" />
      </filter>

      <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="500" height="380" rx="24" fill="#f8f9fa" />

    {/* Browser frame */}
    <g filter="url(#dashboardShadow)">
      <rect x="30" y="30" width="440" height="320" rx="12" fill="#eff0f2" />

      {/* Title bar */}
      <rect x="30" y="30" width="440" height="36" rx="12" fill="#eff0f2" />
      <rect x="30" y="54" width="440" height="12" fill="#eff0f2" />

      {/* Traffic lights */}
      <circle cx="52" cy="48" r="6" fill="#ea4335" />
      <circle cx="72" cy="48" r="6" fill="#fbbc04" />
      <circle cx="92" cy="48" r="6" fill="#34a853" />

      {/* Tab indicator */}
      <rect x="130" y="40" width="100" height="16" rx="8" fill="#dadce0" />
    </g>

    {/* Main content area */}
    <rect x="40" y="76" width="420" height="264" rx="8" fill="white" />

    {/* Sidebar */}
    <rect x="40" y="76" width="100" height="264" fill="#f8f9fa" />

    {/* Sidebar items */}
    <g fill="#dadce0">
      <rect x="52" y="96" width="76" height="8" rx="4" />
      <rect x="52" y="116" width="60" height="8" rx="4" fill="#4285f4" />
      <rect x="52" y="136" width="68" height="8" rx="4" />
      <rect x="52" y="156" width="54" height="8" rx="4" />
    </g>

    {/* Main chart area */}
    <g transform="translate(160, 90)">
      {/* Chart title */}
      <text x="0" y="12" fill="#202124" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Moisture Readings
      </text>

      {/* Chart axes */}
      <line x1="0" y1="40" x2="0" y2="140" stroke="#e8eaed" strokeWidth="1" />
      <line x1="0" y1="140" x2="280" y2="140" stroke="#e8eaed" strokeWidth="1" />

      {/* Grid lines */}
      <g stroke="#e8eaed" strokeWidth="1" strokeDasharray="4 2">
        <line x1="0" y1="60" x2="280" y2="60" />
        <line x1="0" y1="80" x2="280" y2="80" />
        <line x1="0" y1="100" x2="280" y2="100" />
        <line x1="0" y1="120" x2="280" y2="120" />
      </g>

      {/* Chart line */}
      <path
        d="M 10 120 Q 40 100, 70 85 T 130 95 T 190 70 T 250 60 T 270 55"
        fill="none"
        stroke="#4285f4"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          values="
            M 10 120 Q 40 100, 70 85 T 130 95 T 190 70 T 250 60 T 270 55;
            M 10 115 Q 40 95, 70 80 T 130 90 T 190 65 T 250 55 T 270 50;
            M 10 120 Q 40 100, 70 85 T 130 95 T 190 70 T 250 60 T 270 55
          "
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Chart fill */}
      <path
        d="M 10 120 Q 40 100, 70 85 T 130 95 T 190 70 T 250 60 T 270 55 V 140 H 10 Z"
        fill="#4285f4"
        opacity="0.1"
      />

      {/* Data points */}
      <circle cx="70" cy="85" r="5" fill="#34a853" />
      <circle cx="130" cy="95" r="5" fill="#fbbc04" />
      <circle cx="190" cy="70" r="5" fill="#ea4335" />
      <circle cx="250" cy="60" r="5" fill="#4285f4" />

      {/* Y-axis labels */}
      <text x="-10" y="64" textAnchor="end" fill="#5f6368" fontSize="9" fontFamily="Plus Jakarta Sans, Inter, system-ui">80%</text>
      <text x="-10" y="84" textAnchor="end" fill="#5f6368" fontSize="9" fontFamily="Plus Jakarta Sans, Inter, system-ui">60%</text>
      <text x="-10" y="104" textAnchor="end" fill="#5f6368" fontSize="9" fontFamily="Plus Jakarta Sans, Inter, system-ui">40%</text>
      <text x="-10" y="124" textAnchor="end" fill="#5f6368" fontSize="9" fontFamily="Plus Jakarta Sans, Inter, system-ui">20%</text>
    </g>

    {/* Stats cards row */}
    <g transform="translate(160, 250)">
      {/* Current reading */}
      <rect width="85" height="60" rx="8" fill="white" filter="url(#cardShadow)" />
      <text x="10" y="20" fill="#5f6368" fontSize="9" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Current
      </text>
      <text x="10" y="44" fill="#ea4335" fontSize="20" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        45%
      </text>

      {/* Target */}
      <g transform="translate(95, 0)">
        <rect width="85" height="60" rx="8" fill="white" filter="url(#cardShadow)" />
        <text x="10" y="20" fill="#5f6368" fontSize="9" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          Target
        </text>
        <text x="10" y="44" fill="#34a853" fontSize="20" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          15%
        </text>
      </g>

      {/* Progress */}
      <g transform="translate(190, 0)">
        <rect width="100" height="60" rx="8" fill="white" filter="url(#cardShadow)" />
        <text x="10" y="20" fill="#5f6368" fontSize="9" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          Progress
        </text>
        <text x="10" y="44" fill="#4285f4" fontSize="20" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          67%
        </text>
        <circle cx="75" cy="30" r="12" fill="#e8f0fe" />
        <circle cx="75" cy="30" r="8" fill="#4285f4">
          <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </g>

    {/* Magnifying glass overlay */}
    <g transform="translate(380, 120)">
      <circle cx="0" cy="0" r="50" fill="#d2e3fb" opacity="0.8" />
      <circle cx="0" cy="0" r="40" fill="none" stroke="#9fc1f9" strokeWidth="8" />

      {/* Glass handle */}
      <rect x="30" y="30" width="12" height="40" rx="6" fill="#959ca5" transform="rotate(45 36 50)" />

      {/* Highlight */}
      <ellipse cx="-10" cy="-10" rx="12" ry="8" fill="white" opacity="0.4" />
    </g>
  </svg>
);

/**
 * Property Inspection Checklist Graphic
 */
export const InspectionChecklistGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 400 350" fill="none" className={className}>
    <defs>
      <filter id="checklistShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="400" height="350" rx="20" fill="#f8f9fa" />

    {/* Clipboard */}
    <g transform="translate(80, 30)" filter="url(#checklistShadow)">
      {/* Clipboard back */}
      <rect width="240" height="300" rx="12" fill="#5f6368" />

      {/* Clip */}
      <rect x="80" y="-8" width="80" height="24" rx="4" fill="#959ca5" />
      <rect x="90" y="0" width="60" height="12" rx="3" fill="#babfc5" />

      {/* Paper */}
      <rect x="12" y="20" width="216" height="268" rx="8" fill="white" />

      {/* Title */}
      <text x="24" y="50" fill="#202124" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Damage Assessment
      </text>
      <rect x="24" y="60" width="100" height="2" fill="#4285f4" />

      {/* Checklist items */}
      {[
        { text: 'Water source identified', checked: true },
        { text: 'Affected areas mapped', checked: true },
        { text: 'Moisture readings taken', checked: true },
        { text: 'Photos documented', checked: true },
        { text: 'Equipment deployed', checked: false },
        { text: 'Insurance notified', checked: false },
      ].map((item, i) => (
        <g key={i} transform={`translate(24, ${85 + i * 36})`}>
          {/* Checkbox */}
          <rect
            width="18"
            height="18"
            rx="4"
            fill={item.checked ? '#34a853' : 'white'}
            stroke={item.checked ? '#34a853' : '#dadce0'}
            strokeWidth="2"
          />
          {item.checked && (
            <path
              d="M 4 9 L 7 12 L 14 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          )}

          {/* Text */}
          <text
            x="28"
            y="14"
            fill={item.checked ? '#5f6368' : '#202124'}
            fontSize="12"
            fontFamily="Plus Jakarta Sans, Inter, system-ui"
            textDecoration={item.checked ? 'none' : 'none'}
          >
            {item.text}
          </text>
        </g>
      ))}

      {/* Progress bar */}
      <g transform="translate(24, 265)">
        <rect width="188" height="8" rx="4" fill="#e8eaed" />
        <rect width="125" height="8" rx="4" fill="#34a853">
          <animate attributeName="width" values="120;130;120" dur="2s" repeatCount="indefinite" />
        </rect>
        <text x="0" y="22" fill="#5f6368" fontSize="10" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          67% Complete
        </text>
      </g>
    </g>
  </svg>
);

/**
 * Room Analysis Cards
 */
export const RoomAnalysisCards: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 450 300" fill="none" className={className}>
    <defs>
      <filter id="roomCardShadow" x="-15%" y="-15%" width="130%" height="130%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="450" height="300" rx="20" fill="#f8f9fa" />

    {/* Room cards */}
    {[
      { room: 'Living Room', moisture: 65, status: 'critical', color: '#ea4335', x: 20 },
      { room: 'Kitchen', moisture: 42, status: 'warning', color: '#fbbc04', x: 160 },
      { room: 'Bathroom', moisture: 18, status: 'normal', color: '#34a853', x: 300 },
    ].map((card, i) => (
      <g key={i} transform={`translate(${card.x}, 20)`}>
        <rect width="130" height="180" rx="12" fill="white" filter="url(#roomCardShadow)" />

        {/* Status indicator */}
        <circle cx="110" cy="20" r="8" fill={card.color}>
          {card.status === 'critical' && (
            <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
          )}
        </circle>

        {/* Room icon placeholder */}
        <rect x="15" y="30" width="100" height="60" rx="8" fill="#e8eaed" />

        {/* Room name */}
        <text x="15" y="115" fill="#202124" fontSize="12" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          {card.room}
        </text>

        {/* Moisture gauge */}
        <rect x="15" y="130" width="100" height="8" rx="4" fill="#e8eaed" />
        <rect x="15" y="130" width={card.moisture} height="8" rx="4" fill={card.color} />

        {/* Reading */}
        <text x="15" y="160" fill={card.color} fontSize="20" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          {card.moisture}%
        </text>
        <text x="55" y="160" fill="#5f6368" fontSize="10" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          moisture
        </text>
      </g>
    ))}

    {/* Summary card */}
    <g transform="translate(20, 220)">
      <rect width="410" height="60" rx="12" fill="white" filter="url(#roomCardShadow)" />

      <g transform="translate(20, 20)">
        <circle r="15" fill="#e8f5e9" />
        <text x="0" y="5" textAnchor="middle" fill="#34a853" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          6
        </text>
      </g>
      <text x="45" y="28" fill="#202124" fontSize="11" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Areas Assessed
      </text>

      <g transform="translate(150, 20)">
        <circle r="15" fill="#fef7e0" />
        <text x="0" y="5" textAnchor="middle" fill="#f9a825" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          3
        </text>
      </g>
      <text x="175" y="28" fill="#202124" fontSize="11" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Need Attention
      </text>

      <g transform="translate(290, 20)">
        <circle r="15" fill="#fce8e6" />
        <text x="0" y="5" textAnchor="middle" fill="#ea4335" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
          1
        </text>
      </g>
      <text x="315" y="28" fill="#202124" fontSize="11" fontWeight="500" fontFamily="Plus Jakarta Sans, Inter, system-ui">
        Critical
      </text>
    </g>
  </svg>
);

/**
 * Bar Chart for moisture comparison
 */
export const MoistureBarChart: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 350 250" fill="none" className={className}>
    <defs>
      <filter id="barChartShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="350" height="250" rx="16" fill="white" filter="url(#barChartShadow)" />

    {/* Title */}
    <text x="20" y="30" fill="#202124" fontSize="14" fontWeight="600" fontFamily="Plus Jakarta Sans, Inter, system-ui">
      Drying Progress
    </text>

    {/* Chart area */}
    <g transform="translate(50, 60)">
      {/* Y-axis */}
      <line x1="0" y1="0" x2="0" y2="140" stroke="#e8eaed" strokeWidth="1" />
      <line x1="0" y1="140" x2="270" y2="140" stroke="#e8eaed" strokeWidth="1" />

      {/* Grid lines */}
      <g stroke="#e8eaed" strokeWidth="1" opacity="0.5">
        <line x1="0" y1="35" x2="270" y2="35" />
        <line x1="0" y1="70" x2="270" y2="70" />
        <line x1="0" y1="105" x2="270" y2="105" />
      </g>

      {/* Y labels */}
      <text x="-8" y="4" textAnchor="end" fill="#5f6368" fontSize="9">100%</text>
      <text x="-8" y="39" textAnchor="end" fill="#5f6368" fontSize="9">75%</text>
      <text x="-8" y="74" textAnchor="end" fill="#5f6368" fontSize="9">50%</text>
      <text x="-8" y="109" textAnchor="end" fill="#5f6368" fontSize="9">25%</text>
      <text x="-8" y="144" textAnchor="end" fill="#5f6368" fontSize="9">0%</text>

      {/* Bars */}
      {[
        { label: 'Day 1', height: 126, color: '#ea4335' },
        { label: 'Day 2', height: 98, color: '#fbbc04' },
        { label: 'Day 3', height: 63, color: '#fbbc04' },
        { label: 'Day 4', height: 35, color: '#34a853' },
        { label: 'Day 5', height: 18, color: '#34a853' },
      ].map((bar, i) => (
        <g key={i} transform={`translate(${20 + i * 50}, 0)`}>
          <rect
            y={140 - bar.height}
            width="35"
            height={bar.height}
            rx="4"
            fill={bar.color}
          >
            <animate
              attributeName="height"
              from="0"
              to={bar.height}
              dur="0.5s"
              begin={`${i * 0.1}s`}
              fill="freeze"
            />
          </rect>
          <text x="17.5" y="156" textAnchor="middle" fill="#5f6368" fontSize="9">
            {bar.label}
          </text>
        </g>
      ))}

      {/* Target line */}
      <line x1="0" y1="119" x2="270" y2="119" stroke="#4285f4" strokeWidth="2" strokeDasharray="6 3" />
      <text x="275" y="123" fill="#4285f4" fontSize="9" fontWeight="500">Target</text>
    </g>
  </svg>
);

export default {
  MoistureAssessmentDashboard,
  InspectionChecklistGraphic,
  RoomAnalysisCards,
  MoistureBarChart,
};
