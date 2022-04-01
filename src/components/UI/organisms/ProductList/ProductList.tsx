import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Product } from 'src/@types/products';

import { Modal } from 'src/components/UI/atoms/Modal';
import { H3 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductCard } from 'src/components/UI/organisms/ProductCard';

import { AddNewCard, Card, ListWrapper } from './styledComponents';

interface CardListProps {
  list: Product[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ProductList: FC<CardListProps> = ({ list, setOpen }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectProduct, setSelectProduct] = useState<Product | null>(null);

  return (
    <>
      <ListWrapper>
        <Card onClick={() => setOpen(true)}>
          <H3>Добавить новый</H3>
          <AddNewCard />
        </Card>
        {list.map((el) => (
          <Card
            key={el.id}
            onClick={() => {
              setSelectProduct(el);
              setIsOpenModal(true);
            }}
          >
            <H3>{el.name}</H3>
            <el.picture />
          </Card>
        ))}
      </ListWrapper>
      {selectProduct && (
        <Modal
          isOpen={isOpenModal}
          onClose={() => {
            setSelectProduct(null);
            setIsOpenModal(false);
          }}
        >
          <ProductCard product={selectProduct} />
        </Modal>
      )}
    </>
  );
};
