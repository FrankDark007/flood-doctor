// pages/city/DynamicBlogArticle.tsx
// Dynamic blog article page that loads city-specific blog content

import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import CityBlogArticle from '../../components/city/CityBlogArticle';
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

// Helper to extract slug from canonical URL
function getSlugFromCanonical(canonical: string): string {
  const parts = canonical.split('/');
  return parts[parts.length - 1];
}

const DynamicBlogArticle: React.FC = () => {
  const params = useParams<{ city: string; slug: string }>();

  // Extract city from URL path or subdomain
  const pathParts = window.location.pathname.split('/');
  const hostname = window.location.hostname;

  // Check if we're on a subdomain (e.g., mclean.flood.doctor)
  let city = '';
  if (hostname.includes('.flood.doctor') && !hostname.startsWith('www')) {
    city = hostname.split('.')[0];
  } else {
    // Fallback to path-based routing for dev mode
    const cityIndex = pathParts.indexOf('city') + 1;
    city = params.city || pathParts[cityIndex] || '';
  }

  // Get slug from params or path
  const slug = params.slug || pathParts[pathParts.length - 1] || '';

  const cityInfo = getCityInfo(city);
  const articles = blogRegistry[city] || [];

  // Find the article matching the slug
  const article = useMemo(() => {
    return articles.find((a) => {
      const articleSlug = getSlugFromCanonical(a.meta.canonical);
      return articleSlug === slug;
    });
  }, [articles, slug]);

  // Get related articles (same category, excluding current)
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return articles
      .filter((a) => {
        const aSlug = getSlugFromCanonical(a.meta.canonical);
        return aSlug !== slug && a.meta.category === article.meta.category;
      })
      .slice(0, 3);
  }, [articles, article, slug]);

  if (!city || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#202124] mb-4">Article Not Found</h1>
          <p className="text-[#5f6368]">The requested blog article could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <CityBlogArticle
      article={article}
      cityName={cityInfo.name}
      citySlug={city}
      relatedArticles={relatedArticles}
    />
  );
};

export default DynamicBlogArticle;
