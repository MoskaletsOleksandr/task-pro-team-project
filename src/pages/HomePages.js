import React, { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

//-------vit--------
import NewDashboard from 'components/NewDashboard/NewDashboard';
import { selectCurrentBoard } from 'redux/dashboards/selectors';
//-------vit--------

import { useDispatch, useSelector } from 'react-redux';
import Sidebar from 'components/Sidebar/Sidebar';
import { TestNewBoardModal } from 'TestNewBoardModal/TestNewBoardModal';
import { getAllBackgroundsThunk } from 'redux/dashboards/thunks';
// import Backdrop from '../components/Sidebar/Backdrop';

const HomePage = () => {
  // const user = useSelector(state => state.auth.user.theme);
  const dispatch = useDispatch();
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

  useEffect(() => {
    const fetchBackgrounds = async () => {
      try {
        await dispatch(getAllBackgroundsThunk());
      } catch (error) {
        console.error('Помилка отримання фонів:', error);
      }
    };

    fetchBackgrounds();
  }, [dispatch]);

  const [showSidebar, setShowSidebar] = useState(true);
  const [showTestModal, setShowTestModal] = useState(false);

  const toggleModal = () => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
  };

  //-------vit--------
  const currentBoard = useSelector(selectCurrentBoard);
  //-------vit--------

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
            // height: '100vh',
            // maxHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--screens-page-bg-color)',
          }}
        >
          <Header openSidebar={openSidebar} />

          {/* -------vit-------- */}
          {currentBoard ? <Outlet /> : <NewDashboard />}
          {/* -------vit-------- */}

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

export default HomePage;
