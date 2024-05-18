import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from './hooks/theme';
import { AuthProvider } from './hooks/auth';

import App from './App.tsx';
import { ModalProvider } from './hooks/modal.tsx';
import { FormProvider } from './context/Form/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <FormProvider>
        <ModalProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ModalProvider>
      </FormProvider>
    </ThemeProvider>
  </React.StrictMode>
);
