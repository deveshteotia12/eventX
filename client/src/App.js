import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/index';
import Homepage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SignUp from './pages/SignupPage';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import LogIn from './pages/LoginPage';
import EventsMain from './pages/EventsMainPage';
import OrganizePage from './pages/OrganizeEvent';
import { useSelector } from 'react-redux';
import { DasboardPrivateRoute, OrganizeEventPrivate } from './components/PrivateRoutes';
import AdminDashReq from './pages/adminDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/" element={<DasboardPrivateRoute></DasboardPrivateRoute>}>
          <Route path="/events" element={<EventsMain></EventsMain>}></Route>
        </Route>
        <Route path="/" element={<OrganizeEventPrivate></OrganizeEventPrivate>}>
          <Route path="/organizeEvent" element={<OrganizePage></OrganizePage>}></Route>
        </Route>
        <Route path="/adminDash" element={<AdminDashReq></AdminDashReq>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default App;
