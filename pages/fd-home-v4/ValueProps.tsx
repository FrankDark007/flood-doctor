
import React from 'react';
import { Clock, Shield, FileCheck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: "60-Minute Response",
    desc: "Our crews arrive fast when water damage strikes, day or night."
  },
  {
    icon: Shield,
    title: "Licensed Contractor",
    desc: "Full repair services from a bonded, insured Virginia Class A contractor."
  },
  {
    icon: FileCheck,
    title: "Direct Insurance Billing",
    desc: "We handle the claims process and bill your carrier directly."
  }
];

export const ValueProps: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1296px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#e8f0fe] rounded-full flex items-center justify-center text-[#1a73e8] mb-6">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-normal text-[#202124] mb-3">{feature.title}</h3>
              <p className="text-sm text-[#5f6368] leading-relaxed max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
