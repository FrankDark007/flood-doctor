import React from 'react';
import { Clock, Award, ShieldCheck, FileCheck, BadgeCheck } from 'lucide-react';
import { CREDENTIALS, RESPONSE_TIME } from '../../../config/constants';

interface TrustItem {
  label: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const TrustBar: React.FC = () => {
  const trusts: TrustItem[] = [
    { label: RESPONSE_TIME.display, icon: Clock },
    { label: CREDENTIALS.iicrc.display, icon: Award },
    { label: CREDENTIALS.dpor.display, icon: BadgeCheck, highlight: true },
    { label: CREDENTIALS.insurance.display, icon: ShieldCheck },
    { label: "Direct Insurance Billing", icon: FileCheck }
  ];

  return (
    <div className="border-b border-[#dadce0] bg-white">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-6 md:py-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {trusts.map((item) => (
            <span
              key={item.label}
              className={`
                inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                whitespace-nowrap gap-2 transition-colors
                ${item.highlight
                  ? 'bg-[#e8f0fe] text-[#1a73e8] border border-[#1a73e8]/20'
                  : 'bg-white text-[#202124] border border-[#dadce0]'
                }
              `}
            >
              <item.icon size={16} className={item.highlight ? 'text-[#1a73e8]' : 'text-[#1a73e8]'} />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;