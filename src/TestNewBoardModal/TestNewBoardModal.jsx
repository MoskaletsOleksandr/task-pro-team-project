import Modal from 'components/Modal';
import ModalTitle from 'components/ModalTitle';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewBoardThunk } from 'redux/dashboards/thunks';

export const TestNewBoardModal = ({ closeModal, isOpen }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleCreateBoard = () => {
    dispatch(
      createNewBoardThunk({
        title: title,
        icon: '1111',
        background: '11111',
      })
    );
  };
  const handleTitleChange = event => {
    setTitle(event.target.value);
  };
  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      <ModalTitle>New board</ModalTitle>
      <input onChange={handleTitleChange} value={title} />
      <button onClick={handleCreateBoard}>Create test board</button>
    </Modal>
  );
};
