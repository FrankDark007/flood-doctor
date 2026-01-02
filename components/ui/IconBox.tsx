import React from 'react';
import { LucideIcon } from 'lucide-react';

type IconBoxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type IconBoxShape = 'circle' | 'rounded' | 'square';
type IconBoxVariant = 'solid' | 'soft' | 'outline' | 'ghost';
type IconBoxColor = 'primary' | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'green' | 'emerald' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'white';

interface IconBoxProps {
  icon?: LucideIcon;
  children?: React.ReactNode;
  size?: IconBoxSize;
  shape?: IconBoxShape;
  variant?: IconBoxVariant;
  color?: IconBoxColor;
  className?: string;
}

const sizeStyles: Record<IconBoxSize, { box: string; icon: number }> = {
  xs: { box: 'w-6 h-6', icon: 12 },
  sm: { box: 'w-8 h-8', icon: 16 },
  md: { box: 'w-10 h-10', icon: 20 },
  lg: { box: 'w-12 h-12', icon: 24 },
  xl: { box: 'w-14 h-14', icon: 28 },
  '2xl': { box: 'w-16 h-16', icon: 32 },
};

const shapeStyles: Record<IconBoxShape, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-xl',
  square: 'rounded-lg',
};

const colorStyles: Record<IconBoxColor, Record<IconBoxVariant, string>> = {
  primary: {
    solid: 'bg-primary text-white',
    soft: 'bg-blue-50 text-primary',
    outline: 'border-2 border-primary text-primary bg-transparent',
    ghost: 'text-primary bg-transparent',
  },
  gray: {
    solid: 'bg-gray-700 text-white',
    soft: 'bg-gray-100 text-gray-600',
    outline: 'border-2 border-gray-300 text-gray-600 bg-transparent',
    ghost: 'text-gray-600 bg-transparent',
  },
  red: {
    solid: 'bg-red-600 text-white',
    soft: 'bg-red-50 text-red-600',
    outline: 'border-2 border-red-300 text-red-600 bg-transparent',
    ghost: 'text-red-600 bg-transparent',
  },
  orange: {
    solid: 'bg-orange-500 text-white',
    soft: 'bg-orange-50 text-orange-600',
    outline: 'border-2 border-orange-300 text-orange-600 bg-transparent',
    ghost: 'text-orange-600 bg-transparent',
  },
  amber: {
    solid: 'bg-amber-500 text-white',
    soft: 'bg-amber-50 text-amber-600',
    outline: 'border-2 border-amber-300 text-amber-600 bg-transparent',
    ghost: 'text-amber-600 bg-transparent',
  },
  yellow: {
    solid: 'bg-yellow-500 text-white',
    soft: 'bg-yellow-50 text-yellow-600',
    outline: 'border-2 border-yellow-300 text-yellow-600 bg-transparent',
    ghost: 'text-yellow-600 bg-transparent',
  },
  green: {
    solid: 'bg-green-600 text-white',
    soft: 'bg-green-50 text-green-600',
    outline: 'border-2 border-green-300 text-green-600 bg-transparent',
    ghost: 'text-green-600 bg-transparent',
  },
  emerald: {
    solid: 'bg-emerald-600 text-white',
    soft: 'bg-emerald-50 text-emerald-600',
    outline: 'border-2 border-emerald-300 text-emerald-600 bg-transparent',
    ghost: 'text-emerald-600 bg-transparent',
  },
  teal: {
    solid: 'bg-teal-600 text-white',
    soft: 'bg-teal-50 text-teal-600',
    outline: 'border-2 border-teal-300 text-teal-600 bg-transparent',
    ghost: 'text-teal-600 bg-transparent',
  },
  cyan: {
    solid: 'bg-cyan-600 text-white',
    soft: 'bg-cyan-50 text-cyan-600',
    outline: 'border-2 border-cyan-300 text-cyan-600 bg-transparent',
    ghost: 'text-cyan-600 bg-transparent',
  },
  blue: {
    solid: 'bg-blue-600 text-white',
    soft: 'bg-blue-50 text-blue-600',
    outline: 'border-2 border-blue-300 text-blue-600 bg-transparent',
    ghost: 'text-blue-600 bg-transparent',
  },
  indigo: {
    solid: 'bg-indigo-600 text-white',
    soft: 'bg-indigo-50 text-indigo-600',
    outline: 'border-2 border-indigo-300 text-indigo-600 bg-transparent',
    ghost: 'text-indigo-600 bg-transparent',
  },
  violet: {
    solid: 'bg-violet-600 text-white',
    soft: 'bg-violet-50 text-violet-600',
    outline: 'border-2 border-violet-300 text-violet-600 bg-transparent',
    ghost: 'text-violet-600 bg-transparent',
  },
  purple: {
    solid: 'bg-purple-600 text-white',
    soft: 'bg-purple-50 text-purple-600',
    outline: 'border-2 border-purple-300 text-purple-600 bg-transparent',
    ghost: 'text-purple-600 bg-transparent',
  },
  pink: {
    solid: 'bg-pink-600 text-white',
    soft: 'bg-pink-50 text-pink-600',
    outline: 'border-2 border-pink-300 text-pink-600 bg-transparent',
    ghost: 'text-pink-600 bg-transparent',
  },
  white: {
    solid: 'bg-white text-gray-700 shadow-sm',
    soft: 'bg-white/80 text-gray-700',
    outline: 'border-2 border-white text-white bg-transparent',
    ghost: 'text-white bg-transparent',
  },
};

const IconBox: React.FC<IconBoxProps> = ({
  icon: Icon,
  children,
  size = 'md',
  shape = 'rounded',
  variant = 'soft',
  color = 'primary',
  className = '',
}) => {
  const { box, icon: iconSize } = sizeStyles[size];
  const shapeClass = shapeStyles[shape];
  const colorClass = colorStyles[color][variant];

  return (
    <div
      className={`${box} ${shapeClass} ${colorClass} flex items-center justify-center shrink-0 ${className}`}
    >
      {Icon ? <Icon size={iconSize} /> : children}
    </div>
  );
};

export default IconBox;

// Numbered step variant
export const StepNumber: React.FC<{
  number: number | string;
  size?: IconBoxSize;
  color?: IconBoxColor;
  variant?: IconBoxVariant;
}> = ({ number, size = 'md', color = 'primary', variant = 'solid' }) => (
  <IconBox size={size} shape="circle" color={color} variant={variant}>
    <span className="font-bold">{number}</span>
  </IconBox>
);
