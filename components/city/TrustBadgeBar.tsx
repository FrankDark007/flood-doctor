import React from 'react';
import { Shield, FileCheck, Zap, Clock } from 'lucide-react';

interface TrustBadgeBarProps {
  compact?: boolean;
  licenseNumber?: string;
}

const badges = [
  {
    icon: Shield,
    label: 'IICRC Certified',
    sublabel: 'Industry Standard'
  },
  {
    icon: FileCheck,
    label: 'Licensed',
    sublabel: '#2705155505'
  },
  {
    icon: Zap,
    label: '60-Min Response',
    sublabel: 'Guaranteed'
  },
  {
    icon: Clock,
    label: '24/7 Emergency',
    sublabel: 'Always Available'
  }
];

/**
 * TrustBadgeBar - Compact trust indicators for city pages
 * Shows certifications, license, and response promise
 */
const TrustBadgeBar: React.FC<TrustBadgeBarProps> = ({
  compact = false,
  licenseNumber = '#2705155505'
}) => {
  // Update license badge if provided
  const displayBadges = badges.map(badge => {
    if (badge.label === 'Licensed') {
      return { ...badge, sublabel: licenseNumber };
    }
    return badge;
  });

  if (compact) {
    return (
      <section
        className="py-6 border-b border-gray-100"
        aria-label="Trust credentials"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {displayBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm"
                >
                  <Icon size={18} className="text-primary" />
                  <span className="font-medium text-gray-700">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-8 bg-white border-y border-gray-100"
      aria-label="Trust credentials"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {displayBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm">{badge.label}</p>
                  <p className="text-xs text-gray-500">{badge.sublabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeBar;
