import { Product } from 'src/@types/store/products';
import { Warehouses } from 'src/@types/store/warehouses';

export type StoreType = {
  products: Product[];
  currentProduct: null | Product;
  isOpenProductCardModal: boolean;
  warehouses: Warehouses[];
  currentWarehouse: Warehouses | null;
  isOpenWarehouseCardModal: boolean;
};
