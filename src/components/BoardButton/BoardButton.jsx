import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
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
  getAllBoardsThunk,
  getCurrentBoardThunk,
} from 'redux/dashboards/thunks';

function BoardButton({ name, id, icon }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  // const params = useParams();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [click] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  const closeModal = () => {
    setModalOpen(false);
  };
  // console.log(id);
  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);
  //   if (name.toString().toLowerCase() !== params.boardName) {
  //     setActive(false);
  //   }
  //   if (name.toString().toLowerCase() === params.boardName) {
  //     setActive(true);
  //   }
  // }, [dispatch, params.boardName, name]);

  const handleActive = () => {
    setActive(true);
    dispatch(getCurrentBoardThunk(`${id}`));
    navigate(`${name.toLowerCase()}`);
  };

  // const handleDelete = id => {
  //   dispatch(deleteBoardByIdThunk(id));
  //   setClick(true);
  // };
  // const handleOpenBoard = (id, title) => {
  //   dispatch(getCurrentBoardThunk(id));
  // const normalizedTitle = title.toLowerCase().replace(/\s+/g, '-');
  // navigate(normalizedTitle);
  // };
  const handleEditBoard = (e, boardId) => {
    e.stopPropagation();
    // console.log('handleEditBoard');
    setModalOpen(true);
    // Зупиняє подальше поширення кліку до обгортки
    // Додайте код для редагування дошки з ID `boardId`
  };

  const handleDeleteBoard = (e, boardId) => {
    e.stopPropagation();
    dispatch(deleteBoardByIdThunk(boardId));
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
        <Title style={{ color: 'white' }}>{name}</Title>
        {active && (
          <IconsWrapper>
            <IconButton type="button" onClick={e => handleEditBoard(e, id)}>
              <ActiveSvg width="16px" height="16px">
                <use href={sprite + '#icon-pencil-01'}></use>
              </ActiveSvg>
              Edit
            </IconButton>
            <IconButton type="button" onClick={e => handleDeleteBoard(e, id)}>
              <ActiveSvg width="16px" height="16px">
                <use href={sprite + '#icon-trash'}></use>
              </ActiveSvg>
              Delete
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
