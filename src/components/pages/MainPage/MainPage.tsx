import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentProduct } from 'src/store/slice';

import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductList } from 'src/components/UI/molecules/ProductList';
import { CardList } from 'src/components/UI/organisms/CardList';
import { ProductAddForm } from 'src/components/UI/organisms/ProductAddForm';

import { MainPageWrapper } from './styledComponents';

export const MainPage: FC = () => {
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const openNewProductCard = () => {
    dispatch(
      setCurrentProduct({
        product: {
          id: Math.random(),
          name: '',
          amount: '',
          warehouses: [],
          undistributedProduction: 0,
        },
      }),
    );
    setIsOpenModal(true);
  };

  return (
    <MainPageWrapper>
      <H2>Список продукции:</H2>
      <CardList setOpen={openNewProductCard}>
        <ProductList />
      </CardList>
      <Modal
        isOpen={isOpenModal}
        onClose={() => {
          dispatch(setCurrentProduct({ product: null }));
          setIsOpenModal(false);
        }}
      >
        <ProductAddForm onClose={() => setIsOpenModal(false)} />
      </Modal>
    </MainPageWrapper>
  );
};
