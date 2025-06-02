import React from 'react';
import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = () => {
  return (
    <div className='pt-1'>
      <div className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer'>
        <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
          <i className="ri-map-pin-line text-gray-600"></i>
        </div>
        <h4 className='text-[15px] text-gray-700'>24B, Near Kapoor's Cafe, Sheriyans School, Jaipur</h4>
      </div>
      <div className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer'>
        <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
          <i className="ri-map-pin-line text-gray-600"></i>
        </div>
        <h4 className='text-[15px] text-gray-700'>Central Park Mall, Shopping District, Malviya Nagar</h4>
      </div>
      <div className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer'>
        <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
          <i className="ri-map-pin-line text-gray-600"></i>
        </div>
        <h4 className='text-[15px] text-gray-700'>Jaipur International Airport, Terminal 2, Airport Road</h4>
      </div>
      <div className='flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer'>
        <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
          <i className="ri-map-pin-line text-gray-600"></i>
        </div>
        <h4 className='text-[15px] text-gray-700'>Tech Park, Electronic City, Sitapura</h4>
      </div>
    </div>
  );
};

export default LocationSearchPanel;