import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

//-------vit--------
import NewDashboard from 'components/NewDashboard/NewDashboard';
import { selectCurrentBoard } from 'redux/dashboards/selectors';
//-------vit--------

import { useDispatch, useSelector } from 'react-redux';
import Sidebar from 'components/Sidebar/Sidebar';
import { getAllBackgroundsThunk } from 'redux/dashboards/thunks';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  // const user = useSelector(state => state.auth.user.theme);
  const dispatch = useDispatch();
  const [openedSidebar, setOpenedSidebar] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1440 });

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

  //-------vit--------
  const currentBoard = useSelector(selectCurrentBoard);
  //-------vit--------

  useEffect(() => {
    let timeoutId;

    const handleOutsideClick = event => {
      if (isMobile && openedSidebar) {
        const sidebarElement = document.querySelector('.sidebar');
        if (sidebarElement && !sidebarElement.contains(event.target)) {
          setOpenedSidebar(false);
        }
      }
    };

    if (!isMobile) {
      setOpenedSidebar(true);
    }
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
  }, [openedSidebar, isMobile]);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar isOpen={openedSidebar} />
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
