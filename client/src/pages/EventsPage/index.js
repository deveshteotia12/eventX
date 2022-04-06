import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '../../components/BoxEvent/index.js';

const EventsPage = () => {
  const [events, setEvents] = useState([
    { eventName: 'Rectuitment', Date: '12/01/2000' },
    { eventName: 'Recruitment', Date: '12/01/2000' },
    { eventName: 'Dance Competition', Date: '12/01/2000' },
  ]);

  return (
    <div className="w-screen">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-semibold">Events</h1>
      </div>
      <div className="w-full flex flex-wrap justify-around">
        {events.map(e => (
          <Box eventName={e.eventName} Date={e.Date}></Box>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/events" className="text-blue-400 underline ">
          View all
        </Link>
      </div>
    </div>
  );
};

export default EventsPage;
