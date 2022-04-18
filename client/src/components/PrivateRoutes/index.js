import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const DasboardPrivateRoute = () => {
  const user = useSelector(state => state.user);
  console.log(user);
  return <div>{user.user == null ? <Navigate to="/login"></Navigate> : <Outlet></Outlet>}</div>;
};
