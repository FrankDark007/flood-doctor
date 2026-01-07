import React from 'react';
import { ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { TRUST_SIGNALS } from '../constants';

const EmergencyTrust: React.FC = () => {
  // Map string icon names to Lucide components for static usage
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield': return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'clock': return <Clock className="w-5 h-5 text-blue-600" />;
      case 'file-check': return <FileCheck className="w-5 h-5 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <section className="px-4 py-6 bg-white">
      <div className="grid grid-cols-1 gap-3">
        {TRUST_SIGNALS.map((signal) => (
          <div key={signal.id} className="flex items-center gap-3 p-2">
            <div className="bg-blue-50 p-2 rounded-full">
              {getIcon(signal.iconName)}
            </div>
            <span className="font-semibold text-slate-800 text-sm uppercase tracking-wide">
              {signal.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmergencyTrust;