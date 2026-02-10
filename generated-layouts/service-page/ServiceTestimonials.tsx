import React, { useState, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from './types';

interface ServiceTestimonialsProps {
  testimonials: Testimonial[];
}

const ServiceTestimonials: React.FC<ServiceTestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-[#1a73e8] mb-2">Testimonials</p>
            <h2 className="text-[28px] lg:text-[32px] font-normal text-[#202124] tracking-tight">
              What our customers say
            </h2>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm text-[#5f6368] tabular-nums">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368] hover:bg-[#f1f3f4] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368] hover:bg-[#f1f3f4] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards Row — show current + peek next on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => {
            // On mobile show only current; on md show 2; on lg show 3
            const visibleClass =
              idx === currentIndex
                ? ''
                : idx === (currentIndex + 1) % testimonials.length
                  ? 'hidden md:block'
                  : idx === (currentIndex + 2) % testimonials.length
                    ? 'hidden lg:block'
                    : 'hidden';

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-[#dadce0] p-8 flex flex-col ${visibleClass}`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < t.rating ? 'fill-[#fbbc04] text-[#fbbc04]' : 'fill-[#dadce0] text-[#dadce0]'}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[15px] leading-[24px] text-[#3c4043] mb-6 flex-1">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-[#e8eaed]">
                  <div className="text-[14px] font-medium text-[#202124]">{t.author}</div>
                  <div className="text-[13px] text-[#5f6368] mt-0.5">{t.location}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-sm text-[#5f6368] tabular-nums">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368]"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Google Reviews link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/Flood+Doctor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#1a73e8] hover:text-[#1557b0] transition-colors"
          >
            Read all reviews on Google
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
