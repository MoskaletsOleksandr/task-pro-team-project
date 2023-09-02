import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteColumnByIdThunk,
  updateColumnByIdThunk,
} from 'redux/dashboards/thunks';
// import ModalAddEditCard from 'components/Modals/ModalAddEditCard/ModalAddEditCard';

const Column = ({ title, tasks, columnId, idTask }) => {
  const [showTestModal, setShowTestModal] = useState(false);
  const [openTaskId, setOpenTaskId] = useState(null);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const boardId = useSelector(state => state.boards.currentBoard._id);

  console.log(inputValue);

  const toggleModal = () => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
    setInputValue(title);
  };

  const togglePopUpMenu = clickedTaskId => {
    if (clickedTaskId === openTaskId) {
      setOpenTaskId(null);
    } else {
      setOpenTaskId(clickedTaskId);
    }
  };

  const handleDeleteColumn = () => {
    dispatch(
      deleteColumnByIdThunk({
        boardId,
        columnId,
      })
    );
  };

  return (
    <>
      <ColumnContainer>
        <TitleIcon>
          <Title>{title}</Title>
          <Icons>
            <WhiteIcon
              className="icon-search"
              type="submit"
              onClick={toggleModal}
            >
              <use href={sprite + '#icon-pencil-01'}></use>
            </WhiteIcon>
            <WhiteIcon className="icon-search" onClick={handleDeleteColumn}>
              <use href={sprite + '#icon-trash'}></use>
            </WhiteIcon>
          </Icons>
        </TitleIcon>

        <ScrollContainer>
          <ScrollContent>
            {tasks.map(task => {
              return (
                <Card
                  key={task._id}
                  task={task}
                  columnId={columnId}
                  togglePopUpMenu={togglePopUpMenu}
                  isPopupOpen={openTaskId === task._id}
                  idTask={task._id}
                />
              );
            })}
          </ScrollContent>
        </ScrollContainer>
        <AddNewCard columnId={columnId} />

        <ColumnModal
          closeModal={toggleModal}
          isOpen={showTestModal}
          name={'Edit column'}
          inputPlaceholder={title}
          actionThunk={updateColumnByIdThunk}
          actionPayload={value => ({ columnId, body: { title: value } })}
          buttonText={'Add'}
          initialValue={title}
        />
      </ColumnContainer>
    </>
  );
};

export default Column;
