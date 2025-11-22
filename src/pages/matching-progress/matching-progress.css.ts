import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

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
