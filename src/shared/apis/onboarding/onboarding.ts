import { apiGet, apiPatch } from '../method';

interface onboardingResponse {
  nativeLanguage: string;
  targetLanguage: string;
  job: string;
}

export interface MatchingFormRequest {
  nativeLanguage: string;
  targetLanguage: string;
  location: string;
  timeSlot: string;
  job: string;
}

export const getOnboarding = async () => {
  return apiGet<onboardingResponse>(`/onboarding`);
};

export const patchMatchingForm = (data: MatchingFormRequest) => {
  return apiPatch<MatchingFormRequest>(`/onboarding`, data);
};
