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
    <div className="border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {trusts.map((item) => (
            <span key={item.label} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 border border-gray-200 shadow-sm whitespace-nowrap gap-2">
              <item.icon size={16} className="text-primary" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;