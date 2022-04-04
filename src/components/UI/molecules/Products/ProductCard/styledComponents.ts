import styled from 'styled-components';

import { Text } from 'src/components/UI/atoms/typography/styledComponents';

import { MediaQueriesSizes } from 'src/constants/size';

export const ProductCardWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const WarehousesWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ProductWarehouse = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const DeleteProduct = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  @media (${MediaQueriesSizes.tablet}) {
    top: 50px;
    right: 50px;
  }
`;

export const DeleteProductText = styled(Text)`
  text-decoration: underline;
`;
