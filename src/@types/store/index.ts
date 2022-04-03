import { Product } from 'src/@types/products';

export type StoreType = { products: Product[]; currentProduct: null | Product; warehouses: any[] };
