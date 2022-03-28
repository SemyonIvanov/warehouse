import { MainPage } from 'src/components/pages/MainPage';
import { WarehousesPage } from 'src/components/pages/WarehousesPage';

export const routes = [
  { path: '/products', Page: MainPage, name: 'Продукция' },
  { path: '/warehouses', Page: WarehousesPage, name: 'Склады' },
];
