import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(calc(33% - 20px), 300px));
  gap: 10px;
`;

export const AddNewCard = styled(AddNew)`
  width: 256px;
  fill: gray;
`;
