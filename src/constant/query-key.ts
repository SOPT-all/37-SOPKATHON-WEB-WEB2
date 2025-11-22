export const QUERY_KEYS = {
  // Todo: TanStack Query 키 추가 예정
  // ex) USER_INFO: 'userInfo',
  // ex) PRODUCTS: 'products',
  QUESTIONS: 'questions',
  MATCHING_INFO: (wishId: number) => ['matching', 'info', wishId] as const,
} as const;
