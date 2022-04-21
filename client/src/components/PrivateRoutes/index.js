import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const DasboardPrivateRoute = () => {
  const user = useSelector(state => state.user);
  const Token = localStorage.getItem('userToken');
  console.log(user);
  return Token != null && user != null ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
};

export const OrganizeEventPrivate = () => {
  const user = useSelector(state => state.user);
  const Token = localStorage.getItem('userToken');
  console.log(user);
  return Token != null && user != null ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
};
