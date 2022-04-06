import React from 'react';

const Box = ({ eventName, Date }) => {
  return (
    <div className="flex justify-center bg-white w-full md:w-1/4 md:mx-5 py-10 my-3 border-t-4 border-t-blue-400">
      <div className="w-5/6">
        <h1 className="font-bold text-xl mb-6 ">{eventName}</h1>
        <div className="mb-4">
          <p className="text-gray-500 font-semibold">Event Type</p>
          <p className="">Hackathon</p>
        </div>
        <div className="mb-4">
          <p className="text-gray-500 font-semibold">Starts</p>
          <p>{Date}</p>
        </div>
        <p>Happening offline</p>
        <button className="text-blue-400 bg-blue-100 px-6 py-2 mt-5 w-full">Participate</button>
      </div>
    </div>
  );
};

export default Box;
