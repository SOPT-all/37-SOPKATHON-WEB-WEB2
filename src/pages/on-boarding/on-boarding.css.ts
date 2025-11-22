import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

const APP_BAR_HEIGHT = '5.6rem';

export const pageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${APP_BAR_HEIGHT})`,

  paddingBottom: '2rem',
  boxSizing: 'border-box',
});

export const contentWrapper = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: 0,
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
  width: '100%',
  flexShrink: 0,
});
