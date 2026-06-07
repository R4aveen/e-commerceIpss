import { type RouteProps } from 'react-router-dom';
import DefaultHeaderTemplate from '@/templates/layouts/Headers/DefaultHeader.template';

const headerRoutes: RouteProps[] = [
	{
		path: '*',
		element: <DefaultHeaderTemplate />,
	},
];

export default headerRoutes;

