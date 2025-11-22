import { Outlet } from 'react-router-dom';

import { rootStyle } from '@/shared/styles/global.css';

const Layout = () => {
  return (
    <div className={rootStyle}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
