import { Dispatch, FC, SetStateAction, useMemo, useState } from 'react';

import { Product } from 'src/@types/products';
import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';

import { Input } from 'src/components/UI/atoms/Input';
import { MediumText } from 'src/components/UI/atoms/typography/styledComponents';
import { WarehouseDistribution } from 'src/components/UI/molecules/WarehouseDistribution';
import { BtnAdd, FormWrapper } from 'src/components/UI/organisms/ProductAddForm/styledComponents';

interface ProductAddFormProps {
  setProducts: Dispatch<SetStateAction<Product[]>>;
  onClose: () => void;
}

export const ProductAddForm: FC<ProductAddFormProps> = ({ setProducts, onClose }) => {
  const [newProduct, setNewProduct] = useState<Product>({ id: Math.random(), name: '', amount: '', warehouses: [] });

  const undistributedProduction = useMemo(() => {
    const distributedProduction = newProduct.warehouses.reduce((acc, curr) => +curr.amount + acc, 0);
    return +newProduct.amount - distributedProduction;
  }, [newProduct]);

  return (
    <FormWrapper>
      <Input
        label="Наименование"
        type="text"
        initialValue={newProduct.name}
        setInitialValue={(value) => setNewProduct((prev) => ({ ...prev, name: value }))}
      />
      <Input
        label="Количество"
        type="number"
        initialValue={newProduct.amount}
        setInitialValue={(value) => setNewProduct((prev) => ({ ...prev, amount: value }))}
      />
      <WarehouseDistribution newProduct={newProduct} setNewProduct={setNewProduct} />
      <MediumText>Нераспределенная продукция: {undistributedProduction}</MediumText>
      <BtnAdd
        onClick={() => {
          onClose();
          if (newProduct.name && +newProduct.amount) {
            setProducts((prev) => [
              ...prev,
              {
                ...newProduct,
                warehouses: newProduct.warehouses.filter((el) => !!+el.amount),
                undistributedProduction,
              },
            ]);
          }
        }}
      >
        Добавить склад
        <AddNew width="20px" />
      </BtnAdd>
    </FormWrapper>
  );
};
