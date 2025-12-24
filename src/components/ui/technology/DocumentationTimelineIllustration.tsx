import React from 'react';
import { Camera, FileText, CheckCircle2 } from 'lucide-react';

const DocumentationTimelineIllustration: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto py-8" role="img" aria-label="Timeline showing documentation steps: Pre-Loss, During Restoration, and Post-Verification">
      <style>{`
        @keyframes line-fill {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes pop-in {
          0% { transform: scale(0); opacity: 0; }
          80% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-line {
          animation: line-fill 3s ease-out forwards;
        }
        .animate-pop {
          animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-line { width: 100%; animation: none; }
          .animate-pop { animation: none; transform: scale(1); opacity: 1; }
        }
      `}</style>
      
      <div className="relative">
         {/* Base Line */}
         <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
         
         {/* Active Line */}
         <div className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full animate-line"></div>
         
         <div className="relative flex justify-between">
             
             {/* Step 1: Pre-Loss */}
             <div className="flex flex-col items-center animate-pop" style={{ animationDelay: '0s' }}>
                 <div className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary z-10 shadow-sm">
                     <Camera size={20} />
                 </div>
                 <div className="mt-4 text-center">
                     <div className="text-sm font-bold text-gray-900">Pre-Loss</div>
                     <div className="text-xs text-gray-500 mt-1">Photo inventory<br/>Initial readings</div>
                 </div>
             </div>

             {/* Step 2: During */}
             <div className="flex flex-col items-center animate-pop" style={{ animationDelay: '1s' }}>
                 <div className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary z-10 shadow-sm">
                     <FileText size={20} />
                 </div>
                 <div className="mt-4 text-center">
                     <div className="text-sm font-bold text-gray-900">During</div>
                     <div className="text-xs text-gray-500 mt-1">Daily logs<br/>Moisture maps</div>
                 </div>
             </div>

             {/* Step 3: Post */}
             <div className="flex flex-col items-center animate-pop" style={{ animationDelay: '2s' }}>
                 <div className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center text-primary z-10 shadow-sm">
                     <CheckCircle2 size={20} />
                 </div>
                 <div className="mt-4 text-center">
                     <div className="text-sm font-bold text-gray-900">Post-Loss</div>
                     <div className="text-xs text-gray-500 mt-1">Final verification<br/>Certificate of Drying</div>
                 </div>
             </div>

         </div>
      </div>
    </div>
  );
};

export default DocumentationTimelineIllustration;