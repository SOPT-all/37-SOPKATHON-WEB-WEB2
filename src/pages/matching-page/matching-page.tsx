import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { usePatchOnboardingMutation } from '@/features/onboarding/hooks/use-onboarding';
import type { MatchingFormRequest } from '@/shared/apis/onboarding/onboarding';
import MatchingForm from '@/widgets/matching-form/matching-form';
import type { MatchingFormData } from '@/widgets/matching-form/types';

import * as styles from './matching-page.css';

const MatchingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state?.data;

  const { mutate } = usePatchOnboardingMutation();

  const KOREAN_TO_CODE: Record<string, string> = {
    영어: 'ENGLISH',
    독일어: 'GERMAN',
    프랑스어: 'FRENCH',
    네덜란드어: 'DUTCH',
  };

  const handleFormSubmit = useCallback(
    (formData: MatchingFormData) => {
      const apiPayload: MatchingFormRequest = {
        nativeLanguage: KOREAN_TO_CODE[formData.speakLanguages[0]] || '',
        targetLanguage: KOREAN_TO_CODE[formData.learnLanguages[0]] || '',

        location: formData.region,
        timeSlot: formData.timeSlot,
        job: formData.job,
      };

      mutate(apiPayload, {
        onSuccess: () => {
          navigate('/matching/waiting');
        },
      });
    },
    [mutate, KOREAN_TO_CODE, navigate],
  );

  return (
    <div className={styles.pageContainerStyle}>
      <MatchingForm onSubmit={handleFormSubmit} initialData={data} />
    </div>
  );
};

export default MatchingPage;
