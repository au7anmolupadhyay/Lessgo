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
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current, {
        height: '70vh',
        opacity: '1',
      })
      gsap.to(panelCloseRef.current, {
        opacity: '1',
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0vh',
        opacity: '0',
      })
      gsap.to(panelCloseRef.current, {
        opacity: '0',
      })
    }
  },[panelOpen])


  useGSAP(()=>{
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)',
        opacity: '1',
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)',
        opacity: '0',
      })
    }
  },[vehiclePanelOpen]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-16 absolute top-2 left-2" src='logo.png' alt='logo' ></img>
      <div className='h-screen w-screen'>
        <img className='w-full h-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'></img>
      </div>
      <div className='absolute bottom-0 w-full'>
        <div className='bg-white'>
          <div className='p-5'>
            <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className='absolute top-0 right-0 p-5'>
              <i className="ri-arrow-down-wide-line text-2xl"></i>
            </h5>
            <h4 className='text-2xl font-semibold'>Find a ride</h4>
            <form onSubmit={(e)=>{submitHandler(e)}}>
              <div className="relative mt-3">
                <div className="absolute h-12 w-0.5 top-[47%] left-5 -translate-y-1/2 border-l-2 border-dashed border-gray-300"></div>
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
          <div ref={panelRef} className='h-0 overflow-hidden bg-white'>
            <LocationSearchPanel setPanelOpen={} setVehiclePanelOpen={setVehiclePanelOpen}/>
          </div>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full p-3 bg-white px-3 py-8'>
      <h5 className='p-3 text-center w-[93%] absolute top-0' onClick={()=>{setVehiclePanelOpen(false)}}><i className="ri-arrow-down-wide-fill"></i></h5>
        <h3 className='text-2xl font-semibold mb-3'>Select a ride</h3>
        <div className='flex flex-col gap-3'>
          <div className='flex p-3 border border-gray-300 active:border-black transition-all duration-200 rounded-xl items-center justify-between cursor-pointer'>
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

          <div className='flex p-3 border border-gray-300 active:border-black transition-all duration-200 rounded-xl items-center justify-between cursor-pointer'>
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

          <div className='flex p-3 border border-gray-300 active:border-black transition-all duration-200 rounded-xl items-center justify-between cursor-pointer'>
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
        </div>
      </div>
    </div>
  );
};

export default Home;