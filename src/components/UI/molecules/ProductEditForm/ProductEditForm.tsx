import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, setCurrentProduct } from 'src/store';

import { Input } from 'src/components/UI/atoms/Input';
import { MediumText } from 'src/components/UI/atoms/typography/styledComponents';
import { DistributionProductInWarehouses } from 'src/components/UI/molecules/DistributionProductInWarehouses';

import { FormWrapper, UndistributedProduction } from './styledComponents';

export const ProductEditForm: FC = () => {
  const dispatch = useDispatch();

  const currentProduct = useSelector((state: RootState) => state.reducer.currentProduct);

  return (
    currentProduct && (
      <FormWrapper>
        <Input
          label="Наименование"
          initialValue={currentProduct.name}
          setInitialValue={(value) => dispatch(setCurrentProduct({ product: { ...currentProduct, name: value } }))}
        />
        <Input
          label="Количество"
          initialValue={currentProduct.amount}
          setInitialValue={(value) => dispatch(setCurrentProduct({ product: { ...currentProduct, amount: value } }))}
        />
        <DistributionProductInWarehouses />
        <MediumText>
          Нераспределенная продукция:{' '}
          <UndistributedProduction isNegative={currentProduct.undistributedProduction < 0}>
            {currentProduct.undistributedProduction || 0}
          </UndistributedProduction>
        </MediumText>
      </FormWrapper>
    )
  );
};
