import React from 'react';
import { Link } from 'react-router-dom';

interface IndustryHeroProps {
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  productIcons?: React.ReactNode[];
  illustration?: React.ReactNode;
}

/**
 * Industry Hero Component
 * Based on: workspace.google.com/industries/healthcare
 *
 * Features:
 * - Two-column layout
 * - Product icon row
 * - Large title (54px)
 * - Primary and secondary CTAs
 * - Right-side illustration with product UI
 */
const IndustryHero: React.FC<IndustryHeroProps> = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  productIcons,
  illustration,
}) => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Content Side */}
          <div className="flex-1 max-w-[550px]">
            {/* Product Icons */}
            {productIcons && productIcons.length > 0 && (
              <div className="flex items-center gap-4 mb-6">
                {productIcons.map((icon, i) => (
                  <span key={i} className="w-12 h-12">{icon}</span>
                ))}
              </div>
            )}

            <h1 className="font-display text-4xl md:text-[54px] md:leading-[64px] font-bold text-text mb-6">
              {title}
            </h1>

            <p className="text-lg leading-7 text-muted mb-8">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={primaryCta.href}
                className="
                  inline-flex items-center justify-center
                  h-12 px-6
                  bg-primary hover:bg-primary-hover
                  text-white text-sm font-medium
                  rounded-full
                  transition-colors duration-200
                "
              >
                {primaryCta.text}
              </Link>

              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="
                    inline-flex items-center justify-center
                    h-12 px-6
                    bg-white hover:bg-subtle
                    text-primary text-sm font-medium
                    border border-border
                    rounded-full
                    transition-colors duration-200
                  "
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          </div>

          {/* Illustration Side */}
          <div className="flex-1 w-full">
            {illustration || (
              <div className="aspect-square max-w-[500px] mx-auto bg-subtle rounded-3xl flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryHero;
