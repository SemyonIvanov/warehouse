import { Dispatch, FC, SetStateAction } from 'react';

import { H3 } from 'src/components/UI/atoms/typography/styledComponents';

import { AddNewCard, Card, ListWrapper } from './styledComponents';

interface CardListProps {
  list: { id: number; name: string }[];
  addNewEl: Dispatch<SetStateAction<boolean>>;
}

export const CardList: FC<CardListProps> = ({ list, addNewEl }) => (
  <ListWrapper>
    <Card onClick={() => addNewEl(true)}>
      <H3>Добавить новый</H3>
      <AddNewCard />
    </Card>
    {list.map((el) => (
      <Card key={el.id}>
        <H3>{el.name}</H3>
      </Card>
    ))}
  </ListWrapper>
);
