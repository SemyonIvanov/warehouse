import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as WarehouseImg } from 'src/assets/warehouse-svgrepo-com.svg';

import { RootState, setCurrentWarehouse, setIsOpenWarehouseCardModal } from 'src/store';

import { Modal } from 'src/components/UI/atoms/Modal';
import { H3 } from 'src/components/UI/atoms/typography/styledComponents';
import { WarehouseCard } from 'src/components/UI/molecules/Warehouse/WarehouseCard';
import { Card } from 'src/components/UI/organisms/ProductList/styledComponents';

export const WarehousesList: FC = () => {
  const dispatch = useDispatch();

  const warehouses = useSelector((state: RootState) => state.reducer.warehouses);
  const isOpenWarehouseCardModal = useSelector((state: RootState) => state.reducer.isOpenWarehouseCardModal);

  return (
    <>
      {warehouses.map((warehouse) => (
        <Card
          key={warehouse.id}
          onClick={() => {
            dispatch(setCurrentWarehouse({ warehouse }));
            dispatch(setIsOpenWarehouseCardModal(true));
          }}
        >
          <H3>{warehouse.name}</H3>
          <WarehouseImg width="250px" />
        </Card>
      ))}
      <Modal
        fullHeight
        isOpen={isOpenWarehouseCardModal}
        onClose={() => {
          dispatch(setCurrentWarehouse({ warehouse: null }));
          dispatch(setIsOpenWarehouseCardModal(false));
        }}
      >
        <WarehouseCard />
      </Modal>
    </>
  );
};
