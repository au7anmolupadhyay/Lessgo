import React from "react";

function WaitingForDriver(props) {
  return (
    <div>
      <h5
        className="p-3 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.WaitingForDriver(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
        ></img>
        <div className="text-right ">
          <h2 className="text-lg font-medium">Sarthak</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
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
      </div>
    </div>
  );
}

export default WaitingForDriver;
