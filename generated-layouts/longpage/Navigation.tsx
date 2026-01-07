import React, { useEffect, useState } from 'react';
import { NavItem } from './types';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

interface SidebarProps {
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ navItems, activeSection, onNavigate }) => {
  return (
    <nav className="hidden lg:flex flex-col w-80 h-screen sticky top-0 p-6 border-r border-slate-200 bg-white/80 backdrop-blur-xl z-50">
      <div className="mb-12 pl-4 pt-4">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Flood Doctor <span className="text-primary">LLC</span></h1>
        <div className="flex items-center mt-2">
           <div className="h-1 w-8 bg-primary rounded-full mr-2"></div>
           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Water Damage Experts</p>
        </div>
      </div>

      <ul className="space-y-2 flex-1 overflow-y-auto pr-2 no-scrollbar">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold rounded-[20px] transition-all duration-300 group ${
                activeSection === item.id
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center">
                <item.icon className={`w-5 h-5 mr-3 transition-colors ${
                  activeSection === item.id ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-600'
                }`} />
                {item.label}
              </div>
              {activeSection === item.id && <ChevronRight className="w-4 h-4 text-slate-500" />}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <div className="p-6 bg-gradient-to-br from-primary to-blue-600 rounded-[28px] shadow-lg shadow-blue-200 text-white relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all" onClick={() => window.location.href = 'tel:8774970007'}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform"></div>
          
          <p className="text-sm font-bold text-blue-100 mb-1">Emergency?</p>
          <p className="text-2xl font-bold mb-4">Call 24/7</p>
          <div 
            className="flex items-center justify-center w-full px-4 py-3 bg-white text-primary text-sm font-bold rounded-xl hover:bg-blue-50 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            (877) 497-0007
          </div>
          <p className="text-[10px] text-center mt-3 text-blue-200 font-medium">60-min avg response time</p>
        </div>
      </div>
    </nav>
  );
};

export const MobileHeader: React.FC<{ onToggle: () => void; isOpen: boolean }> = ({ onToggle, isOpen }) => {
  return (
    <header className="lg:hidden fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-100 px-4 py-3 flex justify-between items-center h-16 transition-all duration-300">
      <div>
        <span className="text-xl font-extrabold text-slate-900">Flood Doctor <span className="text-primary">LLC</span></span>
      </div>
      <button 
        onClick={onToggle}
        className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-full transition-colors active:scale-90"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </header>
  );
};

export const MobileMenu: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  navItems: NavItem[];
  onNavigate: (id: string) => void; 
}> = ({ isOpen, onClose, navItems, onNavigate }) => {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl pt-20 px-6 pb-6 overflow-y-auto lg:hidden animate-fade-in">
      <ul className="space-y-3">
        {navItems.map((item, index) => (
          <li key={item.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-slide-up opacity-0 fill-mode-forwards">
            <button
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
              className="w-full flex items-center px-6 py-5 text-lg font-bold text-slate-800 rounded-[24px] bg-slate-50 active:scale-98 transition-all"
            >
              <item.icon className="w-6 h-6 mr-4 text-primary" />
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8 p-6 bg-blue-50 rounded-[32px]">
        <p className="text-center text-sm text-slate-500 mb-4">Need immediate assistance?</p>
        <a href="tel:8774970007" className="flex w-full items-center justify-center bg-primary text-white py-4 rounded-full font-bold shadow-lg">
          <Phone className="w-5 h-5 mr-2" />
          Call (877) 497-0007
        </a>
      </div>
    </div>
  );
};

export const StickyBottomCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 lg:hidden shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.1)] pb-safe-area">
      <div className="flex gap-3 max-w-md mx-auto">
        <a 
          href="tel:8774970007" 
          className="flex-1 flex items-center justify-center bg-red-600 text-white font-bold text-lg py-3.5 px-4 rounded-full shadow-lg shadow-red-200 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 mr-2 animate-pulse" />
          Call Now
        </a>
      </div>
    </div>
  );
};
