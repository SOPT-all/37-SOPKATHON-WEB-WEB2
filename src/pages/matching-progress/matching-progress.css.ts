import { keyframes, style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

const APP_BAR_HEIGHT = '5.6rem';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${APP_BAR_HEIGHT})`,
  justifyContent: 'center',
  alignItems: 'center',
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  ...themeVars.fontStyles.display1_sb_32,
});

export const pointText = style({
  backgroundColor: themeVars.color.black,
  color: themeVars.color.primary500,
  borderRadius: '4px',
  padding: '0 0.8rem',
});

const rotateAnimation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const imgContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '9rem',
});

export const logoStyle = style({
  display: 'block',
  width: '150px',
  height: '150px',

  animation: `${rotateAnimation} 2s linear infinite`,
});
