// import { useEffect, useState } from 'react';
// import GlobalStyles from './GlobalStyles';
// import { TestThemeBtn } from './TestThemeBtn/TestThemeBtn';

// import { FormikContainer } from './formik_formik/FormikContainer';

import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import HomePage from './HomePage/HomePage';
import AuthPage from './AuthPage/AuthPage';

export const App = () => {
  // const [theme, setTheme] = useState('dark');

  // useEffect(() => {
  //   document.body.classList.add(theme);
  //   return () => {
  //     document.body.classList.remove(theme);
  //   };
  // }, [theme]);
  // const handleThemeChange = color => {
  //   setTheme(color);
  // };
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     gap:'20px',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   Test
    //   <GlobalStyles />
    //   <TestThemeBtn
    //     onClick={() => {
    //       handleThemeChange('violet');
    //     }}
    //   >
    //     Тема violet
    //   </TestThemeBtn>
    //   <TestThemeBtn
    //     onClick={() => {
    //       handleThemeChange('dark');
    //     }}
    //   >
    //     Тема dark
    //   </TestThemeBtn>
    //   {/* <MainForm/> */}
    //   <FormikContainer/>

    // </div>
  );
};
