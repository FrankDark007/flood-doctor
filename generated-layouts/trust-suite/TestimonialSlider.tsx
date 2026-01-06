import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PRIMARY_COLOR } from '../constants';

const REVIEWS = [
  {
    id: 1,
    text: "I woke up to a flooded basement at 3 AM. They were here within 45 minutes. Absolutely incredible service and they handled the insurance claim directly.",
    author: "Sarah Jenkins",
    location: "Arlington, VA",
    rating: 5,
    tag: "Water Damage"
  },
  {
    id: 2,
    text: "The 20+ years of experience really shows. They spotted moisture behind the drywall that two other inspectors missed. Saved us thousands in potential mold repairs.",
    author: "Mike Ross",
    location: "Richmond, VA",
    rating: 5,
    tag: "Mold Remediation"
  },
  {
    id: 3,
    text: "Professional, courteous, and efficient. The team arrived in uniform, verified their IICRC certification immediately, and got straight to work.",
    author: "Emily Chen",
    location: "Fairfax, VA",
    rating: 5,
    tag: "Emergency Service"
  }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 300);
  };

  const review = REVIEWS[currentIndex];

  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 relative overflow-hidden">
          
          {/* Decorative Quote Mark */}
          <div className="absolute top-6 left-8 opacity-10">
            <Quote size={80} fill={PRIMARY_COLOR} color={PRIMARY_COLOR} />
          </div>

          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            {/* Rating Stars */}
            <div className="flex justify-center space-x-1 mb-6 relative z-10">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={24} className="text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-xl md:text-2xl text-center font-medium text-slate-800 leading-relaxed mb-8 relative z-10">
              "{review.text}"
            </blockquote>

            {/* Author Info */}
            <div className="text-center">
              <div className="font-bold text-slate-900 text-lg">{review.author}</div>
              <div className="text-slate-500 text-sm mb-2">{review.location}</div>
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wide">
                {review.tag}
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-all hover:scale-110 focus:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 p-2 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-200 shadow-sm transition-all hover:scale-110 focus:outline-none"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx === currentIndex) return;
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;