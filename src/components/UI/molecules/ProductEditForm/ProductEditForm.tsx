import { Dispatch, FC, SetStateAction, useMemo } from 'react';

import { Product } from 'src/@types/products';

import { Input } from 'src/components/UI/atoms/Input';
import { MediumText } from 'src/components/UI/atoms/typography/styledComponents';
import { WarehouseDistribution } from 'src/components/UI/molecules/WarehouseDistribution';

import { FormWrapper, UndistributedProduction } from './styledComponents';

interface ProductEditFormProps {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}

export const ProductEditForm: FC<ProductEditFormProps> = ({ product, setProduct }) => {
  const undistributedProduction = useMemo(() => {
    const distributedProduction = product.warehouses.reduce((acc, curr) => +curr.amount + acc, 0);
    return +product.amount - distributedProduction;
  }, [product]);

  return (
    <FormWrapper>
      <Input
        label="Наименование"
        type="text"
        initialValue={product.name}
        setInitialValue={(value) => setProduct((prev) => ({ ...prev, name: value }))}
      />
      <Input
        label="Количество"
        type="number"
        initialValue={product.amount}
        setInitialValue={(value) => setProduct((prev) => ({ ...prev, amount: value }))}
      />
      <WarehouseDistribution
        product={product}
        setProduct={setProduct}
        undistributedProduction={undistributedProduction}
      />
      <MediumText>
        Нераспределенная продукция:{' '}
        <UndistributedProduction isNegative={undistributedProduction < 0}>
          {undistributedProduction || 0}
        </UndistributedProduction>
      </MediumText>
    </FormWrapper>
  );
};
