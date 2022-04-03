import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ProductImg } from 'src/assets/ad_product_icon_155850.svg';
import { RootState } from 'src/store';
import { setCurrentProduct } from 'src/store/slice';

import { Modal } from 'src/components/UI/atoms/Modal';
import { H3 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductCard } from 'src/components/UI/organisms/ProductCard';

import { Card } from './styledComponents';

export const ProductList: FC = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.reducer.products);

  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {products.map((product) => (
        <Card
          key={product.id}
          onClick={() => {
            dispatch(setCurrentProduct({ product }));
            setIsOpenModal(true);
          }}
        >
          <H3>{product.name}</H3>
          <ProductImg width="300px" />
        </Card>
      ))}
      <Modal
        isOpen={isOpenModal}
        onClose={() => {
          dispatch(setCurrentProduct({ product: null }));
          setIsOpenModal(false);
        }}
      >
        <ProductCard />
      </Modal>
    </>
  );
};
