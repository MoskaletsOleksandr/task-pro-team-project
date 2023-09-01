import sprite from '../../images/sprite.svg';
import { LogOutBtn, Span, Icon } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { LogOutThunk } from 'redux/auth/thunks';

const LogoutBtn = () => {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(LogOutThunk());
  }

  return (
    <>
      <LogOutBtn onClick={onClick}>
        <Icon width="32px" height="32px">
          <use href={`${sprite}#icon-login`} />
        </Icon>
        <Span>Log out</Span>
      </LogOutBtn>
    </>
  );
};

export default LogoutBtn;
