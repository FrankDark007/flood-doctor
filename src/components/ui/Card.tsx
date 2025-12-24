import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  to?: string;
  href?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'elevated',
  padding = 'md',
  hover = true,
  to,
  href,
  onClick,
}) => {
  // Material 3 card variants
  const variantClasses = {
    elevated: `
      bg-white
      shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]
      ${hover ? 'hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)]' : ''}
    `,
    outlined: `
      bg-white
      border border-[#dadce0]
      ${hover ? 'hover:border-[#1a73e8]/30 hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]' : ''}
    `,
    filled: `
      bg-[#f8f9fa]
      ${hover ? 'hover:bg-[#f1f3f4]' : ''}
    `,
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = `
    rounded-xl
    transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)]
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  if (to) {
    return (
      <Link to={to} className={`block ${baseClasses}`}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`block ${baseClasses}`}>
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={`block w-full text-left ${baseClasses}`}>
        {children}
      </button>
    );
  }

  return <div className={baseClasses}>{children}</div>;
};

// Feature Card - Google style with icon
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to?: string;
  iconBg?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  to,
  iconBg = 'bg-[#e8f0fe]',
}) => {
  const content = (
    <>
      <div className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center text-[#1a73e8] mb-5`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium text-[#202124] mb-2">{title}</h3>
      <p className="text-sm text-[#5f6368] leading-relaxed">{description}</p>
      {to && (
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#1a73e8] group-hover:gap-2 transition-all">
          Learn more
          <ArrowRight size={14} />
        </div>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className="group block bg-white p-6 rounded-xl border border-[#dadce0] hover:border-[#1a73e8]/30 hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-all duration-200">
        {content}
      </Link>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-[#dadce0]">
      {content}
    </div>
  );
};

// Stats Card
interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon }) => (
  <div className="text-center p-6">
    {icon && (
      <div className="w-10 h-10 bg-[#e8f0fe] rounded-full flex items-center justify-center text-[#1a73e8] mx-auto mb-3">
        {icon}
      </div>
    )}
    <div className="text-3xl lg:text-4xl font-normal text-[#1a73e8] mb-1">{value}</div>
    <div className="text-sm text-[#5f6368]">{label}</div>
  </div>
);

export default Card;
