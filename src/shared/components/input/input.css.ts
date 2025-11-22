import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/token/color.css';
import { width } from '@/shared/styles/token/width.css';
import { themeVars } from '@/shared/styles/theme.css';

export const inputStyle = style({
  ...themeVars.fontStyles.body1_m_16,
  width: width.full,
  color: color.black,
  padding: '13.5px 16px',
  border: `1px solid ${color.gray400}`,
  borderRadius: '4px',
  backgroundColor: color.white,
  outline: 'none',
  '::placeholder': {
    ...themeVars.fontStyles.body2_r_16,
    color: color.gray500,
  },
});
