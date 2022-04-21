import React, { useEffect, useState } from 'react';
import ReqDiv from '../../components/eventReq';
import { acceptEventReq, fetchEventReq, rejectEventReq } from '../../utils/api';
import { toast } from 'react-toastify';

const EventReq = () => {
  const data = [{ eventName: 'CTRL+Z', userName: 'Devesh Teotia', Organization: 'Temp' }];

  const [eventData, setEventData] = useState([]);

  useEffect(async () => {
    const res = await fetchEventReq();
    //console.log(res);
    if (res?.data?.success) {
      setEventData(res.data.data);
    } else {
      toast.error('Some error has Occured. Refresh the Page');
    }
  }, []);

  const acceptProject = async ID => {
    const res = await acceptEventReq({ ID });
    if (res?.data?.success) {
      toast.success('Project is Accepted');
      setEventData(res.data.data);
    } else {
      toast.error('Some Error has occured');
    }
  };

  const rejectProject = async ID => {
    const res = await rejectEventReq({ ID });
    if (res?.data?.success) {
      toast.success('Project is Rejected');
      setEventData(res.data.data);
    } else {
      toast.error('Some Error has occured');
    }
  };

  return (
    <div className="px-10 py-20">
      <ReqDiv data={eventData} acceptP={acceptProject} rejectP={rejectProject} version={false}></ReqDiv>
    </div>
  );
};

export default EventReq;
