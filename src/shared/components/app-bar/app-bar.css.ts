import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
  height: '5.6rem',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
});

export const logoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoImageStyle = style({
  height: '2rem',
  width: 'auto',
});

export const rightSectionStyle = style({
  display: 'flex',
  alignItems: 'center',
});

export const iconButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
});

export const iconStyle = style({
  width: '4.4rem',
  height: '4.4rem',
});

export const profileImageStyle = style({
  width: '4.4rem',
  height: '4.4rem',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const closeButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.4rem',
  height: '4.4rem',
});
