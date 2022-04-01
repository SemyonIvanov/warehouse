import { FC, useState } from 'react';

import { Product } from 'src/@types/products';
import { mockProducts } from 'src/mockData';

import { MainPageWrapper } from 'src/components/pages/MainPage/styledComponents';
import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductAddForm } from 'src/components/UI/organisms/ProductAddForm';
import { ProductList } from 'src/components/UI/organisms/ProductList';

export const MainPage: FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <MainPageWrapper>
      <H2>Список продукции:</H2>
      <ProductList list={products} setOpen={setIsOpenModal} />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ProductAddForm setProducts={setProducts} onClose={() => setIsOpenModal(false)} />
      </Modal>
    </MainPageWrapper>
  );
};
