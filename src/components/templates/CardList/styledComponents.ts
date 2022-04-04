import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';
import styled from 'styled-components';

import { MediaQueriesSizes } from 'src/constants/size';

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(33% - 10px), 300px));
  gap: 10px;
  @media (${MediaQueriesSizes.desktops}) {
    grid-template-columns: repeat(auto-fit, minmax(calc(50% - 10px), 300px));
  }
  @media (${MediaQueriesSizes.laptops}) {
    grid-template-columns: repeat(auto-fit, minmax(calc(50% - 10px), 260px));
  }
  @media (${MediaQueriesSizes.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(calc(100% - 10px), 260px));
  }
`;

export const AddNewCard = styled(AddNew)`
  width: 250px;
  fill: gray;
`;
