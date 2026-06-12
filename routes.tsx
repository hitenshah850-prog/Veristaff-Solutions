import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import IndustriesPage from './pages/industries';
import ServicesPage from './pages/services';
import HireTalentPage from './pages/hire-talent';
import ContactPage from './pages/contact';
import WhyVeriStaffPage from './pages/why-veristaff';
import CareersPage from './pages/careers';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = import.meta.env.DEV
  ? lazy(() => import('../dev-tools/src/PageNotFound'))
  : ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/industries',
    element: <IndustriesPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/hire-talent',
    element: <HireTalentPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/why-veristaff',
    element: <WhyVeriStaffPage />,
  },
  {
    path: '/careers',
    element: <CareersPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/' | '/about' | '/industries' | '/services' | '/hire-talent' | '/contact' | '/why-veristaff' | '/careers';

export type Params = Record<string, string | undefined>;
