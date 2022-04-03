import { Dispatch, FC, SetStateAction } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Product } from 'src/@types/products';
import { mockWarehouses } from 'src/mockData';

import { Button } from 'src/components/UI/atoms/Button';
import { Input } from 'src/components/UI/atoms/Input';
import { MediumText, Text } from 'src/components/UI/atoms/typography/styledComponents';
import {
  Delete,
  DistributionWrapper,
  SelectWrapper,
} from 'src/components/UI/molecules/WarehouseDistribution/styledComponents';

interface WarehouseDistributionProps {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
  undistributedProduction: number;
}

export const WarehouseDistribution: FC<WarehouseDistributionProps> = ({
  product,
  setProduct,
  undistributedProduction,
}) => (
  <DistributionWrapper>
    {+product.amount ? (
      <>
        <MediumText>Распределение по складам:</MediumText>
        {product.warehouses.map((warehouse) => (
          <SelectWrapper key={Math.random()}>
            <Delete
              onClick={() => {
                setProduct((prev) => ({
                  ...prev,
                  warehouses: prev.warehouses.filter((el) => el.id !== warehouse.id),
                }));
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="warehouses-label">Склад</InputLabel>
              <Select
                labelId="warehouses-label"
                id="warehouse-select"
                value={warehouse.name}
                label="Склад"
                onChange={(e: SelectChangeEvent) => {
                  const selectWarehouse = mockWarehouses.find((el) => el.name === e.target.value);
                  if (selectWarehouse) {
                    if (!product.warehouses.find((el) => el.id === selectWarehouse.id)) {
                      setProduct((prev) => ({
                        ...prev,
                        warehouses: prev.warehouses.map((el) => {
                          if (el.id === warehouse.id) {
                            return { ...selectWarehouse, amount: '' };
                          }
                          return el;
                        }),
                      }));
                    }
                  }
                }}
              >
                {mockWarehouses.map((mockWarehouse) => (
                  <MenuItem key={mockWarehouse.id} value={mockWarehouse.name}>
                    {mockWarehouse.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {!!warehouse.name && (
              <Input
                label="Количество"
                type="number"
                initialValue={warehouse.amount}
                setInitialValue={(value) =>
                  setProduct((prev) => ({
                    ...prev,
                    warehouses: prev.warehouses.map((el) => (el.id === warehouse.id ? { ...el, amount: value } : el)),
                  }))
                }
              />
            )}
          </SelectWrapper>
        ))}
        {!product.warehouses.length && (
          <FormControl fullWidth>
            <InputLabel id="warehouses-label">Склад</InputLabel>
            <Select
              labelId="warehouses-label"
              id="warehouse-select"
              label="Склад"
              value=""
              onChange={(e) => {
                const selectWarehouse = mockWarehouses.find((el) => el.name === e.target.value);
                if (selectWarehouse) {
                  setProduct((prev) => ({
                    ...prev,
                    warehouses: [...prev.warehouses, { ...selectWarehouse, amount: '' }],
                  }));
                }
              }}
            >
              {mockWarehouses.map((mockWarehouse) => (
                <MenuItem key={mockWarehouse.id} value={mockWarehouse.name}>
                  {mockWarehouse.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {!!product.warehouses.length && (
          <Button
            text="добавить склад"
            disabled={!!product.warehouses.find((el) => !+el.amount) || undistributedProduction <= 0}
            onClick={() => {
              if (!product.warehouses.find((el) => !+el.amount) && undistributedProduction > 0) {
                setProduct((prev) => ({
                  ...prev,
                  warehouses: [...prev.warehouses, { id: Math.random(), name: '', amount: '' }],
                }));
              }
            }}
          />
        )}
      </>
    ) : (
      <Text>Для распределения по складам необходимо указать количество продукции</Text>
    )}
  </DistributionWrapper>
);
