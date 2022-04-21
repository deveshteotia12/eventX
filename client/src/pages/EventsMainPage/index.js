import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Box from '../../components/BoxEvent';
import Nav from '../../components/navbar';
import { allEventUser } from '../../utils/api';

const EventsMain = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [updatedEvents, setUpdatedEvents] = useState([]);

  useEffect(async () => {
    const res = await allEventUser();
    if (res?.data?.success) {
      console.log(res.data.data);
      setEvents(res.data.data);
      setUpdatedEvents(res.data.data);
    } else {
      toast.error('Some error has occured Plz reload.');
    }
  }, []);

  const handelChange = event => {
    setSearch(event.target.value);
    const newData = events.filter(e => {
      if (e.eventName.includes(search) || e.eventType.includes(search)) {
        return e;
      }
    });
    setUpdatedEvents(newData);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <Nav version={true}></Nav>
      <div className="px-10  overflow-hidden mt-10">
        <div className="w-screen mb-10 flex justify-center">
          <input
            value={search}
            className="w-4/5 px-4 py-3"
            placeholder="Search by event name or organization."
            onChange={handelChange}
          ></input>
        </div>
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between">
          {updatedEvents.map(e => (
            <Box data={e} visible={false}></Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
