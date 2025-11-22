import { useMutation } from '@tanstack/react-query';

import { getOnboarding } from '@/shared/apis/onboarding/onboarding';

export const useGetOnboardingMutation = () => {
  return useMutation({
    mutationFn: () => getOnboarding(),
  });
};
