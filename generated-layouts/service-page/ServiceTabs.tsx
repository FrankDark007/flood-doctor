import React, { useState } from 'react';
import { Cpu, FileText, Users, Shield, CheckCircle2 } from 'lucide-react';
import { TabItem } from './types';

interface ServiceTabsProps {
  tabs: TabItem[];
}

const iconMap: Record<string, React.FC<any>> = {
  Cpu,
  FileText,
  Users,
  Shield
};

const ServiceTabs: React.FC<ServiceTabsProps> = ({ tabs }) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const activeContent = tabs.find(t => t.id === activeTabId) || tabs[0];
  const ActiveIcon = iconMap[activeContent.icon] || Shield;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Why Choose Flood Doctor?</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">We combine advanced technology with certified expertise to restore your home faster.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 no-scrollbar">
            {tabs.map((tab) => {
              const Icon = iconMap[tab.icon] || Shield;
              const isActive = activeTabId === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 min-w-[240px] lg:min-w-0 border ${
                    isActive 
                      ? 'bg-white border-primary shadow-lg shadow-blue-900/5' 
                      : 'bg-transparent border-transparent hover:bg-white/50 text-slate-500 hover:text-slate-700'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg transition-colors ${isActive ? 'bg-primary text-white' : 'bg-slate-200 text-slate-500'}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className={`font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {tab.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panel */}
          <div className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 animate-fade-in key={activeTabId}">
             <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{activeContent.title}</h3>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>
                <div className="hidden md:block text-slate-100">
                  <ActiveIcon size={80} strokeWidth={1} />
                </div>
             </div>
             
             <p className="text-lg text-slate-600 leading-relaxed mb-8">
               {activeContent.description}
             </p>

             <div className="grid md:grid-cols-2 gap-4">
               {activeContent.listItems.map((item, idx) => (
                 <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl">
                   <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                   <span className="text-sm font-medium text-slate-700">{item}</span>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;