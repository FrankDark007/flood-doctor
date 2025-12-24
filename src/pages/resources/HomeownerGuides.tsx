import React, { useState } from 'react';
import PageMeta from '../../components/ui/PageMeta';
import Breadcrumbs from '../../components/ui/Breadcrumbs';
import { 
  Snowflake, 
  Sun, 
  Droplets, 
  Wind, 
  Thermometer, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Calendar,
  AlertTriangle
} from 'lucide-react';

const HomeownerGuides: React.FC = () => {
  // Default to Winter based on current date logic (Dec-Feb)
  const [activeSeason, setActiveSeason] = useState<'winter' | 'summer'>('winter');

  const guides = {
    winter: [
      {
        title: "Prevent Frozen Pipes",
        icon: Snowflake,
        priority: "Critical",
        color: "text-blue-600",
        bg: "bg-blue-50",
        content: "Insulate pipes in unheated areas (attics, garages). Keep cabinet doors open during extreme cold to allow warm air to circulate around plumbing."
      },
      {
        title: "Exterior Faucets",
        icon: Droplets,
        priority: "High",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        content: "Disconnect all garden hoses immediately. Locate the interior shut-off valve for outdoor spigots and turn it off to prevent bursting."
      },
      {
        title: "Heating System Check",
        icon: Thermometer,
        priority: "Medium",
        color: "text-orange-600",
        bg: "bg-orange-50",
        content: "Replace HVAC filters to ensure efficient airflow. A working furnace prevents the house temperature from dropping to dangerous freezing levels."
      },
      {
        title: "Roof & Ice Dams",
        icon: AlertTriangle,
        priority: "Medium",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        content: "Ensure attic insulation is sufficient to prevent heat from escaping and melting snow on the roof, which causes destructive ice dams."
      }
    ],
    summer: [
      {
        title: "Humidity Control",
        icon: Droplets,
        priority: "High",
        color: "text-blue-600",
        bg: "bg-blue-50",
        content: "Keep indoor humidity below 60% to prevent mold growth. Use dehumidifiers in basements and ensure your AC is sized correctly."
      },
      {
        title: "Gutter Maintenance",
        icon: Wind,
        priority: "Critical",
        color: "text-green-600",
        bg: "bg-green-50",
        content: "Clean gutters before spring storms. Clogged gutters overflow, dumping water directly against your foundation and into the basement."
      },
      {
        title: "Sump Pump Test",
        icon: Wrench,
        priority: "High",
        color: "text-purple-600",
        bg: "bg-purple-50",
        content: "Pour a bucket of water into your sump pit. Ensure the float rises and the pump ejects water well away from your foundation."
      },
      {
        title: "Landscaping Grade",
        icon: Sun,
        priority: "Medium",
        color: "text-yellow-600",
        bg: "bg-yellow-50",
        content: "Ensure soil slopes away from your house foundation. Build-up soil in low spots to prevent pooling water during heavy summer rains."
      }
    ]
  };

  const activeGuides = guides[activeSeason];

  return (
    <main className="flex-grow bg-white">
      <PageMeta 
        title="Homeowner Maintenance Guides" 
        description="Seasonal prevention tips to protect your home from water damage, mold, and storms." 
      />
      
      {/* 1. Header & Toggle */}
      <div className="bg-subtle border-b border-border pt-12 pb-24">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
           <Breadcrumbs items={[{ label: 'Resources', path: '/resources/' }, { label: 'Maintenance Guides', path: '#' }]} />
           
           <h1 className="font-display text-4xl md:text-5xl font-medium text-text mt-8 mb-6">
             Protect your home year-round
           </h1>
           <p className="font-sans text-xl text-muted max-w-2xl mx-auto mb-10">
             Water damage is often preventable. Switch views to see what you should focus on right now.
           </p>

           {/* Smart Toggle */}
           <div className="inline-flex bg-white p-1.5 rounded-full border border-gray-200 shadow-sm relative z-10">
              <button 
                onClick={() => setActiveSeason('winter')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeSeason === 'winter' ? 'bg-blue-100 text-blue-700 shadow-sm' : 'text-muted hover:bg-gray-50'
                }`}
              >
                <Snowflake size={18} /> Winter Prep
              </button>
              <button 
                onClick={() => setActiveSeason('summer')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeSeason === 'summer' ? 'bg-yellow-100 text-yellow-700 shadow-sm' : 'text-muted hover:bg-gray-50'
                }`}
              >
                <Sun size={18} /> Summer Prep
              </button>
           </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 -mt-12 relative z-20 pb-20">
          
          {/* 2. Task Grid (Action Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeGuides.map((guide, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-google hover:shadow-google-hover transition-all duration-300 group">
                      <div className="flex justify-between items-start mb-6">
                          <div className={`w-14 h-14 ${guide.bg} ${guide.color} rounded-2xl flex items-center justify-center`}>
                              <guide.icon size={28} />
                          </div>
                          {guide.priority === "Critical" && (
                            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-red-100">
                                Priority: Critical
                            </span>
                          )}
                      </div>
                      <h3 className="font-display text-2xl font-medium text-text mb-3">
                          {guide.title}
                      </h3>
                      <p className="font-sans text-muted leading-relaxed mb-6">
                          {guide.content}
                      </p>
                      <button className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          Read full guide <ArrowRight size={16} />
                      </button>
                  </div>
              ))}
          </div>

          {/* 3. Maintenance Timeline */}
          <div className="bg-white rounded-[40px] border border-gray-200 p-8 md:p-16">
              <div className="text-center mb-16">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-muted">
                      <Calendar size={32} />
                  </div>
                  <h2 className="font-display text-3xl font-medium text-text mb-4">Maintenance Schedule</h2>
                  <p className="text-muted">A quick reference for when to check your home's vital systems.</p>
              </div>

              <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

                  <div className="space-y-12">
                      {[
                          { season: "Spring", tasks: ["Test Sump Pump", "Inspect Roof Shingles", "Clean Gutters"] },
                          { season: "Summer", tasks: ["Check AC Condensate Line", "Monitor Basement Humidity", "Inspect Deck Sealant"] },
                          { season: "Fall", tasks: ["Disconnect Hoses", "Clean Gutters (Again)", "Check Window Seals"] },
                          { season: "Winter", tasks: ["Insulate Pipes", "Test Smoke Detectors", "Monitor Ice Dams"] },
                      ].map((period, i) => (
                          <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                              {/* Season Label */}
                              <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                  <div className={`
                                      px-6 py-2 rounded-full font-display font-bold text-lg border
                                      ${i === 3 ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-white text-muted border-gray-200'}
                                      ${i % 2 !== 0 && 'md:order-last'}
                                  `}>
                                      {period.season}
                                  </div>
                              </div>
                              
                              {/* Connector Dot */}
                              <div className="relative z-10 w-4 h-4 rounded-full bg-white border-4 border-gray-300 hidden md:block"></div>

                              {/* Task List */}
                              <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
                                  <ul className="space-y-2 inline-block text-left">
                                      {period.tasks.map((task, k) => (
                                          <li key={k} className="flex items-center gap-3 text-muted">
                                              <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                              <span>{task}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

      </div>
    </main>
  );
};

export default HomeownerGuides;