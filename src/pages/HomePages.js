import React, { useEffect, useState } from 'react';

import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import {
  // useDispatch,
  useSelector,
} from 'react-redux';
// import { getAllBoardsThunk } from 'redux/dashboards/thunks';
// import {
//   createNewBoardThunk,
//   createNewColumnThunk,
//   getCurrentBoardThunk,
// } from 'redux/dashboards/thunks';

// import ScreensPage from 'components/ScreensPage/ScreensPage';
import Sidebar from 'components/Sidebar/Sidebar';
// import Backdrop from '../components/Sidebar/Backdrop';

const HomePage = () => {
  const user = useSelector(state => state.auth.user.theme);
  console.log(user);
  const [showSidebar, setShowSidebar] = useState(true);

  const [showTestModal, setShowTestModal] = useState(false);

  const toggleModal = () => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
  };

  // const dispatch = useDispatch();

  // dispatch(getCurrentBoardThunk('64ee3083db29eb5fa80b1b35'));
  // dispatch(
  //   createNewBoardThunk({ title: '111', icon: '1111', background: '11111' })
  // );
  // dispatch(
  //   createNewColumnThunk({
  //     boardId: '64ee3083db29eb5fa80b1b35',
  //     body: { title: 'scszcscs' },
  //   })
  // );
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
        {showSidebar && <Sidebar />}
        {/* {showSidebar && <Backdrop onClick={toggleSidebar} />} */}
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
          {/* <ScreensPage /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
