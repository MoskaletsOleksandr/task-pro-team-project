import React, { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import { BtnAddNewCard, SvgIconPlus, WrapSvg } from './AddNewCardBtn.styled';
import ModalAddEditCard from 'components/Modals/ModalAddEditCard/ModalAddEditCard';

const AddNewCard = ({ columnId }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <BtnAddNewCard type="submit" onClick={openModal}>
        <WrapSvg>
          <SvgIconPlus>
            <use href={sprite + '#icon-plus'}></use>
          </SvgIconPlus>
        </WrapSvg>
        Add another card
      </BtnAddNewCard>
      {showModal && (
        <ModalAddEditCard
          closeModal={() => setShowModal(false)}
          nameButton="add"
          columnId={columnId}
        />
      )}
    </>
  );
};

export default AddNewCard;
