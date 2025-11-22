import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router/constant/routes';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.MATCHING_COMPLETE);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

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
