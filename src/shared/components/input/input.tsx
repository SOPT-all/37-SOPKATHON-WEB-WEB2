import type { ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  className?: string;
}

const Input = ({
  value,
  onChange,
  type = 'text',
  placeholder,
  className,
  ...rest
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
