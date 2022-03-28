import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Input } from 'src/components/UI/atoms/Input';
import { BtnAdd, FormWrapper } from 'src/components/UI/molecules/ProductAddForm/styledComponents';

interface ProductAddFormProps {
  setProducts: Dispatch<SetStateAction<{ id: number; name: string }[]>>;
  onClose: () => void;
}

export const ProductAddForm: FC<ProductAddFormProps> = ({ setProducts, onClose }) => {
  const [newProduct, setNewProduct] = useState({ id: Math.random(), name: '' });

  return (
    <FormWrapper>
      <Input
        type="text"
        initialValue={newProduct.name}
        setInitialValue={(value) => setNewProduct((prev) => ({ ...prev, name: value }))}
      />
      <BtnAdd
        onClick={() => {
          onClose();
          setProducts((prev) => [...prev, newProduct]);
        }}
      >
        Добавить
      </BtnAdd>
    </FormWrapper>
  );
};
