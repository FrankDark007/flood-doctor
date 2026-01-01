import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  accentColor?: 'primary' | 'emerald' | 'amber' | 'rose';
}

/**
 * SectionHeader - Consistent section headers with optional eyebrow text
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  accentColor = 'primary'
}) => {
  const accentColors: Record<string, string> = {
    primary: 'bg-primary',
    emerald: 'bg-emerald-500',
    amber: 'bg-amber-500',
    rose: 'bg-rose-500'
  };

  const alignmentClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignmentClasses} mb-10 lg:mb-12`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-1 h-6 ${accentColors[accentColor]} rounded-full`} />
          <span className="text-sm font-semibold uppercase tracking-wider text-muted">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl lg:text-4xl font-semibold text-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
