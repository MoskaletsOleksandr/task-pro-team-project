import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  getCurrentBoardThunk,
  updateBoardByIdThunk,
} from 'redux/dashboards/thunks';
import sprite from '../../images/sprite.svg';
// import { useBoardData } from 'components/hooks';
import ChildButtonNewBoard from 'components/ButtonForForms/ChildButtonNewBoard';
import ButtonForForms from 'components/ButtonForForms/ButtonForForms';
import { toast } from 'react-hot-toast';

import {
  NewBoardTitle,
  IconTitle,
  IconWrap,
  Icon,
  BackgroundTitle,
  BgIcon,
  BackgroundItem,
  BackgroundImage,
  Input,
  BasicBackground,
} from './EditBoardForm.styled';

const EditBoardForm = ({ onClose, boardId }) => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm();
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');
  const backgrounds = useSelector(state => state.boards.backgrounds);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const board = useSelector(state => state.boards.currentBoard);

  useEffect(() => {
    dispatch(getCurrentBoardThunk(boardId));
  }, [dispatch, boardId]);

  useEffect(() => {
    setValue('title', board.title);
    setSelectedIcon(board.icon);
    setSelectedBackgroundId(board.background);
  }, [board.title, board.background, board.icon, setValue]);

  let timeoutId;
  const handleTitleChange = event => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      try {
        setValue('title', event.target.value);
      } catch {
        toast.error('Error changing title');
      }
    }, 1500);
  };

  const handleIconSelect = icon => {
    try {
      setSelectedIcon(icon);
      setValue('icon', icon);
    } catch {
      toast.error('Error occurred while selecting the icon');
    }
  };

  const handleBackgroundSelect = backgroundId => {
    try {
      setSelectedBackgroundId(backgroundId);
      setValue('selectedBackgroundId', backgroundId);
    } catch {
      toast.error('Error selecting background');
    }
  };

  const handleEditBoardForm = data => {
    const boardData = {
      id: board._id,
      body: {
        title: data.title,
        icon: selectedIcon, // Використовуємо вибрану іконку зі стану selectedIcon
        background: data.selectedBackgroundId
          ? data.selectedBackgroundId
          : selectedBackgroundId._id,
      },
    };

    dispatch(updateBoardByIdThunk(boardData))
      .unwrap()
      .then(response => {
        setValue('title', data.title);
        setValue('icon', '');
        setValue('selectedIcon', data.icon);
        setValue('selectedBackground', data.selectedBackgroundId);
        onClose();
      })
      .catch(error => {
        toast.error('No fields to update');
        console.error('Error:', error);
      });

    navigate(`${data.title.toLowerCase()}`);
  };

  const renderIcons = () => {
    const icons = [
      'icon-Project',
      'icon-star',
      'icon-loading',
      'icon-puzzle-piece',
      'icon-container',
      'icon-lightning-icon',
      'icon-colors',
      'icon-hexagon',
    ];

    return icons.map(icon => (
      <Icon
        key={icon}
        selected={selectedIcon === icon}
        onClick={() => handleIconSelect(icon)}
      >
        <use href={`${sprite}#${icon}`} />
      </Icon>
    ));
  };

  const renderBackgrounds = () => {
    const placeholder = (
      <BackgroundItem
        key="null-background"
        isActive={selectedBackgroundId === 'null-background'}
        onClick={() => handleBackgroundSelect('null-background')}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '28px',
            height: '28px',
          }}
        >
          <BasicBackground style={{ width: '16px', height: '16px' }}>
            <use href={sprite + '#null-background'}></use>
          </BasicBackground>
        </div>
      </BackgroundItem>
    );
    const backgroundItems = backgrounds.map(item => (
      <BackgroundItem
        key={item.previewURL}
        isActive={selectedBackgroundId === item._id}
        onClick={() => handleBackgroundSelect(item._id)}
      >
        <BackgroundImage src={item.previewURL} alt="Background" />
      </BackgroundItem>
    ));
    return [placeholder, ...backgroundItems];
  };

  return (
    <div>
      <NewBoardTitle>Edit Board</NewBoardTitle>

      <form onSubmit={handleSubmit(handleEditBoardForm)}>
        <Input
          id="newBoardInput"
          type="text"
          placeholder="Title"
          {...register('title', { required: 'Title is required' })}
          onChange={handleTitleChange}
        />
        <IconTitle>Icons</IconTitle>
        <IconWrap>{renderIcons()}</IconWrap>

        <BackgroundTitle>Background</BackgroundTitle>
        <BgIcon>{renderBackgrounds()}</BgIcon>
        <ButtonForForms
          textButton={() => <ChildButtonNewBoard textContent="Edit" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default EditBoardForm;
