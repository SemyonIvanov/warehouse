import { FC } from 'react';

import { MainPageWrapper, ProductCard, ProductsWrapper } from 'src/components/pages/MainPage/styledComponents';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';

export const MainPage: FC = () => (
  <MainPageWrapper>
    <H2>Список продукции:</H2>
    <ProductsWrapper>
      <ProductCard>123</ProductCard>
      <ProductCard>123</ProductCard>
      <ProductCard>123</ProductCard>
      <ProductCard>123</ProductCard>
      <ProductCard>123</ProductCard>
      <ProductCard>123</ProductCard>
      <ProductCard>123</ProductCard>
    </ProductsWrapper>
  </MainPageWrapper>
);
