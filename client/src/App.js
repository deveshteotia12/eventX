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
import { useSelector } from 'react-redux';
import { DasboardPrivateRoute } from './components/PrivateRoutes';

const App = () => {
  return (
    <div className="w-screen">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/" element={<DasboardPrivateRoute></DasboardPrivateRoute>}>
          <Route path="/events" element={<EventsMain></EventsMain>}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
