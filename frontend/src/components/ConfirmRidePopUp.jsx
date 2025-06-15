import React from "react";
import { Link } from "react-router-dom";

function ConfirmRidePopUp(props) {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-4">Confirm Ride to Start</h3>
      <div className="flex items-center justify-between p-2 bg-yellow-400 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-r-full object-cover"
            src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg"
            alt=""
          />
          <h2 className="text-xl font-lg">Ronaldo Jr.</h2>
        </div>
        <h5 className="text-lg font-semibold ">2.2Km</h5>
      </div>
      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-[#eee]">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 -mt-1.5">Kankariya Talab, Indore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-[#eee]">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 -mt-1.5">Kankariya Talab, Indore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.48</h3>
              <p className="text-gray-600 -mt-1.5">Amount to be paid</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form onSubmit={(e)=>submitHandler(e)}>
            <input 
              type="text" 
              className='bg-[#eee] px-4 py-2 font-mono text-base rounded-lg w-full mb-4' 
              placeholder="Enter OTP"
            />
            <div className="flex gap-4">
              <Link
                to="/captain-riding"
                onClick={() => {
                  props.setConfirmRidePanel(false);
                }}
                className="flex-1 bg-green-500 text-white font-semibold p-2 rounded-lg text-center"
              >
                Confirm
              </Link>
              <button
                onClick={() => {
                  props.setConfirmRidePopUpPanel(false);
                  props.setRidePopUpPanel(false);
                }}
                className="flex-1 bg-red-500 text-white font-semibold p-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRidePopUp;
