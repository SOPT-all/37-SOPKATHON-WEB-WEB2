const LANGUAGE_LABELS: Record<string, string> = {
  ENGLISH: '영어',
  DUTCH: '네덜란드어',
  FRENCH: '프랑스어',
  KOREAN: '한국어',
};

export const getLanguageLabel = (language: string): string => {
  return LANGUAGE_LABELS[language] || language;
};
