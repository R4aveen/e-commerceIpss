import { lazy } from 'react';
import { type RouteProps } from 'react-router-dom';
import pagesConfig from '@/config/pages.config';

const HomePage = lazy(() => import('@/pages/Home.page'));
const ContactPage = lazy(() => import('@/pages/Contact.page'));

const contentRoutes: RouteProps[] = [
	{ path: pagesConfig.home.to, element: <HomePage /> },
	{ path: pagesConfig.contact.to, element: <ContactPage /> },
	{ path: '*', element: <div>404 Not Found</div> },
];

export default contentRoutes;
