import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';  
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: '1',
      })
      gsap.to(panelCloseRef.current, {
        opacity: '1',
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: '0',
      })
      gsap.to(panelCloseRef.current, {
        opacity: '0',
      })
    }
  },[panelOpen])

  return (
    <div className='h-screen relative'>
      <img className="w-16 absolute top-2 left-2" src='logo.png' alt='logo' ></img>
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}}><i className="ri-arrow-down-wide-line absolute top-0 right-0 p-5 text-2xl"></i></h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e)=>{submitHandler(e)}}>
            <div className="relative mt-3">
              {/* Dotted line connecting the pins */}
              <div className="absolute h-12 w-0.5 top-[47%] left-5 -translate-y-1/2 border-l-2 border-dashed border-gray-300"></div>
              {/* Pickup location with green pin */}
              <div className="relative flex items-center">
                <i className="ri-user-location-fill absolute left-4 text-green-500 text-xl"></i>
                <input 
                  onClick={()=>{setPanelOpen(true)}}
                  className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full' 
                  type='text' 
                  value={pickup}  
                  onChange={(e)=>{setPickup(e.target.value)}} 
                  placeholder='Enter your pickup location' 
                />
              </div>
              {/* Destination with red pin */}
              <div className="relative flex items-center mt-2">
                <i className="ri-map-pin-2-fill absolute left-4 text-red-500 text-xl"></i>
                <input 
                  onClick={()=>{setPanelOpen(true)}}
                  className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full' 
                  type='text' 
                  value={destination}
                  onChange={(e)=>{setDestination(e.target.value)}}
                  placeholder='Enter your destination' 
                />
              </div>
            </div>
          </form>
        </div>
        <div ref={panelRef} className='bg-red-500 h-[0%] opacity-0'>
          <LocationSearchPanel/>
        </div>
      </div>
    </div>
  );
};

export default Home;