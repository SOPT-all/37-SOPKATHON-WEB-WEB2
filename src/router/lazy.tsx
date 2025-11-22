import { lazy } from 'react';

<<<<<<< HEAD
export const OnboardingPage = lazy(
  () => import('@/pages/on-boarding/on-boarding'),
);
export const MatchingPage = lazy(
  () => import('@/pages/matching-page/matching-page'),
);
export const MatchingProgressPage = lazy(
  () => import('@/pages/matching-progress/matching-progress'),
);
export const ReviewPage = lazy(() => import('@/pages/review-page/review-page'));
=======
export const HomePage = lazy(() => import('@/pages/home'));
export const ReviewPage = lazy(() => import('@/pages/review-page/review-page'));
export const MatchPage = lazy(
  () => import('@/pages/matching-page/matching-page'),
);
>>>>>>> 49e4fe35a96d8c2b89833b05576ced5f2a5b98d4
