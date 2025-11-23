import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useMatchingInfo } from '@/features/matching/hooks/use-matching-info';
import { ROUTES } from '@/router/constant/routes';
import { getQuestions } from '@/shared/apis/questions';
import MatchingProfile from '@/shared/assets/images/img-matching-profile.png';
import Button from '@/shared/components/button/button';
import FlipCard from '@/shared/components/flip-card/flip-card';
import LabelLang from '@/shared/components/label-lang/label-lang';

import * as s from './matching-complete.css';

const MatchingComplete = () => {
  const navigate = useNavigate();
  const { wishId } = useParams<{ wishId: string }>();
  const [isFlipped, setIsFlipped] = useState(false);

  const { data: matchingData, isLoading } = useMatchingInfo(Number(wishId));

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

  const { data: questionsData } = useQuery({
    queryKey: ['questions'],
    queryFn: getQuestions,
    enabled: isFlipped,
  });

  // 언어 코드를 한국어로 변환
  const CODE_TO_KOREAN: Record<string, string> = {
    ENGLISH: '영어',
    GERMAN: '독일어',
    FRENCH: '프랑스어',
    DUTCH: '네덜란드어',
    KOREAN: '한국어',
  };

  if (isLoading) {
    return (
      <div className={s.wrapper}>
        <div className={s.titleFont}>매칭 정보를 불러오는 중...</div>
      </div>
    );
  }

  if (!matchingData) {
    return (
      <div className={s.wrapper}>
        <div className={s.titleFont}>매칭 정보를 불러올 수 없습니다.</div>
      </div>
    );
  }

  const { nativeLanguage, job, startAt, location, badges } = matchingData;

  const formattedTime = new Date(startAt).toLocaleString('ko-KR', {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
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
                  <div className={s.basicFont}>
                    {CODE_TO_KOREAN[nativeLanguage] || nativeLanguage}
                  </div>
                </div>
                <div className={s.basicContainer}>
                  <LabelLang color='default'>직업</LabelLang>
                  <div className={s.basicFont}>{job}</div>
                </div>
              </div>

              <div className={s.detailContainer}>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>시간</p>
                  <div className={s.divider}></div>
                  <p className={s.detailFont}>{formattedTime}</p>
                </div>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>장소</p>
                  <div className={s.divider}></div>
                  <p className={s.detailFont}>{location}</p>
                </div>
                <div className={s.InfoContainer}>
                  <p className={s.infoFont}>뱃지</p>
                  <div className={s.divider}></div>
                  {badges && badges.length > 0 ? (
                    badges.map((badge) => (
                      <LabelLang key={badge} color='primary'>
                        {badge}
                      </LabelLang>
                    ))
                  ) : (
                    <LabelLang color='primary'>매너왕</LabelLang>
                  )}
                </div>
              </div>
            </div>
          </FlipCard.Front>

          <FlipCard.Back>
            <div>
              <div className={s.backContainer}>
                {questionsData?.questions.map((q, idx) => (
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
