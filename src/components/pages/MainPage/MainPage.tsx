import { FC, useState } from 'react';

import { mockProducts } from 'src/mockData';

import { MainPageWrapper } from 'src/components/pages/MainPage/styledComponents';
import { CardList } from 'src/components/templates/CardList';
import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductAddForm } from 'src/components/UI/molecules/ProductAddForm';

export const MainPage: FC = () => {
  const [products, setProducts] = useState(mockProducts);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <MainPageWrapper>
      <H2>Список продукции:</H2>
      <CardList list={products} addNewEl={setIsOpenModal} />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ProductAddForm setProducts={setProducts} onClose={() => setIsOpenModal(false)} />
      </Modal>
    </MainPageWrapper>
  );
};
