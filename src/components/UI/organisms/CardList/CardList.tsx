import { Dispatch, FC, SetStateAction } from 'react';

import { H3 } from 'src/components/UI/atoms/typography/styledComponents';
import { Card } from 'src/components/UI/molecules/ProductList/styledComponents';

import { AddNewCard, ListWrapper } from './styledComponents';

interface CardListProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CardList: FC<CardListProps> = ({ setOpen, children }) => (
  <ListWrapper>
    <Card onClick={() => setOpen(true)}>
      <H3>Добавить новый</H3>
      <AddNewCard />
    </Card>
    {children}
  </ListWrapper>
);
