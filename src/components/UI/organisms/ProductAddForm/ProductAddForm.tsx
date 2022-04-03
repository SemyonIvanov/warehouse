import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as AddNew } from 'src/assets/AddNew.svg';

import { RootState, addProduct } from 'src/store';

import { ModalButton } from 'src/components/UI/atoms/ModalButton';
import { ProductEditForm } from 'src/components/UI/molecules/ProductEditForm';

interface ProductAddFormProps {
  onClose: () => void;
}

export const ProductAddForm: FC<ProductAddFormProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const currentProduct = useSelector((state: RootState) => state.reducer.currentProduct);

  const addNewProduct = () => {
    if (currentProduct) {
      if (currentProduct.name && +currentProduct.amount && currentProduct.undistributedProduction >= 0) {
        onClose();
        dispatch(
          addProduct({
            product: {
              ...currentProduct,
              warehouses: currentProduct.warehouses.filter((el) => !!+el.amount),
            },
          }),
        );
      }
    }
  };

  return (
    <>
      <ProductEditForm />
      <ModalButton text="Добавить продукцию" onClick={addNewProduct}>
        <AddNew width="20px" />
      </ModalButton>
    </>
  );
};
