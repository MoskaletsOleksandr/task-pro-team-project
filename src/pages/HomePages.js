import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
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
import { TestNewBoardModal } from 'TestNewBoardModal/TestNewBoardModal';
// import Backdrop from '../components/Sidebar/Backdrop';

const HomePage = () => {
  const user = useSelector(state => state.auth.user.theme);
  console.log(user);
  const myRef = useRef(null);
  const [size, setSize] = useState({});
  const resizeHandler = () => {
    const { clientHeight, clientWidth } = myRef.current || {};
    setSize({ clientHeight, clientWidth });
    };
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
    window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  
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
  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };

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




  useEffect(() => {
    if (size.clientWidth > 1439) {
      setShowSidebar(true);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [size.clientWidth]);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const handleClickOutside = e => {
    const modal = document.getElementById('modal-root');
    if (!myRef.current.contains(e.target) && !modal.contains(e.target)) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
      <div ref={myRef}>
        <Sidebar isOpen={showSidebar} />
      </div>
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
          <Header openSidebar={openSidebar} />
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
            <TestNewBoardModal
              closeModal={toggleModal}
              isOpen={showTestModal}
            />

          )}

          {/* <ScreensPage /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage