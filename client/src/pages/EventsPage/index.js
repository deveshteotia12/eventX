import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Box from '../../components/BoxEvent/index.js';
import { allEventUser } from '../../utils/api.js';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    const res = await allEventUser();
    if (res?.data?.success) {
      console.log(res.data.data);
      setEvents(res.data.data);
    } else {
      //toast.error('Some error has occured Plz reload.');
    }
  }, []);

  return (
    <div className="w-screen ">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-semibold">Events</h1>
      </div>
      <div className="w-full flex flex-wrap justify-around">
        {events.slice(0, 3).map(e => (
          <Box data={e} visible={true}></Box>
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
