import { FC } from 'react';

import { BtnAdd } from 'src/components/UI/atoms/Button/styledComponents';

interface ButtonProps {
  text?: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ text, onClick, children }) => (
  <BtnAdd type="button" onClick={onClick}>
    {text}
    {children}
  </BtnAdd>
);
