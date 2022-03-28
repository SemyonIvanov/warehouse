import styled from 'styled-components';

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(clamp(100%/ (3 + 1) + 0.1%, (300px - 100vw) * 1000, 100%), 1fr));
  gap: 10px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;

  height: 300px;
`;
