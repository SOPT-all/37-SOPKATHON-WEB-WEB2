import { ProfileIcon } from '@/shared/assets/icons';

import * as styles from './app-bar.css';

interface AppBarProps {
  variant: 'onboarding' | 'default';
  onCloseClick?: () => void;
}

const AppBar = ({ variant, onCloseClick }: AppBarProps) => {
  return (
    <header className={styles.containerStyle}>
      <div className={styles.logoContainerStyle}></div>

      {variant === 'onboarding' ? (
        <div className={styles.rightSectionStyle}>
          <button
            className={styles.iconButtonStyle}
            type='button'
            aria-label='프로필'
          >
            <img
              src={ProfileIcon}
              alt='프로필'
              className={styles.profileImageStyle}
            />
          </button>
        </div>
      ) : (
        <button
          className={styles.closeButtonStyle}
          onClick={onCloseClick}
          type='button'
          aria-label='닫기'
        >
          ✕
        </button>
      )}
    </header>
  );
};

export default AppBar;
