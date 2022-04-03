import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { warehouseSlice } from './slice';

const persistConfig = {
  key: 'pnk_root',
  storage,
};
const rootReducer = combineReducers({
  reducer: persistReducer(persistConfig, warehouseSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export const {
  addProduct,
  setCurrentProduct,
  deleteCurrentProduct,
  setIsOpenProductCardModal,
  deleteFromAllWarehouses,
  setIsOpenWarehouseCardModal,
  setCurrentWarehouse,
  addWarehouse,
  editProduct,
  redistributionProduct,
} = warehouseSlice.actions;
