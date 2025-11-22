import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/router';
import { QueryProvider } from '@/shared/query/query-provider';
import ThemeProvider from '@/shared/styles/theme-provider';

function App() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryProvider>
  );
}

export default App;
