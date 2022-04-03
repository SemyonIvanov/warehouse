import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as Edit } from 'src/assets/edit.svg';
import { RootState } from 'src/store';

import { ModalButton } from 'src/components/UI/atoms/ModalButton';
import { LargeText, Text } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductEditForm } from 'src/components/UI/molecules/ProductEditForm';

import { ProductCardWrapper, ProductWarehouse, WarehousesWrapper } from './styledComponents';

export const ProductCard: FC = () => {
  const currentProduct = useSelector((state: RootState) => state.reducer.currentProduct);

  const [isEdit, setIsEdit] = useState(false);

  if (isEdit) {
    return (
      <>
        <ProductEditForm />
        <ModalButton text="Сохранить" onClick={() => setIsEdit(false)} />
      </>
    );
  }
  return (
    currentProduct && (
      <>
        <ProductCardWrapper>
          <LargeText>{currentProduct?.name}</LargeText>
          <Text>Общее количество: {currentProduct?.amount || 0} шт</Text>
          <WarehousesWrapper>
            <Text>Скады, на которых храниться продукция</Text>
            {currentProduct?.warehouses?.map?.((warehouse) => (
              <ProductWarehouse key={warehouse.id}>
                <Text>
                  {warehouse.name} - {warehouse.amount} шт
                </Text>
              </ProductWarehouse>
            ))}
          </WarehousesWrapper>
          <Text>Незарезервированная продукция: {currentProduct?.undistributedProduction || 0} шт</Text>
        </ProductCardWrapper>
        <ModalButton text="Редактировать" onClick={() => setIsEdit(true)}>
          <Edit width="20px" />
        </ModalButton>
      </>
    )
  );
};
