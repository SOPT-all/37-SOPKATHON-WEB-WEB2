import { apiGet } from '../method';

interface onboardingResponse {
  nativeLanguage: string;
  targetLanguage: string;
  job: string;
}

export const getOnboarding = async () => {
  return apiGet<onboardingResponse>(`/onboarding`);
};
