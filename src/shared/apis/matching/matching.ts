// src/shared/apis/matching/matching.ts
import axiosInstance from '../instance';

export interface MatchingInfoResponse {
  nativeLanguage: string;
  targetLanguage: string;
  job: string;
  startAt: string;
  location: string;
  badges: string[];
}

interface MatchingApiWrapper<T> {
  status: number;
  message: string;
  data: T;
}

export const getMatchingInfo = async (wishId: number) => {
  const response = await axiosInstance.get<
    MatchingApiWrapper<MatchingInfoResponse>
  >(`/matching/${wishId}`);
  return response.data.data;
};
