import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 'calc(100dvh - 5.6rem)', // AppBar 높이 제외
});

export const loadingStyle = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.6rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ...themeVars.fontStyles.display1_sb_32,
});

export const pointText = style({
  color: themeVars.color.primary700,
  borderRadius: '4px',
  padding: '0 0.8rem',
});
