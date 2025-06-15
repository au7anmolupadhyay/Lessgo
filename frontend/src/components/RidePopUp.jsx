import React from 'react'

function RidePopUp(props) {
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
      <h3 className="text-2xl font-semibold mb-4">New Ride Available!</h3>
      <div className='flex items-center justify-between p-2 bg-[#ecf8f8] rounded-lg'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 rounded-r-full object-cover' src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="" />
            <h2 className='text-xl font-lg'>Ronaldo Jr.</h2>
        </div>
        <h5 className='text-lg font-semibold '>2.2Km</h5>
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
        <button onClick={()=>{
         props.setConfirmRidePanel(false)}} className="w-full mt-5 bg-green-500 text-white font-semibold p-2 rounded-lg">
          Confirm
        </button>
        <button onClick={()=>{props.setRidePopUpPanel(false)}} className="w-full bg-gray-200 text-gray-700 font-semibold p-2 rounded-lg">
          Ignore
        </button>
      </div>
    </div>
  )
}

export default RidePopUp