import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentWarehouse } from 'src/store';

import { WarehousesPageWrapper } from 'src/components/pages/WarehousesPage/styledComponents';
import { CardList } from 'src/components/templates/CardList';
import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';
import { WarehouseAddForm } from 'src/components/UI/molecules/Warehouse/WarehouseAddForm';
import { WarehousesList } from 'src/components/UI/organisms/WarehousesList';

export const WarehousesPage: FC = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const openNewWarehouseCard = () => {
    setIsOpen(true);
    dispatch(setCurrentWarehouse({ warehouse: { id: Math.random(), name: '', products: [] } }));
  };

  return (
    <WarehousesPageWrapper>
      <H2>Список складов:</H2>
      <CardList setOpen={openNewWarehouseCard}>
        <WarehousesList />
      </CardList>
      <Modal fullHeight isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <WarehouseAddForm setIsOpen={setIsOpen} />
      </Modal>
    </WarehousesPageWrapper>
  );
};
