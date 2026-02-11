import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from './types';

// Service-specific images for testimonial cards
const TESTIMONIAL_IMAGES = [
  '/images/testimonials/water-damage-1.jpg',
  '/images/testimonials/water-damage-2.jpg',
  '/images/testimonials/water-damage-3.jpg',
  '/images/testimonials/water-damage-4.jpg',
];

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
  const currentImage = TESTIMONIAL_IMAGES[currentIndex % TESTIMONIAL_IMAGES.length];

  return (
    <section className="py-20 lg:py-24 bg-[#e8f0fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — centered, bold, Google style */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] tracking-tight">
            What success looks like
          </h2>
        </div>

        {/* Testimonial Card — quote left, image right */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[28px] overflow-hidden shadow-sm min-h-[420px]">
            <div className="grid md:grid-cols-2 h-full">
              {/* Left: Quote */}
              <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center order-2 md:order-1">
                <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#3c4043] mb-8 max-w-md">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Author */}
                <div className="text-[14px] text-[#5f6368]">
                  {current.author}
                </div>
                <div className="text-[14px] text-[#5f6368] mt-0.5">
                  {current.location}
                </div>
              </div>

              {/* Right: Image — rounded on outer card edges only */}
              <div className="relative min-h-[280px] md:min-h-full order-1 md:order-2">
                <img
                  src={currentImage}
                  alt={current.author}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pagination — Google style: plain left chevron, pill counter, blue-outlined right chevron */}
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
            className="w-10 h-10 rounded-full border-2 border-[#1a73e8] flex items-center justify-center text-[#1a73e8] hover:bg-[#e8f0fe] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
