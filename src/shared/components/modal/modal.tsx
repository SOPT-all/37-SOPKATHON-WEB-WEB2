import type { ReactNode } from 'react';

import Button from '../button/button';
import * as styles from './modal.css';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={styles.wrapper} role='dialog' aria-modal='true'>
      <div className={styles.backdrop} />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>{children}</p>
        </div>
        <Button onClick={onClose} size='large'>
          확인
        </Button>
      </div>
    </div>
  );
};

export default Modal;
