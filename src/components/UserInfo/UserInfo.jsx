// import { useSelector } from 'react-redux';
// import { avatarURL, setName } from 'redux/auth/authSelectors';

import sprite from '../../images/sprite.svg';

// import ModalEditProfile from 'components/ModalEditProfile/ModalEditProfile';

import {
  IconAvatar,
  Container,
  IconPlus,
  AvasarSetin,
  // AvatarImg,
} from './UserInfo.styled';

const UserInfo = () => {
  // const name = useSelector(setName);
  // const avatar = useSelector(avatarURL);

  // const onOpen = () => {
  //   setShowModal(true);
  // };

  // const onClose = () => {
  //   setShowModal(false);
  // };

  return (
    <Container>
      {/* <div>{name ? name : 'User'}</div> */}
      <div>User</div>
      {/* <AvasarSetin onClick={onOpen}> */}
      <AvasarSetin>
        {/* {avatar ? (
          <AvatarImg src={avatar} alt="user avatar" />
        ) : (
          <IconAvatar>
            <use href={`${sprite}#icon-user`}></use>
          </IconAvatar>
        )} */}
        <IconAvatar>
          <use href={`${sprite}#icon-user`}></use>
        </IconAvatar>

        <div>
          <IconPlus>
            <use href={`${sprite}#icon-plus-01`}></use>
          </IconPlus>
        </div>
      </AvasarSetin>
      {/* {showModal && <ModalEditProfile onClose={onClose} />} */}
    </Container>
  );
};

export default UserInfo;
