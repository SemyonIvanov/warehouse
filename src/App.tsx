import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyles } from 'src/global';

import { MainPage } from 'src/components/pages/MainPage';
import { Layout } from 'src/components/templates/Layout';

import { routes } from 'src/constants/routes';

export const App: FC = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  </>
);
