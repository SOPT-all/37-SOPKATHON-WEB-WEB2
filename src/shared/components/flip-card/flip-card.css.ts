import { style } from '@vanilla-extract/css';
import { width } from '@/shared/styles/token/width.css';
import { themeVars } from '@/shared/styles/theme.css';

export const flipCardContainer = style({
  width: width.full,
  backgroundColor: themeVars.color.primary50,
  padding: '29px 32px',
  borderRadius: '8px',
  border: `1px solid ${themeVars.color.gray200}`,
  position: 'relative',
});

export const flipCard = style({
  width: '100%',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s ease',
});

export const flipped = style({
  transform: 'rotateY(180deg)',
});

export const face = style({
  inset: 0,
  backfaceVisibility: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const back = style({
  transform: 'rotateY(180deg)',
});
