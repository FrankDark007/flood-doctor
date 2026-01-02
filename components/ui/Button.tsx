
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg'; // Added for compatibility
  to?: string;
  href?: string;
  fullWidth?: boolean;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  fullWidth = false,
  icon = false,
  disabled = false,
  type = 'button',
  ...rest
}) => {
  // Google Style: "Outfit" font for buttons, tracking-wide, pill shape
  const baseStyles = "inline-flex items-center justify-center font-display font-medium text-[15px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Google buttons are often 48px (h-12) or 36px (h-9)
  const sizeStyles = {
    sm: icon ? "h-9 w-9 p-0 rounded-full" : "h-9 px-5 text-[13px] rounded-full",
    md: icon ? "h-12 w-12 p-0 rounded-full" : "h-12 px-8 rounded-full",
    lg: icon ? "h-14 w-14 p-0 rounded-full" : "h-14 px-10 text-[16px] rounded-full",
  };
  const dimensionStyles = sizeStyles[size];

  const variants = {
    // Primary: Google Blue, subtle shadow that grows on hover
    primary: "bg-primary text-white hover:bg-primaryHover shadow-none hover:shadow-google-hover border border-transparent",
    
    // Secondary: White with thin gray border, blue text
    secondary: "bg-white text-primary border border-border hover:bg-blue-50 hover:border-primary/30",
    
    // Outline: Just border
    outline: "bg-transparent text-text border border-gray-400 hover:border-gray-900",
    
    // Ghost: For nav icons
    ghost: "bg-transparent text-muted hover:text-primary hover:bg-gray-100",
    
    // Text: Blue text link style
    text: "bg-transparent text-primary hover:text-primaryHover p-0 h-auto hover:underline",
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${dimensionStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClasses} aria-label={rest['aria-label']}>
        {children}
      </Link>
    );
  }
  
  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses} aria-label={rest['aria-label']}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={combinedClasses} 
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
