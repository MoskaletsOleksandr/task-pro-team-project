import GlobalStyles from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from './../pages/HomePages';
import ScreenPage from 'pages/ScreenPage/ScreenPage';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />}>
          <Route path=":boardName" element={<ScreenPage />} />
        </Route>
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </>
  );
};
