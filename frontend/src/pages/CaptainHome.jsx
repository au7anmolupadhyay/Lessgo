import React from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';

const CaptainHome = () => {
    return (
        <div className="h-screen flex flex-col">
            <img className="w-16 absolute top-2 left-2" src='logo.png' alt='logo' ></img>
      <Link to='/captain-home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
      </Link>
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>
      <div className='h-2/5 p-6 flex flex-col justify-between'>
        <CaptainDetails/>
      </div>
    </div>
    )
}
export default CaptainHome;