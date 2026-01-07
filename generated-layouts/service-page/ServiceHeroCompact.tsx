import React from 'react';
import { Phone, Clock, ShieldCheck, Award } from 'lucide-react';
import { Badge } from './types';

interface ServiceHeroCompactProps {
  title: string;
  subtitle: string;
  badges: Badge[];
  emergencyPhone: string;
  onCtaClick: () => void;
}

const iconMap: Record<string, React.FC<any>> = {
  Clock,
  ShieldCheck,
  Award
};

const ServiceHeroCompact: React.FC<ServiceHeroCompactProps> = ({
  title,
  subtitle,
  badges,
  emergencyPhone,
  onCtaClick
}) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-blue-500 text-white pt-12 pb-16 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 opacity-10 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {badges.map((badge, index) => {
              const Icon = iconMap[badge.icon] || Award;
              return (
                <div key={index} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 text-xs font-semibold tracking-wide uppercase">
                  <Icon size={14} className="text-blue-100" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </div>

          {/* Headline & Subhead */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
            <a 
              href={`tel:${emergencyPhone.replace(/\D/g,'')}`}
              className="group flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="bg-white/20 p-1.5 rounded-full group-hover:animate-pulse">
                <Phone size={20} fill="currentColor" />
              </div>
              <span>Emergency Call: {emergencyPhone}</span>
            </a>
            
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-white bg-white/10 border border-white/30 hover:bg-white/20 backdrop-blur-sm transition-colors"
            >
              Get Online Quote
            </button>
          </div>

          <p className="text-sm text-blue-200 mt-4 opacity-80">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            Technicians available in your area now
          </p>

        </div>
      </div>
    </section>
  );
};

export default ServiceHeroCompact;