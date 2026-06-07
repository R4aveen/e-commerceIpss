import { type RouteProps } from 'react-router-dom';
import DefaultFooterTemplate from '@/templates/layouts/Footers/DefaultFooter.template';
import pagesConfig from '@/config/pages.config';

const footerRoutes: RouteProps[] = [
	{ path: pagesConfig.contact.to, element: null },
	{ path: '*', element: <DefaultFooterTemplate /> },
];

export default footerRoutes;

