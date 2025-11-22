import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/router/constant/routes';
import { getQuestions } from '@/shared/apis/questions';
import MatchingProfile from '@/shared/assets/images/img-matching-profile.png';
import Button from '@/shared/components/button/button';
import FlipCard from '@/shared/components/flip-card/flip-card';
import LabelLang from '@/shared/components/label-lang/label-lang';

import * as s from './matching-complete.css';

const MatchingComplete = () => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(true);
  };

  const handleButtonClick = () => {
    if (isFlipped) {
      navigate(ROUTES.REVIEW);
    } else {
      handleFlip();
    }
  };

  const { data } = useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
    enabled: isFlipped,
  });

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
                {data?.questions.map((q, idx) => (
                  <div key={`${idx}-${q}`} className={s.questionContainer}>
                    <LabelLang color='default'>{`질문${idx + 1}`}</LabelLang>
                    <p className={s.detailFont}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </FlipCard.Back>
        </FlipCard>
      </div>
      <Button size='large' onClick={handleButtonClick}>
        {isFlipped ? '리뷰 남기러 가기' : '아이스브레이킹 시작하기'}
      </Button>
    </div>
  );
};

export default MatchingComplete;
