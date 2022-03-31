import { FC, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { GlobalStyles } from 'src/global';

import { MainPage } from 'src/components/pages/MainPage';
import { Layout } from 'src/components/templates/Layout';

import { routes } from 'src/constants/routes';

export const App: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/products');
    }
  });

  return (
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
};
