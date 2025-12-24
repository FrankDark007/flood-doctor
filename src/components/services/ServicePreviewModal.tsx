
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceData } from '../../types';
import ServiceCardThumb from './ServiceCardThumb';
import Button from '../ui/Button';

interface ServicePreviewModalProps {
  service: ServiceData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServicePreviewModal: React.FC<ServicePreviewModalProps> = ({ service, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Handle mounting for Portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    // Lock scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    // Focus focusable element or modal
    // Small timeout to allow render transition
    const timer = setTimeout(() => {
        if (modalRef.current) {
            modalRef.current.focus();
        }
    }, 50);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen || !service) return null;

  const displayVisualKey = service.thumbVisualKey || service.heroVisualKey;

  const content = (
    <div 
        className="fixed inset-0 z-[9999] flex items-end justify-center lg:items-center pointer-events-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
    >
      <style>{`
        @keyframes modal-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes modal-slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        @keyframes modal-scale-in {
            from { opacity: 0; transform: scale(0.96); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-overlay {
            animation: modal-fade-in 0.3s ease-out forwards;
        }
        .animate-modal-mobile {
            animation: modal-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-modal-desktop {
            animation: modal-scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
            .animate-overlay, .animate-modal-mobile, .animate-modal-desktop { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-overlay"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        ref={modalRef}
        tabIndex={-1}
        className="
            relative z-10 
            bg-white 
            shadow-2xl 
            flex flex-col 
            outline-none
            
            /* Mobile: Bottom Sheet */
            w-full 
            max-h-[calc(100dvh-24px)] 
            rounded-t-[24px] 
            rounded-b-none
            animate-modal-mobile
            pt-[env(safe-area-inset-top)]
            
            /* Desktop: Centered Modal */
            lg:w-[90vw] 
            lg:max-w-[960px] 
            lg:h-auto 
            lg:max-h-[80vh] 
            lg:rounded-[28px] 
            lg:flex-row 
            lg:animate-modal-desktop
            lg:overflow-hidden
            lg:pt-0
        "
      >
        {/* Close Button (Floating top-right) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/5 hover:bg-black/10 rounded-full text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary lg:top-5 lg:right-5"
          aria-label="Close preview"
        >
          <X size={24} />
        </button>

        {/* Visual Section */}
        <div className="
            shrink-0 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100
            w-full
            lg:w-5/12 lg:h-auto lg:border-b-0 lg:border-r lg:p-10
        ">
           <div className="w-full aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200">
              <ServiceCardThumb visualKey={displayVisualKey} className="w-full h-full" />
           </div>
        </div>

        {/* Content Section (Scrollable) */}
        <div className="
            flex-1 overflow-y-auto custom-scrollbar
            p-6 pt-8 pb-[calc(env(safe-area-inset-bottom)+24px)]
            lg:p-10 lg:pb-10
        ">
           <div className="flex flex-col h-full">
               {/* Header Chips */}
               <div className="flex items-center gap-2 mb-4">
                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-primary uppercase tracking-wide">
                      {service.audience}
                   </span>
                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-500 uppercase tracking-wide">
                      {service.category.replace('_', ' ')}
                   </span>
               </div>

               <h2 id="modal-title" className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 leading-tight">
                  {service.title}
               </h2>

               <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  {service.shortDescription}
               </p>

               {service.whatWeDo && (
                 <div className="mb-8">
                   <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">What's Included</h3>
                   <ul className="space-y-3">
                     {service.whatWeDo.slice(0, 4).map((item, i) => (
                       <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                         <span className="leading-relaxed">{item.split(':')[0]}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               )}

               {/* Footer Actions */}
               <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                  <Button to="/request/" variant="primary" fullWidth className="h-12 text-base shadow-none">
                     Request Service
                  </Button>
                  <Link 
                    to={service.slug} 
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:text-primary hover:border-gray-300 transition-colors w-full sm:w-auto whitespace-nowrap"
                  >
                     View full page <ArrowRight size={16} className="ml-2" />
                  </Link>
               </div>
           </div>
        </div>
      </div>
    </div>
  );

  // Render to document.body via Portal to ensure viewport-relative positioning
  return createPortal(content, document.body);
};

export default ServicePreviewModal;
