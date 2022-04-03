import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';
import { productsReducers } from './productsReducers';
import { warehousesReducers } from './warehousesReducers';

export const warehouseSlice = createSlice({
  name: 'warehouses',
  initialState,
  reducers: {
    ...productsReducers,
    ...warehousesReducers,
  },
});
