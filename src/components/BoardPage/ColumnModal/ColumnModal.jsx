import Modal from '../../../components/Modal/Modal';
import React, { useEffect, useState } from 'react';
import { Input, BtnAdd, WrapSvg, SvgIconPlus } from './ColumnModal.styled';
import sprite from '../../../images/sprite.svg';


const ColumnModal = ({ closeModal, isOpen, name, newColumnTitle }) => {
    const [inputValue, setInputValue] = useState(newColumnTitle);

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setInputValue('');
        }
        console.log('Input Value:', inputValue);
    };

  
    return (
        <Modal onClose={closeModal} isOpen={isOpen} >
            <h2>{name}</h2>
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Title"
            />

            <BtnAdd type="submit" onClick={handleSubmit}>
                <WrapSvg>
                    <SvgIconPlus>
                        <use href={sprite + '#icon-plus'}></use>
                    </SvgIconPlus>
                </WrapSvg>
                Add
            </BtnAdd>
        </Modal>
    );
};


export default ColumnModal;