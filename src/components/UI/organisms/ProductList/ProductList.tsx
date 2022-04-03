import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ProductImg } from 'src/assets/ad_product_icon_155850.svg';

import { RootState, setCurrentProduct, setIsOpenProductCardModal } from 'src/store';

import { Modal } from 'src/components/UI/atoms/Modal';
import { H3, Text } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductCard } from 'src/components/UI/molecules/ProductCard';

import { Card } from './styledComponents';

export const ProductList: FC = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.reducer.products);
  const isOpenProductCardModal = useSelector((state: RootState) => state.reducer.isOpenProductCardModal);

  return (
    <>
      {products.map((product) => (
        <Card
          key={product.id}
          onClick={() => {
            dispatch(setCurrentProduct({ product }));
            dispatch(setIsOpenProductCardModal(true));
          }}
        >
          <H3>{product.name}</H3>
          <ProductImg width="250px" />
          <Text>{product.amount} шт</Text>
        </Card>
      ))}
      <Modal
        fullHeight
        isOpen={isOpenProductCardModal}
        onClose={() => {
          dispatch(setCurrentProduct({ product: null }));
          dispatch(setIsOpenProductCardModal(false));
        }}
      >
        <ProductCard />
      </Modal>
    </>
  );
};
