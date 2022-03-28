import { FC, useState } from 'react';

import { mockWarehouses } from 'src/mockData';

import { WarehousesPageWrapper } from 'src/components/pages/WarehousesPage/styledComponents';
import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';
import { ProductAddForm } from 'src/components/UI/molecules/ProductAddForm';
import { CardList } from 'src/components/UI/organisms/CardList';

export const WarehousesPage: FC = () => {
  const [warehouses, setWarehouses] = useState(mockWarehouses);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <WarehousesPageWrapper>
      <H2>Список складов:</H2>
      <CardList list={warehouses} setOpen={setIsOpenModal} />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ProductAddForm setProducts={setWarehouses} onClose={() => setIsOpenModal(false)} />
      </Modal>
    </WarehousesPageWrapper>
  );
};
