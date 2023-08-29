import React, { useEffect, useState } from 'react';

import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TestModal } from 'components/modals/TestModal/TestModal';

// import ScreensPage from 'components/ScreensPage/ScreensPage';
// import Sidebar from 'components/Sidebar/Sidebar';
// import Backdrop from '../components/Sidebar/Backdrop';

const HomePage = () => {
  const user = useSelector(state => state.auth.user.theme);
  console.log(user);
  const [showSidebar, setShowSidebar] = useState(true);

  const [showTestModal, setShowTestModal] = useState(false);

  const toggleModal = () => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
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
          <Outlet />
          <button
            onClick={toggleModal}
            style={{
              position: 'absolute',
              bottom: '100px',
              right: '30px',
              width: '200px',
              height: '30px',
            }}
          >
            Open Test Modal
          </button>
          {showTestModal && (
            <TestModal closeModal={toggleModal} isOpen={showTestModal} />
          )}
          {/* <ScreensPage /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
