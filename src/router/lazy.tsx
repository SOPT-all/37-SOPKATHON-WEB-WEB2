import { lazy } from 'react';

export const HomePage = lazy(() => import('@/pages/home'));
export const ReviewPage = lazy(() => import('@/pages/review-page/review-page'));
export const MatchPage = lazy(
  () => import('@/pages/matching-page/matching-page'),
);
