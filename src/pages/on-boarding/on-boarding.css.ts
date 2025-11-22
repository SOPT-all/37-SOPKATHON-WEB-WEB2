import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '4.4rem',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ...themeVars.fontStyles.display1_sb_32,
});

export const pointColor = style({
  backgroundColor: themeVars.color.black,
  color: themeVars.color.primary500,
  padding: '0 0.8rem',
});

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1.6rem',
});

export const buttonContainer = style({
  display: 'flex',
  gap: '0.8rem',
  height: '4.8rem',
  marginTop: '3.5rem',
});
