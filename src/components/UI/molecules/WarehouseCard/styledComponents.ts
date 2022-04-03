import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const WarehousesWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ProductWarehouse = styled.div`
  position: relative;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid black;
`;

export const ReDistribute = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
