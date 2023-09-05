import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import Modal from 'components/Modal/Modal';
import EditBoardForm from 'components/EditBoardForm/EditBoardForm';

import {
  Svg,
  Wrapper,
  Title,
  ActiveSvg,
  IconsWrapper,
  IconButton,
} from './BoardButton.styled';
import {
  deleteBoardByIdThunk,
  getCurrentBoardThunk,
} from 'redux/dashboards/thunks';

function BoardButton({ name, id, icon, active, onClick, onEdit, onDelete, onClose }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    setModalOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleActive = () => {
    if (onClick) {
      onClick(id);
    }
    const normalizeName = name.toLowerCase().replace(/[\s/]+/g, '-');
    dispatch(getCurrentBoardThunk(`${id}`));
    if (normalizeName && onClose) {
      onClose(normalizeName);
    }
  };

  const handleEditBoard = (e, boardId) => {
    e.stopPropagation();
    setModalOpen(true);
    if (onEdit) {
      onEdit(boardId);
    }
  };

  const handleDeleteBoard = (e, boardId) => {
    e.stopPropagation();
    dispatch(deleteBoardByIdThunk(boardId));
    if (onDelete) {
      onDelete(boardId);
    }
  };


  return (
    <>
      <Wrapper className={active ? 'active' : ''} onClick={handleActive}>
        <Svg width="18px" height="18px">
          <use href={`${sprite}#${icon}`}></use>
        </Svg>
        <Title>{name}</Title>
        {active && (
          <IconsWrapper>
            <IconButton type="button" onClick={e => handleEditBoard(e, id)}>
              <ActiveSvg width="16px" height="16px">
                <use href={sprite + '#icon-pencil-01'}></use>
              </ActiveSvg>
            </IconButton>
            <IconButton type="button" onClick={e => handleDeleteBoard(e, id)}>
              <ActiveSvg width="16px" height="16px">
                <use href={sprite + '#icon-trash'}></use>
              </ActiveSvg>
            </IconButton>
          </IconsWrapper>
        )}
      </Wrapper>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditBoardForm onClose={closeModal} boardId={id} />
        </Modal>
      )}
    </>
  );
}

export default BoardButton;
