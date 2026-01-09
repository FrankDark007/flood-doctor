import React from 'react';
import { Phone, Clock, Shield, Star, ChevronRight } from 'lucide-react';
import { Badge } from './types';

interface ServiceHeroCompactProps {
  title: string;
  subtitle: string;
  badges: Badge[];
  emergencyPhone: string;
  onCtaClick: () => void;
  /** Optional visual element to display instead of trust card */
  visual?: React.ReactNode;
}

/**
 * ServiceHeroCompact - Google-style service page hero
 *
 * Design principles:
 * - Clean white background (NOT gradient)
 * - Asymmetric layout with content left, visual element right
 * - Minimal text, clear hierarchy
 * - Card-based trust indicators
 * - Lots of whitespace
 */
const ServiceHeroCompact: React.FC<ServiceHeroCompactProps> = ({
  title,
  subtitle,
  badges,
  emergencyPhone,
  onCtaClick,
  visual
}) => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-8">
            {/* Breadcrumb-style badges */}
            <div className="flex flex-wrap gap-2">
              {badges.slice(0, 3).map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                >
                  {badge.icon === 'Clock' && <Clock className="w-3.5 h-3.5" />}
                  {badge.icon === 'Shield' && <Shield className="w-3.5 h-3.5" />}
                  {badge.icon === 'Award' && <Star className="w-3.5 h-3.5" />}
                  {badge.text}
                </span>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-normal text-slate-900 tracking-tight leading-[1.1]">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
                {subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${emergencyPhone.replace(/\D/g,'')}`}
                className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primaryHover text-white h-14 px-8 rounded-full font-semibold text-lg transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                <Phone className="w-5 h-5" />
                {emergencyPhone}
              </a>

              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 h-14 px-8 rounded-full font-semibold border border-slate-200 transition-colors"
              >
                Request Service
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>Technicians available now</span>
            </div>
          </div>

          {/* Right: Visual or Trust Card */}
          <div className="lg:pl-8">
            {visual ? (
              /* Custom Visual Slot */
              <div className="w-full h-full flex items-center justify-center">
                {visual}
              </div>
            ) : (
              /* Default Trust Card */
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-1">60</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Min Response</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-slate-900 mb-1">24/7</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Available</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-slate-900 mb-1">4.9</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-2xl">
                    <div className="text-3xl font-bold text-slate-900 mb-1">5k+</div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Jobs Done</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-center gap-6 text-slate-400">
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="w-6 h-6" />
                      <span className="text-[10px] font-medium uppercase tracking-wide">IICRC</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Star className="w-6 h-6" />
                      <span className="text-[10px] font-medium uppercase tracking-wide">A+ BBB</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Clock className="w-6 h-6" />
                      <span className="text-[10px] font-medium uppercase tracking-wide">20+ Yrs</span>
                    </div>
                  </div>
                </div>

                {/* Google Reviews snippet */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-700">4.9 on Google</span>
                  </div>
                  <p className="text-sm text-slate-500 italic">
                    "Arrived in 45 minutes and saved our hardwood floors..."
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceHeroCompact;
