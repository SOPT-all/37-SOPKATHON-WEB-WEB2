import type { ReactNode } from 'react';

import { labelLangStyle } from './label-lang.css';

interface LabelLangProps {
  children: ReactNode;
  color?: 'default' | 'primary';
}

const LabelLang = ({ children, color }: LabelLangProps) => {
  return <span className={labelLangStyle({ color })}>{children}</span>;
};

export default LabelLang;
