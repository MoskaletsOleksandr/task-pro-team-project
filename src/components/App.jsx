import GlobalStyles from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
// import WelcomePage from '../pages/WelcomePage/WelcomePage';
// import AuthPage from '../pages/AuthPage/AuthPage';
// import HomePage from './../pages/HomePages';
// import ScreenPage from 'pages/ScreenPage/ScreenPage';
import { Suspense, lazy } from 'react';
import Loader  from "./Loader/Loader"

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./../pages/HomePages'));
const ScreenPage = lazy(() => import('pages/ScreenPage/ScreenPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
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
    </Suspense>
  );
};
