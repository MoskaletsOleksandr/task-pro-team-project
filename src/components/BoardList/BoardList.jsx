import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBoardButton from 'components/AddBoardButton';
import { Title } from './BoardList.styled';
import {
  deleteBoardByIdThunk,
  getAllBoardsThunk,
  getCurrentBoardThunk,
} from 'redux/dashboards/thunks';
import { useNavigate } from 'react-router-dom';

import EditBoardForm from 'components/EditBoardForm/EditBoardForm';
import Modal from 'components/Modal/Modal';

function BoardList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const boards = useSelector(state => state.boards.boards);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  useEffect(() => {
    dispatch(getAllBoardsThunk());
  }, [dispatch]);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOpenBoard = (id, title) => {
    dispatch(getCurrentBoardThunk(id));

    const normalizedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(normalizedTitle);
  };

  const handleEditBoard = (e, boardId) => {
    e.stopPropagation();
    console.log('handleEditBoard', boardId);
    setSelectedBoardId(boardId);
    setModalOpen(true);
  };

  const handleDeleteBoard = (e, boardId) => {
    e.stopPropagation();
    dispatch(deleteBoardByIdThunk(boardId));
  };

  return (
    <>
      <Title>My boards</Title>
      <AddBoardButton />
      {boards.map(({ _id, title }) => (
        <div
          key={_id}
          onClick={() => handleOpenBoard(_id, title)}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <span style={{ color: 'white' }}>{title}</span>
          <div>
            <button onClick={e => handleEditBoard(e, _id)}>Edit</button>
            <button onClick={e => handleDeleteBoard(e, _id)}>Delete</button>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <EditBoardForm onClose={closeModal} boardId={selectedBoardId} />
        </Modal>
      )}
    </>
  );
}

export default BoardList;
