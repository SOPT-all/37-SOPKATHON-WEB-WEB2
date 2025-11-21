import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryProvider } from '../shared/query/query-provider.tsx'; // todo: 절대경로 변경
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </StrictMode>,
);
