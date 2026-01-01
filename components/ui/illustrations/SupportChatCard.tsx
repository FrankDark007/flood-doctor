import React from 'react';

const SupportChatCard: React.FC = () => {
  return (
    <div className="relative mx-auto" style={{ width: 'clamp(270px, 25vw, 350px)' }}>
      {/* Phone Frame: Aspect ratio reduced by ~5% (was 393/852, now 393/810) */}
      <div className="bg-white rounded-[3rem] shadow-2xl border-[8px] border-slate-50 overflow-hidden w-full aspect-[393/810] flex flex-col transform transition-transform hover:scale-[1.01] duration-500 ring-1 ring-black/5">
        
        <style>{`
          @keyframes message-pop {
            0% { opacity: 0; transform: translateY(10px) scale(0.95); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes typing-bounce {
            0%, 60%, 100% { transform: translateY(0); }
            30% { transform: translateY(-4px); }
          }
          .animate-message {
            animation: message-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .typing-dot {
            animation: typing-bounce 1.4s infinite ease-in-out both;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-message, .typing-dot { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}</style>

        {/* Status Bar */}
        <div className="h-12 bg-white flex justify-between items-end px-7 pb-2 select-none z-10 shrink-0">
           <div className="text-[12px] font-semibold text-gray-900">9:41</div>
           <div className="flex items-center gap-1.5 opacity-80">
               <div className="w-4 h-2.5 bg-gray-900 rounded-[1px]"></div>
               <div className="w-4 h-2.5 bg-gray-900 rounded-[1px]"></div>
               <div className="w-5 h-2.5 bg-gray-900 rounded-[2px] relative before:absolute before:-right-0.5 before:top-0.5 before:h-1.5 before:w-0.5 before:bg-gray-900"></div>
           </div>
        </div>

        {/* App Header */}
        <div className="bg-white/90 backdrop-blur border-b border-gray-100 p-4 flex items-center gap-3 z-10 sticky top-0 shadow-sm shrink-0">
           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-sm shrink-0">
             FD
           </div>
           <div>
              <div className="font-semibold text-gray-900 text-sm">Flood Doctor Support</div>
              <div className="text-[11px] text-green-600 flex items-center gap-1.5 font-medium">
                 <span className="w-2 h-2 rounded-full bg-green-500"></span>
                 Live
              </div>
           </div>
        </div>

        {/* Chat Content */}
        <div className="flex-grow bg-white relative flex flex-col px-4 pt-5 pb-5 overflow-y-auto no-scrollbar" role="log" aria-label="Conversation with support">
            
            {/* Date Divider */}
            <div className="text-center text-[10px] text-gray-400 font-medium mb-5">
                Today 9:30 AM
            </div>

            {/* Message 1: User (Blue) - Outgoing */}
            <div className="ml-auto max-w-[70%] mb-4 animate-message opacity-0 flex flex-col items-end" style={{ animationDelay: '0.2s' }}>
                <div 
                    className="bg-[#1a73e8] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-[15px] leading-snug shadow-sm break-words whitespace-normal" 
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                    When will you arrive?
                </div>
            </div>

            {/* Message 2: Agent (Gray) - Incoming */}
            <div className="self-start max-w-[75%] mb-2 animate-message opacity-0 flex flex-col items-start" style={{ animationDelay: '1.2s' }}>
                <div 
                    className="bg-[#e5e5ea] text-black px-4 py-3 rounded-2xl rounded-tl-sm text-[15px] leading-snug break-words whitespace-normal"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                    We’re dispatching now. ETA about 40 minutes.
                </div>
            </div>

            {/* Message 3: Agent (Gray) - Incoming */}
            <div className="self-start max-w-[75%] mb-4 animate-message opacity-0 flex flex-col items-start" style={{ animationDelay: '2.5s' }}>
                <div 
                    className="bg-[#e5e5ea] text-black px-4 py-3 rounded-2xl rounded-tl-sm text-[15px] leading-snug break-words whitespace-normal"
                    style={{ overflowWrap: 'anywhere', wordBreak: 'break-word' }}
                >
                    Next: extraction, drying setup, and documentation.
                </div>
            </div>

            {/* Typing Indicator */}
            <div className="self-start mt-auto animate-message opacity-0" style={{ animationDelay: '3.8s' }}>
                <div className="bg-[#e5e5ea] px-4 py-3 rounded-2xl rounded-tl-sm w-fit flex gap-1 items-center h-[38px]">
                    <div className="w-1.5 h-1.5 bg-[#8e8e93] rounded-full typing-dot" style={{ animationDelay: '0s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[#8e8e93] rounded-full typing-dot" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 bg-[#8e8e93] rounded-full typing-dot" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>

        </div>

        {/* Input Bar */}
        <div className="bg-white p-3 pt-3 pb-6 border-t border-gray-100 z-10 shrink-0">
           <div className="h-9 rounded-full bg-white border border-gray-300 flex items-center justify-between px-1.5 pl-4">
              <span className="text-gray-300 text-sm cursor-text select-none"></span>
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-sm">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                 </svg>
              </div>
           </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-900/20 rounded-full z-20"></div>

      </div>
    </div>
  );
};

export default SupportChatCard;