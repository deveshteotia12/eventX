import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useResolvedPath } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { authUser } from '../../utils/api';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const emailRegEx = /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@srmist.edu.in$/;

  const validation = yup.object().shape({
    email: yup
      .string()
      // .matches(emailRegEx, 'Enter correct College ID')
      .email('Enter correct Email.')
      .required('Email is requried field'),

    password: yup.string().min(5, 'Minimum length of password is 5').required(),
  });

  const handelSubmit = async e => {
    try {
      console.log(error);
      setError([]);
      e.preventDefault();
      console.log(e.target);
      const [email, password] = e.target;
      const data = await validation.validate({ email: email.value, password: password.value });
      const res = await authUser({ email: email.value, password: password.value });

      if (res.data.success) {
        dispatch({ type: 'ADD_USER_AUTH', user: res.data.data });

        localStorage.setItem('userToken', res.data.data.token);

        navigate('/events');
      }

      console.log('Some error has occured');
    } catch (error) {
      if (error?.name == 'ValidationError') setError(error.errors);
      console.log(error.errors);
    }
  };

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute left-1/2 top-24 w-3/4 h-2/3 md:w-1/3 sm:w-2/3 transform -translate-x-1/2 bg-gray-100 px-6 py-10 rounded-xl">
        <h1 className="text-2xl mb-7 font-bold text-blue-400">Log In</h1>
        <form onSubmit={handelSubmit} className="flex flex-col">
          {error.length > 0 ? (
            <div className="mb-5 text-red-500">
              {error.map(e => (
                <small>{e}</small>
              ))}
            </div>
          ) : null}

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
