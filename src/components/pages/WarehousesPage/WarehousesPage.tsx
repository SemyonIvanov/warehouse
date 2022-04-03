import { FC, useState } from 'react';

import { WarehousesPageWrapper } from 'src/components/pages/WarehousesPage/styledComponents';
import { Modal } from 'src/components/UI/atoms/Modal';
import { H2 } from 'src/components/UI/atoms/typography/styledComponents';

export const WarehousesPage: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <WarehousesPageWrapper>
      <H2>Список складов:</H2>
      <Modal fullHeight isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </WarehousesPageWrapper>
  );
};
