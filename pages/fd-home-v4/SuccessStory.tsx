import React, { useState, useCallback } from 'react';
import { Star, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Our basement flooded at 2 AM during a storm. Flood Doctor arrived within an hour, worked through the night, and saved our finished basement.",
    author: "Michael & Sarah R.",
    location: "McLean, Virginia",
    rating: 5,
  },
  {
    text: "Incredible service from start to finish. They handled the insurance claim entirely. The reconstruction team made it look like nothing ever happened.",
    author: "David K.",
    location: "Arlington, Virginia",
    rating: 5,
  },
  {
    text: "Very respectful of my home — wore shoe covers every time, kept me informed throughout the entire process. The drying equipment was set up within hours.",
    author: "Jennifer L.",
    location: "Alexandria, Virginia",
    rating: 5,
  },
  {
    text: "A pipe burst in our ceiling on a Sunday night. They were at our door in 45 minutes and immediately got to work. Saved our hardwood floors.",
    author: "Robert & Linda T.",
    location: "Fairfax, Virginia",
    rating: 5,
  },
];

export const SuccessStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  return (
    <section className="py-20 lg:py-24 bg-[#e8f0fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#202124] tracking-tight mb-6">
            What our customers say
          </h2>
          <a
            href="/reviews/"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#747775] bg-white text-[15px] font-medium text-[#1a73e8] hover:bg-[#f6fafe] transition-colors"
          >
            View all reviews
          </a>
        </div>

        {/* Testimonial Card — full width like Google */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[28px] overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 min-h-[420px]">
              {/* Left: Rating Summary */}
              <div className="bg-[#f8f9fa] p-12 lg:p-16 flex flex-col items-center justify-center text-center">
                <div className="text-[80px] lg:text-[96px] font-normal text-[#202124] leading-none mb-4">4.9</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                <div className="text-[15px] text-[#5f6368]">Based on 100+ Google Reviews</div>
              </div>

              {/* Right: Current Testimonial */}
              <div className="p-12 lg:p-16 flex flex-col items-center justify-center text-center">
                <p className="text-[22px] lg:text-[26px] leading-[1.4] font-medium text-[#202124] mb-8">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>
                <div className="text-[15px] font-medium text-[#202124]">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-[14px] text-[#5f6368] mt-1">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination — Google style: pill counter + single chevron */}
        <div className="flex items-center justify-center gap-3 mt-10">
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
