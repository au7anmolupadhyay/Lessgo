import React from 'react'

function CaptainDetails() {
  return (
    <div>
        <div className='flex items-center justify-between mb-6'>
            <div className='flex items-center gap-4'>
                <img className='h-14 w-14 rounded-full object-cover' src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?semt=ais_hybrid&w=740" alt="Driver Avatar" />
                <div>
                    <h4 className='text-xl font-medium'>Harsh Patel</h4>
                    <p className='text-sm text-gray-600'>Driver</p>
                </div>
            </div>
            <div className='text-right'>
                <h4 className='text-2xl font-semibold'>₹295.3</h4>
                <p className='text-sm bg-gray-200 px-2 py-0.5 rounded-full inline-block'>Earned Today</p>
            </div>
        </div>

        <div className='flex justify-around gap-4 text-center mt-auto py-4 bg-gray-100 rounded-lg'>
            <div className='flex flex-col items-center flex-1'>
                <i className="text-3xl text-gray-700 ri-time-line"></i>
                <h5 className='text-xl font-semibold mt-1'>10.2</h5>
                <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='flex flex-col items-center flex-1'>
                <i className="text-3xl text-gray-700 ri-star-fill"></i>
                <h5 className='text-xl font-semibold mt-1'>4.8</h5>
                <p className='text-sm text-gray-600'>Ratings</p>
            </div>
            <div className='flex flex-col items-center flex-1'>
                <i className="text-3xl text-gray-700 ri-road-map-line"></i>
                <h5 className='text-xl font-semibold mt-1'>15</h5>
                <p className='text-sm text-gray-600'>Trips</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainDetails