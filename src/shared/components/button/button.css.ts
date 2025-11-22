import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';

export const buttonStyle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: themeVars.width.full,
    borderRadius: '4px',
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
        backgroundColor: themeVars.color.white,
        color: themeVars.color.black,
        border: `1px solid ${themeVars.color.gray400}`,
      },
      large: {
        backgroundColor: themeVars.color.primaryBlack,
        color: themeVars.color.primary500,
      },
    },

    selected: {
      true: {
        backgroundColor: themeVars.color.white,
        color: themeVars.color.black,
        borderColor: themeVars.color.primary700,
      },
    },
  },

  defaultVariants: {
    size: 'medium',
    selected: false,
  },
});
