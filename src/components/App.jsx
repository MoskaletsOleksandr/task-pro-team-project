import GlobalStyles from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
// import WelcomePage from '../pages/WelcomePage/WelcomePage';
// import AuthPage from '../pages/AuthPage/AuthPage';
// import HomePage from './../pages/HomePages';
// import ScreenPage from 'pages/ScreenPage/ScreenPage';
import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import PublicRouter from './PublicRouter/PublicRouter';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import { GetCurrentUserThunk } from 'redux/thunks';
// import { Navigate } from 'react-router';


const WelcomePage = lazy(() => import('../pages/WelcomePage/WelcomePage'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('./../pages/HomePages'));
const ScreenPage = lazy(() => import('pages/ScreenPage/ScreenPage'));

export const App = () => {
  const dispatch=useDispatch();
  const email=useSelector(state=>state.auth.user.email)
   console.log(email)

   useEffect(()=>{
    // try {
    //   const response=dispatch(GetCurrentUserThunk()).unwrap().then(data=>{
    //     if(data){
    //       return(<Navigate to='/home'/>)
    //     }
    //   })
    //   console.log(response)
    // } catch (error) {
    //   console.log('failed')
    // }
 
  dispatch(GetCurrentUserThunk())
   },[dispatch])

   
  
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
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
