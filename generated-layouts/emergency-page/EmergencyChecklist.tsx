import React from 'react';
import { AlertOctagon } from 'lucide-react';
import { CHECKLIST_ITEMS } from './constants';

const EmergencyChecklist: React.FC = () => {
  return (
    <section className="px-4 py-8 bg-slate-50 border-t border-b border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <AlertOctagon className="w-6 h-6 text-red-600" />
        <h2 className="text-xl font-black text-slate-900 uppercase tracking-wide">
          Do This NOW
        </h2>
      </div>
      
      <ol className="list-none space-y-3">
        {CHECKLIST_ITEMS.map((item, index) => (
          <li 
            key={item.id} 
            className={`flex items-start gap-3 p-3 rounded-lg ${
              item.important ? 'bg-white border-l-4 border-red-500 shadow-sm' : 'bg-white border-l-4 border-gray-300'
            }`}
          >
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-900 font-bold text-sm flex-shrink-0 mt-0.5">
              {index + 1}
            </span>
            <span className={`text-base leading-snug ${item.important ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ol>
      
      <p className="mt-4 text-sm text-slate-500 italic text-center">
        *Only perform these tasks if it is safe to do so.
      </p>
    </section>
  );
};

export default EmergencyChecklist;