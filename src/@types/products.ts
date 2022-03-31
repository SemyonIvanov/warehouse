export type Product = {
  id: number;
  name: string;
  amount: string;
  warehouses: { id: number; name: string; amount: string }[];
  undistributedProduction?: number;
};
