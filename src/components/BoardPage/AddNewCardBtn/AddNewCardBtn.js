import React from 'react';
import sprite from '../../../images/sprite.svg';
import { BtnAddNewCard, SvgIconPlus, WrapSvg } from './AddNewCardBtn.styled';

const AddNewCard = ({ openModal, setNameButton }) => {
  
  return (
    <>
      <BtnAddNewCard
        type="button"
        name="addNewCard"
        onClick={e => {
          openModal();
          setNameButton(e.target.name);
        }}
      >
        <WrapSvg>
          <SvgIconPlus>
            <use href={sprite + '#icon-plus'}></use>
          </SvgIconPlus>
        </WrapSvg>
        Add another card
      </BtnAddNewCard>      
    </>
  );
};

export default AddNewCard;
