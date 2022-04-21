import React, { useState, useEffect } from 'react';
import UpcomingEvents from './upcomingEventReq';
import EventReq from './userEventReq';

const AdminDashReq = () => {
  const [Component, setComponent] = useState(1);
  return (
    <div className="min-h-screen w-screen bg-gray-300">
      <div className="w-full flex justify-evenly pt-10">
        <button
          className={
            Component == 1 ? 'px-4 py-2 bg-blue-500 border-0 rounded-sm' : 'px-4 py-2 border-0 rounded-sm bg-blue-200'
          }
          onClick={() => setComponent(1)}
        >
          Event Requests
        </button>
        <button
          className={
            Component == 2 ? 'px-4 py-2 bg-blue-500 border-0 rounded-sm' : 'px-4 py-2 bg-blue-200 border-0 rounded-sm'
          }
          onClick={() => setComponent(2)}
        >
          Upcoming Events
        </button>
      </div>
      {Component == 1 ? <EventReq></EventReq> : Component == 2 ? <UpcomingEvents></UpcomingEvents> : null}
    </div>
  );
};

export default AdminDashReq;
