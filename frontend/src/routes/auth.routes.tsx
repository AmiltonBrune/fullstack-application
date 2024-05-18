import { Routes, Route } from 'react-router-dom';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ActivateAccount from '../pages/ActivateAccount';

const AuthRoutes = () => (
  <Routes>
    <Route path='/' element={<Signin />} />
    <Route path='/register' element={<Signup />} />
    <Route path='/activate-account/:code' element={<ActivateAccount />} />
  </Routes>
);

export default AuthRoutes;
