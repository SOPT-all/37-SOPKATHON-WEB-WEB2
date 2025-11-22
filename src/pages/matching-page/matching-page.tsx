import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router/constant/routes';
import MatchingForm from '@/widgets/matching-form/matching-form';
import type { MatchingFormData } from '@/widgets/matching-form/types';

import * as styles from './matching-page.css';

const MatchingPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state?.data;

  const handleFormSubmit = useCallback(
    (_data: MatchingFormData) => {
      navigate(ROUTES.MATCHING_PROGRESS);
    },
    [navigate],
  );

  return (
    <div className={styles.pageContainerStyle}>
      <MatchingForm onSubmit={handleFormSubmit} initialData={data} />
    </div>
  );
};

export default MatchingPage;
