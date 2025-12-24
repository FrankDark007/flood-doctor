import React from 'react';

/**
 * Home Page Hero Graphic
 * Modern phone with app interface and floating elements
 */
export const HomeHeroGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 500" fill="none" className={className}>
    {/* Decorative circles */}
    <circle cx="250" cy="250" r="200" fill="#e8f0fe" opacity="0.5" />
    <circle cx="250" cy="250" r="150" fill="#e8f0fe" opacity="0.3" />

    {/* Phone frame */}
    <rect x="150" y="60" width="200" height="380" rx="24" fill="#202124" />
    <rect x="158" y="72" width="184" height="356" rx="20" fill="white" />

    {/* Screen content - App header */}
    <rect x="158" y="72" width="184" height="50" fill="#1a73e8" />
    <circle cx="175" cy="97" r="10" fill="white" opacity="0.3" />
    <rect x="195" y="90" width="80" height="6" rx="3" fill="white" opacity="0.8" />
    <rect x="195" y="100" width="50" height="4" rx="2" fill="white" opacity="0.5" />

    {/* Status card */}
    <rect x="170" y="135" width="160" height="80" rx="12" fill="white" stroke="#e8eaed" strokeWidth="1" />
    <circle cx="195" cy="165" r="15" fill="#e8f5e9" />
    <path d="M189 165L193 169L201 161" stroke="#34a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="220" y="155" width="90" height="6" rx="3" fill="#202124" />
    <rect x="220" y="167" width="60" height="4" rx="2" fill="#5f6368" />
    <rect x="175" y="190" width="150" height="16" rx="8" fill="#e8f0fe" />
    <rect x="175" y="190" width="100" height="16" rx="8" fill="#1a73e8">
      <animate attributeName="width" values="60;120;60" dur="4s" repeatCount="indefinite" />
    </rect>

    {/* Timeline items */}
    <rect x="170" y="230" width="160" height="50" rx="8" fill="#f8f9fa" />
    <circle cx="190" cy="255" r="8" fill="#1a73e8" />
    <rect x="210" y="248" width="100" height="5" rx="2" fill="#202124" />
    <rect x="210" y="258" width="70" height="4" rx="2" fill="#5f6368" />

    <rect x="170" y="290" width="160" height="50" rx="8" fill="#f8f9fa" />
    <circle cx="190" cy="315" r="8" fill="#34a853" />
    <rect x="210" y="308" width="80" height="5" rx="2" fill="#202124" />
    <rect x="210" y="318" width="90" height="4" rx="2" fill="#5f6368" />

    <rect x="170" y="350" width="160" height="50" rx="8" fill="#f8f9fa" />
    <circle cx="190" cy="375" r="8" fill="#dadce0" stroke="#1a73e8" strokeWidth="2" strokeDasharray="3 2">
      <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />
    </circle>
    <rect x="210" y="368" width="70" height="5" rx="2" fill="#dadce0" />
    <rect x="210" y="378" width="50" height="4" rx="2" fill="#e8eaed" />

    {/* Floating elements */}
    <g>
      <rect x="60" y="120" width="80" height="60" rx="12" fill="white" stroke="#e8eaed" strokeWidth="1">
        <animate attributeName="y" values="120;130;120" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="75" y="145" fill="#5f6368" fontSize="10">Response</text>
      <text x="75" y="165" fill="#1a73e8" fontSize="18" fontWeight="600">60 min</text>
    </g>

    <g>
      <rect x="360" y="180" width="90" height="60" rx="12" fill="white" stroke="#e8eaed" strokeWidth="1">
        <animate attributeName="y" values="180;170;180" dur="3.5s" repeatCount="indefinite" />
      </rect>
      <text x="375" y="205" fill="#5f6368" fontSize="10">Moisture</text>
      <text x="375" y="225" fill="#34a853" fontSize="18" fontWeight="600">-21%</text>
    </g>

    <g>
      <rect x="50" y="280" width="85" height="50" rx="12" fill="white" stroke="#e8eaed" strokeWidth="1">
        <animate attributeName="y" values="280;290;280" dur="4s" repeatCount="indefinite" />
      </rect>
      <circle cx="75" cy="305" r="12" fill="#e8f5e9" />
      <path d="M69 305L73 309L81 301" stroke="#34a853" strokeWidth="2" strokeLinecap="round" />
      <text x="92" y="310" fill="#34a853" fontSize="12" fontWeight="500">IICRC</text>
    </g>

    {/* Water droplet animation */}
    <g>
      <path d="M400 350 C400 350 390 365 390 375 C390 382 394 388 400 388 C406 388 410 382 410 375 C410 365 400 350 400 350Z" fill="#1a73e8">
        <animate attributeName="d" dur="2s" repeatCount="indefinite" values="
          M400 350 C400 350 390 365 390 375 C390 382 394 388 400 388 C406 388 410 382 410 375 C410 365 400 350 400 350Z;
          M400 355 C400 355 391 368 391 376 C391 382 395 387 400 387 C405 387 409 382 409 376 C409 368 400 355 400 355Z;
          M400 350 C400 350 390 365 390 375 C390 382 394 388 400 388 C406 388 410 382 410 375 C410 365 400 350 400 350Z
        " />
      </path>
    </g>
  </svg>
);

/**
 * Services Hub Hero Graphic
 * Grid of service icons with connections
 */
export const ServicesHeroGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 400" fill="none" className={className}>
    {/* Background grid */}
    <rect width="500" height="400" fill="#f8f9fa" rx="24" />

    {/* Connection lines */}
    <path d="M100 120 L200 200 L300 120 L400 200 L300 280 L200 200 L100 280" stroke="#e8eaed" strokeWidth="2" fill="none" />

    {/* Service cards */}
    {/* Water Damage */}
    <g>
      <rect x="60" y="80" width="80" height="80" rx="16" fill="white" stroke="#1a73e8" strokeWidth="2">
        <animate attributeName="y" values="80;75;80" dur="3s" repeatCount="indefinite" />
      </rect>
      <circle cx="100" cy="110" r="20" fill="#e3f2fd" />
      <path d="M100 95 L92 108 C90 112 90 116 90 118 C90 124 94 128 100 128 C106 128 110 124 110 118 C110 116 110 112 108 108 L100 95Z" fill="#1a73e8" />
      <text x="100" y="150" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">Water</text>
    </g>

    {/* Mold */}
    <g>
      <rect x="160" y="160" width="80" height="80" rx="16" fill="white" stroke="#34a853" strokeWidth="2">
        <animate attributeName="y" values="160;165;160" dur="3.5s" repeatCount="indefinite" />
      </rect>
      <circle cx="200" cy="190" r="20" fill="#e8f5e9" />
      <circle cx="195" cy="185" r="6" fill="#34a853" />
      <circle cx="205" cy="190" r="4" fill="#34a853" />
      <circle cx="198" cy="198" r="5" fill="#34a853" />
      <text x="200" y="230" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">Mold</text>
    </g>

    {/* Fire & Smoke */}
    <g>
      <rect x="260" y="80" width="80" height="80" rx="16" fill="white" stroke="#ea4335" strokeWidth="2">
        <animate attributeName="y" values="80;85;80" dur="4s" repeatCount="indefinite" />
      </rect>
      <circle cx="300" cy="110" r="20" fill="#ffebee" />
      <path d="M300 95 C300 95 305 102 305 108 C305 114 298 118 300 120 C302 122 308 118 308 112 C308 106 300 102 305 96" stroke="#ea4335" strokeWidth="2" fill="none" strokeLinecap="round" />
      <text x="300" y="150" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">Fire</text>
    </g>

    {/* Sewage */}
    <g>
      <rect x="360" y="160" width="80" height="80" rx="16" fill="white" stroke="#7b1fa2" strokeWidth="2">
        <animate attributeName="y" values="160;155;160" dur="3.2s" repeatCount="indefinite" />
      </rect>
      <circle cx="400" cy="190" r="20" fill="#f3e5f5" />
      <ellipse cx="400" cy="195" rx="12" ry="5" fill="#7b1fa2" />
      <path d="M400 180 V190" stroke="#7b1fa2" strokeWidth="2" strokeLinecap="round" />
      <text x="400" y="230" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">Sewage</text>
    </g>

    {/* Storm */}
    <g>
      <rect x="110" y="240" width="80" height="80" rx="16" fill="white" stroke="#1a73e8" strokeWidth="2">
        <animate attributeName="y" values="240;235;240" dur="3.8s" repeatCount="indefinite" />
      </rect>
      <circle cx="150" cy="270" r="20" fill="#e3f2fd" />
      <path d="M140 268 C140 262 145 258 152 258 C154 258 156 258 158 260 C160 258 163 260 163 264 C163 268 160 270 157 270 H143 C140 270 138 268 140 268Z" fill="#1a73e8" />
      <path d="M152 272 L148 280 L156 280 L152 288" stroke="#fbbc04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="150" y="310" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">Storm</text>
    </g>

    {/* Commercial */}
    <g>
      <rect x="310" y="240" width="80" height="80" rx="16" fill="white" stroke="#1a73e8" strokeWidth="2">
        <animate attributeName="y" values="240;245;240" dur="3.3s" repeatCount="indefinite" />
      </rect>
      <circle cx="350" cy="270" r="20" fill="#e3f2fd" />
      <rect x="340" y="260" width="12" height="18" rx="1" fill="#1a73e8" />
      <rect x="354" y="266" width="8" height="12" rx="1" fill="#1a73e8" opacity="0.7" />
      <text x="350" y="310" textAnchor="middle" fill="#202124" fontSize="10" fontWeight="500">Commercial</text>
    </g>

    {/* Central hub */}
    <circle cx="250" cy="200" r="30" fill="#1a73e8">
      <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="250" y="195" textAnchor="middle" fill="white" fontSize="10">24/7</text>
    <text x="250" y="210" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Response</text>
  </svg>
);

/**
 * About Page Hero Graphic
 * Team/trust illustration
 */
export const AboutHeroGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 400" fill="none" className={className}>
    {/* Background */}
    <rect width="500" height="400" fill="#f8f9fa" rx="24" />

    {/* Shield */}
    <path d="M250 50 L150 90 V180 C150 260 250 320 250 320 C250 320 350 260 350 180 V90 L250 50Z" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="3" />

    {/* Checkmark inside shield */}
    <path d="M200 170 L230 200 L300 130" stroke="#1a73e8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="stroke-dasharray" values="0 200;200 0" dur="1.5s" fill="freeze" />
    </path>

    {/* Trust badges */}
    <g>
      <rect x="40" y="150" width="80" height="30" rx="15" fill="white" stroke="#34a853" strokeWidth="2">
        <animate attributeName="y" values="150;145;150" dur="3s" repeatCount="indefinite" />
      </rect>
      <text x="80" y="170" textAnchor="middle" fill="#34a853" fontSize="11" fontWeight="500">IICRC</text>
    </g>

    <g>
      <rect x="380" y="150" width="80" height="30" rx="15" fill="white" stroke="#1a73e8" strokeWidth="2">
        <animate attributeName="y" values="150;155;150" dur="3.5s" repeatCount="indefinite" />
      </rect>
      <text x="420" y="170" textAnchor="middle" fill="#1a73e8" fontSize="11" fontWeight="500">Licensed</text>
    </g>

    <g>
      <rect x="60" y="260" width="90" height="30" rx="15" fill="white" stroke="#fbbc04" strokeWidth="2">
        <animate attributeName="y" values="260;265;260" dur="4s" repeatCount="indefinite" />
      </rect>
      <text x="105" y="280" textAnchor="middle" fill="#fbbc04" fontSize="11" fontWeight="500">5-Star Rating</text>
    </g>

    <g>
      <rect x="350" y="260" width="100" height="30" rx="15" fill="white" stroke="#34a853" strokeWidth="2">
        <animate attributeName="y" values="260;255;260" dur="3.2s" repeatCount="indefinite" />
      </rect>
      <text x="400" y="280" textAnchor="middle" fill="#34a853" fontSize="11" fontWeight="500">Google Verified</text>
    </g>

    {/* Years of experience */}
    <g>
      <circle cx="250" cy="360" r="35" fill="#1a73e8" />
      <text x="250" y="355" textAnchor="middle" fill="white" fontSize="20" fontWeight="700">15+</text>
      <text x="250" y="372" textAnchor="middle" fill="white" fontSize="10">Years</text>
    </g>

    {/* Floating icons */}
    <circle cx="100" cy="100" r="15" fill="#e3f2fd">
      <animate attributeName="cy" values="100;90;100" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="400" cy="80" r="12" fill="#e8f5e9">
      <animate attributeName="cy" values="80;90;80" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="450" cy="200" r="10" fill="#ffebee">
      <animate attributeName="cx" values="450;455;450" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Contact Page Hero Graphic
 * Communication/support illustration
 */
export const ContactHeroGraphic: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 500 400" fill="none" className={className}>
    {/* Background */}
    <rect width="500" height="400" fill="#f8f9fa" rx="24" />

    {/* Chat bubbles */}
    <g>
      <rect x="100" y="80" width="180" height="70" rx="16" fill="white" stroke="#e8eaed" strokeWidth="1">
        <animate attributeName="y" values="80;75;80" dur="3s" repeatCount="indefinite" />
      </rect>
      <rect x="120" y="100" width="120" height="8" rx="4" fill="#202124" />
      <rect x="120" y="115" width="80" height="6" rx="3" fill="#5f6368" />
      <circle cx="260" cy="130" r="8" fill="#1a73e8" />
    </g>

    <g>
      <rect x="220" y="170" width="180" height="70" rx="16" fill="#1a73e8">
        <animate attributeName="y" values="170;175;170" dur="3.5s" repeatCount="indefinite" />
      </rect>
      <rect x="240" y="190" width="100" height="8" rx="4" fill="white" opacity="0.9" />
      <rect x="240" y="205" width="140" height="6" rx="3" fill="white" opacity="0.7" />
      <circle cx="240" cy="220" r="8" fill="white" opacity="0.3" />
    </g>

    {/* Phone/Support visual */}
    <g>
      <circle cx="250" cy="320" r="50" fill="#e8f0fe" />
      <circle cx="250" cy="320" r="35" fill="white" stroke="#1a73e8" strokeWidth="2" />
      <path d="M235 310 L240 310 C242 310 244 312 244 314 V320 C244 322 242 324 240 324 H235 C230 324 226 320 226 315 V310 C226 305 230 301 235 301 H265 C270 301 274 305 274 310 V315 C274 320 270 324 265 324 H260 C258 324 256 322 256 320 V314 C256 312 258 310 260 310 L265 310" stroke="#1a73e8" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>

    {/* 24/7 badge */}
    <g>
      <rect x="60" y="220" width="70" height="40" rx="20" fill="#34a853">
        <animate attributeName="y" values="220;225;220" dur="4s" repeatCount="indefinite" />
      </rect>
      <text x="95" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">24/7</text>
    </g>

    {/* Response time badge */}
    <g>
      <rect x="370" y="100" width="90" height="50" rx="12" fill="white" stroke="#1a73e8" strokeWidth="2">
        <animate attributeName="y" values="100;105;100" dur="3.2s" repeatCount="indefinite" />
      </rect>
      <text x="415" y="122" textAnchor="middle" fill="#5f6368" fontSize="10">Response</text>
      <text x="415" y="140" textAnchor="middle" fill="#1a73e8" fontSize="16" fontWeight="600">60 min</text>
    </g>

    {/* Floating elements */}
    <circle cx="80" cy="120" r="10" fill="#e3f2fd">
      <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="420" cy="280" r="8" fill="#e8f5e9">
      <animate attributeName="r" values="8;10;8" dur="2.5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default {
  HomeHeroGraphic,
  ServicesHeroGraphic,
  AboutHeroGraphic,
  ContactHeroGraphic,
};
