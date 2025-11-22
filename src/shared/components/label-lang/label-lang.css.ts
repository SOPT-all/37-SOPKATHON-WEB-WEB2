import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@/shared/styles/theme.css';

export const labelLangStyle = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.2rem 0.7rem',
    borderRadius: '2px',
    color: themeVars.color.white,
    ...themeVars.fontStyles.body3_r_14,
  },

  variants: {
    color: {
      default: {
        backgroundColor: themeVars.color.black,
      },
      primary: {
        backgroundColor: themeVars.color.primary700,
      },
    },
  },

  defaultVariants: {
    color: 'default',
  },
});
