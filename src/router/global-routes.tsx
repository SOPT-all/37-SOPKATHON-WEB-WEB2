import MatchingPage from '@/pages/matching-page/matching-page';

import { ROUTES } from './constant/routes';
import { HomePage, ReviewPage } from './lazy';

export const globalRoutes = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.REVIEW,
    element: <ReviewPage />,
  },
  {
    path: ROUTES.MATCHING,
    element: <MatchingPage />,
  },
];

export default globalRoutes;
