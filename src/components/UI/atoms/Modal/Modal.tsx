import { FC } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as Close } from 'src/assets/Close.svg';

import { BtnClose, ModalAway, ModalWrapper } from 'src/components/UI/atoms/Modal/styledComponents';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (isOpen) {
    return createPortal(
      <ModalAway>
        <ModalWrapper>{children}</ModalWrapper>
        <BtnClose type="button" onClick={onClose}>
          <Close width="40px" fill="#fff" />
        </BtnClose>
      </ModalAway>,
      document.body,
    );
  }
  return null;
};
