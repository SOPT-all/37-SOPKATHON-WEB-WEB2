import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import AppBar from '@/shared/components/app-bar/app-bar';
import Loading from '@/shared/components/loading/Loading';
import { rootStyle } from '@/shared/styles/global.css';

import {
  APP_BAR_CONFIG,
  DEFAULT_APP_BAR_CONFIG,
} from './constant/app-bar-config';

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const appBarConfig =
    APP_BAR_CONFIG[location.pathname] ?? DEFAULT_APP_BAR_CONFIG;

  const handleCloseClick = () => {
    if (appBarConfig.closeNavigateTo) {
      navigate(appBarConfig.closeNavigateTo);
    }
  };

  return (
    <div className={rootStyle}>
      <Suspense fallback={<Loading />}>
        <AppBar
          variant={appBarConfig.variant}
          onCloseClick={handleCloseClick}
        />
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
