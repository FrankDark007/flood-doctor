import React from 'react';

interface StatementSectionProps {
  text: string;
  illustration?: React.ReactNode;
}

/**
 * Statement Section Component
 * Based on: workspace.google.com/industries/healthcare
 *
 * Features:
 * - Centered illustration (max 400px)
 * - Large centered statement text (32px)
 * - Max width 1000px for text
 */
const StatementSection: React.FC<StatementSectionProps> = ({
  text,
  illustration,
}) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Illustration */}
        {illustration && (
          <div className="max-w-[400px] mx-auto mb-8">
            {illustration}
          </div>
        )}

        {/* Statement Text */}
        <p className="font-display text-2xl md:text-[32px] md:leading-[40px] font-medium text-text max-w-[1000px] mx-auto">
          {text}
        </p>
      </div>
    </section>
  );
};

export default StatementSection;
