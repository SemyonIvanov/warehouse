import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { redistributionProduct, RootState } from 'src/store';

import { Input } from 'src/components/UI/atoms/Input';
import { ModalButton } from 'src/components/UI/atoms/ModalButton';
import { Text } from 'src/components/UI/atoms/typography/styledComponents';
import {
  RedistributionProductWrapper,
  SelectWrapper,
} from 'src/components/UI/molecules/Warehouse/RedistributionProduct/styledComponents';

interface RedistributionProductProps {
  product: { id: number; name: string; amount: string } | null;
  onClose: () => void;
}

export const RedistributionProduct: FC<RedistributionProductProps> = ({ product, onClose }) => {
  const dispatch = useDispatch();

  const warehouses = useSelector((state: RootState) => state.reducer.warehouses);
  const currentWarehouse = useSelector((state: RootState) => state.reducer.currentWarehouse);

  const [selectedWarehouse, setSelectedWarehouse] = useState(
    warehouses.find((warehouse) => warehouse.id !== currentWarehouse?.id)?.id || currentWarehouse?.id,
  );
  const [amount, setAmount] = useState(product?.amount);

  return (
    <>
      <RedistributionProductWrapper>
        <Text>{product?.name}</Text>
        <SelectWrapper>
          <Text>Выберете склад</Text>
          <FormControl fullWidth>
            <InputLabel id="products-label">Склад</InputLabel>
            <Select
              labelId="products-label"
              id="products-select"
              label="Склад"
              value={selectedWarehouse?.toString()}
              onChange={(e: SelectChangeEvent) => {
                setSelectedWarehouse(+e.target.value);
              }}
            >
              {warehouses.map((warehouse) => (
                <MenuItem key={warehouse.id} value={warehouse.id}>
                  {warehouse.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input label="Количество" initialValue={amount || ''} setInitialValue={(value) => setAmount(value)} />
        </SelectWrapper>
      </RedistributionProductWrapper>
      <ModalButton
        text="Перераспределить"
        onClick={() => {
          if (currentWarehouse?.id !== selectedWarehouse) {
            onClose();
            dispatch(redistributionProduct({ warehouse: selectedWarehouse, product, amount: amount || '0' }));
          }
          onClose();
        }}
      />
    </>
  );
};
