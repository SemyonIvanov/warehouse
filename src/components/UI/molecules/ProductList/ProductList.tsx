import { FC, useState } from 'react';

import { Product } from 'src/@types/products';

import { Modal } from 'src/components/UI/atoms/Modal';
import { H3 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductCard } from 'src/components/UI/organisms/ProductCard';

import { Card } from './styledComponents';

interface CardListProps {
  list: Product[];
}

export const ProductList: FC<CardListProps> = ({ list }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState<Product | null>(null);

  return (
    <>
      {list.map((el) => (
        <Card
          key={el.id}
          onClick={() => {
            setSelectProduct(el);
            setIsOpenModal(true);
          }}
        >
          <H3>{el.name}</H3>
          <el.picture width="300px" />
        </Card>
      ))}
      {selectProduct && (
        <Modal
          isOpen={isOpenModal}
          onClose={() => {
            setSelectProduct(null);
            setIsOpenModal(false);
          }}
        >
          <ProductCard initProduct={selectProduct} />
        </Modal>
      )}
    </>
  );
};
