/**
 * Hero Component - Pixel-perfect Google Keyword Planner Clone
 *
 * Layout Structure (from Google):
 * - Section: py-60 (base), py-80 (≥1024px), overflow-hidden, relative
 * - Page container: mx-28 (base) → mx-40 (≥600) → mx-72 (≥1024) → max-w-1456 mx-auto (≥1600)
 * - Flex: column (base), row-reverse (≥1024), gap-30 (base), gap-50 (≥1440)
 * - Copy: flex 1.5, max-w-567px (≥1440)
 * - Image: flex 1, max-w-454px, rounded-24px, min-w-310px (≥600)
 *
 * Typography (using project fonts):
 * - H1: 60px, 700 weight, line-height 1.22→1.16→1.2, letter-spacing -0.25→-0.5px
 * - Subtitle: 18px, 400 weight, line-height 1.55556
 * - CTA: 16px, 500 weight, letter-spacing 0.5px, min-h-48px, rounded-full
 */

import React from 'react';

export interface HeroContent {
  /** Main headline - keep to 3-4 words for proper line breaks */
  title: string;
  /** Subtitle - aim for ~21 words to match Google's layout */
  subtitle: string;
  /** CTA button text */
  ctaText: string;
  /** CTA button href */
  ctaHref: string;
  /** Hero image path (JPG) */
  heroImage: string;
  /** Hero image path (WebP) */
  heroImageWebp?: string;
  /** Hero image alt text */
  heroImageAlt: string;
}

interface HeroProps {
  content: HeroContent;
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <>
    <section
      className="
        bg-white overflow-hidden relative
        py-[60px]
        min-[1024px]:py-[80px]
      "
    >
      {/* Page container with responsive margins */}
      <div
        className="
          mx-[28px]
          min-[600px]:mx-[40px]
          min-[1024px]:mx-[72px]
          min-[1600px]:mx-auto min-[1600px]:max-w-[1456px]
        "
      >
        {/* Grid container: matches FeatureTabs for consistent alignment */}
        <div
          className="
            grid grid-cols-4 items-center
            gap-x-[28px] gap-y-[30px]
            text-left
            min-[600px]:grid-cols-[repeat(10,minmax(5px,1fr))] min-[600px]:gap-x-[40px] min-[600px]:text-center
            min-[1024px]:gap-x-[48px] min-[1024px]:text-left
            min-[1440px]:gap-x-[64px]
          "
        >
          {/* Copy container - right side on desktop */}
          <div
            className="
              col-span-4 self-center m-0 p-0
              order-2
              min-[600px]:col-span-5
              min-[1024px]:order-5
            "
          >
            {/* H1 Title - matches Google headline-1 responsive sizing */}
            <h1
              className="
                font-display text-[#202124] font-bold
                text-[36px] leading-[1.22222] tracking-[-0.25px]
                m-0 mb-[25px] pt-[45px]
                min-[600px]:text-[48px] min-[600px]:leading-[1.16667] min-[600px]:tracking-[-0.5px]
                min-[1024px]:text-[60px] min-[1024px]:leading-[1.2] min-[1024px]:tracking-[-0.5px]
                min-[1440px]:text-[60px] min-[1440px]:leading-[1.2] min-[1440px]:tracking-[-0.5px]
                [-webkit-font-smoothing:antialiased] [text-rendering:optimizelegibility]
                [overflow-wrap:anywhere]
              "
            >
              {content.title}
            </h1>

            {/* Subtitle */}
            <p
              className="
                font-sans text-[18px] font-normal leading-[1.55556] tracking-normal text-[#3c4043]
                m-0 p-0
              "
            >
              {content.subtitle}
            </p>

            {/* CTA container - hidden on mobile, shown on tablet+ */}
            <div
              className="
                hidden min-[600px]:flex
                p-0 m-0 mt-[25px]
                flex-row flex-wrap
                gap-x-[8px] gap-y-[8px]
                min-w-[185px]
                justify-start
                min-[600px]:max-[1023px]:justify-center
              "
            >
              <a
                href={content.ctaHref}
                className="
                  font-sans
                  inline-flex flex-row flex-nowrap
                  items-center content-center self-start
                  justify-around
                  px-[24px] py-[12px] m-0
                  bg-[#1a73e8] text-white
                  text-[16px] font-medium leading-[1.5] tracking-[0.5px]
                  text-center align-middle
                  rounded-[1000px] no-underline overflow-hidden
                  min-h-[48px] min-w-[96px] max-w-[380px]
                  border border-solid border-transparent
                  transition-[background-color,box-shadow,color] duration-200
                  hover:bg-[#185abc] hover:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)] hover:cursor-pointer
                  active:bg-[#185abc] active:shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] active:cursor-pointer
                  focus:bg-[#185abc] focus:border-white focus:shadow-[0_0_0_2px_#185abc] focus:outline-[2px_solid_transparent] focus:cursor-pointer
                  [-webkit-font-smoothing:antialiased] [text-rendering:optimizelegibility]
                "
              >
                {content.ctaText}
              </a>
            </div>
          </div>

          {/* Image container - left side on desktop */}
          <div
            className="
              col-span-4 self-center rounded-[24px] m-0 p-0
              order-5
              min-[600px]:col-span-5
              min-[1024px]:order-2
            "
          >
            <picture>
              {content.heroImageWebp && (
                <source srcSet={content.heroImageWebp} type="image/webp" />
              )}
              <img
                src={content.heroImage}
                alt={content.heroImageAlt}
                className="
                  rounded-[24px] max-w-full w-full h-auto
                  inline-block align-middle
                  border-0
                "
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>

      {/* Sticky Mobile CTA - only visible on mobile (<600px) */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          flex min-[600px]:hidden
          px-4 pt-4 pb-[calc(16px+env(safe-area-inset-bottom,16px))]
          bg-white
          border-t border-[#dadce0]
          shadow-[0_-2px_10px_rgba(0,0,0,0.1)]
        "
      >
        <a
          href={content.ctaHref}
          className="
            font-sans w-full
            inline-flex flex-row flex-nowrap
            items-center content-center
            justify-center
            px-[24px] py-[12px] m-0
            bg-[#1a73e8] text-white
            text-[16px] font-medium leading-[1.5] tracking-[0.5px]
            text-center align-middle
            rounded-[1000px] no-underline overflow-hidden
            min-h-[48px]
            border border-solid border-transparent
            transition-[background-color,box-shadow,color] duration-200
            hover:bg-[#185abc] active:bg-[#185abc]
            [-webkit-font-smoothing:antialiased] [text-rendering:optimizelegibility]
          "
        >
          {content.ctaText}
        </a>
      </div>
    </>
  );
};

export default Hero;
