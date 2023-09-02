import React from 'react';
import { PopUpItemWrapper } from './PopUp.styled';
import { WhiteIcon } from '../Card/Card.styled';

const CustomPopUpItem = ({ text, iconHref, columnId, handleMoveTask }) => {
  return (
    <PopUpItemWrapper
      onClick={() => {
        handleMoveTask(columnId);
      }}
    >
      <span>{text}</span>
      <WhiteIcon className="icon-search">
        <use href={iconHref}></use>
      </WhiteIcon>
    </PopUpItemWrapper>
  );
};

export default CustomPopUpItem;
