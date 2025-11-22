import type { MatchingFormData } from '../types';

export const LANGUAGE_OPTIONS = ['네덜란드어', '프랑스어', '독일어', '영어'];

export const TIME_SLOT_OPTIONS = [
  '11:30 ~ 12:00',
  '12:00 ~ 12:30',
  '12:30 ~ 13:00',
  '13:00 ~ 13:30',
  '13:30 ~ 14:00',
  '14:00 ~ 14:30',
];

export const INITIAL_FORM_DATA: MatchingFormData = {
  speakLanguages: [],
  learnLanguages: [],
  region: '',
  timeSlot: '',
  job: '',
};
