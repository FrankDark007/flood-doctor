// pages/city/DynamicBlogIndex.tsx
// Dynamic blog index page that loads city-specific blog articles

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CityBlogIndex from '../../components/city/CityBlogIndex';
import { getCityInfo } from '../../utils/contentLoader';

// Blog article type matching content structure
interface BlogArticle {
  meta: {
    title: string;
    description: string;
    canonical: string;
    publishDate: string;
    author: string;
    category: string;
  };
  h1: string;
  heroSection: {
    headline: string;
    subheadline: string;
    backgroundImage: string;
  };
  content: {
    introduction: string;
    sections: Array<{ heading: string; content: string }>;
    conclusion: string;
  };
  callToAction: {
    headline: string;
    text: string;
    phone: string;
  };
  breadcrumbs: Array<{ label: string; url: string }>;
}

// Static imports for all city blog articles
import { mcleanBlogArticles } from '../../src/content/cities/mclean/blog';
import { alexandriaBlogArticles } from '../../src/content/cities/alexandria/blog';
import { arlingtonBlogArticles } from '../../src/content/cities/arlington/blog';
import { fairfaxBlogArticles } from '../../src/content/cities/fairfax/blog';
import { tysonsBlogArticles } from '../../src/content/cities/tysons/blog';
import { restonBlogArticles } from '../../src/content/cities/reston/blog';
import { ashburnBlogArticles } from '../../src/content/cities/ashburn/blog';
import { viennaBlogArticles } from '../../src/content/cities/vienna/blog';
import { greatFallsBlogArticles } from '../../src/content/cities/greatfalls/blog';
import { herndonBlogArticles } from '../../src/content/cities/herndon/blog';
import { springfieldBlogArticles } from '../../src/content/cities/springfield/blog';
import { lortonBlogArticles } from '../../src/content/cities/lorton/blog';
import { fallsChurchBlogArticles } from '../../src/content/cities/fallschurch/blog';

// Blog articles registry
const blogRegistry: Record<string, BlogArticle[]> = {
  mclean: mcleanBlogArticles,
  alexandria: alexandriaBlogArticles,
  arlington: arlingtonBlogArticles,
  fairfax: fairfaxBlogArticles,
  tysons: tysonsBlogArticles,
  reston: restonBlogArticles,
  ashburn: ashburnBlogArticles,
  vienna: viennaBlogArticles,
  greatfalls: greatFallsBlogArticles,
  herndon: herndonBlogArticles,
  springfield: springfieldBlogArticles,
  lorton: lortonBlogArticles,
  fallschurch: fallsChurchBlogArticles,
};

const DynamicBlogIndex: React.FC = () => {
  const params = useParams<{ city: string }>();

  // Extract city from build-time global, subdomain, or URL path
  const hostname = window.location.hostname;
  let city = '';

  // 1. Build-time global (set by build-cities.ts, works during prerender)
  if ((window as any).__FLOOD_DOCTOR_CITY__) {
    city = (window as any).__FLOOD_DOCTOR_CITY__;
  }
  // 2. Subdomain detection (e.g., mclean.flood.doctor)
  else if (hostname.includes('.flood.doctor') && !hostname.startsWith('www')) {
    city = hostname.split('.')[0];
  }
  // 3. Fallback to path-based routing for dev mode
  else {
    const pathParts = window.location.pathname.split('/');
    const cityIndex = pathParts.indexOf('city') + 1;
    city = params.city || pathParts[cityIndex] || '';
  }

  const cityInfo = getCityInfo(city);
  const articles = blogRegistry[city] || [];

  if (!city || articles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#202124] mb-4">Blog Not Found</h1>
          <p className="text-[#5f6368]">No blog articles found for this location.</p>
        </div>
      </div>
    );
  }

  return (
    <CityBlogIndex
      cityName={cityInfo.name}
      citySlug={city}
      articles={articles}
      phone={cityInfo.phone}
    />
  );
};

export default DynamicBlogIndex;
