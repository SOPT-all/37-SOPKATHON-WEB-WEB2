import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 0',
  minHeight: 'calc(100dvh - 5.6rem)', // AppBar 높이 제외,
  flex: 1,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '2rem',
});

export const highlightText = style({
  ...themeVars.fontStyles.head1_sb_22,
  color: themeVars.color.primary500,
  backgroundColor: themeVars.color.primaryBlack,
  padding: '0 0.8rem',
  marginBottom: '0.8rem',
  borderRadius: '0.4rem',
});

export const subText = style({
  ...themeVars.fontStyles.head1_sb_22,
  color: themeVars.color.primaryBlack,
});
