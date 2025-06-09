import React from 'react';
import { Link } from 'react-router-dom';

const CaptainHome = () => {
    return (
        <div className="h-screen flex flex-col">
      <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-4-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>
      <div className="h-1/2 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <img
            className="h-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt="vehicle"
          />
          <div className="text-right">
            <h2 className="text-xl font-medium">Sarthak</h2>
            <h4 className="text-2xl font-semibold">MP04 AB1234</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <i className="ri-map-pin-user-fill text-xl text-gray-600"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-gray-600">Kankariya Talab, Indore</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <i className="ri-money-rupee-circle-fill text-xl text-gray-600"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.48</h3>
                <p className="text-gray-600">Amount to be paid</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-green-500 text-white font-semibold p-4 rounded-lg text-lg hover:bg-green-600 transition-colors">
            Make a Payment
          </button>
        </div>
      </div>
    </div>
    )
}
export default CaptainHome;