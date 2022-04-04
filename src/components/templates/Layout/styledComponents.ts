import styled from 'styled-components';

import { MediaQueriesSizes } from 'src/constants/size';

export const LayoutWrapper = styled.main`
  max-width: 1200px;
  margin: 50px auto 50px;
  @media (${MediaQueriesSizes.desktops}) {
    max-width: 1000px;
  }
  @media (${MediaQueriesSizes.laptops}) {
    margin: 50px 10px 50px;
    max-width: 100%;
  }
`;
