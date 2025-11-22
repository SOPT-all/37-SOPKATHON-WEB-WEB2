import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loading from '@/shared/components/loading/Loading';
import { rootStyle } from '@/shared/styles/global.css';

const Layout = () => {
  return (
    <div className={rootStyle}>
      <Suspense fallback={<Loading />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </div>
  );
};

export default Layout;
