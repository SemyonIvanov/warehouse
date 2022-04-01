import { FC, SVGProps } from 'react';

export type Product = {
  id: number;
  name: string;
  amount: string;
  picture: FC<SVGProps<SVGSVGElement>>;
  warehouses: { id: number; name: string; amount: string }[];
  undistributedProduction?: number;
};
