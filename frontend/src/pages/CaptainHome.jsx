import React from 'react';
import { Link } from 'react-router-dom';

const CaptainHome = () => {
    return (
        <div className="h-screen flex flex-col">
            <img className="w-16 absolute top-2 left-2" src='logo.png' alt='logo' ></img>
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
      <div className='h-1/2 p-4'>
        <div>
            <div>
                <img src="" alt="" />
                <h4>Harsh Patel</h4>
                <div>
                    <h4>₹295.3</h4>
                    <p>Earned</p>
                </div>
            </div>
            <div>
                <div>
                <i className="ri-time-line"></i>
                </div>
                <div>
                <i className="ri-speed-up-line"></i>
                </div>
                <div>
                <i className="ri-book-2-line"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}
export default CaptainHome;