import React, { useEffect, useState } from 'react';
import ReqDiv from '../../components/eventReq';
import { acceptEventReq, fetchEventReq, fetchUpcomingEventReq, rejectEventReq, removeEventReq } from '../../utils/api';
import { toast } from 'react-toastify';

const UpcomingEvents = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(async () => {
    const res = await fetchUpcomingEventReq();
    console.log(res);
    console.log('HII');
    if (res?.data?.success) {
      setEventData(res.data.data);
    } else {
      toast.error('Some error has Occured. Refresh the Page');
    }
  }, []);

  const rejectProject = async ID => {
    const res = await removeEventReq({ ID });
    if (res?.data?.success) {
      toast.success('Project is Rejected');
      setEventData(res.data.data);
    } else {
      toast.error('Some Error has occured');
    }
  };

  return (
    <div className="px-10 py-20">
      <ReqDiv data={eventData} rejectP={rejectProject} version={true}></ReqDiv>
    </div>
  );
};

export default UpcomingEvents;
