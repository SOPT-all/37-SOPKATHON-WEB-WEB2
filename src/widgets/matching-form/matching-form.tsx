import { useCallback, useState } from 'react';

import Button from '@/shared/components/button/button';

import {
  INITIAL_FORM_DATA,
  LANGUAGE_OPTIONS,
  TIME_SLOT_OPTIONS,
} from './constants/option';
import * as styles from './matching-form.css';
import type { MatchingFormData } from './types';

interface MatchingFormProps {
  onSubmit: (data: MatchingFormData) => void;
  initialData?: {
    nativeLanguage?: string;
    targetLanguage?: string;
    job?: string;
  };
}

const MatchingForm = ({ onSubmit, initialData }: MatchingFormProps) => {
  const LANGUAGE_MAP: Record<string, string> = {
    ENGLISH: '영어',
    GERMAN: '독일어',
    FRENCH: '프랑스어',
    DUTCH: '네덜란드어',
  };
  const [formData, setFormData] = useState<MatchingFormData>({
    ...INITIAL_FORM_DATA,
    job: initialData?.job ?? '',
    speakLanguages: initialData?.nativeLanguage
      ? [LANGUAGE_MAP[initialData.nativeLanguage]]
      : [],
    learnLanguages: initialData?.targetLanguage
      ? [LANGUAGE_MAP[initialData.targetLanguage]]
      : [],
  });
  const handleLanguageToggle = useCallback(
    (type: 'speakLanguages' | 'learnLanguages', language: string) => {
      setFormData((prev) => {
        const currentList = prev[type];
        const isSelected = currentList.includes(language);

        return {
          ...prev,
          [type]: isSelected
            ? currentList.filter((lang) => lang !== language)
            : [...currentList, language],
        };
      });
    },
    [],
  );

  const handleInputChange = useCallback(
    (field: keyof MatchingFormData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    [],
  );

  const handleTimeSlotSelect = useCallback((slot: string) => {
    setFormData((prev) => ({
      ...prev,
      timeSlot: prev.timeSlot === slot ? '' : slot,
    }));
  }, []);

  const isFormValid =
    formData.speakLanguages.length > 0 &&
    formData.learnLanguages.length > 0 &&
    formData.region.trim() !== '' &&
    formData.timeSlot.trim() !== '';

  const handleSubmit = useCallback(() => {
    onSubmit(formData);
  }, [formData, onSubmit]);

  return (
    <form
      className={styles.formContainerStyle}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <section className={styles.sectionStyle}>
        <h2 className={styles.sectionTitleStyle}>어떤 언어를 사용하시나요?*</h2>
        <div className={styles.optionGridStyle}>
          {LANGUAGE_OPTIONS.map((language) => (
            <Button
              key={`speak-${language}`}
              type='button'
              size='medium'
              selected={formData.speakLanguages.includes(language)}
              onClick={() => handleLanguageToggle('speakLanguages', language)}
            >
              {language}
            </Button>
          ))}
        </div>
      </section>

      <section className={styles.sectionStyle}>
        <h2 className={styles.sectionTitleStyle}>
          어떤 언어를 배우고 싶으신가요?*
        </h2>
        <div className={styles.optionGridStyle}>
          {LANGUAGE_OPTIONS.map((language) => (
            <Button
              key={`learn-${language}`}
              type='button'
              size='medium'
              selected={formData.learnLanguages.includes(language)}
              onClick={() => handleLanguageToggle('learnLanguages', language)}
            >
              {language}
            </Button>
          ))}
        </div>
      </section>

      <section className={styles.sectionStyle}>
        <h2 className={styles.sectionTitleStyle}>
          어디 지역에서 만나고 싶으신가요?*
        </h2>
        <input
          type='text'
          className={styles.textInputStyle}
          placeholder='지역명을 입력해주세요'
          value={formData.region}
          onChange={(e) => handleInputChange('region', e.target.value)}
        />
      </section>

      <section className={styles.sectionStyle}>
        <h2 className={styles.sectionTitleStyle}>언제 만나고 싶으신가요?*</h2>
        <div className={styles.optionGridStyle}>
          {TIME_SLOT_OPTIONS.map((slot) => (
            <Button
              key={slot}
              type='button'
              size='medium'
              selected={formData.timeSlot === slot}
              onClick={() => handleTimeSlotSelect(slot)}
            >
              {slot}
            </Button>
          ))}
        </div>
      </section>

      <section className={styles.sectionStyle}>
        <h2 className={styles.sectionTitleStyle}>
          어떤 일을 하는 분과 만나고 싶나요?
        </h2>
        <input
          type='text'
          className={styles.textInputStyle}
          placeholder='직업을 입력해주세요'
          value={formData.job}
          onChange={(e) => handleInputChange('job', e.target.value)}
        />
      </section>

      <Button type='submit' size='large' disabled={!isFormValid}>
        매칭하기
      </Button>
    </form>
  );
};

export default MatchingForm;
