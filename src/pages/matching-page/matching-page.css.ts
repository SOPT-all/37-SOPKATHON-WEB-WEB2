import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

export const pageContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  padding: '2.4rem 2rem',
  backgroundColor: themeVars.color.white,
});
