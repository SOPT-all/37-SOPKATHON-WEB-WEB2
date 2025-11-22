import { apiGet } from '../method';

export interface MatchingInfoResponse {
  nativeLanguage: string;
  targetLanguage: string;
  job: string;
  startAt: string;
  location: string;
  badges: string[];
}

/**
 * 매칭된 상대 정보 조회 API
 * @param wishId - 매칭 요청 ID
 * @returns 매칭된 상대방의 정보
 */
export const getMatchingInfo = async (wishId: number) => {
  return apiGet<MatchingInfoResponse>(`/matching/${wishId}`);
};
