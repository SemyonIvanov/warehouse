import { FC } from 'react';

import { Btn } from './styledComponents';

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  onClick: () => void;
  isCancel?: boolean;
}

export const Button: FC<ButtonProps> = ({ text, disabled, onClick, isCancel, children }) => (
  <Btn type="button" onClick={onClick} disabled={disabled} isCancel={isCancel}>
    {text}
    {children}
  </Btn>
);
