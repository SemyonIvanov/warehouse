import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { RootState, setCurrentWarehouse } from 'src/store';

import { Button } from 'src/components/UI/atoms/Button';
import { Input } from 'src/components/UI/atoms/Input';
import { MediumText, Text } from 'src/components/UI/atoms/typography/styledComponents';
import {
  Delete,
  SelectWrapper,
} from 'src/components/UI/molecules/Products/DistributionProductInWarehouses/styledComponents';
import { DistributionProductsToWarehouseWrapper } from 'src/components/UI/molecules/Warehouse/DistributionProductsToWarehouse/styledComponents';

export const DistributionProductsToWarehouse: FC = () => {
  const dispatch = useDispatch();

  const currentWarehouse = useSelector((state: RootState) => state.reducer.currentWarehouse);
  const products = useSelector((state: RootState) => state.reducer.products);

  return (
    currentWarehouse && (
      <DistributionProductsToWarehouseWrapper>
        <MediumText>Добавить продукцию из незарезервированных запасов</MediumText>
        <>
          {currentWarehouse.products.map((product) => (
            <SelectWrapper key={Math.random()}>
              <Delete
                onClick={() => {
                  dispatch(
                    setCurrentWarehouse({
                      warehouse: {
                        ...currentWarehouse,
                        products: currentWarehouse.products.filter((el) => el.id !== product.id),
                      },
                    }),
                  );
                }}
              />
              <FormControl fullWidth>
                <InputLabel id="products-label">Продукция</InputLabel>
                <Select
                  labelId="products-label"
                  id="products-select"
                  value={product.name}
                  label="Продукция"
                  onChange={(e: SelectChangeEvent) => {
                    const selectProduct = products.find((el) => el.name === e.target.value);
                    if (selectProduct) {
                      if (!currentWarehouse.products.find((el) => el.id === selectProduct.id)) {
                        dispatch(
                          setCurrentWarehouse({
                            warehouse: {
                              ...currentWarehouse,
                              products: currentWarehouse.products.map((el) => {
                                if (el.id === product.id) {
                                  return { id: selectProduct.id, name: selectProduct.name, amount: '' };
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
                  {products.map((productItem) => (
                    <MenuItem key={productItem.id} value={productItem.name}>
                      {productItem.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {!!product.name && (
                <Input
                  label="Количество"
                  initialValue={product.amount}
                  setInitialValue={(value) => {
                    dispatch(
                      setCurrentWarehouse({
                        warehouse: {
                          ...currentWarehouse,
                          products: currentWarehouse.products.map((el) =>
                            el.id === product.id ? { ...el, amount: value } : el,
                          ),
                        },
                      }),
                    );
                  }}
                />
              )}
              {!!product.name && (
                <Text>
                  Доступное количество: {products.find((el) => el.id === product.id)?.undistributedProduction}
                </Text>
              )}
            </SelectWrapper>
          ))}
          {!currentWarehouse.products.length && (
            <FormControl fullWidth>
              <InputLabel id="products-label">Продукция</InputLabel>
              <Select
                labelId="products-label"
                id="products-select"
                label="Продукция"
                value=""
                onChange={(e) => {
                  const selectProduct = products.find((el) => el.name === e.target.value);
                  if (selectProduct) {
                    dispatch(
                      setCurrentWarehouse({
                        warehouse: {
                          ...currentWarehouse,
                          products: [
                            ...currentWarehouse.products,
                            { id: selectProduct.id, name: selectProduct.name, amount: '' },
                          ],
                        },
                      }),
                    );
                  }
                }}
              >
                {products.map((product) => (
                  <MenuItem key={product.id} value={product.name}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {!!currentWarehouse.products.length && (
            <Button
              text="добавить продукт"
              onClick={() => {
                if (!currentWarehouse.products.find((el) => !+el.amount)) {
                  dispatch(
                    setCurrentWarehouse({
                      warehouse: {
                        ...currentWarehouse,
                        products: [...currentWarehouse.products, { id: Math.random(), name: '', amount: '' }],
                      },
                    }),
                  );
                }
              }}
            />
          )}
        </>
      </DistributionProductsToWarehouseWrapper>
    )
  );
};
