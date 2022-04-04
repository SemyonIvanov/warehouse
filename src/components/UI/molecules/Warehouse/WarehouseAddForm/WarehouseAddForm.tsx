import { Dispatch, FC, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';

import { addWarehouse, RootState } from 'src/store';

import { ModalButton } from 'src/components/UI/atoms/ModalButton';
import { WarehouseEditForm } from 'src/components/UI/molecules/Warehouse/WarehouseEditForm';

interface WarehouseAddFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const WarehouseAddForm: FC<WarehouseAddFormProps> = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const currentWarehouse = useSelector((state: RootState) => state.reducer.currentWarehouse);

  return (
    <>
      <WarehouseEditForm />
      <ModalButton
        text="Добавить склад"
        onClick={() => {
          if (currentWarehouse && currentWarehouse.name) {
            setIsOpen(false);
            dispatch(addWarehouse());
          }
        }}
      >
        <AddNew width="20px" />
      </ModalButton>
    </>
  );
};
