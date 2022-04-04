import { StoreType } from 'src/@types/store';

export const initialState: StoreType = {
  products: [],
  currentProduct: null,
  isOpenProductCardModal: false,
  warehouses: [],
  currentWarehouse: null,
  isOpenWarehouseCardModal: false,
};
