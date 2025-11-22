import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { buttonStyle } from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'medium' | 'large';
  selected?: boolean;
}

const Button = ({
  children,
  size,
  selected,
  className,
  ...props
}: ButtonProps) => {
  const combinedClassName = className
    ? `${buttonStyle({ size, selected })} ${className}`
    : buttonStyle({ size, selected });

  return (
    <button {...props} className={combinedClassName}>
      {children}
    </button>
  );
};

export default Button;
