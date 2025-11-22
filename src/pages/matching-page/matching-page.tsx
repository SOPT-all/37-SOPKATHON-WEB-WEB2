import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import MatchingForm from '@/widgets/matching-form/matching-form';
import type { MatchingFormData } from '@/widgets/matching-form/types';

import * as styles from './matching-page.css';

const MatchingPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = useCallback(
    (_data: MatchingFormData) => {
      navigate('/matching/waiting');
    },
    [navigate],
  );

  return (
    <div className={styles.pageContainerStyle}>
      <MatchingForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default MatchingPage;
