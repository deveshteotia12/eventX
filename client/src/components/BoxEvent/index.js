import React, { useState } from 'react';
import EventModal from '../eventDetailsModal';

const Box = ({ data, visible }) => {
  //const newDate = data.eventDate.getYear();
  console.log(data);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex justify-center bg-white w-full md:w-1/4 md:mx-5 py-10 my-3 border-t-4 border-t-blue-400">
      <div className="w-5/6">
        <h1 className="font-bold text-xl mb-6 ">{data.eventName}</h1>
        <div className="mb-4">
          <p className="text-gray-500 font-semibold">Event Type</p>
          <p className="">{data.eventType}</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500 font-semibold">Starts</p>
          <p>{data.eventDate}</p>
        </div>
        <p>Happening offline</p>
        {visible == false ? (
          <button className="px-2 py-3 bg-blue-400 w-full my-3" onClick={() => setShowModal(true)}>
            More Details
          </button>
        ) : (
          <button className="px-2 py-3 bg-blue-400 w-full my-3" onClick={() => setShowModal(true)} disabled>
            More Details
          </button>
        )}
        {showModal == true ? <EventModal setShowModal={setShowModal} data={data}></EventModal> : null}
      </div>
    </div>
  );
};

export default Box;
