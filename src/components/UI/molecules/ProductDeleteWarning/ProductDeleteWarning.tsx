import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { deleteCurrentProduct, deleteFromAllWarehouses, setIsOpenProductCardModal } from 'src/store';

import { Button } from 'src/components/UI/atoms/Button';
import { Text } from 'src/components/UI/atoms/typography/styledComponents';
import {
  ButtonWrapper,
  ProductDeleteWarningWrapper,
} from 'src/components/UI/molecules/ProductDeleteWarning/styledComponents';

interface ProductDeleteWarningProps {
  onClose: () => void;
}

export const ProductDeleteWarning: FC<ProductDeleteWarningProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  return (
    <ProductDeleteWarningWrapper>
      <Text>Вы действительно ходите удалить продукт?</Text>
      <ButtonWrapper>
        <Button
          text="Удалить продукт"
          onClick={() => {
            onClose();
            dispatch(setIsOpenProductCardModal(false));
            dispatch(deleteCurrentProduct());
          }}
        />
        <Button
          text="Удалить со складов"
          onClick={() => {
            onClose();
            dispatch(deleteFromAllWarehouses());
          }}
        />
        <Button text="Отменить" isCancel onClick={onClose} />
      </ButtonWrapper>
    </ProductDeleteWarningWrapper>
  );
};
