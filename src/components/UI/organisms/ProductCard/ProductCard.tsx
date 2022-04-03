import { FC, useState } from 'react';

import { Product } from 'src/@types/products';
import { ReactComponent as Edit } from 'src/assets/edit.svg';

import { ModalButton } from 'src/components/UI/atoms/ModalButton';
import { LargeText, Text } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductEditForm } from 'src/components/UI/molecules/ProductEditForm';

import { ProductCardWrapper, ProductWarehouse, WarehousesWrapper } from './styledComponents';

interface ProductCardProps {
  initProduct: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ initProduct }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [product, setProduct] = useState(initProduct);

  if (isEdit) {
    return (
      <>
        <ProductEditForm product={product} setProduct={setProduct} />
        <ModalButton text="Сохранить" onClick={() => setIsEdit(false)} />
      </>
    );
  }
  return (
    <>
      <ProductCardWrapper>
        <LargeText>{product.name}</LargeText>
        <Text>Общее количество: {product.amount} шт</Text>
        <WarehousesWrapper>
          <Text>Скады, на которых храниться продукция</Text>
          {product?.warehouses?.map?.((warehouse) => (
            <ProductWarehouse>
              <Text key={warehouse.id}>
                {warehouse.name} - {warehouse.amount} шт
              </Text>
            </ProductWarehouse>
          ))}
        </WarehousesWrapper>
        <Text>Незарезервированная продукция: {product?.undistributedProduction || 0} шт</Text>
      </ProductCardWrapper>
      <ModalButton text="Редактировать" onClick={() => setIsEdit(true)}>
        <Edit width="20px" />
      </ModalButton>
    </>
  );
};
