export interface MatchingFormData {
  speakLanguages: string[];
  learnLanguages: string[];
  region: string;
  timeSlot: string;
  job: string;
}

export type LanguageType = 'speakLanguages' | 'learnLanguages';
