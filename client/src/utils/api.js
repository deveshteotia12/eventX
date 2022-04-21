import axios from 'axios';

const Token = localStorage.getItem('userToken');

const axiosReq = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const axiosUserPrivateReq = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json', authorization: `Bearer ${Token == null ? 123 : Token}` },
});

export const authUser = async payload => {
  try {
    const res = await axiosReq.post('/login', payload);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.statusCode);
  }
};

export const eventReqUser = async payload => {
  try {
    const res = await axiosUserPrivateReq.post('/eventReq', payload);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const allEventUser = async () => {
  try {
    const res = await axiosUserPrivateReq.get('/allEvents');
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const fetchEventReq = async () => {
  try {
    const res = await axiosReq.get('/admin/eventReq');
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpcomingEventReq = async () => {
  try {
    const res = await axiosReq.get('/admin/upcomingEvents');
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    console.log(error);
  }
};

export const rejectEventReq = async payload => {
  try {
    const res = await axiosReq.post('/admin/rejectReq', payload);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const removeEventReq = async payload => {
  try {
    const res = await axiosReq.post('/admin/removeReq', payload);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
    console.log(error);
  }
};
export const acceptEventReq = async payload => {
  try {
    const res = await axiosReq.post('/admin/acceptReq', payload);
    console.log(res);
    return res;
  } catch (error) {
    console.log('');
    console.log(error);
  }
};
