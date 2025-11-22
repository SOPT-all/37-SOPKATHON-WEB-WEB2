import type { ButtonProps } from '@/shared/types/button';

import { buttonStyle } from './Button.css.ts';

const Button = ({
  children,
  disabled,
  onClick,
  type,
  className,
}: ButtonProps) => {
  return (
    <button
      className={className ? `${buttonStyle} ${className}` : buttonStyle}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
