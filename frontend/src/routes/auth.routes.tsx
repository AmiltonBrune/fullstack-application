import { Routes, Route } from 'react-router-dom';

import Signin from '../pages/Signin';

const AuthRoutes = () => (
  <Routes>
    <Route path='/' element={<Signin />} />
  </Routes>
);

export default AuthRoutes;
