import React from 'react';
import { LucideIcon } from 'lucide-react';

type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';
type BadgeVariant = 'solid' | 'soft' | 'outline';
type BadgeColor = 'primary' | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'green' | 'emerald' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink';

interface BadgeProps {
  children: React.ReactNode;
  size?: BadgeSize;
  variant?: BadgeVariant;
  color?: BadgeColor;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  uppercase?: boolean;
  pill?: boolean;
  className?: string;
}

const sizeStyles: Record<BadgeSize, { padding: string; text: string; icon: number }> = {
  xs: { padding: 'px-2 py-0.5', text: 'text-[10px]', icon: 10 },
  sm: { padding: 'px-2.5 py-1', text: 'text-xs', icon: 12 },
  md: { padding: 'px-3 py-1.5', text: 'text-xs', icon: 14 },
  lg: { padding: 'px-4 py-2', text: 'text-sm', icon: 16 },
};

const colorStyles: Record<BadgeColor, Record<BadgeVariant, string>> = {
  primary: {
    solid: 'bg-primary text-white',
    soft: 'bg-blue-50 text-primary',
    outline: 'border border-primary text-primary bg-transparent',
  },
  gray: {
    solid: 'bg-gray-700 text-white',
    soft: 'bg-gray-100 text-gray-700',
    outline: 'border border-gray-300 text-gray-600 bg-transparent',
  },
  red: {
    solid: 'bg-red-600 text-white',
    soft: 'bg-red-50 text-red-700',
    outline: 'border border-red-300 text-red-600 bg-transparent',
  },
  orange: {
    solid: 'bg-orange-500 text-white',
    soft: 'bg-orange-50 text-orange-700',
    outline: 'border border-orange-300 text-orange-600 bg-transparent',
  },
  amber: {
    solid: 'bg-amber-500 text-white',
    soft: 'bg-amber-50 text-amber-700',
    outline: 'border border-amber-300 text-amber-600 bg-transparent',
  },
  yellow: {
    solid: 'bg-yellow-500 text-white',
    soft: 'bg-yellow-50 text-yellow-700',
    outline: 'border border-yellow-300 text-yellow-600 bg-transparent',
  },
  green: {
    solid: 'bg-green-600 text-white',
    soft: 'bg-green-50 text-green-700',
    outline: 'border border-green-300 text-green-600 bg-transparent',
  },
  emerald: {
    solid: 'bg-emerald-600 text-white',
    soft: 'bg-emerald-50 text-emerald-700',
    outline: 'border border-emerald-300 text-emerald-600 bg-transparent',
  },
  teal: {
    solid: 'bg-teal-600 text-white',
    soft: 'bg-teal-50 text-teal-700',
    outline: 'border border-teal-300 text-teal-600 bg-transparent',
  },
  cyan: {
    solid: 'bg-cyan-600 text-white',
    soft: 'bg-cyan-50 text-cyan-700',
    outline: 'border border-cyan-300 text-cyan-600 bg-transparent',
  },
  blue: {
    solid: 'bg-blue-600 text-white',
    soft: 'bg-blue-50 text-blue-700',
    outline: 'border border-blue-300 text-blue-600 bg-transparent',
  },
  indigo: {
    solid: 'bg-indigo-600 text-white',
    soft: 'bg-indigo-50 text-indigo-700',
    outline: 'border border-indigo-300 text-indigo-600 bg-transparent',
  },
  violet: {
    solid: 'bg-violet-600 text-white',
    soft: 'bg-violet-50 text-violet-700',
    outline: 'border border-violet-300 text-violet-600 bg-transparent',
  },
  purple: {
    solid: 'bg-purple-600 text-white',
    soft: 'bg-purple-50 text-purple-700',
    outline: 'border border-purple-300 text-purple-600 bg-transparent',
  },
  pink: {
    solid: 'bg-pink-600 text-white',
    soft: 'bg-pink-50 text-pink-700',
    outline: 'border border-pink-300 text-pink-600 bg-transparent',
  },
};

const Badge: React.FC<BadgeProps> = ({
  children,
  size = 'sm',
  variant = 'soft',
  color = 'primary',
  icon: Icon,
  iconPosition = 'left',
  uppercase = true,
  pill = true,
  className = '',
}) => {
  const { padding, text, icon: iconSize } = sizeStyles[size];
  const colorClass = colorStyles[color][variant];
  const roundedClass = pill ? 'rounded-full' : 'rounded-md';
  const textTransform = uppercase ? 'uppercase tracking-wider' : '';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-bold ${padding} ${text} ${colorClass} ${roundedClass} ${textTransform} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon size={iconSize} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={iconSize} />}
    </span>
  );
};

export default Badge;

// Preset badges for common patterns
export const StatusBadge: React.FC<{
  status: 'active' | 'pending' | 'completed' | 'error' | 'warning';
  children?: React.ReactNode;
}> = ({ status, children }) => {
  const config = {
    active: { color: 'green' as const, label: 'Active' },
    pending: { color: 'amber' as const, label: 'Pending' },
    completed: { color: 'blue' as const, label: 'Completed' },
    error: { color: 'red' as const, label: 'Error' },
    warning: { color: 'orange' as const, label: 'Warning' },
  };
  return (
    <Badge color={config[status].color} variant="soft">
      {children || config[status].label}
    </Badge>
  );
};

export const PriorityBadge: React.FC<{
  priority: 'critical' | 'high' | 'medium' | 'low';
}> = ({ priority }) => {
  const config = {
    critical: { color: 'red' as const, label: 'Critical' },
    high: { color: 'orange' as const, label: 'High' },
    medium: { color: 'amber' as const, label: 'Medium' },
    low: { color: 'gray' as const, label: 'Low' },
  };
  return (
    <Badge color={config[priority].color} variant="soft" size="xs">
      {config[priority].label}
    </Badge>
  );
};

export const CategoryBadge: React.FC<{
  category: string;
  color?: BadgeColor;
}> = ({ category, color = 'primary' }) => (
  <Badge color={color} variant="soft" size="sm">
    {category}
  </Badge>
);
