import type { FormEvent } from 'react';
import { useState } from 'react';

import thumbsDownActive from '@/shared/assets/icons/thumbsDown_active.svg';
import thumbsDownInactive from '@/shared/assets/icons/thumbsDown_inactive.svg';
import thumbsUpActive from '@/shared/assets/icons/thumbsUp_active.svg';
import thumbsUpInactive from '@/shared/assets/icons/thumbsUp_inactive.svg';
import Button from '@/shared/components/button/button';

import * as styles from './review-form.css';

type RatingType = 'like' | 'dislike' | null;

interface ReviewFormProps {
  onSubmit: () => void;
}

const REVIEW_KEYWORDS = [
  '좋은 매너',
  '칼같은 시간 약속',
  '발음이 또박또박',
  '최상급 배려',
];

const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [rating, setRating] = useState<RatingType>(null);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  const isLikeSelected = rating === 'like';
  const isDislikeSelected = rating === 'dislike';
  const isSubmitDisabled = rating === null;

  const handleRatingSelect = (type: RatingType) => {
    setRating(type);
    if (type === 'dislike') {
      setSelectedKeywords([]);
    }
  };

  const handleKeywordToggle = (keyword: string) => {
    if (!isLikeSelected) {
      return;
    }

    setSelectedKeywords((prev) =>
      prev.includes(keyword)
        ? prev.filter((k) => k !== keyword)
        : [...prev, keyword],
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rating === null) {
      return;
    }

    onSubmit();
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.ratingSection}>
        <button
          type='button'
          className={styles.ratingButton()}
          onClick={() => handleRatingSelect('like')}
          aria-label='좋아요'
        >
          <img
            src={isLikeSelected ? thumbsUpActive : thumbsUpInactive}
            alt='좋아요'
            className={styles.ratingIcon}
          />
        </button>
        <button
          type='button'
          className={styles.ratingButton()}
          onClick={() => handleRatingSelect('dislike')}
          aria-label='싫어요'
        >
          <img
            src={isDislikeSelected ? thumbsDownActive : thumbsDownInactive}
            alt='싫어요'
            className={styles.ratingIcon}
          />
        </button>
      </div>

      <div className={styles.keywordSection}>
        <div className={styles.keywordGrid}>
          {REVIEW_KEYWORDS.map((keyword) => (
            <Button
              key={keyword}
              type='button'
              size='medium'
              selected={selectedKeywords.includes(keyword)}
              disabled={!isLikeSelected}
              onClick={() => handleKeywordToggle(keyword)}
              className={styles.keywordButton}
            >
              {keyword}
            </Button>
          ))}
        </div>
      </div>

      <div className={styles.submitSection}>
        <Button type='submit' size='large' disabled={isSubmitDisabled}>
          제출
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
