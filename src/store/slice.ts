import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/@types/products';
import { StoreType } from 'src/@types/store';
import { ReactComponent as WarehouseImg } from 'src/assets/warehouse-svgrepo-com.svg';

const initialState: StoreType = {
  products: [
    {
      id: 1,
      name: 'Product №1',
      amount: '1',
      warehouses: [{ id: 1, name: 'Warehouse №1', amount: '1' }],
      undistributedProduction: 0,
    },
    {
      id: 2,
      name: 'Product №2',
      amount: '2',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '1' },
        { id: 2, name: 'Warehouse №2', amount: '1' },
      ],
      undistributedProduction: 0,
    },
    {
      id: 3,
      name: 'Product №3',
      amount: '3',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '1' },
        { id: 2, name: 'Warehouse №2', amount: '2' },
      ],
      undistributedProduction: 0,
    },
    {
      id: 4,
      name: 'Product №4',
      amount: '4',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '2' },
        { id: 2, name: 'Warehouse №2', amount: '2' },
      ],
      undistributedProduction: 0,
    },
    {
      id: 5,
      name: 'Product №5',
      amount: '5',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '3' },
        { id: 2, name: 'Warehouse №2', amount: '2' },
      ],
      undistributedProduction: 0,
    },
    {
      id: 6,
      name: 'Product №6',
      amount: '6',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '3' },
        { id: 2, name: 'Warehouse №2', amount: '3' },
      ],
      undistributedProduction: 0,
    },
    {
      id: 7,
      name: 'Product №7',
      amount: '7',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '4' },
        { id: 2, name: 'Warehouse №2', amount: '3' },
      ],
      undistributedProduction: 0,
    },
    {
      id: 8,
      name: 'Product №8',
      amount: '8',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '4' },
        { id: 2, name: 'Warehouse №2', amount: '4' },
      ],
      undistributedProduction: 0,
    },
    {
      id: 9,
      name: 'Product №9',
      amount: '9',
      warehouses: [
        { id: 1, name: 'Warehouse №1', amount: '5' },
        { id: 2, name: 'Warehouse №2', amount: '4' },
      ],
      undistributedProduction: 0,
    },
  ],
  currentProduct: null,
  warehouses: [
    {
      id: 1,
      name: 'Warehouse №1',
      picture: WarehouseImg,
      products: [{ id: 1, name: 'Product№1', amount: '1' }],
    },
    {
      id: 2,
      name: 'Warehouse №2',
      picture: WarehouseImg,
      products: [{ id: 2, name: 'Product№2', amount: '2' }],
    },
    {
      id: 3,
      name: 'Warehouse №3',
      picture: WarehouseImg,
      products: [{ id: 3, name: 'Product№3', amount: '3' }],
    },
    {
      id: 4,
      name: 'Warehouse №4',
      picture: WarehouseImg,
      products: [{ id: 4, name: 'Product№4', amount: '4' }],
    },
    {
      id: 5,
      name: 'Warehouse №5',
      picture: WarehouseImg,
      products: [{ id: 5, name: 'Product№5', amount: '5' }],
    },
    {
      id: 6,
      name: 'Warehouse №6',
      picture: WarehouseImg,
      products: [{ id: 6, name: 'Product№6', amount: '6' }],
    },
    {
      id: 7,
      name: 'Warehouse №7',
      picture: WarehouseImg,
      products: [{ id: 7, name: 'Product№7', amount: '7' }],
    },
  ],
};

const mainTableSlice = createSlice({
  name: 'mainTable',
  initialState,
  reducers: {
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
  },
});

export default mainTableSlice.reducer;

export const { addProduct, setCurrentProduct } = mainTableSlice.actions;
