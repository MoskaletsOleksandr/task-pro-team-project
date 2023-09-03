import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';

import UserInfo from 'components/UserInfo/UserInfo';
// import { updateTheme } from 'redux/auth/authOperations';
import { useTheme } from '../hooks/useTheme';

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
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState('dark');

  // const dispatch = useDispatch();

  const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const toggleCustomOptionList = () => {
    setCustomOptionListOpen(!isCustomOptionListOpen);
  };

  const handleLightThemeClick = () => {
    setTheme('light');
    setSelectedTheme('light');
    // dispatch(updateTheme('light'));
    toggleCustomOptionList();
  };

  const handleDarkThemeClick = () => {
    setTheme('dark');
    setSelectedTheme('dark');
    // dispatch(updateTheme('dark'));
    toggleCustomOptionList();
  };

  const handleVioletThemeClick = () => {
    setTheme('violet');
    setSelectedTheme('violet');
    // dispatch(updateTheme('violet'));
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
              onClick={() => handleLightThemeClick()}
              selected={selectedTheme === 'light'}
            >
              Light
            </CustomOption>

            <CustomOption
              onClick={() => handleDarkThemeClick()}
              selected={selectedTheme === 'dark'}
            >
              Dark
            </CustomOption>

            <CustomOption
              onClick={() => handleVioletThemeClick('violet')}
              selected={selectedTheme === 'violet'}
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
