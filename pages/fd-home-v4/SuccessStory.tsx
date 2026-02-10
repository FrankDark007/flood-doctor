import React, { useState, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Our basement flooded at 2 AM during a storm. Flood Doctor arrived within an hour, worked through the night, and saved our finished basement. Their team was professional, thorough, and handled our insurance claim seamlessly.",
    author: "Michael & Sarah R.",
    location: "McLean, Virginia",
    rating: 5,
  },
  {
    text: "Incredible service from start to finish. They handled the insurance claim entirely. The reconstruction team made it look like nothing ever happened. Highly recommended for anyone dealing with water damage.",
    author: "David K.",
    location: "Arlington, Virginia",
    rating: 5,
  },
  {
    text: "Very respectful of my home — wore shoe covers every time, kept me informed throughout the entire process. The drying equipment was set up within hours and they monitored progress daily.",
    author: "Jennifer L.",
    location: "Alexandria, Virginia",
    rating: 5,
  },
  {
    text: "A pipe burst in our ceiling on a Sunday night. They were at our door in 45 minutes and immediately got to work. Saved our hardwood floors and handled everything with our insurance company.",
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

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  return (
    <section className="py-20 lg:py-24 bg-[#e8f0fe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] lg:text-[36px] font-normal text-[#202124] tracking-tight mb-5">
            What our customers say
          </h2>
          <a
            href="/reviews/"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#dadce0] bg-white text-[14px] font-medium text-[#1a73e8] hover:bg-[#f6fafe] transition-colors"
          >
            View all reviews
          </a>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#dadce0] overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left: Rating Summary */}
              <div className="bg-[#f8f9fa] p-10 lg:p-12 flex flex-col items-center justify-center text-center">
                <div className="text-[64px] font-normal text-[#202124] leading-none mb-3">4.9</div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                <div className="text-[14px] text-[#5f6368]">Based on 100+ Google Reviews</div>
              </div>

              {/* Right: Current Testimonial */}
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < testimonials[currentIndex].rating ? 'fill-[#fbbc04] text-[#fbbc04]' : 'fill-[#dadce0] text-[#dadce0]'}
                    />
                  ))}
                </div>
                <p className="text-[17px] lg:text-[18px] leading-[28px] text-[#202124] mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <div className="text-[14px] font-medium text-[#202124]">{testimonials[currentIndex].author}</div>
                  <div className="text-[13px] text-[#5f6368] mt-0.5">{testimonials[currentIndex].location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368] hover:bg-[#f1f3f4] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="text-[14px] text-[#5f6368] tabular-nums min-w-[40px] text-center">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-[#dadce0] bg-white flex items-center justify-center text-[#5f6368] hover:bg-[#f1f3f4] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
