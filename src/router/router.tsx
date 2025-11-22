import { createBrowserRouter } from 'react-router-dom';

import globalRoutes from './global-routes';
import Layout from './layout';

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [...globalRoutes],
  },
]);
