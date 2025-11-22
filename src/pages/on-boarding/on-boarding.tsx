import { useNavigate } from 'react-router-dom';

import { OnBoardingLogoIcon } from '@/shared/assets/icons';
import Button from '@/shared/components/button/button';

import {
  buttonContainer,
  contentWrapper,
  logoContainer,
  pageContainer,
  pointColor,
  textContainer,
} from './on-boarding.css';

const OnBoardingPage = () => {
  const navigate = useNavigate();

  const handleLoadHistory = () => {
    navigate('/history');
  };

  const handleNewInfo = () => {
    navigate('/write');
  };
  return (
    <div className={pageContainer}>
      <div className={contentWrapper}>
        <div className={textContainer}>
          <p>점심 시간 30분</p>
          <p className={pointColor}>다른 언어로</p>
          <p>얘기해볼래요?</p>
        </div>
        <div className={logoContainer}>
          <img src={OnBoardingLogoIcon} alt='온보딩 로고' />
        </div>
      </div>

      <div className={buttonContainer}>
        <Button style={{ flex: 1 }} onClick={handleLoadHistory}>
          기록 불러오기
        </Button>
        <Button size='large' style={{ flex: 1 }} onClick={handleNewInfo}>
          새 정보 입력
        </Button>
      </div>
    </div>
  );
};

export default OnBoardingPage;
