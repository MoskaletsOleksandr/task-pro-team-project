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

const HomePage = () => {
  // const user = useSelector(state => state.auth.user.theme);
  const dispatch = useDispatch();
  const [openedSidebar, setOpenedSidebar] = useState(false);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        // Якщо ширина екрану більша або рівна 1440px, відкрийте сайдбар.
        setOpenedSidebar(true);
      }
    };

    // Додайте слухач події resize при завантаженні компоненту.
    window.addEventListener('resize', handleResize);

    // Відразу перевірте ширину екрану після завантаження сторінки.
    handleResize();

    return () => {
      // При видаленні компоненту видаліть слухача події resize.
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        </div>
      </div>
    </>
  );
};

export default HomePage;
