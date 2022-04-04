import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, setCurrentWarehouse } from 'src/store';

import { Input } from 'src/components/UI/atoms/Input';
import { FormWrapper } from 'src/components/UI/molecules/Products/ProductEditForm/styledComponents';
import { DistributionProductsToWarehouse } from 'src/components/UI/molecules/Warehouse/DistributionProductsToWarehouse';

export const WarehouseEditForm: FC = () => {
  const dispatch = useDispatch();

  const currentWarehouse = useSelector((state: RootState) => state.reducer.currentWarehouse);
  const products = useSelector((state: RootState) => state.reducer.products);

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
        {!!products.length && <DistributionProductsToWarehouse />}
      </FormWrapper>
    )
  );
};
