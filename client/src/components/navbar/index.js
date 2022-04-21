import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({ version }) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.removeItem('userToken');
    dispatch({ type: 'ADD_USER_AUTH', user: null });
    navigate('/login');
  };

  return (
    <div>
      {version == true ? (
        <div>
          <div className="flex flex-row justify-between items-center px-5 py-5 w-screen">
            <Link to="/" className="font-bold text-2xl text-blue-500">
              EventX{' '}
            </Link>
            <h1 className="font-bold text-xl"> EVENTS</h1>
            {user == null ? (
              <Link to="/login" className="text-blue-400 font-bold px-2 py-3">
                Log In
              </Link>
            ) : (
              <button onClick={() => handelLogout()} className="text-blue-400 font-bold px-2 py-3">
                Log out
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between items-center px-5 py-5 w-screen bg-gray-100">
          <h1 className="font-bold text-2xl text-blue-500">EventX</h1>
          <div className="flex flex-row justify-around w-2/6 text-semibold">
            <p>About US</p>
            <p>Events</p>
            <p>Blogs</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
