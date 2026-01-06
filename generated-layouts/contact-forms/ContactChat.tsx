import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';

interface Message {
  id: number;
  type: 'bot' | 'user';
  text: string;
  isOptions?: boolean;
  options?: string[];
  inputType?: 'text' | 'phone' | 'email';
}

const ContactChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, type: 'bot', text: 'Hi there! I am the Flood Doctor assistant.' },
    { id: 2, type: 'bot', text: 'What kind of emergency are you experiencing?', isOptions: true, options: SERVICES }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [step, setStep] = useState(0); // 0: Service, 1: Address, 2: Name, 3: Phone, 4: Done
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addBotMessage = (text: string, delay = 800, nextOptions?: string[]) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        type: 'bot', 
        text, 
        isOptions: !!nextOptions, 
        options: nextOptions 
      }]);
    }, delay);
  };

  const handleUserResponse = (text: string) => {
    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text }]);
    setInputValue('');

    // Logic flow
    if (step === 0) {
      setStep(1);
      addBotMessage("Got it. Where is the property located?");
    } else if (step === 1) {
      setStep(2);
      addBotMessage("Okay. Can I get your full name?");
    } else if (step === 2) {
      setStep(3);
      addBotMessage("Thanks. Finally, what is the best phone number to reach you?");
    } else if (step === 3) {
      setStep(4);
      addBotMessage("Perfect. An agent has been notified and will call you at that number shortly.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    handleUserResponse(inputValue);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl border border-indigo-100 overflow-hidden h-[600px] flex flex-col font-sans relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 p-5 flex items-center space-x-4 shadow-lg z-20 relative">
        <div className="relative">
           <div className="bg-white/20 backdrop-blur-md p-2.5 rounded-2xl ring-1 ring-white/30">
             <Bot className="text-white w-7 h-7" />
           </div>
           <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-indigo-600"></span>
           </span>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg tracking-tight">Flood Doctor AI</h3>
          <div className="flex items-center space-x-1.5 opacity-90">
             <Sparkles className="w-3 h-3 text-yellow-300" />
             <span className="text-indigo-100 text-xs font-medium">Instant Response</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div className={`flex max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-3`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.type === 'user' ? 'bg-indigo-100' : 'bg-white border border-gray-100'}`}>
                    {msg.type === 'user' ? <User className="w-4 h-4 text-indigo-600" /> : <Bot className="w-4 h-4 text-indigo-500" />}
                </div>
                
                {/* Bubble */}
                <div className={`px-5 py-3.5 text-[15px] leading-relaxed shadow-sm ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl rounded-tr-sm' 
                    : 'bg-white border border-gray-100 text-gray-700 rounded-2xl rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
              
              {/* Option Chips */}
              {msg.isOptions && (
                <div className="w-full flex flex-wrap gap-2 mt-3 pl-11">
                  {msg.options?.map(opt => (
                    <button 
                      key={opt}
                      disabled={step > 0} 
                      onClick={() => handleUserResponse(opt)}
                      className="bg-white border border-indigo-100 text-indigo-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-50 hover:border-indigo-200 hover:shadow-sm hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-in fade-in">
              <div className="flex items-end gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <Bot className="w-4 h-4 text-indigo-500" />
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center space-x-1.5 h-12">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                  </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-indigo-50 z-20">
        <form onSubmit={handleSubmit} className="flex gap-3 relative">
           <input 
             type="text" 
             className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-3.5 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none placeholder:text-gray-400 text-gray-700"
             placeholder={step === 4 ? "Chat session ended" : "Type your reply..."}
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             disabled={step === 4 || (step === 0)}
           />
           <button 
             type="submit" 
             disabled={!inputValue.trim() || step === 4}
             className="bg-indigo-600 text-white p-3.5 rounded-2xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95 shadow-md shadow-indigo-200"
           >
             <Send className="w-5 h-5" />
           </button>
        </form>
      </div>
    </div>
  );
};

export default ContactChat;