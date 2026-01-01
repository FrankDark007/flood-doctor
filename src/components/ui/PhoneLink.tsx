import React from 'react';
import { Phone } from 'lucide-react';
import { SITE_PHONE } from '../../../config/constants';

interface PhoneLinkProps {
  variant?: 'default' | 'button' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  className?: string;
}

const PhoneLink: React.FC<PhoneLinkProps> = ({
  variant = 'default',
  size = 'md',
  showIcon = true,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  if (variant === 'icon-only') {
    return (
      <a
        href={SITE_PHONE.tel}
        className={`
          inline-flex items-center justify-center
          p-2 text-[#1a73e8] hover:bg-[#e8f0fe] rounded-full transition-colors
          ${className}
        `}
        aria-label={`Call ${SITE_PHONE.display}`}
      >
        <Phone size={iconSizes[size] + 4} />
      </a>
    );
  }

  if (variant === 'button') {
    return (
      <a
        href={SITE_PHONE.tel}
        className={`
          inline-flex items-center justify-center gap-2
          px-6 py-3 bg-[#1a73e8] text-white font-medium rounded-full
          hover:bg-[#1557b0] transition-colors
          ${sizeClasses[size]}
          ${className}
        `}
      >
        {showIcon && <Phone size={iconSizes[size]} />}
        {SITE_PHONE.display}
      </a>
    );
  }

  // Default: text link style
  return (
    <a
      href={SITE_PHONE.tel}
      className={`
        inline-flex items-center gap-2 font-medium text-[#1a73e8] hover:underline
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {showIcon && <Phone size={iconSizes[size]} />}
      {SITE_PHONE.display}
    </a>
  );
};

export default PhoneLink;
