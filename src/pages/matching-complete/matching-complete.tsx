import FlipCard from '@/shared/components/flip-card/flip-card';
import Symbol from '@/shared/assets/images/img-symbol.png';
import MatchingProfile from '@/shared/assets/images/img-matching-profile.png';
import * as s from './matching-complete.css';
import { useState } from 'react';
import Button from '@/shared/components/button/button';
import LabelLang from '@/shared/components/label-lang/label-lang';

const ICE_BREAKING_QUESTIONS = [
  { label: '질문1', value: '퇴근하고 나만의 루틴이 있다면?' },
  { label: '질문2', value: '별명이 뭔가요?' },
  { label: '질문3', value: '가장 좋아하는 음식은 뭔가요?' },
  { label: '질문4', value: '저의 첫인상은 어떤가요?' },
  { label: '질문5', value: '오늘 퇴근 후엔 무엇을 하나요?' },
];

const MatchingComplete = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.titleContainer}>
        <span className={s.statusFont}>
          {isFlipped ? '상대와 만났다면...' : '매칭 완료!'}
        </span>
        <span className={s.titleFont}>
          {isFlipped
            ? '아이스브레이킹 시간을 가져보세요!'
            : '다음 정보를 확인 후 상대를 만나세요!'}
        </span>
      </div>
      <div className={s.cardContainer}>
        <FlipCard isFlipped={isFlipped}>
          <FlipCard.Front>
            <div className={s.infoContainer}>
              <img
                src={MatchingProfile}
                alt='매칭 프로필 이미지'
                className={s.profileImage}
              />

              <div className={s.basicInfo}>
                <div className={s.basicContainer}>
                  <LabelLang color='default'>상대 언어</LabelLang>
                  <div className={s.basicFont}>프랑스</div>
                </div>
                <div className={s.basicContainer}>
                  <LabelLang color='default'>회사원</LabelLang>
                  <div className={s.basicFont}>회사원</div>
                </div>
              </div>

              <div className={s.detailContainer}>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>시간</p>
                  <div className={s.divider}></div>
                  <p className={s.detailFont}>startAt</p>
                </div>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>장소</p>
                  <div className={s.divider}></div>
                  <p className={s.detailFont}>location</p>
                </div>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>뱃지</p>
                  <div className={s.divider}></div>
                  <LabelLang color='primary'>매너왕</LabelLang>
                </div>
              </div>
            </div>
          </FlipCard.Front>

          <FlipCard.Back>
            <div>
              <div className={s.backContainer}>
                {ICE_BREAKING_QUESTIONS.map((question) => (
                  <div key={question.label} className={s.questionContainer}>
                    <LabelLang color='default'>{question.label}</LabelLang>
                    <p className={s.detailFont}>{question.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FlipCard.Back>
        </FlipCard>
      </div>
      <Button size='large' onClick={handleFlip}>
        {isFlipped ? '리뷰 남기러 가기' : '아이스브레이킹 시작하기'}
      </Button>
    </div>
  );
};

export default MatchingComplete;
