import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import mainTableSlice from './slice';

const persistConfig = {
  key: 'pnk_root',
  storage,
};
const rootReducer = combineReducers({
  reducer: persistReducer(persistConfig, mainTableSlice),
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
