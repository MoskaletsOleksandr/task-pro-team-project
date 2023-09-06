import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { createNewBoardThunk } from 'redux/dashboards/thunks';
import ButtonForForms from 'components/ButtonForForms/ButtonForForms';
import ChildButtonNewBoard from 'components/ButtonForForms/ChildButtonNewBoard';
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
  ErrorMessage,
  BasicBackground,
} from './NewBoard.styled';
import { useNavigate } from 'react-router-dom';

const NewBoard = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const [selectedIcon, setSelectedIcon] = useState('');
  const backgrounds = useSelector(state => state.boards.backgrounds);
  const [selectedBackground, setSelectedBackground] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let timeoutId;

  const handleTitleChange = event => {
    const newValue = event.target.value.toString();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      try {
        setValue('title', newValue);
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
      setSelectedBackground(backgroundId);
      setValue('background', backgroundId);
    } catch {
      toast.error('Error selecting background');
    }
  };

  const handleCreateBoard = data => {
    if (!data.title) {
      toast.error('Title is required');
      return;
    }

    if (!data.icon) {
      toast.error('Icon is required');
      return;
    }

    if (!data.background) {
      toast.error('Background is required');
      return;
    }

    dispatch(createNewBoardThunk(data))
      .then(() => {
        const normalizedTitle = data.title.toLowerCase().replace(/\s+/g, '-');
        navigate(normalizedTitle);
        setValue('title', '');
        setValue('icon', '');
        setValue('background', '');
        onClose();
      })
      .catch(error => {
        toast.error('Error occurred while creating the board');
      });
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
        key="null"
        isActive={selectedBackground === 'null'}
        onClick={() => handleBackgroundSelect('null')}
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
        isActive={selectedBackground === item._id}
        onClick={() => handleBackgroundSelect(item._id)}
      >
        <BackgroundImage src={item.previewURL} alt="Background" />
      </BackgroundItem>
    ));

    return [placeholder, ...backgroundItems];
  };

  return (
    <div>
      <NewBoardTitle>New Board</NewBoardTitle>
      <form onSubmit={handleSubmit(handleCreateBoard)}>
        <Input
          id="newBoardInput"
          type="text"
          placeholder="Title"
          {...register('title', { required: 'Title is required' })}
          onChange={handleTitleChange}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <IconTitle>Icons</IconTitle>
        <IconWrap>{renderIcons()}</IconWrap>
        <ErrorMessage>{errors.icon?.message}</ErrorMessage>

        <BackgroundTitle>Background</BackgroundTitle>
        <BgIcon>{renderBackgrounds()}</BgIcon>
        <ErrorMessage>{errors.background?.message}</ErrorMessage>

        <ButtonForForms
          textButton={() => <ChildButtonNewBoard textContent="Create" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewBoard;
