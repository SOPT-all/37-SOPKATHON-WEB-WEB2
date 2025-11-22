import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { buttonStyle } from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'medium' | 'large';
  selected?: boolean;
}

const Button = ({ children, size, selected, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonStyle({ size, selected })}>
      {children}
    </button>
  );
};

export default Button;
