import { FC } from 'react';

import { GlobalStyles } from 'src/global';

import { MainPage } from 'src/components/pages/MainPage';
import { Layout } from 'src/components/templates/Layout';

export const App: FC = () => (
  <>
    <GlobalStyles />
    <Layout>
      <MainPage />
    </Layout>
  </>
);
