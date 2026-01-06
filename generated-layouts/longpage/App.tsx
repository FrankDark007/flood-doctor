import React, { useState, useEffect } from 'react';
import { Sidebar, MobileHeader, MobileMenu, StickyBottomCTA } from './components/Navigation';
import { 
  Hero, Introduction, EmergencyServices, RestorationServices, 
  WhyChooseUs, Process, CommonCauses, InfoSections, 
  Testimonials, Footer 
} from './components/Sections';
import { NavItem } from './types';
import { 
  Home, AlertTriangle, Hammer, ShieldCheck, 
  ListOrdered, MapPin, HelpCircle, MessageSquare 
} from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'emergency', label: 'Emergency Services', icon: AlertTriangle },
  { id: 'services', label: 'Restoration', icon: Hammer },
  { id: 'why-us', label: 'Why Choose Us', icon: ShieldCheck },
  { id: 'process', label: 'Our Process', icon: ListOrdered },
  { id: 'causes', label: 'Common Causes', icon: AlertTriangle },
  { id: 'faq', label: 'Service Areas & FAQ', icon: MapPin },
  { id: 'testimonials', label: 'Reviews', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: HelpCircle },
];

function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top
        threshold: 0
      }
    );

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-surface min-h-screen flex flex-col lg:flex-row font-sans">
      {/* Mobile Header */}
      <MobileHeader 
        isOpen={isMobileMenuOpen} 
        onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
      />

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        onNavigate={handleNavigate}
      />

      {/* Desktop Sidebar */}
      <Sidebar 
        navItems={NAV_ITEMS} 
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[100vw] lg:max-w-none">
        <Hero />
        <div id="assessment">
          <Introduction />
        </div>
        <EmergencyServices />
        <RestorationServices />
        <WhyChooseUs />
        <Process />
        <CommonCauses />
        <InfoSections />
        <Testimonials />
        <Footer />
        <div className="h-20 lg:h-0" /> {/* Spacer for mobile bottom bar */}
      </main>

      {/* Mobile Sticky CTA */}
      <StickyBottomCTA />
    </div>
  );
}

export default App;
