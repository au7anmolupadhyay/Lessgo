import React from 'react'

function VehiclePanel(props) {
  return (
    <div><h5 className='p-3 text-center w-[93%] absolute top-0' onClick={()=>{props.setVehiclePanelOpen(false)}}><i className="ri-arrow-down-wide-fill"></i></h5>
    <h3 className='text-2xl font-semibold mb-3'>Select a ride</h3>
    <div className='flex flex-col gap-3'>

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex p-3 border border-gray-300 active:border-black transition-all duration-200 rounded-xl items-center justify-between cursor-pointer'>
        <div className='w-24 h-24 flex items-center'>
          <img className='w-full object-contain' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png'></img>
        </div>
        <div className='w-1/2'>
          <h4 className='text-m font-medium'>LessGoo Cab <span className='ml-2'><i className="ri-user-3-fill"></i>4</span></h4>
          <h5 className='text-sm font-medium'>2 mins away</h5>
          <p className='text-xs font-medium text-gray-600'>Affordable & Comfortable Ride</p>
        </div>
        <h2 className='text-2xl font-semibold'>
          ₹198.05
        </h2>
      </div>

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex p-3 border border-gray-300 active:border-black transition-all duration-200 rounded-xl items-center justify-between cursor-pointer'>
        <div className='w-24 h-24 flex items-center'>
          <img className='w-full object-contain' src='https://centralization-images.s3.ap-south-1.amazonaws.com/OLA_Adventure_Right_dbd9705a84.png'></img>
        </div>
        <div className='w-1/2'>
          <h4 className='text-m font-medium'>LessGoo Moto <span className='ml-2'><i className="ri-user-3-fill"></i>2</span></h4>
          <h5 className='text-sm font-medium'>4 mins away</h5>
          <p className='text-xs font-medium text-gray-600'>Affordable & Comfortable Ride</p>
        </div>
        <h2 className='text-2xl font-semibold'>
          ₹128.78
        </h2>
      </div>

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className='flex p-3 border border-gray-300 active:border-black transition-all duration-200 rounded-xl items-center justify-between cursor-pointer'>
        <div className='w-24 h-24 flex items-center'>
          <img className='w-full object-contain' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'></img>
        </div>
        <div className='w-1/2'>
          <h4 className='text-m font-medium'>LessGoo Auto <span className='ml-2'><i className="ri-user-3-fill"></i>3</span></h4>
          <h5 className='text-sm font-medium'>2 mins away</h5>
          <p className='text-xs font-medium text-gray-600'>Affordable & Comfortable Ride</p>
        </div>
        <h2 className='text-2xl font-semibold'>
          ₹158.05
        </h2>
      </div>
    </div></div>
  )
} 

export default VehiclePanel;