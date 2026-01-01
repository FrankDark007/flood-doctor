
import React from 'react';
import { Clock } from 'lucide-react';

const EmergencyServiceBadge: React.FC = () => {
  return (
    <div className="relative z-20">
      {/* Badge */}
      <span className="inline-flex items-center gap-1.5 bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider cursor-default transition-all duration-200 hover:bg-blue-100 ring-1 ring-transparent hover:ring-blue-200">
        <Clock size={14} className="text-primary" />
        24/7 Emergency Service
      </span>
    </div>
  );
};

export default EmergencyServiceBadge;
