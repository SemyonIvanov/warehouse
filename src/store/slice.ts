import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/@types/store/products';

import { StoreType } from 'src/@types/store';

const initialState: StoreType = {
  products: [],
  currentProduct: null,
  isOpenProductCardModal: false,
  warehouses: [
    {
      id: 1,
      name: 'Warehouse №1',
      products: [{ id: 1, name: 'Product№1', amount: '1' }],
    },
    {
      id: 2,
      name: 'Warehouse №2',
      products: [{ id: 2, name: 'Product№2', amount: '2' }],
    },
    {
      id: 3,
      name: 'Warehouse №3',
      products: [{ id: 3, name: 'Product№3', amount: '3' }],
    },
    {
      id: 4,
      name: 'Warehouse №4',
      products: [{ id: 4, name: 'Product№4', amount: '4' }],
    },
    {
      id: 5,
      name: 'Warehouse №5',
      products: [{ id: 5, name: 'Product№5', amount: '5' }],
    },
    {
      id: 6,
      name: 'Warehouse №6',
      products: [{ id: 6, name: 'Product№6', amount: '6' }],
    },
    {
      id: 7,
      name: 'Warehouse №7',
      products: [{ id: 7, name: 'Product№7', amount: '7' }],
    },
  ],
};

export const warehouseSlice = createSlice({
  name: 'warehouses',
  initialState,
  reducers: {
    setIsOpenProductCardModal(state, action: PayloadAction<boolean>) {
      state.isOpenProductCardModal = action.payload;
    },
    addProduct(state, action: PayloadAction<{ product: Product }>) {
      const { product } = action.payload;
      state.products = [...state.products, product];
    },
    setCurrentProduct(state, action: PayloadAction<{ product: Product | null }>) {
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
    deleteCurrentProduct(state) {
      if (state.currentProduct) {
        state.products = state.products.filter((product) => product.id !== state.currentProduct?.id);
      }
      state.currentProduct = null;
    },
    deleteFromAllWarehouses(state) {
      if (state.currentProduct) {
        const product = {
          ...state.currentProduct,
          warehouses: [],
          undistributedProduction: +state.currentProduct.amount,
        };
        state.currentProduct = product;
        state.products = state.products.map((el) => (el.id === product.id ? product : el));
      }
    },
  },
});
