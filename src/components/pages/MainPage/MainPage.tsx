import { FC, useState } from 'react';

import { Product } from 'src/@types/products';
import { mockProducts } from 'src/mockData';

import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductList } from 'src/components/UI/molecules/ProductList';
import { CardList } from 'src/components/UI/organisms/CardList';
import { ProductAddForm } from 'src/components/UI/organisms/ProductAddForm';

import { MainPageWrapper } from './styledComponents';

export const MainPage: FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <MainPageWrapper>
      <H2>Список продукции:</H2>
      <CardList setOpen={setIsOpenModal}>
        <ProductList list={products} />
      </CardList>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ProductAddForm setProducts={setProducts} onClose={() => setIsOpenModal(false)} />
      </Modal>
    </MainPageWrapper>
  );
};
