import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, setCurrentWarehouse } from 'src/store';

import { Input } from 'src/components/UI/atoms/Input';
import { DistributionProductsToWarehouse } from 'src/components/UI/molecules/DistributionProductsToWarehouse';
import { FormWrapper } from 'src/components/UI/molecules/ProductEditForm/styledComponents';

export const WarehouseEditForm: FC = () => {
  const dispatch = useDispatch();

  const currentWarehouse = useSelector((state: RootState) => state.reducer.currentWarehouse);

  return (
    currentWarehouse && (
      <FormWrapper>
        <Input
          label="Наименование"
          initialValue={currentWarehouse.name}
          setInitialValue={(value) =>
            dispatch(setCurrentWarehouse({ warehouse: { ...currentWarehouse, name: value } }))
          }
        />
        <DistributionProductsToWarehouse />
      </FormWrapper>
    )
  );
};
