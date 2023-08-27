import GlobalStyles from './GlobalStyles';
// import RegistrationForm from './registrationForm/RegistrationForm';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import AuthPage from './AuthPage/AuthPage';
import HomePage from './../pages/HomePages';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* <RegistrationForm /> */}
      <Routes>
        <Route index element={<WelcomePage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/:id" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
};
