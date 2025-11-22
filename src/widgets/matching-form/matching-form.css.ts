import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const formContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});

export const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const sectionTitleStyle = style({
  ...themeVars.fontStyles.body1_m_16,
  color: themeVars.color.black,
});

export const optionGridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.2rem',
});

export const textInputStyle = style({
  width: themeVars.width.full,
  padding: '1.6rem',
  ...themeVars.fontStyles.body2_r_16,
  color: themeVars.color.black,
  border: `1px solid ${themeVars.color.gray400}`,
  borderRadius: '0.4rem',
  backgroundColor: themeVars.color.white,
  outline: 'none',
  selectors: {
    '&::placeholder': {
      color: themeVars.color.gray500,
    },
    '&:focus': {
      borderColor: themeVars.color.primary700,
    },
  },
});
