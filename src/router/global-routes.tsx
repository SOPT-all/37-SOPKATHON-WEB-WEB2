import { ROUTES } from './constant/routes';
import { HomePage } from './lazy';

export const globalRoutes = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
];

export default globalRoutes;
