import { BellIcon, DeleteIcon, ProfileIcon } from '@/shared/assets/icons';
import img_logo from '@/shared/assets/images/img_logo.png';

import * as styles from './app-bar.css';

interface AppBarProps {
  variant: 'onboarding' | 'default';
  profileImageUrl?: string;
  onCloseClick?: () => void;
}

const AppBar = ({ variant, profileImageUrl, onCloseClick }: AppBarProps) => {
  return (
    <header className={styles.containerStyle}>
      <div className={styles.logoContainerStyle}>
        <img src={img_logo} alt='로고' className={styles.logoImageStyle} />
      </div>

      {variant === 'onboarding' ? (
        <div className={styles.rightSectionStyle}>
          <button
            type='button'
            className={styles.iconButtonStyle}
            aria-label='알림'
          >
            <img src={BellIcon} alt='알림' className={styles.iconStyle} />
          </button>
          <button
            type='button'
            className={styles.iconButtonStyle}
            aria-label='프로필'
          >
            {profileImageUrl ? (
              <img
                src={profileImageUrl}
                alt='프로필'
                className={styles.profileImageStyle}
              />
            ) : (
              <img
                src={ProfileIcon}
                alt='프로필'
                className={styles.profileImageStyle}
              />
            )}
          </button>
        </div>
      ) : (
        <button
          type='button'
          className={styles.closeButtonStyle}
          onClick={onCloseClick}
          aria-label='닫기'
        >
          <img src={DeleteIcon} alt='닫기' className={styles.iconStyle} />
        </button>
      )}
    </header>
  );
};

export default AppBar;
