import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
