import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
  const isAuth = useSelector(state => state.auth.user);

  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRouter;
