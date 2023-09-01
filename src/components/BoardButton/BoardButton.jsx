import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
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
import { getCurrentBoardThunk } from 'redux/dashboards/thunks';
import { deleteBoardByIdThunk } from 'redux/dashboards/thunks';

function BoardButton({ name, id, icon }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (name.toString().toLowerCase() !== params.boardName) {
      setActive(false);
    }
    if (name.toString().toLowerCase() === params.boardName) {
      setActive(true);
    }
  }, [dispatch, params.boardName, name]);

  const handleActive = () => {
    setActive(true);
    dispatch(getCurrentBoardThunk(`${id}`));
    navigate(`${name.toLowerCase()}`);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = id => {
    dispatch(deleteBoardByIdThunk(id));
    setClick(true);
  };
  useEffect(() => {
    if (click) {
      navigate('/home');
    }
  }, [click, navigate]);

  return (
    <>
      <Wrapper className={active ? 'active' : ''} onClick={handleActive}>
        <Svg width="18px" height="18px">
          <use href={sprite + `#${icon}`}></use>
        </Svg>
        <Title>{name}</Title>
        {active && (
          <IconsWrapper>
            <IconButton type="button" onClick={openModal}>
              <ActiveSvg width="18px" height="18px">
                <use href={sprite + '#icon-pencil-01'}></use>
              </ActiveSvg>
            </IconButton>
            <IconButton type="button" onClick={() => handleDelete(id)}>
              <ActiveSvg width="16px" height="16px">
                <use href={sprite + '#icon-trash'}></use>
              </ActiveSvg>
            </IconButton>
          </IconsWrapper>
        )}
      </Wrapper>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditBoardForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default BoardButton;