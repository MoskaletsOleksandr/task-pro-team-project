import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewBoardThunk } from 'redux/dashboards/thunks';
import Modal from 'components/Modal';
import ModalTitle from 'components/ModalTitle';
import sprite from '../images/sprite.svg';
import { toast } from 'react-hot-toast';

export const TestNewBoardModal = ({ closeModal, isOpen }) => {
  const [title, setTitle] = useState('');
  const backgrounds = useSelector(state => state.boards.backgrounds);
  const [selectedBackground, setSelectedBackground] = useState('');
  const dispatch = useDispatch();

  // const handleCreateBoard = () => {
  //   dispatch(
  //     createNewBoardThunk({
  //       title: title,
  //       icon: 'selectedIcon',
  //       background: selectedBackground,
  //     })
  //   );

  // };

  const handleCreateBoard = async () => {
    try {
      await dispatch(
        createNewBoardThunk({
          title: title,
          icon: 'selectedIcon',
          background: selectedBackground,
        })
      );
      toast.success('Board created successfully');
      closeModal();
    } catch (error) {
      toast.error('Error creating board');
    }
  };

  // const handleTitleChange = event => {
  //   setTitle(event.target.value);
  // };

  const handleTitleChange = event => {
    try {
      setTitle(event.target.value);
      toast.success('Title changed successfully');
    } catch (error) {
      toast.error('Error changing title');
    }
  };

  // const handleBackgroundSelect = iconId => {
  //   setSelectedBackground(iconId);
  // };

  const handleBackgroundSelect = iconId => {
    try {
      setSelectedBackground(iconId);
      toast.success('Background selected successfully');
    } catch (error) {
      toast.error('Error selecting background');
    }
  };

  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      <ModalTitle>New board</ModalTitle>
      <input onChange={handleTitleChange} value={title} />
      <div style={{ display: 'flex' }}>
        <label>
          <input
            type="radio"
            value={'null'}
            checked={selectedBackground === 'null'}
            onChange={() => handleBackgroundSelect('null')}
          />
          <span>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '28px',
                height: '28px',
              }}
            >
              <svg style={{ width: '16px', height: '16px' }}>
                <use href={sprite + '#null-background'}></use>
              </svg>
            </div>
          </span>
        </label>
        {backgrounds.map(background => (
          <label key={background.previewURL}>
            <input
              type="radio"
              value={background._id}
              checked={selectedBackground === background._id}
              onChange={() => handleBackgroundSelect(background._id)}
            />
            <span>
              <svg
                width={12}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28 28"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
              <img src={background.previewURL} alt={`Icon ${background._id}`} />
            </span>
          </label>
        ))}
      </div>
      <button onClick={handleCreateBoard}>Create test board</button>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};
