import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import sprite from '../../../images/sprite.svg';
import {
  ScrollContainer,
  ScrollContent,
  TitleIcon,
  Title,
  ColumnContainer,
  WhiteIcon,
  Icons,
} from './Column.styled';
import AddNewCard from 'components/BoardPage/AddNewCardBtn/AddNewCardBtn';
import ColumnModal from 'components/BoardPage/ColumnModal/ColumnModal';

const Column = ({ title, tasks, newColumnTitle }) => {
  const [showTestModal, setShowTestModal] = useState(false);

  const toggleModal = e => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
  };


  return (
    <ColumnContainer>
      <TitleIcon>
        <Title>{newColumnTitle ? newColumnTitle : title}</Title>
        <Icons>
          <WhiteIcon className="icon-search" type="submit" onClick={toggleModal} >
            <use href={sprite + '#icon-pencil-01'}></use>
          </WhiteIcon>
          <WhiteIcon className="icon-search">
            <use href={sprite + '#icon-trash'}></use>
          </WhiteIcon>
        </Icons>
      </TitleIcon>

      <ScrollContainer>
        <ScrollContent>
          {tasks.map(task => (
            <Card key={task._id} taskId={task._id} />
          ))}
        </ScrollContent>
      </ScrollContainer>
      <AddNewCard />
      <ColumnModal
        closeModal={toggleModal}
        isOpen={showTestModal}
        name="Edit Column" />
    </ColumnContainer>
  );
};

export default Column;
