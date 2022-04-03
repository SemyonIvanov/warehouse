import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(100%/ (3 + 1) + 0.1%, (250px - 100vw) * 1000, 100%), 1fr));
  gap: 10px;
`;

export const AddNewCard = styled(AddNew)`
  width: 256px;
  fill: gray;
`;
