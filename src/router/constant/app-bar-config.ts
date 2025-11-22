import { ROUTES } from './routes';

type AppBarVariant = 'onboarding' | 'default';

interface AppBarConfig {
  variant: AppBarVariant;
  closeNavigateTo?: string;
}

export const APP_BAR_CONFIG: Record<string, AppBarConfig> = {
  [ROUTES.ONBOARDING]: {
    variant: 'onboarding',
  },
  [ROUTES.MATCHING]: {
    variant: 'default',
    closeNavigateTo: ROUTES.ONBOARDING,
  },
  [ROUTES.MATCHING_PROGRESS]: {
    variant: 'default',
    closeNavigateTo: ROUTES.ONBOARDING,
  },
  [ROUTES.MATCHING_COMPLETE]: {
    variant: 'default',
    closeNavigateTo: ROUTES.ONBOARDING,
  },
  [ROUTES.REVIEW]: {
    variant: 'default',
    closeNavigateTo: ROUTES.ONBOARDING,
  },
};

export const DEFAULT_APP_BAR_CONFIG: AppBarConfig = {
  variant: 'default',
  closeNavigateTo: ROUTES.ONBOARDING,
};
