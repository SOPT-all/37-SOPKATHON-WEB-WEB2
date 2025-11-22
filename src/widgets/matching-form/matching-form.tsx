import { useCallback, useState } from 'react';

import Button from '@/shared/components/button/button';

import * as styles from './matching-form.css';

interface MatchingFormData {
  speakLanguages: string[];
  learnLanguages: string[];
  region: string;
  timeSlot: string;
  occupation: string;
}

interface MatchingFormProps {
  onSubmit: (data: MatchingFormData) => void;
}

const LANGUAGE_OPTIONS = ['네덜란드어', '프랑스어', '독일어', '영어'];

const TIME_SLOT_OPTIONS = [
  '11:30 ~ 12:00',
  '12:00 ~ 12:30',
  '12:30 ~ 13:00',
  '13:00 ~ 13:30',
  '13:30 ~ 14:00',
  '14:00 ~ 14:30',
];

const MatchingForm = ({ onSubmit }: MatchingFormProps) => {
  const [formData, setFormData] = useState<MatchingFormData>({
    speakLanguages: [],
    learnLanguages: [],
    region: '',
    timeSlot: '',
    occupation: '',
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
    formData.timeSlot !== '';

  const handleSubmit = useCallback(() => {
    if (isFormValid) {
      onSubmit(formData);
    }
  }, [formData, isFormValid, onSubmit]);

  return (
    <div className={styles.formContainerStyle}>
      <section className={styles.sectionStyle}>
        <h2 className={styles.sectionTitleStyle}>어떤 언어를 사용하시나요?*</h2>
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
          어떤 언어를 배우고 싶으신가요?*
        </h2>
        <div className={styles.optionGridStyle}>
          {LANGUAGE_OPTIONS.map((language) => (
            <Button
              key={`learn-${language}`}
              className=''
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
          placeholder='지역을 입력해주세요.'
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
        <h2 className={styles.sectionTitleStyle}>직업이 있으신가요?</h2>
        <input
          type='text'
          className={styles.textInputStyle}
          placeholder='직업을 입력해 주세요.'
          value={formData.occupation}
          onChange={(e) => handleInputChange('occupation', e.target.value)}
        />
      </section>

      <Button size='large' disabled={!isFormValid} onClick={handleSubmit}>
        매칭하기
      </Button>
    </div>
  );
};

export default MatchingForm;
