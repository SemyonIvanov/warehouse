import { PayloadAction } from '@reduxjs/toolkit';
import { Warehouses } from 'src/@types/store/warehouses';

import { StoreType } from 'src/@types/store';

export const warehousesReducers = {
  setIsOpenWarehouseCardModal(state: StoreType, action: PayloadAction<boolean>) {
    state.isOpenWarehouseCardModal = action.payload;
  },
  addWarehouse(state: StoreType) {
    if (state.currentWarehouse) {
      const warehouse = {
        ...state.currentWarehouse,
        products: state.currentWarehouse.products.filter((product) => !!product.name && !!+product.amount),
      };
      state.warehouses = [...state.warehouses, warehouse];
      state.products = state.products.map((product) => {
        const findProduct = warehouse.products.find((el) => el.id === product.id);
        if (findProduct) {
          return {
            ...product,
            warehouses: product.warehouses.find((el) => el.id === warehouse.id)
              ? { ...product.warehouses, amount: +product.amount + findProduct.amount }
              : [...product.warehouses, { id: warehouse.id, name: warehouse.name, amount: findProduct.amount }],
            undistributedProduction: product.undistributedProduction - +findProduct.amount,
          };
        }
        return product;
      });
    }
  },
  setCurrentWarehouse(state: StoreType, action: PayloadAction<{ warehouse: Warehouses | null }>) {
    const { warehouse } = action.payload;
    state.currentWarehouse = warehouse;
  },
  redistributionProduct(
    state: StoreType,
    action: PayloadAction<{
      warehouse: number | undefined;
      product: { id: number; name: string; amount: string } | null;
      amount: string;
    }>,
  ) {
    const { warehouse, product, amount } = action.payload;
    if (product) {
      state.warehouses = state.warehouses.map((el) => {
        const hasProduct = el.products.find((e) => e.id === product.id);
        if (hasProduct) {
          if (el.id === warehouse) {
            return {
              ...el,
              products: el.products.map((prod) => {
                if (prod.id === product.id) {
                  return { ...prod, amount: (+prod.amount + +amount).toString() };
                }
                return prod;
              }),
            };
          }
          if (el.id === state.currentWarehouse?.id) {
            return {
              ...el,
              products: el.products
                .map((e) => (e.id === product.id ? { ...e, amount: (+e.amount - +amount).toString() } : e))
                .filter((e) => !!+e.amount),
            };
          }
          return el;
        }
        return { ...el, products: [...el.products, { id: product.id, name: product.name, amount }] };
      });
      if (state.currentWarehouse) {
        state.currentWarehouse = {
          ...state.currentWarehouse,
          products: state.currentWarehouse.products
            .map((prod) => (prod.id === product.id ? { ...prod, amount: (+prod.amount - +amount).toString() } : prod))
            .filter((prod) => !!+prod.amount),
        };
      }
    }
    const findWarehouse = state.warehouses.find((el) => el.id === warehouse);
    if (findWarehouse && product) {
      state.products = state.products.map((el) => {
        const hasWarehouse = el.warehouses.find((wh) => wh.id === findWarehouse.id);
        if (hasWarehouse) {
          return el.id === product?.id
            ? {
                ...el,
                warehouses: el.warehouses
                  .map((wh) => {
                    if (wh.id === findWarehouse.id) {
                      return { ...wh, amount: (+wh.amount + +amount).toString() };
                    }
                    if (wh.id === state.currentWarehouse?.id) {
                      return { ...wh, amount: (+wh.amount - +amount).toString() };
                    }
                    return wh;
                  })
                  .filter((e) => !!+e.amount),
              }
            : el;
        }
        return {
          ...el,
          warehouses: [
            ...el.warehouses
              .map((wh) =>
                wh.id === state.currentWarehouse?.id ? { ...wh, amount: (+wh.amount - +amount).toString() } : wh,
              )
              .filter((e) => !!+e.amount),
            { id: findWarehouse.id, name: findWarehouse.name, amount },
          ],
        };
      });
    }
  },
};
