import React from 'react';
import { Star, Quote } from 'lucide-react';

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  cityName: string;
}

/**
 * TestimonialSection - SEO-optimized testimonials with Review schema markup
 * Uses H2 for section heading, proper schema.org Review markup for rich snippets
 */
const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
  cityName
}) => {
  if (!testimonials || testimonials.length === 0) return null;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      className="py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header - H2 for SEO */}
        <div className="text-center mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What {cityName} Homeowners Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from {cityName} property owners we've helped.
          </p>
        </div>

        {/* Testimonials Stack */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 relative"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Large Quote Mark */}
              <Quote
                size={48}
                className="absolute top-6 right-6 text-primary/10"
                aria-hidden="true"
              />

              {/* Review Rating (Schema) */}
              <div
                className="mb-4"
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                {renderStars(testimonial.rating)}
                <meta itemProp="ratingValue" content={String(testimonial.rating)} />
                <meta itemProp="bestRating" content="5" />
              </div>

              {/* Quote Text */}
              <blockquote
                className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10"
                itemProp="reviewBody"
              >
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <cite
                    className="not-italic font-semibold text-gray-900"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{testimonial.author}</span>
                  </cite>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </footer>

              {/* Hidden schema data */}
              <meta itemProp="itemReviewed" content="Flood Doctor Water Damage Restoration" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
