import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/index';
import Homepage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import SignUp from './pages/SignupPage';
import { Routes, Route } from 'react-router-dom';
import LogIn from './pages/LoginPage';
import EventsMain from './pages/EventsMainPage';

const App = () => {
  return (
    <div className="w-screen">
      <Routes>
        <Route exact path="/" element={<Homepage></Homepage>}></Route>
        <Route exact path="/signup" element={<SignUp></SignUp>}></Route>
        <Route exact path="/login" element={<LogIn></LogIn>}></Route>
        <Route exact path="/events" element={<EventsMain></EventsMain>}></Route>
      </Routes>
    </div>
  );
};

export default App;
