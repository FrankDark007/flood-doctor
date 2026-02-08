import React, { useMemo, useState } from 'react';
import { ContentSection } from './types';
import { BookOpen, Check, Circle, ArrowRight } from 'lucide-react';

interface ServiceDetailedContentProps {
  sections: ContentSection[];
}

const PREVIEW_PARAGRAPHS = 2;

const trimWords = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return `${words.slice(0, wordLimit).join(' ')}…`;
};

const ServiceDetailedContent: React.FC<ServiceDetailedContentProps> = ({ sections }) => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]));
  const [viewedIndices, setViewedIndices] = useState<Set<number>>(new Set([0]));

  const highlightCards = useMemo(() => (
    sections.slice(0, 3).map((section, index) => ({
      heading: section.heading,
      summary: trimWords(section.content[0] || 'Expert restoration guidance tailored to your property.', 24),
      index
    }))
  ), [sections]);

  const handleToggle = (index: number) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });

    const newViewed = new Set(viewedIndices);
    newViewed.add(index);
    setViewedIndices(newViewed);
  };

  const scrollToSection = (index: number) => {
    setExpandedSections((prev) => new Set(prev).add(index));

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

  const handleSidebarClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    scrollToSection(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
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

               <h3 className="font-bold text-slate-900 mb-4">Jump to section</h3>
               <nav className="space-y-1">
                 {sections.map((section, idx) => {
                   const isActive = expandedSections.has(idx);
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
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-3">
                Deep‑dive restoration guidance
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We’ve broken down the full process into focused sections so you can scan fast, then expand what you need.
              </p>
            </div>

            {highlightCards.length > 0 && (
              <div className="grid gap-4 md:grid-cols-3 mb-10">
                {highlightCards.map((card) => (
                  <div key={card.heading} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Key takeaway</p>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{card.heading}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{card.summary}</p>
                    <button
                      onClick={() => scrollToSection(card.index)}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-primaryHover"
                    >
                      Jump to section <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-6">
              {sections.map((section, idx) => {
                const isExpanded = expandedSections.has(idx);
                const paragraphs = isExpanded ? section.content : section.content.slice(0, PREVIEW_PARAGRAPHS);

                return (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    className="rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden"
                  >
                    <div className="px-6 md:px-8 py-6 border-b border-slate-100 bg-slate-50/60">
                      <div className="flex items-center gap-3">
                        <span className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold ${
                          viewedIndices.has(idx) ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {viewedIndices.has(idx) ? <Check size={16} /> : idx + 1}
                        </span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{section.heading}</h3>
                          <p className="text-sm text-slate-500">Practical guidance from our restoration team.</p>
                        </div>
                      </div>
                    </div>

                    <div className="px-6 md:px-8 py-6 prose prose-slate max-w-none prose-lg text-slate-600 leading-relaxed">
                      {paragraphs.map((paragraph, pIdx) => (
                        <p key={pIdx} className="mb-4 last:mb-0">{paragraph}</p>
                      ))}
                    </div>

                    {section.content.length > PREVIEW_PARAGRAPHS && (
                      <div className="px-6 md:px-8 pb-6">
                        <button
                          onClick={() => handleToggle(idx)}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primaryHover"
                        >
                          {isExpanded ? 'Show less' : 'Read full section'}
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailedContent;
