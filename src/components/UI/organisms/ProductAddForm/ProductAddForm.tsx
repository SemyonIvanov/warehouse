import { Dispatch, FC, SetStateAction, useEffect, useMemo, useState } from 'react';

import { Product } from 'src/@types/products';
import { ReactComponent as ProductImg } from 'src/assets/ad_product_icon_155850.svg';
import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';

import { ModalButton } from 'src/components/UI/atoms/ModalButton';
import { ProductEditForm } from 'src/components/UI/molecules/ProductEditForm';

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
    <>
      <ProductEditForm product={newProduct} setProduct={setNewProduct} />
      <ModalButton
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
      </ModalButton>
    </>
  );
};
