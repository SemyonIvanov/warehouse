import { FC } from 'react';

import { Button } from 'src/components/UI/atoms/Button';

import { ActionBtn, ActionBtnBorderTop, ActionBtnWrapper } from './styledComponents';

interface ModalButtonProps {
  text?: string;
  onClick: () => void;
}

export const ModalButton: FC<ModalButtonProps> = ({ text, onClick, children }) => (
  <ActionBtnWrapper>
    <ActionBtn>
      <ActionBtnBorderTop />
      <Button text={text} onClick={onClick}>
        {children}
      </Button>
    </ActionBtn>
  </ActionBtnWrapper>
);
