import { FC, SVGProps } from 'react';

export type Warehouses = {
  id: number;
  name: string;
  picture: FC<SVGProps<SVGSVGElement>>;
  products: { id: number; name: string; amount: string }[];
};
