import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import sprite from '../../images/sprite.svg';
// import картинки для Backgrounds;
import { createNewBoardThunk } from 'redux/dashboards/thunks';
import ButtonForForms from 'components/ButtonForForms/ButtonForForms';
import ChildButtonNewBoard from 'components/ButtonForForms/ChildButtonNewBoard';

import {
  NewBoardTitle,
  IconTitle,
  IconWrap,
  Icon,
  BackgroundTitle,
  // BgIcon,
  // BackgroundItem,
  // BackgroundImage,
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
  // const [selectedBackgroundId, setSelectedBackgroundId] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = event => {
    setValue('title', event.target.value.toString());
  };

  const handleIconSelect = icon => {
    setSelectedIcon(icon);
    setValue('icon', icon);
  };

  // const handleBackgroundSelect = backgroundId => {
  //   setSelectedBackgroundId(backgroundId);
  //   setValue('background', backgroundId.toString());
  // };

  const handleCreateBoard = data => {
    dispatch(createNewBoardThunk(data)).then(() => {
      setValue('title', '');
      setValue('icon', '');
      setValue('background', '');
      onClose();
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

  // const renderBackgrounds = () => {
  //   return картинки.map(item => (
  //     <BackgroundItem
  //       key={item.id}
  //       isActive={selectedBackgroundId === item.id}
  //       onClick={() => handleBackgroundSelect(item.id)}
  //     >
  //       <BackgroundImage src={item.image} alt="Background" />
  //     </BackgroundItem>
  //   ));
  // };

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
        {/* <BgIcon>{renderBackgrounds()}</BgIcon> */}

        <ButtonForForms
          textButton={() => <ChildButtonNewBoard textContent="Create" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewBoard;
