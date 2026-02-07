/**
 * CityBlogArticle - Blog Article Page for City Subdomain Sites
 *
 * Displays a specific blog article.
 * Route: /blog/:slug/
 */

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCityFranchise } from '@/contexts/CityFranchiseContext';
import DynamicBlogArticle from '@/pages/city/DynamicBlogArticle';

const CityBlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const franchise = useCityFranchise();

  if (!slug) {
    return <Navigate to="/blog/" replace />;
  }

  // DynamicBlogArticle will render the article with city context
  return <DynamicBlogArticle />;
};

export default CityBlogArticle;
