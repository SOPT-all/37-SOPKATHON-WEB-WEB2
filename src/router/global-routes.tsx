import { ROUTES } from './constant/routes';
import {
  MatchingComplete,
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
  {
    path: ROUTES.REVIEW,
    element: <ReviewPage />,
  },
  {
    path: ROUTES.MATCHING,
    element: <MatchingPage />,
  },
  { path: ROUTES.MATCHING_COMPLETE, element: <MatchingComplete /> },
];

export default globalRoutes;
