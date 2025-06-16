import React from 'react';
import { Link } from 'react-router-dom';

function FinishRide(props) {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-4">Ride Completed!</h3>
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
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600 -mt-1.5">Kankariya Talab, Indore</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.48</h3>
              <p className="text-gray-600 -mt-1.5">Amount earned</p>
            </div>
          </div>
        </div>
        <Link
          to="/captain-home"
          className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default FinishRide;