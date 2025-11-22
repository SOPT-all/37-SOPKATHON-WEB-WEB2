import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/HomePage';

import { ROUTES } from './constant/routes';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      }, // Pages 추가
    ],
  },
]);

export default router;
