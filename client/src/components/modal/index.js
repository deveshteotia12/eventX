import { React } from 'react';

const Modal = ({ setShowModal }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5  border-gray-300 rounded-t ">
            <button className="bg-transparent border-0 text-black float-right" onClick={() => setShowModal(false)}>
              <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">x</span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <p>1) This is just a modal</p>
            <p>2) THis is one more modal</p>
            <p>3) This is nothing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
