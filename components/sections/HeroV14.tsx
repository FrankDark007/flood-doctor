
import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import GoogleGuaranteedBadge from '../ui/GoogleGuaranteedBadge';
import EmergencyServiceBadge from '../ui/EmergencyServiceBadge';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  visual?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, visual }) => {
  return (
    <div className="relative bg-white overflow-hidden border-b border-border">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left: Content - Centered vertically, heavily padded */}
          <div className="flex flex-col justify-center px-6 py-16 lg:px-20 lg:py-24 z-10 bg-white">
            <div className="max-w-xl">
              {/* Eyebrow badges - M3 consistent chip styling */}
              <div className="flex items-center gap-2 mb-6">
                <EmergencyServiceBadge />
                <GoogleGuaranteedBadge />
              </div>

              {/* Heading: Google Sans (Outfit), Huge, Tight leading */}
              <h1 className="font-display text-5xl lg:text-[64px] leading-[1.1] font-medium text-text mb-6 tracking-tight">
                {title}
              </h1>
              
              {/* Subtitle: Inter, Large, Muted */}
              <p className="font-sans text-xl text-muted mb-10 leading-relaxed max-w-md">
                {subtitle}
              </p>
              
              {/* Actions - HIDDEN ON MOBILE (md:flex) to prevent clutter. */}
              <div className="hidden md:flex flex-col sm:flex-row gap-4">
                <Button to="/request/" variant="primary" className="text-lg">
                  Request Service
                </Button>
                <Button href="tel:8774970007" variant="secondary" className="text-lg group">
                  (877) 497-0007 <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Visual - White background */}
          <div className="relative bg-white flex items-center justify-center lg:h-auto min-h-[400px] overflow-hidden">
            <div className="relative z-10 w-full max-w-lg px-6 lg:px-0">
              {visual}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
