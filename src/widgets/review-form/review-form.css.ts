import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  width: themeVars.width.full,
  padding: '0 2rem',
});

export const ratingSection = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.2rem',
  padding: '9rem 0',
});

export const ratingButton = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12rem',
    height: '12rem',
    borderRadius: '50%',
  },
});

export const keywordSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const keywordGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1.2rem',
});

export const keywordButton = style({
  width: themeVars.width.full,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const submitSection = style({
  padding: '2rem 0',
});

export const ratingIcon = style({
  width: '12rem',
  height: '12rem',
});
