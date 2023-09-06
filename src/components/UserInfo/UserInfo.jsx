import React, { useState } from 'react';
import ModalEditProfile from 'components/ModalEditProfile';
import sprite from '../../images/sprite.svg';
import {
  UserName,
  IconAvatar,
  Container,
  AvasarSetin,
  AvatarImg,
  Name,
} from './UserInfo.styled';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.auth.user);

  // const parsedUser = JSON.parse(user);
  const { name, photo } = user;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <UserName>
        <Name>{name}</Name>
      </UserName>
      <AvasarSetin onClick={toggleModal}>
        {photo ? (
          <AvatarImg src={photo} />
        ) : (
          <IconAvatar>
            <use href={`${sprite}#icon-avatar`}></use>
          </IconAvatar>
        )}
        {showModal && (
          <ModalEditProfile closeModal={toggleModal} isOpen={showModal} />
        )}
      </AvasarSetin>
    </Container>
  );
};

export default UserInfo;
