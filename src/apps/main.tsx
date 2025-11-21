import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/apps/App.tsx";
import { QueryProvider } from "@/shared/query/query-provider.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </StrictMode>
);
