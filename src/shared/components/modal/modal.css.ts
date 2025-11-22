import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const wrapper = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const backdrop = style({
  position: 'absolute',
  inset: 0,
  background: 'rgba(0,0,0,0.4)',
});

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.2rem',
  height: '20rem',
  width: '32rem',
  borderRadius: '8px',
  background: themeVars.color.white,
  zIndex: 1,
});

export const content = style({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const text = style({
  ...themeVars.fontStyles.body2_r_16,
  color: themeVars.color.black,
});
