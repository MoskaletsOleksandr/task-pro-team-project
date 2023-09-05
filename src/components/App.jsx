import GlobalStyles from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import PublicRouter from './PublicRouter/PublicRouter';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { GetCurrentUserThunk } from 'redux/auth/thunks';
import { setToken } from 'api/axiosConfig';

const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./../pages/HomePages'));
const ScreenPage = lazy(() => import('pages/ScreenPage/ScreenPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('persist:auth'));

    if (authData && authData.accessToken) {
      setToken(`Bearer ${authData.accessToken}`);
      dispatch(GetCurrentUserThunk());
    }
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <Toaster />
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route
          path="/welcome"
          element={
            <PublicRouter>
              <WelcomePage />
            </PublicRouter>
          }
        />
        <Route
          path="/auth/:id"
          element={
            <PublicRouter>
              <AuthPage />
            </PublicRouter>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRouter>
              <HomePage />
            </PrivateRouter>
          }
        >
          <Route
            path=":boardName"
            element={
              <PrivateRouter>
                <ScreenPage />
              </PrivateRouter>
            }
          />
        </Route>
        <Route path="*" element={<WelcomePage />} />
      </Routes>
    </Suspense>
  );
};
