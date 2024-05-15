import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { useAuth } from '../hooks/auth';

import Auth from './auth.routes';

const Routes: React.FC = () => {
  //   const { logged } = useAuth();

  //   return <BrowserRouter>{logged ? <App /> : <Auth />}</BrowserRouter>;
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
};

export default Routes;
