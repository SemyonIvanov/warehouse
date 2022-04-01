import { Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';

import { Product } from 'src/@types/products';
import { ReactComponent as ProductImg } from 'src/assets/ad_product_icon_155850.svg';
import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';

import { Button } from 'src/components/UI/atoms/Button';
import { Input } from 'src/components/UI/atoms/Input';
import { MediumText } from 'src/components/UI/atoms/typography/styledComponents';
import { WarehouseDistribution } from 'src/components/UI/molecules/WarehouseDistribution';
import { FormWrapper } from 'src/components/UI/organisms/ProductAddForm/styledComponents';

interface ProductAddFormProps {
  setProducts: Dispatch<SetStateAction<Product[]>>;
  onClose: () => void;
}

export const ProductAddForm: FC<ProductAddFormProps> = ({ setProducts, onClose }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: Math.random(),
    name: '',
    amount: '',
    picture: ProductImg,
    warehouses: [],
  });

  const undistributedProduction = useMemo(() => {
    const distributedProduction = newProduct.warehouses.reduce((acc, curr) => +curr.amount + acc, 0);
    return +newProduct.amount - distributedProduction;
  }, [newProduct]);

  useEffect(() => {
    if (newProduct.amount === '0' || newProduct.amount === '') {
      setNewProduct((prev) => ({ ...prev, warehouses: [] }));
    }
  }, [newProduct.amount]);

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
      <Button
        text="Добавить продукцию"
        onClick={() => {
          if (newProduct.name && +newProduct.amount && undistributedProduction >= 0) {
            onClose();
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
        <AddNew width="20px" />
      </Button>
    </FormWrapper>
  );
};
