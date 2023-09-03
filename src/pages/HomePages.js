import React, { useEffect, useState } from 'react';
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

const HomePage = () => {
  // const user = useSelector(state => state.auth.user.theme);
  const dispatch = useDispatch();

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

  const [openedSidebar, setOpenedSidebar] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);

  const toggleModal = () => {
    setShowTestModal(prevShowTestModal => !prevShowTestModal);
  };

  //-------vit--------
  const currentBoard = useSelector(selectCurrentBoard);
  //-------vit--------

  const handleOutsideClick = event => {
    if (!event.target.closest('.sidebar')) {
      setOpenedSidebar(false);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (openedSidebar) {
      timeoutId = setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      }, 100);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [openedSidebar]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar className="sidebar" isOpen={openedSidebar} />
        <div
          style={{
            flexGrow: '1',
            // height: '100vh',
            // maxHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            // backgroundColor: 'var(--screens-page-bg-color)', //-----vit------
          }}
        >
          <Header openSidebar={setOpenedSidebar} />

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
        </div>
      </div>
    </>
  );
};

export default HomePage;
