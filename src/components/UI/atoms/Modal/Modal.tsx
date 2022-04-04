import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as Close } from 'src/assets/Close.svg';
import { useMediaQuery } from 'src/hooks';

import { BtnClose, ModalAway, ModalWrapper } from 'src/components/UI/atoms/Modal/styledComponents';

import { MediaQueriesSizes } from 'src/constants/size';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  fullHeight?: boolean;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, fullHeight, children }) => {
  const isTablet = useMediaQuery(`(${MediaQueriesSizes.tablet})`);

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
          <Close width="40px" fill={isTablet ? '#000' : '#fff'} />
        </BtnClose>
      </ModalAway>,
      document.body,
    );
  }
  return null;
};
