import { FC } from 'react';

import { Product } from 'src/@types/products';

import { LargeText, Text } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductCardWrapper, WarehousesWrapper } from 'src/components/UI/organisms/ProductCard/styledComponents';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => (
  <ProductCardWrapper>
    <LargeText>{product.name}</LargeText>
    <WarehousesWrapper>
      <Text>Скады, на которых храниться продукция</Text>
      {product?.warehouses?.map?.((warehouse) => (
        <Text>
          {warehouse.name} - {warehouse.amount} шт
        </Text>
      ))}
    </WarehousesWrapper>
    {!!product?.undistributedProduction && (
      <Text>Незарезервированная продукция: {product?.undistributedProduction}</Text>
    )}
  </ProductCardWrapper>
);
