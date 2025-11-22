import { useMutation } from '@tanstack/react-query';

import {
  getOnboarding,
  type MatchingFormRequest,
  patchMatchingForm,
} from '@/shared/apis/onboarding/onboarding';

export const useGetOnboardingMutation = () => {
  return useMutation({
    mutationFn: () => getOnboarding(),
  });
};

export const usePatchOnboardingMutation = () => {
  return useMutation({
    mutationFn: (data: MatchingFormRequest) => patchMatchingForm(data),
  });
};
