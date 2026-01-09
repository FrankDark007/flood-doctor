/**
 * DevNoIndex - Route wrapper that noindexes all /dev/* pages
 * Wraps child routes with noindex meta tag to prevent search engine indexing.
 */
import { Outlet } from 'react-router-dom';
import PageMeta from './PageMeta';

export default function DevNoIndex() {
  return (
    <>
      <PageMeta title="Dev" noIndex={true} />
      <Outlet />
    </>
  );
}
