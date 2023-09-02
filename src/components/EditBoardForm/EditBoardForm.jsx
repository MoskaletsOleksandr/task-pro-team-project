import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updateBoardByIdThunk } from 'redux/dashboards/thunks';
import sprite from '../../images/sprite.svg';
// картинки
// import { useBoardData } from 'components/hooks';
import ChildButtonNewBoard from 'components/ButtonForForms/ChildButtonNewBoard';
import ButtonForForms from 'components/ButtonForForms/ButtonForForms';

import {
  NewBoardTitle,
  IconTitle,
  IconWrap,
  Icon,
  // BackgroundTitle,
  // BgIcon,
  // BackgroundItem,
  // BackgroundImage,
  Input,
} from './EditBoardForm.styled';

const EditBoardForm = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedIcon, setSelectedIcon] = useState('');
  // const [selectedBackgroundId, setSelectedBackgroundId] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const board = useSelector(state => state.boards.currentBoard);
  console.log(board);

  useEffect(() => {
    setValue('title', board.title);
    // setSelectedIcon(board.icon);
    // setSelectedBackgroundId(board.background);
  }, [board.title, setValue]);
  // board.background, board.icon,

  const handleTitleChange = event => {
    setValue('title', event.target.value);
  };

  const handleIconSelect = icon => {
    // console.log(icon);
    setSelectedIcon(icon);
    setValue('icon', icon);
  };

  // const handleBackgroundSelect = backgroundId => {
  //   setSelectedBackgroundId(backgroundId);
  //   setValue('selectedBackgroundId', backgroundId);
  // };

  const handleEditBoardForm = data => {
    console.log(data);
    const boardData = {
      id: board._id,
      body: {
        title: data.title,
        icon: data.icon,
        // background: data.selectedBackgroundId,
      },
    };

    dispatch(updateBoardByIdThunk(boardData))
      .unwrap()
      .then(response => {
        setValue('title', data.title);
        setValue('icon', '');
        setValue('selectedIcon', data.icon);
        // setValue('selectedBackgroundId', data.selectedBackgroundId);
        onClose();
      })
      .catch(error => {
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

  // const renderBackgrounds = () => {
  //   return data.map(item => (
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
      <NewBoardTitle>Edit Board</NewBoardTitle>

      <form onSubmit={handleSubmit(handleEditBoardForm)}>
        <Input
          id="newBoardInput"
          type="text"
          placeholder="Title"
          {...register('title')}
          onChange={handleTitleChange}
        />
        <IconTitle>Icons</IconTitle>
        <IconWrap>{renderIcons()}</IconWrap>
        {/* 
        <BackgroundTitle>Background</BackgroundTitle> 
         <BgIcon>{renderBackgrounds()}</BgIcon>  */}
        <ButtonForForms
          textButton={<ChildButtonNewBoard textContent="Edit" />}
          type="submit"
        />
      </form>
    </div>
  );
};

export default EditBoardForm;
