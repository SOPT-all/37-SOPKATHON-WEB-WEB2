import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('@/pages/HomePage'));

import { ROUTES } from './constant/routes';
import Layout from './layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      }, // Pages 추가
    ],
  },
]);

export default router;
