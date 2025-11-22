import type { InputHTMLAttributes } from 'react';
import * as s from './input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  className,
  ...rest
}: InputProps) => {
  return (
    <input
      className={s.inputStyle}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
