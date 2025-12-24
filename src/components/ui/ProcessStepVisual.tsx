import React from 'react';

interface ProcessStepVisualProps {
  title: string;
  className?: string;
}

const ProcessStepVisual: React.FC<ProcessStepVisualProps> = ({ title, className = '' }) => {
  const t = title.toLowerCase();

  // Common SVG properties
  const svgBase = `w-full h-full ${className}`;
  const strokeColor = "currentColor";
  const strokeWidth = 1.5;

  // 1. DEHUMIDIFIER / DRYING (Box with drop)
  if (t.includes('dehu') || t.includes('dry') || t.includes('humidity')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <path d="M12 10C12 7.79086 13.7909 6 16 6H32C34.2091 6 36 7.79086 36 10V42H12V10Z" />
        <path d="M16 34H32" strokeOpacity="0.5" />
        <path d="M16 38H32" strokeOpacity="0.5" />
        {/* Animated Drop */}
        <path d="M24 14C24 14 20 19 20 22C20 24.2091 21.7909 26 24 26C26.2091 26 28 24.2091 28 22C28 19 24 14 24 14Z" className="animate-bounce text-blue-500 fill-current" stroke="none" style={{ animationDuration: '2s' }} />
        <path d="M24 14C24 14 20 19 20 22C20 24.2091 21.7909 26 24 26C26.2091 26 28 24.2091 28 22C28 19 24 14 24 14Z" stroke={strokeColor} />
      </svg>
    );
  }

  // 2. AIR MOVER / FAN (Spinning blades)
  if (t.includes('fan') || t.includes('air') || t.includes('vent')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
        <g className="origin-center animate-[spin_3s_linear_infinite]">
            <path d="M24 24L24 10C30 10 34 16 24 24Z" />
            <path d="M24 24L38 24C38 30 32 34 24 24Z" />
            <path d="M24 24L24 38C18 38 14 32 24 24Z" />
            <path d="M24 24L10 24C10 18 16 14 24 24Z" />
        </g>
        <path d="M6 42L12 38" />
        <path d="M42 42L36 38" />
      </svg>
    );
  }

  // 3. EXTRACTION / PUMPING (Vacuum nozzle)
  if (t.includes('extract') || t.includes('pump') || t.includes('vac') || t.includes('water')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <path d="M34 40H14L18 24H30L34 40Z" />
        <path d="M24 24V8" />
        <path d="M24 8C24 8 24 4 32 4" />
        {/* Rising bubbles/water */}
        <circle cx="20" cy="36" r="1.5" className="animate-[pulse_1.5s_ease-in-out_infinite]" />
        <circle cx="28" cy="34" r="1.5" className="animate-[pulse_1.5s_ease-in-out_infinite] delay-300" />
        <path d="M10 44H38" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. INSPECTION / ASSESSMENT (Magnifying glass)
  if (t.includes('inspect') || t.includes('assess') || t.includes('map') || t.includes('source') || t.includes('find')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <circle cx="20" cy="20" r="14" />
        <path d="M30 30L42 42" strokeWidth={2.5} />
        {/* Scanning line */}
        <path d="M12 20H28" className="animate-[pulse_2s_linear_infinite]" strokeOpacity="0.5" />
        <path d="M20 12V28" className="animate-[pulse_2s_linear_infinite]" strokeOpacity="0.5" />
      </svg>
    );
  }

  // 5. CLEANING / SANITIZATION (Spray bottle)
  if (t.includes('clean') || t.includes('sanit') || t.includes('scrub') || t.includes('wash') || t.includes('mold')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <path d="M30 16V12H18V16C18 19 16 20 14 22V42H34V22C32 20 30 19 30 16Z" />
        <path d="M24 12V6" />
        <path d="M18 6H30" />
        <path d="M30 6L32 10" />
        {/* Mist */}
        <circle cx="10" cy="14" r="1" className="animate-ping opacity-75" />
        <circle cx="8" cy="10" r="1" className="animate-ping opacity-75 delay-100" />
        <circle cx="12" cy="8" r="1" className="animate-ping opacity-75 delay-200" />
      </svg>
    );
  }

  // 6. CONTAINMENT (Barrier/Tape)
  if (t.includes('contain') || t.includes('seal') || t.includes('barrier')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <rect x="6" y="12" width="36" height="24" rx="2" />
        <path d="M6 12L18 36" strokeOpacity="0.5" />
        <path d="M18 12L30 36" strokeOpacity="0.5" />
        <path d="M30 12L42 36" strokeOpacity="0.5" />
        <path d="M6 24L12 36" strokeOpacity="0.5" />
        <path d="M36 12L42 24" strokeOpacity="0.5" />
      </svg>
    );
  }

  // 7. MONITORING (Chart)
  if (t.includes('monitor') || t.includes('check') || t.includes('read') || t.includes('progress')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <rect x="6" y="6" width="36" height="36" rx="2" />
        <path d="M14 34L20 28L26 32L34 20" />
        <circle cx="34" cy="20" r="2" className="animate-pulse fill-current" stroke="none" />
        <path d="M12 34H36" strokeOpacity="0.3" />
      </svg>
    );
  }

  // 8. DOCUMENTATION (Clipboard)
  if (t.includes('doc') || t.includes('report') || t.includes('photo') || t.includes('insurance')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <path d="M32 6H16V10H32V6Z" />
        <path d="M16 6H10C8.89543 6 8 6.89543 8 8V40C8 41.1046 8.89543 42 10 42H38C39.1046 42 40 41.1046 40 40V8C40 6.89543 39.1046 6 38 6H32" />
        <path d="M16 20H32" />
        <path d="M16 28H32" />
        <path d="M16 36H24" />
        <circle cx="36" cy="36" r="3" className="text-green-500 fill-current opacity-0 group-hover:opacity-100 transition-opacity" stroke="none" />
      </svg>
    );
  }

  // 9. REMOVAL / DEMO (Trash/Debris)
  if (t.includes('remov') || t.includes('demo') || t.includes('muck') || t.includes('dispos')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <path d="M10 12V40C10 41.1046 10.8954 42 12 42H36C37.1046 42 38 41.1046 38 40V12" />
        <path d="M6 12H42" />
        <path d="M18 12V8C18 6.89543 18.8954 6 20 6H28C29.1046 6 30 6.89543 30 8V12" />
        <path d="M20 20V34" strokeOpacity="0.5" />
        <path d="M28 20V34" strokeOpacity="0.5" />
      </svg>
    );
  }

  // 10. REPAIR / RECONSTRUCTION (Tools)
  if (t.includes('repair') || t.includes('construct') || t.includes('build') || t.includes('install')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <path d="M14 26L22 34L38 18" strokeWidth={2.5} className="animate-[dash_1s_ease-out_forwards]" />
        <rect x="8" y="8" width="32" height="32" rx="4" strokeOpacity="0.5" />
        <circle cx="36" cy="12" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    );
  }

  // 11. PACKOUT / MOVING (Box)
  if (t.includes('pack') || t.includes('move') || t.includes('content')) {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
        <path d="M6 14L24 6L42 14L24 22L6 14Z" />
        <path d="M6 14V34L24 42V22" />
        <path d="M42 14V34L24 42" />
        <path d="M24 22V42" strokeOpacity="0.5" />
        <path d="M14 18L14 30" strokeOpacity="0.3" />
      </svg>
    );
  }

  // DEFAULT (Checkmark)
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={svgBase}>
      <circle cx="24" cy="24" r="20" strokeOpacity="0.2" />
      <path d="M14 24L20 30L34 16" strokeWidth={2.5} />
    </svg>
  );
};

export default ProcessStepVisual;
