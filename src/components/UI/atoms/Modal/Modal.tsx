import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as Close } from 'src/assets/Close.svg';

import { BtnClose, ModalAway, ModalWrapper } from 'src/components/UI/atoms/Modal/styledComponents';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fullHeight?: boolean;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, fullHeight, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!isOpen) {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (isOpen) {
    return createPortal(
      <ModalAway>
        <ModalWrapper fullHeight={fullHeight}>{children}</ModalWrapper>
        <BtnClose type="button" onClick={onClose}>
          <Close width="40px" fill="#fff" />
        </BtnClose>
      </ModalAway>,
      document.body,
    );
  }
  return null;
};
