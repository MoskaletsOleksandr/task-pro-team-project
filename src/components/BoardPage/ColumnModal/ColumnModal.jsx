import Modal from '../../../components/Modal/Modal';
import React, { useState } from 'react';
import { Input, BtnAdd, WrapSvg, SvgIconPlus } from './ColumnModal.styled';
import sprite from '../../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';


const ColumnModal = ({ closeModal, isOpen, name, inputPlaceholder, actionThunk, actionPayload, buttonText, initialValue }) => {
  const [inputValue, setInputValue] = useState(initialValue || ''); // Use initialValue if provided
  const dispatch = useDispatch();
  const boardId = useSelector(state => state.boards.currentBoard._id);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.error('Column name can not be empty');
    } else {
      dispatch(
        actionThunk({
          boardId,
          ...actionPayload(inputValue),
        })
      );
      setInputValue('');
      closeModal();
    }
  }

  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      <h2>{name}</h2>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={inputPlaceholder}
      />

      <BtnAdd type="submit" onClick={handleSubmit}>
        <WrapSvg>
          <SvgIconPlus>
            <use href={sprite + '#icon-plus'}></use>
          </SvgIconPlus>
        </WrapSvg>
        {buttonText}
      </BtnAdd>
    </Modal>
  );
};
export default ColumnModal;

