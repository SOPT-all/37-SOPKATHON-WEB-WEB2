import { style } from '@vanilla-extract/css';

import { themeVars } from '@/shared/styles/theme.css';

const APP_BAR_HEIGHT = '5.6rem';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${APP_BAR_HEIGHT})`,
  justifyContent: 'center',
  alignItems: 'center',
});

export const infoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '32px',
  padding: '29px 0',
  backgroundColor: themeVars.color.primary50,
  borderRadius: '8px',
  border: `1px solid ${themeVars.color.gray200}`,
});

export const profileImage = style({
  width: '140px',
  height: '140px',
  position: 'relative',
});

export const symbolImage = style({
  width: '195px',
  height: '195px',
});

export const basicInfo = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  padding: '0 32px',
});

export const basicContainer = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  flexShrink: 0,
});

export const basicFont = style({
  ...themeVars.fontStyles.body3_r_14,
});

export const divider = style({
  width: 0,
  height: '16px',
  border: `1px solid ${themeVars.color.gray400}`,
});

export const infoFont = style({
  ...themeVars.fontStyles.body1_sb_16,
});

export const InfoContainer = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'center',
});

export const detailFont = style({
  ...themeVars.fontStyles.body2_r_16,
});

export const detailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const backContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  backgroundColor: themeVars.color.primary50,
  borderRadius: '8px',
  border: `1px solid ${themeVars.color.gray200}`,
  padding: '48px 20px',
});

export const cardContainer = style({
  padding: '0 42px',
  width: '100%',
});

export const statusFont = style({
  ...themeVars.fontStyles.head1_sb_22,
  color: themeVars.color.primary500,
  backgroundColor: themeVars.color.primaryBlack,
  borderRadius: '4px',
  padding: '0 8px',
});

export const titleFont = style({
  ...themeVars.fontStyles.head1_sb_22,
  display: 'block',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '12px',
});

export const questionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
});

export const backCard = style({
  backgroundColor: themeVars.color.primary50,
  borderRadius: '8px',
  border: `1px solid ${themeVars.color.gray200}`,
  padding: '48px 50.5px',
});
