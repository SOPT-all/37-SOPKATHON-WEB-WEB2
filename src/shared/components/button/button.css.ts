import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';

export const buttonStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: themeVars.width.full,
    borderRadius: '0.4rem',
    transition: 'all 0.2s ease',
    ...themeVars.fontStyles.body2_r_16,
    ':disabled': {
      backgroundColor: themeVars.color.gray100,
      border: `1px solid ${themeVars.color.gray400}`,
      color: themeVars.color.gray500,
    },
  },

  variants: {
    size: {
      medium: {
        padding: '1.2rem 1.6rem',
        backgroundColor: themeVars.color.white,
        color: themeVars.color.black,
        border: `1px solid ${themeVars.color.gray400}`,
      },
      large: {
        padding: '1.6rem',
        backgroundColor: themeVars.color.primaryBlack,
        color: themeVars.color.primary500,
        border: 'none',
      },
    },

    selected: {
      true: {
        backgroundColor: themeVars.color.white,
        color: themeVars.color.black,
        border: `1px solid ${themeVars.color.primary700}`,
      },
      false: {},
    },
  },

  defaultVariants: {
    size: 'medium',
    selected: false,
  },
});
