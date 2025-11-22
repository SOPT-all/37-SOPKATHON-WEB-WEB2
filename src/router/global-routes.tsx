import { ROUTES } from './constant/routes';
import {
  MatchingPage,
  MatchingProgressPage,
  OnboardingPage,
  ReviewPage,
} from './lazy';

export const globalRoutes = [
  {
    path: ROUTES.ONBOARDING,
    element: <OnboardingPage />,
  },
  {
    path: ROUTES.MATCHING,
    element: <MatchingPage />,
  },
  {
    path: ROUTES.MATCHING_PROGRESS,
    element: <MatchingProgressPage />,
  },
  {
    path: ROUTES.REVIEW,
    element: <ReviewPage />,
  },
];

export default globalRoutes;
