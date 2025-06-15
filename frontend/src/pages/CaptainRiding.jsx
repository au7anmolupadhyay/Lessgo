import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

function CaptainRiding() {
  return (
    <div className="h-screen relative flex flex-col">
      <img
        className="w-16 absolute top-2 left-2"
        src="logo.png"
        alt="logo"
      ></img>
      <Link
        to="/captain-home"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>

      <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-300">
        <h5 className="p-3 text-center absolute inset-x-0 top-0">
          <i className="ri-arrow-up-wide-fill"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 Km away</h4>
        <button className="w-1/2 bg-green-500 text-white font-semibold p-2 rounded-lg">
          {" "}
          Complete Ride
        </button>
      </div>
    </div>
  );
}

export default CaptainRiding;
