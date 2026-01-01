import React from 'react';
import Button from '../components/ui/Button';
import PageMeta from '../components/ui/PageMeta';

const NotFound: React.FC = () => {
  return (
    <main className="flex-grow bg-white flex items-center justify-center min-h-[60vh]">
      <PageMeta title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary">Go Home</Button>
          <Button to="/services/" variant="secondary">View Services</Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;