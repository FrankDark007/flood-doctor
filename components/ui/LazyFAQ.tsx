import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface LazyFAQProps {
  data: FAQItem[];
  title?: string;
  className?: string;
  /** Number of items to show initially before lazy loading */
  initialCount?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
}

/**
 * LazyFAQ - FAQ section with Intersection Observer for lazy loading
 *
 * - Shows initialCount items immediately
 * - Loads remaining items when user scrolls near the section
 * - Uses Intersection Observer for efficient scroll detection
 * - Animates accordion open/close with CSS transitions
 */
const LazyFAQ: React.FC<LazyFAQProps> = ({
  data,
  title = "Frequently Asked Questions",
  className = "",
  initialCount = 3,
  rootMargin = "200px",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isFullyLoaded, setIsFullyLoaded] = useState(data.length <= initialCount);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading remaining FAQs
  useEffect(() => {
    if (isFullyLoaded || data.length <= initialCount) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsFullyLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [isFullyLoaded, initialCount, rootMargin, data.length]);

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  }, []);

  // Determine which items to show
  const visibleItems = isFullyLoaded ? data : data.slice(0, initialCount);
  const hasMore = !isFullyLoaded && data.length > initialCount;

  return (
    <div className={className}>
      {title && (
        <h2 className="font-display text-2xl md:text-3xl font-medium text-text mb-8 pb-4 border-b-4 border-[#1a73e8]">
          {title}
        </h2>
      )}

      <div className="space-y-4">
        {visibleItems.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-[500px]' : 'max-h-0'
              }`}
            >
              <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Intersection observer trigger for lazy loading */}
      {hasMore && (
        <div ref={loadMoreRef} className="py-4 text-center">
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
            Loading more FAQs...
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyFAQ;

// ============================================================================
// Lazy Section wrapper for any content
// ============================================================================

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  className?: string;
}

/**
 * LazySection - Wrapper for lazy loading any content with Intersection Observer
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = <div className="h-48 bg-gray-100 rounded-xl animate-pulse" />,
  rootMargin = "300px",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
};
