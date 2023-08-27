// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import React, { useEffect, useState } from 'react';

import UserInfo from 'components/UserInfo/UserInfo';
// import { updateTheme } from 'redux/auth/authOperations';
// import { useTheme } from '../hooks/useTheme';

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

const Header = ({ onToggleSidebar }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  const handleThemeChange = color => {
    setTheme(color);
  };

  // const dispatch = useDispatch();
  // const { theme, setTheme } = useTheme();

  // const [selectedTheme, setSelectedTheme] = useState('dark');
  // const [isCustomOptionListOpen, setCustomOptionListOpen] = useState(false);

  // const toggleCustomOptionList = () => {
  //   setCustomOptionListOpen(!isCustomOptionListOpen);
  // };

  // const handleLightThemeClick = () => {
  //   setTheme('light');
  //   setSelectedTheme('light');
  //   dispatch(updateTheme('light'));
  //   toggleCustomOptionList();
  // };

  // const handleDarkThemeClick = () => {
  //   setTheme('dark');
  //   setSelectedTheme('dark');
  //   dispatch(updateTheme('dark'));
  //   toggleCustomOptionList();
  // };

  // const handleVioletThemeClick = () => {
  //   setTheme('violet');
  //   setSelectedTheme('violet');
  //   dispatch(updateTheme('violet'));
  //   toggleCustomOptionList();
  // };

  return (
    <Container>
      <div onClick={onToggleSidebar}>
        <IconBM>
          <use href={`${sprite}#icon-menu`}></use>
        </IconBM>
      </div>
      <HeaderInfo>
        {/* <TheamBtn onClick={toggleCustomOptionList}> */}
        <TheamBtn>
          Theme
          <IconDown>
            <use href={`${sprite}#icon-chevron-down`}></use>
          </IconDown>
        </TheamBtn>

        {/* <CustomSelect theme={theme}> */}
        <CustomSelect>
          {/* <CustomOptionList open={isCustomOptionListOpen}> */}
          <CustomOptionList>
            <CustomOption
              onClick={() => {
                handleThemeChange('light');
              }}
              // onClick={() => handleLightThemeClick()}
              // selected={selectedTheme === 'light'}
            >
              Light
            </CustomOption>

            <CustomOption
              onClick={() => {
                handleThemeChange('dark');
              }}
              // onClick={() => handleDarkThemeClick()}
              // selected={selectedTheme === 'dark'}
            >
              Dark
            </CustomOption>

            <CustomOption
              onClick={() => {
                handleThemeChange('violet');
              }}
              // onClick={() => handleVioletThemeClick('violet')}
              // selected={selectedTheme === 'violet'}
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
