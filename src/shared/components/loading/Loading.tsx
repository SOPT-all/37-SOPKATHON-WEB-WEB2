import { logoStyle } from '@/pages/matching-progress/matching-progress.css';
import { MainLogo } from '@/shared/assets/icons';

import {
  loadingStyle,
  pageContainer,
  pointText,
  textContainer,
} from './loading.css';

const Loading = () => {
  return (
    <div className={pageContainer}>
      <div className={loadingStyle}>
        <img src={MainLogo} className={logoStyle} alt='로딩 로고' />
        <div className={textContainer}>
          <p className={pointText}>로딩 중</p>
          <p>잠시만 기다려주세요!</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
