import React, { useState } from 'react';
import { resolveProjectReferencePath } from 'typescript';
import EventModal from '../eventDetailsModal';

const ReqDiv = ({ data, acceptP, rejectP, version }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {data.map(e => (
        <div className="flex flex-row justify-between items-center w-full px-5 py-4 bg-white border-0 rounded-xl shadow-md mb-6">
          <div className="flex flex-row justify-around w-auto">
            <p className="mx-2">{e.eventName}</p>
            <p className="mx-2">{e.userEmail}</p>
            <p className="mx-2">{e.Date}</p>
            <button className="mx-2 text-blue-500 underline" onClick={() => setShowModal(true)}>
              Details
            </button>
          </div>
          <div>
            {version == false ? (
              <button className="px-3 py-2 bg-blue-500 border-0" value={e._id} onClick={e => acceptP(e.target.value)}>
                Accept
              </button>
            ) : null}
            <button className="px-3 py-2 bg-red-500 border-0" value={e._id} onClick={e => rejectP(e.target.value)}>
              {version == true ? 'Remove' : 'Reject'}
            </button>
          </div>
          {showModal == true ? <EventModal data={e} setShowModal={setShowModal}></EventModal> : null}
        </div>
      ))}
    </div>
  );
};

export default ReqDiv;
