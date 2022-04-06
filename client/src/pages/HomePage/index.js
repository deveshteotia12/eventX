import React from 'react';
import Nav from '../../components/navbar/index';
import EventsPage from '../EventsPage';

const Homepage = () => {
  return (
    <div>
      <div className="w-screen h-screen relative">
        <Nav version={false}></Nav>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 px-10">
          <h1 className="font-bold text-2xl sm:text-4xl">
            <span className="text-blue-400">Organize</span>.Participate.<span className="text-blue-400">Manage</span>
          </h1>
          <div className="flex justify-around">
            <p>All at one place.</p>
          </div>
          {/* <div className="flex justify-between">
            <button className="px-2 py-3 bg-blue-300">Create Event</button>
            <button className="px-2 py-3 bg-blue-300">Participate</button>
          </div> */}
        </div>
      </div>
      <EventsPage></EventsPage>
    </div>
  );
};

export default Homepage;
