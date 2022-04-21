import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/index.js';
import Nav from '../../components/navbar';
import { eventReqUser } from '../../utils/api.js';
import { toast } from 'react-toastify';

const OrganizePage = () => {
  const [formState, setFormState] = useState(0);
  const [eventName, setEventName] = useState('');
  const [discordLink, setDiscordLink] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [about, setAbout] = useState('');
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handelChange = () => {
    setFormState(formState + 1);
  };

  const handelDecChange = () => {
    setFormState(formState - 1);
  };

  const handelSubmit = async e => {
    e.preventDefault();
    const res = await eventReqUser({
      eventName,
      eventType: eventType,
      about: about,
      discordServerLink: discordLink,
      websiteLink,
      eventDate: date,
      location: location,
    });
    if (res.data.success == false) {
      if (res.data.message == 'User in not Authorized') {
        localStorage.removeItem('userToken');
        toast.error('Authentication Error');
        navigate('/login');
      }
    } else {
      toast.success('Event Successfully Added');
      navigate('/');
    }
    console.log(res);
    console.log('handelSubmit');
  };

  return (
    <div className="h-screen w-screen bg-gray-300 overflow-hidden">
      <Nav version={true}></Nav>
      {/* <h1 className="text-3xl text-semiBold">Organize Events</h1> */}
      <form onSubmit={event => handelSubmit(event)} className="h-2/3 w-screen px-20 flex flex-col justify-center">
        <p className="py-5">Fill Out this form and get one step closer to getting your event at our platform.</p>
        <div className="w-full flex flex-col align items-center">
          {formState == 0 ? (
            <div className="w-full">
              {showModal == true ? <Modal setShowModal={setShowModal}></Modal> : null}
              <button type="button" className="text-xs" onClick={() => setShowModal(true)}>
                Know about best practice
              </button>
              <input
                className="w-full px-5 py-3"
                type="text"
                value={eventName}
                onChange={e => setEventName(e.target.value)}
                name="eventName"
                placeholder="Your Event Name"
              ></input>
            </div>
          ) : formState == 1 ? (
            <div className="w-full">
              {showModal == true ? <Modal setShowModal={setShowModal}></Modal> : null}
              <button type="button" className="text-xs" onClick={() => setShowModal(true)}>
                Know about best practice
              </button>
              <input
                className="w-full px-5 py-3"
                type="text"
                value={discordLink}
                name="discordLink"
                onChange={e => setDiscordLink(e.target.value)}
                placeholder="Discord Server Link"
              ></input>
            </div>
          ) : formState == 2 ? (
            <div className="w-full">
              {showModal == true ? <Modal setShowModal={setShowModal}></Modal> : null}
              <button type="button" className="text-xs" onClick={() => setShowModal(true)}>
                Know about best practice
              </button>
              <input
                className="w-full px-5 py-3"
                value={about}
                name="about"
                onChange={e => setAbout(e.target.value)}
                type="text"
                placeholder="Tell us about you event."
              ></input>
            </div>
          ) : formState == 3 ? (
            <div className="w-full">
              {showModal == true ? <Modal setShowModal={setShowModal}></Modal> : null}
              <button type="button" className="text-xs" onClick={() => setShowModal(true)}>
                Know about best practice
              </button>
              <input
                className="w-full px-5 py-3"
                type="text"
                name="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                placeholder="Location"
              ></input>
            </div>
          ) : formState == 4 ? (
            <div className="w-full">
              {showModal == true ? <Modal setShowModal={setShowModal}></Modal> : null}
              <button type="button" className="text-xs" onClick={() => setShowModal(true)}>
                Know about best practice
              </button>
              <input
                className="w-full px-5 py-3"
                type="text"
                name="websiteLink"
                value={websiteLink}
                onChange={e => setWebsiteLink(e.target.value)}
                placeholder="Enter Your Event Website Link"
              ></input>
            </div>
          ) : formState == 5 ? (
            <div className="w-full">
              {showModal == true ? <Modal setShowModal={setShowModal}></Modal> : null}
              <button type="button" className="text-xs" onClick={() => setShowModal(true)}>
                Know about best practice
              </button>
              <input
                className="w-full px-5 py-3"
                type="date"
                name="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                placeholder="Enter Date of Your Event"
              ></input>
            </div>
          ) : formState == 6 ? (
            <div className="w-full">
              {showModal == true ? <Modal setShowModal={setShowModal}></Modal> : null}
              <button type="button" className="text-xs" onClick={() => setShowModal(true)}>
                Know about best practice
              </button>
              <input
                className="w-full px-5 py-3"
                type="text"
                name="eventType"
                value={eventType}
                onChange={e => setEventType(e.target.value)}
                placeholder="Your Event Type."
              ></input>
            </div>
          ) : null}
        </div>

        {formState == 6 ? (
          <div className="flex justify-between mt-20">
            <button
              className="px-5 py-2 bg-blue-300 border-0 rounded-xl"
              type="button"
              id="3"
              onClick={e => handelDecChange(e)}
            >
              Prev
            </button>

            <button type="submit" id="2" className="px-5 py-2 bg-blue-300 border-0 rounded-xl">
              Submit
            </button>
          </div>
        ) : (
          <div className="flex justify-between mt-20">
            <button
              className="px-5 py-2 bg-blue-300 border-0 rounded-xl"
              type="button"
              id="3"
              onClick={e => handelDecChange(e)}
            >
              Prev
            </button>

            <button
              type="button"
              id="5"
              className="px-5 py-2  bg-blue-300 border-0 rounded-xl"
              onClick={e => handelChange(e)}
            >
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default OrganizePage;
