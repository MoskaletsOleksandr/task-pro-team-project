import React, { useState } from 'react';

import sprite from '../../images/sprite.svg';
import {
  Button,
  ButtonText,
  Container,
  Image,
  Span,
  Svg,
  Text,
} from './NeedHelp.styled';
import Modal from 'components/Modal/Modal';
import NeedHelpForm from 'components/NeedHelpForm/NeedHelpForm';

const NeedHelp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container>
        <Image
            src={require("images/flower.png")}
            alt="flower"
        />

        <Text>
          If you need help with <Span>TaskPro</Span>, check out our support
          resources or reach out to our customer support team.
        </Text>

        <Button onClick={openModal}>
          <Svg width="20px" height="20px">
            <use href={sprite +'#icon-help-circle'}></use>
          </Svg>
          <ButtonText> Need help? </ButtonText>
        </Button>
        
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <NeedHelpForm />
        </Modal>
      </Container>
    </>
  );
};

export default NeedHelp;