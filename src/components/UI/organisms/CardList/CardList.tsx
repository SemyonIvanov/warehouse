import { Dispatch, FC, SetStateAction } from 'react';

import { H3, Text } from 'src/components/UI/atoms/typography/styledComponents';

import { AddNewCard, Card, ListWrapper } from './styledComponents';

interface CardListProps {
  list: { id: number; name: string; amount: string }[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CardList: FC<CardListProps> = ({ list, setOpen }) => (
  <ListWrapper>
    <Card onClick={() => setOpen(true)}>
      <H3>Добавить новый</H3>
      <AddNewCard />
    </Card>
    {list.map((el) => (
      <Card key={el.id}>
        <H3>{el.name}</H3>
        <Text>{`${el.amount}шт`}</Text>
      </Card>
    ))}
  </ListWrapper>
);
