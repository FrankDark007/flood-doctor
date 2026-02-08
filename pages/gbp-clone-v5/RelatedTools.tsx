
import React from 'react';
import { RelatedService } from './types';
import { Link } from 'react-router-dom';

export interface RelatedToolsProps {
  /** Related services to display */
  services: RelatedService[];
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
}

// Service icon based on title keywords
const ServiceIcon: React.FC<{ title: string; className?: string }> = ({ title, className = 'w-8 h-8 text-[#1a73e8]' }) => {
  const titleLower = title.toLowerCase();

  if (titleLower.includes('water') || titleLower.includes('flood')) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    );
  }

  if (titleLower.includes('mold')) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    );
  }

  if (titleLower.includes('fire') || titleLower.includes('smoke')) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    );
  }

  if (titleLower.includes('sewage') || titleLower.includes('biohazard')) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  }

  if (titleLower.includes('storm') || titleLower.includes('wind')) {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    );
  }

  // Default service icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  );
};

export const RelatedTools: React.FC<RelatedToolsProps> = ({
  services,
  title = 'Related Services',
  subtitle = 'Explore more restoration services we offer to help protect and restore your property.',
}) => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-[32px] lg:text-[40px] font-medium text-[#5f6368] leading-[1.2] mb-4">
            {title}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#5f6368]">
            {subtitle}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-[#f1f3f4] flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-[#e8f0fe] flex items-center justify-center">
                  <ServiceIcon title={service.title} />
                </div>
              </div>
              <h3 className="text-[18px] font-normal text-[#202124] mb-2">
                {service.title}
              </h3>
              <p className="text-[15px] text-[#5f6368] leading-[1.6] mb-4">
                {service.description}
              </p>
              <Link
                to={service.slug}
                className="inline-flex items-center text-[#1a73e8] font-medium text-[14px] hover:underline"
              >
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedTools;
