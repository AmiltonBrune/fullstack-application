import { Routes, Route } from 'react-router-dom';

import { FormProvider } from '../context/Form';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const AuthRoutes = () => (
  <FormProvider>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/register' element={<Signup />} />
    </Routes>
  </FormProvider>
);

export default AuthRoutes;
