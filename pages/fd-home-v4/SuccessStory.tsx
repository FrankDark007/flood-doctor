import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    headline: "Flood Doctor saved our finished basement with a 1-hour emergency response",
    author: "Michael & Sarah R.",
    location: "McLean, Virginia",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    stat: "1 hr",
    statLabel: "Response",
  },
  {
    headline: "Full insurance claim handled — zero out-of-pocket cost for complete restoration",
    author: "David K.",
    location: "Arlington, Virginia",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    stat: "$0",
    statLabel: "Out of pocket",
  },
  {
    headline: "Home fully restored in 3 days with professional drying and reconstruction",
    author: "Jennifer L.",
    location: "Alexandria, Virginia",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    stat: "3 days",
    statLabel: "Fully restored",
  },
  {
    headline: "Sunday night pipe burst — 45-minute response saved our hardwood floors",
    author: "Robert & Linda T.",
    location: "Fairfax, Virginia",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    stat: "45 min",
    statLabel: "Response",
  },
];

export const SuccessStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-24 bg-[#e8f0fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] tracking-tight mb-6">
            What success looks like
          </h2>
          <a
            href="/reviews/"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#747775] bg-white text-[15px] font-medium text-[#1a73e8] hover:bg-[#f6fafe] transition-colors"
          >
            View all success stories
          </a>
        </div>

        {/* Testimonial Card — Google style: photo left, headline + CTA right */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[28px] overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 min-h-[460px]">
              {/* Left: Photo with stat badge — right corners of image rounded (inner edge) */}
              <div className="relative bg-[#f8f9fa] overflow-hidden md:rounded-r-[28px]">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                  loading="lazy"
                />
                {/* Stat badge — bottom-left like Google's ROAS badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-lg">
                  <div className="text-[32px] font-bold text-[#1a73e8] leading-none">{current.stat}</div>
                  <div className="text-[12px] text-[#5f6368] mt-1 font-medium uppercase tracking-wide">{current.statLabel}</div>
                </div>
              </div>

              {/* Right: Label + Headline + CTA */}
              <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center">
                {/* Author label — like Google's green brand name */}
                <div className="text-[15px] font-semibold text-[#1a73e8] mb-5">
                  {current.author}
                </div>

                {/* Headline */}
                <h3 className="text-[22px] lg:text-[26px] leading-[1.35] font-normal text-[#202124] mb-8 max-w-md">
                  {current.headline}
                </h3>

                {/* CTA — blue circle arrow + link text */}
                <a href="/reviews/" className="group flex flex-col items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-[#1a73e8] flex items-center justify-center group-hover:bg-[#1557b0] transition-colors">
                    <ArrowRight size={20} className="text-white" />
                  </span>
                  <span className="text-[14px] font-medium text-[#1a73e8] group-hover:underline">
                    Read their story
                  </span>
                </a>

                {/* Location */}
                <div className="text-[13px] text-[#5f6368] mt-6">
                  {current.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination — Google style: left chevron + pill counter */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            onClick={goPrev}
            className="text-[#5f6368] hover:text-[#202124] transition-colors p-1"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-[#dadce0] bg-white text-[14px] text-[#3c4043] tabular-nums">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={goNext}
            className="text-[#5f6368] hover:text-[#202124] transition-colors p-1"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
