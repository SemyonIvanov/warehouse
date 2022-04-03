import { FC, useState } from 'react';

import { Warehouses } from 'src/@types/warehouses';
import { mockWarehouses } from 'src/mockData';

import { WarehousesPageWrapper } from 'src/components/pages/WarehousesPage/styledComponents';
import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';

export const WarehousesPage: FC = () => {
  const [warehouses, setWarehouses] = useState<Warehouses[]>(mockWarehouses);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <WarehousesPageWrapper>
      <H2>Список складов:</H2>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </WarehousesPageWrapper>
  );
};
