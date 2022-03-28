import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from 'src/global';

import { MainPage } from 'src/components/pages/MainPage';
import { WarehousesPage } from 'src/components/pages/WarehousesPage';
import { Layout } from 'src/components/templates/Layout';

export const App: FC = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<MainPage />} />
        <Route path="/warehouses" element={<WarehousesPage />} />
      </Routes>
    </Layout>
  </>
);
