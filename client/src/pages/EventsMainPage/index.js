import React, { useState } from 'react';
import Box from '../../components/BoxEvent';
import Nav from '../../components/navbar';

const EventsMain = () => {
  const [events, setEvents] = useState([
    { eventName: 'Rectuitment', Date: '12/01/2000' },
    { eventName: 'Rectuitment', Date: '12/01/2000' },
    { eventName: 'Rectuitment', Date: '12/01/2000' },
    { eventName: 'Rectuitment', Date: '12/01/2000' },
    { eventName: 'Rectuitment', Date: '12/01/2000' },
    { eventName: 'Rectuitment', Date: '12/01/2000' },
    { eventName: 'Rectuitment', Date: '12/01/2000' },
  ]);

  const [search, setSearch] = useState('');

  const handelChange = event => {
    setSearch(event.value);
  };

  return (
    <div className="w-screen bg-gray-100">
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
          {events.map(e => (
            <Box eventName={e.eventName} Date={e.Date}></Box>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsMain;
