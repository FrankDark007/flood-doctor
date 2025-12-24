import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  fullWidth = false,
  type = 'button',
  icon = false,
  disabled = false,
}) => {
  // Base styles from Google's design system
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium text-base leading-6
    tracking-[0.5px]
    min-w-[96px]
    rounded-[1000px]
    transition-[background-color,box-shadow,color] duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a73e8] focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
  `.replace(/\s+/g, ' ').trim();

  // Size variants - Google's exact padding values
  const sizeStyles = {
    // Small: 8px 16px, 14px font
    sm: icon ? 'h-9 w-9 p-0 min-w-0' : 'py-2 px-4 text-sm',
    // Medium (default): 12px 22px, 16px font
    md: icon ? 'h-10 w-10 p-0 min-w-0' : 'py-3 px-[22px]',
    // Large: Same as medium but taller
    lg: icon ? 'h-12 w-12 p-0 min-w-0' : 'py-3 px-[22px]',
  };

  // Variant styles - Google's exact colors
  const variants = {
    // Primary: Google Blue, shadow on hover
    primary: `
      bg-[#1a73e8] text-white
      hover:bg-[#174ea6]
      hover:shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]
    `,

    // Secondary: White with border
    secondary: `
      bg-white text-[#1a73e8]
      border border-[#dadce0]
      hover:bg-[#f8f9fa] hover:border-[#bdc1c6]
    `,

    // Outline: Transparent with border
    outline: `
      bg-transparent text-[#202124]
      border border-[#dadce0]
      hover:bg-[#f8f9fa] hover:border-[#bdc1c6]
    `,

    // Ghost: No border
    ghost: `
      bg-transparent text-[#5f6368]
      hover:bg-[#f1f3f4] hover:text-[#202124]
      min-w-0
    `,

    // Text: Link style
    text: `
      bg-transparent text-[#1a73e8]
      hover:bg-[rgba(26,115,232,0.08)]
      rounded-[4px]
      py-3 px-2 min-w-0
    `,
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  const combinedClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variants[variant]}
    ${widthStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const props = {
    className: combinedClasses,
    ...(disabled && { 'aria-disabled': true }),
  };

  if (to) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
