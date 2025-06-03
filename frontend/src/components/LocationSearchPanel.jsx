import React from 'react';
import 'remixicon/fonts/remixicon.css';

const LocationSearchPanel = (props) => {
  console.log(props);
  // {sample array for location}
  const locations = [
    "24B, Near Kapoor's Cafe, Sheriyans School, Jaipur",
    "Central Park Mall, Shopping District, Malviya Nagar",
    "Jaipur International Airport, Terminal 2, Airport Road",
    "Tech Park, Electronic City, Sitapura",
    "M.G. Road, Jaipur",
    "C Scheme, Jaipur",
    "Bapu Bazaar, Jaipur",

  ]

  return (
    <div className='pt-1'>
      {locations.map(function(location, index){
        return(
        <div onClick={()=>{props.setVehiclePanelOpen(true); props.setPanelOpen(false)}} key={index} className='flex items-center border-2 rounded-xl mb-1.5 mx-3 active:border-black border-gray-300 gap-3 p-3 hover:bg-gray-100 cursor-pointer'>
          <div className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center'>
            <i className="ri-map-pin-line text-gray-600"></i>
          </div>
          <h4 className='text-[15px] text-gray-700 font-medium'>{location}</h4>
        </div>);
      })}
    </div>
  );
};

export default LocationSearchPanel;