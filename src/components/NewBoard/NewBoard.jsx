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
} from './NewBoard.styled';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { TitleSchema } from 'schemas';

const NewBoard = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(TitleSchema),
    mode: 'onChange',
  });
  const [selectedIcon, setSelectedIcon] = useState('');
  const backgrounds = useSelector(state => state.boards.backgrounds);
  const [selectedBackground, setSelectedBackground] = useState('');
  const dispatch = useDispatch();

  let timeoutId;

  const handleTitleChange = event => {
    const newValue = event.target.value.toString();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      try {
        setValue('title', newValue);
        toast.success('Title changed successfully');
      } catch {
        toast.error('Error changing title');
      }
    }, 1500);
  };

  const handleIconSelect = icon => {
    try {
      setSelectedIcon(icon);
      setValue('icon', icon);
      toast.success('Icon selected successfully');
    } catch {
      toast.error('Error occurred while selecting the icon');
    }
  };

  const handleBackgroundSelect = backgroundId => {
    try {
      setSelectedBackground(backgroundId);
      setValue('background', backgroundId);
      toast.success('Background selected successfully');
    } catch {
      toast.error('Error selecting background');
    }
  };

  const handleCreateBoard = data => {
    dispatch(createNewBoardThunk(data))
      .then(() => {
        toast.success('The board was created successfully');
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
        key="null-background"
        isActive={selectedBackground === 'null-background'}
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
          <svg style={{ width: '16px', height: '16px' }}>
            <use href={sprite + '#null-background'}></use>
          </svg>
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
          {...register('title')}
          onChange={handleTitleChange}
        />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <IconTitle>Icons</IconTitle>
        <IconWrap>{renderIcons()}</IconWrap>

        <BackgroundTitle>Background</BackgroundTitle>
        <BgIcon>{renderBackgrounds()}</BgIcon>

        <ButtonForForms
          textButton={() => <ChildButtonNewBoard textContent="Create" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewBoard;
