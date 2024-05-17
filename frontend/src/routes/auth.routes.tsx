import { Routes, Route } from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const AuthRoutes = () => (
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/register' element={<Signup />} />
  </Routes>
);

export default AuthRoutes;
