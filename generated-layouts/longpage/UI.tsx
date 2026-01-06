import React from 'react';
import { ChevronDown, ChevronUp, LucideIcon, Star, X } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'tonal' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon: Icon,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-full active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-slate-900/30 hover:-translate-y-0.5 border border-transparent",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary-light/50",
    tonal: "bg-primary-light text-primary-dark hover:bg-blue-200 border border-transparent",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon className={`w-5 h-5 ${children ? 'mr-2' : ''} ${size === 'xl' ? 'w-6 h-6' : ''}`} />}
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  variant?: 'elevated' | 'outlined' | 'flat';
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  title, 
  subtitle, 
  variant = 'elevated',
  noPadding = false 
}) => {
  const baseStyles = "rounded-[32px] transition-all duration-300 relative overflow-hidden";
  
  const variants = {
    elevated: "bg-white shadow-xl shadow-slate-200/50 border border-white hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-1",
    outlined: "bg-transparent border-2 border-slate-200 hover:border-primary/50 hover:bg-white/50",
    flat: "bg-slate-50 border border-slate-100",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      <div className={noPadding ? '' : 'p-6 md:p-8'}>
        {(title || subtitle) && (
          <div className="mb-6">
            {subtitle && (
              <div className="flex items-center gap-2 mb-2">
                <span className="h-px w-8 bg-primary"></span>
                <p className="text-primary font-bold text-xs uppercase tracking-widest">{subtitle}</p>
              </div>
            )}
            {title && <h3 className="text-2xl font-bold text-slate-900 leading-tight">{title}</h3>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

interface BadgeProps {
  text: string;
  icon?: LucideIcon;
  color?: 'blue' | 'green' | 'red' | 'slate' | 'orange';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, icon: Icon, color = 'blue', className = '' }) => {
  const colors = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    green: 'bg-green-50 text-green-700 border-green-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    orange: 'bg-orange-50 text-orange-700 border-orange-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold border shadow-sm ${colors[color]} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5 mr-1.5" />}
      {text}
    </span>
  );
};

interface AccordionProps {
  items: { title: string; content: React.ReactNode; icon?: LucideIcon }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className={`bg-white rounded-[24px] overflow-hidden border transition-all duration-300 ${openIndex === index ? 'border-primary shadow-lg ring-1 ring-primary/10' : 'border-slate-100 shadow-sm hover:border-slate-300'}`}>
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <div className="flex items-center gap-4">
              {item.icon && (
                <div className={`p-2 rounded-xl transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                  <item.icon className="w-5 h-5" />
                </div>
              )}
              <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-900'}`}>{item.title}</span>
            </div>
            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-primary transition-transform" />
            ) : (
              <ChevronDown className="w-6 h-6 text-slate-400 transition-transform" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2">
              <div className="pt-4">
                {item.content}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const StarRating: React.FC<{ rating?: number }> = ({ rating = 5 }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-slate-200 text-slate-200'}`} 
        />
      ))}
    </div>
  );
};

export const Tooltip: React.FC<{ content: React.ReactNode, children: React.ReactNode, className?: string }> = ({ content, children, className = '' }) => {
  return (
    <div className={`relative group/tooltip inline-block ${className}`}>
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 p-4 bg-slate-800 text-white text-xs rounded-xl shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none transform translate-y-1 group-hover/tooltip:translate-y-0">
        <div className="relative z-10 font-medium leading-relaxed">
          {content}
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-slate-800"></div>
      </div>
    </div>
  );
};

export const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ isOpen, onClose, title, children }) => {
  // Lock body scroll
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[32px] w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up flex flex-col">
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-8 py-5 border-b border-slate-100 flex justify-between items-center z-10 shrink-0">
          <h3 className="text-xl font-bold text-slate-900 line-clamp-1">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
