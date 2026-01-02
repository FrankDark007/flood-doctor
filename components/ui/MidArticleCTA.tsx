import React from 'react';
import { Phone, ArrowRight, Clock } from 'lucide-react';
import Button from './Button';

interface MidArticleCTAProps {
  variant?: 'emergency' | 'consultation' | 'estimate';
  headline?: string;
  subtext?: string;
}

const MidArticleCTA: React.FC<MidArticleCTAProps> = ({
  variant = 'emergency',
  headline,
  subtext
}) => {
  const variants = {
    emergency: {
      bg: 'bg-gradient-to-r from-red-50 to-orange-50',
      border: 'border-red-100',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      headline: 'Dealing with water damage right now?',
      subtext: 'Our emergency crews arrive in 60 minutes or less. Available 24/7.',
      buttonVariant: 'primary' as const,
      buttonClass: 'bg-red-600 hover:bg-red-700'
    },
    consultation: {
      bg: 'bg-gradient-to-r from-blue-50 to-indigo-50',
      border: 'border-blue-100',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      headline: 'Have questions about your situation?',
      subtext: 'Speak with a restoration specialist. Free consultation, no obligation.',
      buttonVariant: 'primary' as const,
      buttonClass: ''
    },
    estimate: {
      bg: 'bg-gradient-to-r from-emerald-50 to-teal-50',
      border: 'border-emerald-100',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      headline: 'Get a free damage assessment',
      subtext: 'We document everything for your insurance claim. No cost, no commitment.',
      buttonVariant: 'secondary' as const,
      buttonClass: ''
    }
  };

  const config = variants[variant];

  return (
    <div className={`${config.bg} border ${config.border} rounded-2xl p-6 my-12`}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className={`${config.iconBg} p-3 rounded-xl shrink-0 w-fit`}>
          {variant === 'emergency' ? (
            <Phone className={config.iconColor} size={24} />
          ) : variant === 'consultation' ? (
            <Clock className={config.iconColor} size={24} />
          ) : (
            <ArrowRight className={config.iconColor} size={24} />
          )}
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-gray-900 mb-1">
            {headline || config.headline}
          </h4>
          <p className="text-sm text-gray-600">
            {subtext || config.subtext}
          </p>
        </div>

        <Button
          href="tel:8774970007"
          variant={config.buttonVariant}
          className={`shrink-0 ${config.buttonClass}`}
        >
          <Phone size={16} className="mr-2" />
          (877) 497-0007
        </Button>
      </div>
    </div>
  );
};

export default MidArticleCTA;
