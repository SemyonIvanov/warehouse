export type Warehouses = {
  id: number;
  name: string;
  products: { id: number; name: string; amount: string }[];
};
