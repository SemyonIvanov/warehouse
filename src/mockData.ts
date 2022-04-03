import { Warehouses } from 'src/@types/warehouses';
import { ReactComponent as ProductImg } from 'src/assets/ad_product_icon_155850.svg';
import { ReactComponent as WarehouseImg } from 'src/assets/warehouse-svgrepo-com.svg';

export const mockProducts: any = [
  {
    id: 1,
    name: 'Product №1',
    picture: ProductImg,
    amount: '1',
    warehouses: [{ id: 1, name: 'Warehouse №1', amount: '1' }],
  },
  {
    id: 2,
    name: 'Product №2',
    amount: '2',
    picture: ProductImg,
    warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '1' },
      { id: 2, name: 'Warehouse №2', amount: '1' },
    ],
  },
  {
    id: 3,
    name: 'Product №3',
    amount: '3',
    picture: ProductImg,
    warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '1' },
      { id: 2, name: 'Warehouse №2', amount: '2' },
    ],
  },
  {
    id: 4,
    name: 'Product №4',
    amount: '4',
    picture: ProductImg,
    warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '2' },
      { id: 2, name: 'Warehouse №2', amount: '2' },
    ],
  },
  {
    id: 5,
    name: 'Product №5',
    amount: '5',
    picture: ProductImg,
    warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '3' },
      { id: 2, name: 'Warehouse №2', amount: '2' },
    ],
  },
  {
    id: 6,
    name: 'Product №6',
    amount: '6',
    picture: ProductImg,
    warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '3' },
      { id: 2, name: 'Warehouse №2', amount: '3' },
    ],
  },
  {
    id: 7,
    name: 'Product №7',
    amount: '7',
    picture: ProductImg,
    warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '4' },
      { id: 2, name: 'Warehouse №2', amount: '3' },
    ],
  },
  {
    id: 8,
    name: 'Product №8',
    amount: '8',
    picture: ProductImg,
    Warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '4' },
      { id: 2, name: 'Warehouse №2', amount: '4' },
    ],
  },
  {
    id: 9,
    name: 'Product №9',
    amount: '9',
    picture: ProductImg,
    warehouses: [
      { id: 1, name: 'Warehouse №1', amount: '5' },
      { id: 2, name: 'Warehouse №2', amount: '4' },
    ],
  },
];

export const mockWarehouses: Warehouses[] = [
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
];
