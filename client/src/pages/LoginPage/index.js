import React, { useEffect, useState } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  });

  const handelSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_USER_AUTH', payload: { email: e.target.email.value, password: e.target.password.value } });

    <Navigate to="/events"></Navigate>;
  };

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute left-1/2 top-24 w-3/4 h-2/3 md:w-1/3 sm:w-2/3 transform -translate-x-1/2 bg-gray-100 px-6 py-10 rounded-xl">
        <h1 className="text-2xl mb-7 font-bold text-blue-400">Log In</h1>
        <form onSubmit={handelSubmit} className="flex flex-col">
          <input
            value={email}
            className="mb-6 px-2 py-2"
            name="email"
            placeholder="Enter Your Email"
            onChange={e => setEmail(e.value)}
          ></input>
          <input
            value={password}
            className="mb-6 px-2 py-2"
            placeholder="Enter Your Password"
            name="password"
            onChange={e => setPassword(e.password)}
          ></input>
          <button type="submit" className="bg-blue-400 px-3 py-2 mt-6 mb-2">
            {' '}
            Log In
          </button>
          <Link to="/signup" className="mt-2 mb-10">
            <small>Don't have an account? Click here.</small>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
