
import React from 'react';
import { GettingStartedContent, ProcessStep } from './types';

// Step icon component
const StepIcon: React.FC<{ icon?: ProcessStep['icon']; number: number }> = ({ icon, number }) => {
  if (!icon) {
    return <span className="text-[32px] font-medium text-[#1a73e8]">{number}</span>;
  }

  const iconClass = "w-8 h-8 text-[#1a73e8]";

  switch (icon) {
    case 'phone':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      );
    case 'tool':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      );
    case 'home':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case 'check':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return <span className="text-[32px] font-medium text-[#1a73e8]">{number}</span>;
  }
};

export interface GettingStartedProps {
  content: GettingStartedContent;
}

export const GettingStarted: React.FC<GettingStartedProps> = ({ content }) => {
  return (
    <section className="bg-[#f8f9fa]">
      {/* Header Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[32px] lg:text-[40px] font-medium text-[#5f6368] leading-[1.2] mb-4">
              {content.title}
            </h2>
            {content.subtitle && (
              <p className="text-[16px] lg:text-[18px] text-[#5f6368] mb-8">
                {content.subtitle}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${content.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1a73e8] text-white font-medium rounded-full text-[14px] hover:bg-[#1557b0] transition-colors shadow-lg shadow-[#1a73e8]/25"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {content.phone}
              </a>
              <a
                href={content.ctaHref}
                className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#1a73e8] text-[#1a73e8] font-medium rounded-full text-[14px] hover:bg-[#e8f0fe] transition-colors"
              >
                {content.ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-16 lg:py-20">
        <div className="max-w-[1456px] mx-auto px-7 md:px-10 lg:px-[72px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {content.steps.map((step, i) => (
              <div key={i} className="text-center">
                {/* Step icon */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-[#e8f0fe] flex items-center justify-center">
                  <StepIcon icon={step.icon} number={step.number} />
                </div>
                <h3 className="text-[20px] font-normal text-[#202124] mb-3">{step.title}</h3>
                <p className="text-[16px] text-[#5f6368] leading-[1.6]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
