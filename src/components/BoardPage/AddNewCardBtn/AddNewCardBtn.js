import React from 'react';
import sprite from '../../../images/sprite.svg';
import { BtnAddNewCard, SvgIconPlus, WrapSvg } from './AddNewCardBtn.styled';

const AddNewCard = () => {
  const handleAddNewCard = e => {
    alert('Handel Button Add another card');
  };

  return (
    <BtnAddNewCard type="submit" onClick={handleAddNewCard}>
      <WrapSvg>
        <SvgIconPlus>
          <use href={sprite + '#icon-plus'}></use>
        </SvgIconPlus>
      </WrapSvg>
      Add another card
    </BtnAddNewCard>
  );
};

export default AddNewCard;
