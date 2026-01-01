
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Search, MapPin, Hammer, FileText, ArrowRight, X } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { LOCATIONS } from '../../data/locations';

const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Toggle with Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus input after render
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Filter Logic
  const filteredServices = SERVICES.filter(s => 
    s.title.toLowerCase().includes(query.toLowerCase()) || 
    s.shortDescription.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  const filteredLocations = LOCATIONS.filter(l => 
    l.title.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3);

  const staticPages = [
    { title: 'Contact Support', path: '/contact/', icon: FileText },
    { title: 'Emergency Request', path: '/request/', icon: FileText },
    { title: 'Client Portal Demo', path: '/portal-demo/', icon: FileText },
    { title: 'Find Crew Near Me', path: '/nearme/water-damage-restoration/', icon: MapPin },
  ].filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  const allResults = [
    ...filteredServices.map(s => ({ type: 'service', data: s })),
    ...filteredLocations.map(l => ({ type: 'location', data: l })),
    ...staticPages.map(p => ({ type: 'page', data: p }))
  ];

  const handleSelect = (index: number) => {
    const item = allResults[index];
    if (!item) return;

    if (item.type === 'service') navigate((item.data as any).slug);
    else if (item.type === 'location') {
        if ((item.data as any).url) window.location.href = (item.data as any).url;
        else navigate((item.data as any).path || '/locations/');
    }
    else if (item.type === 'page') navigate((item.data as any).path);
    
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % allResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + allResults.length) % allResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(selectedIndex);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
      
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Input */}
        <div className="flex items-center px-4 border-b border-gray-100">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            className="w-full px-4 py-4 text-lg text-gray-900 placeholder-gray-400 bg-transparent border-none focus:ring-0 focus:outline-none"
            placeholder="Search services, locations, or help..."
            value={query}
            onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
            onKeyDown={handleKeyDown}
          />
          <button onClick={() => setIsOpen(false)} className="p-1 bg-gray-100 rounded text-xs text-gray-500">ESC</button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto py-2">
          {allResults.length === 0 ? (
            <div className="px-4 py-8 text-center text-gray-500">No results found.</div>
          ) : (
            <ul className="space-y-1">
              {/* Services */}
              {filteredServices.length > 0 && (
                 <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Services</div>
              )}
              {filteredServices.map((s, i) => {
                 const globalIndex = i;
                 return (
                    <li key={s.id}>
                        <button
                            onClick={() => handleSelect(globalIndex)}
                            className={`w-full flex items-center px-4 py-3 text-left transition-colors ${selectedIndex === globalIndex ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                            <Hammer className={`w-4 h-4 mr-3 ${selectedIndex === globalIndex ? 'text-primary' : 'text-gray-400'}`} />
                            <span className="flex-1 font-medium">{s.title}</span>
                            {selectedIndex === globalIndex && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </li>
                 )
              })}

              {/* Locations */}
              {filteredLocations.length > 0 && (
                 <div className="px-4 py-2 mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Locations</div>
              )}
              {filteredLocations.map((l, i) => {
                 const globalIndex = filteredServices.length + i;
                 return (
                    <li key={l.title}>
                        <button
                            onClick={() => handleSelect(globalIndex)}
                            className={`w-full flex items-center px-4 py-3 text-left transition-colors ${selectedIndex === globalIndex ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                            <MapPin className={`w-4 h-4 mr-3 ${selectedIndex === globalIndex ? 'text-primary' : 'text-gray-400'}`} />
                            <span className="flex-1 font-medium">{l.title}</span>
                            {selectedIndex === globalIndex && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </li>
                 )
              })}

              {/* Pages */}
              {staticPages.length > 0 && (
                 <div className="px-4 py-2 mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">Pages</div>
              )}
              {staticPages.map((p, i) => {
                 const globalIndex = filteredServices.length + filteredLocations.length + i;
                 return (
                    <li key={p.title}>
                        <button
                            onClick={() => handleSelect(globalIndex)}
                            className={`w-full flex items-center px-4 py-3 text-left transition-colors ${selectedIndex === globalIndex ? 'bg-blue-50 text-primary' : 'text-gray-700 hover:bg-gray-50'}`}
                        >
                            <p.icon className={`w-4 h-4 mr-3 ${selectedIndex === globalIndex ? 'text-primary' : 'text-gray-400'}`} />
                            <span className="flex-1 font-medium">{p.title}</span>
                            {selectedIndex === globalIndex && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </li>
                 )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
           <div className="flex gap-4">
              <span><kbd className="font-sans bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">↵</kbd> to select</span>
              <span><kbd className="font-sans bg-white border border-gray-200 rounded px-1.5 py-0.5 shadow-sm">↑↓</kbd> to navigate</span>
           </div>
           <span>Flood Doctor Global Search</span>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CommandPalette;
