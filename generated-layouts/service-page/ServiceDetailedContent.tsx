import React, { useState } from 'react';
import { ContentSection } from '../types';
import { BookOpen, ChevronDown, Check, Circle } from 'lucide-react';

interface ServiceDetailedContentProps {
  sections: ContentSection[];
}

const ServiceDetailedContent: React.FC<ServiceDetailedContentProps> = ({ sections }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [viewedIndices, setViewedIndices] = useState<Set<number>>(new Set([0]));

  const handleToggle = (index: number) => {
    const isOpen = openIndex === index;
    const newIndex = isOpen ? null : index;
    setOpenIndex(newIndex);
    
    if (newIndex !== null) {
      const newViewed = new Set(viewedIndices);
      newViewed.add(newIndex);
      setViewedIndices(newViewed);
    }
  };

  const handleSidebarClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    setOpenIndex(index);
    
    const newViewed = new Set(viewedIndices);
    newViewed.add(index);
    setViewedIndices(newViewed);

    // Smooth scroll to the section with delay to allow state update
    setTimeout(() => {
      const element = document.getElementById(`section-${index}`);
      if (element) {
        const headerOffset = 100; // Account for sticky navbar (h-16 = 64px) + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 10);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Sidebar / TOC Area */}
          <div className="lg:w-1/4">
             <div className="sticky top-24 bg-surface p-6 rounded-2xl border border-slate-100 shadow-sm">
               <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase tracking-wider text-xs">
                 <BookOpen size={14} />
                 <span>In-Depth Guide</span>
               </div>
               
               {/* Progress Bar */}
               <div className="mb-6">
                 <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
                   <span>Read Progress</span>
                   <span>{Math.round((viewedIndices.size / sections.length) * 100)}%</span>
                 </div>
                 <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                   <div 
                     className="bg-green-500 h-1.5 rounded-full transition-all duration-500" 
                     style={{ width: `${(viewedIndices.size / sections.length) * 100}%` }}
                   ></div>
                 </div>
               </div>

               <h3 className="font-bold text-slate-900 mb-4">Restoration Knowledge</h3>
               <nav className="space-y-1">
                 {sections.map((section, idx) => {
                   const isActive = openIndex === idx;
                   const isViewed = viewedIndices.has(idx);
                   
                   return (
                     <a 
                       key={idx} 
                       href={`#section-${idx}`}
                       onClick={(e) => handleSidebarClick(e, idx)}
                       className={`group flex items-center justify-between text-sm px-3 py-2.5 rounded-lg transition-all duration-200 border-l-2 ${
                         isActive 
                           ? 'bg-primary/5 text-primary font-bold border-primary' 
                           : isViewed 
                             ? 'text-slate-600 hover:bg-slate-50 border-transparent hover:border-slate-300'
                             : 'text-slate-400 hover:text-slate-600 border-transparent'
                       }`}
                     >
                       <span className="truncate mr-2">{section.heading}</span>
                       
                       {isActive ? (
                         <div className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                       ) : isViewed ? (
                         <Check size={14} className="text-green-500 shrink-0" />
                       ) : (
                         <Circle size={8} className="text-slate-300 fill-slate-100 shrink-0" />
                       )}
                     </a>
                   );
                 })}
               </nav>
               <div className="mt-8 pt-6 border-t border-slate-200">
                 <p className="text-xs text-slate-400 italic">
                   This information is for educational purposes. For immediate assistance, call our emergency line.
                 </p>
               </div>
             </div>
          </div>

          {/* Main Content Area - Accordion Style */}
          <div className="lg:w-3/4">
             <div className="space-y-4">
               {sections.map((section, idx) => (
                 <div 
                    key={idx} 
                    id={`section-${idx}`} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      openIndex === idx 
                        ? 'bg-white border-primary/20 shadow-lg shadow-blue-900/5' 
                        : 'bg-white border-slate-100 shadow-sm hover:border-slate-200'
                    }`}
                 >
                   <button 
                      onClick={() => handleToggle(idx)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                   >
                     <div className="flex items-center gap-4">
                       <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0 transition-all duration-300 ${
                         viewedIndices.has(idx) 
                           ? 'bg-green-100 text-green-600' 
                           : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                       }`}>
                          {viewedIndices.has(idx) ? <Check size={16} /> : idx + 1}
                       </span>
                       <h2 className={`text-xl md:text-2xl font-bold transition-colors ${
                         openIndex === idx ? 'text-slate-900' : 'text-slate-700'
                       }`}>
                         {section.heading}
                       </h2>
                     </div>
                     <div className={`p-2 rounded-full transition-all duration-300 ${
                       openIndex === idx ? 'bg-primary/10 text-primary rotate-180' : 'text-slate-400 bg-slate-50'
                     }`}>
                        <ChevronDown size={20} />
                     </div>
                   </button>
                   
                   <div 
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openIndex === idx ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                   >
                      <div className="p-6 md:p-8 pt-0 prose prose-slate max-w-none prose-lg text-slate-600 leading-relaxed border-t border-dashed border-slate-100 mt-2">
                         {section.content.map((paragraph, pIdx) => (
                           <p key={pIdx} className="mb-4 last:mb-0">{paragraph}</p>
                         ))}
                      </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceDetailedContent;