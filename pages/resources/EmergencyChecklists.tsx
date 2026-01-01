import React, { useState } from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import Button from '../../components/ui/Button';
import { 
  AlertTriangle, 
  Droplets, 
  Zap, 
  Ban, 
  CheckCircle2, 
  Biohazard, 
  Flame, 
  Thermometer,
  Phone,
  XCircle
} from 'lucide-react';

const EmergencyChecklists: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'water' | 'sewage' | 'fire'>('water');

  const scenarios = {
    water: {
      label: "Water / Flood",
      icon: Droplets,
      color: "blue",
      safety: "Do not enter a room with standing water until electricity is turned off.",
      dos: [
        "Shut off the main water valve immediately.",
        "Remove loose items (rugs, books) from the floor.",
        "Wipe excess water from wood furniture.",
        "Hang draperies/curtains off the floor.",
        "Take photos of the source of the leak."
      ],
      donts: [
        "Use a household vacuum to remove water (shock hazard).",
        "Turn on ceiling fixtures if ceiling is wet.",
        "Leave books or magazines on wet carpets (staining)."
      ]
    },
    sewage: {
      label: "Sewage Backup",
      icon: Biohazard,
      color: "amber",
      safety: "Sewage contains dangerous bacteria. Avoid all direct contact.",
      dos: [
        "Evacuate children, pets, and elderly immediately.",
        "Turn off the HVAC system to prevent spreading bacteria.",
        "Call a professional immediately (Category 3 loss).",
        "Wash your hands thoroughly if you touch anything."
      ],
      donts: [
        "Attempt to clean it yourself with bleach (ineffective).",
        "Walk through the area to retrieve items.",
        "Use fans (this spreads airborne bacteria)."
      ]
    },
    fire: {
      label: "Fire / Smoke",
      icon: Flame,
      color: "orange",
      safety: "Toxic fumes and structural instability are major risks.",
      dos: [
        "Open windows for ventilation if safe.",
        "Empty your refrigerator/freezer if power is out.",
        "Change the air filter on your HVAC system.",
        "Cover clean furniture with plastic sheeting."
      ],
      donts: [
        "Wipe soot from walls (it smears and stains).",
        "Use food items that were exposed to heat.",
        "Turn on lights/appliances until checked."
      ]
    }
  };

  const activeData = scenarios[activeTab];

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Emergency Checklists" 
        description="Immediate safety steps for water damage, sewage backups, and fire. What to do while waiting for help." 
      />
      
      {/* 1. Panic Hero */}
      <div className="bg-red-600 text-white pt-12 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-white/30">
              <Zap size={16} className="text-yellow-300" />
              <span>Safety First</span>
           </div>
           <h1 className="font-display text-4xl md:text-5xl font-medium mb-6">
              Emergency Action Plan
           </h1>
           <p className="text-red-100 text-xl leading-relaxed mb-8">
              Stop. Take a breath. Follow these steps to stay safe and minimize damage while help is on the way.
           </p>
           
           {/* Quick Call Button */}
           <div className="inline-flex bg-white rounded-full p-1.5 pl-6 pr-2 items-center gap-4 shadow-xl">
              <span className="text-red-600 font-bold text-lg">Need help now?</span>
              <a 
                href="tel:8774970007" 
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
              >
                <Phone size={18} /> Call (877) 497-0007
              </a>
           </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-12 relative z-10 pb-20">
          
          {/* 2. Scenario Tabs */}
          <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col sm:flex-row gap-2 mb-12 border border-gray-100">
              {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((key) => {
                  const isActive = activeTab === key;
                  const item = scenarios[key];
                  return (
                      <button
                          key={key}
                          onClick={() => setActiveTab(key)}
                          className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition-all duration-300 font-medium ${
                              isActive 
                              ? 'bg-text text-white shadow-md' 
                              : 'bg-transparent text-muted hover:bg-gray-50'
                          }`}
                      >
                          <item.icon size={20} className={isActive ? 'text-white' : `text-${item.color}-500`} />
                          {item.label}
                      </button>
                  );
              })}
          </div>

          {/* 3. The Active Checklist */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Critical Safety Warning */}
              <div className={`bg-${activeData.color}-50 border border-${activeData.color}-100 rounded-3xl p-8 mb-12 flex items-start gap-6`}>
                  <div className={`p-4 bg-white rounded-full text-${activeData.color}-600 shadow-sm shrink-0`}>
                      <AlertTriangle size={32} />
                  </div>
                  <div>
                      <h3 className={`text-xl font-bold text-${activeData.color}-900 mb-2`}>CRITICAL WARNING</h3>
                      <p className={`text-${activeData.color}-800 text-lg leading-relaxed`}>
                          {activeData.safety}
                      </p>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  {/* DO List */}
                  <div>
                      <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-green-100 text-green-700 rounded-full">
                              <CheckCircle2 size={24} />
                          </div>
                          <h2 className="text-2xl font-display font-medium text-text">Do This</h2>
                      </div>
                      <div className="space-y-4">
                          {activeData.dos.map((item, i) => (
                              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex gap-4 hover:border-green-200 transition-colors">
                                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 font-bold text-xs shrink-0 mt-0.5">
                                      {i + 1}
                                  </span>
                                  <p className="text-text font-medium">{item}</p>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* DO NOT List */}
                  <div>
                      <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-red-100 text-red-700 rounded-full">
                              <Ban size={24} />
                          </div>
                          <h2 className="text-2xl font-display font-medium text-text">Do NOT Do This</h2>
                      </div>
                      <div className="space-y-4">
                          {activeData.donts.map((item, i) => (
                              <div key={i} className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex gap-4 opacity-75 hover:opacity-100 transition-opacity">
                                  <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                                  <p className="text-muted">{item}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>

          </div>

          {/* 4. Help Footer */}
          <div className="mt-20 text-center bg-subtle rounded-[32px] p-12">
              <h3 className="font-display text-2xl font-medium text-text mb-4">Unsure what to do?</h3>
              <p className="text-muted mb-8 max-w-xl mx-auto">
                  Every situation is unique. Call our 24/7 helpline and a certified project manager will walk you through the safety steps for free.
              </p>
              <div className="flex justify-center gap-4">
                  <Button href="tel:8774970007" variant="primary" className="h-12 px-8">
                      Speak to an Expert
                  </Button>
                  <Button to="/contact/" variant="secondary" className="h-12 px-8">
                      Send a Message
                  </Button>
              </div>
          </div>

      </div>
    </main>
  );
};

export default EmergencyChecklists;