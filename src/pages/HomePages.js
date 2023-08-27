import React, { useEffect, useState } from 'react';

import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { TestThemeBtn } from 'components/TestThemeBtn/TestThemeBtn';
// import ScreensPage from 'components/ScreensPage/ScreensPage';
// import Sidebar from 'components/Sidebar/Sidebar';
// import Backdrop from '../components/Sidebar/Backdrop';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleWindowResize = () => {
    if (window.innerWidth < 1440) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        {/* {showSidebar && <Sidebar />}
        {showSidebar && <Backdrop onClick={toggleSidebar} />} */}
        <div
          style={{
            flexGrow: '1',
            height: '100vh',
            maxHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--screens-page-bg-color)',
          }}
        >
          <Header onToggleSidebar={toggleSidebar} />
          <TestThemeBtn
            onClick={() => {
              handleThemeChange('violet');
            }}
          >
            Тема violet
          </TestThemeBtn>
          <TestThemeBtn
            onClick={() => {
              handleThemeChange('dark');
            }}
          >
            Тема dark
          </TestThemeBtn>
          <Outlet />
          {/* <ScreensPage /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
