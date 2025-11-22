import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  width: '100%',
  height: '5.6rem',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2rem',
  backgroundColor: '#ffffff',
});

export const logoContainerStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

export const logoIconStyle = style({
  width: '2rem',
  height: '2rem',
  color: '#2EBCB0',
});

export const logoTextStyle = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: '#000000',
  fontFamily: 'sans-serif',
});

export const rightSectionStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const iconButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
});

export const notificationIconStyle = style({
  width: '2.4rem',
  height: '2.4rem',
  color: '#000000',
});

export const profileImageStyle = style({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const closeButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
});

export const closeIconStyle = style({
  width: '2.4rem',
  height: '2.4rem',
  color: '#000000',
});
