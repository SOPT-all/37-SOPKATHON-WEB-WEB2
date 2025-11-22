import { useQuery } from '@tanstack/react-query';

import type { MatchingInfoResponse } from '@/shared/apis/matching/matching';
import { getMatchingInfo } from '@/shared/apis/matching/matching';

/**
 * 매칭된 상대 정보 조회 훅
 * @param wishId - 매칭 요청 ID
 */
export const useMatchingInfo = (wishId: number) => {
  return useQuery<MatchingInfoResponse>({
    queryKey: ['matching', 'info', wishId],
    queryFn: () => getMatchingInfo(wishId),
    enabled: !!wishId,
    staleTime: 1000 * 60 * 5, // 5분
  });
};
