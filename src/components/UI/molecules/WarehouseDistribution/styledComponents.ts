import { ReactComponent as DeleteImg } from 'src/assets/delete.svg';
import styled from 'styled-components';

export const DistributionWrapper = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SelectWrapper = styled.div`
  position: relative;
  padding: 40px 15px 15px 15px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Delete = styled(DeleteImg)`
  position: absolute;
  top: 10px;
  right: 15px;
  width: 20px;
  cursor: pointer;
`;
