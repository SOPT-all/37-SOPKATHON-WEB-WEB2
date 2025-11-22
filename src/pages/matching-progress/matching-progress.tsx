import { pointText, textContainer } from './matching-progress.css';

const MatchingProgressPage = () => {
  return (
    <div>
      <div className={textContainer}>
        <p className={pointText}>매칭 진행 중</p>
        <p>잠시만 기다려주세요!</p>
      </div>
    </div>
  );
};

export default MatchingProgressPage;
