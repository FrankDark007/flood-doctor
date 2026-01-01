import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items?: { label: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const location = useLocation();
  
  // Default path generation if no items provided
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // If we are on home, don't show
  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center text-sm text-gray-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-primary transition-colors flex items-center">
        <Home size={16} className="mr-1" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items ? (
        items.map((item, index) => (
          <React.Fragment key={item.path}>
            <ChevronRight size={14} className="mx-2 text-gray-400 flex-shrink-0" />
            <Link 
              to={item.path}
              className={`hover:text-primary transition-colors ${index === items.length - 1 ? 'font-medium text-gray-900 pointer-events-none' : ''}`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {item.label}
            </Link>
          </React.Fragment>
        ))
      ) : (
        pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}/`;
          const isLast = index === pathnames.length - 1;
          
          // Format label: "restoration-services" -> "Restoration Services"
          const label = name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

          return (
            <React.Fragment key={name}>
              <ChevronRight size={14} className="mx-2 text-gray-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-medium text-gray-900" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link to={routeTo} className="hover:text-primary transition-colors">
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })
      )}
    </nav>
  );
};

export default Breadcrumbs;