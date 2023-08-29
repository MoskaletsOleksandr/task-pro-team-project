import React from 'react';
import { PopUpItemWrapper } from './PopUp.styled';
import { WhiteIcon } from '../Card/Card.styled';


const CustomPopUpItem = ({ text, iconHref }) => {
  return (
    <PopUpItemWrapper>
      <span>{text}</span>
      <WhiteIcon className="icon-search">
        <use href={iconHref}></use>
      </WhiteIcon>
    </PopUpItemWrapper>
  );
};

export default CustomPopUpItem;
