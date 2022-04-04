import { FC } from 'react';

import { LayoutHeader } from 'src/components/UI/organisms/LayoutHeader';

import { LayoutWrapper } from './styledComponents';

export const Layout: FC = ({ children }) => (
  <>
    <LayoutHeader />
    <LayoutWrapper>{children}</LayoutWrapper>
  </>
);
