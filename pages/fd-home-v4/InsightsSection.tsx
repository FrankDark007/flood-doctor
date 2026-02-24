
import React from 'react';

export const InsightsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="mx-[28px] md:mx-[40px] lg:mx-[72px] xl:mx-auto max-w-[1456px]">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[28px] md:gap-x-[40px] lg:gap-x-[48px] xl:gap-x-[64px]">
          
          {/* Spacer Column 1 */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Visual Content (Left Side) - Aligned to match text layout above */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5 self-center mb-[48px] lg:mb-0">
            <div className="rounded-[48px] overflow-hidden w-full aspect-square lg:aspect-auto min-h-[400px] lg:min-h-[520px] relative">
               <img
                 src="/images/insights/flood-doctor-northern-virginia-restoration-team.png"
                 alt="Flood Doctor water damage restoration team serving Northern Virginia since 1999"
                 className="w-full h-full object-cover"
               />
               {/* Stats overlay */}
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-8 pt-16">
                  <div className="flex justify-around text-white">
                     <div className="text-center">
                        <div className="text-[36px] font-bold leading-tight">25+</div>
                        <div className="text-[11px] font-medium opacity-90">Years Experience</div>
                     </div>
                     <div className="text-center">
                        <div className="text-[36px] font-bold leading-tight">24/7</div>
                        <div className="text-[11px] font-medium opacity-90">Emergency Service</div>
                     </div>
                     <div className="text-center">
                        <div className="text-[36px] font-bold leading-tight">4.9★</div>
                        <div className="text-[11px] font-medium opacity-90">Google Rating</div>
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
              Since 1999, homeowners and businesses across Fairfax, Arlington, Alexandria, and the greater DC area have trusted Flood Doctor for fast, professional water damage restoration. Our IICRC-certified team responds 24/7 with the expertise and equipment to handle any emergency.
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};
