import React from 'react';

interface ServiceThumbProps {
  type: string;
}

const ServiceThumbVisual: React.FC<ServiceThumbProps> = ({ type }) => {
  const SvgWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <svg viewBox="0 0 320 180" className="w-full h-full bg-white">
      <rect x="0" y="0" width="320" height="180" rx="16" fill="#ffffff" />
      <rect x="20" y="20" width="280" height="140" rx="8" fill="#f3f4f6" stroke="#e5e7eb" strokeWidth="1" />
      {children}
    </svg>
  );

  switch (type) {
    // --- RESIDENTIAL RESTORATION ---
    
    case 'water-damage-dash':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Water damage restoration">
          <defs>
            <filter id="wd-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="wd-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Back Card */}
          <g transform="translate(40, 20)" filter="url(#wd-shadow1)">
            <rect width="160" height="100" rx="12" fill="#ffffff"/>
            <rect width="160" height="32" rx="12" fill="#e8f0fe"/>
            <rect y="20" width="160" height="12" fill="#e8f0fe"/>
            <g transform="translate(16, 10)">
              <rect width="14" height="14" rx="3" fill="#1a73e8" opacity="0.2"/>
              <rect x="3" y="5" width="8" height="2" rx="1" fill="#1a73e8"/>
              <rect x="3" y="8" width="5" height="2" rx="1" fill="#1a73e8"/>
            </g>
            <rect x="38" y="14" width="60" height="6" rx="3" fill="#1a73e8" opacity="0.3"/>
            <rect x="16" y="44" width="80" height="4" rx="2" fill="#e8eaed"/>
            <rect x="16" y="56" width="60" height="4" rx="2" fill="#e8eaed"/>
            <rect x="16" y="68" width="70" height="4" rx="2" fill="#e8eaed"/>
            <rect x="16" y="82" width="128" height="6" rx="3" fill="#f1f3f4"/>
            <rect x="16" y="82" width="90" height="6" rx="3" fill="#34a853"/>
          </g>
          {/* Front Card */}
          <g transform="translate(130, 50)" filter="url(#wd-shadow2)">
            <rect width="150" height="110" rx="12" fill="#ffffff"/>
            <rect width="150" height="36" rx="12" fill="#e6f4ea"/>
            <rect y="24" width="150" height="12" fill="#e6f4ea"/>
            <g transform="translate(12, 10)">
              <rect width="50" height="16" rx="8" fill="#ffffff"/>
              <text x="25" y="11" textAnchor="middle" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">DRYING</text>
            </g>
            <g transform="translate(20, 50)">
              <rect x="0" y="30" width="24" height="28" rx="4" fill="#4285f4" opacity="0.5"/>
              <rect x="36" y="10" width="24" height="48" rx="4" fill="#1a73e8"/>
              <rect x="72" y="20" width="24" height="38" rx="4" fill="#e8f0fe"/>
            </g>
            <text x="118" y="70" textAnchor="middle" fontSize="18" fontWeight="500" fill="#202124" fontFamily="system-ui">42%</text>
            <text x="118" y="84" textAnchor="middle" fontSize="8" fill="#5f6368" fontFamily="system-ui">RH</text>
          </g>
          {/* Badge */}
          <g transform="translate(245, 30)" filter="url(#wd-shadow1)">
            <rect width="56" height="24" rx="12" fill="#ffffff"/>
            <circle cx="14" cy="12" r="4" fill="#34a853"/>
            <text x="38" y="15" textAnchor="middle" fontSize="8" fontWeight="500" fill="#5f6368" fontFamily="system-ui">Active</text>
          </g>
        </svg>
      );

    case 'flood-timeline':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Flood cleanup timeline">
          <defs>
            <filter id="fc-shadowA" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.1"/>
            </filter>
            <filter id="fc-shadowB" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Main card */}
          <g transform="translate(30, 25)" filter="url(#fc-shadowA)">
            <rect width="200" height="130" rx="12" fill="#ffffff"/>
            <rect width="200" height="40" rx="12" fill="#1a73e8"/>
            <rect y="28" width="200" height="12" fill="#1a73e8"/>
            <g transform="translate(12, 12)">
              <rect width="70" height="18" rx="9" fill="#ffffff" opacity="0.2"/>
              <text x="35" y="12" textAnchor="middle" fontSize="9" fontWeight="500" fill="#ffffff" fontFamily="system-ui">STEP 2 OF 4</text>
            </g>
            <rect x="16" y="52" width="120" height="8" rx="4" fill="#dadce0"/>
            {/* Progress dots */}
            <g transform="translate(16, 72)">
              <circle cx="12" cy="8" r="8" fill="#34a853"/>
              <path d="M9 8 L11 10 L15 6" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="24" y1="8" x2="40" y2="8" stroke="#34a853" strokeWidth="2"/>
              <circle cx="52" cy="8" r="8" fill="#1a73e8"/>
              <circle cx="52" cy="8" r="3" fill="#ffffff"/>
              <line x1="64" y1="8" x2="80" y2="8" stroke="#e8eaed" strokeWidth="2"/>
              <circle cx="92" cy="8" r="8" fill="#e8eaed"/>
              <line x1="104" y1="8" x2="120" y2="8" stroke="#e8eaed" strokeWidth="2"/>
              <circle cx="132" cy="8" r="8" fill="#e8eaed"/>
            </g>
            {/* Labels centered under dots */}
            <g transform="translate(16, 100)">
              <text x="12" y="0" textAnchor="middle" fontSize="7" fill="#5f6368" fontFamily="system-ui">Assess</text>
              <text x="52" y="0" textAnchor="middle" fontSize="7" fill="#1a73e8" fontWeight="500" fontFamily="system-ui">Extract</text>
              <text x="92" y="0" textAnchor="middle" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Dry</text>
              <text x="132" y="0" textAnchor="middle" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Verify</text>
            </g>
          </g>
          {/* Side card */}
          <g transform="translate(200, 60)" filter="url(#fc-shadowB)">
            <rect width="100" height="70" rx="10" fill="#ffffff"/>
            <g transform="translate(14, 14)">
              <rect width="28" height="28" rx="6" fill="#e8f0fe"/>
              <path d="M10 20 L14 14 L18 18 L24 10" stroke="#1a73e8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <rect x="50" y="18" width="36" height="5" rx="2.5" fill="#dadce0"/>
            <rect x="50" y="28" width="28" height="5" rx="2.5" fill="#e8eaed"/>
            <text x="14" y="56" fontSize="11" fontWeight="500" fill="#202124" fontFamily="system-ui">~2 hrs</text>
            <text x="54" y="56" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">ETA</text>
          </g>
        </svg>
      );

    case 'storm-assessment':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Storm damage assessment">
          <defs>
            <filter id="sd-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="sd-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Back card - yellow */}
          <g transform="translate(30, 45) rotate(-3)" filter="url(#sd-shadow1)">
            <rect width="140" height="90" rx="10" fill="#fef7e0"/>
            <g transform="translate(16, 16)">
              <circle cx="12" cy="12" r="12" fill="#fbbc04" opacity="0.3"/>
              <text x="12" y="16" textAnchor="middle" fontSize="12" fill="#fbbc04" fontFamily="system-ui">!</text>
            </g>
            <rect x="50" y="18" width="60" height="5" rx="2.5" fill="#fbbc04" opacity="0.4"/>
            <rect x="50" y="28" width="40" height="4" rx="2" fill="#fbbc04" opacity="0.25"/>
          </g>
          {/* Middle card - orange */}
          <g transform="translate(55, 35) rotate(-1)" filter="url(#sd-shadow1)">
            <rect width="140" height="90" rx="10" fill="#fef3e8"/>
            <g transform="translate(16, 16)">
              <circle cx="12" cy="12" r="12" fill="#f9ab00" opacity="0.3"/>
            </g>
          </g>
          {/* Front card */}
          <g transform="translate(80, 25)" filter="url(#sd-shadow2)">
            <rect width="180" height="120" rx="12" fill="#ffffff"/>
            <g transform="translate(16, 16)">
              <rect width="32" height="32" rx="8" fill="#e8f0fe"/>
              <path d="M16 12 L8 18 V26 H24 V18 Z" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18 L16 10 L26 18" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <rect x="58" y="20" width="80" height="6" rx="3" fill="#dadce0"/>
            <rect x="58" y="32" width="50" height="5" rx="2.5" fill="#e8eaed"/>
            {/* Checklist */}
            <g transform="translate(16, 60)">
              <circle cx="6" cy="6" r="6" fill="#e6f4ea"/>
              <path d="M3 6 L5 8 L9 4" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <rect x="20" y="3" width="60" height="5" rx="2.5" fill="#e8eaed"/>
            </g>
            <g transform="translate(16, 78)">
              <circle cx="6" cy="6" r="6" fill="#e6f4ea"/>
              <path d="M3 6 L5 8 L9 4" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <rect x="20" y="3" width="80" height="5" rx="2.5" fill="#e8eaed"/>
            </g>
            <g transform="translate(16, 96)">
              <circle cx="6" cy="6" r="6" fill="#e8f0fe"/>
              <circle cx="6" cy="6" r="2" fill="#1a73e8"/>
              <rect x="20" y="3" width="50" height="5" rx="2.5" fill="#e8eaed"/>
            </g>
          </g>
          {/* Badge */}
          <g transform="translate(235, 20)" filter="url(#sd-shadow1)">
            <rect width="60" height="28" rx="14" fill="#ffffff"/>
            <text x="30" y="18" textAnchor="middle" fontSize="10" fontWeight="500" fill="#202124" fontFamily="system-ui">3 zones</text>
          </g>
        </svg>
      );

    case 'burst-pipe':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Burst pipe cleanup">
          <defs>
            <filter id="bp-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="bp-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Main card */}
          <g transform="translate(60, 20)" filter="url(#bp-shadow2)">
            <rect width="200" height="140" rx="14" fill="#ffffff"/>
            <rect width="200" height="44" rx="14" fill="#e6f4ea"/>
            <rect y="30" width="200" height="14" fill="#e6f4ea"/>
            <g transform="translate(14, 12)">
              <circle cx="10" cy="10" r="10" fill="#34a853" opacity="0.2"/>
              <circle cx="10" cy="10" r="4" fill="#34a853"/>
            </g>
            <text x="42" y="26" fontSize="11" fontWeight="500" fill="#34a853" fontFamily="system-ui">Water Controlled</text>
            {/* Pipe visual */}
            <g transform="translate(30, 60)">
              <rect y="15" width="140" height="12" rx="6" fill="#e8eaed"/>
              <circle cx="50" cy="21" r="14" fill="#34a853"/>
              <rect x="44" y="19" width="12" height="4" rx="2" fill="#ffffff"/>
              <g transform="translate(90, 15)">
                <line x1="0" y1="6" x2="30" y2="6" stroke="#dadce0" strokeWidth="2" strokeDasharray="4 3"/>
              </g>
            </g>
            {/* Metric */}
            <g transform="translate(30, 105)">
              <rect width="60" height="24" rx="6" fill="#f8f9fa"/>
              <text x="30" y="16" textAnchor="middle" fontSize="10" fontWeight="500" fill="#202124" fontFamily="system-ui">12 min</text>
            </g>
            <text x="100" y="120" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">since shutoff</text>
          </g>
          {/* Side card */}
          <g transform="translate(220, 90)" filter="url(#bp-shadow1)">
            <rect width="80" height="60" rx="10" fill="#ffffff"/>
            <g transform="translate(10, 10)">
              <rect width="24" height="24" rx="6" fill="#e8f0fe"/>
              <circle cx="12" cy="12" r="5" fill="none" stroke="#1a73e8" strokeWidth="1.5"/>
              <path d="M12 9 V12 L14 14" stroke="#1a73e8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </g>
            <rect x="42" y="14" width="28" height="4" rx="2" fill="#dadce0"/>
            <rect x="42" y="22" width="20" height="4" rx="2" fill="#e8eaed"/>
            <text x="10" y="50" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Response logged</text>
          </g>
        </svg>
      );

    case 'structural-drying':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Structural drying">
          <defs>
            <filter id="strd-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.06"/>
            </filter>
            <filter id="strd-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Left card - Equipment */}
          <g transform="translate(20, 30)" filter="url(#strd-shadow1)">
            <rect width="100" height="120" rx="10" fill="#ffffff"/>
            <rect width="100" height="8" rx="10" fill="#1a73e8"/>
            <rect y="5" width="100" height="3" fill="#1a73e8"/>
            <g transform="translate(14, 20)">
              <rect width="28" height="28" rx="6" fill="#e8f0fe"/>
              <circle cx="14" cy="14" r="8" fill="none" stroke="#1a73e8" strokeWidth="1.5"/>
              <circle cx="14" cy="14" r="3" fill="#1a73e8"/>
            </g>
            <rect x="50" y="24" width="36" height="5" rx="2.5" fill="#dadce0"/>
            <rect x="50" y="34" width="28" height="4" rx="2" fill="#e8eaed"/>
            <g transform="translate(14, 60)">
              <text x="0" y="12" fontSize="22" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">4</text>
              <text x="22" y="12" fontSize="9" fill="#5f6368" fontFamily="system-ui">units</text>
              <rect y="20" width="72" height="4" rx="2" fill="#f1f3f4"/>
              <rect y="28" width="72" height="4" rx="2" fill="#f1f3f4"/>
            </g>
          </g>
          {/* Center card - Progress */}
          <g transform="translate(90, 15)" filter="url(#strd-shadow2)">
            <rect width="140" height="150" rx="12" fill="#ffffff"/>
            <g transform="translate(14, 14)">
              <rect width="60" height="20" rx="10" fill="#e6f4ea"/>
              <text x="30" y="14" textAnchor="middle" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">ON TRACK</text>
            </g>
            {/* Room grid */}
            <g transform="translate(14, 45)">
              <rect width="52" height="40" rx="4" fill="#e6f4ea" stroke="#34a853" strokeWidth="1" opacity="0.7"/>
              <rect x="58" y="0" width="52" height="40" rx="4" fill="#e6f4ea" stroke="#34a853" strokeWidth="1" opacity="0.7"/>
              <rect y="46" width="52" height="35" rx="4" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1" opacity="0.7"/>
              <rect x="58" y="46" width="52" height="35" rx="4" fill="#e6f4ea" stroke="#34a853" strokeWidth="1" opacity="0.7"/>
            </g>
            <g transform="translate(14, 130)">
              <circle cx="4" cy="4" r="4" fill="#34a853"/>
              <text x="14" y="7" fontSize="7" fill="#5f6368" fontFamily="system-ui">Dry</text>
              <circle cx="50" cy="4" r="4" fill="#1a73e8"/>
              <text x="60" y="7" fontSize="7" fill="#5f6368" fontFamily="system-ui">Active</text>
            </g>
          </g>
          {/* Right card - Readings */}
          <g transform="translate(210, 40)" filter="url(#strd-shadow1)">
            <rect width="90" height="100" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 14)">
              <text x="0" y="10" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Cavity RH</text>
              <text x="0" y="28" fontSize="16" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">52%</text>
            </g>
            <line x1="12" y1="52" x2="78" y2="52" stroke="#f1f3f4" strokeWidth="1"/>
            <g transform="translate(12, 60)">
              <text x="0" y="10" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Day</text>
              <text x="0" y="28" fontSize="16" fontWeight="500" fill="#202124" fontFamily="system-ui">3 of 5</text>
            </g>
          </g>
        </svg>
      );

    // --- RESIDENTIAL CLEANUP ---

    case 'sewage-containment':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Sewage cleanup">
          <defs>
            <filter id="sew-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="sew-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.12"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Back card - hazard */}
          <g transform="translate(25, 40) rotate(-2)" filter="url(#sew-shadow1)">
            <rect width="130" height="90" rx="10" fill="#fce8e6"/>
            <g transform="translate(14, 14)">
              <circle cx="10" cy="10" r="10" fill="#ea4335" opacity="0.3"/>
              <text x="10" y="14" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ea4335" fontFamily="system-ui">!</text>
            </g>
            <rect x="42" y="16" width="50" height="5" rx="2.5" fill="#ea4335" opacity="0.3"/>
            <rect x="42" y="26" width="35" height="4" rx="2" fill="#ea4335" opacity="0.2"/>
          </g>
          {/* Main card */}
          <g transform="translate(70, 20)" filter="url(#sew-shadow2)">
            <rect width="190" height="140" rx="12" fill="#ffffff"/>
            <rect width="190" height="40" rx="12" fill="#e6f4ea"/>
            <rect y="28" width="190" height="12" fill="#e6f4ea"/>
            <g transform="translate(12, 12)">
              <rect width="80" height="18" rx="9" fill="#ffffff"/>
              <circle cx="12" cy="9" r="4" fill="#34a853"/>
              <text x="48" y="12" textAnchor="middle" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">CONTAINED</text>
            </g>
            {/* Checklist */}
            <g transform="translate(16, 52)">
              <circle cx="8" cy="8" r="8" fill="#e6f4ea"/>
              <path d="M5 8 L7 10 L11 6" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="24" y="5" width="70" height="5" rx="2.5" fill="#e8eaed"/>
              <text x="100" y="10" fontSize="7" fill="#34a853" fontFamily="system-ui">Isolated</text>
            </g>
            <g transform="translate(16, 74)">
              <circle cx="8" cy="8" r="8" fill="#e6f4ea"/>
              <path d="M5 8 L7 10 L11 6" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="24" y="5" width="55" height="5" rx="2.5" fill="#e8eaed"/>
              <text x="85" y="10" fontSize="7" fill="#34a853" fontFamily="system-ui">Sanitized</text>
            </g>
            <g transform="translate(16, 96)">
              <circle cx="8" cy="8" r="8" fill="#e8f0fe"/>
              <circle cx="8" cy="8" r="3" fill="#1a73e8"/>
              <rect x="24" y="5" width="65" height="5" rx="2.5" fill="#e8eaed"/>
              <text x="95" y="10" fontSize="7" fill="#1a73e8" fontFamily="system-ui">In progress</text>
            </g>
            <g transform="translate(16, 118)">
              <rect width="50" height="16" rx="4" fill="#f8f9fa"/>
              <text x="25" y="11" textAnchor="middle" fontSize="7" fill="#80868b" fontFamily="system-ui">HEPA Active</text>
            </g>
          </g>
          {/* Badge */}
          <g transform="translate(230, 25)" filter="url(#sew-shadow1)">
            <rect width="70" height="26" rx="13" fill="#ffffff"/>
            <text x="35" y="17" textAnchor="middle" fontSize="9" fontWeight="500" fill="#5f6368" fontFamily="system-ui">Cat. 3</text>
          </g>
        </svg>
      );

    case 'mold-neg-air':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Mold remediation">
          <defs>
            <filter id="mold-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="mold-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Left card - Containment */}
          <g transform="translate(20, 25)" filter="url(#mold-shadow2)">
            <rect width="160" height="130" rx="12" fill="#ffffff"/>
            <rect width="160" height="36" rx="12" fill="#f3e8fd"/>
            <rect y="24" width="160" height="12" fill="#f3e8fd"/>
            <g transform="translate(12, 10)">
              <rect width="20" height="20" rx="5" fill="#ffffff" opacity="0.6"/>
              <rect x="4" y="4" width="12" height="12" rx="2" fill="none" stroke="#a142f4" strokeWidth="1.5" strokeDasharray="2 2"/>
            </g>
            <text x="40" y="24" fontSize="9" fontWeight="500" fill="#a142f4" fontFamily="system-ui">Containment</text>
            {/* Zone diagram */}
            <g transform="translate(16, 48)">
              <rect width="128" height="60" rx="6" fill="#f8f9fa" stroke="#e8eaed" strokeWidth="1"/>
              <rect x="8" y="8" width="50" height="44" rx="4" fill="#f3e8fd" stroke="#a142f4" strokeWidth="1.5" strokeDasharray="4 2"/>
              <g transform="translate(66, 25)">
                <line x1="0" y1="0" x2="20" y2="0" stroke="#1a73e8" strokeWidth="1.5"/>
                <path d="M16 -4 L22 0 L16 4" fill="none" stroke="#1a73e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <rect x="92" y="15" width="28" height="20" rx="4" fill="#e8f0fe"/>
              <text x="106" y="28" textAnchor="middle" fontSize="6" fill="#1a73e8" fontFamily="system-ui">HEPA</text>
            </g>
            <g transform="translate(16, 116)">
              <circle cx="5" cy="5" r="5" fill="#34a853"/>
              <text x="16" y="8" fontSize="8" fill="#80868b" fontFamily="system-ui">Negative pressure active</text>
            </g>
          </g>
          {/* Right card - Verification */}
          <g transform="translate(160, 40)" filter="url(#mold-shadow1)">
            <rect width="130" height="100" rx="10" fill="#ffffff"/>
            <g transform="translate(14, 14)">
              <rect width="28" height="28" rx="6" fill="#e6f4ea"/>
              <circle cx="14" cy="14" r="7" fill="none" stroke="#34a853" strokeWidth="1.5"/>
              <path d="M11 14 L13 16 L17 12" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <rect x="50" y="20" width="60" height="5" rx="2.5" fill="#dadce0"/>
            <rect x="50" y="30" width="40" height="4" rx="2" fill="#e8eaed"/>
            <g transform="translate(14, 55)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Air clearance</text>
              <rect y="14" width="100" height="6" rx="3" fill="#f1f3f4"/>
              <rect y="14" width="85" height="6" rx="3" fill="#34a853"/>
            </g>
            <text x="14" y="90" fontSize="8" fill="#80868b" fontFamily="system-ui">Post-remediation: Pending</text>
          </g>
          {/* Badge */}
          <g transform="translate(245, 20)" filter="url(#mold-shadow1)">
            <rect width="56" height="24" rx="12" fill="#ffffff"/>
            <text x="28" y="16" textAnchor="middle" fontSize="8" fontWeight="500" fill="#5f6368" fontFamily="system-ui">2 zones</text>
          </g>
        </svg>
      );

    case 'fire-smoke':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Fire and smoke cleanup">
          <defs>
            <filter id="fire-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="fire-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Background card - soot particles */}
          <g transform="translate(30, 50) rotate(-2)" filter="url(#fire-shadow1)">
            <rect width="120" height="80" rx="10" fill="#f1f3f4"/>
            <circle cx="30" cy="25" r="2" fill="#bdc1c6"/>
            <circle cx="50" cy="35" r="1.5" fill="#bdc1c6"/>
            <circle cx="70" cy="20" r="2" fill="#bdc1c6"/>
            <circle cx="90" cy="40" r="1.5" fill="#bdc1c6"/>
            <circle cx="45" cy="55" r="2" fill="#bdc1c6"/>
          </g>
          {/* Main card */}
          <g transform="translate(70, 20)" filter="url(#fire-shadow2)">
            <rect width="180" height="140" rx="12" fill="#ffffff"/>
            <rect width="180" height="40" rx="12" fill="#fef3e8"/>
            <rect y="28" width="180" height="12" fill="#fef3e8"/>
            <g transform="translate(12, 12)">
              <rect width="70" height="18" rx="9" fill="#ffffff"/>
              <text x="35" y="12" textAnchor="middle" fontSize="8" fontWeight="500" fill="#fa7b17" fontFamily="system-ui">CLEANING</text>
            </g>
            {/* Progress bars */}
            <g transform="translate(16, 52)">
              <text x="0" y="8" fontSize="8" fill="#80868b" fontFamily="system-ui">Soot removal</text>
              <rect y="14" width="148" height="8" rx="4" fill="#f1f3f4"/>
              <rect y="14" width="110" height="8" rx="4" fill="#1a73e8"/>
              <text x="152" y="21" fontSize="8" fontWeight="500" fill="#5f6368" fontFamily="system-ui">75%</text>
            </g>
            <g transform="translate(16, 82)">
              <text x="0" y="8" fontSize="8" fill="#80868b" fontFamily="system-ui">Odor treatment</text>
              <rect y="14" width="148" height="8" rx="4" fill="#f1f3f4"/>
              <rect y="14" width="60" height="8" rx="4" fill="#34a853"/>
              <text x="152" y="21" fontSize="8" fontWeight="500" fill="#5f6368" fontFamily="system-ui">40%</text>
            </g>
            <g transform="translate(16, 116)">
              <rect width="80" height="20" rx="6" fill="#e8f0fe"/>
              <circle cx="14" cy="10" r="4" fill="#1a73e8"/>
              <text x="50" y="13" textAnchor="middle" fontSize="7" fill="#1a73e8" fontFamily="system-ui">Air scrubbers</text>
            </g>
          </g>
          {/* Side card - air quality */}
          <g transform="translate(215, 70)" filter="url(#fire-shadow1)">
            <rect width="85" height="70" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 12)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Air quality</text>
              <g transform="translate(0, 16)">
                <path d="M0 25 Q20 20, 35 15 T60 5" fill="none" stroke="#34a853" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="60" cy="5" r="3" fill="#34a853"/>
              </g>
              <text x="0" y="54" fontSize="9" fontWeight="500" fill="#34a853" fontFamily="system-ui">Improving</text>
            </g>
          </g>
        </svg>
      );

    case 'odor-gauge':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Odor removal">
          <defs>
            <filter id="odor-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="odor-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Back card - treatment complete */}
          <g transform="translate(20, 40) rotate(-2)" filter="url(#odor-shadow1)">
            <rect width="120" height="80" rx="10" fill="#e6f4ea"/>
            <g transform="translate(14, 14)">
              <circle cx="10" cy="10" r="10" fill="#34a853" opacity="0.3"/>
              <path d="M7 10 L9 12 L13 8" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </g>
            <rect x="42" y="16" width="50" height="5" rx="2.5" fill="#34a853" opacity="0.3"/>
            <rect x="42" y="26" width="35" height="4" rx="2" fill="#34a853" opacity="0.2"/>
          </g>
          {/* Main card - Air quality status */}
          <g transform="translate(55, 15)" filter="url(#odor-shadow2)">
            <rect width="185" height="150" rx="12" fill="#ffffff"/>
            <rect width="185" height="40" rx="12" fill="#e8f0fe"/>
            <rect y="28" width="185" height="12" fill="#e8f0fe"/>
            <g transform="translate(12, 12)">
              <rect width="26" height="18" rx="5" fill="#ffffff" opacity="0.6"/>
              <path d="M6 11 Q10 8, 14 11 Q18 14, 22 11" stroke="#1a73e8" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </g>
            <text x="46" y="24" fontSize="9" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">Air Quality</text>
            {/* Circular gauge */}
            <g transform="translate(92, 95)">
              <path d="M -35 0 A 35 35 0 0 1 35 0" fill="none" stroke="#f1f3f4" strokeWidth="8" strokeLinecap="round"/>
              <path d="M -35 0 A 35 35 0 0 1 28 -21" fill="none" stroke="#34a853" strokeWidth="8" strokeLinecap="round"/>
              <text x="0" y="-5" textAnchor="middle" fontSize="18" fontWeight="500" fill="#202124" fontFamily="system-ui">Good</text>
              <text x="0" y="10" textAnchor="middle" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Air Score</text>
            </g>
            {/* Status indicators */}
            <g transform="translate(16, 130)">
              <circle cx="5" cy="5" r="5" fill="#34a853"/>
              <text x="16" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Treatment active</text>
              <g transform="translate(95, 0)">
                <circle cx="5" cy="5" r="5" fill="#1a73e8"/>
                <text x="16" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Day 2 of 3</text>
              </g>
            </g>
          </g>
          {/* Right card - Equipment */}
          <g transform="translate(215, 50)" filter="url(#odor-shadow1)">
            <rect width="85" height="90" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 12)">
              <rect width="28" height="28" rx="6" fill="#e8f0fe"/>
              <rect x="6" y="6" width="16" height="16" rx="3" fill="none" stroke="#1a73e8" strokeWidth="1.5"/>
              <circle cx="14" cy="14" r="4" fill="none" stroke="#1a73e8" strokeWidth="1.5"/>
            </g>
            <rect x="48" y="18" width="28" height="4" rx="2" fill="#dadce0"/>
            <rect x="48" y="26" width="20" height="4" rx="2" fill="#e8eaed"/>
            <g transform="translate(12, 50)">
              <text x="0" y="12" fontSize="18" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">3</text>
              <text x="20" y="12" fontSize="8" fill="#80868b" fontFamily="system-ui">units</text>
            </g>
            <text x="12" y="80" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Hydroxyl generators</text>
          </g>
          {/* Badge */}
          <g transform="translate(240, 15)" filter="url(#odor-shadow1)">
            <rect width="60" height="24" rx="12" fill="#ffffff"/>
            <text x="30" y="16" textAnchor="middle" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">75% Clear</text>
          </g>
        </svg>
      );

    case 'contents-flow':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Contents cleaning and pack-out">
          <defs>
            <filter id="cont-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="cont-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Back card - inventory list hint */}
          <g transform="translate(25, 35) rotate(-2)" filter="url(#cont-shadow1)">
            <rect width="120" height="90" rx="10" fill="#f8f9fa"/>
            <rect x="12" y="12" width="96" height="6" rx="3" fill="#e8eaed"/>
            <rect x="12" y="24" width="80" height="6" rx="3" fill="#e8eaed"/>
            <rect x="12" y="36" width="88" height="6" rx="3" fill="#e8eaed"/>
            <rect x="12" y="48" width="70" height="6" rx="3" fill="#e8eaed"/>
          </g>
          {/* Main card */}
          <g transform="translate(60, 15)" filter="url(#cont-shadow2)">
            <rect width="180" height="150" rx="12" fill="#ffffff"/>
            <rect width="180" height="40" rx="12" fill="#fef7e0"/>
            <rect y="28" width="180" height="12" fill="#fef7e0"/>
            <g transform="translate(12, 11)">
              <rect width="20" height="20" rx="5" fill="#ffffff" opacity="0.6"/>
              <rect x="4" y="6" width="12" height="10" rx="1" fill="none" stroke="#fbbc04" strokeWidth="1.5"/>
              <path d="M4 9 L16 9" stroke="#fbbc04" strokeWidth="1.5"/>
            </g>
            <text x="40" y="24" fontSize="9" fontWeight="500" fill="#fbbc04" opacity="0.9" fontFamily="system-ui">Inventory</text>
            {/* Status rows */}
            <g transform="translate(16, 52)">
              <rect width="148" height="24" rx="6" fill="#e6f4ea"/>
              <circle cx="14" cy="12" r="6" fill="#34a853"/>
              <path d="M11 12 L13 14 L17 10" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <text x="28" y="15" fontSize="8" fill="#5f6368" fontFamily="system-ui">Packed</text>
              <text x="130" y="15" textAnchor="end" fontSize="10" fontWeight="500" fill="#34a853" fontFamily="system-ui">24</text>
            </g>
            <g transform="translate(16, 82)">
              <rect width="148" height="24" rx="6" fill="#e8f0fe"/>
              <circle cx="14" cy="12" r="6" fill="#1a73e8"/>
              <circle cx="14" cy="12" r="2" fill="#ffffff"/>
              <text x="28" y="15" fontSize="8" fill="#5f6368" fontFamily="system-ui">In cleaning</text>
              <text x="130" y="15" textAnchor="end" fontSize="10" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">12</text>
            </g>
            <g transform="translate(16, 112)">
              <rect width="148" height="24" rx="6" fill="#f8f9fa"/>
              <circle cx="14" cy="12" r="6" fill="#dadce0"/>
              <text x="28" y="15" fontSize="8" fill="#5f6368" fontFamily="system-ui">Returned</text>
              <text x="130" y="15" textAnchor="end" fontSize="10" fontWeight="500" fill="#80868b" fontFamily="system-ui">8</text>
            </g>
          </g>
          {/* Right card - photo docs */}
          <g transform="translate(215, 55)" filter="url(#cont-shadow1)">
            <rect width="85" height="75" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 12)">
              <rect width="26" height="26" rx="6" fill="#e8f0fe"/>
              <rect x="5" y="9" width="16" height="10" rx="2" fill="none" stroke="#1a73e8" strokeWidth="1.5"/>
              <circle cx="13" cy="14" r="3" fill="none" stroke="#1a73e8" strokeWidth="1.5"/>
            </g>
            <rect x="46" y="16" width="28" height="4" rx="2" fill="#dadce0"/>
            <rect x="46" y="24" width="20" height="4" rx="2" fill="#e8eaed"/>
            <g transform="translate(12, 48)">
              <text x="0" y="10" fontSize="14" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">156</text>
              <text x="0" y="22" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">photos logged</text>
            </g>
          </g>
          {/* Badge */}
          <g transform="translate(240, 20)" filter="url(#cont-shadow1)">
            <rect width="60" height="24" rx="12" fill="#ffffff"/>
            <text x="30" y="16" textAnchor="middle" fontSize="8" fontWeight="500" fill="#5f6368" fontFamily="system-ui">44 items</text>
          </g>
        </svg>
      );

    // --- RESIDENTIAL SPECIALTY ---

    case 'basement-extract':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Basement flooding restoration">
          <defs>
            <filter id="base-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="base-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Main card */}
          <g transform="translate(35, 15)" filter="url(#base-shadow2)">
            <rect width="190" height="150" rx="12" fill="#ffffff"/>
            <rect width="190" height="40" rx="12" fill="#e8f0fe"/>
            <rect y="28" width="190" height="12" fill="#e8f0fe"/>
            <g transform="translate(12, 12)">
              <rect width="70" height="18" rx="9" fill="#ffffff"/>
              <text x="35" y="12" textAnchor="middle" fontSize="8" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">EXTRACTING</text>
            </g>
            {/* Basement cross-section */}
            <g transform="translate(16, 50)">
              <rect width="158" height="70" rx="4" fill="#f8f9fa" stroke="#e8eaed" strokeWidth="1"/>
              <rect y="45" width="158" height="25" rx="0 0 4 4" fill="#e8f0fe" opacity="0.6"/>
              <line x1="0" y1="45" x2="158" y2="45" stroke="#1a73e8" strokeWidth="1.5" strokeDasharray="4 2"/>
              <g transform="translate(70, 30)">
                <rect width="20" height="24" rx="3" fill="#1a73e8"/>
                <rect x="6" y="-8" width="8" height="10" rx="2" fill="#1a73e8"/>
                <path d="M10 -12 L6 -6 L14 -6 Z" fill="#1a73e8"/>
              </g>
              <text x="165" y="20" fontSize="6" fill="#9aa0a6" fontFamily="system-ui">Start</text>
              <text x="165" y="50" fontSize="6" fill="#1a73e8" fontFamily="system-ui">Now</text>
            </g>
            {/* Progress bar */}
            <g transform="translate(16, 130)">
              <rect width="158" height="6" rx="3" fill="#f1f3f4"/>
              <rect width="100" height="6" rx="3" fill="#34a853"/>
              <text x="162" y="5" fontSize="8" fontWeight="500" fill="#5f6368" fontFamily="system-ui">63%</text>
            </g>
          </g>
          {/* Side card - Stats */}
          <g transform="translate(205, 45)" filter="url(#base-shadow1)">
            <rect width="95" height="95" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 14)">
              <text x="0" y="10" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Extracted</text>
              <text x="0" y="28" fontSize="16" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">840</text>
              <text x="38" y="28" fontSize="8" fill="#80868b" fontFamily="system-ui">gal</text>
            </g>
            <line x1="12" y1="52" x2="83" y2="52" stroke="#f1f3f4" strokeWidth="1"/>
            <g transform="translate(12, 60)">
              <text x="0" y="10" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Runtime</text>
              <text x="0" y="28" fontSize="16" fontWeight="500" fill="#202124" fontFamily="system-ui">2.5 hrs</text>
            </g>
          </g>
          {/* Badge */}
          <g transform="translate(245, 15)" filter="url(#base-shadow1)">
            <rect width="55" height="24" rx="12" fill="#ffffff"/>
            <circle cx="14" cy="12" r="4" fill="#34a853"/>
            <text x="38" y="15" textAnchor="middle" fontSize="7" fontWeight="500" fill="#5f6368" fontFamily="system-ui">Active</text>
          </g>
        </svg>
      );

    case 'crawl-equipment':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Crawl space drying">
          <defs>
            <filter id="crawl-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="crawl-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Back card hint */}
          <g transform="translate(25, 45) rotate(-2)" filter="url(#crawl-shadow1)">
            <rect width="110" height="70" rx="8" fill="#f8f9fa"/>
            <rect x="10" y="10" width="90" height="4" rx="2" fill="#e8eaed"/>
            <rect x="10" y="20" width="70" height="4" rx="2" fill="#e8eaed"/>
            <rect x="10" y="30" width="80" height="4" rx="2" fill="#e8eaed"/>
          </g>
          {/* Main card */}
          <g transform="translate(50, 15)" filter="url(#crawl-shadow2)">
            <rect width="180" height="150" rx="12" fill="#ffffff"/>
            <rect width="180" height="38" rx="12" fill="#fef3e8"/>
            <rect y="26" width="180" height="12" fill="#fef3e8"/>
            <g transform="translate(12, 11)">
              <rect width="24" height="18" rx="5" fill="#ffffff" opacity="0.6"/>
              <rect x="4" y="10" width="16" height="6" rx="1" fill="none" stroke="#fa7b17" strokeWidth="1.5"/>
              <line x1="8" y="6" x2="8" y2="10" stroke="#fa7b17" strokeWidth="1.5"/>
              <line x1="16" y1="6" x2="16" y2="10" stroke="#fa7b17" strokeWidth="1.5"/>
            </g>
            <text x="44" y="23" fontSize="9" fontWeight="500" fill="#fa7b17" fontFamily="system-ui">Crawl Space</text>
            {/* Equipment layout */}
            <g transform="translate(16, 48)">
              <rect width="148" height="65" rx="4" fill="#f8f9fa" stroke="#e8eaed" strokeWidth="1"/>
              <g transform="translate(15, 20)">
                <rect width="22" height="22" rx="4" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1"/>
                <text x="11" y="14" textAnchor="middle" fontSize="7" fill="#1a73e8" fontFamily="system-ui">DH</text>
              </g>
              <g transform="translate(55, 15)">
                <circle cx="12" cy="12" r="12" fill="#e6f4ea" stroke="#34a853" strokeWidth="1"/>
                <text x="12" y="15" textAnchor="middle" fontSize="7" fill="#34a853" fontFamily="system-ui">AM</text>
              </g>
              <g transform="translate(95, 25)">
                <circle cx="12" cy="12" r="12" fill="#e6f4ea" stroke="#34a853" strokeWidth="1"/>
                <text x="12" y="15" textAnchor="middle" fontSize="7" fill="#34a853" fontFamily="system-ui">AM</text>
              </g>
              <g transform="translate(115, 8)">
                <rect width="22" height="22" rx="4" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1"/>
                <text x="11" y="14" textAnchor="middle" fontSize="7" fill="#1a73e8" fontFamily="system-ui">DH</text>
              </g>
            </g>
            {/* Legend */}
            <g transform="translate(16, 122)">
              <rect width="16" height="10" rx="2" fill="#e8f0fe"/>
              <text x="22" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Dehu</text>
              <circle cx="65" cy="5" r="5" fill="#e6f4ea"/>
              <text x="76" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Air Mover</text>
            </g>
            <g transform="translate(16, 138)">
              <circle cx="4" cy="4" r="4" fill="#34a853"/>
              <text x="14" y="7" fontSize="7" fill="#80868b" fontFamily="system-ui">All equipment running</text>
            </g>
          </g>
          {/* Right card - readings */}
          <g transform="translate(210, 40)" filter="url(#crawl-shadow1)">
            <rect width="90" height="100" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 14)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Space RH</text>
              <text x="0" y="26" fontSize="18" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">68%</text>
            </g>
            <line x1="12" y1="50" x2="78" y2="50" stroke="#f1f3f4" strokeWidth="1"/>
            <g transform="translate(12, 58)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Target</text>
              <text x="0" y="26" fontSize="18" fontWeight="500" fill="#34a853" fontFamily="system-ui">45%</text>
            </g>
          </g>
        </svg>
      );

    case 'floor-mat-system':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Hardwood floor drying">
          <defs>
            <filter id="floor-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="floor-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Main card */}
          <g transform="translate(30, 15)" filter="url(#floor-shadow2)">
            <rect width="195" height="150" rx="12" fill="#ffffff"/>
            <rect width="195" height="40" rx="12" fill="#fef7e0"/>
            <rect y="28" width="195" height="12" fill="#fef7e0"/>
            <g transform="translate(12, 12)">
              <rect width="65" height="18" rx="9" fill="#ffffff"/>
              <text x="32" y="12" textAnchor="middle" fontSize="8" fontWeight="500" fill="#fbbc04" fontFamily="system-ui">FLOOR DRY</text>
            </g>
            {/* Floor grid with mat zones */}
            <g transform="translate(16, 50)">
              <rect width="163" height="70" rx="4" fill="#f5e6d3" stroke="#e8eaed" strokeWidth="1"/>
              <line x1="0" y1="14" x2="163" y2="14" stroke="#e8d4bc" strokeWidth="1"/>
              <line x1="0" y1="28" x2="163" y2="28" stroke="#e8d4bc" strokeWidth="1"/>
              <line x1="0" y1="42" x2="163" y2="42" stroke="#e8d4bc" strokeWidth="1"/>
              <line x1="0" y1="56" x2="163" y2="56" stroke="#e8d4bc" strokeWidth="1"/>
              {/* Mat zones */}
              <rect x="8" y="8" width="45" height="54" rx="3" fill="#e6f4ea" stroke="#34a853" strokeWidth="1.5" opacity="0.8"/>
              <rect x="60" y="8" width="45" height="54" rx="3" fill="#e6f4ea" stroke="#34a853" strokeWidth="1.5" opacity="0.8"/>
              <rect x="112" y="8" width="45" height="54" rx="3" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1.5" opacity="0.8"/>
              {/* Status icons */}
              <g transform="translate(23, 28)">
                <circle cx="7" cy="7" r="7" fill="#34a853"/>
                <path d="M4 7 L6 9 L10 5" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </g>
              <g transform="translate(75, 28)">
                <circle cx="7" cy="7" r="7" fill="#34a853"/>
                <path d="M4 7 L6 9 L10 5" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </g>
              <g transform="translate(127, 28)">
                <circle cx="7" cy="7" r="7" fill="#1a73e8"/>
                <circle cx="7" cy="7" r="2" fill="#ffffff"/>
              </g>
            </g>
            {/* Legend */}
            <g transform="translate(16, 128)">
              <circle cx="5" cy="5" r="5" fill="#34a853"/>
              <text x="16" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Dry</text>
              <circle cx="55" cy="5" r="5" fill="#1a73e8"/>
              <text x="66" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Active</text>
              <text x="110" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">3 mat zones</text>
            </g>
          </g>
          {/* Right card - moisture readings */}
          <g transform="translate(205, 35)" filter="url(#floor-shadow1)">
            <rect width="95" height="110" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 12)">
              <rect width="26" height="26" rx="6" fill="#e8f0fe"/>
              <rect x="8" y="5" width="10" height="16" rx="2" fill="none" stroke="#1a73e8" strokeWidth="1.5"/>
              <rect x="10" y="12" width="6" height="7" rx="1" fill="#1a73e8"/>
            </g>
            <rect x="46" y="18" width="36" height="4" rx="2" fill="#dadce0"/>
            <rect x="46" y="26" width="28" height="4" rx="2" fill="#e8eaed"/>
            <g transform="translate(12, 50)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Avg. MC%</text>
              <text x="0" y="28" fontSize="20" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">12.4</text>
            </g>
            <g transform="translate(12, 90)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Target: &lt;10%</text>
            </g>
          </g>
          {/* Badge */}
          <g transform="translate(245, 10)" filter="url(#floor-shadow1)">
            <rect width="55" height="22" rx="11" fill="#ffffff"/>
            <text x="27" y="14" textAnchor="middle" fontSize="7" fontWeight="500" fill="#5f6368" fontFamily="system-ui">Day 3</text>
          </g>
        </svg>
      );

    case 'roof-source-id':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Roof leak damage restoration">
          <defs>
            <filter id="roof-shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08"/>
            </filter>
            <filter id="roof-shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1"/>
            </filter>
          </defs>
          <rect width="320" height="180" fill="#ffffff"/>
          {/* Back card - alert */}
          <g transform="translate(20, 50) rotate(-2)" filter="url(#roof-shadow1)">
            <rect width="100" height="70" rx="8" fill="#fce8e6"/>
            <g transform="translate(12, 12)">
              <circle cx="8" cy="8" r="8" fill="#ea4335" opacity="0.3"/>
              <text x="8" y="12" textAnchor="middle" fontSize="10" fill="#ea4335" fontFamily="system-ui">!</text>
            </g>
            <rect x="36" y="14" width="50" height="4" rx="2" fill="#ea4335" opacity="0.25"/>
          </g>
          {/* Main card */}
          <g transform="translate(55, 15)" filter="url(#roof-shadow2)">
            <rect width="180" height="150" rx="12" fill="#ffffff"/>
            <rect width="180" height="40" rx="12" fill="#e4f7fb"/>
            <rect y="28" width="180" height="12" fill="#e4f7fb"/>
            <g transform="translate(12, 11)">
              <rect width="70" height="18" rx="9" fill="#ffffff"/>
              <text x="35" y="12" textAnchor="middle" fontSize="8" fontWeight="500" fill="#12b5cb" fontFamily="system-ui">IDENTIFIED</text>
            </g>
            {/* House cross-section */}
            <g transform="translate(20, 50)">
              <path d="M0 40 L70 5 L140 40" fill="none" stroke="#dadce0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect y="40" width="140" height="50" fill="#f8f9fa" stroke="#e8eaed" strokeWidth="1"/>
              <g transform="translate(85, 18)">
                <circle cx="0" cy="0" r="8" fill="#ea4335" opacity="0.2"/>
                <circle cx="0" cy="0" r="4" fill="#ea4335"/>
              </g>
              <path d="M85 22 L85 40 L85 65" stroke="#1a73e8" strokeWidth="2" strokeDasharray="4 3" opacity="0.6"/>
              <rect x="55" y="42" width="60" height="15" rx="2" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1" strokeDasharray="3 2"/>
              <text x="70" y="38" textAnchor="middle" fontSize="6" fill="#ea4335" fontFamily="system-ui">Source</text>
              <text x="85" y="62" textAnchor="middle" fontSize="6" fill="#1a73e8" fontFamily="system-ui">Affected</text>
            </g>
            {/* Status row */}
            <g transform="translate(16, 118)">
              <g>
                <circle cx="5" cy="5" r="5" fill="#34a853"/>
                <path d="M3 5 L4 6 L7 3" stroke="#ffffff" strokeWidth="1" fill="none" strokeLinecap="round"/>
                <text x="16" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Source found</text>
              </g>
              <g transform="translate(80, 0)">
                <circle cx="5" cy="5" r="5" fill="#1a73e8"/>
                <circle cx="5" cy="5" r="2" fill="#ffffff"/>
                <text x="16" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Drying ceiling</text>
              </g>
            </g>
            <g transform="translate(16, 136)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Affected area: ~45 sq ft</text>
            </g>
          </g>
          {/* Right card - readings */}
          <g transform="translate(215, 45)" filter="url(#roof-shadow1)">
            <rect width="85" height="90" rx="10" fill="#ffffff"/>
            <g transform="translate(12, 12)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Ceiling MC</text>
              <text x="0" y="28" fontSize="18" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">28%</text>
            </g>
            <line x1="12" y1="48" x2="73" y2="48" stroke="#f1f3f4" strokeWidth="1"/>
            <g transform="translate(12, 56)">
              <text x="0" y="8" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Drying</text>
              <text x="0" y="24" fontSize="12" fontWeight="500" fill="#202124" fontFamily="system-ui">Day 2</text>
            </g>
          </g>
          {/* Badge */}
          <g transform="translate(240, 15)" filter="url(#roof-shadow1)">
            <rect width="60" height="24" rx="12" fill="#ffffff"/>
            <text x="30" y="16" textAnchor="middle" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">Contained</text>
          </g>
        </svg>
      );

    // --- COMMERCIAL ---

    case 'com-water-dash':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Commercial water damage">
            <defs>
            <filter id="cw1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15"/>
            </filter>
            </defs>
            
            {/* Full blue background */}
            <rect width="320" height="180" fill="#d2e3fc"/>
            <ellipse cx="320" cy="180" rx="150" ry="100" fill="#1a73e8" opacity="0.15"/>
            
            {/* Main dashboard card */}
            <g transform="translate(25, 25)" filter="url(#cw1)">
            <rect width="175" height="130" rx="12" fill="#ffffff"/>
            <text x="16" y="28" fontSize="11" fontWeight="500" fill="#202124" fontFamily="system-ui">Project Dashboard</text>
            
            <g transform="translate(16, 45)">
                <rect width="65" height="35" rx="6" fill="#f8f9fa"/>
                <text x="8" y="14" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Sq Ft</text>
                <text x="8" y="28" fontSize="12" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">12,400</text>
            </g>
            <g transform="translate(90, 45)">
                <rect width="65" height="35" rx="6" fill="#f8f9fa"/>
                <text x="8" y="14" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Teams</text>
                <text x="8" y="28" fontSize="12" fontWeight="500" fill="#202124" fontFamily="system-ui">4</text>
            </g>
            
            <g transform="translate(16, 92)">
                <text x="0" y="10" fontSize="8" fill="#80868b" fontFamily="system-ui">Drying progress</text>
                <rect y="16" width="143" height="6" rx="3" fill="#f1f3f4"/>
                <rect y="16" width="95" height="6" rx="3" fill="#34a853"/>
                <text x="147" y="22" fontSize="8" fontWeight="500" fill="#5f6368" fontFamily="system-ui">66%</text>
            </g>
            </g>
            
            {/* Status card */}
            <g transform="translate(215, 35)" filter="url(#cw1)">
            <rect width="85" height="45" rx="10" fill="#ffffff"/>
            <circle cx="20" cy="22" r="10" fill="#e6f4ea"/>
            <path d="M16 22 L19 25 L24 19" stroke="#34a853" strokeWidth="2" fill="none" strokeLinecap="round"/>
            <text x="36" y="20" fontSize="8" fill="#80868b" fontFamily="system-ui">Status</text>
            <text x="36" y="32" fontSize="9" fontWeight="500" fill="#34a853" fontFamily="system-ui">On Track</text>
            </g>
            
            {/* Equipment card */}
            <g transform="translate(205, 100)" filter="url(#cw1)">
            <rect width="95" height="55" rx="10" fill="#ffffff"/>
            <text x="12" y="20" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Equipment</text>
            <text x="12" y="38" fontSize="16" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">24</text>
            <text x="40" y="38" fontSize="9" fill="#80868b" fontFamily="system-ui">units</text>
            </g>
        </svg>
      );

    case 'com-flood-zones':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Commercial flood cleanup">
            <defs>
            <filter id="cf1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12"/>
            </filter>
            </defs>
            
            <rect width="320" height="180" fill="#f8f9fa"/>
            
            {/* Tablet frame */}
            <g transform="translate(45, 15)" filter="url(#cf1)">
            <rect width="230" height="150" rx="16" fill="#5f6368"/>
            <rect x="8" y="8" width="214" height="134" rx="8" fill="#ffffff"/>
            
            {/* Screen content */}
            <g transform="translate(16, 16)">
                <rect width="198" height="24" rx="4" fill="#1a73e8"/>
                <text x="10" y="16" fontSize="9" fontWeight="500" fill="#ffffff" fontFamily="system-ui">Flood Response - Building A</text>
                <circle cx="185" cy="12" r="6" fill="#ffffff" opacity="0.3"/>
                
                <g transform="translate(0, 32)">
                <rect width="60" height="40" rx="4" fill="#e6f4ea"/>
                <text x="8" y="14" fontSize="6" fill="#34a853" fontFamily="system-ui">Extracted</text>
                <text x="8" y="30" fontSize="11" fontWeight="500" fill="#34a853" fontFamily="system-ui">2,400 gal</text>
                
                <g transform="translate(68, 0)">
                    <rect width="60" height="40" rx="4" fill="#e8f0fe"/>
                    <text x="8" y="14" fontSize="6" fill="#1a73e8" fontFamily="system-ui">Active</text>
                    <text x="8" y="30" fontSize="11" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">3 zones</text>
                </g>
                
                <g transform="translate(136, 0)">
                    <rect width="60" height="40" rx="4" fill="#f1f3f4"/>
                    <text x="8" y="14" fontSize="6" fill="#80868b" fontFamily="system-ui">Crew</text>
                    <text x="8" y="30" fontSize="11" fontWeight="500" fill="#202124" fontFamily="system-ui">8 techs</text>
                </g>
                </g>
                
                <g transform="translate(0, 82)">
                <rect width="198" height="28" rx="4" fill="#f8f9fa"/>
                <circle cx="16" cy="14" r="6" fill="#34a853"/>
                <text x="28" y="17" fontSize="8" fill="#5f6368" fontFamily="system-ui">24/7 monitoring active</text>
                <rect x="140" y="6" width="50" height="16" rx="8" fill="#1a73e8"/>
                <text x="165" y="17" textAnchor="middle" fontSize="7" fill="#ffffff" fontFamily="system-ui">View</text>
                </g>
            </g>
            </g>
        </svg>
      );

    case 'large-loss-phases':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Large loss restoration">
            <defs>
            <filter id="ll1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="5" floodOpacity="0.12"/>
            </filter>
            </defs>
            
            <rect width="320" height="180" fill="#ffffff"/>
            
            {/* Phase 1 - Green */}
            <g transform="translate(25, 45)" filter="url(#ll1)">
            <rect width="75" height="110" rx="12" fill="#ceead6"/>
            <g transform="translate(12, 15)">
                <circle cx="25" cy="12" r="12" fill="#34a853" opacity="0.3"/>
                <path d="M21 12 L24 15 L29 9" stroke="#34a853" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </g>
            <text x="37" y="60" textAnchor="middle" fontSize="9" fontWeight="500" fill="#34a853" fontFamily="system-ui">Phase 1</text>
            <text x="37" y="75" textAnchor="middle" fontSize="7" fill="#34a853" opacity="0.8" fontFamily="system-ui">Mitigation</text>
            <text x="37" y="95" textAnchor="middle" fontSize="8" fill="#34a853" fontFamily="system-ui">✓ Complete</text>
            </g>
            
            {/* Phase 2 - Yellow */}
            <g transform="translate(85, 35)" filter="url(#ll1)">
            <rect width="75" height="120" rx="12" fill="#fef7e0"/>
            <g transform="translate(12, 15)">
                <rect x="12" y="2" width="26" height="20" rx="4" fill="#fbbc04" opacity="0.4"/>
            </g>
            <text x="37" y="60" textAnchor="middle" fontSize="9" fontWeight="500" fill="#b06000" fontFamily="system-ui">Phase 2</text>
            <text x="37" y="75" textAnchor="middle" fontSize="7" fill="#b06000" opacity="0.8" fontFamily="system-ui">Rebuild</text>
            <g transform="translate(14, 85)">
                <rect width="47" height="4" rx="2" fill="#fbbc04" opacity="0.4"/>
                <rect width="30" height="4" rx="2" fill="#fbbc04"/>
            </g>
            <text x="37" y="105" textAnchor="middle" fontSize="7" fill="#b06000" fontFamily="system-ui">In Progress</text>
            </g>
            
            {/* Phase 3 - Blue (front) */}
            <g transform="translate(145, 20)" filter="url(#ll1)">
            <rect width="150" height="140" rx="14" fill="#1a73e8"/>
            <g transform="translate(16, 16)">
                <rect width="55" height="22" rx="11" fill="#ffffff" opacity="0.2"/>
                <text x="27" y="15" textAnchor="middle" fontSize="8" fill="#ffffff" fontFamily="system-ui">PHASE 3</text>
            </g>
            <text x="16" y="60" fontSize="13" fontWeight="500" fill="#ffffff" fontFamily="system-ui">Restoration</text>
            <text x="16" y="78" fontSize="9" fill="#ffffff" opacity="0.8" fontFamily="system-ui">Full property rebuild</text>
            
            <g transform="translate(16, 95)">
                <circle cx="6" cy="6" r="6" fill="#ffffff" opacity="0.2"/>
                <rect x="20" y="3" width="80" height="5" rx="2.5" fill="#ffffff" opacity="0.3"/>
            </g>
            <g transform="translate(16, 112)">
                <circle cx="6" cy="6" r="6" fill="#ffffff" opacity="0.2"/>
                <rect x="20" y="3" width="60" height="5" rx="2.5" fill="#ffffff" opacity="0.3"/>
            </g>
            </g>
        </svg>
      );

    case 'com-sewage':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Commercial sewage cleanup">
            <defs>
            <filter id="cs1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.12"/>
            </filter>
            </defs>
            
            {/* Full peach background */}
            <rect width="320" height="180" fill="#fce8e6"/>
            <ellipse cx="0" cy="90" rx="80" ry="120" fill="#f6aea9" opacity="0.4"/>
            
            {/* Main white card */}
            <g transform="translate(70, 20)" filter="url(#cs1)">
            <rect width="180" height="140" rx="14" fill="#ffffff"/>
            
            <g transform="translate(12, 12)">
                <rect width="50" height="20" rx="10" fill="#fce8e6"/>
                <text x="25" y="14" textAnchor="middle" fontSize="7" fontWeight="500" fill="#ea4335" fontFamily="system-ui">CAT. 3</text>
            </g>
            
            <text x="16" y="55" fontSize="12" fontWeight="500" fill="#202124" fontFamily="system-ui">Biohazard Protocol</text>
            
            <g transform="translate(16, 68)">
                <circle cx="7" cy="7" r="7" fill="#e6f4ea"/>
                <path d="M4 7 L6 9 L10 5" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <text x="22" y="10" fontSize="9" fill="#5f6368" fontFamily="system-ui">Area contained</text>
            </g>
            <g transform="translate(16, 88)">
                <circle cx="7" cy="7" r="7" fill="#e6f4ea"/>
                <path d="M4 7 L6 9 L10 5" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <text x="22" y="10" fontSize="8" fill="#5f6368" fontFamily="system-ui">PPE deployed</text>
            </g>
            <g transform="translate(16, 108)">
                <circle cx="7" cy="7" r="7" fill="#e8f0fe"/>
                <circle cx="7" cy="7" r="3" fill="#1a73e8"/>
                <text x="22" y="10" fontSize="9" fill="#5f6368" fontFamily="system-ui">Extraction in progress</text>
            </g>
            </g>
            
            {/* Side badge */}
            <g transform="translate(260, 85)" filter="url(#cs1)">
            <rect width="50" height="50" rx="25" fill="#ffffff"/>
            <text x="25" y="28" textAnchor="middle" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">HEPA</text>
            <circle cx="25" cy="38" r="4" fill="#34a853"/>
            </g>
        </svg>
      );

    case 'com-mold':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Commercial mold remediation">
            <defs>
            <filter id="cm1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
            </filter>
            </defs>
            
            <rect width="320" height="180" fill="#f0f4f9"/>
            
            {/* Main illustration card */}
            <g transform="translate(20, 20)" filter="url(#cm1)">
            <rect width="175" height="140" rx="12" fill="#ffffff"/>
            
            {/* Containment diagram */}
            <g transform="translate(20, 20)">
                <rect width="135" height="80" rx="4" fill="#f8f9fa" stroke="#e8eaed" strokeWidth="1"/>
                <rect x="10" y="10" width="55" height="60" rx="4" fill="#f3e8fd" stroke="#a142f4" strokeWidth="2" strokeDasharray="4 2"/>
                <g transform="translate(75, 35)">
                <line x1="0" y1="0" x2="25" y2="0" stroke="#1a73e8" strokeWidth="2"/>
                <path d="M22 -4 L28 0 L22 4" fill="#1a73e8"/>
                </g>
                <rect x="105" y="25" width="22" height="30" rx="3" fill="#e8f0fe" stroke="#1a73e8" strokeWidth="1"/>
                <text x="116" y="44" textAnchor="middle" fontSize="6" fill="#1a73e8" fontFamily="system-ui">AFD</text>
            </g>
            
            {/* Legend */}
            <g transform="translate(20, 110)">
                <rect width="12" height="12" rx="2" fill="#f3e8fd" stroke="#a142f4" strokeWidth="1" strokeDasharray="2 1"/>
                <text x="18" y="10" fontSize="7" fill="#80868b" fontFamily="system-ui">Contained</text>
                <circle cx="85" cy="6" r="5" fill="#1a73e8"/>
                <text x="95" y="10" fontSize="7" fill="#80868b" fontFamily="system-ui">Neg. air</text>
            </g>
            </g>
            
            {/* Right side info cards */}
            <g transform="translate(210, 25)" filter="url(#cm1)">
            <rect width="90" height="55" rx="10" fill="#ffffff"/>
            <text x="12" y="20" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Clearance</text>
            <g transform="translate(12, 28)">
                <rect width="66" height="6" rx="3" fill="#f1f3f4"/>
                <rect width="50" height="6" rx="3" fill="#34a853"/>
            </g>
            <text x="12" y="48" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">75% complete</text>
            </g>
            
            <g transform="translate(210, 95)" filter="url(#cm1)">
            <rect width="90" height="65" rx="10" fill="#ffffff"/>
            <text x="12" y="18" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Zones</text>
            <text x="12" y="38" fontSize="20" fontWeight="500" fill="#a142f4" fontFamily="system-ui">3</text>
            <text x="12" y="55" fontSize="8" fill="#80868b" fontFamily="system-ui">under treatment</text>
            </g>
        </svg>
      );

    case 'com-fire':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Commercial fire cleanup">
            <defs>
            <filter id="cfire1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
            </filter>
            </defs>
            
            <rect width="320" height="180" fill="#f1f3f4"/>
            
            {/* Browser window */}
            <g transform="translate(30, 15)" filter="url(#cfire1)">
            <rect width="260" height="150" rx="10" fill="#ffffff"/>
            
            {/* Browser chrome */}
            <rect width="260" height="28" rx="10" fill="#f1f3f4"/>
            <rect y="18" width="260" height="10" fill="#f1f3f4"/>
            
            {/* Traffic lights */}
            <circle cx="16" cy="14" r="5" fill="#ff5f57"/>
            <circle cx="32" cy="14" r="5" fill="#ffbd2e"/>
            <circle cx="48" cy="14" r="5" fill="#28c840"/>
            
            {/* URL bar */}
            <rect x="65" y="8" width="130" height="12" rx="6" fill="#ffffff"/>
            <text x="75" y="17" fontSize="6" fill="#9aa0a6" fontFamily="system-ui">restoration-report.pdf</text>
            
            {/* Content */}
            <g transform="translate(16, 38)">
                <rect width="228" height="30" rx="4" fill="#fef3e8"/>
                <text x="12" y="12" fontSize="7" fill="#fa7b17" fontFamily="system-ui">FIRE DAMAGE REPORT</text>
                <text x="12" y="24" fontSize="9" fontWeight="500" fill="#202124" fontFamily="system-ui">Commercial Property - 1250 Main St</text>
                
                <g transform="translate(0, 40)">
                <rect width="110" height="30" rx="4" fill="#f8f9fa"/>
                <text x="8" y="12" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Affected Area</text>
                <text x="8" y="24" fontSize="10" fontWeight="500" fill="#202124" fontFamily="system-ui">8,200 sq ft</text>
                
                <g transform="translate(118, 0)">
                    <rect width="110" height="30" rx="4" fill="#f8f9fa"/>
                    <text x="8" y="12" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Smoke Damage</text>
                    <text x="8" y="24" fontSize="10" fontWeight="500" fill="#202124" fontFamily="system-ui">3 floors</text>
                </g>
                </g>
                
                <g transform="translate(0, 78)">
                <text x="0" y="8" fontSize="7" fill="#80868b" fontFamily="system-ui">Cleanup Progress</text>
                <rect y="12" width="228" height="6" rx="3" fill="#f1f3f4"/>
                <rect y="12" width="140" height="6" rx="3" fill="#34a853"/>
                </g>
            </g>
            </g>
        </svg>
      );

    case 'moisture-mapping':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Moisture mapping">
            <defs>
            <filter id="mm1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
            </filter>
            <linearGradient id="heatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34a853"/>
                <stop offset="50%" stopColor="#fbbc04"/>
                <stop offset="100%" stopColor="#ea4335"/>
            </linearGradient>
            </defs>
            
            <rect width="320" height="180" fill="#e8f0f8"/>
            
            {/* Main card */}
            <g transform="translate(20, 15)" filter="url(#mm1)">
            <rect width="200" height="150" rx="12" fill="#ffffff"/>
            
            {/* Floor plan grid */}
            <g transform="translate(15, 15)">
                <rect width="170" height="95" rx="4" fill="#f8f9fa" stroke="#e8eaed" strokeWidth="1"/>
                
                {/* Heat zones */}
                <rect x="10" y="10" width="45" height="35" rx="4" fill="#e6f4ea"/>
                <rect x="60" y="10" width="45" height="35" rx="4" fill="#fef7e0"/>
                <rect x="110" y="10" width="50" height="35" rx="4" fill="#fce8e6"/>
                <rect x="10" y="50" width="70" height="35" rx="4" fill="#e6f4ea"/>
                <rect x="85" y="50" width="75" height="35" rx="4" fill="#e8f0fe"/>
                
                {/* Moisture readings */}
                <text x="32" y="32" textAnchor="middle" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">12%</text>
                <text x="82" y="32" textAnchor="middle" fontSize="8" fontWeight="500" fill="#b06000" fontFamily="system-ui">18%</text>
                <text x="135" y="32" textAnchor="middle" fontSize="8" fontWeight="500" fill="#ea4335" fontFamily="system-ui">28%</text>
                <text x="45" y="72" textAnchor="middle" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">10%</text>
                <text x="122" y="72" textAnchor="middle" fontSize="8" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">15%</text>
            </g>
            
            {/* Legend */}
            <g transform="translate(15, 120)">
                <rect width="170" height="8" rx="4" fill="url(#heatGrad)"/>
                <text x="0" y="20" fontSize="6" fill="#80868b" fontFamily="system-ui">Dry</text>
                <text x="80" y="20" textAnchor="middle" fontSize="6" fill="#80868b" fontFamily="system-ui">Moderate</text>
                <text x="160" y="20" textAnchor="end" fontSize="6" fill="#80868b" fontFamily="system-ui">Wet</text>
            </g>
            </g>
            
            {/* Side card */}
            <g transform="translate(235, 30)" filter="url(#mm1)">
            <rect width="70" height="120" rx="10" fill="#ffffff"/>
            <text x="35" y="22" textAnchor="middle" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Readings</text>
            <text x="35" y="48" textAnchor="middle" fontSize="22" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">47</text>
            <line x1="12" y1="62" x2="58" y2="62" stroke="#f1f3f4" strokeWidth="1"/>
            <text x="35" y="80" textAnchor="middle" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Last updated</text>
            <text x="35" y="95" textAnchor="middle" fontSize="9" fontWeight="500" fill="#5f6368" fontFamily="system-ui">2 min ago</text>
            </g>
        </svg>
      );

    case 'iaq':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Indoor air quality testing">
            <defs>
            <filter id="iaq1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15"/>
            </filter>
            </defs>
            
            {/* Full green background */}
            <rect width="320" height="180" fill="#ceead6"/>
            <circle cx="320" cy="0" r="120" fill="#34a853" opacity="0.15"/>
            
            {/* Main white card */}
            <g transform="translate(30, 20)" filter="url(#iaq1)">
            <rect width="180" height="140" rx="14" fill="#ffffff"/>
            
            <text x="20" y="30" fontSize="12" fontWeight="500" fill="#202124" fontFamily="system-ui">Air Quality Index</text>
            
            {/* Large gauge */}
            <g transform="translate(90, 95)">
                <path d="M -50 0 A 50 50 0 0 1 50 0" fill="none" stroke="#f1f3f4" strokeWidth="12" strokeLinecap="round"/>
                <path d="M -50 0 A 50 50 0 0 1 35 -35" fill="none" stroke="#34a853" strokeWidth="12" strokeLinecap="round"/>
                <text x="0" y="-10" textAnchor="middle" fontSize="24" fontWeight="500" fill="#202124" fontFamily="system-ui">Good</text>
                <text x="0" y="8" textAnchor="middle" fontSize="9" fill="#9aa0a6" fontFamily="system-ui">AQI: 42</text>
            </g>
            
            <g transform="translate(20, 125)">
                <circle cx="5" cy="5" r="5" fill="#34a853"/>
                <text x="16" y="8" fontSize="8" fill="#80868b" fontFamily="system-ui">HEPA filtration active</text>
            </g>
            </g>
            
            {/* Side metrics */}
            <g transform="translate(225, 30)" filter="url(#iaq1)">
            <rect width="75" height="50" rx="10" fill="#ffffff"/>
            <text x="12" y="18" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Particles</text>
            <text x="12" y="36" fontSize="14" fontWeight="500" fill="#34a853" fontFamily="system-ui">Low</text>
            </g>
            
            <g transform="translate(225, 95)" filter="url(#iaq1)">
            <rect width="75" height="50" rx="10" fill="#ffffff"/>
            <text x="12" y="18" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">VOCs</text>
            <text x="12" y="36" fontSize="14" fontWeight="500" fill="#34a853" fontFamily="system-ui">Normal</text>
            </g>
        </svg>
      );

    case 'env-test':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Environmental testing">
            <defs>
            <filter id="et1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.12"/>
            </filter>
            </defs>
            
            <rect width="320" height="180" fill="#f8f9fa"/>
            
            {/* Phone frame */}
            <g transform="translate(100, 8)" filter="url(#et1)">
            <rect width="120" height="164" rx="20" fill="#5f6368"/>
            <rect x="8" y="8" width="104" height="148" rx="12" fill="#ffffff"/>
            <rect x="40" y="12" width="40" height="6" rx="3" fill="#5f6368"/>
            
            {/* Screen content */}
            <g transform="translate(16, 28)">
                <text x="0" y="12" fontSize="10" fontWeight="500" fill="#202124" fontFamily="system-ui">Test Results</text>
                <text x="0" y="24" fontSize="7" fill="#9aa0a6" fontFamily="system-ui">Sample ID: ENV-2024-1847</text>
                
                <g transform="translate(0, 35)">
                <rect width="88" height="28" rx="6" fill="#e6f4ea"/>
                <text x="8" y="12" fontSize="7" fill="#80868b" fontFamily="system-ui">Lead</text>
                <text x="8" y="22" fontSize="9" fontWeight="500" fill="#34a853" fontFamily="system-ui">Not Detected</text>
                </g>
                
                <g transform="translate(0, 68)">
                <rect width="88" height="28" rx="6" fill="#e6f4ea"/>
                <text x="8" y="12" fontSize="7" fill="#80868b" fontFamily="system-ui">Asbestos</text>
                <text x="8" y="22" fontSize="9" fontWeight="500" fill="#34a853" fontFamily="system-ui">Not Detected</text>
                </g>
                
                <g transform="translate(0, 101)">
                <rect width="88" height="28" rx="6" fill="#e8f0fe"/>
                <text x="8" y="12" fontSize="7" fill="#80868b" fontFamily="system-ui">Mold Spores</text>
                <text x="8" y="22" fontSize="9" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">Normal range</text>
                </g>
            </g>
            </g>
            
            {/* Side badge */}
            <g transform="translate(235, 70)" filter="url(#et1)">
            <rect width="65" height="40" rx="10" fill="#ffffff"/>
            <text x="32" y="18" textAnchor="middle" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Status</text>
            <text x="32" y="32" textAnchor="middle" fontSize="10" fontWeight="500" fill="#34a853" fontFamily="system-ui">✓ Clear</text>
            </g>
        </svg>
      );

    case 'healthcare':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Healthcare facility restoration">
            <defs>
            <filter id="hc1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15"/>
            </filter>
            </defs>
            
            {/* Full teal background */}
            <rect width="320" height="180" fill="#e0f2f1"/>
            
            {/* Decorative cross */}
            <g transform="translate(250, 20)" opacity="0.15">
            <rect x="15" y="0" width="20" height="50" rx="4" fill="#00897b"/>
            <rect x="0" y="15" width="50" height="20" rx="4" fill="#00897b"/>
            </g>
            
            {/* Main white card */}
            <g transform="translate(25, 20)" filter="url(#hc1)">
            <rect width="190" height="140" rx="14" fill="#ffffff"/>
            
            <g transform="translate(12, 12)">
                <rect width="70" height="20" rx="10" fill="#e0f2f1"/>
                <text x="35" y="14" textAnchor="middle" fontSize="7" fontWeight="500" fill="#00897b" fontFamily="system-ui">HEALTHCARE</text>
            </g>
            
            <text x="16" y="55" fontSize="11" fontWeight="500" fill="#202124" fontFamily="system-ui">Compliance Checklist</text>
            
            <g transform="translate(16, 68)">
                <circle cx="7" cy="7" r="7" fill="#e6f4ea"/>
                <path d="M4 7 L6 9 L10 5" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <text x="22" y="10" fontSize="8" fill="#5f6368" fontFamily="system-ui">HIPAA protocols</text>
            </g>
            <g transform="translate(16, 88)">
                <circle cx="7" cy="7" r="7" fill="#e6f4ea"/>
                <path d="M4 7 L6 9 L10 5" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <text x="22" y="10" fontSize="8" fill="#5f6368" fontFamily="system-ui">Infection control</text>
            </g>
            <g transform="translate(16, 108)">
                <circle cx="7" cy="7" r="7" fill="#e6f4ea"/>
                <path d="M4 7 L6 9 L10 5" stroke="#34a853" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <text x="22" y="10" fontSize="8" fill="#5f6368" fontFamily="system-ui">24/7 availability</text>
            </g>
            </g>
            
            {/* Side card */}
            <g transform="translate(230, 45)" filter="url(#hc1)">
            <rect width="70" height="90" rx="12" fill="#ffffff"/>
            <g transform="translate(15, 15)">
                <rect width="40" height="40" rx="20" fill="#e0f2f1"/>
                <text x="20" y="26" textAnchor="middle" fontSize="16" fill="#00897b" fontFamily="system-ui">+</text>
            </g>
            <text x="35" y="72" textAnchor="middle" fontSize="8" fill="#80868b" fontFamily="system-ui">Certified</text>
            </g>
        </svg>
      );

    case 'hospitality':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Hospitality restoration">
            <defs>
            <filter id="hosp1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
            </filter>
            </defs>
            
            {/* Light warm background */}
            <rect width="320" height="180" fill="#fef9f3"/>
            
            {/* Left illustration */}
            <g transform="translate(25, 25)" filter="url(#hosp1)">
            <rect width="140" height="130" rx="14" fill="#fef7e0"/>
            
            {/* Hotel building */}
            <g transform="translate(35, 20)">
                <rect x="0" y="25" width="70" height="70" rx="4" fill="#ffffff"/>
                <rect x="10" y="5" width="50" height="25" rx="2" fill="#ffffff"/>
                <rect x="8" y="35" width="12" height="10" rx="1" fill="#fef7e0"/>
                <rect x="25" y="35" width="12" height="10" rx="1" fill="#fef7e0"/>
                <rect x="42" y="35" width="12" height="10" rx="1" fill="#fef7e0"/>
                <rect x="8" y="52" width="12" height="10" rx="1" fill="#fef7e0"/>
                <rect x="25" y="52" width="12" height="10" rx="1" fill="#e8f0fe"/>
                <rect x="42" y="52" width="12" height="10" rx="1" fill="#fef7e0"/>
                <rect x="8" y="69" width="12" height="10" rx="1" fill="#e8f0fe"/>
                <rect x="25" y="69" width="12" height="10" rx="1" fill="#fef7e0"/>
                <rect x="42" y="69" width="12" height="10" rx="1" fill="#fef7e0"/>
                <rect x="28" y="80" width="14" height="15" rx="2" fill="#fbbc04"/>
            </g>
            </g>
            
            {/* Right content */}
            <g transform="translate(180, 25)" filter="url(#hosp1)">
            <rect width="120" height="130" rx="12" fill="#ffffff"/>
            
            <text x="16" y="28" fontSize="11" fontWeight="500" fill="#202124" fontFamily="system-ui">Hospitality</text>
            <text x="16" y="44" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Minimize guest disruption</text>
            
            <g transform="translate(16, 58)">
                <circle cx="6" cy="6" r="6" fill="#e6f4ea"/>
                <text x="6" y="9" textAnchor="middle" fontSize="8" fill="#34a853" fontFamily="system-ui">✓</text>
                <text x="18" y="9" fontSize="7" fill="#5f6368" fontFamily="system-ui">Quiet equipment</text>
            </g>
            <g transform="translate(16, 78)">
                <circle cx="6" cy="6" r="6" fill="#e6f4ea"/>
                <text x="6" y="9" textAnchor="middle" fontSize="8" fill="#34a853" fontFamily="system-ui">✓</text>
                <text x="18" y="9" fontSize="7" fill="#5f6368" fontFamily="system-ui">Off-hours service</text>
            </g>
            <g transform="translate(16, 98)">
                <circle cx="6" cy="6" r="6" fill="#e6f4ea"/>
                <text x="6" y="9" textAnchor="middle" fontSize="8" fill="#34a853" fontFamily="system-ui">✓</text>
                <text x="18" y="9" fontSize="7" fill="#5f6368" fontFamily="system-ui">Room-by-room</text>
            </g>
            </g>
        </svg>
      );

    case 'municipal':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Municipal restoration">
            <defs>
            <filter id="mun1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
            </filter>
            </defs>
            
            <rect width="320" height="180" fill="#e3f2fd"/>
            
            {/* Tablet */}
            <g transform="translate(40, 12)" filter="url(#mun1)">
            <rect width="240" height="156" rx="14" fill="#5f6368"/>
            <rect x="8" y="8" width="224" height="140" rx="8" fill="#ffffff"/>
            
            {/* Dashboard content */}
            <g transform="translate(16, 16)">
                <rect width="208" height="24" rx="4" fill="#1a73e8"/>
                <text x="10" y="16" fontSize="9" fontWeight="500" fill="#ffffff" fontFamily="system-ui">Multi-Site Status</text>
                <rect x="160" y="6" width="40" height="12" rx="6" fill="#ffffff" opacity="0.2"/>
                <text x="180" y="15" textAnchor="middle" fontSize="6" fill="#ffffff" fontFamily="system-ui">Live</text>
                
                {/* Site cards */}
                <g transform="translate(0, 32)">
                <rect width="100" height="45" rx="6" fill="#f8f9fa"/>
                <text x="8" y="14" fontSize="7" fill="#80868b" fontFamily="system-ui">City Hall</text>
                <circle cx="85" cy="10" r="5" fill="#34a853"/>
                <rect x="8" y="22" width="84" height="4" rx="2" fill="#e8eaed"/>
                <rect x="8" y="22" width="70" height="4" rx="2" fill="#34a853"/>
                <text x="8" y="40" fontSize="7" fill="#34a853" fontFamily="system-ui">83% complete</text>
                </g>
                
                <g transform="translate(108, 32)">
                <rect width="100" height="45" rx="6" fill="#f8f9fa"/>
                <text x="8" y="14" fontSize="7" fill="#80868b" fontFamily="system-ui">Library Branch</text>
                <circle cx="85" cy="10" r="5" fill="#1a73e8"/>
                <rect x="8" y="22" width="84" height="4" rx="2" fill="#e8eaed"/>
                <rect x="8" y="22" width="35" height="4" rx="2" fill="#1a73e8"/>
                <text x="8" y="40" fontSize="7" fill="#1a73e8" fontFamily="system-ui">42% in progress</text>
                </g>
                
                <g transform="translate(0, 85)">
                <rect width="100" height="45" rx="6" fill="#f8f9fa"/>
                <text x="8" y="14" fontSize="7" fill="#80868b" fontFamily="system-ui">Fire Station #4</text>
                <circle cx="85" cy="10" r="5" fill="#34a853"/>
                <text x="8" y="32" fontSize="8" fontWeight="500" fill="#34a853" fontFamily="system-ui">✓ Complete</text>
                </g>
                
                <g transform="translate(108, 85)">
                <rect width="100" height="45" rx="6" fill="#f8f9fa"/>
                <text x="8" y="14" fontSize="7" fill="#80868b" fontFamily="system-ui">Recreation Center</text>
                <circle cx="85" cy="10" r="5" fill="#fbbc04"/>
                <text x="8" y="32" fontSize="8" fontWeight="500" fill="#b06000" fontFamily="system-ui">Scheduled</text>
                </g>
            </g>
            </g>
        </svg>
      );

    case 'industrial':
      return (
        <svg viewBox="0 0 320 180" role="img" aria-label="Industrial facility restoration">
            <defs>
            <filter id="ind1" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15"/>
            </filter>
            </defs>
            
            {/* Full blue background */}
            <rect width="320" height="180" fill="#d2e3fc"/>
            
            {/* Decorative gear */}
            <g transform="translate(270, 130)" opacity="0.15">
            <circle cx="0" cy="0" r="40" fill="none" stroke="#1a73e8" strokeWidth="12"/>
            <circle cx="0" cy="0" r="20" fill="#1a73e8"/>
            </g>
            
            {/* Main white card */}
            <g transform="translate(20, 20)" filter="url(#ind1)">
            <rect width="200" height="140" rx="14" fill="#ffffff"/>
            
            <text x="16" y="28" fontSize="12" fontWeight="500" fill="#202124" fontFamily="system-ui">Industrial Scale</text>
            <text x="16" y="44" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Large facility restoration</text>
            
            {/* Equipment icons */}
            <g transform="translate(16, 58)">
                <rect width="40" height="50" rx="6" fill="#e8f0fe"/>
                <rect x="8" y="10" width="24" height="30" rx="3" fill="#1a73e8" opacity="0.3"/>
                <text x="20" y="50" textAnchor="middle" fontSize="6" fill="#1a73e8" fontFamily="system-ui">LGR</text>
                
                <g transform="translate(50, 0)">
                <rect width="40" height="50" rx="6" fill="#e8f0fe"/>
                <rect x="8" y="10" width="24" height="30" rx="3" fill="#1a73e8" opacity="0.3"/>
                <text x="20" y="50" textAnchor="middle" fontSize="6" fill="#1a73e8" fontFamily="system-ui">LGR</text>
                </g>
                
                <g transform="translate(100, 0)">
                <rect width="40" height="50" rx="6" fill="#e6f4ea"/>
                <circle cx="20" cy="25" r="12" fill="#34a853" opacity="0.3"/>
                <text x="20" y="50" textAnchor="middle" fontSize="6" fill="#34a853" fontFamily="system-ui">Axial</text>
                </g>
                
                <g transform="translate(150, 0)">
                <rect width="32" height="50" rx="6" fill="#f1f3f4"/>
                <text x="16" y="30" textAnchor="middle" fontSize="16" fill="#bdc1c6" fontFamily="system-ui">+</text>
                </g>
            </g>
            
            <text x="16" y="128" fontSize="9" fill="#80868b" fontFamily="system-ui">50,000+ sq ft capacity</text>
            </g>
            
            {/* Side metrics */}
            <g transform="translate(235, 30)" filter="url(#ind1)">
            <rect width="70" height="50" rx="10" fill="#ffffff"/>
            <text x="35" y="20" textAnchor="middle" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Equipment</text>
            <text x="35" y="40" textAnchor="middle" fontSize="18" fontWeight="500" fill="#1a73e8" fontFamily="system-ui">40+</text>
            </g>
            
            <g transform="translate(235, 95)" filter="url(#ind1)">
            <rect width="70" height="50" rx="10" fill="#ffffff"/>
            <text x="35" y="20" textAnchor="middle" fontSize="8" fill="#9aa0a6" fontFamily="system-ui">Crew Size</text>
            <text x="35" y="40" textAnchor="middle" fontSize="18" fontWeight="500" fill="#202124" fontFamily="system-ui">15+</text>
            </g>
        </svg>
      );

    default:
      return (
        <SvgWrapper>
          <text x="160" y="90" textAnchor="middle" fontSize="12" fill="#9ca3af" fontFamily="system-ui">No Preview</text>
        </SvgWrapper>
      );
  }
};

export default ServiceThumbVisual;