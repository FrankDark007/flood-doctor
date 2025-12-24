import React from 'react';
import { Clock, Award, ShieldCheck, FileCheck } from 'lucide-react';

const TrustBar: React.FC = () => {
  const trusts = [
    { label: "24/7 Rapid Response", icon: Clock },
    { label: "IICRC Certified", icon: Award },
    { label: "Licensed & Insured", icon: ShieldCheck },
    { label: "Direct Insurance Billing", icon: FileCheck }
  ];

  return (
    <div className="border-b border-[#dadce0] bg-white">
      <div className="max-w-[1296px] mx-auto px-4 sm:px-8 lg:px-16 py-6 md:py-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {trusts.map((item) => (
            <span key={item.label} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-[#202124] border border-[#dadce0] whitespace-nowrap gap-2">
              <item.icon size={16} className="text-[#1a73e8]" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;