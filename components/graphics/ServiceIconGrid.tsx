// components/graphics/ServiceIconGrid.tsx
// Animated service icon grid with premium SVG icons

import React from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href?: string;
}

interface ServiceIconGridProps {
  services?: Service[];
  className?: string;
  variant?: 'cards' | 'minimal' | 'large';
  columns?: 2 | 3 | 4;
}

const defaultServices: Service[] = [
  {
    id: 'water-damage',
    title: 'Water Damage',
    description: 'Emergency water extraction and structural drying',
    color: 'blue',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="waterIcon" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <path d="M24 4C24 4 8 20 8 30C8 38.84 15.16 46 24 46S40 38.84 40 30C40 20 24 4 24 4Z" fill="url(#waterIcon)" />
        <ellipse cx="18" cy="24" rx="4" ry="8" fill="white" opacity="0.3" transform="rotate(-15 18 24)" />
      </svg>
    )
  },
  {
    id: 'mold',
    title: 'Mold Remediation',
    description: 'Safe mold removal and prevention treatment',
    color: 'emerald',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="moldIcon" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#moldIcon)" />
        <path d="M18 24c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="30" r="4" fill="white" />
        <circle cx="16" cy="18" r="3" fill="white" opacity="0.5" />
        <circle cx="32" cy="18" r="3" fill="white" opacity="0.5" />
      </svg>
    )
  },
  {
    id: 'flood',
    title: 'Flood Cleanup',
    description: 'Complete flooding response and recovery',
    color: 'cyan',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="floodIcon" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <rect x="4" y="24" width="40" height="20" rx="4" fill="url(#floodIcon)" />
        <path d="M4 28 Q14 20 24 28 T44 28" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M4 36 Q14 28 24 36 T44 36" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
        <rect x="18" y="8" width="12" height="20" rx="2" fill="url(#floodIcon)" />
        <rect x="20" y="12" width="8" height="6" fill="white" opacity="0.3" />
      </svg>
    )
  },
  {
    id: 'fire',
    title: 'Fire Damage',
    description: 'Smoke and fire damage restoration',
    color: 'orange',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="fireIcon" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>
        <path d="M24 4C24 4 16 14 16 22C16 26 18 30 24 30C18 30 14 34 14 40C14 44 18 46 24 46C30 46 34 44 34 40C34 34 30 30 24 30C30 30 32 26 32 22C32 14 24 4 24 4Z" fill="url(#fireIcon)" />
        <path d="M24 18C24 18 20 24 20 28C20 30 22 32 24 32C26 32 28 30 28 28C28 24 24 18 24 18Z" fill="white" opacity="0.4" />
      </svg>
    )
  },
  {
    id: 'storm',
    title: 'Storm Damage',
    description: 'Emergency storm and wind damage repair',
    color: 'violet',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="stormIcon" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path d="M12 20C12 14 17 10 24 10C29 10 33 12 35 16C40 17 44 21 44 26C44 32 39 36 32 36H14C8 36 4 31 4 26C4 21 8 17 12 17V20Z" fill="url(#stormIcon)" />
        <path d="M26 22L22 30H28L24 40" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 'sewage',
    title: 'Sewage Cleanup',
    description: 'Biohazard waste removal and sanitization',
    color: 'amber',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="sewageIcon" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#sewageIcon)" />
        <path d="M24 12V24L32 28" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M16 16L18 18M32 16L30 18M16 32L18 30M32 32L30 30" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    )
  }
];

const ServiceIconGrid: React.FC<ServiceIconGridProps> = ({
  services = defaultServices,
  className = '',
  variant = 'cards',
  columns = 3
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  };

  if (variant === 'minimal') {
    return (
      <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
        {services.map((service) => (
          <a
            key={service.id}
            href={service.href || `#${service.id}`}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
          >
            <div className="w-14 h-14 flex-shrink-0 transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'large') {
    return (
      <div className={`grid ${gridCols[columns]} gap-8 ${className}`}>
        {services.map((service) => (
          <a
            key={service.id}
            href={service.href || `#${service.id}`}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
          >
            <div className="w-20 h-20 mx-auto mb-6 transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center mb-3 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 text-center">
              {service.description}
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  // Cards variant (default)
  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {services.map((service) => (
        <a
          key={service.id}
          href={service.href || `#${service.id}`}
          className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
        >
          <div className="w-16 h-16 mb-4 transition-transform group-hover:scale-110">
            {service.icon}
          </div>
          <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600">
            {service.description}
          </p>
        </a>
      ))}
    </div>
  );
};

export default ServiceIconGrid;
