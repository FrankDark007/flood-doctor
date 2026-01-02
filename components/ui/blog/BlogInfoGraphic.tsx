import React from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Shield,
  Phone,
  Clock,
  DollarSign,
  Home,
  Droplets,
  FileText,
  LucideIcon
} from 'lucide-react';

// Coverage comparison component
interface CoverageItem {
  item: string;
  covered: boolean;
  note?: string;
}

export const CoverageComparison: React.FC<{
  title: string;
  items: CoverageItem[];
}> = ({ title, items }) => (
  <div className="my-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
    <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3">
          {item.covered ? (
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          )}
          <div>
            <span className={item.covered ? 'text-gray-900' : 'text-gray-600'}>
              {item.item}
            </span>
            {item.note && (
              <span className="text-sm text-gray-500 block">{item.note}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Stats grid for key numbers
interface StatItem {
  value: string;
  label: string;
  icon?: LucideIcon;
}

export const StatsGrid: React.FC<{
  stats: StatItem[];
  variant?: 'blue' | 'gray';
}> = ({ stats, variant = 'blue' }) => (
  <div className={`my-8 grid grid-cols-2 md:grid-cols-${Math.min(stats.length, 4)} gap-4`}>
    {stats.map((stat, idx) => {
      const Icon = stat.icon;
      return (
        <div
          key={idx}
          className={`p-4 rounded-lg text-center ${
            variant === 'blue'
              ? 'bg-blue-50 border border-blue-100'
              : 'bg-gray-50 border border-gray-200'
          }`}
        >
          {Icon && (
            <Icon className={`w-8 h-8 mx-auto mb-2 ${
              variant === 'blue' ? 'text-blue-600' : 'text-gray-600'
            }`} />
          )}
          <div className={`text-2xl font-bold ${
            variant === 'blue' ? 'text-blue-900' : 'text-gray-900'
          }`}>
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      );
    })}
  </div>
);

// Process steps with timeline
interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export const ProcessTimeline: React.FC<{
  title: string;
  steps: ProcessStep[];
}> = ({ title, steps }) => (
  <div className="my-8">
    <h4 className="text-lg font-semibold text-gray-900 mb-6">{title}</h4>
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-blue-200" />

      <div className="space-y-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 relative z-10">
                {step.number}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  {Icon && <Icon className="w-4 h-4 text-blue-600" />}
                  <h5 className="font-semibold text-gray-900">{step.title}</h5>
                </div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

// Warning/Alert callout
export const AlertCallout: React.FC<{
  type: 'warning' | 'info' | 'success' | 'danger';
  title: string;
  children: React.ReactNode;
}> = ({ type, title, children }) => {
  const styles = {
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-400',
      icon: AlertTriangle,
      iconColor: 'text-yellow-600',
      titleColor: 'text-yellow-900',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-400',
      icon: Shield,
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-400',
      icon: CheckCircle2,
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
    },
    danger: {
      bg: 'bg-red-50',
      border: 'border-red-400',
      icon: XCircle,
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
    },
  };

  const style = styles[type];
  const Icon = style.icon;

  return (
    <div className={`my-6 ${style.bg} border-l-4 ${style.border} p-4 rounded-r-lg`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${style.iconColor} flex-shrink-0 mt-0.5`} />
        <div>
          <h4 className={`font-semibold ${style.titleColor} mb-1`}>{title}</h4>
          <div className="text-gray-700 text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Cost comparison table
interface CostItem {
  item: string;
  lowCost: string;
  highCost: string;
  notes?: string;
}

export const CostTable: React.FC<{
  title: string;
  items: CostItem[];
}> = ({ title, items }) => (
  <div className="my-8 overflow-x-auto">
    <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Coverage Type</th>
          <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Low Estimate</th>
          <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">High Estimate</th>
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">Notes</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {items.map((item, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="px-4 py-3 text-sm text-gray-900">{item.item}</td>
            <td className="px-4 py-3 text-sm text-right text-gray-900">{item.lowCost}</td>
            <td className="px-4 py-3 text-sm text-right text-gray-900">{item.highCost}</td>
            <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{item.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Quick tip box
export const QuickTip: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="my-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-xl">
    <div className="flex items-start gap-3">
      <Shield className="w-6 h-6 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <div className="text-blue-100 text-sm">{children}</div>
      </div>
    </div>
  </div>
);

// Image placeholder with caption
export const BlogImage: React.FC<{
  src: string;
  alt: string;
  caption?: string;
}> = ({ src, alt, caption }) => (
  <figure className="my-8">
    <div className="bg-gray-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="text-gray-400 flex flex-col items-center gap-2">
          <Home className="w-12 h-12" />
          <span className="text-sm">{alt}</span>
        </div>
      )}
    </div>
    {caption && (
      <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
        {caption}
      </figcaption>
    )}
  </figure>
);

export default {
  CoverageComparison,
  StatsGrid,
  ProcessTimeline,
  AlertCallout,
  CostTable,
  QuickTip,
  BlogImage,
};
