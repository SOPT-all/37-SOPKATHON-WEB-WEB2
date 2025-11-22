import { lazy } from 'react';

export const OnboardingPage = lazy(
  () => import('@/pages/on-boarding/on-boarding'),
);
export const MatchingPage = lazy(
  () => import('@/pages/matching-page/matching-page'),
);
export const MatchingProgressPage = lazy(
  () => import('@/pages/matching-progress/matching-progress'),
);
export const MatchingComplete = lazy(
  () => import('@/pages/matching-complete/matching-complete'),
);
export const ReviewPage = lazy(() => import('@/pages/review-page/review-page'));
