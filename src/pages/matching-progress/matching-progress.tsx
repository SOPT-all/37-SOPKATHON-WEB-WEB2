import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { MainLogo } from '@/shared/assets/icons';

import {
  imgContainer,
  logoStyle,
  pageContainer,
  pointText,
  textContainer,
} from './matching-progress.css';

const MatchingProgressPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const wishId = state?.wishId;

  useEffect(() => {
    if (!wishId) {
      console.error('wishId가 없습니다');
      return;
    }

    const timer = setTimeout(() => {
      navigate(`/matching-complete/${wishId}`);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, wishId]);

  return (
    <div className={pageContainer}>
      <div className={textContainer}>
        <p className={pointText}>매칭 진행 중</p>
        <p>잠시만 기다려주세요!</p>
      </div>

      <div className={imgContainer}>
        <img src={MainLogo} className={logoStyle} alt='로딩 로고' />
      </div>
    </div>
  );
};

export default MatchingProgressPage;
