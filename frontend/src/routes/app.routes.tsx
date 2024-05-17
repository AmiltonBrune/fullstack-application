import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Videos from '../pages/Videos';
import Categories from '../pages/Categories';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
