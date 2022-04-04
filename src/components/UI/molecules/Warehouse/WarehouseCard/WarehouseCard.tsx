import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as Distribute } from 'src/assets/arrow-left-right_1.svg';
import { useMediaQuery } from 'src/hooks';

import { RootState, setIsOpenWarehouseCardModal } from 'src/store';

import { Modal } from 'src/components/UI/atoms/Modal';
import { ModalButton } from 'src/components/UI/atoms/ModalButton';
import { LargeText, SmallText, Text } from 'src/components/UI/atoms/typography/styledComponents';
import { RedistributionProduct } from 'src/components/UI/molecules/Warehouse/RedistributionProduct';

import { MediaQueriesSizes } from 'src/constants/size';

import { ProductCardWrapper, ProductWarehouse, ReDistribute, WarehousesWrapper } from './styledComponents';

export const WarehouseCard: FC = () => {
  const dispatch = useDispatch();

  const currentProduct = useSelector((state: RootState) => state.reducer.currentWarehouse);

  const isTablet = useMediaQuery(MediaQueriesSizes.tablet);

  const [isOpenReDistribute, setIsOpenReDistribute] = useState(false);
  const [movedProduct, setMovedProduct] = useState<{ id: number; name: string; amount: string } | null>(null);

  return (
    currentProduct && (
      <>
        <ProductCardWrapper>
          <LargeText>{currentProduct?.name}</LargeText>
          <Text>
            Общее количество продукции на складе:{' '}
            {currentProduct.products.reduce((acc, curr) => acc + +curr.amount, 0) || 0} шт
          </Text>
          <WarehousesWrapper>
            <Text>Список продукции</Text>
            {currentProduct?.products?.map?.((product) => (
              <ProductWarehouse key={product.id}>
                <Text>
                  {product.name} - {product.amount} шт
                </Text>
                <ReDistribute
                  onClick={() => {
                    setMovedProduct(product);
                    setIsOpenReDistribute(true);
                  }}
                >
                  {!isTablet && <SmallText>Переместить продукцию на другой склад</SmallText>}
                  <Distribute width="20px" fill="#000000ff" />
                </ReDistribute>
              </ProductWarehouse>
            ))}
          </WarehousesWrapper>
        </ProductCardWrapper>
        <ModalButton text="Закрыть" onClick={() => dispatch(setIsOpenWarehouseCardModal(false))} />
        <Modal isOpen={isOpenReDistribute} onClose={() => setIsOpenReDistribute(false)}>
          <RedistributionProduct product={movedProduct} onClose={() => setIsOpenReDistribute(false)} />
        </Modal>
      </>
    )
  );
};
