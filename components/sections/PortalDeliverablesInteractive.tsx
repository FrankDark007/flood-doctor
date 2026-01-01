import React, { useState, useRef } from 'react';
import { Image as ImageIcon, ClipboardList, Map, Wind, Package, Trash2, Sparkles, CheckSquare, X, ChevronDown, ChevronUp } from 'lucide-react';

// Import Illustrations
import PortalPhotosIllustration from '../ui/technology/portal/PortalPhotosIllustration';
import PortalDryingLogsIllustration from '../ui/technology/portal/PortalDryingLogsIllustration';
import PortalMoistureMapsIllustration from '../ui/technology/portal/PortalMoistureMapsIllustration';
import PortalEquipmentLogsIllustration from '../ui/technology/portal/PortalEquipmentLogsIllustration';
import PortalContentsListIllustration from '../ui/technology/portal/PortalContentsListIllustration';
import PortalDiscardedItemsIllustration from '../ui/technology/portal/PortalDiscardedItemsIllustration';
import PortalCleaningTrackingIllustration from '../ui/technology/portal/PortalCleaningTrackingIllustration';
import PortalFinalVerificationIllustration from '../ui/technology/portal/PortalFinalVerificationIllustration';

interface PortalItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  Illustration: React.ElementType;
}

const PORTAL_ITEMS: PortalItem[] = [
  {
    id: 'photos',
    title: 'Photos',
    description: 'Before, during, and after documentation of the affected areas and work performed.',
    icon: ImageIcon,
    Illustration: PortalPhotosIllustration
  },
  {
    id: 'daily-logs',
    title: 'Daily Drying Logs',
    description: 'Environmental readings and progress notes for each day of the project.',
    icon: ClipboardList,
    Illustration: PortalDryingLogsIllustration
  },
  {
    id: 'moisture-maps',
    title: 'Moisture Maps',
    description: 'Room-by-room snapshots showing what was wet and how conditions changed over time.',
    icon: Map,
    Illustration: PortalMoistureMapsIllustration
  },
  {
    id: 'equipment-logs',
    title: 'Equipment Logs',
    description: 'Dehumidifiers, air movers, and other equipment placement and runtime notes (when applicable).',
    icon: Wind,
    Illustration: PortalEquipmentLogsIllustration
  },
  {
    id: 'contents-list',
    title: 'Contents List',
    description: 'A running list of contents handled, packed out, or moved for access and protection.',
    icon: Package,
    Illustration: PortalContentsListIllustration
  },
  {
    id: 'discarded-items',
    title: 'Discarded Items',
    description: 'A documented list of unsalvageable materials or contents removed from the property.',
    icon: Trash2,
    Illustration: PortalDiscardedItemsIllustration
  },
  {
    id: 'cleaning-tracking',
    title: 'Cleaning & Restoration Tracking',
    description: 'Items sent for cleaning/restoration, status updates, and return notes (when applicable).',
    icon: Sparkles,
    Illustration: PortalCleaningTrackingIllustration
  },
  {
    id: 'final-verification',
    title: 'Final Verification Summary',
    description: 'A closeout summary showing drying goals met and final documentation delivered.',
    icon: CheckSquare,
    Illustration: PortalFinalVerificationIllustration
  }
];

const PortalDeliverablesInteractive: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = PORTAL_ITEMS.find(item => item.id === activeId);

  const handleToggle = (id: string) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
      // Optional: Scroll panel into view if needed
      // setTimeout(() => {
      //   panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      // }, 100); 
    }
  };

  const handleClose = () => setActiveId(null);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">What You Get in Your Portal</h2>
           <p className="text-lg text-gray-600">Everything is organized in one place so you can track progress and access documentation when you need it.</p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
           {PORTAL_ITEMS.map((item) => {
             const isActive = activeId === item.id;
             return (
               <button
                 key={item.id}
                 onClick={() => handleToggle(item.id)}
                 aria-expanded={isActive}
                 aria-controls="portal-detail-panel"
                 className={`
                    group text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    ${isActive 
                      ? 'border-primary ring-1 ring-primary shadow-md bg-blue-50/30' 
                      : 'border-gray-100 hover:border-blue-100 bg-white shadow-sm hover:shadow-md'
                    }
                 `}
               >
                 <item.icon className={`w-8 h-8 mb-4 transition-colors ${isActive ? 'text-primary' : 'text-blue-500 group-hover:text-primary'}`} />
                 <h3 className={`font-semibold mb-2 transition-colors ${isActive ? 'text-primary' : 'text-gray-900'}`}>
                    {item.title}
                 </h3>
                 <p className="text-sm text-gray-600 line-clamp-3">
                    {item.description}
                 </p>
                 
                 {/* Chevron Indicator */}
                 <div className={`absolute bottom-4 right-4 text-primary transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    <ChevronDown size={20} />
                 </div>
               </button>
             );
           })}
        </div>

        {/* Expanding Detail Panel */}
        <div 
            id="portal-detail-panel"
            className={`transition-all duration-500 ease-in-out overflow-hidden ${activeId ? 'opacity-100 mt-8' : 'opacity-0 max-h-0'}`}
            style={{ maxHeight: activeId ? '1000px' : '0px' }} // Approximate max height for transition
            ref={panelRef}
        >
            {activeItem && (
               <div className="bg-white rounded-2xl border border-gray-200 shadow-soft p-8 md:p-12 relative animate-in fade-in slide-in-from-top-4 duration-500">
                  <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Close detail panel"
                  >
                     <X size={24} />
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div className="order-2 lg:order-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeItem.title}</h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                              {activeItem.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-primary font-medium cursor-pointer hover:underline" onClick={handleClose}>
                              Close details <ChevronUp size={16} />
                          </div>
                      </div>
                      
                      <div className="order-1 lg:order-2">
                          <div className="bg-subtle rounded-xl overflow-hidden">
                             <activeItem.Illustration />
                          </div>
                          <div className="text-center mt-3 text-xs text-gray-400 italic">
                             Illustrative example
                          </div>
                      </div>
                  </div>
               </div>
            )}
        </div>

        <p className="text-center text-sm text-gray-400 mt-12">Portal features vary by job scope. Some items may not apply to every project.</p>
      </div>
    </section>
  );
};

export default PortalDeliverablesInteractive;