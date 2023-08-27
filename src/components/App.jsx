import GlobalStyles from './GlobalStyles';

import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
import AuthPage from './AuthPage/AuthPage';

export const App = () => {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
    </Routes>
  );
};
