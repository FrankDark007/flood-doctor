import React, { useState, useCallback } from 'react';
import { Star, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Our basement flooded at 2 AM during a storm. Flood Doctor arrived within an hour, worked through the night, and saved our finished basement.",
    author: "Michael & Sarah R.",
    location: "McLean, Virginia",
    rating: 5,
    image: "/images/testimonials/customer-1.jpg",
    stat: "1 hr",
    statLabel: "Response time",
  },
  {
    text: "Incredible service from start to finish. They handled the insurance claim entirely. The reconstruction team made it look like nothing ever happened.",
    author: "David K.",
    location: "Arlington, Virginia",
    rating: 5,
    image: "/images/testimonials/customer-2.jpg",
    stat: "$0",
    statLabel: "Out of pocket",
  },
  {
    text: "Very respectful of my home — wore shoe covers every time, kept me informed throughout the entire process. The drying equipment was set up within hours.",
    author: "Jennifer L.",
    location: "Alexandria, Virginia",
    rating: 5,
    image: "/images/testimonials/customer-3.jpg",
    stat: "3 days",
    statLabel: "Fully restored",
  },
  {
    text: "A pipe burst in our ceiling on a Sunday night. They were at our door in 45 minutes and immediately got to work. Saved our hardwood floors.",
    author: "Robert & Linda T.",
    location: "Fairfax, Virginia",
    rating: 5,
    image: "/images/testimonials/customer-4.jpg",
    stat: "45 min",
    statLabel: "Sunday response",
  },
];

export const SuccessStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            What our customers say
          </h2>
          <a
            href="/reviews/"
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#747775] bg-white text-[15px] font-medium text-[#1a73e8] hover:bg-[#f6fafe] transition-colors"
          >
            View all reviews
          </a>
        </div>

        {/* Testimonial Card — Google style with photo left, quote right */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[28px] overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 min-h-[460px]">
              {/* Left: Customer Photo */}
              <div className="relative bg-[#f8f9fa] overflow-hidden">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                  loading="lazy"
                />
                {/* Stat badge overlay — bottom-left like Google's "23x ROI" */}
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-lg">
                  <div className="text-[28px] font-bold text-[#1a73e8] leading-none">{current.stat}</div>
                  <div className="text-[12px] text-[#5f6368] mt-1 font-medium">{current.statLabel}</div>
                </div>
              </div>

              {/* Right: Testimonial Content */}
              <div className="p-10 lg:p-14 flex flex-col items-center justify-center text-center">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                  <span className="text-[13px] text-[#5f6368]">5.0</span>
                </div>

                {/* Quote */}
                <p className="text-[22px] lg:text-[26px] leading-[1.35] font-normal text-[#202124] mb-8">
                  &ldquo;{current.text}&rdquo;
                </p>

                {/* Author */}
                <div className="text-[15px] font-medium text-[#202124]">
                  {current.author}
                </div>
                <div className="text-[14px] text-[#5f6368] mt-1">
                  {current.location}
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
