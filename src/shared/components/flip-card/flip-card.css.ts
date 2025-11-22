import { style } from '@vanilla-extract/css';
import { width } from '@/shared/styles/token/width.css';

export const flipCardContainer = style({
  width: width.full,
  perspective: '800px',
  position: 'relative',
  height: '364px',
  marginBlock: '41px',
});

export const flipCard = style({
  width: '100%',
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s ease',
  height: '100%',
});

export const flipped = style({
  transform: 'rotateY(180deg)',
});

export const face = style({
  position: 'absolute',
  inset: 0,
  backfaceVisibility: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const back = style({
  transform: 'rotateY(180deg)',
});
