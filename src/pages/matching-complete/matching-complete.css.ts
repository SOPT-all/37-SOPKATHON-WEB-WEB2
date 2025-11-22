import { style } from '@vanilla-extract/css';
import { themeVars } from '@/shared/styles/theme.css';

export const wrapper = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});
export const infoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '32px',
  padding: '29px 32px',
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
  gap: '12px',
});

export const basicContainer = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
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
  padding: '48px 50.5px',
});

export const cardContainer = style({
  padding: '0 42px',
  height: '100%',
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
  marginTop: '8px',
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
