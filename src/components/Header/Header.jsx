import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserInfo from 'components/UserInfo/UserInfo';
import { UpdateThemeThunk } from 'redux/auth/thunks';

import {
  Container,
  IconBM,
  HeaderInfo,
  CustomSelect,
  CustomOption,
  CustomOptionList,
  IconDown,
  TheamBtn,
} from './Header.styled';

import sprite from '../../images/sprite.svg';

const Header = ({ openSidebar }) => {
  const theme = useSelector(state => state.auth.user.theme);
  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const handleThemeClick = selectedTheme => {
    dispatch(UpdateThemeThunk({ theme: selectedTheme }));
    toggleCustomOptionList();
  };

  return (
    <Container>
      <div
        onClick={() => {
          openSidebar(true);
        }}
      >
        <IconBM>
          <use href={`${sprite}#icon-menu`}></use>
        </IconBM>
      </div>

      <HeaderInfo>
        <TheamBtn onClick={toggleCustomOptionList}>
          Theme
          <IconDown>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>

        <CustomSelect theme={theme}>
          <CustomOptionList open={isCustomOptionListOpen}>
            <CustomOption
              onClick={() => handleThemeClick('light')}
              selected={theme === 'light'}
            >
              Light
            </CustomOption>

            <CustomOption
              onClick={() => handleThemeClick('dark')}
              selected={theme === 'dark'}
            >
              Dark
            </CustomOption>

            <CustomOption
              onClick={() => handleThemeClick('violet')}
              selected={theme === 'violet'}
            >
              Violet
            </CustomOption>
          </CustomOptionList>
        </CustomSelect>

        <UserInfo />
      </HeaderInfo>
    </Container>
  );
};

export default Header;
