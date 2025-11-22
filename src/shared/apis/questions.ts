import { apiGet } from './method';
import { END_URL } from '@/constant/url';

export interface QuestionsResponse {
  questions: string[];
}

export const getQuestions = async () => {
  return apiGet<QuestionsResponse>(END_URL.QUESTIONS);
};
