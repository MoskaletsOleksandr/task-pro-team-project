import GlobalStyles from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from './../pages/HomePages';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};
