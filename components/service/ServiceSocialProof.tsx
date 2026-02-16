import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const TESTIMONIALS = [
  {
    quote: "They arrived within 45 minutes of our call. The team was professional, thorough, and handled everything with our insurance company directly.",
    author: "Sarah M.",
    location: "Arlington, VA",
    source: "Google" as const,
  },
  {
    quote: "Our basement flooded at 2 AM. Flood Doctor had a crew on-site before sunrise. They saved our hardwood floors and documented everything for our claim.",
    author: "James R.",
    location: "McLean, VA",
    source: "Verified" as const,
  },
  {
    quote: "From initial inspection to final walkthrough, the communication was outstanding. They explained every step and our insurance covered the full restoration.",
    author: "Patricia L.",
    location: "Fairfax, VA",
    source: "Google" as const,
  },
];

const ServiceSocialProof: React.FC = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
        Verified Client Results
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Real outcomes from Northern Virginia homeowners we've helped.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Source pill */}
            <span className="inline-flex items-center self-start text-[11px] font-semibold uppercase tracking-wide text-gray-500 bg-gray-100 rounded-full px-2.5 py-0.5 mb-4">
              {t.source}
            </span>

            {/* Quote */}
            <blockquote className="text-[15px] leading-relaxed text-gray-700 flex-1">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="text-sm font-semibold text-gray-900">{t.author}</div>
              <div className="text-xs text-gray-500">{t.location}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          to="/reviews/"
          className="text-sm font-medium text-[#1a73e8] hover:underline"
        >
          Read more reviews →
        </Link>
      </div>
    </div>
  );
};

export default ServiceSocialProof;
