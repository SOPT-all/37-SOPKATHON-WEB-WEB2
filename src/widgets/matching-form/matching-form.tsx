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
}

const MatchingForm = ({ onSubmit }: MatchingFormProps) => {
  const [formData, setFormData] = useState<MatchingFormData>(INITIAL_FORM_DATA);

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
        <h2 className={styles.sectionTitleStyle}>어떤 언어를 사용하시나요?</h2>
        <div className={styles.optionGridStyle}>
          {LANGUAGE_OPTIONS.map((language) => (
            <Button
              key={`speak-${language}`}
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
          어떤 언어를 배우고 싶으신가요?
        </h2>
        <div className={styles.optionGridStyle}>
          {LANGUAGE_OPTIONS.map((language) => (
            <Button
              key={`learn-${language}`}
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
          어디 지역에서 만나고 싶으신가요?
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
        <h2 className={styles.sectionTitleStyle}>언제 만나고 싶으신가요?</h2>
        <div className={styles.optionGridStyle}>
          {TIME_SLOT_OPTIONS.map((slot) => (
            <Button
              key={slot}
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
          어떤 직업을 갖고 계신가요? (선택)
        </h2>
        <input
          type='text'
          className={styles.textInputStyle}
          placeholder='직업을 입력해주세요'
          value={formData.job}
          onChange={(e) => handleInputChange('job', e.target.value)}
        />
      </section>

      <Button size='large' disabled={!isFormValid} type='submit'>
        매칭하기
      </Button>
    </form>
  );
};

export default MatchingForm;
