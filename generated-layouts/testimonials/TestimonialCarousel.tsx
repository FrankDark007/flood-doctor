import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewProps } from './types';
import StarRating from './StarRating';

const TestimonialCarousel: React.FC<ReviewProps> = ({ reviews, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div 
      className={`relative w-full max-w-4xl mx-auto px-4 py-12 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* JSON-LD Schema for the current review */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Flood Doctor"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": reviews[currentIndex].rating
          },
          "author": {
            "@type": "Person",
            "name": reviews[currentIndex].author
          },
          "reviewBody": reviews[currentIndex].text
        })}
      </script>

      <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden border border-slate-100">
        <div className="absolute top-6 left-8 text-brand-100 opacity-50">
          <Quote size={80} fill="currentColor" className="transform -scale-x-100" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center transition-opacity duration-500 ease-in-out">
          <StarRating rating={reviews[currentIndex].rating} size={24} className="mb-6" />
          
          <blockquote className="text-xl md:text-2xl font-medium text-slate-800 mb-8 leading-relaxed">
            "{reviews[currentIndex].text}"
          </blockquote>

          <div className="flex flex-col items-center">
            <cite className="not-italic font-bold text-slate-900 text-lg">
              {reviews[currentIndex].author}
            </cite>
            <span className="text-slate-500 text-sm mt-1">
              {reviews[currentIndex].location}
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-slate-600 hover:text-brand-600 transition-all border border-slate-100"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-md text-slate-600 hover:text-brand-600 transition-all border border-slate-100"
          aria-label="Next review"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {reviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-brand-600" : "w-2 bg-slate-300 hover:bg-brand-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;