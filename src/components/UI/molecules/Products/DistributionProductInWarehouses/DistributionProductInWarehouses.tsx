import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { RootState, setCurrentProduct } from 'src/store';

import { Button } from 'src/components/UI/atoms/Button';
import { Input } from 'src/components/UI/atoms/Input';
import { MediumText, Text } from 'src/components/UI/atoms/typography/styledComponents';
import {
  Delete,
  DistributionWrapper,
  SelectWrapper,
} from 'src/components/UI/molecules/Products/DistributionProductInWarehouses/styledComponents';

export const DistributionProductInWarehouses: FC = () => {
  const dispatch = useDispatch();

  const currentProduct = useSelector((state: RootState) => state.reducer.currentProduct);
  const warehouses = useSelector((state: RootState) => state.reducer.warehouses);

  return (
    currentProduct && (
      <DistributionWrapper>
        {+currentProduct.amount ? (
          <>
            <MediumText>Распределение по складам:</MediumText>
            {currentProduct.warehouses.map((warehouse) => (
              <SelectWrapper key={Math.random()}>
                <Delete
                  onClick={() => {
                    dispatch(
                      setCurrentProduct({
                        product: {
                          ...currentProduct,
                          warehouses: currentProduct.warehouses.filter((el) => el.id !== warehouse.id),
                        },
                      }),
                    );
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
                      const selectWarehouse = warehouses.find((el) => el.name === e.target.value);
                      if (selectWarehouse) {
                        if (!currentProduct.warehouses.find((el) => el.id === selectWarehouse.id)) {
                          dispatch(
                            setCurrentProduct({
                              product: {
                                ...currentProduct,
                                warehouses: currentProduct.warehouses.map((el) => {
                                  if (el.id === warehouse.id) {
                                    return { ...selectWarehouse, amount: '' };
                                  }
                                  return el;
                                }),
                              },
                            }),
                          );
                        }
                      }
                    }}
                  >
                    {warehouses.map((warehouseItem) => (
                      <MenuItem key={warehouseItem.id} value={warehouseItem.name}>
                        {warehouseItem.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {!!warehouse.name && (
                  <Input
                    isNotNegative
                    label="Количество"
                    initialValue={warehouse.amount}
                    setInitialValue={(value) =>
                      dispatch(
                        setCurrentProduct({
                          product: {
                            ...currentProduct,
                            warehouses: currentProduct.warehouses.map((el) =>
                              el.id === warehouse.id ? { ...el, amount: value } : el,
                            ),
                          },
                        }),
                      )
                    }
                  />
                )}
              </SelectWrapper>
            ))}
            {!currentProduct.warehouses.length && (
              <FormControl fullWidth>
                <InputLabel id="warehouses-label">Склад</InputLabel>
                <Select
                  labelId="warehouses-label"
                  id="warehouse-select"
                  label="Склад"
                  value=""
                  onChange={(e) => {
                    const selectWarehouse = warehouses.find((el) => el.name === e.target.value);
                    if (selectWarehouse) {
                      dispatch(
                        setCurrentProduct({
                          product: {
                            ...currentProduct,
                            warehouses: [...currentProduct.warehouses, { ...selectWarehouse, amount: '' }],
                          },
                        }),
                      );
                    }
                  }}
                >
                  {warehouses.map((warehouse) => (
                    <MenuItem key={warehouse.id} value={warehouse.name}>
                      {warehouse.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {!!currentProduct.warehouses.length && (
              <Button
                text="добавить склад"
                disabled={
                  !!currentProduct.warehouses.find((el) => !+el.amount) || currentProduct.undistributedProduction <= 0
                }
                onClick={() => {
                  if (
                    !currentProduct.warehouses.find((el) => !+el.amount) &&
                    currentProduct.undistributedProduction > 0
                  ) {
                    dispatch(
                      setCurrentProduct({
                        product: {
                          ...currentProduct,
                          warehouses: [...currentProduct.warehouses, { id: Math.random(), name: '', amount: '' }],
                        },
                      }),
                    );
                  }
                }}
              />
            )}
          </>
        ) : (
          <Text>Для распределения по складам необходимо указать количество продукции</Text>
        )}
      </DistributionWrapper>
    )
  );
};
