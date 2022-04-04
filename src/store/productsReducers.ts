import { PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/@types/store/products';

import { StoreType } from 'src/@types/store';

export const productsReducers = {
  setIsOpenProductCardModal(state: StoreType, action: PayloadAction<boolean>) {
    state.isOpenProductCardModal = action.payload;
  },
  addProduct(state: StoreType, action: PayloadAction<{ product: Product }>) {
    const { product } = action.payload;
    state.products = [...state.products, product];
    const { warehouses } = product;
    state.warehouses = state.warehouses.map((warehouse) => {
      const findWarehouse = warehouses.find((el) => el.id === warehouse.id);
      const findProduct = warehouse.products.find((el) => el.id === product.id);
      if (findWarehouse) {
        if (!findProduct) {
          return {
            ...warehouse,
            products: [...warehouse.products, { id: product.id, name: product.name, amount: findWarehouse.amount }],
          };
        }
        return {
          ...warehouse,
          products: [
            ...warehouse.products.map((el) =>
              el.id === product.id ? { ...el, amount: (+el.amount + +findWarehouse.amount).toString() } : el,
            ),
          ],
        };
      }
      return warehouse;
    });
  },
  setCurrentProduct(state: StoreType, action: PayloadAction<{ product: Product | null }>) {
    const { product } = action.payload;
    if (product) {
      const distributedProduction = +product.amount
        ? product?.warehouses.reduce((acc, curr) => +curr.amount + acc, 0)
        : 0;
      state.currentProduct = {
        ...product,
        warehouses: +product.amount ? product.warehouses : [],
        undistributedProduction: +product.amount - distributedProduction,
      };
    } else {
      state.currentProduct = product;
    }
  },
  editProduct(state: StoreType, action: PayloadAction<{ product: Product }>) {
    const { product } = action.payload;
    state.products = state.products.map((el) => (el.id === product.id ? product : el));
    state.warehouses = state.warehouses.map((warehouse) => {
      const findWarehouse = product.warehouses.find((el) => el.id === warehouse.id);
      const findProduct = warehouse.products.find((el) => el.id === product.id);
      if (findProduct && !findWarehouse) {
        return { ...warehouse, products: warehouse.products.filter((el) => el.id !== product.id) };
      }
      if (findWarehouse) {
        if (findProduct) {
          return {
            ...warehouse,
            products: warehouse.products.map((el) =>
              el.id === product.id ? { ...el, amount: findWarehouse.amount } : el,
            ),
          };
        }
        return {
          ...warehouse,
          products: [...warehouse.products, { id: product.id, name: product.name, amount: findWarehouse.amount }],
        };
      }
      return warehouse;
    });
  },
  deleteCurrentProduct(state: StoreType) {
    if (state.currentProduct) {
      state.products = state.products.filter((product) => product.id !== state.currentProduct?.id);
      state.warehouses = state.warehouses.map((warehouse) => ({
        ...warehouse,
        products: warehouse.products.filter((product) => product.id !== state.currentProduct?.id),
      }));
    }
    state.currentProduct = null;
  },
  deleteFromAllWarehouses(state: StoreType) {
    if (state.currentProduct) {
      const product = {
        ...state.currentProduct,
        warehouses: [],
        undistributedProduction: +state.currentProduct.amount,
      };
      state.warehouses = state.warehouses.map((warehouse) => ({
        ...warehouse,
        products: warehouse.products.filter((el) => el.id !== state.currentProduct?.id),
      }));
      state.currentProduct = product;
      state.products = state.products.map((el) => (el.id === product.id ? product : el));
    }
  },
};
