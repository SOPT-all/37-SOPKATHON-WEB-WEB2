import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router/constant/routes';
import Modal from '@/shared/components/modal/modal';
import ReviewForm from '@/widgets/review-form/review-form';

import * as styles from './review-page.css';

const ReviewPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewSubmit = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate(ROUTES.HOME);
  };

  return (
    <>
      <div className={styles.pageContainer}>
        <header className={styles.header}>
          <h1 className={styles.highlightText}>상대는 잘 만나셨나요?</h1>
          <p className={styles.subText}>후기를 남겨 보세요.</p>
        </header>

        <ReviewForm onSubmit={handleReviewSubmit} />
      </div>

      {isModalOpen && (
        <Modal onClose={handleModalClose}>리뷰가 등록되었습니다!</Modal>
      )}
    </>
  );
};

export default ReviewPage;
