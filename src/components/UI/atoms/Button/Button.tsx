import { FC } from 'react';

import { Btn } from './styledComponents';

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ text, disabled, onClick, children }) => (
  <Btn type="button" onClick={onClick} disabled={disabled}>
    {text}
    {children}
  </Btn>
);
