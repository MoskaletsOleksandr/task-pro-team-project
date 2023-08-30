import React, { useState } from 'react';

import ModalEditProfile from 'components/ModalEditProfile';

import sprite from '../../images/sprite.svg';

import {
  UserName,
  IconAvatar,
  Container,
  AvasarSetin,
} from './UserInfo.styled';

const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <UserName>User</UserName>
      <AvasarSetin>
        <IconAvatar onClick={toggleModal}>
          <use href={`${sprite}#icon-avatar`}></use>
        </IconAvatar>
        {showModal && (
          <ModalEditProfile closeModal={toggleModal} isOpen={showModal} />
        )}
      </AvasarSetin>
    </Container>
  );
};

export default UserInfo;
