
import React from 'react';

export const InsightsSection: React.FC = () => {
  return (
    <section className="bg-white py-[64px] lg:py-[96px] overflow-hidden">
      <div className="mx-[28px] md:mx-[40px] lg:mx-[72px] xl:mx-auto max-w-[1456px]">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[28px] md:gap-x-[40px] lg:gap-x-[48px] xl:gap-x-[64px]">
          
          {/* Spacer Column 1 */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Visual Content (Left Side) - Aligned to match text layout above */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5 self-center mb-[48px] lg:mb-0">
            <div className="bg-[#d2e3fc] rounded-[48px] p-8 lg:p-12 xl:p-16 flex items-center justify-center w-full aspect-square lg:aspect-auto min-h-[400px] lg:min-h-[520px]">
               <div className="bg-white rounded-[32px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] w-full max-w-[360px] p-8 relative overflow-hidden flex flex-col">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                     <div className="text-center p-4 bg-[#e8f0fe] rounded-2xl">
                        <div className="text-[36px] font-bold text-[#1a73e8] leading-tight">60</div>
                        <div className="text-[11px] text-[#5f6368] font-medium">Minute Response</div>
                     </div>
                     <div className="text-center p-4 bg-[#e6f4ea] rounded-2xl">
                        <div className="text-[36px] font-bold text-[#188038] leading-tight">24/7</div>
                        <div className="text-[11px] text-[#5f6368] font-medium">Emergency Service</div>
                     </div>
                  </div>

                  {/* Main Stat */}
                  <div className="mb-6 text-center">
                     <div className="text-[56px] lg:text-[64px] font-normal text-[#202124] leading-tight mb-1">15+</div>
                     <div className="text-[13px] text-[#5f6368] font-normal">Years Serving Northern Virginia</div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="flex justify-around pt-6 border-t border-gray-100">
                     <div className="text-center">
                        <div className="text-[24px] font-bold text-[#202124]">5,000+</div>
                        <div className="text-[10px] text-[#5f6368]">Properties Restored</div>
                     </div>
                     <div className="text-center">
                        <div className="text-[24px] font-bold text-[#202124]">4.9★</div>
                        <div className="text-[10px] text-[#5f6368]">Google Rating</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Spacer between Visual and Text */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Text Content (Right Side) */}
          <div className="col-span-4 md:col-span-8 lg:col-span-4 self-center">
            <h2 className="text-[#202124] text-[48px] font-medium leading-[1.16667] tracking-[-.5px] mb-6">
              Northern Virginia's Trusted Restoration Experts
            </h2>
            <div className="text-[#3c4043] text-[16px] leading-[1.5] font-normal tracking-[.1px]">
              For over 15 years, homeowners and businesses across Fairfax, Arlington, Alexandria, and the greater DC area have trusted Flood Doctor for fast, professional water damage restoration. Our IICRC-certified team responds 24/7 with the expertise and equipment to handle any emergency.
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};
