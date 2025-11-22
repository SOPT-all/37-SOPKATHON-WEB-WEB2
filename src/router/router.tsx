import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Loading from '@/shared/components/loading/Loading';

import { ROUTES } from './constant/routes';
import Layout from './layout';

const HomePage = lazy(() => import('@/pages/HomePage'));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      }, // Pages 추가
    ],
  },
]);

export default router;
